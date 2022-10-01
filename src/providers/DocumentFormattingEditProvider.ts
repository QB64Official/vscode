"use strict";
import * as vscode from "vscode";
import * as logFunctions from "../logFunctions";
import { TokenInfo } from "../TokenInfo";

// Code Formatter
// Seems like a good place to find includes and make the double click to open work.
export class DocumentFormattingEditProvider implements vscode.DocumentFormattingEditProvider {
	outputChannnel: any = logFunctions.getChannel(logFunctions.channelType.formatter);
	//regexOperators = /\s+,|\(|\)|\+|-|=|<|>|\[|\]|\/|{|}|`|;|:|\*|:\s+/g;

	/**
	 * Add spaces around the operators
	 * @param code Code Snipette
	 * @returns 
	 */
	private addOperatorSpaces(code: string): string {
		const matches = code.matchAll(/\s+,|\(|\)|\+|-|=|<|>|\[|\]|\/|{|}|`|;|:|\*|:\s+/g);
		if (matches) {
			for (const match of matches) {
				code = code.replaceAll(match[0], ` ${match[0]} `);
			}
		}
		return code;
	}

	/**
	 * Is the line of code a single line if
	 * @param lowerLine 
	 * @returns 
	 */
	private isSingleLineIf(lowerLine: string): boolean {

		if (!lowerLine.startsWith("if") || lowerLine.replace("\r", "").endsWith("then")) {
			return false
		}
		const work = lowerLine.substring(lowerLine.indexOf("'", lowerLine.indexOf("then")));
		if (work.match(/then\s*'/)) {
			return false;
		}
		return true;
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

	/**
	 * Should this line of code get processed.
	 * @param lowerLine 
	 * @returns 
	 */
	private shouldProcessLine(lowerLine: string) {
		return !(lowerLine.startsWith("rem") || lowerLine.startsWith("'"));
	}

	/**
	 * Format all the elements in the array.
	 * @param words 
	 * @param tokenCache 
	 */
	private formatArray(words: string[], tokenCache: Map<string, TokenInfo>) {
		for (let index = 0; index < words.length; index++) {
			words[index] = words[index].trim();
			if (words[index].length < 1 || words[index].trim().toLowerCase().startsWith("rem") || words[index].trim().startsWith("'")) {
				continue;
			}
			words[index] = this.formatWord(words[index], tokenCache);
		}
	}

	private cleanUpCode(code: string): string {
		code = code.replaceAll(/\s*-\s*/g, "-")
			.replaceAll(/\s*:\s*/g, " : ")
			.replaceAll(/\s*;\s*/g, ";")
			.replaceAll(/\s*,\s*/g, ",").replaceAll(",", ", ")
			.replaceAll(/\s*\(\s*/g, "(")
			.replaceAll(/\s*\)\s*/g, ") ")
			.replaceAll(/\s*\) \)/g, "))")
			.replaceAll("=", " = ")
			.replaceAll(/\s*\*\s*/g, " * ")
			.replaceAll(") ,", "),")
			.replaceAll(/<\s*\=/g, " <= ")
			.replaceAll(/>\s*\=/g, " >= ")
			.replaceAll(/\s\s+/g, " ")
			.replace(/^put\(/i, "put (")
			.replace(/-(?=[A-Za-z])/i, "- ");

		if (code.toLowerCase().startsWith("defint")) {
			code = code.replace(/\s*-\s*/, '-');
		} else if (code.toLowerCase().startsWith("$resize")) {
			code = code.replace(/\s*:\s*/, ':');
		}


		return code.trim();
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

				if (this.shouldProcessLine(lowerLine)) {


					if (newLine.endsWith(";") && lowerLine.indexOf("print") < 0) {
						do {
							newLine = newLine.substring(0, newLine.length - 1).trimEnd();
						} while (newLine.endsWith(";"))
					}

					// newLine = newLine.replaceAll(/\s+,|\(|\)|\+|-|=|<|>|\[|\]|{|}|`|;|\*|:\s+/g, " $1 ");
					// This just puts $1 in the code not the match WTF 😒

					// let matches = lineOfCode.matchAll(/(?<=rgb|rgb32)(\()[ 0-9]+(,[ 0-9]+)+(,[ 0-9]+)+(\))/ig);

					if (lowerLine.indexOf('"') > -1 && !lowerLine.match(/(?<='|rem)"/i)) {
						logFunctions.writeLine("In Quote", this.outputChannnel);
						const start: number = newLine.indexOf('"') - 1;
						logFunctions.writeLine(`Start: ${start} | words = ${newLine.substring(0, start)}`, this.outputChannnel);
						logFunctions.writeLine(`       ${newLine}`, this.outputChannnel);

						let words: string[] = this.addOperatorSpaces(newLine.substring(0, start)).split(" ");
						this.formatArray(words, tokenCache);
						logFunctions.writeLine(`words2 = ${words.join(" ")}`, this.outputChannnel);
						const work = this.cleanUpCode(words.join(" "));
						newLine = work + newLine.substring(start);

					} else {
						newLine = this.addOperatorSpaces(newLine);
						let words: string[] = newLine.split(" ");
						this.formatArray(words, tokenCache);
						newLine = this.cleanUpCode(words.join(" "));

						if (!lowerLine.startsWith("data")) {
							newLine = newLine.replaceAll(/(?<=[0-9])-/g, " - ")
						} else {
							if (newLine.startsWith("data-")) {
								newLine = newLine.replace("data-", "data -");
							}
						}
					}

					newLine = newLine.trim();

					if (lineNumber > 0 && document.lineAt(lineNumber - 1).text.trim().endsWith("_")) {
						newLine = `${indent}${newLine}`;
					}
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

	private formatWord(word: string, tokenCache: Map<string, TokenInfo>): string {
		// TODO: Break the following code out to a function so strings can be handled.

		if (word != ")" && (word != "(") && (word != "+") && (word != "-") && (word != "*") && (word != "=") && word != ":" && (word != ";")) {
			let tokenInfo: TokenInfo = null;
			if (tokenCache.has(word.toLowerCase())) {
				tokenInfo = tokenCache.get(word.toLowerCase());
			} else {
				tokenInfo = new TokenInfo(word, this.outputChannnel);
				tokenCache.set(word.toLocaleLowerCase(), tokenInfo);
			}

			if (tokenInfo) {
				return tokenInfo.WordFormatted;
			} else {
				logFunctions.writeLine(`Unable to find ${word}`, this.outputChannnel)
			}
		}
		return word;
	}

}
