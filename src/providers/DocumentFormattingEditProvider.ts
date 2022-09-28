"use strict";
import * as vscode from "vscode";
import * as logFunctions from "../logFunctions";
import { TokenInfo } from "../TokenInfo";

// Code Formatter
// Seems like a good place to find includes and make the double click to open work.
export class DocumentFormattingEditProvider implements vscode.DocumentFormattingEditProvider {
	outputChannnel: any = logFunctions.getChannel(logFunctions.channelType.formatter);


	/**
	 * Is the line of code a single line if
	 * @param lowerLine 
	 * @returns 
	 */
	private isSingleLineIf(lowerLine: string): boolean {

		if (!lowerLine.startsWith("if") || lowerLine.replace("\r", "").endsWith("then")) {
			return false
		}

		const spot = lowerLine.indexOf("'", lowerLine.indexOf("then"));
		const work = lowerLine.substring(spot);
		logFunctions.writeLine(`Work: ${work}`, this.outputChannnel)
		if (work.match(/then\s*'/)) {
			return false;
		}
		return true;

		/*
				if (lowerLine.indexOf("'", lowerLine.indexOf("then")) > 0) {
					logFunctions.writeLine(`Line: ${lowerLine}`, this.outputChannnel)
					return true;
				} else {
					logFunctions.writeLine(`Line: ${lowerLine} | Spot: ${lowerLine.indexOf("'", lowerLine.indexOf("then"))}`, this.outputChannnel)
					return false;
				}
		*/
	}

	/**
	 * Should the line be indented
	 * @param lowerLine 
	 * @returns 
	 */
	private shouldIndentLine(lowerLine: string): boolean {
		return lowerLine.startsWith("if ")
			|| lowerLine.startsWith("if(")
			|| lowerLine.startsWith("sub ")
			|| lowerLine.startsWith("function ")
			|| lowerLine == "do"
			|| lowerLine.startsWith("do ")
			|| lowerLine.startsWith("for ")
			|| lowerLine.startsWith("while")
			|| lowerLine.startsWith("type ")
			|| lowerLine.startsWith("select ")
	}

	/**
	 * Should the line be indent be removed
	 * @param lowerLine 
	 * @returns 
	 */
	private shouldRemoveLineIndent(lowerLine: string) {
		return lowerLine == "loop" || lowerLine.startsWith("loop ") || lowerLine.startsWith("end if") || lowerLine == "endif" || lowerLine.startsWith("end sub") || lowerLine == "endsub" || lowerLine.startsWith("end function") || lowerLine == "endfunction" || lowerLine == "next" || lowerLine == "wend" || lowerLine == "end type" || lowerLine == "endtype" || lowerLine == "end select" || lowerLine == "endselect" || lowerLine == "next" || lowerLine.startsWith("next ");
	}

	private shouldProcessLine(lowerLine: string) {
		return !(lowerLine.startsWith("rem") || lowerLine.startsWith("'") || lowerLine.lastIndexOf('"') >= 0);
	}


	provideDocumentFormattingEdits(document: vscode.TextDocument, options: vscode.FormattingOptions, token: vscode.CancellationToken): vscode.ProviderResult<vscode.TextEdit[]> {
		let retvalue: vscode.TextEdit[] = [];
		// const operators = ",(+-=<>[{}]`);:.";
		const qb64Config: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration("qb64");
		const vscodeConig: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration("editor")
		const indent = vscodeConig.get("insertSpaces") ? " ".repeat(vscodeConig.get("tabSize")) : "\t"

		if (indent == "\t") {
			logFunctions.writeLine("Indent using tabs", this.outputChannnel);
		} else {
			logFunctions.writeLine(`Indent using spaces (${indent.length})`, this.outputChannnel);
		}

		try {

			if (!qb64Config.get("isFormatEnabled")) {
				return null;
			}

			let tokenCache = new Map<string, TokenInfo>();
			let level: number = 0;
			let inCase: boolean = false;

			for (let lineNumber = 0; lineNumber < document.lineCount; lineNumber++) {

				if (token.isCancellationRequested) {
					return null;
				}

				let originalLine: vscode.TextLine = document.lineAt(lineNumber);
				let newLine = originalLine.text.trim();
				const lowerLine = newLine.toLowerCase();
				const isSingleLineIf: boolean = this.isSingleLineIf(lowerLine);

				if (lowerLine == "endif") {
					newLine = "end if";
				} else if (lowerLine == "endsub") {
					newLine = "end sub";
				} else if (lowerLine == "endfunction") {
					newLine = "end function";
				} else if (lowerLine == "endtype") {
					newLine = "end type";
				} else if (lowerLine == "endselect") {
					newLine = "end select";
				} else if (newLine.startsWith("? ")) {
					newLine = newLine.replace("? ", "print ");
				}

				if (!isSingleLineIf) {
					if (this.shouldIndentLine(lowerLine)) {
						// logFunctions.writeLine(`Indent: ${lowerLine}`, outputChannnel);
						level++;
					} else if (this.shouldRemoveLineIndent(lowerLine)) {
						level--;
					} else if (lowerLine.startsWith("case ") && !inCase) {
						inCase = true;
						level++
					}

					if (lowerLine.startsWith("end select") || lowerLine.startsWith("endselect")) {
						if (inCase) {
							inCase = false;
							level--
						}
					}
				}

				if (!this.shouldProcessLine(lowerLine)) {
					continue
				}

				if (newLine.endsWith(";") && lowerLine.indexOf("print") < 0) {
					do {
						newLine = newLine.substring(0, newLine.length - 1).trimEnd();
					} while (newLine.endsWith(";"))
				}

				// newLine = newLine.replaceAll(/\s+,|\(|\)|\+|-|=|<|>|\[|\]|{|}|`|;|\*|:\s+/g, " $1 ");
				// This just puts $1 in the code not the match WTF 😒
				const matches = newLine.matchAll(/\s+,|\(|\)|\+|-|=|<|>|\[|\]|\/|{|}|`|;|:|\*|:\s+/g);
				if (matches) {
					for (const match of matches) {
						newLine = newLine.replaceAll(match[0], ` ${match[0]} `);
					}
				}

				let words: string[] = newLine.split(" ");

				for (let index = 0; index < words.length; index++) {

					if (token.isCancellationRequested) {
						return null;
					}

					words[index] = words[index].trim();

					if (words[index].length < 1 || words[index].trim().toLowerCase().startsWith("rem") || words[index].trim().startsWith("'")) {
						continue;
					}

					if (words[index].indexOf('"') >= 0) {
						continue;
					}

					// TODO: Break the following code out to a function so strings can be handled.

					if (words[index] != ")" && (words[index] != "(") && (words[index] != "+") && (words[index] != "-") && (words[index] != "*") && (words[index] != "=") && (words[index] != ":") && (words[index] != ";")) {
						let tokenInfo: TokenInfo = null;
						if (tokenCache.has(words[index].toLowerCase())) {
							tokenInfo = tokenCache.get(words[index].toLowerCase());
						} else {
							tokenInfo = new TokenInfo(words[index], this.outputChannnel);
							tokenCache.set(words[index].toLocaleLowerCase(), tokenInfo);
						}

						if (tokenInfo) {
							words[index] = tokenInfo.WordFormatted;
						} else {
							logFunctions.writeLine(`Line: ${lineNumber} | Unable to find ${words[index]}`, this.outputChannnel)
						}
					}
				}

				newLine = words.join(" ")
					.replaceAll(/\s*-\s*/g, "-")
					.replaceAll(/\s*:\s*/g, ":")
					.replaceAll(/\s*;\s*/g, ";")
					.replaceAll(/\s*,\s*/g, ",").replaceAll(",", ", ")
					.replaceAll(/\s*\(\s*/g, "(")
					.replaceAll(/\s*\)\s*/g, ") ").replaceAll(") , ", "), ").replaceAll(") )", "))").replaceAll(") ) )", ")))")
					.replaceAll("=", " = ")
					.replaceAll(/<\s*\=/g, " <= ")
					.replaceAll(/>\s*\=/g, " <= ")
					.replaceAll(/\s\s+/g, " ");


				if (!lowerLine.startsWith("data")) {
					newLine = newLine.replaceAll(/(?<=[0-9])-/g, " - ")
				} else {
					logFunctions.writeLine(`Data: ${lowerLine}`, this.outputChannnel)
				}
				newLine = newLine.trim();

				if (lineNumber > 0 && document.lineAt(lineNumber - 1).text.trim().endsWith("_")) {
					newLine = `${indent}${newLine}`;
				}

				if (level > 0) {
					if ((this.shouldIndentLine(lowerLine) || lowerLine.startsWith("case ") || lowerLine.startsWith("else")) && !isSingleLineIf) {
						newLine = `${indent.repeat(level - 1)}${newLine}`;
					} else {
						newLine = `${indent.repeat(level)}${newLine}`;
					}
				}

				if (newLine !== originalLine.text) {
					retvalue.push(vscode.TextEdit.replace(originalLine.range, newLine));
				}
			}

		} catch (error) {
			logFunctions.writeLine(`ERROR in provideDocumentFormattingEdits: ${error}`, this.outputChannnel);
		}
		return retvalue;
	}
}
