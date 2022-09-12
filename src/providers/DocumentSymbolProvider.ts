"use strict";
import * as vscode from "vscode";

// Setup the Outline window
export class DocumentSymbolProvider implements vscode.DocumentSymbolProvider {
	public provideDocumentSymbols(
		document: vscode.TextDocument,
		_token: vscode.CancellationToken): Promise<vscode.DocumentSymbol[]> {
		return new Promise(function (resolve, _reject): void {

			let symbols: vscode.DocumentSymbol[] = [];
			let nodes = [symbols];

			for (let i = 0; i < document.lineCount; i++) {
				const line = document.lineAt(i);

				if (line.text.toLowerCase().startsWith("sub ") || line.text.toLowerCase().startsWith("function ")) {

					let isSub: boolean = line.text.toLowerCase().startsWith("sub ");
					let tokens: string[] = line.text.split(" ");
					let marker_symbol = new vscode.DocumentSymbol(
						tokens[1].trim(),
						isSub ? "Sub" : "Function",
						isSub ? vscode.SymbolKind.Method : vscode.SymbolKind.Function,
						line.range, line.range);

					nodes[nodes.length - 1].push(marker_symbol);
				}
			}
			resolve(symbols);
		});
	}
}