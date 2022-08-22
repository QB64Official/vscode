'use strict';
import * as vscode from 'vscode';
import fs = require('fs');
import * as logFunctions from './logFunctions';
import { stringify } from 'querystring';

export function createFiles() {
	// const extensionsJson = "{\"recommendations\": [\"discretegames.f5anything\"]}";

	const settingsJson =
		`{
		"files.exclude": {
			"**/*.bas-bak": true,
			"**/*.bi-bak": true,
			"**/*.bm-bak": true,
			"**/*.cmp-out": true,
			"**/*.json-bak": true
		}
	}`

	const launchJson =
		`{
			"version": "0.2.0",
			"configurations": [
				{
					"name": "QB64 Build and Run",
					"type": "QB64",
					"request": "launch",					
					"command": "` + "${config:qb64.compilerPath} -c " + String.raw`\"` + "${fileDirname}/${fileBasename}" + String.raw`\"` + " -o " + String.raw`\"` + "${fileDirname}/${fileBasenameNoExtension}.exe" + String.raw`\"` + " -x; start " + String.raw`\"` + "${fileDirname}/${fileBasenameNoExtension}.exe" + String.raw`\"` + "\","
		+ `			"terminalName": "QB64",
					"terminalIndex": -1, 
					"showTerminal": true,
					"linux": {
						"command": "` + "${config:qb64.compilerPath} -c '${fileDirname}/${fileBasename}' -o '${fileDirname}/${fileBasenameNoExtension}' -x; ${fileDirname}/${fileBasenameNoExtension}\""
		+ `		},
					"osx": {
						"command": "` + "${config:qb64.compilerPath} -c '${fileDirname}/${fileBasename}' -o '${fileDirname}/${fileBasenameNoExtension}' -x; ${fileDirname}/${fileBasenameNoExtension}\""
		+ `		}
				} 
			]\n}`;

	let outputChannnel: any = logFunctions.getChannel(logFunctions.channelType.vscode);
	try {

		if (!vscode.workspace.workspaceFolders || vscode.workspace.workspaceFolders.length < 1) {
			logFunctions.writeLine("Cannot find working folder", outputChannnel);
		}
		const vscodeFolder = vscode.workspace.workspaceFolders[0].uri.fsPath + "/.vscode";

		logFunctions.writeLine("Checking for: " + vscodeFolder, outputChannnel);
		if (fs.existsSync(vscodeFolder)) {
			logFunctions.writeLine("    Found", outputChannnel);
		} else {
			logFunctions.writeLine("Creating folder: " + vscodeFolder, outputChannnel);
			fs.mkdirSync(vscodeFolder);
		}

		const launchFile = vscodeFolder + "/launch.json";
		logFunctions.writeLine("Checking for: " + launchFile, outputChannnel);
		if (fs.existsSync(launchFile)) {
			logFunctions.writeLine("    Found", outputChannnel);
		} else {
			logFunctions.writeLine("Creating File: " + launchFile, outputChannnel);
			fs.writeFileSync(launchFile, launchJson);
		}

		const settingsFile: string = vscodeFolder + "/settings.json";

		logFunctions.writeLine("Checking for: " + settingsFile, outputChannnel);
		if (fs.existsSync(settingsFile)) {
			logFunctions.writeLine("    Found", outputChannnel);
		} else {
			logFunctions.writeLine("Creating File: " + settingsFile, outputChannnel);
			fs.writeFileSync(settingsFile, settingsJson);
		}

	} catch (error) {
		logFunctions.writeLine("ERROR: " + error, outputChannnel)
	}
}