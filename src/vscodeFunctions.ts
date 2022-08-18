
var qb64BuildChannel: any;
var createFilesChannel: any;
import * as vscode from 'vscode';
import fs = require('fs');

export function createFiles() {
	// const extensionsJson = "{\"recommendations\": [\"discretegames.f5anything\"]}";

	const vscodeFolder = vscode.workspace.workspaceFolders[0].uri.fsPath + "/.vscode";

	const settingsJson =
		`{
		"files.exclude": {
			"**/*.bas-bak": true,
			"**/*.bi-bak": true,
			"**/*.bm-bak": true
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
					"command": "` + "${config:qb64.compilerPath} -c ${fileDirname}/${fileBasename} -o ${fileDirname}/${fileBasenameNoExtension}.exe -x; ${fileDirname}/${fileBasenameNoExtension}.exe\","
		+ `			"terminalName": "QB64",
					"terminalIndex": -1, 
					"showTerminal": true,
					"linux": {
						"command": "` + "${config:qb64.compilerPath} -c ${fileDirname}/${fileBasename} -o ${fileDirname}/${fileBasenameNoExtension} -x; ${fileDirname}/${fileBasenameNoExtension}\""
		+ `		},
					"osx": {
						"command": "` + "${config:qb64.compilerPath} -c ${fileDirname}/${fileBasename} -o ${fileDirname}/${fileBasenameNoExtension} -x; ${fileDirname}/${fileBasenameNoExtension}\""
		+ `		}
				} 
			]\n}`;

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

		const launchFile = vscodeFolder + "/launch.json";
		outputChannnel.appendLine("Checking for: " + launchFile);
		if (fs.existsSync(launchFile)) {
			outputChannnel.appendLine("    Found");
		} else {
			outputChannnel.appendLine("Creating File: " + launchFile);
			fs.writeFileSync(launchFile, launchJson);
		}

		const settingsFile: string = vscodeFolder + "/settings.json";
		outputChannnel.appendLine("Checking for: " + settingsFile);
		if (fs.existsSync(settingsFile)) {
			outputChannnel.appendLine("    Found");
		} else {
			outputChannnel.appendLine("Creating File: " + settingsFile);
			fs.writeFileSync(settingsFile, settingsJson);
		}

	} catch (error) {
		outputChannnel.appendLine("ERROR: " + error);
	}
}