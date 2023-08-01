"use strict";
import { exec } from "child_process";
import * as vscode from "vscode";
import { globalCache } from "./globalCache";

export function openCurrentFileInQB64() {

	try {
		if (!vscode.window.activeTextEditor) {
			return;
		}

		const config: vscode.WorkspaceConfiguration = globalCache.getConfiguration();
		let compilerPath: string = config.get("compilerPath");

		if (!compilerPath) {
			globalCache.logError("The QB64 compiler path is not set.");
			return;
		}

		let command = `${compilerPath} "${vscode.window.activeTextEditor.document.fileName}"`;

		exec(command, (error, stdout, stderr) => {
			if (error) {
				globalCache.logError(error.message);
			}

			if (stderr) {
				globalCache.logError(stderr);
			}

			if (stdout) {
				globalCache.log(stdout);
			} else {
				globalCache.logError("No stdout from the compiler found");
			}
		});
	} catch (error) {
		globalCache.logError(`ERROR: ${error}`);
	}
}