"use strict";
import * as vscode from "vscode";
import { globalCache } from "../globalCache";

// 
//  https://github.com/gayanhewa/vscode-find-all-references/blob/master/src/Providers/ReferenceProvider.ts
//

export class ReferenceProvider implements vscode.ReferenceProvider {
	config = vscode.workspace.getConfiguration("qb64");

	provideReferences(document: vscode.TextDocument, position: vscode.Position, context: vscode.ReferenceContext, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Location[]> {
		/*
		  TODO:
		  Change to recursive function		  
		  Figure out what the options should be
			-- Search All Files
			-- Ingnore Symbols
		*/
		return this.processSearch(document, position, token);

	}

	private processSearch(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Thenable<vscode.Location[]> {
		return new Promise<vscode.Location[]>((resolve) => {

			const word = globalCache.getQB64Word(vscode.window.activeTextEditor)
			const escapedWord = globalCache.escapeRegExp(word);
			let list: vscode.Location[] = [];
			this.doSearch(document, list, token, escapedWord);
			return resolve(list);
		});
	}

	/**
	 * Looks though the current file and all the include files for a reference.
	 * @param document 
	 * @param list 
	 * @param token 
	 * @param escapedWord 
	 */
	private async doSearch(document: vscode.TextDocument, list: vscode.Location[], token: vscode.CancellationToken, escapedWord: string) {
		const sourceLines = document.getText().split("\n");
		for (let lineNumber = 0; lineNumber < sourceLines.length; lineNumber++) {
			if (token.isCancellationRequested) {
				break;
			}
			try {
				const line = sourceLines[lineNumber].replace("\r", "");
				const matches = line.matchAll(new RegExp("\\b" + escapedWord + "\\b", "ig"));
				if (matches) {
					for (const match of matches) {
						list.push(new vscode.Location(vscode.Uri.file(document.fileName), globalCache.createRange(match, lineNumber)));
					}
				}
			} catch (error) {
				globalCache.logError(`ERROR: ${error}`);

			}
		}
	}
}