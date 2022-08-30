"use strict";
import * as vscode from "vscode";
import * as logFunctions from "./logFunctions"



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
		dark: {
			border: "1px solid rgb(215,215,215)",
		},
		light: {
			border: "1px solid rgb(115,115,115)",
		}
	}
);

var lastLine: vscode.Position;

export function setupDecorate() {
	decorateAll(vscode.window.activeTextEditor); // Decorate on activate/first open

	// Decorate when the text editor changes
	vscode.window.onDidChangeActiveTextEditor(async (e: { document: any; }) => {
		if (!e || !e.document) {
			return
		}
		decorateAll(vscode.window.activeTextEditor);
	});

	vscode.window.onDidChangeTextEditorSelection(() => { decorateSingleLine(vscode.window.activeTextEditor); })
}

function decorateSingleLine(editor: any) {
	let outputChannnel: any = logFunctions.getChannel(logFunctions.channelType.decorator);
	if (!editor || editor.document.languageId == "Log") {
		return;
	}
	let currrentLine: vscode.Position = editor.selection.active;
	try {
		const config = vscode.workspace.getConfiguration("qb64")
		let includeLeading: vscode.Range[] = []
		let includeTrailing: vscode.Range[] = []
		let todo: vscode.Range[] = []

		if ((!lastLine) || lastLine.line !== currrentLine.line) {
			logFunctions.writeLine(`Current line chagned from ${lastLine.line + 1} to ${currrentLine.line + 1} has changed.`, outputChannnel);
			decorate(editor, lastLine.line, editor.document.lineAt(lastLine.line).text, outputChannnel, includeLeading, includeTrailing, todo);
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
		logFunctions.writeLine(`ERROR: ${error}`, outputChannnel);
	} finally {
		if (currrentLine) {
			lastLine = currrentLine;
		}
	}
}

function decorateAll(editor: any) {

	if (!editor) {
		return;
	}

	let outputChannnel: any = logFunctions.getChannel(logFunctions.channelType.decorator);
	try {
		const sourceCode = editor.document.getText().split('\n');
		let includeLeading: vscode.Range[] = [];
		let includeTrailing: vscode.Range[] = [];
		let todo: vscode.Range[] = [];
		for (let line = 0; line < sourceCode.length; line++) {
			decorate(editor, line, sourceCode[line], outputChannnel, includeLeading, includeTrailing, todo);
		}

		editor.setDecorations(decorationTypeIncludeLeading, includeLeading);
		editor.setDecorations(decorationTypeIncludeTrailing, includeTrailing);
		editor.setDecorations(decorationTypeTodo, todo);

	} catch (error) {
		logFunctions.writeLine(`ERROR: ${error}`, outputChannnel);
	}
}

function decorate(editor: any, lineNumber: number, lineOfCode: string, outputChannnel: any, includeLeading: vscode.Range[], includeTrailing: vscode.Range[], todo: vscode.Range[]) {
	try {
		const config = vscode.workspace.getConfiguration("qb64")
		if (config.get("isRgbColorEnabled")) {
			let matches = lineOfCode.matchAll(/(?<=rgb|rgb32)(\()[0-9]+(,[0-9]+)+(,[0-9]+)+(\))/ig);
			if (matches) {
				for (const match of matches) {
					logFunctions.writeLine(`RGB Found at ${match.index}`, outputChannnel);
					// Could use this to get just the numbers (\()[0-9]+(,[0-9]+)+(,[0-9]+)+(\))
					let rgb: string[] = match[0].substring(match[0].indexOf("(") + 1).replace(")", "").split(",");
					let work: vscode.Range[] = [CreateRange(match, lineNumber, 0)];
					let colorDec = vscode.window.createTextEditorDecorationType({ border: `2px solid rgb(${rgb[red]},${rgb[green]},${rgb[blue]})`, borderRadius: "5px" });
					editor.setDecorations(colorDec, work);
				}
			}
		}

		// Look for include files
		let match = lineOfCode.match(/'\$INCLUDE:/i)
		if (match !== null && match.index !== undefined) {
			includeLeading.push(CreateRange(match, lineNumber, 0));
			match = lineOfCode.match(/'(.*)'/i)
			if (match !== null && match.index !== undefined) {
				includeTrailing.push(CreateRange(match, lineNumber, 0));
			}
		}

		// Look for todo
		if (config.get("isTodoHighlightEnabled")) {
			const matches = lineOfCode.matchAll(/(?<='*|rem*)TODO:|FIXIT:|FIXME:/ig);
			for (const match of matches) {
				todo.push(CreateRange(match, lineNumber, 0));
			}
		}
		logFunctions.writeLine(`lineNumber: ${lineNumber}`, outputChannnel);
		logFunctions.writeLine(`editor.selection.active.line: ${editor.selection.active.line}`, outputChannnel);

	} catch (error) {
		logFunctions.writeLine(`ERROR: ${error}`, outputChannnel);
	}
}

function CreateRange(match: RegExpMatchArray, line: number, matchIndex: number) {
	return new vscode.Range(
		new vscode.Position(line, match.index),
		new vscode.Position(line, match.index + match[matchIndex].length));
}

function border(arg0: { fontWeight: string; dark: any; }, arg1: { border: string; }, border: any, arg3: string, borderRadius: any, arg5: string) {
	throw new Error("Function not implemented.");
}
