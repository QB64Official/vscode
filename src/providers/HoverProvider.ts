"use strict";
import * as vscode from "vscode";
import * as fs from "fs";
import { TokenInfo } from "../TokenInfo"
import { utilities } from "../utilities";

export class HoverProvider implements vscode.HoverProvider {

	provideHover(document: vscode.TextDocument, position: vscode.Position, cancellationToken: vscode.CancellationToken): vscode.ProviderResult<vscode.Hover> {

		if (!document || !position) {
			return null;
		}

		const config: vscode.WorkspaceConfiguration = utilities.getConfiguration();
		if (!config.get("isHoverTextFileEnabled")) {
			utilities.log("Hovertext is disabled.");
			return null;
		}

		try {

			const token = utilities.getQB64WordFromDocument(document, position);
			const keywordInfo = new TokenInfo(token, document.lineAt(position.line).text);
			if (keywordInfo.offlinehelp.length > 0) {
				const markdownString = new vscode.MarkdownString(keywordInfo.getHoverText());
				markdownString.isTrusted = true;
				return new vscode.Hover(markdownString);
			}

			return this.doSearch(document, keywordInfo.token, cancellationToken).then(location => {
				if (location) {
					//logFunctions.writeLine(`location found for ${keywordInfo.token}`, this.outputChannnel);
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
							//logFunctions.writeLine(`Line: ${index}: ${lowerLine.replace("\r", "")} `, this.outputChannnel);
							if (lowerLine.replace("\r", "").endsWith("------------") || (!lowerLine.startsWith("'") && !lowerLine.startsWith("rem"))) {
								//logFunctions.writeLine(`${contents}`, this.outputChannnel);
								break;
							}
							contents = `${currentLine.slice(lowerLine.startsWith("'") ? 1 : 3)}\n${contents}`;
						}
						const markdownString = new vscode.MarkdownString(contents);
						return new vscode.Hover(markdownString);
					}

					if (defLine == "sub playkingsquesttheme") {
						utilities.log("Here");
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

					contents = sourcecode[location.range.start.line].trim();

					/*
					if (contents) {
						logFunctions.writeLine(`contents: ${contents}`, this.outputChannnel);
					} else {
						logFunctions.writeLine("contents are empty", this.outputChannnel);
					}
					*/

					const markdownString = new vscode.MarkdownString();
					markdownString.appendCodeblock(contents);
					return new vscode.Hover(markdownString);
				}
			});
		} catch (error) {
			utilities.logError(`ERROR in HoverProvider.provideHover: ${error}`);
		}
		return null;
	}

	private async doSearch(document: vscode.TextDocument, word: string, token: vscode.CancellationToken): Promise<vscode.Location> {
		return new Promise<vscode.Location>(async (resolve) => {
			try {
				const regexIncludeFile = /include:(.*)'/i
				const sourceLines = document.getText().split("\n");
				let includedFiles: string[] = []
				for (let lineNumber = 0; lineNumber < sourceLines.length; lineNumber++) {
					if (token.isCancellationRequested) {
						return Promise.reject(null);
					}

					if (document == vscode.window.activeTextEditor.document && lineNumber == vscode.window.activeTextEditor.selection.active.line) {
						continue;
					}


					// Remove the comments from the line and parse that.					
					const line = sourceLines[lineNumber].toLowerCase().replace("\r", "").replace(/'.*$/, '').trimEnd();

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

					let match = line.match(new RegExp(`\\W${utilities.escapeRegExp(word)}\\W`, "i"));
					if (match) {
						return resolve(new vscode.Location(vscode.Uri.file(document.fileName), utilities.createRange(match, lineNumber)));
					}
					match = line.match(new RegExp(`\\b${utilities.escapeRegExp(word)}\\b`, "i"));
					if (match) {
						return resolve(new vscode.Location(vscode.Uri.file(document.fileName), utilities.createRange(match, lineNumber)));
					}
				}

				for (let fileIndex = 0; fileIndex < includedFiles.length; fileIndex++) {
					let selectedText: string = includedFiles[fileIndex];
					let match = selectedText.match(regexIncludeFile)
					if (match) {
						const path = require('path');
						const fullPath = utilities.getAbsolutePath(path.dirname(document.fileName).replaceAll("\\", "/",) + "/", match[1].replace("'", "").replaceAll("\\", "/"));
						if (fs.existsSync(fullPath)) {
							let includeFileDocument: vscode.TextDocument = await vscode.workspace.openTextDocument(fullPath)
							let searchResults: vscode.Location = await this.doSearch(includeFileDocument, word, token);
							if (searchResults) {
								return resolve(searchResults);
							} else {
								utilities.log(`word: ${word} not found in ${includeFileDocument.fileName} `);
							}
						}
					}
				}
			} catch (error) {
				utilities.logError(`ERROR in doSearch: ${error} `);
			}
			return resolve(null);
		});
	}
}