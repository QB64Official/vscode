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
				let tokens: string[] = line.text.trim().split(' ');
				let lineText = line.text.trim().toLowerCase();
				let symbol = tokens[1] || "undef";
				let symbolKind: any = false;
				if (lineText.startsWith('sub ') || lineText.startsWith('declare sub ')) {
					symbolKind = vscode.SymbolKind.Function;
					var symbolText = 'Sub';
				}
				if (lineText.startsWith('function ') || lineText.startsWith('declare function ')) {
					symbolKind = vscode.SymbolKind.Function;
					var symbolText = 'Function';
				}
				if (lineText.startsWith('const ')) {
					symbolKind = vscode.SymbolKind.Constant;
					var symbolText = 'Const';
					if (lineText.indexOf('=')) {
						var assignment = line.text.trim().split('=');
						var symbolText = '= ' + assignment[1];
					}
				}
				if (lineText.startsWith("'$include:")) {
					symbolKind = vscode.SymbolKind.Interface;
					var pieces = line.text.trim().split(':');
					symbol = pieces[1];
					var symbolText = 'Include';
				}
				if (lineText.startsWith("type ")) {
					if (symbol.toLowerCase() != 'as') {
						symbolKind = vscode.SymbolKind.Class;
						var symbolText = 'Type';
					}
				}
				if (lineText.endsWith(":")) {
					symbolKind = vscode.SymbolKind.Event;
					symbol = line.text.trim();
					if (symbol.toLowerCase() != 'do:' && symbol.toLowerCase() != 'while:') {
						var symbolText = 'Label';
					} else {
						var symbolText = 'Loop';
					}
				}
				if (symbolKind != false) {
					let marker_symbol = new vscode.DocumentSymbol(
						symbol,
						symbolText,
						symbolKind,
						line.range, 
						line.range
					);
					nodes[nodes.length - 1].push(marker_symbol);
				}
			}
			resolve(symbols);
		});
	}
}