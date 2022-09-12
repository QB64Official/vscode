"use strict";
import * as vscode from "vscode";
import * as commonFunctions from "../commonFunctions";
import * as logFunctions from "../logFunctions";
import { openHelp } from "../helpFunctions";
import * as fs from "fs";

export class DefinitionProvider implements vscode.DefinitionProvider {
	outputChannnel = logFunctions.getChannel(logFunctions.channelType.definitionProvider);
	config = vscode.workspace.getConfiguration("qb64");

	constructor(goConfig?: vscode.WorkspaceConfiguration) {
		this.config = goConfig;
	}

	public provideDefinition(
		document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken
	): Thenable<vscode.Location[]> {

		if (!document || !vscode.window.activeTextEditor) {
			return null;
		}

		const word = commonFunctions.getQB64Word(vscode.window.activeTextEditor)
		if (word.length < 1) {
			return null;
		}

		return this.doSearch(word, document, token).then(searchResults => {
			if (searchResults && searchResults.length > 0) {
				logFunctions.writeLine(`searchResults (${searchResults.length}): ${searchResults[0].uri}`, this.outputChannnel);
				return new Promise<vscode.Location[]>((resolve) => { resolve(searchResults); });
			} else {
				logFunctions.writeLine(`Open Help for: ${word}`, this.outputChannnel);
				openHelp(word, this.outputChannnel);
				return null;
			}
		});
	}

	/**
	 * Recursive function to find definition in Include files.
	 */
	private doSearch(word: string, document: vscode.TextDocument, token: vscode.CancellationToken): Promise<vscode.Location[]> {

		return new Promise<vscode.Location[]>(async (resolve) => {
			try {
				let includedFiles: string[] = []
				const sourceLines = document.getText().split("\n");

				for (let lineNumber = 0; lineNumber < sourceLines.length; lineNumber++) {
					if (token.isCancellationRequested) {
						return resolve(null);
					}

					if (document == vscode.window.activeTextEditor.document && lineNumber == vscode.window.activeTextEditor.selection.active.line) {
						continue;
					}

					const line = sourceLines[lineNumber].toLowerCase().replace("\r", "");

					if (line.startsWith("'$include:")) {
						includedFiles.push(line);
						continue;
					}

					if (!(line.startsWith("sub")
						|| line.startsWith("dim")
						|| line.startsWith("function")
						|| line.startsWith("type")
						|| line.startsWith("const")
					)) {
						continue;
					}

					const matches = line.match(new RegExp(`\\b${commonFunctions.escapeRegExp(word)}\\b`, "i"));
					if (matches) {
						logFunctions.writeLine(`Found ${word} on line ${lineNumber + 1}`, this.outputChannnel);
						return resolve([new vscode.Location(vscode.Uri.file(document.fileName), commonFunctions.createRange(matches, lineNumber))]);
					}
				}

				for (let fileIndex = 0; fileIndex < includedFiles.length; fileIndex++) {
					try {
						let selectedText: string = includedFiles[fileIndex];
						let match = selectedText.match(/include:(.*)'/i)
						if (match) {
							const path = require('path');
							const fullPath = commonFunctions.getAbsolutePath(path.dirname(document.fileName).replaceAll("\\", "/",) + "/", match[1].replace("'", "").replaceAll("\\", "/"));
							if (fs.existsSync(fullPath)) {
								logFunctions.writeLine(`Looking for ${word} in ${fullPath}`, this.outputChannnel);
								let includeFileDocument = await vscode.workspace.openTextDocument(fullPath);
								let searchResults: vscode.Location[] = await this.doSearch(word, includeFileDocument, token);
								if (searchResults) {
									logFunctions.writeLine(`Found ${word} in ${fullPath}`, this.outputChannnel)
									vscode.window.showTextDocument(includeFileDocument).then(() => {
										let range = searchResults[0].range;
										logFunctions.writeLine(`Open ${fullPath} at line ${searchResults[0].range.start.line + 1}`, this.outputChannnel);
										vscode.window.activeTextEditor.selection = new vscode.Selection(range.start, range.end);
										vscode.window.activeTextEditor.revealRange(range);
									});
									return resolve(searchResults);
								} else {
									logFunctions.writeLine(`Closing ${fullPath}`, this.outputChannnel);
									vscode.commands.executeCommand('workbench.action.closeActiveEditor');
								}
							} else {
								logFunctions.writeLine("File " + fullPath + " not found.", this.outputChannnel);
							}
						}
					} catch (error) {
						logFunctions.writeLine("ERROR in doSearch: " + error, this.outputChannnel);
					}
				}
			} catch (error) {
				logFunctions.writeLine(`ERROR in doSearch: ${error}`, this.outputChannnel)
			} finally {
				return resolve(null);
			}
		});
	}
}
