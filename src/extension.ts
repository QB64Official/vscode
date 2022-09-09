"use strict";
import * as vscode from "vscode";
import * as debugadapter from "@vscode/debugadapter";
import * as fs from "fs";
import * as gitFunctions from "./gitFunctions";
import * as vscodeFucnctions from "./vscodeFunctions";
import * as decoratorFunctions from "./decoratorFunctions";
import * as helpFunctions from "./helpFunctions";
import * as lintFunctions from "./lintFunctions";
import * as logFunctions from "./logFunctions";
import * as commonFunctions from "./commonFunctions";
import * as webViewFunctions from "./webViewFunctions";
import * as openInQB64Functions from "./openInQB64Functions";
import { ReferenceProvider } from "./ReferenceProvider";

// To swith to debug mode the scripts in the package.json need to be changed.
// https://code.visualstudio.com/api/working-with-extensions/bundling-extension#Publishing

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

var ownTerminal: vscode.Terminal;

export function activate(context: vscode.ExtensionContext) {
	const config = vscode.workspace.getConfiguration("qb64")
	const documentSelector: vscode.DocumentSelector = commonFunctions.getDocumentSelector()

	context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider(documentSelector, new Qb64ConfigDocumentSymbolProvider()));

	vscode.workspace.onWillSaveTextDocument(() => {
		if (config.get("isCreateBakFileEnabled")) {
			CreateBackup();
		}
	});

	vscode.workspace.onDidSaveTextDocument(() => {
		if (config.get("isLintOnSaveEnabled")) {
			runLint();
		}
	});

	decoratorFunctions.setupDecorate();
	vscodeFucnctions.createFiles();
	vscodeFucnctions.createFiles();
	gitFunctions.createGitignore();

	// Register Commands here
	webViewFunctions.setupAsciiChart(context);
	context.subscriptions.push(vscode.commands.registerCommand('extension.showHelp', () => { showHelp(); }));
	context.subscriptions.push(vscode.commands.registerCommand('extension.runLint', () => { runLint(); }));
	context.subscriptions.push(vscode.commands.registerCommand('extension.openCurrentFileInQB64', () => { openCurrentFileInQB64(); }));
	context.subscriptions.push(vscode.commands.registerCommand('extension.openIncludeFile', () => { openIncludeFile(context); }));
	context.subscriptions.push(vscode.commands.registerCommand('extension.addToGitIgnore', async (...selectedItems) => { addToGitIgnore(selectedItems); }));
	context.subscriptions.push(vscode.debug.registerDebugAdapterDescriptorFactory("QB64", new InlineDebugAdapterFactory()));
	context.subscriptions.push(vscode.languages.registerReferenceProvider(commonFunctions.getDocumentSelector(), new ReferenceProvider()));
}

export function openCurrentFileInQB64() {
	openInQB64Functions.openCurrentFileInQB64();
}

export function addToGitIgnore(items: any) {
	gitFunctions.addToGitIgnore(items);
}

export function showHelp() {
	helpFunctions.showHelp();
}

export function runLint() {
	lintFunctions.runLint();
}

function CreateBackup() {
	let outputChannnel: any = logFunctions.getChannel(logFunctions.channelType.createBackup);
	try {

		if (!vscode.window.activeTextEditor || vscode.window.activeTextEditor.document.languageId != "QB64") {
			return;
		}

		let filename: string = vscode.window.activeTextEditor.document.fileName;

		if (!(filename.endsWith(".bas") || filename.endsWith(".bm") || filename.endsWith(".bi"))) {
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
vscode.languages.registerDocumentFormattingEditProvider(
	{ scheme: 'file', language: 'QB64' }, {
	provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {

		let retvalue: vscode.TextEdit[] = [];
		let line: vscode.TextLine;
		let outputChannnel: any = logFunctions.getChannel(logFunctions.channelType.formatter);

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

	// The replace of \\ with / is to keep the file name from looking hokey on the oupput window.

	const regexIncludeFile = /include:(.*)'/i
	let outputChannnel: any = logFunctions.getChannel(logFunctions.channelType.openIncludeFile);

	try {
		let selectedText = commonFunctions.getSelectedTextOrLineTest();
		let match = selectedText.match(regexIncludeFile)

		if (match !== null && match.index !== undefined) {
			let file = match[1].replace("'", "").replaceAll("\\", "/");
			outputChannnel.appendLine("Include File Found: " + file);
			const path = require('path');
			let fullPath = commonFunctions.getAbsolutePath(path.dirname(vscode.window.activeTextEditor.document.fileName).replaceAll("\\", "/",) + "/", file);

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

class InlineDebugAdapterFactory implements vscode.DebugAdapterDescriptorFactory {
	createDebugAdapterDescriptor(session: vscode.DebugSession): vscode.ProviderResult<vscode.DebugAdapterDescriptor> {
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

export class DummyDebugSession extends debugadapter.DebugSession {
	protected initializeRequest(): void {
		this.sendEvent(new debugadapter.TerminatedEvent());
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
