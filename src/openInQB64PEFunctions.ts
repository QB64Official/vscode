"use strict";
import { exec } from "child_process";
import * as vscode from "vscode";
import * as logFunctions from "./logFunctions";

export function openCurrentFileInQB64PE() {
	const outputChannel: any = logFunctions.getChannel(logFunctions.channelType.openInQB64);
	try {
		if (!vscode.window.activeTextEditor) {
			logFunctions.writeLine("Cannot find activeTextEditor", outputChannel);
			return;
		}

		logFunctions.writeLine("Starting Open In QB64PE", outputChannel);
		const config = vscode.workspace.getConfiguration("qb64pe")
		let compilerPath: string = config.get("compilerPath");

		if (!compilerPath) {
			logFunctions.writeLine("The QB64PE compiler path is not set.", outputChannel);
			return;
		}

		let command = `${compilerPath} "${vscode.window.activeTextEditor.document.fileName}"`;
		logFunctions.writeLine(`Run: ${command}`, outputChannel);

		exec(command, (error, stdout, stderr) => {
			if (error) {
				logFunctions.writeLine(error.message, outputChannel);
			}

			if (stderr) {
				logFunctions.writeLine(stderr, outputChannel);
			}

			if (stdout) {
				logFunctions.writeLine("QB64PE stdout:\n", outputChannel);
				logFunctions.writeLine(`${stdout}\n`, outputChannel);
			} else {
				logFunctions.writeLine("No stdout from qb64pe found", outputChannel);
			}
		});
	} catch (error) {
		logFunctions.writeLine(`ERROR: ${error}`, outputChannel);
	}
}