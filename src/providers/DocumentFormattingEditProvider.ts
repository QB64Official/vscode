"use strict";
import * as vscode from "vscode";
import * as logFunctions from "../logFunctions";
import { TokenInfo } from "../TokenInfo";

// Code Formatter
// Seems like a good place to find includes and make the double click to open work.
export class DocumentFormattingEditProvider implements vscode.DocumentFormattingEditProvider {

	private isLineIndented(line: string) {
		return line.startsWith("if") || line.startsWith("sub ") || line.startsWith("function ") || line.startsWith("do") || line.startsWith("for ") || line.startsWith("while")
	}

	provideDocumentFormattingEdits(document: vscode.TextDocument, options: vscode.FormattingOptions, token: vscode.CancellationToken): vscode.ProviderResult<vscode.TextEdit[]> {
		let outputChannnel: any = logFunctions.getChannel(logFunctions.channelType.formatter);
		let retvalue: vscode.TextEdit[] = [];

		const config: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration("qb64");

		try {

			if (!config.get("isFormatEnabled")) {
				return null;
			}

			let originalLine: vscode.TextLine;
			let tokenCache = new Map<string, TokenInfo>();
			let level = 0;

			for (let i = 0; i < document.lineCount; i++) {

				if (token.isCancellationRequested) {
					return null;
				}


				originalLine = document.lineAt(i);
				let newLine = originalLine.text.trim();
				const lowerLine = newLine.toLowerCase();

				if (lowerLine == "endif") {
					newLine = "end if";
				}
				else if (lowerLine == "endsub") {
					newLine = "end sub";
				} else if (lowerLine == "endfunction") {
					newLine = "end function";
				}

				if (this.isLineIndented(lowerLine)) {
					level++;
				} else if (lowerLine.startsWith("loop") || lowerLine.startsWith("end if") || lowerLine == "endif" || lowerLine.startsWith("end sub") || lowerLine == "endsub" || lowerLine.startsWith("end function") || lowerLine == "endfunction" || lowerLine == "next" || lowerLine == "wend") {
					level--;
				} else if (newLine.startsWith("? ")) {
					newLine = newLine.replace("? ", "print ");
				}

				if (newLine.endsWith(";") && lowerLine.indexOf("print") < 0) {
					do {
						newLine = newLine.substring(0, newLine.length - 1).trimEnd();
					} while (newLine.endsWith(";"))
				}

				newLine = newLine.replaceAll(",", " , ").replaceAll("=", " = ").replaceAll("(", " ( ").replaceAll(")", " ) ").replace('"', ' "')
				let words: string[] = newLine.split(" ");
				for (let index = 0; index < words.length; index++) {

					if (token.isCancellationRequested) {
						return null;
					}

					let tokenInfo: TokenInfo = null;
					words[index] = words[index].trim();

					if (words[index].length < 1 || words[index].trim().toLowerCase().startsWith("rem") || words[index].trim().startsWith("'")) {
						continue;
					}

					if (words[index].indexOf('"') >= 0) {
						continue;
					}

					if (tokenCache.has(words[index])) {
						tokenInfo = tokenCache.get(words[index]);
					} else {
						tokenInfo = new TokenInfo(words[index]);
						tokenCache.set(words[index], tokenInfo);
					}
					words[index] = tokenInfo.WordFormatted;
					//}									
				}

				newLine = words.join(" ").replaceAll(", ", ",").replaceAll(",", " ,").replaceAll("=", " = ").trim();

				do {
					newLine = newLine.replaceAll(/  /g, " ").replaceAll("( ", "(").replaceAll(" )", ")").replaceAll(" (", "(").replaceAll("( ", "(");
				} while (newLine.indexOf("  ") > 0)


				//logFunctions.writeLine(`${i}: ${originalLine.text} | ${newLine}`, outputChannnel);
				if (level > 0) {
					if (this.isLineIndented(lowerLine)) {
						newLine = `${"\t".repeat(level - 1)}${newLine}`;
					} else {
						newLine = `${"\t".repeat(level)}${newLine}`;
					}
				}

				if (newLine !== originalLine.text) {
					logFunctions.writeLine(`Changing line ${i} from ${originalLine.text} to ${newLine}`, outputChannnel);
					retvalue.push(vscode.TextEdit.replace(originalLine.range, newLine));
				}
			}
		} catch (error) {
			logFunctions.writeLine(`ERROR in provideDocumentFormattingEdits: ${error}`, outputChannnel);
		}
		return retvalue;
	}
}
