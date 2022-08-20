'use strict';
import * as vscode from 'vscode';
import { ProviderResult } from "vscode";
import fs = require('fs');
import * as gitFunctions from './gitFunctions';
import * as vscodeFunctions from './vscodeFunctions';
import * as decoratorFunctions from './decoratorFunctions';
import * as helpFunctions from './helpFunctions';
import { DebugSession, TerminatedEvent } from '@vscode/debugadapter';
import { runLintFull } from './lintFunctions'

// TODO: Get the TODOs window working.
// 	This needs to go in the package.json in the contributes
// 	,
//         "views": {
//             "explorer": [
//                 {
//                     "id": "todo",
//                     "name": "TODOs",
//                     "icon": "images\\todo.svg",
//                     "contextualTitle": "View TODOs"
//                 }
//             ]
//         }


// Channels
// They have to be cached or vsc creates a new channel every time 😒
// If we end up with a lot of changes an array of objects might be better.
var formatterhannel: any;
var openIncludeFileChannel: any;
var createBackupChannel: any;
var ownTerminal: vscode.Terminal;

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.languages.registerDocumentSymbolProvider(
			{ scheme: "file", language: "QB64" },
			new Qb64ConfigDocumentSymbolProvider()
		)
	);

	vscode.workspace.onWillSaveTextDocument(event => { CreateBackup() });

	decoratorFunctions.setupDecorate();
	//vscodeFunctions.createFiles();
	//gitFunctions.createGitignore();

	// Register Commands here
	context.subscriptions.push(vscode.commands.registerCommand('qb64.runLintFull', () => { runLintFull(); }));
	context.subscriptions.push(vscode.commands.registerCommand('qb64.showHelp', () => { showHelp(); }));
	context.subscriptions.push(vscode.commands.registerCommand('qb64.openIncludeFile', () => { openIncludeFile(context); }));
	context.subscriptions.push(vscode.commands.registerCommand('qb64.addToGitIgnore', async (...selectedItems) => { addToGitIgnore(selectedItems); }));
	context.subscriptions.push(vscode.debug.registerDebugAdapterDescriptorFactory("QB64", new InlineDebugAdapterFactory()));
}

export function addToGitIgnore(items: any) {
	gitFunctions.addToGitIgnore(items);
}

export function showHelp() {
	helpFunctions.showHelp();
}

function CreateBackup() {

	let outputChannnel: any;
	if (createBackupChannel) {
		outputChannnel = createBackupChannel
	} else {
		createBackupChannel = vscode.window.createOutputChannel("QB64: CreateBackup");
		outputChannnel = createBackupChannel;
	}
	try {
		const config = vscode.workspace.getConfiguration("qb64")
		const isCreateBakFileEnabled: boolean = config.get("isCreateBakFileEnabled");
		if (!isCreateBakFileEnabled) {
			return;
		}

		if (!vscode.window.activeTextEditor || vscode.window.activeTextEditor.document.languageId == "Log") {
			return;
		}

		let source = vscode.window.activeTextEditor.document.fileName
		let backupFile = source + "-bak";
		outputChannnel.appendLine(`Tying to copy ${source} to ${backupFile}`);
		fs.copyFileSync(source, backupFile)
		outputChannnel.appendLine(`File ${source} copied to ${backupFile}`);
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
			let file = match[1].replace("'", "");
			outputChannnel.appendLine("File Path Found: " + file);
			const path = require('path');
			let codeFile = path.dirname(vscode.window.activeTextEditor.document.fileName);
			let fullPath = path.resolve(file, codeFile) + "/" + file.substring(file.lastIndexOf("/") + 1);

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

// Gets the selected editor text is nothing is selected return empty string.
function getSelectedTextOrLineTest() {
	let editor = vscode.window.activeTextEditor;
	let retvalue = editor ? editor.document.getText(editor.selection) : "";

	if (retvalue.length < 1) {
		retvalue = editor.document.lineAt(vscode.window.activeTextEditor.selection.active.line).text;
	}
	return retvalue;
}

class InlineDebugAdapterFactory implements vscode.DebugAdapterDescriptorFactory {
	createDebugAdapterDescriptor(session: vscode.DebugSession): ProviderResult<vscode.DebugAdapterDescriptor> {
		if (!session.configuration.hasOwnProperty("command")) {
			vscode.window.showErrorMessage(`No command found for QB64 launch configuration "${session.configuration.name}". Add one like "command": "echo Hello" to your launch.json.`);
		} else {
			const terminal = getTerminal(session.configuration);
			if (!session.configuration.hasOwnProperty("showTerminal") || session.configuration.showTerminal) {
				terminal.show();
			}
			terminal.sendText(String(session.configuration.command));
		}
		return new vscode.DebugAdapterInlineImplementation(new DummyDebugSession());
	}
}

export class DummyDebugSession extends DebugSession {
	protected initializeRequest(): void {
		this.sendEvent(new TerminatedEvent());
	}
}

function getTerminal(configuration: vscode.DebugConfiguration): vscode.Terminal {
	if (
		configuration.hasOwnProperty("terminalIndex") && Number.isInteger(configuration.terminalIndex) &&
		configuration.terminalIndex >= 0 && configuration.terminalIndex < vscode.window.terminals.length
	) {
		return vscode.window.terminals[configuration.terminalIndex];
	}

	if (!ownTerminal || ownTerminal.exitStatus) {
		let name = "QB64";
		if (configuration.hasOwnProperty("terminalName")) {
			name = String(configuration.terminalName);
		}
		ownTerminal = vscode.window.createTerminal(name);
	}
	return ownTerminal;
}
