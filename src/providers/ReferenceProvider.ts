"use strict";
import * as vscode from "vscode";
import * as commonFunctions from "../commonFunctions";
import * as logFunctions from "../logFunctions";

// 
//  https://github.com/gayanhewa/vscode-find-all-references/blob/master/src/Providers/ReferenceProvider.ts
//

export class ReferenceProvider implements vscode.ReferenceProvider {
	outputChannel = logFunctions.getChannel(logFunctions.channelType.referenceProvider);
	config = vscode.workspace.getConfiguration("qb64pe");

	provideReferences(document: vscode.TextDocument, position: vscode.Position, context: vscode.ReferenceContext, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Location[]> {
		/*
		  TODO:
		  Change to recursive function		  
		  Figure out what the options should be
			-- Search All Files
			-- Ignore Symbols
		*/
		return this.processSearch(document, position, token);

	}

	private processSearch(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Thenable<vscode.Location[]> {
		return new Promise<vscode.Location[]>((resolve) => {

			const word = commonFunctions.getQB64Word(vscode.window.activeTextEditor)
			const escapedWord = commonFunctions.escapeRegExp(word);

			logFunctions.writeLine(`Search Word: ${word} |  Escaped Word: ${escapedWord}`, this.outputChannel);
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

		logFunctions.writeLine(`Total Lines to Check: ${sourceLines.length}`, this.outputChannel);
		for (let lineNumber = 0; lineNumber < sourceLines.length; lineNumber++) {
			if (token.isCancellationRequested) {
				break;
			}
			try {
				const line = sourceLines[lineNumber].replace("\r", "");
				const matches = line.matchAll(new RegExp("\\b" + escapedWord + "\\b", "ig"));
				if (matches) {
					for (const match of matches) {
						list.push(new vscode.Location(vscode.Uri.file(document.fileName), commonFunctions.createRange(match, lineNumber)));
					}
				}
			} catch (error) {
				logFunctions.writeLine("ERROR: " + error, this.outputChannel);
			}
		}
	}
}