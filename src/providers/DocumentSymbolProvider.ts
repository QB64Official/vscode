"use strict";
import * as vscode from "vscode";

// Setup the Outline window
export class DocumentSymbolProvider implements vscode.DocumentSymbolProvider {
	public provideDocumentSymbols(
		document: vscode.TextDocument,
		_token: vscode.CancellationToken): Promise<vscode.DocumentSymbol[]> {
		return new Promise(function (resolve, _reject): void {

			function getParams(code: string) {
				return code.trim().substring(code.trim().indexOf("(") + 1, code.trim().lastIndexOf(")"));
			}

			let symbols: vscode.DocumentSymbol[] = [];
			let nodes = [symbols];
			let symbolText: string
			for (let currentLine = 0; currentLine < document.lineCount; currentLine++) {
				const line = document.lineAt(currentLine);
				let tokens: string[] = line.text.trim().split('(');
				let lineText = line.text.trim().toLowerCase();
				let symbol = tokens[0].trim() || "undef"; // Kludge "cannot be falsy"
				let symbolKind: any = false;
				let symbolChildren: vscode.DocumentSymbol[] = [];
				if (lineText.startsWith('sub ')) {
					symbolKind = vscode.SymbolKind.Method;
					symbol = symbol.substring(4);
					symbolText = (line.text.trim().indexOf("(") != -1) ? 'Sub (' + getParams(line.text) + ')' : 'Sub';
				}
				else if (lineText.startsWith('function ')) {
					symbolKind = vscode.SymbolKind.Function;
					symbol = symbol.substring(9);
					symbolText = (line.text.trim().indexOf("(") != -1) ? 'Function (' + getParams(line.text) + ')' : 'Function';
				}
				else if (lineText.startsWith('declare sub ')) {
					symbolKind = vscode.SymbolKind.Method;
					symbol = line.text.trim().substring(12, line.text.trim().indexOf(' ', 12));
					symbolText = (line.text.trim().indexOf("(") != -1) ? 'Declare Sub (' + getParams(line.text) + ')' : 'Declare Sub';
				}
				else if (lineText.startsWith('declare function ')) {
					symbolKind = vscode.SymbolKind.Function;
					symbol = line.text.trim().substring(17, line.text.trim().indexOf(' ', 17));
					symbolText = (line.text.trim().indexOf("(") != -1) ? 'Declare Function (' + getParams(line.text) + ')' : 'Declare Function';
				}
				else if (lineText.startsWith('const ')) {
					symbolText = 'Const';
					let equal_pos = lineText.indexOf('=');
					if (equal_pos != -1) {
						symbol = line.text.trim().substring(6, equal_pos - 1).trim();
						if (symbol != '_') {
							symbolKind = vscode.SymbolKind.Constant;
							symbolText = '= ' + line.text.trim().substring(equal_pos + 1);
						}
					}
				}
				let pieces: string[];
				if (lineText.startsWith("'$include:")) {
					symbolKind = vscode.SymbolKind.Module;
					pieces = line.text.trim().split(':');
					symbol = pieces[1];
					symbolText = 'Include';
				}
				if (lineText.startsWith("type ")) {
					pieces = line.text.trim().split(' ');
					symbol = pieces[1];
					if (symbol.toLowerCase() != 'as') {
						symbolKind = vscode.SymbolKind.Class;
						symbolText = 'Type';
						let lineNumber: number = line.lineNumber;
						let type_lines: string[] = [];
						let x: number;
						type_lines = document.getText().split('\n').slice(lineNumber + 1, lineNumber + 1024);
						for (x = 0; x < type_lines.length; x++) {
							type_lines[x] = type_lines[x].replace('\r', '');
							if (type_lines[x].trim().toLowerCase().indexOf('end type') != -1) {
								break;
							}
						}
						let type_vars: string[] = [];
						type_vars = document.getText().split('\n').slice(lineNumber + 1, lineNumber + 1 + x);
						for (x = 0; x < type_vars.length; x++) {
							let type_var = type_vars[x].trim();
							let as_loc = type_var.toLowerCase().indexOf('as')
							pieces = type_vars[x].trim().toLowerCase().split('as');
							let child_symbol = type_var.substring(0, as_loc);
							if (pieces.length >= 1 && pieces[1] && !child_symbol.startsWith("'")) {
								let child_symbolText = type_var.substring(as_loc);
								let child_symbolKind = vscode.SymbolKind.Property;
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