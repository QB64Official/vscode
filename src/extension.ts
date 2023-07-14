"use strict";
import * as vscode from "vscode";
import * as fs from "fs";
import * as gitFunctions from "./gitFunctions";
import * as vscodeFucnctions from "./vscodeFunctions";
import * as decoratorFunctions from "./decoratorFunctions";
import * as lintFunctions from "./lintFunctions";
import * as logFunctions from "./logFunctions";
import * as commonFunctions from "./commonFunctions";
import * as webViewFunctions from "./webViewFunctions";
import * as openInQB64Functions from "./openInQB64Functions";
import * as path from 'path';
import { TokenInfo } from "./TokenInfo";
import { ReferenceProvider } from "./providers/ReferenceProvider";
import { DefinitionProvider } from "./providers/DefinitionProvider";
import { DocumentSymbolProvider } from "./providers/DocumentSymbolProvider";
import { DocumentFormattingEditProvider } from "./providers/DocumentFormattingEditProvider";
import { HoverProvider } from "./providers/HoverProvider";
import { createDebuggerInterface } from './debugAdapter';
import net from 'net';
import { TodoTreeProvider } from "./TodoTreeProvider";
import { DebugCommands } from "./debugAdapter"
import { decorationSkipLine } from "./debugAdapter"

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

export var activeEditor: vscode.TextEditor | undefined = undefined;
export var skipLineRanges: vscode.Range[] = []; // Global variable to keep track of the decorations
export var symbolCache: vscode.DocumentSymbol[] = [];
export var todoTreeProvider: TodoTreeProvider = null;
export async function activate(context: vscode.ExtensionContext) {
	const config = vscode.workspace.getConfiguration("qb64")
	const documentSelector: vscode.DocumentSelector = commonFunctions.getDocumentSelector()

	vscode.workspace.onWillSaveTextDocument(() => {
		if (config.get("isCreateBakFileEnabled")) {
			createBackup();
		}
	});

	vscode.workspace.onDidSaveTextDocument(() => {
		if (config.get("isLintOnSaveEnabled")) {
			runLint();
		}
	});

	// Register Commands here
	webViewFunctions.setupAsciiChart(context);
	context.subscriptions.push(vscode.commands.registerCommand('extension.showHelp', () => { showHelp(); }));
	context.subscriptions.push(vscode.commands.registerCommand('extension.openCompileLog', () => { openCompileLog(); }));
	context.subscriptions.push(vscode.commands.registerCommand('extension.showHelpIndexAlphabetical', () => { showHelpByName("Keyword-Reference---Alphabetical"); }));
	context.subscriptions.push(vscode.commands.registerCommand('extension.showHelpIndexUsage', () => { showHelpByName("Keyword-Reference---By-Usage"); }));
	context.subscriptions.push(vscode.commands.registerCommand('extension.runLint', () => { runLint(); }));
	context.subscriptions.push(vscode.commands.registerCommand('extension.openCurrentFileInQB64', () => { openCurrentFileInQB64(); }));
	context.subscriptions.push(vscode.commands.registerCommand('extension.addToGitIgnore', async (...selectedItems) => { addToGitIgnore(selectedItems); }));
	context.subscriptions.push(vscode.commands.registerCommand('extension.removeLineNumbers', () => { removeLineNumbers(); }));
	context.subscriptions.push(vscode.commands.registerCommand('extension.renumberLines', () => { renumberLines(); }));

	// Register Providers here
	context.subscriptions.push(vscode.languages.registerReferenceProvider(commonFunctions.getDocumentSelector(), new ReferenceProvider()));
	context.subscriptions.push(vscode.languages.registerDefinitionProvider(commonFunctions.getDocumentSelector(), new DefinitionProvider()));
	context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider(documentSelector, new DocumentSymbolProvider()));
	context.subscriptions.push(vscode.languages.registerHoverProvider(documentSelector, new HoverProvider()));
	context.subscriptions.push(vscode.languages.registerDocumentFormattingEditProvider(documentSelector, new DocumentFormattingEditProvider()));

	// Register Miscellaneous
	//context.subscriptions.push(vscode.debug.registerDebugAdapterDescriptorFactory("QB64", new DebugAdapterDescriptorFactory()));
	//context.subscriptions.push(vscode.commands.registerCommand('extension.startDebugging', () => { createDebuggerInterface(Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000); }));

	vscode.commands.registerCommand('extension.skipLine', () => {
		if (vscode.window.activeTextEditor && vscode.debug.activeDebugSession) {
			const lineNumber = vscode.window.activeTextEditor.selection.active.line;
			const range = new vscode.Range(
				new vscode.Position(lineNumber, 0),
				new vscode.Position(lineNumber, vscode.window.activeTextEditor.document.lineAt(lineNumber).text.length)
			);

			const index = skipLineRanges.findIndex(r => r.start.line === range.start.line && r.end.line === range.end.line);

			if (index !== -1) {
				skipLineRanges.splice(index, 1);
				vscode.debug.activeDebugSession.customRequest(DebugCommands.ClearSkipLine, { line: lineNumber });
			} else {
				skipLineRanges.push(range);
				vscode.debug.activeDebugSession.customRequest(DebugCommands.SetSkipLine, { line: lineNumber });
			}
			if (vscode.window.activeTextEditor && !activeEditor) {
				activeEditor = vscode.window.activeTextEditor
			}
			// Update decorations
			vscode.window.activeTextEditor.setDecorations(decorationSkipLine, skipLineRanges);
		}
	});

	decoratorFunctions.setupDecorate();
	vscodeFucnctions.createFiles();
	gitFunctions.createGitignore();

	let tempPath: string = config.get('helpPath')
	if (tempPath == null || tempPath.length < 1) {
		let tempPath = path.join(context.extensionPath, "help");
		config.update('helpPath', tempPath, vscode.ConfigurationTarget.Global);
	}

	// Todo window stuff
	todoTreeProvider = new TodoTreeProvider();
	vscode.window.registerTreeDataProvider('todo', todoTreeProvider);
	vscode.commands.registerCommand('extension.refreshTodo', () => todoTreeProvider.refresh());


	// The number are to make sure the port is in the range of 1024 to 49151
	// Don't loop forever.
	let vsCodePort: number = await getPort();

	if (vsCodePort >= 1024) {
		createDebuggerInterface(vsCodePort);
		context.subscriptions.push(vscode.debug.registerDebugAdapterDescriptorFactory("QB64", {
			createDebugAdapterDescriptor: (session: vscode.DebugSession) => {
				return new vscode.DebugAdapterServer(vsCodePort);
			}
		}));
	} else {
		vscode.window.showErrorMessage("Unable to find an open port.");
	}
}


export async function getPort(): Promise<number> {
	let port: number = -1;
	for (let i: number = 0; i < 20; i++) {
		try {
			let testPort = Math.floor(Math.random() * (49151 - 1024 + 1)) + 1024
			if (!(await isPortInUse(testPort))) {
				port = testPort;
				break;
			}
		} catch (err) {
			console.log('Error when checking port:', err);
			port = -1;
		}
	}
	return port;
}

/**
 * Check if a port is already user.
 * @param port 
 * @returns true if in use, false if not in use
 */
function isPortInUse(port: number): Promise<boolean> {
	return new Promise((resolve, reject) => {
		const server = net.createServer();
		server.once('error', (err: { code: string; }) => {
			if (err.code === 'EADDRINUSE') {
				resolve(true);  // Port is in use
			} else {
				reject(err);  // Other error
			}
		});
		server.once('listening', () => {
			server.close();  // Close the server if port is not in use
			resolve(false);  // Port is not in use
		});
		server.listen(port);
	});
}

/**
 * Tries to find compilelog.txt and open it.
 */
export function openCompileLog() {
	const config = vscode.workspace.getConfiguration("qb64")
	try {
		let baseFolder: string = path.dirname(config.get("compilerPath"));
		if (baseFolder) {
			baseFolder = baseFolder.replaceAll("\\", "/");
			if (findAndOpenCompileLog(baseFolder, "temp")) {
				return
			} else if (findAndOpenCompileLog(baseFolder, "temp1")) {
				return
			} else if (findAndOpenCompileLog(baseFolder, "temp2")) {
				return
			} else if (findAndOpenCompileLog(baseFolder, "temp3")) {
				return
			} else if (findAndOpenCompileLog(baseFolder, "temp4")) {
				return
			} else if (findAndOpenCompileLog(baseFolder, "temp5")) {
				return
			} else if (findAndOpenCompileLog(baseFolder, "temp6")) {
				return
			} else if (findAndOpenCompileLog(baseFolder, "temp7")) {
				return
			} else if (findAndOpenCompileLog(baseFolder, "temp8")) {
				return
			} else if (findAndOpenCompileLog(baseFolder, "temp9")) {
				return
			} else {
				vscode.window.showErrorMessage("Unable to open compilelog.txt");
			}
		} else {
			vscode.window.showErrorMessage("The setting qb64.installPath must be set.")
		}
	} catch (error) {
		vscode.window.showErrorMessage(`Error IN openCompileLog: ${error}`);
	}
}

/**
 * Looks in the temp folder for compilelog.txt, if it's found the file is opened
 * @param qb64InstallPath The QB64 install path
 * @param tempFolderName Name of the temp folder to check
 * @returns True if the file was found and opened
 */
function findAndOpenCompileLog(qb64InstallPath: string, tempFolderName: string) {
	try {
		const logPath = `${qb64InstallPath}/internal/${tempFolderName}/compilelog.txt`;
		if (logPath) {
			vscode.commands.executeCommand('vscode.open', vscode.Uri.file(logPath));
			return true;
		}
		return false;
	} catch (error) {
		vscode.window.showErrorMessage(`Error in findAndOpenCompileLog: ${error}`);
	}
}

/**
 * Removes the line numbers from the current code file.
 * @param document Current TextDocument
 */
export function removeLineNumbers() {
	try {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}
		const document: vscode.TextDocument = editor.document;
		const edit = new vscode.WorkspaceEdit();

		for (let lineNumber = 0; lineNumber < document.lineCount; lineNumber++) {
			edit.replace(document.uri, document.lineAt(lineNumber).range, document.lineAt(lineNumber).text.replace(/\d+/g, "").trim());
		}
		vscode.workspace.applyEdit(edit);
	} catch (error) {
		vscode.window.showErrorMessage(error);
	}
}

/**
 * Renumber the lines the current code file.
 * @param document Current TextDocument
 */
export function renumberLines() {
	try {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}
		const document: vscode.TextDocument = editor.document;
		const edit = new vscode.WorkspaceEdit();

		for (let lineNumber = 0; lineNumber < document.lineCount; lineNumber++) {
			edit.replace(document.uri, document.lineAt(lineNumber).range, `${lineNumber + 1} ${document.lineAt(lineNumber).text.replace(/\d+/g, "").trim()}`);
		}
		vscode.workspace.applyEdit(edit);
	} catch (error) {
		vscode.window.showErrorMessage(error);
	}
}


/**
 * Opens the current file in QB64
 */
export function openCurrentFileInQB64() {
	openInQB64Functions.openCurrentFileInQB64();
}

/**
 * Add the items to .GitIgnore
 * @param items The items selected in the explorer view
 */
export function addToGitIgnore(items: any) {
	gitFunctions.addToGitIgnore(items);
}

export function showHelp() {
	new TokenInfo().showHelp();
}

export function showHelpByName(itemName: string) {
	const config = vscode.workspace.getConfiguration("qb64")
	const path = require('path');

	let helpPath: string = config.get("installPath");
	let helpFile = path.join(helpPath, "internal", "help", `${itemName}.md`).replaceAll("\\", "/");
	if (fs.existsSync(helpFile)) {
		if (config.get("isOpenHelpInEditModeEnabled")) {
			vscode.workspace.openTextDocument(helpFile).then(d => vscode.window.showTextDocument(d));
		} else {
			vscode.commands.executeCommand('markdown.showPreview', vscode.Uri.file(helpFile));
		}
	} else if (config.get("isOpenOnLineHelpEnabled")) {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(`https://github.com/QB64Official/qb64/wiki/${encodeURIComponent(itemName)}`));
	}
}

/**
 * Compiles the current file then lints the current file.
 */
export function runLint() {
	lintFunctions.runLint();
}

/**
 * Creates a backup of the current file.
 * @returns True if the file was created
 */
function createBackup() {
	let outputChannnel: any = logFunctions.getChannel(logFunctions.channelType.createBackup);
	try {

		if (!vscode.window.activeTextEditor || vscode.window.activeTextEditor.document.languageId != "QB64") {
			return false;
		}

		let filename: string = vscode.window.activeTextEditor.document.fileName;

		if (!(filename.endsWith(".bas") || filename.endsWith(".bm") || filename.endsWith(".bi"))) {
			return false;
		}

		let source = vscode.window.activeTextEditor.document.fileName
		let backupFile = source + "-bak";
		outputChannnel.appendLine(`Tying to copy ${source} to ${backupFile}`);
		fs.copyFileSync(source, backupFile)
		outputChannnel.appendLine(`File ${source} copied to ${backupFile}`);
		return true;
	} catch (error) {
		outputChannnel.appendLine(`ERROR: in createBackup:  ${error}`);
		return false;
	}
}
