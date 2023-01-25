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
import * as ls from "./languageServer"
import { TokenInfo } from "./TokenInfo";
import { ReferenceProvider } from "./providers/ReferenceProvider";
import { DefinitionProvider } from "./providers/DefinitionProvider";
import { DocumentSymbolProvider } from "./providers/DocumentSymbolProvider";
import { DocumentFormattingEditProvider } from "./providers/DocumentFormattingEditProvider";
import { DebugAdapterDescriptorFactory } from "./providers/DebugAdapterDescriptorFactory";
import { HoverProvider } from "./providers/HoverProvider";
import QB64LanguageClient from "./QB64LanguageClient";

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

/**
 * The language client  - will be passed around as needed.
 */
var client: QB64LanguageClient;

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

	decoratorFunctions.setupDecorate();
	vscodeFucnctions.createFiles();
	vscodeFucnctions.createFiles();
	gitFunctions.createGitignore();

	client = new QB64LanguageClient()
	await ls.activateLanguageServer(context, client);

	// Register Commands here
	webViewFunctions.setupAsciiChart(context);
	context.subscriptions.push(vscode.commands.registerCommand('extension.showHelp', () => { showHelp(); }));
	context.subscriptions.push(vscode.commands.registerCommand('extension.openCompileLog', () => { openCompileLog(); }));
	context.subscriptions.push(vscode.commands.registerCommand('extension.showHelpIndexAlphabetical', () => { showHelpByName("Keyword-Reference---Alphabetical"); }));
	context.subscriptions.push(vscode.commands.registerCommand('extension.showHelpIndexUsage', () => { showHelpByName("Keyword-Reference---By-Usage"); }));
	context.subscriptions.push(vscode.commands.registerCommand('extension.runLint', () => { runLint(); }));
	context.subscriptions.push(vscode.commands.registerCommand('extension.openCurrentFileInQB64', () => { openCurrentFileInQB64(); }));
	context.subscriptions.push(vscode.commands.registerCommand('extension.toogleTrace', () => { toogleTrace(); }));
	context.subscriptions.push(vscode.commands.registerCommand('extension.addToGitIgnore', async (...selectedItems) => { addToGitIgnore(selectedItems); }));
	// Register Providers here
	context.subscriptions.push(vscode.languages.registerReferenceProvider(commonFunctions.getDocumentSelector(), new ReferenceProvider()));
	context.subscriptions.push(vscode.languages.registerDefinitionProvider(commonFunctions.getDocumentSelector(), new DefinitionProvider()));
	context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider(documentSelector, new DocumentSymbolProvider()));
	context.subscriptions.push(vscode.languages.registerDocumentFormattingEditProvider(documentSelector, new DocumentFormattingEditProvider()));
	context.subscriptions.push(vscode.languages.registerHoverProvider(documentSelector, new HoverProvider()));

	// Register Miscellaneous
	context.subscriptions.push(vscode.debug.registerDebugAdapterDescriptorFactory("qb64", new DebugAdapterDescriptorFactory()));

}


/**
 * Called when the extension is deactivated
 */
export async function deactivate(): Promise<void> {
	if (client) {
		client.stop();
	}
}

/**
 * Tries to find compilelog.txt and open it.
 */
export function openCompileLog() {
	const config = vscode.workspace.getConfiguration("qb64")
	try {
		let qb64InstallPath: string = config.get("installPath");
		if (qb64InstallPath) {
			qb64InstallPath = qb64InstallPath.replaceAll("\\", "/");
			if (findAndOpenCompileLog(qb64InstallPath, "temp")) {
				return
			} else if (findAndOpenCompileLog(qb64InstallPath, "temp1")) {
				return
			} else if (findAndOpenCompileLog(qb64InstallPath, "temp2")) {
				return
			} else if (findAndOpenCompileLog(qb64InstallPath, "temp3")) {
				return
			} else if (findAndOpenCompileLog(qb64InstallPath, "temp4")) {
				return
			} else if (findAndOpenCompileLog(qb64InstallPath, "temp5")) {
				return
			} else if (findAndOpenCompileLog(qb64InstallPath, "temp6")) {
				return
			} else if (findAndOpenCompileLog(qb64InstallPath, "temp7")) {
				return
			} else if (findAndOpenCompileLog(qb64InstallPath, "temp8")) {
				return
			} else if (findAndOpenCompileLog(qb64InstallPath, "temp9")) {
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

/*
	Calls client.setTrace with verbose
*/
export function toogleTrace() {
	try {
		if (client) {
			client.toogleTrace();
		}
	} catch (error) {
		vscode.window.showErrorMessage(`Error in toogleTrace: ${error}`);
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
