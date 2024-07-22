"use strict";
import * as vscode from "vscode";
import * as commonFunctions from "../commonFunctions";
import * as logFunctions from "../logFunctions";
import * as fs from "fs";
import { TokenInfo } from "../TokenInfo"

export class HoverProvider implements vscode.HoverProvider {

	outputChannel = logFunctions.getChannel(logFunctions.channelType.hoverProvider);

	provideHover(document: vscode.TextDocument, position: vscode.Position, cancellationToken: vscode.CancellationToken): vscode.ProviderResult<vscode.Hover> {

		if (!document || !position) {
			return null;
		}

		const config = vscode.workspace.getConfiguration("qb64pe");
		if (!config.get("isHoverTextFileEnabled")) {
			logFunctions.writeLine("Hovertext is disabled.", this.outputChannel);
			return null;
		}

		try {

			const token = commonFunctions.getQB64WordFromDocument(document, position);
			const keywordInfo = new TokenInfo(token, document.lineAt(position.line).text, this.outputChannel);
			if (keywordInfo.offlinehelp.length > 0) {
				const markdownString = new vscode.MarkdownString(keywordInfo.getHoverText(), true);
				const path = require('path');
				const config: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration("qb64pe")
				let helpPath: string = config.get("helpPath");
				let helpFile: string = path.join(helpPath).replaceAll("\\", "/");
				markdownString.baseUri = vscode.Uri.file(helpFile + '/');
				markdownString.isTrusted = true;
				markdownString.supportHtml = true;
				return new vscode.Hover(markdownString);
			}

			return this.doSearch(document, keywordInfo.token, cancellationToken).then(location => {
				if (location) {
					logFunctions.writeLine(`location found for ${keywordInfo.token}`, this.outputChannel);
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
							logFunctions.writeLine(`Line: ${index}: ${lowerLine.replace("\r", "")} `, this.outputChannel);
							if (lowerLine.replace("\r", "").endsWith("------------") || (!lowerLine.startsWith("'") && !lowerLine.startsWith("rem"))) {
								logFunctions.writeLine(`${contents}`, this.outputChannel);
								break;
							}
							contents = `${currentLine.slice(lowerLine.startsWith("'") ? 1 : 3)}\n${contents}`;
						}
						const markdownString = new vscode.MarkdownString(contents, true);
						const path = require('path');
						const config: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration("qb64pe")
						let helpPath: string = config.get("helpPath");
						let helpFile: string = path.join(helpPath).replaceAll("\\", "/");
						markdownString.baseUri = vscode.Uri.file(helpFile + '/');
						markdownString.isTrusted = true;
						markdownString.supportHtml = true;
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
						const markdownString = new vscode.MarkdownString(contents, true);
						markdownString.appendCodeblock(contents);
						const path = require('path');
						const config: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration("qb64pe")
						let helpPath: string = config.get("helpPath");
						let helpFile: string = path.join(helpPath).replaceAll("\\", "/");
						markdownString.baseUri = vscode.Uri.file(helpFile + '/');
						markdownString.isTrusted = true;
						markdownString.supportHtml = true;

						return new vscode.Hover(markdownString);
					}

					logFunctions.writeLine("30", this.outputChannel);
					logFunctions.writeLine("Variable|Const declaration", this.outputChannel);
					contents = sourcecode[location.range.start.line].trim();

					if (contents) {
						logFunctions.writeLine(`contents: ${contents}`, this.outputChannel);
					} else {
						logFunctions.writeLine("contents are empty", this.outputChannel);
					}
					logFunctions.writeLine("40", this.outputChannel);
					const markdownString = new vscode.MarkdownString(contents, true);
					markdownString.appendCodeblock(contents);
					const path = require('path');
					const config: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration("qb64pe")
					let helpPath: string = config.get("helpPath");
					let helpFile: string = path.join(helpPath).replaceAll("\\", "/");
					markdownString.baseUri = vscode.Uri.file(helpFile + '/');
					markdownString.isTrusted = true;
					markdownString.supportHtml = true;
					return new vscode.Hover(markdownString);
				}
			});
		} catch (error) {
			logFunctions.writeLine(`ERROR in HoverProvider.provideHover: ${error}`, this.outputChannel);
		}
		return null;
	}

	private async doSearch(document: vscode.TextDocument, word: string, token: vscode.CancellationToken): Promise<vscode.Location> {
		return new Promise<vscode.Location>(async (resolve) => {
			try {
				logFunctions.writeLine(`checking document: ${document.fileName}`, this.outputChannel);
				const regexIncludeFile = /include:(.*)'/i
				const sourceLines = document.getText().split("\n");
				let includedFiles: string[] = []
				for (let lineNumber = 0; lineNumber < sourceLines.length; lineNumber++) {
					if (token.isCancellationRequested) {
						logFunctions.writeLine("token.isCancellationRequested", this.outputChannel);
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

					let match = line.match(new RegExp(`\\W${commonFunctions.escapeRegExp(word)}\\W`, "i"));
					if (match) {
						logFunctions.writeLine(`Found 1 ${word} on line ${lineNumber} in ${vscode.Uri.file(document.fileName)}`, this.outputChannel);
						return resolve(new vscode.Location(vscode.Uri.file(document.fileName), commonFunctions.createRange(match, lineNumber)));
					}
					match = line.match(new RegExp(`\\b${commonFunctions.escapeRegExp(word)}\\b`, "i"));
					if (match) {
						logFunctions.writeLine(`Found 2 ${word} on line ${lineNumber} in ${vscode.Uri.file(document.fileName)}`, this.outputChannel);
						return resolve(new vscode.Location(vscode.Uri.file(document.fileName), commonFunctions.createRange(match, lineNumber)));
					}
				}

				for (let fileIndex = 0; fileIndex < includedFiles.length; fileIndex++) {
					let selectedText: string = includedFiles[fileIndex];
					let match = selectedText.match(regexIncludeFile)
					if (match) {
						logFunctions.writeLine(`Checking include file: ${selectedText}`, this.outputChannel);
						const path = require('path');
						const fullPath = commonFunctions.getAbsolutePath(path.dirname(document.fileName).replaceAll("\\", "/",) + "/", match[1].replace("'", "").replaceAll("\\", "/"));
						if (fs.existsSync(fullPath)) {
							let includeFileDocument: vscode.TextDocument = await vscode.workspace.openTextDocument(fullPath)
							let searchResults: vscode.Location = await this.doSearch(includeFileDocument, word, token);
							if (searchResults) {
								logFunctions.writeLine(`found ${word} in ${includeFileDocument.fileName}`, this.outputChannel);
								return resolve(searchResults);
							} else {
								logFunctions.writeLine(`word: ${word} not found in ${includeFileDocument.fileName}`, this.outputChannel);
							}
						}
					}
				}
			} catch (error) {
				logFunctions.writeLine(`ERROR in doSearch: ${error}`, this.outputChannel)
			}
			return resolve(null);
		});
	}
}