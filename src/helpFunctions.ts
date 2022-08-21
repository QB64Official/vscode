"use strict";
import * as vscode from "vscode";
import * as logFunctions from "./logFunctions";

export function showHelp() {
	const base_url = "https://github.com/QB64Official/qb64/wiki/";
	let outputChannnel: any = logFunctions.getChannel(logFunctions.channelType.help);
	try {

		const editor = vscode.window.activeTextEditor;
		let word = editor ? editor.document.getText(editor.selection) : "";

		logFunctions.writeLine(`Base Url: ${base_url} `, outputChannnel);
		if (word.length > 0) {
			word = word.split(" ")[0];
		} else {
			if (!editor) {
				logFunctions.writeLine("Active editor not found", outputChannnel);
				return;
			}

			if (!editor.document) {
				logFunctions.writeLine("Active document not found", outputChannnel);
				return;
			}
			const stop: string = " (+-=<>[{}]`)\t";
			const lineOfCode = editor.document.lineAt(editor.selection.active.line).text;
			const cursorPostion = editor.selection.active.character;

			// Get the first part of athe string
			for (let i: number = cursorPostion - 1; i >= 0; i--) {
				let currentChar = lineOfCode.substring(i - 1, i);
				if (currentChar == "" || stop.indexOf(currentChar) >= 0) {
					break;
				}
				word = currentChar + word;
			}

			// Get the last part of athe string
			for (let i: number = cursorPostion; i <= lineOfCode.length; i++) {
				let currentChar = lineOfCode.substring(i - 1, i);
				if (currentChar == "" || stop.indexOf(currentChar) >= 0) {
					break;
				}
				word = word + currentChar;
			}

			if (word.length < 1) {
				logFunctions.writeLine("Could not find selected keyword", outputChannnel);
				return;
			}
		}
		word = word.trim();
		logFunctions.writeLine(`Word Found: ${word}`, outputChannnel);

		// Handle cases where it's easy to select too much text or the text doesn't match the wiki page.
		if (word.toLowerCase().startsWith("end")) {
			word = "End"
		} else if (word.toLowerCase().startsWith("if")) {
			word = "If...Then"
		} else if (word.toLowerCase().startsWith("for") || word.toLowerCase().startsWith("next")) {
			word = "FOR...NEXT"
		} else if (word.toLowerCase().startsWith("sub")) {
			word = "Sub"
		} else if (word.toLowerCase().startsWith("function")) {
			word = "Function"
		}

		let url = `${base_url}${encodeURIComponent(word)}`;
		logFunctions.writeLine(`Open URL: ${url} `, outputChannnel);
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(url));

	} catch (error) {
		logFunctions.writeLine("ERROR: " + error, outputChannnel);
	}
}
