"use strict";
import * as vscode from "vscode";
import * as fs from "fs";
import * as logFunctions from "./logFunctions";

export function createFiles() {

	const tasksJson =
		`{
		"version": "2.0.0",
		"tasks": [
			{
				"label": "build",
				"type": "shell",
				"command": ` + "\"${config:qb64.installPath}/qb64.exe\"" + `,
				"args": [
					"-c",
					"` + "'${fileDirname}/${fileBasename}'\"" + `,
					"-x",
					"-o",
					"` + "'${fileDirname}/${fileBasenameNoExtension}.exe'\"" + `
				],
				"linux": {
					"command": ` + "\"${config:qb64.installPath}/qb64\"" + `,
					"args": [
						"-c",
						"` + "'${fileDirname}/${fileBasename}'\"" + `,
						"-x",
						"-o",
						"` + "'${fileDirname}/${fileBasenameNoExtension}'\"" + `
					]
				},
				"osx": {
					"command": ` + "\"${config:qb64.installPath}/qb64\"" + `,
					"args": [
						"-c",
						"` + "'{fileDirname}/${fileBasename}'\"" + `,
						"-x",
						"-o",
						"` + "'${fileDirname}/${fileBasenameNoExtension}'\"" + `
					]
				},
				"group": {
					"kind": "build",
					"isDefault": true
				},
				"presentation": {
					"reveal": "always",
					"panel": "new"
				}
			},
			{
				"label": "Clean QB64",
				"type": "shell",
				"options": {
					"cwd": "` + "${config:qb64.installPath}/internal" + `",
				},
				"command": "` + "${config:qb64.installPath}/internal/clean.bat" + `",
				"linux": {
					"command":"` + "${config:qb64.installPath}/internal/clean.sh" + `",
				},
				"osx": {
					"command":"` + "${config:qb64.installPath}/internal/clean.sh" + `",
				},
				"group": {
					"kind": "build",
					"isDefault": false
				},
				"presentation": {
					"reveal": "always",
					"panel": "new"
				}
			},
			{
			"label": "Exe Compact",
			"type": "shell",
			"windows": {
				"command": "compact",
				"args": [
					"/c",
					"/exe:lzx",
					`+ "\"\\\"${fileDirname}\\\\${fileBasenameNoExtension}.exe\\\"\"" + `
				]
			},
			"linux": {
				"command": "upx",
				"args": [
					` + "\"${fileDirname}/${fileBasenameNoExtension}.exe\"" + `
				]
			},
			"osx": {
				"command": "upx",
				"args": [
					` + "\"${fileDirname}/${fileBasenameNoExtension}.exe\"" + `
				]
			},
			"group": {
				"kind": "build",
				"isDefault": false
			},
			"presentation": {
				"reveal": "always",
				"panel": "new"
			}
		}
		]
	}`

	const settingsJson =
		`{
		"files.exclude": {
			"**/*.bas-bak": true,
			"**/*.bi-bak": true,
			"**/*.bm-bak": true,
			"**/*.cmp-out": true,
			"**/*.json-bak": true,
			"**/desktop.ini": true
		},
		"files.defaultLanguage": "QB64",
		"editor.multiCursorModifier": "ctrlCmd",
		"editor.tokenColorCustomizations": {
			"textMateRules": [
				{
					"scope": [
						"graphics.QB64"
					],
					"settings": {
						"foreground": "#00ff2a"
					}
				},
				{
					"scope": [
						"sound.QB64"
					],
					"settings": {
						"foreground": "#f0b411"
					}
				},
				{
					"scope": [
						"keyword.control.QB64"
					],
					"settings": {
						"foreground": "#d611f0"
					}
				}
			]
		},
	}`

	const launchJson =
		`{
		"version": "0.2.0",
		"configurations": [
			{
				"name": "QB64 Build and Run",
				"type": "QB64",
				"request": "launch",					
				"command": "` + "${config:qb64.installPath}/qb64.exe -c -x " + String.raw`\"` + "${fileDirname}/${fileBasename}" + String.raw`\"` + " -o " + String.raw`\"` + "${fileDirname}/${fileBasenameNoExtension}.exe" + String.raw`\"` + " -x; start " + String.raw`\"` + "${fileDirname}/${fileBasenameNoExtension}.exe" + String.raw`\"` + "\"," + `
				"terminalName": "QB64",
				"terminalIndex": -1, 
				"showTerminal": true,
				"linux": {
					"command": "` + "${config:qb64.installPath}/qb64 '${fileDirname}/${fileBasename}' -c -x -o '${fileDirname}/${fileBasenameNoExtension}'; mv '${fileDirname}/${fileBasenameNoExtension}' '${fileDirname}/${fileBasenameNoExtension}.run'; '${fileDirname}/${fileBasenameNoExtension}.run'\"" + `,
				},
				"osx": {
					"command": "` + "${config:qb64.installPath}/qb64 '${fileDirname}/${fileBasename}' -c -x -o '${fileDirname}/${fileBasenameNoExtension}'; mv '${fileDirname}/${fileBasenameNoExtension}' '${fileDirname}/${fileBasenameNoExtension}.run'; '${fileDirname}/${fileBasenameNoExtension}.run'\"" + `,
				}
			} 
		]
	}`;

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

		const buuildTaskFile: string = vscodeFolder + "/tasks.json";
		logFunctions.writeLine("Checking for: " + buuildTaskFile, outputChannnel);
		if (fs.existsSync(buuildTaskFile)) {
			logFunctions.writeLine("    Found", outputChannnel);
		} else {
			logFunctions.writeLine("Creating File: " + buuildTaskFile, outputChannnel);
			fs.writeFileSync(buuildTaskFile, tasksJson);
		}

	} catch (error) {
		logFunctions.writeLine("ERROR: " + error, outputChannnel)
	}
}