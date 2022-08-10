'use strict';

import * as vscode from 'vscode';

import fs = require('fs');


// Channels
// They have to be cached or vs creates a new channel every time 😒
// If we end up with a lot of changes an array might be better.
var helpChannel: any;
var formatterhannel: any;
var qb64BuildChannel: any;
var createFilesChannel: any;


// Gets the selected editor text is nothing is selected return empty string.
function getSelectedText() {
	let editor = vscode.window.activeTextEditor;
	return editor ? editor.document.getText(editor.selection) : "";
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
				"command": "` + "${config:qb64.compilerPath} -c ${fileDirname}\\\\${fileBasename} -o ${fileDirname}\\\\${fileBasenameNoExtension}.exe -x; ${fileDirname}\\\\${fileBasenameNoExtension}.exe\","
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

export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(
		vscode.languages.registerDocumentSymbolProvider(
			{ scheme: "file", language: "QB64" },
			new Qb64ConfigDocumentSymbolProvider()
		)
	);

	createDotVSCodeFile();

	// Register Commands here
	context.subscriptions.push(vscode.commands.registerCommand('extension.showHelp', () => { showHelp(context); }));

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
		let code = getSelectedText();
		if (code.length < 1) {
			return;
		}

		// Handle cases where it's easy to select too much text or the text doesn't match the wiki page.
		if (code.toLowerCase().startsWith("end ")) {
			code = "End"
		} else if (code.toLowerCase().startsWith("end ")) {
			code = "If...Then"
		} else if (code.toLowerCase().startsWith("sub ")) {
			code = "Sub"
		} else if (code.toLowerCase().startsWith("function ")) {
			code = "Function"
		}

		let url = BASE_URL + encodeURIComponent(code);

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
		token: vscode.CancellationToken): Promise<vscode.DocumentSymbol[]> {
		return new Promise((resolve, reject) => {

			let symbols: vscode.DocumentSymbol[] = [];
			let nodes = [symbols]
			let inside_marker: boolean = false

			for (let i = 0; i < document.lineCount; i++) {
				let line = document.lineAt(i);

				if (line.text.toLowerCase().startsWith("sub ") || line.text.toLowerCase().startsWith("function ")) {

					let isSub: boolean = line.text.toLowerCase().startsWith("sub ")
					let tokens: string[] = line.text.split(" ")
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
