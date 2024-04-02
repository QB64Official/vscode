"use strict";
import { exec } from "child_process";
import * as vscode from "vscode";
import { utilities } from "./utilities";

export function openCurrentFileInQB64() {

	try {
		if (!vscode.window.activeTextEditor) {
			return;
		}

		const config: vscode.WorkspaceConfiguration = utilities.getConfiguration();
		let compilerPath: string = config.get("compilerPath");

		if (!compilerPath) {
			utilities.logError("The QB64 compiler path is not set.");
			return;
		}

		let command = `${compilerPath} "${vscode.window.activeTextEditor.document.fileName}"`;

		exec(command, (error, stdout, stderr) => {
			if (error) {
				utilities.logError(error.message);
			}

			if (stderr) {
				utilities.logError(stderr);
			}

			if (stdout) {
				utilities.log(stdout);
			} else {
				utilities.logError("No stdout from the compiler found");
			}
		});
	} catch (error) {
		utilities.logError(`ERROR: ${error}`);
	}
}