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

			function getParams(s: string) {
				var start_pos = s.trim().indexOf("(");
				return s.trim().substring(start_pos + 1, s.trim().lastIndexOf(")"));
			}
			let symbolText: string
			for (let i = 0; i < document.lineCount; i++) {
				const line = document.lineAt(i);
				let tokens: string[] = line.text.trim().split('(');
				let lineText = line.text.trim().toLowerCase();
				let symbol = tokens[0].trim() || "undef"; // Kludge "cannot be falsy"
				let symbolKind: any = false;
				if (lineText.startsWith('sub ')) {
					symbolKind = vscode.SymbolKind.Method;
					symbol = symbol.substring(4);
					let start_pos = line.text.trim().indexOf("(");
					symbolText = (start_pos != -1) ? 'Sub (' + getParams(line.text) + ')' : 'Sub';
				}
				if (lineText.startsWith('function ')) {
					symbolKind = vscode.SymbolKind.Function;
					symbol = symbol.substring(9);
					let start_pos = line.text.trim().indexOf("(");
					symbolText = (start_pos != -1) ? 'Function (' + getParams(line.text) + ')' : 'Function';
				}
				if (lineText.startsWith('declare sub ')) {
					symbolKind = vscode.SymbolKind.Method;
					symbol = line.text.trim().substring(12, line.text.trim().indexOf(' ', 12));
					let start_pos = line.text.trim().indexOf("(");
					symbolText = (start_pos != -1) ? 'Declare Sub (' + getParams(line.text) + ')' : 'Declare Sub';
				}
				if (lineText.startsWith('declare function ')) {
					symbolKind = vscode.SymbolKind.Function;
					symbol = line.text.trim().substring(17, line.text.trim().indexOf(' ', 17));
					let start_pos = line.text.trim().indexOf("(");
					symbolText = (start_pos != -1) ? 'Declare Function (' + getParams(line.text) + ')' : 'Declare Function';
				}
				if (lineText.startsWith('const ')) {
					symbolText = 'Const';
					var equal_pos = lineText.indexOf('=');
					if (equal_pos != -1) {
						symbol = line.text.trim().substring(6, equal_pos - 1).trim();
						if (symbol != '_') {
							symbolKind = vscode.SymbolKind.Constant;
							symbolText = '= ' + line.text.trim().substring(equal_pos + 1);
						}
					}
				}
				if (lineText.startsWith("'$include:")) {
					symbolKind = vscode.SymbolKind.Module;
					var pieces = line.text.trim().split(':');
					symbol = pieces[1];
					symbolText = 'Include';
				}
				if (lineText.startsWith("type ")) {
					pieces = line.text.trim().split(' ');
					symbol = pieces[1];
					var symbolChildren: vscode.DocumentSymbol[] = [];
					if (symbol.toLowerCase() != 'as') {
						symbolKind = vscode.SymbolKind.Class;
						symbolText = 'Type';
						let z: number = line.lineNumber;
						let type_lines: string[] = [];
						type_lines = document.getText().split('\n').slice(z + 1, z + 1024);
						for (var x = 0; x < type_lines.length; x++) {
							type_lines[x] = type_lines[x].replace('\r', '');
							if (type_lines[x].trim().toLowerCase().indexOf('end type') != -1) {
								break;
							}
						}
						let type_vars: string[] = [];
						type_vars = document.getText().split('\n').slice(z + 1, z + 1 + x);
						for (var x = 0; x < type_vars.length; x++) {
							var type_var = type_vars[x].trim();
							var as_loc = type_var.toLowerCase().indexOf('as')
							pieces = type_vars[x].trim().toLowerCase().split('as');
							var child_symbol = type_var.substring(0, as_loc);
							if (pieces.length >= 1 && pieces[1] && !child_symbol.startsWith("'")) {
								var child_symbolText = type_var.substring(as_loc);
								var child_symbolKind = vscode.SymbolKind.Property;
								symbolChildren.push(
									new vscode.DocumentSymbol(
										child_symbol.trim() || ' ', // Kludge "cannot be falsy"
										child_symbolText.trim() || ' ', // Kludge "cannot be falsy"
										child_symbolKind,
										(new vscode.Range(line.lineNumber + x + 1, 0, line.lineNumber + x + 2, type_vars[x].length)),
										(new vscode.Range(line.lineNumber + x + 1, 0, line.lineNumber + x + 2, type_vars[x].length))
									)
								)
							}
						}
					}
				}
				if (lineText.endsWith(":") && lineText.startsWith("'") == false) {
					symbol = line.text.trim();
					if (!symbol.toLowerCase().startsWith('case')) {
						symbolKind = vscode.SymbolKind.Event;
						if (symbol.toLowerCase() != 'do:' && symbol.toLowerCase() != 'while:') {
							symbolText = 'Label';
						} else {
							symbolText = 'Loop';
						}
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
					if (symbolChildren) {
						marker_symbol.children = symbolChildren;
						symbolChildren = [];
					}
					nodes[nodes.length - 1].push(marker_symbol);
				}
			}
			resolve(symbols);
		});
	}
}