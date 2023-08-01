"use strict";
import * as vscode from "vscode";
import { TokenInfo } from "../TokenInfo";
import * as fs from "fs";
import { globalCache } from "../globalCache";

export class DefinitionProvider implements vscode.DefinitionProvider {
	regexIncludeFile = /include:(.*)'/i
	config: vscode.WorkspaceConfiguration = null;

	constructor(config?: vscode.WorkspaceConfiguration) {
		if (config) {
			this.config = config;
		} else {
			this.config = vscode.workspace.getConfiguration("qb64");
		}
	}

	public async provideDefinition(
		document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken
	): Promise<vscode.Location[]> {
		const path = require('path');
		try {
			if (!document || !vscode.window.activeTextEditor) {
				return null;
			}

			let selectedText = globalCache.getSelectedTextOrLineTest();
			let match = selectedText.match(this.regexIncludeFile)

			if (match !== null && match.index !== undefined) {
				let file = match[1].replace("'", "").replaceAll("\\", "/");
				let fullPath = globalCache.getAbsolutePath(path.dirname(vscode.window.activeTextEditor.document.fileName).replaceAll("\\", "/",) + "/", file);
				if (fs.existsSync(fullPath)) {
					return new Promise<vscode.Location[]>((resolve) => {
						let range = new vscode.Range(new vscode.Position(0, 0), new vscode.Position(0, 0));
						return resolve([new vscode.Location(vscode.Uri.file(fullPath), range)]);
					});
				} else {
					return null;
				}
			}

			match = selectedText.match(/\$ExeIcon:'([^']*)'/);
			if (match) {
				let fullPath = globalCache.getAbsolutePath(path.dirname(vscode.window.activeTextEditor.document.fileName).replaceAll("\\", "/",) + "/", match[1]);
				if (fs.existsSync(fullPath)) {
					return new Promise<vscode.Location[]>((resolve) => {
						let range = new vscode.Range(new vscode.Position(0, 0), new vscode.Position(0, 0));
						return resolve([new vscode.Location(vscode.Uri.file(fullPath), range)]);
					});
				}
				return null;
			}

			const word = globalCache.getQB64WordFromDocument(document, position);
			if (word.length < 1) {
				return null;
			}
			const searchResults = await this.doSearch(word, document, token);
			if (searchResults && searchResults.length > 0) {
				return new Promise<vscode.Location[]>((resolve) => { resolve(searchResults); });
			} else {
				new TokenInfo(word, "").showHelp();
				return null;
			}
		} catch (error) {
			globalCache.logError(`ERROR in DefinitionProvider: ${error}`);
		}
		return null;
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

					const line = sourceLines[lineNumber].toLowerCase().replace("\r", "").toLowerCase().trim();

					if (line.match(this.regexIncludeFile)) {
						includedFiles.push(line);
						continue;
					}

					if (!(line.startsWith("sub") || line.startsWith("dim") || line.startsWith("function") || line.startsWith("type") || line.startsWith("const") || line.startsWith(`${word.toLowerCase()}:`))) {
						continue;
					}

					let match = line.match(new RegExp(`\\W${globalCache.escapeRegExp(word)}\\W`, "i"));
					if (match) {
						return resolve([new vscode.Location(vscode.Uri.file(document.fileName), globalCache.createRange(match, lineNumber))]);
					}

					match = line.match(new RegExp(`\\b${globalCache.escapeRegExp(word)}\\b`, "i"));
					if (match) {
						return resolve([new vscode.Location(vscode.Uri.file(document.fileName), globalCache.createRange(match, lineNumber))]);
					}

				}

				for (let fileIndex = 0; fileIndex < includedFiles.length; fileIndex++) {
					try {
						let selectedText: string = includedFiles[fileIndex];
						let match = selectedText.match(this.regexIncludeFile)
						if (match) {
							const path = require('path');
							const fullPath = globalCache.getAbsolutePath(path.dirname(document.fileName).replaceAll("\\", "/",) + "/", match[1].replace("'", "").replaceAll("\\", "/"));
							if (fs.existsSync(fullPath)) {
								let includeFileDocument = await vscode.workspace.openTextDocument(fullPath); // Change to use then
								let searchResults: vscode.Location[] = await this.doSearch(word, includeFileDocument, token);
								if (searchResults) {
									vscode.window.showTextDocument(includeFileDocument).then(() => {
										let range = searchResults[0].range;
										vscode.window.activeTextEditor.selection = new vscode.Selection(range.start, range.end);
										vscode.window.activeTextEditor.revealRange(range);
									});
									return resolve(searchResults);
								}
							}
						}
					} catch (error) {
						globalCache.logError(`ERROR in doSearch: ${error}`);
					}
				}
			} catch (error) {
				globalCache.logError(`ERROR in doSearch: ${error}`);
			} finally {
				return resolve(null);
			}
		});
	}
}
