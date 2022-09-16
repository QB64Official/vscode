"use strict";
import * as vscode from "vscode";
import path from "path";
import { exec } from "child_process";
import * as commonFunctions from "./commonFunctions";
import * as logFunctions from "./logFunctions";
import os from 'os';

var diagnosticCollection: vscode.DiagnosticCollection = vscode.languages.createDiagnosticCollection('QB64-lint')

/**
 * Runs the compiler/linter then calls lintCurrentFile with the output.
 */
export function runLint() {
	const outputChannnel: any = logFunctions.getChannel(logFunctions.channelType.lint);

	try {
		if (!vscode.window.activeTextEditor) {
			logFunctions.writeLine("Cannot find activeTextEditor", outputChannnel);
			return;
		}
		const config = vscode.workspace.getConfiguration("qb64")
		let compilerPath: string = config.get("installPath");

		if (!compilerPath) {
			logFunctions.writeLine("The QB64 Install path is not set.", outputChannnel);
			return;
		}

		if (os.platform() == "win32") {
			compilerPath = path.join(compilerPath, "qb64.exe");
		} else {
			compilerPath = path.join(compilerPath, "qb64");
		}

		compilerPath = compilerPath.replaceAll("\\", "/");

		let sourceCode = vscode.window.activeTextEditor.document.fileName;
		let baseFilename = path.dirname(sourceCode) + "/" + path.basename(sourceCode);
		let exeName = baseFilename;

		if (os.platform() == "win32") {
			exeName = exeName + '.exe';
		}

		const command = `${compilerPath} -c "${sourceCode}" -o "${exeName}" -x -w `;
		logFunctions.writeLine(`Run: ${command}`, outputChannnel);
		exec(command, (error, stdout, stderr) => {
			outputChannnel.clear();
			outputChannnel.show();
			if (error) {
				logFunctions.writeLine(error.message, outputChannnel);
			}
			if (stderr) {
				logFunctions.writeLine(stderr, outputChannnel);
			}
			if (stdout) {
				logFunctions.writeLine(`${stdout}\n`, outputChannnel);
				lintCurrentFile(stdout);
			} else {
				logFunctions.writeLine("No stdout from QB64.exe found", outputChannnel);
			}
		});
		
	} catch (error) {
		logFunctions.writeLine(`ERROR in runLint: ${error}`, outputChannnel);
	}
}

/**
 * Decorates the code file with output from the compiler
 * @param compilerOutput The contents of the compiler output.
 * @returns void
 */
function lintCurrentFile(compilerOutput: string) {
	const outputChannnel: any = logFunctions.getChannel(logFunctions.channelType.lint);
	const lintSource = "QB64-lint"

	try {
		let document: vscode.TextDocument = vscode.window.activeTextEditor.document;
		if (!document) {
			outputChannnel.appendLine("Unable to find document");
			return;
		}
		let sourceCode: string[] = document.getText().split('\n')

		diagnosticCollection.set(document.uri, []);
		diagnosticCollection.clear();

		let diagnostics: vscode.Diagnostic[] = [];

		let lines = compilerOutput.split("\n")
		let errorLineNumber: number = -1;
		for (let lineIndex = 3; lineIndex < lines.length; lineIndex++) {
			const lintLine = lines[lineIndex];
			if (!lintLine || lintLine.startsWith("[")) {
				continue;
			}

			errorLineNumber = -1;
			if (lintLine.startsWith("Illegal") || lintLine.startsWith("DIM: Expected")) {
				let code: string = "";
				for (let x = lineIndex; x < lines.length; x++) {
					const element = lines[x];
					if (element.startsWith("LINE ")) {
						const work: string[] = element.split(":")
						code = commonFunctions.escapeRegExp(work[1])
						errorLineNumber = Number(work[0].split(" ").pop()) - 1;
						break;
					}
				}

				if (code.length < 1 || errorLineNumber < 0) {
					continue;
				}

				const match = sourceCode[errorLineNumber].match(new RegExp("(" + code + ")"));
				if (match) {
					let diagnostic: vscode.Diagnostic = new vscode.Diagnostic(
						commonFunctions.createRange(match, errorLineNumber),
						lintLine.replace("\r", "") + "\n" + lines[lineIndex + 1].replace("\r", ""),
						vscode.DiagnosticSeverity.Error,
					);
					diagnostic.code = 102;
					diagnostic.source = lintSource;
					diagnostics.push(diagnostic)
				} else {
					logFunctions.writeLine("Found Not Match", outputChannnel);
				}

			} else if (lintLine.indexOf("warning") >= 0) {

				let tokens: string[] = lintLine.split(":");

				if (path.basename(document.uri.fsPath) != tokens[0]) {
					continue;
				}
				errorLineNumber = Number(tokens[1]) - 1;
				let diagnostic: vscode.Diagnostic = new vscode.Diagnostic(
					new vscode.Range(new vscode.Position(errorLineNumber, 0), new vscode.Position(errorLineNumber, sourceCode[errorLineNumber].length),),
					tokens[3].replace("\r", ""),
					vscode.DiagnosticSeverity.Warning,
				);
				diagnostic.source = lintSource;
				diagnostic.code = 502;
				diagnostics.push(diagnostic)
			}
		}

		if (diagnostics.length > 0) {
			diagnosticCollection.set(document.uri, diagnostics);
		}

	} catch (error) {
		logFunctions.writeLine(`ERROR: ${error}`, outputChannnel);
	}
}