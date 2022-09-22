"use strict";
import * as vscode from "vscode";
import * as logFunctions from "../logFunctions";
import { TokenInfo } from "../TokenInfo";

// Code Formatter
// Seems like a good place to find includes and make the double click to open work.
export class DocumentFormattingEditProvider implements vscode.DocumentFormattingEditProvider {

	/**
	 * Should the line be indented
	 * @param lowerLine 
	 * @returns 
	 */
	private shouldIndentLine(lowerLine: string) {
		return lowerLine.startsWith("if") || lowerLine.startsWith("sub ") || lowerLine.startsWith("function ") || lowerLine.startsWith("do") || lowerLine.startsWith("for ") || lowerLine.startsWith("while") || lowerLine.startsWith("type ") || lowerLine.startsWith("select ")
	}

	/**
	 * Should the line be indent be removed
	 * @param lowerLine 
	 * @returns 
	 */
	private shouldRemoveLineIndent(lowerLine: string) {
		return lowerLine.startsWith("loop") || lowerLine.startsWith("end if") || lowerLine == "endif" || lowerLine.startsWith("end sub") || lowerLine == "endsub" || lowerLine.startsWith("end function") || lowerLine == "endfunction" || lowerLine == "next" || lowerLine == "wend" || lowerLine == "end type" || lowerLine == "endtype" || lowerLine == "end select" || lowerLine == "endselect"
	}

	provideDocumentFormattingEdits(document: vscode.TextDocument, options: vscode.FormattingOptions, token: vscode.CancellationToken): vscode.ProviderResult<vscode.TextEdit[]> {
		let outputChannnel: any = logFunctions.getChannel(logFunctions.channelType.formatter);
		let retvalue: vscode.TextEdit[] = [];

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

			for (let i = 0; i < document.lineCount; i++) {

				if (token.isCancellationRequested) {
					return null;
				}

				let originalLine: vscode.TextLine = document.lineAt(i);
				let newLine = originalLine.text.trim();
				const lowerLine = newLine.toLowerCase();

				if (lowerLine.startsWith("rem") || lowerLine.startsWith("'")) {
					continue;
				}

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
				}

				if (this.shouldIndentLine(lowerLine)) {
					logFunctions.writeLine(`Add Indent: ${lowerLine}`, outputChannnel);
					level++;
				} else if (this.shouldRemoveLineIndent(lowerLine)) {
					logFunctions.writeLine(`Remove Indent: ${lowerLine}`, outputChannnel);
					level--;
				} else if (newLine.startsWith("? ")) {
					newLine = newLine.replace("? ", "print ");
				} else if (lowerLine.startsWith("case") && !inCase) {
					inCase = true;
					level++
				}

				if (lowerLine.startsWith("end select") || lowerLine.startsWith("endselect")) {
					if (inCase) {
						inCase = false;
						level--
					}
				}

				if (newLine.endsWith(";") && lowerLine.indexOf("print") < 0) {
					do {
						newLine = newLine.substring(0, newLine.length - 1).trimEnd();
					} while (newLine.endsWith(";"))
				}

				newLine = newLine.replaceAll(",", " , ").replaceAll("=", " = ").replaceAll("(", " ( ").replaceAll(")", " ) ").replace('"', ' "').replaceAll("+", " + ").replaceAll("-", " - ").replaceAll("*", " * ").replaceAll("/", " / ");
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

					let tokenInfo: TokenInfo = null;
					if (tokenCache.has(words[index])) {
						tokenInfo = tokenCache.get(words[index]);
					} else {
						tokenInfo = new TokenInfo(words[index], outputChannnel);
						tokenCache.set(words[index], tokenInfo);
					}
					words[index] = tokenInfo.WordFormatted;
				}

				newLine = words.join(" ")
					.replaceAll("( ", "(")
					.replaceAll(" (", "(")
					.replaceAll(") ", ")")
					.replaceAll(" )", ")")
					.replaceAll(", ", ",")
					.replaceAll(",", " ,")
					.replaceAll("=", " = ")
					.replaceAll("+", " + ")
					.replaceAll("-", " - ")
					.replaceAll("*", " * ")
					.replaceAll("/", " / ").trim();


				// const search = /\s\s+/g; // Good
				// const search = /  (?!")\s\s+/g;
				// const search = /(?!")\s\s+/g; // Not Good

				const search = /(?!")\s{2}/g; // Iffy

				//const search = new RegExp("s/(\".*\")|\s*/\1 ", "g");

				do {
					newLine = newLine.replaceAll(search, " ");
				} while (newLine.match(search))

				/*
				do {
					// newLine = newLine.replaceAll(/  /g, " ");
					newLine = newLine.replaceAll(/(?<!=")(  )/g, " ");
				} while (newLine.indexOf("  ") > 0)
				*/

				if (level > 0) {
					if (this.shouldIndentLine(lowerLine) || lowerLine.startsWith("case ") || lowerLine.startsWith("else")) {
						newLine = `${indent.repeat(level - 1)}${newLine}`;
					} else {
						newLine = `${indent.repeat(level)}${newLine}`;
					}
				}

				if (newLine !== originalLine.text) {
					// logFunctions.writeLine(`Changing line ${i} from ${originalLine.text} to ${newLine}`, outputChannnel);
					retvalue.push(vscode.TextEdit.replace(originalLine.range, newLine));

				}
			}
		} catch (error) {
			logFunctions.writeLine(`ERROR in provideDocumentFormattingEdits: ${error}`, outputChannnel);
		}
		return retvalue;
	}
}
