"use strict";
import * as vscode from "vscode";
import * as commonFunctions from "./commonFunctions";
import * as logFunctions from "./logFunctions";

// 
//  https://github.com/gayanhewa/vscode-find-all-references/blob/master/src/Providers/ReferenceProvider.ts
//

export class ReferenceProvider implements vscode.ReferenceProvider {
	outputChannnel = logFunctions.getChannel(logFunctions.channelType.referenceProvider);

	provideReferences(document: vscode.TextDocument, position: vscode.Position, context: vscode.ReferenceContext, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Location[]> {
		/*
		  TODO:
		  Change to recursive function		  
		  Figure out what the options should be
			-- Search All Files
			-- Ingnore Symbols
		*/
		let options: {}

		return this.processSearch(document, position, options);

	}

	private processSearch(document: vscode.TextDocument, position: vscode.Position, options: any): Thenable<vscode.Location[]> {
		return new Promise<vscode.Location[]>((resolve, reject) => {

			const word = commonFunctions.getQB64Word(vscode.window.activeTextEditor)
			const escapedWord = commonFunctions.escapeRegExp(word);
			const sourceLines = document.getText().split("\n");

			logFunctions.writeLine(`Search Word: ${word} |  Escaped Word: ${escapedWord}`, this.outputChannnel);
			logFunctions.writeLine(`Total Lines to Check: ${sourceLines.length}`, this.outputChannnel);
			let list: vscode.Location[] = [];

			for (let lineNumber = 0; lineNumber < sourceLines.length; lineNumber++) {
				try {
					const line = sourceLines[lineNumber];
					logFunctions.writeLine(`Checking: Line: ${lineNumber} | Line Of Code: ${line.replaceAll("\n", "").replaceAll("\r", "")} | Search: ${word}`, this.outputChannnel);
					const matches = line.matchAll(new RegExp("\\b" + escapedWord + "\\b", "ig"));
					if (matches) {
						for (const match of matches) {
							let range = commonFunctions.createRange(match, lineNumber);
							list.push(new vscode.Location(vscode.Uri.file(document.fileName), range));
						}
					}
				} catch (error) {
					logFunctions.writeLine("ERROR: " + error, this.outputChannnel);
				}

			}
			return resolve(list);
		});
	}
}