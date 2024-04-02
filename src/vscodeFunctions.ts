"use strict";
import * as vscode from "vscode";
import * as fs from "fs";
import { utilities } from "./utilities";

export function createFiles() {

	const tasksJson =
		`{
		"version": "2.0.0",
		"tasks": [
			{
				"label": "build",
				"type": "shell",
				"command": ` + "\"${config:qb64.compilerPath}\"" + `,
				"args": [
					"-c",
					"` + "'${fileDirname}/${fileBasename}'\"" + `,
					"-x",
					"-o",
					"` + "'${fileDirname}/${fileBasenameNoExtension}.exe'\"" + `
				],
				"linux": {
					"command": ` + "\"${config:qb64.compilerPath}\"" + `,
					"args": [
						"-c",
						"` + "'${fileDirname}/${fileBasename}'\"" + `,
						"-x",
						"-o",
						"` + "'${fileDirname}/${fileBasenameNoExtension}'\"" + `
					]
				},
				"osx": {
					"command": ` + "\"${config:qb64.compilerPath}\"" + `,
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
					"cwd": "` + "${config:qb64.installPath}/internal" + `"
				},
				"command": "` + "${config:qb64.installPath}/internal/clean.bat" + `",
				"linux": {
					"command":"` + "${config:qb64.installPath}/internal/clean.sh" + `"
				},
				"osx": {
					"command":"` + "${config:qb64.installPath}/internal/clean.sh" + `"
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
		"workbench.editorAssociations": { "*.md": "vscode.markdown.preview.editor"	},
		"debug.console.wordWrap": false,
		"debug.allowBreakpointsEverywhere": true,
		"files.defaultLanguage": "QB64",
		"qb64.filesToSkip": [
			"qb64.bas",
			"qb64pe.bas",
			"vwatch.bm",
			"vwatch2.bm"
		],
		"editor.tokenColorCustomizations": {
			"textMateRules": [
				{
					"scope": ["graphics.QB64"],
					"settings": { "foreground": "#00ff2a" }
				},
				{
					"scope": [ "sound.QB64" ],
					"settings": { "foreground": "#f0b411" }
				},
				{
					"scope": [ "keyword.control.QB64"],
					"settings": { "foreground": "#d611f0" }
				},
				{
					"scope": [ "debug.QB64" ],
					"settings": { "foreground": "#f59324" }
				},
				{
					"scope": [ "userfunctions.QB64" ],
					"settings": { "foreground": "#9eaa67" }
				},
				{
					"scope": [ "metacommand.QB64" ],
					"settings": { "foreground": "#6d6b6b" }
				},
				{
					"scope": [ "todo.QB64" ],
					"settings": {
						"foreground": "#84e9a6",
						"fontStyle": "bold"
					}
				}
			]
		}
	}`

	const launchJson =
		`{
			"version": "0.2.0",
			"configurations": [
				{
					"name": "Launch",
					"type": "QB64",
					"request": "launch",
					` + '"program": "${file}"' + `
				}
			]
		}`;


	try {

		if (!vscode.workspace.workspaceFolders || vscode.workspace.workspaceFolders.length < 1) {
			return;
		}
		const vscodeFolder = vscode.workspace.workspaceFolders[0].uri.fsPath + "/.vscode";


		if (!fs.existsSync(vscodeFolder)) {
			utilities.log(`Creating folder: ${vscodeFolder}`);
			fs.mkdirSync(vscodeFolder);
		}

		const launchFile = vscodeFolder + "/launch.json";
		if (!fs.existsSync(launchFile)) {
			utilities.log(`Creating File: ${launchFile}`);
			fs.writeFileSync(launchFile, launchJson);
		}

		const settingsFile: string = vscodeFolder + "/settings.json";
		if (!fs.existsSync(settingsFile)) {
			utilities.log(`Creating File: ${settingsFile}`);
			fs.writeFileSync(settingsFile, settingsJson);
		}

		const buildTaskFile: string = vscodeFolder + "/tasks.json";
		if (!fs.existsSync(buildTaskFile)) {
			utilities.log(`Creating File: ${buildTaskFile}`);
			fs.writeFileSync(buildTaskFile, tasksJson);
		}

	} catch (error) {
		utilities.logError(`ERROR: ${error}`);
	}
}