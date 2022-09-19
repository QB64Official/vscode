"use strict";
import * as fs from "fs";
import * as vscode from "vscode";
import * as logFunctions from "./logFunctions";
import * as commonFunctions from "./commonFunctions";

export class TokenInfo {
	private outputChannnel: any = logFunctions.getChannel(logFunctions.channelType.help);
	public keyword: string = "";
	public keywordNoPrfix: string = "";
	public word: string = "";
	public offlinehelp: string = "";
	public onlineHelp: string = "";
	public WordFormatted: string = "";
	public isKeyword: boolean = true;

	constructor(token?: string, outputChannnelToUse?: any) {
		if (!token || token.length < 1) {
			const editor = vscode.window.activeTextEditor;
			let workingWord: string = "";
			workingWord = editor ? editor.document.getText(editor.selection) : "";
			if (workingWord.length > 0) {
				token = workingWord.split(" ")[0];
			} else {
				token = commonFunctions.getQB64Word(editor);
			}
		}

		if (outputChannnelToUse) {
			this.outputChannnel = outputChannnelToUse;
		}

		this.word = token;
		this.keyword = token;
		const config = vscode.workspace.getConfiguration("qb64")
		const path = require('path');

		let helpPath: string = config.get("installPath");
		let helpFile = path.join(helpPath, "internal", "help", `${this.keyword}.md`).replaceAll("\\", "/");
		if (fs.existsSync(helpFile)) {
			logFunctions.writeLine(`Found help file ${helpFile}`, this.outputChannnel);
			this.offlinehelp = helpFile;
			this.onlineHelp = `https://github.com/QB64Official/qb64/wiki/${encodeURIComponent(this.keyword)}`
			this.keywordNoPrfix = this.keyword.startsWith("_") ? this.keyword.slice(1) : this.keyword;
			return
		}

		logFunctions.writeLine(`Keyword ${this.keyword} not found adding "_" and trying again`, this.outputChannnel);
		this.keyword = `_${token}`;
		helpFile = path.join(helpPath, "internal", "help", `${this.keyword}.md`).replaceAll("\\", "/");
		if (fs.existsSync(helpFile)) {
			logFunctions.writeLine(`Found help file ${helpFile}`, this.outputChannnel);
			this.offlinehelp = helpFile;
			this.onlineHelp = `https://github.com/QB64Official/qb64/wiki/${encodeURIComponent(this.keyword)}`
			this.keywordNoPrfix = this.keyword.slice(1);
			return
		}

		logFunctions.writeLine(`Keyword ${this.keyword} markdown not found not. Tring txt file`, this.outputChannnel);
		helpFile = path.join(helpPath, "internal", "help", `${this.keyword}.txt`).replaceAll("\\", "/");
		if (fs.existsSync(helpFile)) {
			logFunctions.writeLine(`Txt help file ${helpFile}`, this.outputChannnel);
			this.onlineHelp = `https://github.com/QB64Official/qb64/wiki/${encodeURIComponent(this.keyword)}`
			this.keywordNoPrfix = this.keyword.slice(1);
			return
		}

		this.keyword = token; // Remove the leading _
		this.isKeyword = false;
		/*
		logFunctions.writeLine(`keywordInfo.word: ${this.word}`, this.outputChannnel);
		logFunctions.writeLine(`keywordInfo.keyword: ${this.keyword}`, this.outputChannnel);
		logFunctions.writeLine(`keywordInfo.keywordNoPrfix: ${this.keywordNoPrfix}`, this.outputChannnel);
		logFunctions.writeLine(`keywordInfo.offlinehelp: ${this.offlinehelp}`, this.outputChannnel);
		logFunctions.writeLine(`keywordInfo.isKeyword: ${this.isKeyword}`, this.outputChannnel);
		*/
	}

	/**
	 * Is this same token?
	 * @param token Token value to check
	 * @returns 
	 */
	public isSameToken(token: string): boolean {
		return token == this.keyword || token == this.keywordNoPrfix || token == this.word;
	}


	/**
	 * Gets the hovertext to show
	 * @returns 
	 */
	public getHoverText(): string {
		let retvalue = ""
		if (this.isKeyword) {
			if (this.offlinehelp.length > 0) {
				retvalue = fs.readFileSync(this.offlinehelp).toString();
			} else {
				retvalue = "Press F1 for help"
			}
		}
		return retvalue;
	}

	/**
	 * Opens the help.  Either online or offline
	 */
	public showHelp() {
		try {
			const config = vscode.workspace.getConfiguration("qb64");
			if (this.offlinehelp.length > 0) {
				if (config.get("isOpenHelpInEditModeEnabled")) {
					logFunctions.writeLine(`Open ${this.offlinehelp} in edit mode`, this.outputChannnel);
					vscode.workspace.openTextDocument(this.offlinehelp).then(d => vscode.window.showTextDocument(d));
				} else {
					logFunctions.writeLine(`Open ${this.offlinehelp} in view mode`, this.outputChannnel);
					vscode.commands.executeCommand('markdown.showPreview', vscode.Uri.file(this.offlinehelp));
				}
			} else if (config.get("isOpenOnLineHelpEnabled")) {
				logFunctions.writeLine(`Open URL: ${this.onlineHelp} `, this.outputChannnel);
				vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(this.onlineHelp));
			}
		} catch (error) {
			logFunctions.writeLine("ERROR: " + error, this.outputChannnel);
		}
	}

	/**
	 * Takes a keyword and makes it match the markdown file.
	 */
	helpify(): string {
		let word = this.keyword.trim().toLowerCase();
		if (word.startsWith("end")) {
			word = "End"
		} else if (word.startsWith("if")) {
			word = "If...Then"
		} else if (word.startsWith("for") || word.startsWith("next")) {
			word = "FOR...NEXT"
		} else if (word.startsWith("sub")) {
			word = "Sub"
		} else if (word.startsWith("function")) {
			word = "Function"
		} else if (word.startsWith("select") || (word.startsWith("case"))) {
			word = "SELECT-CASE"
		} else if (word.startsWith("do")) {
			word = "DO...LOOP"
		}
		return word;
	}
}