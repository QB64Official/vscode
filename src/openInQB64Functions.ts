"use strict";
import { exec } from "child_process";
import * as vscode from "vscode";
import * as logFunctions from "./logFunctions";
import path from "path";
import os from 'os';

export function openCurrentFileInQB64() {
	const outputChannnel: any = logFunctions.getChannel(logFunctions.channelType.openInQB64);
	try {
		if (!vscode.window.activeTextEditor) {
			logFunctions.writeLine("Cannot find activeTextEditor", outputChannnel);
			return;
		}

		logFunctions.writeLine("Starting Open In QB64", outputChannnel);
		const config = vscode.workspace.getConfiguration("qb64")
		let compilerPath: string = config.get("compilerPath");

		if (!compilerPath) {
			logFunctions.writeLine("The QB64 compiler path is not set.", outputChannnel);
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
				logFunctions.writeLine("QB64 stdout:\n", outputChannnel);
				logFunctions.writeLine(`${stdout}\n`, outputChannnel);
			} else {
				logFunctions.writeLine("No stdout from QB64.exe found", outputChannnel);
			}
		});
	} catch (error) {
		logFunctions.writeLine(`ERROR: ${error}`, outputChannnel);
	}
}