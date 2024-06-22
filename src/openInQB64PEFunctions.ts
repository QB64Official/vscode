"use strict";
import { exec } from "child_process";
import * as vscode from "vscode";
import * as logFunctions from "./logFunctions";

export function openCurrentFileInQB64PE() {
	const outputChannnel: any = logFunctions.getChannel(logFunctions.channelType.openInQB64);
	try {
		if (!vscode.window.activeTextEditor) {
			logFunctions.writeLine("Cannot find activeTextEditor", outputChannnel);
			return;
		}

		logFunctions.writeLine("Starting Open In QB64PE", outputChannnel);
		const config = vscode.workspace.getConfiguration("qb64pe")
		let compilerPath: string = config.get("compilerPath");

		if (!compilerPath) {
			logFunctions.writeLine("The QB64PE compiler path is not set.", outputChannnel);
			return;
		}

		let command = `${compilerPath} "${vscode.window.activeTextEditor.document.fileName}"`;
		logFunctions.writeLine(`Run: ${command}`, outputChannnel);

		exec(command, (error, stdout, stderr) => {
			if (error) {
				logFunctions.writeLine(error.message, outputChannnel);
			}

			if (stderr) {
				logFunctions.writeLine(stderr, outputChannnel);
			}

			if (stdout) {
				logFunctions.writeLine("QB64PE stdout:\n", outputChannnel);
				logFunctions.writeLine(`${stdout}\n`, outputChannnel);
			} else {
				logFunctions.writeLine("No stdout from qb64pe found", outputChannnel);
			}
		});
	} catch (error) {
		logFunctions.writeLine(`ERROR: ${error}`, outputChannnel);
	}
}