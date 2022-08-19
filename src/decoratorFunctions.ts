'use strict';
import * as vscode from 'vscode';

var decorateChannel: any;

const red = 0;
const green = 1;
const blue = 2;
const config = vscode.workspace.getConfiguration("qb64")
const isTodoEnabled: boolean = config.get("isTodoHighlightEnabled");
const isRGbColorEnabled: boolean = config.get("isRgbColorEnabled");
const decorationTypeTodo = vscode.window.createTextEditorDecorationType({ backgroundColor: 'green', color: 'rgb(0,0,0)' });
const decorationTypeIncludeLeading = vscode.window.createTextEditorDecorationType({ color: 'rgb(68,140,255)' })
const decorationTypeIncludeTrailing = vscode.window.createTextEditorDecorationType({ color: 'rgb(0,255,0)' })
//var editor: vscode.TextEditor = vscode.window.activeTextEditor;
var lastLine: vscode.Position

export function setupDecorate() {
	decorateAll(vscode.window.activeTextEditor); // Decorate on activate/first open

	// Do think this is necessary any more
	// vscode.workspace.onWillSaveTextDocument(event => { decorateAll() });

	// Decorate when the text editor changes
	vscode.window.onDidChangeActiveTextEditor(async (e: { document: any; }) => {
		if (!e || !e.document) {
			return
		}
		decorateAll(vscode.window.activeTextEditor);
	});

	//const editor = vscode.window.activeTextEditor;

	vscode.window.onDidChangeTextEditorSelection(() => {
		decorateSingleLine(vscode.window.activeTextEditor);
	})
}

function decorateSingleLine(editor: any) {

	let outputChannnel: any;
	if (decorateChannel) {
		outputChannnel = decorateChannel
	} else {
		decorateChannel = vscode.window.createOutputChannel("QB64: Decorate");
		outputChannnel = decorateChannel;
	}

	if (!editor || editor.document.languageId == "Log") {
		return;
	}

	let currrentLine: vscode.Position = editor.selection.active;
	try {

		let includeLeading: vscode.Range[] = []
		let includeTrailing: vscode.Range[] = []
		let todo: vscode.Range[] = []

		if ((lastLine) && lastLine.line !== currrentLine.line) {
			outputChannnel.appendLine(`Current line chagned from ${lastLine.line + 1} to ${currrentLine.line + 1} has changed.`);
			decorate(editor, lastLine.line, editor.document.lineAt(lastLine.line).text, outputChannnel, includeLeading, includeTrailing, todo);
		}

	} catch (error) {
		outputChannnel.appendLine(error);
	} finally {
		lastLine = currrentLine;
	}
}

function decorateAll(editor: any) {
	let outputChannnel: any;

	if (decorateChannel) {
		outputChannnel = decorateChannel
	} else {
		decorateChannel = vscode.window.createOutputChannel("QB64: Decorate");
		outputChannnel = decorateChannel;
	}

	let includeLeading: vscode.Range[] = []
	let includeTrailing: vscode.Range[] = []
	let todo: vscode.Range[] = []

	const sourceCode = editor.document.getText().split('\n')

	for (let line = 0; line < sourceCode.length; line++) {
		decorate(editor, line, sourceCode[line], outputChannnel, includeLeading, includeTrailing, todo);
	}

	editor.setDecorations(decorationTypeIncludeLeading, includeLeading)
	editor.setDecorations(decorationTypeIncludeTrailing, includeTrailing)
	editor.setDecorations(decorationTypeTodo, todo)
}

function decorate(editor: any, lineNumber: number, lineOfCode: string, outputChannnel: any, includeLeading: vscode.Range[], includeTrailing: vscode.Range[], todo: vscode.Range[]) {
	try {

		if (isRGbColorEnabled) {
			let matches = lineOfCode.matchAll(/(?<=rgb|rgb32)(\()[0-9]+(,[0-9]+)+(,[0-9]+)+(\))/ig);
			if (matches) {
				for (const match of matches) {
					outputChannnel.appendLine(`RGB Found at ${match.index}`);
					// Could use this to get just the numbers (\()[0-9]+(,[0-9]+)+(,[0-9]+)+(\))
					let rgb: string[] = match[0].substring(match[0].indexOf("(") + 1).replace(")", "").split(",");
					let work: vscode.Range[] = [CreateRange(match, lineNumber, 0)];
					let colorDec = vscode.window.createTextEditorDecorationType({ border: `2px solid rgb(${rgb[red]},${rgb[green]},${rgb[blue]})` })
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
		if (isTodoEnabled) {
			const matches = lineOfCode.matchAll(/(?<='*|rem*)TODO:|FIXIT:|FIXME:/ig);
			for (const match of matches) {
				todo.push(CreateRange(match, lineNumber, 0));
			}
		}
	} catch (error) {
		outputChannnel.appendLine(error);
	}

}

function CreateRange(match: RegExpMatchArray, line: number, matchIndex: number) {
	return new vscode.Range(
		new vscode.Position(line, match.index),
		new vscode.Position(line, match.index + match[matchIndex].length));
}