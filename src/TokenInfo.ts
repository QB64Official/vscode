"use strict";
import * as fs from "fs";
import * as vscode from "vscode";
import * as commonFunctions from "./commonFunctions";
import { globalCache } from "./globalCache";

export class TokenInfo {
	private outputChannnel: any = null;
	private readonly lineOfCode: string = "";
	public readonly keyword: string = "";
	public keywordNoPrfix: string = "";
	public readonly token: string = "";
	public offlinehelp: string = "";
	public onlineHelp: string = ""; // Should be read only or have a private setter.
	public WordFormatted: string = ""; // Should be read only or have a private setter.
	public readonly isKeyword: boolean = true;

	constructor(token?: string, lineOfCode?: string) {
		if (!token || token.length < 1) {
			const editor = vscode.window.activeTextEditor;
			let word: string = "";
			word = editor ? editor.document.getText(editor.selection) : "";
			if (word.length > 0) {
				token = word.split(" ")[0];
			} else {
				token = commonFunctions.getQB64Word(editor);
			}
		}

		if (lineOfCode && lineOfCode.length > 0) {
			this.lineOfCode = lineOfCode
		} else {
			if (vscode.window.activeTextEditor) {
				this.lineOfCode = vscode.window.activeTextEditor.document.lineAt(vscode.window.activeTextEditor.selection.active.line).text;
			}
		}

		this.token = token;
		this.keyword = token;
		const config: vscode.WorkspaceConfiguration = globalCache.getConfiguration();
		const path = require('path');

		let helpPath: string = config.get("helpPath");
		let helpFile: string = path.join(helpPath, `${this.helpify()}.md`).replaceAll("\\", "/");

		//if (this.lineOfCode.toLowerCase().trim().indexOf("for") == 0 || this.lineOfCode.toLowerCase().trim().indexOf("if") == 0) {
		if (fs.existsSync(helpFile)) {
			this.setHelpToFile(helpFile, config);
			return
		}
		//}

		// if (fs.existsSync(helpFile)) {
		// 	this.setHelpToFile(helpFile, config);
		// 	return
		// }

		// This really needs reworked
		helpFile = path.join(helpPath, `${this.keyword.toUpperCase()}$.md`).replaceAll("\\", "/");
		if (fs.existsSync(helpFile)) {
			this.setHelpToFile(helpFile, config);
			return
		}

		helpFile = path.join(helpPath, `${this.keyword.toUpperCase()}.md`).replaceAll("\\", "/");
		if (fs.existsSync(helpFile)) {
			this.setHelpToFile(helpFile, config);
			return
		}

		helpFile = path.join(helpPath, `${this.keyword.toUpperCase()}.txt`).replaceAll("\\", "/");
		if (fs.existsSync(helpFile)) {
			this.setHelpToFile(helpFile, config);
			return
		}

		helpFile = path.join(helpPath, `${this.keyword.toUpperCase()}$.txt`).replaceAll("\\", "/");
		if (fs.existsSync(helpFile)) {
			this.setHelpToFile(helpFile, config);
			return
		}

		helpFile = path.join(helpPath, `$${this.keyword.toUpperCase()}.md`).replaceAll("\\", "/");
		if (fs.existsSync(helpFile)) {
			this.setHelpToFile(helpFile, config);
			return
		}

		helpFile = path.join(helpPath, `$${this.keyword.toUpperCase()}.txt`).replaceAll("\\", "/");
		if (fs.existsSync(helpFile)) {
			this.setHelpToFile(helpFile, config);
			return
		}

		this.keyword = `_${token}`;
		helpFile = path.join(helpPath, `${this.keyword.toUpperCase()}$.md`).replaceAll("\\", "/");
		if (fs.existsSync(helpFile)) {
			this.setHelpToFile(helpFile, config);
			return
		}

		helpFile = path.join(helpPath, `${this.keyword.toUpperCase()}.md`).replaceAll("\\", "/");
		if (fs.existsSync(helpFile)) {
			this.setHelpToFile(helpFile, config);
			return
		}

		helpFile = path.join(helpPath, `$$${this.keyword.toUpperCase()}.md`).replaceAll("\\", "/");
		if (fs.existsSync(helpFile)) {
			this.setHelpToFile(helpFile, config);
			return
		}

		helpFile = path.join(helpPath, `$$${this.keyword.toUpperCase()}.txt`).replaceAll("\\", "/");
		if (fs.existsSync(helpFile)) {
			this.setHelpToFile(helpFile, config);
			return
		}

		helpFile = path.join(helpPath, `${this.keyword.toUpperCase()}.txt`).replaceAll("\\", "/");
		if (fs.existsSync(helpFile)) {
			this.setHelpToFile(helpFile, config);
			return
		}

		helpFile = path.join(helpPath, `${this.keyword.toUpperCase()}$.txt`).replaceAll("\\", "/");
		if (fs.existsSync(helpFile)) {
			this.setHelpToFile(helpFile, config);
			return
		}


		this.keyword = token;
		this.isKeyword = false;
		this.WordFormatted = token;
	}

	/**
	 * Sets the properties to a help file.
	 * @param helpfile 
	 */
	private setHelpToFile(helpfile: string, config: vscode.WorkspaceConfiguration) {
		this.offlinehelp = helpfile;
		this.onlineHelp = `https://github.com/QB64Official/qb64/wiki/${encodeURIComponent(this.keyword)}`
		this.keywordNoPrfix = this.keyword.startsWith("_") ? this.keyword.slice(1) : this.keyword;
		this.WordFormatted = this.getWordFormatted(config);
	}

	/**
	 * Gets the hovertext to show
	 * @returns 
	 */
	public getHoverText(): string {
		let retvalue = ""
		if (this.isKeyword) {
			if (this.offlinehelp.length > 0) {
				const config: vscode.WorkspaceConfiguration = globalCache.getConfiguration();
				let helpPath: string = config.get("helpPath");
				retvalue = fs.readFileSync(this.offlinehelp).toString();
				retvalue = retvalue.replaceAll(/\[([\w|\$]*)\]\(([\w|\$]*)\)/igm, '[$1](file:' + helpPath.replaceAll('\\', '/') + '/$1.md)');
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
			const config: vscode.WorkspaceConfiguration = globalCache.getConfiguration();
			if (this.offlinehelp.length > 0) {
				if (config.get("isOpenHelpInEditModeEnabled")) {
					globalCache.writeToChannel(`Open ${this.offlinehelp} in edit mode`, this.outputChannnel);
					vscode.workspace.openTextDocument(this.offlinehelp).then(d => vscode.window.showTextDocument(d));
				} else {
					globalCache.writeToChannel(`Open ${this.offlinehelp} in view mode`, this.outputChannnel);
					vscode.commands.executeCommand('markdown.showPreview', vscode.Uri.file(this.offlinehelp));
				}
			} else if (config.get("isOpenOnLineHelpEnabled")) {
				globalCache.writeToChannel(`Open URL: ${this.onlineHelp} `, this.outputChannnel);
				vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(this.onlineHelp));
			}
		} catch (error) {
			globalCache.writeToChannel(`ERROR in showHelp: ${error}`, this.outputChannnel);
			vscode.window.showErrorMessage(`"ERROR: ${error}`)
		}
	}

	/**
	 * Takes a keyword and makes it match the markdown file.
	 */
	private helpify(): string {
		let word = this.keyword.trim().toLowerCase();

		// logFunctions.writeLine(`Helpify Before: ${word}`, this.outputChannnel);

		if (word == "end") {
			word = "End"
		} else if (word == "companyname" || word == "fileversion#" || word == "productversion" || word == "legalcopyright") {
			word = "$VERSIONINFO"
		} else if (word == "if" || word == "then") {
			word = "IF...THEN"
		} else if (this.lineOfCode.trim().toLowerCase().startsWith("for ") || word == "next") {
			word = "FOR...NEXT"
		} else if (word == "for") {
			word = "FOR-(file-statement)"
		} else if (word == "sub") {
			word = "Sub-(explanatory)"
		} else if (word == "function") {
			word = "Function"
		} else if (word == "select" || word == "case") {
			word = "SELECT-CASE"
		} else if (word == "do" || word == "loop") {
			word = "DO...LOOP"
		} else if (word == "declare" || (word == "dynamic") || (word == "library")) {
			word = "DECLARE-LIBRARY";
		} else if (word == "def" || word == "seg") {
			word = "DEF-SEG";
		}
		// logFunctions.writeLine(`After Before: ${word}`, this.outputChannnel);
		return word;
	}

	/**
	 * Gets the the formatted version of the token
	 * @param config WorkspaceConfiguration used to check the user selected formattting settings
	 * @returns 
	 */
	private getWordFormatted(config: vscode.WorkspaceConfiguration) {
		if (!this.isKeyword) {
			return this.token;
		}

		// logFunctions.writeLine(`getWordFormatted: started: "${this.token}" | ${config.get("isFormatMetaComamndsMixedCaseEnabled")}`, this.outputChannnel);

		const lowerToken = this.token.toLowerCase();

		if (config.get("isFormatMetaComamndsMixedCaseEnabled")
			&& (this.token.startsWith("$")
				|| this.token.startsWith("'$")
				|| lowerToken == "companyname"
				|| lowerToken == "fileversion#"
				|| lowerToken == "productversion"
				|| lowerToken == "legalcopyright")
		) {
			return this.token
				.replace(/\$CHECKING/i, "$Checking")
				.replace(/CompanyName/i, "CompanyName")
				.replace(/\$CONSOLE/i, "$Console")
				.replace(/\$DYNAMIC/i, "$Dynamic")
				.replace(/\$EXEICON/i, "$ExeIcon")
				.replace(/FileVersion#/i, "FileVersion#")
				.replace(/FILEFLAGSMASK/i, "FileFlagMask")
				.replace(/FILETYPE/i, "FileType")
				.replace(/FILESUBTYPE  /i, "FileSubType")
				.replace(/INCLUDE/i, "Include")
				.replace(/LegalCopyright/i, "LegalCopyright")
				.replace(/ProductVersion/i, "ProductVersion")
				.replace(/\$SCREENHIDE/i, "$ScreenHide")
				.replace(/\$SCREENSHOW/i, "$ScreenShow")
				.replace(/\$STATIC/i, "$Static")
				.replace(/\$VERSIONINFO/i, "$VersionInfo")
				.replace(/\$VIRTUALKEYBOARD/i, "$VirtualKeyboard");
		}

		switch (config.get("formatMode")) {
			case "Lower Case":
				return this.token.toLowerCase();

			case "Upper Case":
				return this.token.toUpperCase();

			case "Mixed Case":
				if (this.token.startsWith("_")) {
					return this.token.substring(0, 2).toUpperCase() + this.token.substring(2).toLowerCase();
				} else {
					return this.token.substring(0, 1).toUpperCase() + this.token.substring(1).toLowerCase();
				}

			case "No Change":
			default:
				return this.token;
		}


	}

}