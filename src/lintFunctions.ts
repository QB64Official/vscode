'use strict';

import * as vscode from 'vscode';
import fs = require('fs');
import path from 'path';
import { exec } from 'child_process';
import { Diagnostic, DiagnosticSeverity, } from 'vscode-languageserver/node';
import * as logFunctions from "./logFunctions";


/**
 * Runs the compiler/linter then calls lintCurrentFile with the output.
 */
export function runLintFull() {
	const config = vscode.workspace.getConfiguration("qb64")
	const compilerPath: boolean = config.get("compilerPath");
	let outputChannnel: any = logFunctions.getChannel(logFunctions.channelType.lint);
	let sourceCode = vscode.window.activeTextEditor.document.fileName
	let exeName = path.parse(sourceCode) + '.exe';
	let outputFileName = path.parse(exeName) + '.cmp-out';
	let command = `${compilerPath} -c ${sourceCode} -o ${exeName} -x > ${outputFileName}`
	exec(command)

	if (!fs.existsSync(outputFileName)) {
		(`Cannot find compiler output file: ${outputFileName}`);
		return;
	}

	let compilerOutput: string = fs.readFileSync(outputFileName).toString();
	if (!compilerOutput || compilerOutput.length < 1) {
		outputChannnel.appendLine(`File ${outputFileName} is empty`);
		return
	}
	lintCurrentFile(compilerOutput);
}

/**
 * Decorates the code file with output from the compiler
 * @param compilerOutput The contents of the compiler output.
 * @returns void
 */
function lintCurrentFile(compilerOutput: string) {
	let outputChannnel: any = logFunctions.getChannel(logFunctions.channelType.lint);
	let diagnostics: Diagnostic[] = [];
	try {

		let lines = compilerOutput.split("\n")
		for (let index = 0; index < lines.length; index++) {
			const line = lines[index];
			if (!line) {
				continue;
			}

			/*
			if (line.indexOf("warning:") >= 0) {
				const tokens: string[] = line.split(":");

				let start: vscode.Position = new vscode.Position(Number(tokens[2]), 0);
				let stop: vscode.Position = new vscode.Position(Number(tokens[2]), 50);

				let diagnostic: Diagnostic = {
					severity: DiagnosticSeverity.Warning,
					message: "",
					range: {
						start: start, end: stop)
					},
					source: 'qb64-lint'
				};
				diagnostics.push(diagnostic);
			}
			*/

			//connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });

		}

	} catch (error) {
		outputChannnel.appendLine("ERROR: " + error);
	}
}