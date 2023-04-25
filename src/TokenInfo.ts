"use strict";
import * as fs from "fs";
import * as vscode from "vscode";
import * as logFunctions from "./logFunctions";
import * as commonFunctions from "./commonFunctions";

export class TokenInfo {
	private outputChannnel: any = null;
	private readonly lineOfCode: string = "";
	public readonly keyword: string = "";
	public readonly keywordNoPrfix: string = "";
	public readonly token: string = "";
	public readonly offlinehelp: string = "";
	public readonly onlineHelp: string = "";
	public WordFormatted: string = ""; // Should be read only or have a private setter.
	public readonly isKeyword: boolean = true;

	constructor(token?: string, lineOfCode?: string, outputChannnelToUse?: any) {
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

		if (outputChannnelToUse) {
			this.outputChannnel = outputChannnelToUse;
		} else {
			this.outputChannnel = logFunctions.getChannel(logFunctions.channelType.help);
		}

		this.token = token;
		this.keyword = token;
		const config: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration("qb64")
		const path = require('path');

		let helpPath: string = config.get("helpPath");
		let helpFile = path.join(helpPath, `${this.keyword}.md`).replaceAll("\\", "/");

		// logFunctions.writeLine(`${this.keyword} | Help file ${helpFile}`, this.outputChannnel);
		if (this.lineOfCode.toLowerCase().trim().indexOf("for") < 0) {
			if (fs.existsSync(helpFile)) {
				this.offlinehelp = helpFile;
				this.onlineHelp = `https://github.com/QB64Official/qb64/wiki/${encodeURIComponent(this.keyword)}`
				this.keywordNoPrfix = this.keyword.startsWith("_") ? this.keyword.slice(1) : this.keyword;
				this.WordFormatted = this.getWordFormatted(config);
				return
			}

			// logFunctions.writeLine(`Keyword ${this.keyword} not found adding "_" and trying again`, this.outputChannnel);
			this.keyword = `_${token}`;
			helpFile = path.join(helpPath, `${this.keyword}.md`).replaceAll("\\", "/");
			if (fs.existsSync(helpFile)) {
				this.offlinehelp = helpFile;
				this.onlineHelp = `https://github.com/QB64Official/qb64/wiki/${encodeURIComponent(this.keyword)}`
				this.keywordNoPrfix = this.keyword.slice(1);
				this.WordFormatted = this.getWordFormatted(config);
				return
			}
		}

		// logFunctions.writeLine(`Keyword ${this.keyword} markdown not found not. Tring helpify `, this.outputChannnel);
		this.keyword = `${token}`;
		// logFunctions.writeLine(`helpify file ${helpFile}`, this.outputChannnel);
		helpFile = path.join(helpPath, `${this.helpify()}.md`).replaceAll("\\", "/");
		if (fs.existsSync(helpFile)) {
			this.offlinehelp = helpFile;
			this.onlineHelp = `https://github.com/QB64Official/qb64/wiki/${encodeURIComponent(this.keyword)}`
			this.keywordNoPrfix = this.keyword;
			this.WordFormatted = this.getWordFormatted(config);
			return
		}

		this.keyword = token;
		this.isKeyword = false;
		this.WordFormatted = token;

		/*
		logFunctions.writeLine(`keywordInfo.token: ${this.token}`, this.outputChannnel);
		logFunctions.writeLine(`keywordInfo.keyword: ${this.keyword}`, this.outputChannnel);
		logFunctions.writeLine(`keywordInfo.keywordNoPrfix: ${this.keywordNoPrfix}`, this.outputChannnel);
		logFunctions.writeLine(`keywordInfo.offlinehelp: ${this.offlinehelp}`, this.outputChannnel);
		logFunctions.writeLine(`keywordInfo.isKeyword: ${this.isKeyword}`, this.outputChannnel);
		*/
	}

	/**
	 * Gets the hovertext to show
	 * @returns 
	 */
	public getHoverText(): string {
		let retvalue = ""
		if (this.isKeyword) {
			if (this.offlinehelp.length > 0) {
				const config: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration("qb64")
				const path = require('path');		
				let helpPath: string = config.get("helpPath");
				retvalue = fs.readFileSync(this.offlinehelp).toString();		
				var linkified = retvalue.replaceAll(/\[(\w*)\]\((\w*)\)/igm, '[$1](file:' + helpPath.replaceAll('\\', '/') + '/$1.md)');
				retvalue = linkified;
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
			logFunctions.writeLine(`ERROR in showHelp: ${error}`, this.outputChannnel);
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
			word = "If...Then"
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
		} else if (word == "chr") {
			word = "CHR$";
		} else if (word == "str") {
			word = "STR$";
		} else if (word == "string") {
			word = "STRING$";
		} else if (word == "erdev") {
			word = "ERDEV$";
		} else if (word == "environ") {
			word = "ENVIRON$";
		} else if (word == "ioctl") {
			word = "IOCTL$";
		} else if (word == "input") {
			word = "INPUT$";
		} else if (word == "inkey") {
			word = "INKEY$";
		} else if (word == "lcase") {
			word = "LCASE$";
		} else if (word == "left") {
			word = "LEFT$";
		} else if (word == "right") {
			word = "RIGHT$";
		} else if (word == "mid") {
			word = "MID$";
		} else if (word == "ltrim") {
			word = "LTRIM$";
		} else if (word == "mkd") {
			word = "MKD$";
		} else if (word == "mkdmbf") {
			word = "MKDMBF$";
		} else if (word == "mki") {
			word = "MKI$";
		} else if (word == "mkl") {
			word = "MKL$";
		} else if (word == "mks") {
			word = "MKS$";
		} else if (word == "mksmbf") {
			word = "MKSMBF$";
		} else if (word == "oct") {
			word = "OCT$";
		} else if (word == "rtrim") {
			word = "RTRIM$";
		} else if (word == "time") {
			word = "TIME$";
		} else if (word == "ucase") {
			word = "UCASE$";
		} else if (word == "varptr") {
			word = "VARPTR$";
		} else if (word == "_cwd") {
			word = "_CWD$";
		} else if (word == "_deflate") {
			word = "_DEFLATE$";
		} else if (word == "_device") {
			word = "_DEVICE$";
		} else if (word == "_dir") {
			word = "_DIR$";
		} else if (word == "_errormessage") {
			word = "_ERRORMESSAGE$";
		} else if (word == "_inclerrorfile") {
			word = "_INCLERRORFILE$";
		} else if (word == "_inflate") {
			word = "_INFLATE$";
		} else if (word == "_os") {
			word = "_OS$";
		} else if (word == "_title") {
			word = "_TITLE$";
		} else if (word == "_trim") {
			word = "_TRIM$";
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