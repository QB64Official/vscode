"use strict";
import * as vscode from "vscode";
import * as logFunctions from "../logFunctions";

// Code Formatter
// Seems like a good place to find includes and make the double click to open work.
export class DocumentFormattingEditProvider implements vscode.DocumentFormattingEditProvider {
	provideDocumentFormattingEdits(document: vscode.TextDocument, options: vscode.FormattingOptions, token: vscode.CancellationToken): vscode.ProviderResult<vscode.TextEdit[]> {
		let retvalue: vscode.TextEdit[] = [];
		let line: vscode.TextLine;
		let outputChannnel: any = logFunctions.getChannel(logFunctions.channelType.formatter);

		for (let i = 0; i < document.lineCount; i++) {
			line = document.lineAt(i);
			let lineText = line.text.trimEnd();

			if (lineText.endsWith(";") && lineText.toLowerCase().indexOf("print") < 0 && lineText.indexOf("print") < 0) {
				// Time to remove the ";" that is not needed at the end of the line
				do {
					lineText = lineText.substring(0, lineText.length - 1).trimEnd();
				} while (lineText.endsWith(";"))
			}

			if (lineText.trimStart().startsWith("? ")) {
				lineText = lineText.replace("? ", "print ");
			}

			if (lineText != line.text) {
				outputChannnel.appendLine(`Line: ${i}| C | ${line.text.trimEnd()} `);
				outputChannnel.appendLine(`Line: ${i}| N | ${lineText} `);
				retvalue.push(vscode.TextEdit.replace(line.range, lineText));
			}
		}
		return retvalue;
	}
}
