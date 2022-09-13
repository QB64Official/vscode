"use strict";
import * as vscode from "vscode";
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
import { ReferenceProvider } from "./providers/ReferenceProvider";
import { DefinitionProvider } from "./providers/DefinitionProvider";
import { DocumentSymbolProvider } from "./providers/DocumentSymbolProvider";
import { DocumentFormattingEditProvider } from "./providers/DocumentFormattingEditProvider";
import { DebugAdapterDescriptorFactory } from "./providers/DebugAdapterDescriptorFactory";
import { HoverProvider } from "./providers/HoverProvider";

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


export function activate(context: vscode.ExtensionContext) {
	const config = vscode.workspace.getConfiguration("qb64")
	const documentSelector: vscode.DocumentSelector = commonFunctions.getDocumentSelector()

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
	context.subscriptions.push(vscode.commands.registerCommand('extension.openIncludeFile', () => { openIncludeFile(); }));
	context.subscriptions.push(vscode.commands.registerCommand('extension.addToGitIgnore', async (...selectedItems) => { addToGitIgnore(selectedItems); }));
	// Register Providers here
	context.subscriptions.push(vscode.languages.registerReferenceProvider(commonFunctions.getDocumentSelector(), new ReferenceProvider()));
	context.subscriptions.push(vscode.languages.registerDefinitionProvider(commonFunctions.getDocumentSelector(), new DefinitionProvider()));
	context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider(documentSelector, new DocumentSymbolProvider()));
	context.subscriptions.push(vscode.languages.registerDocumentFormattingEditProvider(documentSelector, new DocumentFormattingEditProvider()));
	context.subscriptions.push(vscode.languages.registerHoverProvider(documentSelector, new HoverProvider()));
	// Register Miscellaneous
	context.subscriptions.push(vscode.debug.registerDebugAdapterDescriptorFactory("QB64", new DebugAdapterDescriptorFactory()));
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

function openIncludeFile() {

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
