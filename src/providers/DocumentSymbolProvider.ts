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

			function getParams(s:string) {
				var start_pos = s.trim().indexOf("(");
				return s.trim().substring(start_pos + 1, s.trim().lastIndexOf(")"));
			}

			for (let i = 0; i < document.lineCount; i++) {
				const line = document.lineAt(i);
				let tokens: string[] = line.text.trim().split(' ');
				let lineText = line.text.trim().toLowerCase();
				let symbol = tokens[1] || "undef";
				let symbolKind: any = false;
				if (lineText.startsWith('sub ')) {
					symbolKind = vscode.SymbolKind.Method;
					var start_pos = line.text.trim().indexOf("(");
					var symbolText = (start_pos != -1) ? 'Sub (' + getParams(line.text) + ')' : 'Sub';
				}
				if (lineText.startsWith('function ')) {
					symbolKind = vscode.SymbolKind.Function;
					var start_pos = line.text.trim().indexOf("(");
					var symbolText = (start_pos != -1) ? 'Function (' + getParams(line.text) + ')' : 'Function';
				}
				if (lineText.startsWith('declare sub ')) {
					symbolKind = vscode.SymbolKind.Method;
					symbol = tokens[2];
					var start_pos = line.text.trim().indexOf("(");
					var symbolText = (start_pos != -1) ? 'Declare Sub (' + getParams(line.text) + ')' : 'Declare Sub';
				}
				if (lineText.startsWith('declare function ')) {
					symbolKind = vscode.SymbolKind.Function;
					symbol = tokens[2];
					var start_pos = line.text.trim().indexOf("(");
					var symbolText = (start_pos != -1) ? 'Declare Function (' + getParams(line.text) + ')' : 'Declare Function';
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
					symbolKind = vscode.SymbolKind.Module;
					var pieces = line.text.trim().split(':');
					symbol = pieces[1];
					var symbolText = 'Include';
				}
				if (lineText.startsWith("type ")) {
					if (symbol.toLowerCase() != 'as') {
						symbolKind = vscode.SymbolKind.Object;
						var symbolText = 'Type';
						let z: number = line.lineNumber;
						let type_lines: string[] = [];
						let found_end_type: boolean = false;
						let exploded_str: string = '';
						while(found_end_type == false) {
							type_lines = document.getText().split('\n').slice(z+1,z+20);
							for (var x=0; x < type_lines.length; x++) {
								type_lines[x] = type_lines[x].replace('\r', '');
								if (type_lines[x].trim().toLowerCase().indexOf('end type') != -1) {
									found_end_type = true;
									break;
								}
							}
						}
						let type_vars: string[] = [];
						type_vars = document.getText().split('\n').slice(line.lineNumber+1, z+x);
						let foo = 'bar';
						//TODO extract type variable and var type for DocumentSymbol of Property
					}
				}
				if (lineText.endsWith(":") && lineText.startsWith("'") == false) {
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