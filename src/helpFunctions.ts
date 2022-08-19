import * as vscode from 'vscode';

var helpChannel: any;

export function showHelp() {
	const BASE_URL = "https://github.com/QB64Official/qb64/wiki/";
	let outputChannnel: any;
	try {
		if (helpChannel) {
			outputChannnel = helpChannel
		} else {
			helpChannel = vscode.window.createOutputChannel("QB64: Help");
			outputChannnel = helpChannel;
		}
		const editor = vscode.window.activeTextEditor;
		let word = editor ? editor.document.getText(editor.selection) : "";

		outputChannnel.appendLine(`Base Url: ${BASE_URL} `);
		if (word.length > 0) {
			word = word.split(" ")[0];
		} else {
			if (!editor) {
				outputChannnel.appendLine('Active editor not found.'); return
			}

			if (!editor.document) {
				outputChannnel.appendLine('Active document not found.'); return
			}
			const stop: string = " (+-=<>[{}])\t";
			const lineOfCode = editor.document.lineAt(editor.selection.active.line).text;
			const cursorPostion = editor.selection.active.character;

			if (lineOfCode.substring(cursorPostion, 1).trim() == "") {
				outputChannnel.appendLine('The cursor is on a space or empty line, giving up.');
				return;
			}

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
				outputChannnel.appendLine('Could not find selected keyword');
				return;
			}
		}
		word = word.trim();
		outputChannnel.appendLine(`Word Found: ${word} `);

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

		let url = BASE_URL + encodeURIComponent(word);

		outputChannnel.appendLine(`Open URL: ${url} `);
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(url));

		// openDefaultBrowswer(url);
	} catch (error) {
		outputChannnel.appendLine("ERROR: " + error);
	}
}
