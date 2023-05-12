"use strict";
import * as vscode from "vscode";
import * as logFunctions from "./logFunctions";
import * as commonFunctions from "./commonFunctions";
import { symbolCache } from "./extension";

const red = 0;
const green = 1;
const blue = 2;
const decorationTypeTodo = vscode.window.createTextEditorDecorationType({ backgroundColor: 'green', color: 'rgb(0,0,0)' });
const decorationTypeIncludeLeading = vscode.window.createTextEditorDecorationType({ color: 'rgb(68,140,255)' })
const decorationTypeIncludeTrailing = vscode.window.createTextEditorDecorationType({ color: 'rgb(0,255,0)' })
const decorationTypeCurrentRow = vscode.window.createTextEditorDecorationType(
	{
		fontWeight: "bold",
		borderRadius: "5px",
		dark: { border: "1px solid rgb(215,215,215); opacity: 0.5;" },
		light: { border: "1px solid rgb(115,115,115); opacity: 0.5;" }
	}
);

const decorationTypeSub = vscode.window.createTextEditorDecorationType(
	{
		fontWeight: "bolder",
		dark: { color: "rgb(45, 156, 66);", },
		light: { color: "rgb(78, 74, 139);", }
	}
);

let lastLine: vscode.Position;
export function setupDecorate() {
	symbolCache.length = 0;
	vscode.commands.executeCommand<vscode.DocumentSymbol[]>('vscode.executeDocumentSymbolProvider', vscode.window.activeTextEditor.document.uri)
		.then(() => {
			decorateAll(vscode.window.activeTextEditor);
		});

	vscode.window.onDidChangeActiveTextEditor((editor): void => {
		if (editor) {
			vscode.commands.executeCommand<vscode.DocumentSymbol[]>('vscode.executeDocumentSymbolProvider', editor.document.uri)
				.then(() => {
					decorateAll(editor);
				});
		}
	});
	vscode.window.onDidChangeTextEditorSelection(() => { decorateSingleLine(vscode.window.activeTextEditor); })
}

function decorateSingleLine(editor: any) {
	let outputChannnel: any = logFunctions.getChannel(logFunctions.channelType.decorator);

	if (!editor || editor.document.languageId == "Log" || editor.document.fileName == "extension-output-qb64-official.qb64-#3-QB64: Decorate") {
		return;
	}

	const currrentLine: vscode.Position = editor.selection.active;

	try {

		if (!currrentLine) {
			return;
		}

		const config = vscode.workspace.getConfiguration("qb64");

		let includeLeading: vscode.Range[] = [];
		let includeTrailing: vscode.Range[] = [];
		let todo: vscode.Range[] = [];
		let subs: vscode.Range[] = [];


		if (lastLine && lastLine.line != currrentLine.line) {
			decorate(editor, lastLine.line, editor.document.lineAt(lastLine.line).text, outputChannnel, includeLeading, includeTrailing, todo, subs);
		}

		if (config.get("isCurrentRowHighlightEnabled")) {
			let current: vscode.Range[] = [new vscode.Range(
				new vscode.Position(currrentLine.line, 0),
				new vscode.Position(currrentLine.line, editor.document.lineAt(currrentLine.line).text.length))
			];
			editor.setDecorations(decorationTypeCurrentRow, []);
			editor.setDecorations(decorationTypeCurrentRow, current);
		}


	} catch (error) {
		logFunctions.writeLine(`ERROR in decorateSingleLine: ${error}`, outputChannnel);
	} finally {
		if (currrentLine) {
			lastLine = currrentLine;
		}
	}
}

export function decorateAll(editor: any) {

	if (!editor || editor.document.languageId == "Log" || editor.document.fileName == "extension-output-qb64-official.qb64-#3-QB64: Decorate") {
		return;
	}

	let outputChannnel: any = logFunctions.getChannel(logFunctions.channelType.decorator);
	try {
		const sourceCode = editor.document.getText().split('\n');
		let includeLeading: vscode.Range[] = [];
		let includeTrailing: vscode.Range[] = [];
		let todos: vscode.Range[] = [];
		let subs: vscode.Range[] = [];

		for (let line = 0; line < sourceCode.length; line++) {
			decorate(editor, line, sourceCode[line], outputChannnel, includeLeading, includeTrailing, todos, subs);
		}

		editor.setDecorations(decorationTypeIncludeLeading, includeLeading);
		editor.setDecorations(decorationTypeIncludeTrailing, includeTrailing);
		editor.setDecorations(decorationTypeTodo, todos);
		editor.setDecorations(decorationTypeSub, subs);

	} catch (error) {
		logFunctions.writeLine(`ERROR in decorateAll: ${error}`, outputChannnel);
	}
}

function decorate(editor: any, lineNumber: number, lineOfCode: string, outputChannnel: any, includeLeading: vscode.Range[], includeTrailing: vscode.Range[], todos: vscode.Range[], subs: vscode.Range[]) {

	if (!editor || editor.document.languageId == "Log" || editor.document.fileName == "extension-output-qb64-official.qb64-#3-QB64: Decorate") {
		return;
	}

	try {
		logFunctions.writeLine(`decorate | lineNumber: ${lineNumber + 1} | editor.selection.active.line: ${editor.selection.active.line} | Code: ${lineOfCode}`, outputChannnel);
		const config = vscode.workspace.getConfiguration("qb64")
		if (config.get("isRgbColorEnabled")) {
			let matches = lineOfCode.matchAll(/(?<=rgb|rgb32)(\()[ 0-9]+(,[ 0-9]+)+(,[ 0-9]+)+(\))/ig);
			if (matches) {
				for (const match of matches) {
					logFunctions.writeLine(`lineNumber: ${lineNumber} | RGB Match Found at Column: ${match.index}`, outputChannnel);
					// Could use this to get just the numbers (\()[0-9]+(,[0-9]+)+(,[0-9]+)+(\))
					let rgb: string[] = match[0].substring(match[0].indexOf("(") + 1).replace(")", "").split(",");
					let work: vscode.Range[] = [commonFunctions.createRange(match, lineNumber, 0)];
					let colorDec = vscode.window.createTextEditorDecorationType({ border: `2px solid rgb(${rgb[red]},${rgb[green]},${rgb[blue]})`, borderRadius: "5px" });
					editor.setDecorations(colorDec, work);
				}
			}
		}

		// Look for include files
		let match = lineOfCode.match(/'\$INCLUDE:/i)
		if (match !== null && match.index !== undefined) {
			includeLeading.push(commonFunctions.createRange(match, lineNumber, 0));
			match = lineOfCode.match(/'(.*)'/i)
			if (match !== null && match.index !== undefined) {
				includeTrailing.push(commonFunctions.createRange(match, lineNumber, 0));
			}
		}

		// Look for todo
		if (config.get("isTodoHighlightEnabled")) {
			const matches = lineOfCode.matchAll(/(?<='*|rem*)TODO:|FIXIT:|FIXME:/ig);
			for (const match of matches) {
				todos.push(commonFunctions.createRange(match, lineNumber, 0));
			}
		}

		if (symbolCache && symbolCache.length > 0) {
			const tokens = lineOfCode.split(/[\s(]+/);
			for (let tokenIndex = 0; tokenIndex < tokens.length; tokenIndex++) {
				const sub = symbolCache.find((s) => s.name.toLowerCase() === tokens[tokenIndex].toLowerCase() && (s.kind === vscode.SymbolKind.Method || s.kind === vscode.SymbolKind.Function));
				if (sub) {

					const matches = lineOfCode.matchAll(new RegExp(`\\s*(\\b(call|declare sub|sub|function|\\s+=\\s+)\\s+)?${commonFunctions.escapeRegExp(sub.name)}(?:\\()?(?!\\))`, 'gi'));

					/*
					if (lineOfCode == "MachSpeed& = CalcDelay&") {
						console.log("here");
					}
					*/

					for (let match of matches) {

						let start: number = match.index < 1 ? match[0].toLowerCase().indexOf(sub.name.toLowerCase()) : match.index
						let stop: number = match.index < 1 ? start + sub.name.length : start + sub.name.length + 1

						subs.push(
							new vscode.Range(
								new vscode.Position(lineNumber, start),
								new vscode.Position(lineNumber, stop)
							));
					}
				}
			}
		}

	} catch (error) {
		logFunctions.writeLine(`ERROR in decorate: ${error}`, outputChannnel);
	}
}