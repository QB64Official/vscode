'use strict';
var lintChannel: any;
import * as vscode from 'vscode';
import fs = require('fs');
import path from 'path';
import { exec } from 'child_process';
import { Diagnostic, DiagnosticSeverity, } from 'vscode-languageserver/node';


/**
 * Runs the compiler/linter then calls lintCurrentFile with the output.
 */
export function runLintFull() {
	const config = vscode.workspace.getConfiguration("qb64")
	const compilerPath: boolean = config.get("compilerPath");
	let outputChannnel: any = getOutputChannel();
	let sourceCode = vscode.window.activeTextEditor.document.fileName
	let exeName = path.parse(sourceCode) + '.exe';
	let outputFileName = path.parse(exeName) + '.cmp-out';
	let command = `${compilerPath} -c ${sourceCode} -o ${exeName} -x > ${outputFileName}`
	exec(command)

	if (!fs.existsSync(outputFileName)) {
		outputChannnel.appendLine(`Cannot find compiler output file: ${outputFileName}`);
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
	let outputChannnel: any = getOutputChannel();
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
							let start: number = 0;
							let stop: number = 50;
							let diagnostic: Diagnostic = {
								severity: DiagnosticSeverity.Warning,
								range: {
									start: textDocument.positionAt(m.index),
									end: textDocument.positionAt(m.index + m[0].length)
								},
								message: `${m[0]} is all uppercase.`,
								source: 'ex'
							};
							diagnostics.push(diagnostic);
						}
			*/
		}

	} catch (error) {
		outputChannnel.appendLine("ERROR: " + error);
	}
}

/**
 * @returns The output channel used by all of the lint process
 */
function getOutputChannel() {

	let outputChannnel: any;
	if (lintChannel) {
		outputChannnel = lintChannel
	} else {
		lintChannel = vscode.window.createOutputChannel("QB64: Lint");
		outputChannnel = lintChannel;
	}
	return outputChannnel;
}