"use strict";
import * as vscode from "vscode";
import * as commonFunctions from "../commonFunctions";
import * as logFunctions from "../logFunctions";
import * as fs from "fs";
import { getHelpFile } from "../helpFunctions"

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

			const word = commonFunctions.getQB64WordFromDocument(document, position);
			const helpFile = getHelpFile(word, this.outputChannnel);

			if (helpFile.length > 0) {
				const markdownString = new vscode.MarkdownString();
				markdownString.appendMarkdown(fs.readFileSync(helpFile).toString());
				return new vscode.Hover(markdownString);
			}

			logFunctions.writeLine(`Before doSearch`, this.outputChannnel);
			return this.doSearch(document, word, token).then(location => {
				logFunctions.writeLine(`After doSearch`, this.outputChannnel);
				if (location) {
					logFunctions.writeLine(`In location`, this.outputChannnel);
					let contents: string = "";
					const sourcecode: string[] = fs.readFileSync(location.uri.fsPath).toString().split("\n");
					const defLine = sourcecode[location.range.start.line].toLowerCase();
					const previousLine = sourcecode[location.range.start.line - 1].toLowerCase();

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
						const markdownString = new vscode.MarkdownString();
						markdownString.appendMarkdown(contents);
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

					logFunctions.writeLine("Variable|Const declaration", this.outputChannnel);
					contents = defLine.trim();

					if (contents) {
						logFunctions.writeLine(`contents: ${contents}`, this.outputChannnel);
					} else {
						logFunctions.writeLine("contents are empty", this.outputChannnel);
					}

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
				let includedFiles: string[] = []
				const sourceLines = document.getText().split("\n");
				for (let lineNumber = 0; lineNumber < sourceLines.length; lineNumber++) {
					logFunctions.writeLine(`document: ${document.fileName} | ${lineNumber}`, this.outputChannnel);
					if (token.isCancellationRequested) {
						logFunctions.writeLine("token.isCancellationRequested", this.outputChannnel);
						return resolve(null);
					}

					if (document == vscode.window.activeTextEditor.document && lineNumber == vscode.window.activeTextEditor.selection.active.line) {
						continue;
					}

					const line = sourceLines[lineNumber].toLowerCase().replace("\r", "");

					if (line.match(/include:(.*)'/i)) {
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
					logFunctions.writeLine(`${selectedText} | ${fileIndex}`, this.outputChannnel);
					let match = selectedText.match(/include:(.*)'/i)
					if (match) {
						logFunctions.writeLine(`Include file: selectedText`, this.outputChannnel);
						const path = require('path');
						const fullPath = commonFunctions.getAbsolutePath(path.dirname(document.fileName).replaceAll("\\", "/",) + "/", match[1].replace("'", "").replaceAll("\\", "/"));
						if (fs.existsSync(fullPath)) {
							let result = vscode.workspace.openTextDocument(fullPath).then(includeFileDocument => {
								return new Promise<vscode.Location>(async (resolve) => {
									let searchResults: vscode.Location = await this.doSearch(includeFileDocument, word, token);
									logFunctions.writeLine("Before workbench.action.closeActiveEditor", this.outputChannnel);
									// workbench.action.nextEditor
									// vscode.commands.executeCommand('workbench.action.closeActiveEditor');
									if (searchResults) {
										logFunctions.writeLine("Return searchResults", this.outputChannnel);
										return resolve(searchResults);
									} else {
										return resolve(null);
									}
								});
							});
							if (result) {
								logFunctions.writeLine("Return Result", this.outputChannnel);
								return resolve(result);
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