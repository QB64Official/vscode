"use strict";
import * as vscode from "vscode";
import * as fs from "fs";
import * as logFunctions from "./logFunctions";

export function createFiles() {
	return true;
	
	const tasksJson =
		`{
		"version": "2.0.0",
		"tasks": [
			{
				"label": "build",
				"type": "shell",
				"command": ` + "\"${config:qb64pecompilerPath}\"" + `,
				"args": [
					"-c",
					"` + "'${fileDirname}/${fileBasename}'\"" + `,
					"-x",
					"-o",
					"` + "'${fileDirname}/${fileBasenameNoExtension}.exe'\"" + `
				],
				"linux": {
					"command": ` + "\"${config:qb64pecompilerPath}\"" + `,
					"args": [
						"-c",
						"` + "'${fileDirname}/${fileBasename}'\"" + `,
						"-x",
						"-o",
						"` + "'${fileDirname}/${fileBasenameNoExtension}'\"" + `
					]
				},
				"osx": {
					"command": ` + "\"${config:qb64pecompilerPath}\"" + `,
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
				"label": "Clean QB64PE",
				"type": "shell",
				"options": {
					"cwd": "` + "${config:qb64peinstallPath}/internal" + `",
				},
				"command": "` + "${config:qb64peinstallPath}/internal/clean.bat" + `",
				"linux": {
					"command":"` + "${config:qb64peinstallPath}/internal/clean.sh" + `",
				},
				"osx": {
					"command":"` + "${config:qb64peinstallPath}/internal/clean.sh" + `",
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
		"editor.multiCursorModifier": "ctrlCmd",
		"workbench.editorAssociations": {
			"*.md": "vscode.markdown.preview.editor"
		},
		"files.defaultLanguage": "QB64PE",
		"editor.tokenColorCustomizations": {
			"textMateRules": [
				{
					"scope": [
						"graphics.QB64PE"
					],
					"settings": {
						"foreground": "#00ff2a"
					}
				},
				{
					"scope": [
						"sound.QB64PE"
					],
					"settings": {
						"foreground": "#f0b411"
					}
				},
				{
					"scope": [
						"keyword.control.QB64PE"
					],
					"settings": {
						"foreground": "#d611f0"
					}
				},
				{
					"scope": [
						"debug.QB64PE"
					],
					"settings": {
						"foreground": "#f59324"
					}
				},
				{
					"scope": [
						"userfunctions.QB64PE"
					],
					"settings": {
						"foreground": "#9eaa67"
					}
				},
				{
					"scope": [
						"metacommand.QB64PE"
					],
					"settings": {
						"foreground": "#6d6b6b"
					}
				},
				{
					"scope": [
						"todo.QB64PE"
					],
					"settings": {
						"foreground": "#84e9a6",
						"fontStyle": "bold"
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
				"name": "QB64PE Build and Run",
				"type": "QB64PE",
				"request": "launch",
				"command": "` + "${config:qb64pecompilerPath} -x " + String.raw`\"` + "${fileDirname}\\\\${fileBasename}" + String.raw`\"` + ' -o ' + String.raw`\"` + '${fileDirname}\\\\${fileBasenameNoExtension}.exe\\"  -x; if ($?) { cd \\"${fileDirname}\\"; start \\"${fileDirname}\\\\${fileBasenameNoExtension}.exe' + String.raw`\"` + '}"' + `,	
				"terminalName": "QB64PE",
				"terminalIndex": -1, 
				"showTerminal": true,
				"linux": {
					"name": "QB64PE Build and Run",
					"type": "QB64PE",
					"request": "launch",					
					"command": "` + "${config:qb64pecompilerPath} '${fileDirname}/${fileBasename}' -x -o '${fileDirname}/${fileBasenameNoExtension}' && '${fileDirname}/${fileBasenameNoExtension}'\"" + `,
				},
				"osx": {
					"name": "QB64PE Build and Run",
					"type": "QB64PE",
					"request": "launch",
					"command": "` + "${config:qb64pecompilerPath} '${fileDirname}/${fileBasename}' -x -o '${fileDirname}/${fileBasenameNoExtension}'; mv '${fileDirname}/${fileBasenameNoExtension}' '${fileDirname}/${fileBasenameNoExtension}.run'; '${fileDirname}/${fileBasenameNoExtension}.run'\"" + `,
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