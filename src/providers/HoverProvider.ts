"use strict";
import * as vscode from "vscode";
import * as commonFunctions from "../commonFunctions";
import * as logFunctions from "../logFunctions";
import * as fs from "fs";
import { TokenInfo } from "../TokenInfo"

export class HoverProvider implements vscode.HoverProvider {

	outputChannnel = logFunctions.getChannel(logFunctions.channelType.hoverProvider);

	provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Hover> {

		if (!document || !position) {
			return null;
		}

		const config = vscode.workspace.getConfiguration("qb64")
		if (!config.get("isHoverTextFileEnabled")) {
			logFunctions.writeLine("Hovertext is disabled.", this.outputChannnel);
			return null;
		}

		try {
			const keywordInfo = new TokenInfo(commonFunctions.getQB64WordFromDocument(document, position), document.lineAt(position.line).text, this.outputChannnel);
			if (keywordInfo.offlinehelp.length > 0) {
				const markdownString = new vscode.MarkdownString(keywordInfo.getHoverText());
				markdownString.isTrusted = true;
				return new vscode.Hover(markdownString);
			}
			logFunctions.writeLine(`offline hover not found: ${keywordInfo.token}`, this.outputChannnel);

			return this.doSearch(document, keywordInfo.token, token).then(location => {
				if (location) {
					logFunctions.writeLine(`location found for ${keywordInfo.token}`, this.outputChannnel);
					let contents: string = "";
					const sourcecode: string[] = fs.readFileSync(location.uri.fsPath).toString().split("\n");
					const defLine = sourcecode[location.range.start.line].toLowerCase();
					let previousLine: string = "";
					if (location.range.start.line > 0) {
						previousLine = sourcecode[location.range.start.line - 1].toLowerCase();
					}
					if (previousLine.startsWith("'") || previousLine.startsWith("rem")) {
						for (let index = location.range.start.line - 1; index > -1; index--) {
							const currentLine = sourcecode[index];
							const lowerLine = currentLine.toLowerCase();
							logFunctions.writeLine(`Line: ${index}: ${lowerLine.replace("\r", "")} `, this.outputChannnel);
							if (lowerLine.replace("\r", "").endsWith("------------") || (!lowerLine.startsWith("'") && !lowerLine.startsWith("rem"))) {
								logFunctions.writeLine(`${contents}`, this.outputChannnel);
								break;
							}
							contents = `${currentLine.slice(lowerLine.startsWith("'") ? 1 : 3)}\n${contents}`;
						}
						const markdownString = new vscode.MarkdownString(contents);
						return new vscode.Hover(markdownString);
					}

					if (defLine.startsWith("sub ") || defLine.startsWith("function ") || defLine.startsWith("type ")) {
						for (let index = location.range.start.line; index < sourcecode.length; index++) {
							const currentLine = sourcecode[index].replace("\r", "");
							const lowerLine = currentLine.toLowerCase();
							contents = `${contents}\n${currentLine}`
							if (lowerLine.startsWith("end sub") || lowerLine.startsWith("end function") || lowerLine.startsWith("end type")) {
								break;
							}
						}
						const markdownString = new vscode.MarkdownString();
						markdownString.appendCodeblock(contents);
						return new vscode.Hover(markdownString);
					}

					logFunctions.writeLine("30", this.outputChannnel);
					logFunctions.writeLine("Variable|Const declaration", this.outputChannnel);
					contents = sourcecode[location.range.start.line].trim();

					if (contents) {
						logFunctions.writeLine(`contents: ${contents}`, this.outputChannnel);
					} else {
						logFunctions.writeLine("contents are empty", this.outputChannnel);
					}
					logFunctions.writeLine("40", this.outputChannnel);
					const markdownString = new vscode.MarkdownString();
					markdownString.appendCodeblock(contents);
					return new vscode.Hover(markdownString);
				}
			});
		} catch (error) {
			logFunctions.writeLine(`ERROR in HoverProvider.provideHover: ${error}`, this.outputChannnel);
		}
		return null;
	}

	private async doSearch(document: vscode.TextDocument, word: string, token: vscode.CancellationToken): Promise<vscode.Location> {
		return new Promise<vscode.Location>(async (resolve) => {
			try {
				logFunctions.writeLine(`checking document: ${document.fileName}`, this.outputChannnel);
				const regexIncludeFile = /include:(.*)'/i
				const sourceLines = document.getText().split("\n");
				let includedFiles: string[] = []
				for (let lineNumber = 0; lineNumber < sourceLines.length; lineNumber++) {
					if (token.isCancellationRequested) {
						logFunctions.writeLine("token.isCancellationRequested", this.outputChannnel);
						return Promise.reject(null);
					}

					if (document == vscode.window.activeTextEditor.document && lineNumber == vscode.window.activeTextEditor.selection.active.line) {
						continue;
					}

					const line = sourceLines[lineNumber].toLowerCase().replace("\r", "");

					if (line.match(regexIncludeFile)) {
						includedFiles.push(line);
						continue;
					}

					if (!(line.startsWith("sub ")
						|| line.startsWith("dim ")
						|| line.startsWith("function ")
						|| line.startsWith("type ")
						|| line.startsWith("const ")
					)) {
						continue;
					}

					let match = line.match(new RegExp(`\\W${commonFunctions.escapeRegExp(word)}\\W`, "i"));
					if (match) {
						logFunctions.writeLine(`Found 1 ${word} on line ${lineNumber} in ${vscode.Uri.file(document.fileName)}`, this.outputChannnel);
						return resolve(new vscode.Location(vscode.Uri.file(document.fileName), commonFunctions.createRange(match, lineNumber)));
					}
					match = line.match(new RegExp(`\\b${commonFunctions.escapeRegExp(word)}\\b`, "i"));
					if (match) {
						logFunctions.writeLine(`Found 2 ${word} on line ${lineNumber} in ${vscode.Uri.file(document.fileName)}`, this.outputChannnel);
						return resolve(new vscode.Location(vscode.Uri.file(document.fileName), commonFunctions.createRange(match, lineNumber)));
					}
				}

				for (let fileIndex = 0; fileIndex < includedFiles.length; fileIndex++) {
					let selectedText: string = includedFiles[fileIndex];
					let match = selectedText.match(regexIncludeFile)
					if (match) {
						logFunctions.writeLine(`Checking include file: ${selectedText}`, this.outputChannnel);
						const path = require('path');
						const fullPath = commonFunctions.getAbsolutePath(path.dirname(document.fileName).replaceAll("\\", "/",) + "/", match[1].replace("'", "").replaceAll("\\", "/"));
						if (fs.existsSync(fullPath)) {
							let includeFileDocument: vscode.TextDocument = await vscode.workspace.openTextDocument(fullPath)
							let searchResults: vscode.Location = await this.doSearch(includeFileDocument, word, token);
							if (searchResults) {
								logFunctions.writeLine(`found ${word} in ${includeFileDocument.fileName}`, this.outputChannnel);
								return resolve(searchResults);
							} else {
								logFunctions.writeLine(`word: ${word} not found in ${includeFileDocument.fileName}`, this.outputChannnel);
							}
						}
					}
				}
			} catch (error) {
				logFunctions.writeLine(`ERROR in doSearch: ${error}`, this.outputChannnel)
			}
			return resolve(null);
		});
	}
}