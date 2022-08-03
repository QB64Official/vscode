'use strict';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(
		vscode.languages.registerDocumentSymbolProvider(
			{ scheme: "file", language: "QB64" },
			new Qb64ConfigDocumentSymbolProvider()
		)
	);
}

// Code Formatter
// Seems like a good place to find includes and make the double click to open work.
vscode.languages.registerDocumentFormattingEditProvider('QB64', {
	provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {
		// TODO: Figure out if the channel already exits and use it.
		let outputChannnel = vscode.window.createOutputChannel("QB64: Formatter");
		let retvalue: vscode.TextEdit[] = [];
		let line: vscode.TextLine;
		for (let i = 0; i < document.lineCount; i++) {
			line = document.lineAt(i);
			let lineText = line.text.trimEnd();
			outputChannnel.appendLine(`Line: ${i}|C| ${lineText}`);

			// Time to remove the ";" that is not needed at the end of the line
			if (lineText.endsWith(";") && lineText.toLowerCase().indexOf("print") < 0 && lineText.indexOf("print") < 0) {
				do {
					lineText = lineText.substring(0, lineText.length - 1).trimEnd();
				} while (lineText.endsWith(";"))
			}

			// Only update the line once
			if (lineText != line.text) {
				outputChannnel.appendLine(`Line: ${i}|AN| ${lineText}`);
				retvalue.push(vscode.TextEdit.replace(line.range, lineText));
			}
		}
		return retvalue;
	}
});

// Setup the Outline window
class Qb64ConfigDocumentSymbolProvider implements vscode.DocumentSymbolProvider {
	public provideDocumentSymbols(
		document: vscode.TextDocument,
		token: vscode.CancellationToken): Promise<vscode.DocumentSymbol[]> {
		return new Promise((resolve, reject) => {
			let symbols: vscode.DocumentSymbol[] = [];
			let nodes = [symbols]
			let inside_marker = false

			for (var i = 0; i < document.lineCount; i++) {
				var line = document.lineAt(i);

				if (line.text.toLowerCase().startsWith("sub ") || line.text.toLowerCase().startsWith("function ")) {

					let isSub = line.text.toLowerCase().startsWith("sub ")
					let tokens = line.text.split(" ")
					let marker_symbol = new vscode.DocumentSymbol(
						tokens[1].trim(),
						isSub ? "Sub" : "Function",
						isSub ? vscode.SymbolKind.Method : vscode.SymbolKind.Function,
						line.range, line.range)

					nodes[nodes.length - 1].push(marker_symbol)
					if (!inside_marker) {
						nodes.push(marker_symbol.children)
						inside_marker = true
					}
				}
				else if (line.text.toLowerCase().startsWith("end sub") || line.text.toLowerCase().startsWith("end function")) {
					if (inside_marker) {
						nodes.pop()
						inside_marker = false
					}
				}
			}
			resolve(symbols);
		});
	}
}