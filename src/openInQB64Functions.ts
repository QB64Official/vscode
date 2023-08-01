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
			globalCache.LogError("The QB64 compiler path is not set.");
			return;
		}

		let command = `${compilerPath} "${vscode.window.activeTextEditor.document.fileName}"`;

		exec(command, (error, stdout, stderr) => {
			if (error) {
				globalCache.LogError(error.message);
			}

			if (stderr) {
				globalCache.LogError(stderr);
			}

			if (stdout) {
				globalCache.log(stdout);
			} else {
				globalCache.LogError("No stdout from the compiler found");
			}
		});
	} catch (error) {
		globalCache.LogError(`ERROR: ${error}`);
	}
}