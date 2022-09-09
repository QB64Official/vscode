"use strict";
import * as fs from "fs";
import * as vscode from "vscode";
import * as logFunctions from "./logFunctions";
import * as commonFunctions from "./commonFunctions";

export function showHelp() {

	let outputChannnel: any = logFunctions.getChannel(logFunctions.channelType.help);
	try {

		const editor = vscode.window.activeTextEditor;
		let word = editor ? editor.document.getText(editor.selection) : "";

		if (word.length > 0) {
			word = word.split(" ")[0];
		} else {

			word = commonFunctions.getQB64Word(editor);

			if (word.length < 1) {
				const defaultHelpLanding = "VS-Code-Extension";
				logFunctions.writeLine(`Could not find selected keyword. Setting word to ${defaultHelpLanding}`, outputChannnel);
				word = defaultHelpLanding;
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

		/*
		-- Don't use the following it loses the type symbol
		const currectWordRange = editor.document.getWordRangeAtPosition(editor.selection.active);
		const wrod = editor.document.getText(cwr);
		*/

		const config = vscode.workspace.getConfiguration("qb64");
		var path = require('path');
		let helpPath: string = config.get("installPath");
		let helpFile = path.join(helpPath, "internal", "help", word + ".md").replaceAll("\\", "/");

		if (helpPath.length > 0 && fs.existsSync(helpFile)) {
			logFunctions.writeLine(`Offline Help Found: ${helpFile} `, outputChannnel);
			if (config.get("isOpenHelpInEditModeEnabled")) {
				logFunctions.writeLine(`Open ${helpFile} in edit mode`, outputChannnel);
				vscode.workspace.openTextDocument(helpFile).then(d => vscode.window.showTextDocument(d));
			} else {
				logFunctions.writeLine(`Open ${helpFile} in view mode`, outputChannnel);
				vscode.commands.executeCommand('markdown.showPreview', vscode.Uri.file(helpFile));
			}
		} else {
			const base_url = "https://github.com/QB64Official/qb64/wiki/";
			logFunctions.writeLine(`Base Url: ${base_url} `, outputChannnel);
			let url = `${base_url}${encodeURIComponent(word)}`;
			logFunctions.writeLine(`Open URL: ${url} `, outputChannnel);
			vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(url));
		}

	} catch (error) {
		logFunctions.writeLine("ERROR: " + error, outputChannnel);
	}
}
