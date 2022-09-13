"use strict";
import * as vscode from "vscode";
import * as commonFunctions from "../commonFunctions";
import * as logFunctions from "../logFunctions";
import { getHelpFile } from "../helpFunctions"
import * as fs from "fs";


export class HoverProvider implements vscode.HoverProvider {

	outputChannnel = logFunctions.getChannel(logFunctions.channelType.hoverProvider);

	provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Hover> {

		if (!document || !position) {
			return null;
		}

		try {

			const word = commonFunctions.getQB64WordFromDocument(document, position);
			const helpFile = getHelpFile(word, this.outputChannnel);

			if (helpFile.length > 0) {
				const markdownString = new vscode.MarkdownString();
				const md: string = fs.readFileSync(helpFile).toString();
				markdownString.appendMarkdown(md);
				return new vscode.Hover(markdownString);
			}

			if (token.isCancellationRequested) {
				return null;
			}

		} catch (error) {
			logFunctions.writeLine("ERROR: " + error, this.outputChannnel);
		}
		return null;
	}


}