'use strict';
import * as vscode from 'vscode';
import fs = require('fs');

// Channels
// They have to be cached or vsc creates a new channel every time 😒
// If we end up with a lot of changes an array of objects might be better.
var helpChannel: any;
var formatterhannel: any;
var qb64BuildChannel: any;
var createFilesChannel: any;
var decorateChannel: any;
var openIncludeFileChannel: any;

export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(
		vscode.languages.registerDocumentSymbolProvider(
			{ scheme: "file", language: "QB64" },
			new Qb64ConfigDocumentSymbolProvider()
		)
	);
	setupDecorate();
	createDotVSCodeFile();

	// Register Commands here
	context.subscriptions.push(vscode.commands.registerCommand('extension.showHelp', () => { showHelp(context); }));
	context.subscriptions.push(vscode.commands.registerCommand('extension.openIncludeFile', () => { openIncludeFile(context); }));

}

export function showHelp(context: vscode.ExtensionContext) {
	const BASE_URL = "https://github.com/QB64Official/qb64/wiki/";
	let outputChannnel: any;
	try {
		if (helpChannel) {
			outputChannnel = helpChannel
		} else {
			helpChannel = vscode.window.createOutputChannel("QB64: Help");
			outputChannnel = helpChannel;
		}

		let word = getSelectedText();
		outputChannnel.appendLine(`Base Url: ${BASE_URL} `);
		if (word.length > 0) {
			word = word.split(" ")[0];
		} else {

			let editor = vscode.window.activeTextEditor;

			if (!editor) {
				outputChannnel.appendLine('Active editor not found.'); return
			}

			if (!editor.document) {
				outputChannnel.appendLine('Active document not found.'); return
			}
			const stop: string = " (+-=<>[{}])\t";
			let lineOfCode = editor.document.lineAt(editor.selection.active.line).text;
			let cursorPostion = editor.selection.active.character;

			if (lineOfCode.substring(cursorPostion, 1).trim() == "") {
				outputChannnel.appendLine('The cursor is on a space or empty line, giving up.');
				return;
			}

			// Get the first part of athe string
			for (let i = cursorPostion - 1; i >= 0; i--) {
				let currentChar = lineOfCode.substring(i - 1, i);
				if (currentChar == "" || stop.indexOf(currentChar) >= 0) {
					break;
				}
				word = currentChar + word;
			}

			// Get the last part of athe string
			for (let i = cursorPostion; i <= lineOfCode.length; i++) {
				let currentChar = lineOfCode.substring(i - 1, i);
				if (currentChar == "" || stop.indexOf(currentChar) >= 0) {
					break;
				}
				word = word + currentChar;
			}

			if (word.length < 1) {
				outputChannnel.appendLine('Could find selected keyword');
				return;
			}
		}
		word = word.trim();
		outputChannnel.appendLine(`Word Found: ${word} `);

		// Handle cases where it's easy to select too much text or the text doesn't match the wiki page.
		if (word.toLowerCase().startsWith("end")) {
			word = "End"
		} else if (word.toLowerCase().startsWith("if")) {
			word = "If...Then"
		} else if (word.toLowerCase().startsWith("for") || word.toLowerCase().startsWith("next")) {
			word = "FOR...NEXT"
		} else if (word.toLowerCase().startsWith("sub")) {
			word = "Sub"
		} else if (word.toLowerCase().startsWith("function")) {
			word = "Function"
		}

		let url = BASE_URL + encodeURIComponent(word);

		outputChannnel.appendLine(`Open URL: ${url} `);
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(url));

		// openDefaultBrowswer(url);
	} catch (error) {
		outputChannnel.appendLine("ERROR: " + error);
	}
}

// Code Formatter
// Seems like a good place to find includes and make the double click to open work.
vscode.languages.registerDocumentFormattingEditProvider('QB64', {
	provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {

		let retvalue: vscode.TextEdit[] = [];
		let line: vscode.TextLine;
		let outputChannnel: any;

		if (formatterhannel) {
			outputChannnel = formatterhannel
		} else {
			formatterhannel = vscode.window.createOutputChannel("QB64: Formatter");
			outputChannnel = formatterhannel;
		}

		for (let i = 0; i < document.lineCount; i++) {
			line = document.lineAt(i);
			let lineText = line.text.trimEnd();

			if (lineText.endsWith(";") && lineText.toLowerCase().indexOf("print") < 0 && lineText.indexOf("print") < 0) {
				// Time to remove the ";" that is not needed at the end of the line
				do {
					lineText = lineText.substring(0, lineText.length - 1).trimEnd();
				} while (lineText.endsWith(";"))
			}

			if (lineText != line.text) {
				outputChannnel.appendLine(`Line: ${i}| C | ${line.text.trimEnd()} `);
				outputChannnel.appendLine(`Line: ${i}| N | ${lineText} `);
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
		_token: vscode.CancellationToken): Promise<vscode.DocumentSymbol[]> {
		return new Promise(function (resolve, _reject): void {

			let symbols: vscode.DocumentSymbol[] = [];
			let nodes = [symbols];
			let inside_marker: boolean = false;

			for (let i = 0; i < document.lineCount; i++) {
				let line = document.lineAt(i);

				if (line.text.toLowerCase().startsWith("sub ") || line.text.toLowerCase().startsWith("function ")) {

					let isSub: boolean = line.text.toLowerCase().startsWith("sub ");
					let tokens: string[] = line.text.split(" ");
					let marker_symbol = new vscode.DocumentSymbol(
						tokens[1].trim(),
						isSub ? "Sub" : "Function",
						isSub ? vscode.SymbolKind.Method : vscode.SymbolKind.Function,
						line.range, line.range);

					nodes[nodes.length - 1].push(marker_symbol);
					if (!inside_marker) {
						nodes.push(marker_symbol.children);
						inside_marker = true;
					}
				}
				else if (line.text.toLowerCase().startsWith("end sub") || line.text.toLowerCase().startsWith("end function")) {
					if (inside_marker) {
						nodes.pop();
						inside_marker = false;
					}
				}
			}
			resolve(symbols);
		});
	}
}

function setupDecorate() {
	decorate(vscode.window.activeTextEditor); // Decorate on activate/first open

	// Decorate on save
	vscode.workspace.onWillSaveTextDocument(event => {
		// Decorate on save
		const openEditor = vscode.window.visibleTextEditors.filter(editor => editor.document.uri === event.document.uri)[0]
		decorate(openEditor)
	})

	// Decorate when the text editor changes
	vscode.window.onDidChangeActiveTextEditor(async (e: { document: any; }) => {
		if (!e || !e.document) {
			return
		}
		decorate(vscode.window.activeTextEditor); // Decorate on activate

	});
}

function openIncludeFile(context: vscode.ExtensionContext) {
	const regexIncludeFile = /include:(.*)'/i
	let outputChannnel: any;

	if (openIncludeFileChannel) {
		outputChannnel = openIncludeFileChannel
	} else {
		openIncludeFileChannel = vscode.window.createOutputChannel("QB64: OpenIncludeFile");
		outputChannnel = openIncludeFileChannel;
	}

	try {
		let selectedText = getSelectedTextOrLineTest();
		let match = selectedText.match(regexIncludeFile)

		if (match !== null && match.index !== undefined) {
			let file = match[1].replace("'", ""); //.replace("\\", "/");
			outputChannnel.appendLine("File Path Found: " + file);
			//const path = require('path');
			//let fullPath = path.resolve(file)
			//let fullPath = require('path').resolve(file, vscode.window.activeTextEditor.document.fileName);
			let fullPath = require('path').resolve(file, vscode.workspace.workspaceFolders[0].uri.fsPath) + "/" + file.substring(file.lastIndexOf("/") + 1);

			if (fs.existsSync(fullPath)) {
				outputChannnel.appendLine("Trying to open file: " + fullPath);
				vscode.workspace.openTextDocument(fullPath).then(d => vscode.window.showTextDocument(d));
			} else {
				outputChannnel.appendLine("File " + fullPath + " not found.");
			}
		}
	} catch (error) {
		outputChannnel.appendLine("ERROR: " + error);
	}
}

function decorate(editor: vscode.TextEditor) {
	const red = 0;
	const green = 1;
	const blue = 2;
	const config = vscode.workspace.getConfiguration("qb64")
	const isTodoEnabled: boolean = config.get("isTodoHighlightEnabled");
	const isRGbColorEnabled: boolean = config.get("isRgbColorEnabled");
	const decorationTypeTodo = vscode.window.createTextEditorDecorationType({ backgroundColor: 'green', color: 'rgb(0,0,0)' });
	const decorationTypeIncludeLeading = vscode.window.createTextEditorDecorationType({ color: 'rgb(68,140,255)' })
	const decorationTypeIncludeTrailing = vscode.window.createTextEditorDecorationType({ color: 'rgb(0,255,0)' })
	const regexInclude = /'\$INCLUDE:/i
	let outputChannnel: any;

	if (decorateChannel) {
		outputChannnel = decorateChannel
	} else {
		decorateChannel = vscode.window.createOutputChannel("QB64: Decorate");
		outputChannnel = decorateChannel;
	}

	let sourceCode = editor.document.getText()
	let includeLeading: vscode.Range[] = []
	let includeTrailing: vscode.Range[] = []
	let todo: vscode.Range[] = []

	const sourceCodeArr = sourceCode.split('\n')

	for (let line = 0; line < sourceCodeArr.length; line++) {
		try {
			// Look for rgb				
			let matches = sourceCodeArr[line].matchAll(/(?<=rgb|rgb32)(\()[0-9]+(,[0-9]+)+(,[0-9]+)+(\))/ig);

			if (isRGbColorEnabled && matches) {
				for (const match of matches) {

					outputChannnel.appendLine(`RGB Found at ${match.index}`);
					// Could use this to get just the numbers (\()[0-9]+(,[0-9]+)+(,[0-9]+)+(\))
					let rgb: string[] = match[0].substring(match[0].indexOf("(") + 1).replace(")", "").split(",");
					let work: vscode.Range[] = [CreateRange(match, line, 0)];
					let colorDec = vscode.window.createTextEditorDecorationType({ border: `2px solid rgb(${rgb[red]},${rgb[green]},${rgb[blue]})` })
					editor.setDecorations(colorDec, work);
				}

				// Look for include files
				const match = sourceCodeArr[line].match(regexInclude)
				if (match !== null && match.index !== undefined) {
					includeLeading.push(CreateRange(match, line, 0));
				}

				// Look for todo
				if (isTodoEnabled) {
					const matches = sourceCodeArr[line].matchAll(/(?<='|rem)TODO:|FIXIT:|FIXME/ig);
					// const matches = sourceCodeArr[line].matchAll(new RegExp('TODO:|FIXIT:|FIXME:', "ig"));
					for (const match of matches) {
						outputChannnel.appendLine(`Todo Found Found at ${match.index}`);
						todo.push(CreateRange(match, line, 0));
					}
				}
			}
		} catch (error) {
			outputChannnel.appendLine(error);
		}
	}

	editor.setDecorations(decorationTypeIncludeLeading, includeLeading)
	editor.setDecorations(decorationTypeIncludeTrailing, includeTrailing)
	editor.setDecorations(decorationTypeTodo, todo)

}

function CreateRange(match: RegExpMatchArray, line: number, matchIndex: number) {
	return new vscode.Range(
		new vscode.Position(line, match.index),
		new vscode.Position(line, match.index + match[matchIndex].length));
}

// Gets the selected editor text is nothing is selected return empty string.
function getSelectedText() {
	let editor = vscode.window.activeTextEditor;
	return editor ? editor.document.getText(editor.selection) : "";
}

// Gets the selected editor text is nothing is selected return empty string.
function getSelectedTextOrLineTest() {
	let editor = vscode.window.activeTextEditor;
	let retvalue = editor ? editor.document.getText(editor.selection) : "";

	if (retvalue.length < 1) {
		retvalue = editor.document.lineAt(vscode.window.activeTextEditor.selection.active.line).text;
	}
	return retvalue;
}

function createDotVSCodeFile() {
	// const extensionsJson = "{\"recommendations\": [\"discretegames.f5anything\"]}";

	const vscodeFolder = vscode.workspace.workspaceFolders[0].uri.fsPath + "/.vscode";

	const extensionsJson = `{
		"recommendations": [
			"discretegames.f5anything"
		]
	}`

	const launchJson = `{
		"version": "0.2.0",
		"configurations": [
			{
				"name": "QB64",
				"type": "f5anything",
				"request": "launch",
				"command": "` + "${config:qb64.compilerPath} -c ${fileDirname}/${fileBasename} -o ${fileDirname}/${fileBasenameNoExtension}.exe -x; ${fileDirname}/${fileBasenameNoExtension}.exe\","
		+ "\n\"terminalName\": \"QB64\","
		+ "\n\"terminalIndex\": -1, \n\"showTerminal\": true \n} \n] \n}";

	let outputChannnel: any;
	try {

		if (qb64BuildChannel) {
			outputChannnel = createFilesChannel
		} else {
			createFilesChannel = vscode.window.createOutputChannel("QB64: Create Files");
			outputChannnel = createFilesChannel;
		}

		outputChannnel.appendLine("Checking for: " + vscodeFolder);
		if (fs.existsSync(vscodeFolder)) {
			outputChannnel.appendLine("    Found");
		} else {
			outputChannnel.appendLine("Creating folder: " + vscodeFolder);
			fs.mkdirSync(vscodeFolder);
		}

		let estFile = vscodeFolder + "/extensions.json";
		outputChannnel.appendLine("Checking for: " + estFile);
		if (fs.existsSync(estFile)) {
			outputChannnel.appendLine("    Found");
		} else {
			outputChannnel.appendLine("Creating File: " + estFile);
			fs.writeFileSync(estFile, extensionsJson);
		}

		let launchFile = vscodeFolder + "/launch.json";
		outputChannnel.appendLine("Checking for: " + launchFile);
		if (fs.existsSync(launchFile)) {
			outputChannnel.appendLine("    Found");
		} else {
			outputChannnel.appendLine("Creating File: " + launchFile);
			fs.writeFileSync(launchFile, launchJson);
		}
	} catch (error) {
		outputChannnel.appendLine("ERROR: " + error);
	}
}