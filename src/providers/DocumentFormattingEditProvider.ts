"use strict";
import * as vscode from "vscode";
import * as logFunctions from "../logFunctions";
import { TokenInfo } from "../TokenInfo";

// Code Formatter
// Seems like a good place to find includes and make the double click to open work.
export class DocumentFormattingEditProvider implements vscode.DocumentFormattingEditProvider {

	/**
	 * Is the line of code a single line if
	 * @param lowerLine 
	 * @returns 
	 */
	private isSingleLineIf(lowerLine: string): boolean {
		return lowerLine.startsWith("if") && lowerLine.indexOf(" then ") > 0 && !lowerLine.replace("\r", "").endsWith("then");
	}

	/**
	 * Should the line be indented
	 * @param lowerLine 
	 * @returns 
	 */
	private shouldIndentLine(lowerLine: string): boolean {
		return lowerLine.startsWith("if ") || lowerLine.startsWith("sub ") || lowerLine.startsWith("function ") || lowerLine == "do" || lowerLine.startsWith("do ") || lowerLine.startsWith("for ") || lowerLine.startsWith("while") || lowerLine.startsWith("type ") || lowerLine.startsWith("select ")
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
		let outputChannnel: any = logFunctions.getChannel(logFunctions.channelType.formatter);
		let retvalue: vscode.TextEdit[] = [];
		const operators = '(+-=<>[{}]`);:.,';
		const qb64Config: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration("qb64");
		const vscodeConig: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration("editor")
		const indent = vscodeConig.get("insertSpaces") ? " ".repeat(vscodeConig.get("tabSize")) : "\t"

		if (indent == "\t") {
			logFunctions.writeLine("Indent using tabs", outputChannnel);
		} else {
			logFunctions.writeLine(`Indent using spaces (${indent.length})`, outputChannnel);
		}

		// "editor.tabSize": 4,
		// "editor.insertSpaces": false,
		// const indent = "\t";

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

				/*
				if (lineNumber > 240 && lineNumber < 260) {
					logFunctions.writeLine(`Line ${lineNumber} | Indent: ${level} | isSingleLineIf: ${this.isSingleLineIf(lowerLine)} | Code: ${lowerLine}`, outputChannnel);
				}
				*/

				if (!(this.isSingleLineIf(lowerLine))) {
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

					for (let opInder = 0; opInder < operators.length; opInder++) {
						const operator = operators[opInder];
						newLine.replaceAll(operator, ` ${operator} `);
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

						if (operators.indexOf(words[index]) < 0) {
							let tokenInfo: TokenInfo = null;
							if (tokenCache.has(words[index].toLowerCase())) {
								tokenInfo = tokenCache.get(words[index].toLowerCase());
							} else {
								tokenInfo = new TokenInfo(words[index], outputChannnel);
								tokenCache.set(words[index].toLocaleLowerCase(), tokenInfo);
							}

							if (tokenInfo) {
								words[index] = tokenInfo.WordFormatted;
							} else {
								logFunctions.writeLine(`Line: ${lineNumber} | Unable to find ${words[index]}`, outputChannnel)
							}
						}
					}

					if (lowerLine.startsWith("defint")) {
						newLine = newLine.replace(" - ", "-");
					} else {

						// Leaving (-) for now.  The user can handle them.
						newLine = words.join(" ")
							.replaceAll(/\s*([=*/,+-\=\(\)]\.)\s*/g, "$1")
							.replaceAll("=", " = ")
							.replaceAll("+", " + ")
							.replaceAll(",", ", ")
							.replaceAll(/\s\s+/g, " ")

						// Handles negtive number
						//newLine = newLine.replaceAll(/[s+]-[s+]/g, "-").replaceAll("-", " -");

						// Handles substraction
						// newLine = newLine.replaceAll(/-(?=\D)|(?<=\D)(?<!^)-/g, "-").replaceAll("-", " - ");	

					}

				}

				if (level > 0) {
					if ((this.shouldIndentLine(lowerLine) || lowerLine.startsWith("case ") || lowerLine.startsWith("else")) && !this.isSingleLineIf(lowerLine)) {
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
			logFunctions.writeLine(`ERROR in provideDocumentFormattingEdits: ${error}`, outputChannnel);
		}
		return retvalue;
	}
}
