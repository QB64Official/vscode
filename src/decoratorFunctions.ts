"use strict";
import * as vscode from "vscode";
import * as logFunctions from "./logFunctions";
import * as commonFunctions from "./commonFunctions";
import { symbolCache } from "./extension";

const decorationTypeTodo: vscode.TextEditorDecorationType = vscode.window.createTextEditorDecorationType({ backgroundColor: 'green', color: 'rgb(0,0,0)' });
const decorationTypeCurrentRow: vscode.TextEditorDecorationType = vscode.window.createTextEditorDecorationType(
	{
		fontWeight: "bold",
		borderRadius: "5px",
		dark: { border: "1px solid rgb(215,215,215); opacity: 0.5;" },
		light: { border: "1px solid rgb(115,115,115); opacity: 0.5;" }
	}
);

let lastLine: vscode.Position;
export function setupDecorate() {
	symbolCache.length = 0;

	// Needed for the first opening VsCode
	vscode.commands.executeCommand<vscode.DocumentSymbol[]>('vscode.executeDocumentSymbolProvider', vscode.window.activeTextEditor.document.uri)
		.then(() => {
			scanFile(vscode.window.activeTextEditor, true);
			vscode.window.onDidChangeTextEditorSelection(() => { scanFile(vscode.window.activeTextEditor, false); });

			vscode.window.onDidChangeActiveTextEditor((editor): void => {
				if (editor) {
					vscode.commands.executeCommand<vscode.DocumentSymbol[]>('vscode.executeDocumentSymbolProvider', editor.document.uri).then(() => { scanFile(editor, true); });
				}
			});
		});
}

function getMetaCommandDecoration(): vscode.TextEditorDecorationType {
	let retvalue: vscode.TextEditorDecorationType = null;
	try {
		const editorConfig: any = vscode.workspace.getConfiguration("editor.tokenColorCustomizations");
		const textMateRules = editorConfig.get('textMateRules') as Array<any>;  // Type assertion here
		if (!textMateRules) {
			return retvalue;
		}
		let colorRule: any = textMateRules.find(rule => rule.scope == 'metacommand.QB64');
		let color: string = colorRule ? colorRule.settings.foreground : undefined;

		return vscode.window.createTextEditorDecorationType({ color: color });
	} catch (error) {
		logFunctions.writeLine(`ERROR in getMetaCommandDecoration: ${error}`, logFunctions.getChannel(logFunctions.channelType.decorator));
		return null;
	}
}

/**
 * Get the decorations for the subs and functions 
 * @returns  vscode.TextEditorDecorationType
 */
function getSubDecoration(): vscode.TextEditorDecorationType {
	let decorationTypeSub: vscode.TextEditorDecorationType = null;
	try {
		const editorConfig: any = vscode.workspace.getConfiguration("editor.tokenColorCustomizations");
		const textMateRules = editorConfig.get('textMateRules') as Array<any>;  // Type assertion here
		if (!textMateRules) {
			return decorationTypeSub;
		}

		const config: any = vscode.workspace.getConfiguration("qb64");
		let userFunctionColorRule: any = textMateRules.find(rule => rule.scope == 'userfunctions.QB64');
		let userFunctionColor: string = userFunctionColorRule ? userFunctionColorRule.settings.foreground : undefined;
		let fontWeight: string = config.get("isBoldingSubsAndFunctionsEnabled") ? "bolder" : "normal";

		if (userFunctionColor) {
			decorationTypeSub = vscode.window.createTextEditorDecorationType({ fontWeight: fontWeight, color: userFunctionColor });
		} else {
			decorationTypeSub = vscode.window.createTextEditorDecorationType({ fontWeight: fontWeight });
		}
		return decorationTypeSub;
	} catch (error) {
		logFunctions.writeLine(`ERROR in getSubdecoration: ${error}`, logFunctions.getChannel(logFunctions.channelType.decorator));
		return null;
	}
}


function isOutputWindowActive(activeEditor: { document: { uri: { scheme: any; }; }; }): boolean {
	return activeEditor ? activeEditor.document.uri.scheme === 'output' : false;
}

/**
 * Scans all the lines to apply decorations.
 * @param editor 
 * @param scanAllLines True will check all lines in the file | False checks only the current line
 * @returns 
 */
export function scanFile(editor: any, scanAllLines: boolean) {

	if (!editor || isOutputWindowActive(editor) || editor.document.languageId.toLowerCase() === "log" || editor.document.languageId.toLowerCase() === "jsonc" || editor.document.fileName.toLowerCase().indexOf("qb64: ") > 0) {
		return;
	}

	const extension = vscode.extensions.getExtension('qb64-official.qb64');
	const outputChannnel: any = logFunctions.getChannel(logFunctions.channelType.decorator);

	if (extension) { // Skip no QB64 files.
		const languageConfigurations: any[] = extension.packageJSON.contributes.languages;
		const fileName = editor.document.fileName;
		const fileExtension = fileName.substring(fileName.lastIndexOf('.')).toLowerCase();
		let found: boolean = false;
		for (const language of languageConfigurations) {
			const supportedExtensions: string[] = language.extensions;
			if (supportedExtensions.includes(fileExtension)) {
				found = true;
				break;
			}
			if (!found) {
				// Can't log the file name. That cause an infinite loop.
				return;
			}
		}
	}

	const currrentLine: vscode.Position = editor.selection.active;
	try {

		const decorationTypeIncludeLeading: vscode.TextEditorDecorationType = vscode.window.createTextEditorDecorationType({ color: 'rgb(68,140,255)' })
		const decorationTypeIncludeTrailing: vscode.TextEditorDecorationType = vscode.window.createTextEditorDecorationType({ color: 'rgb(0,255,0)' })

		let includeLeading: vscode.Range[] = [];
		let includeTrailing: vscode.Range[] = [];
		let todos: vscode.Range[] = [];
		let subs: vscode.Range[] = [];
		let metacommands: vscode.Range[] = [];

		if (scanAllLines) {
			const sourceCode = editor.document.getText().split('\n');
			for (let currrentLineNumber = 0; currrentLineNumber < sourceCode.length; currrentLineNumber++) {
				decorate(editor, currrentLineNumber, outputChannnel, includeLeading, includeTrailing, todos, subs, metacommands);
			}
		} else {
			if ((lastLine && (lastLine.line !== currrentLine.line))) {
				decorate(editor, lastLine.line, outputChannnel, includeLeading, includeTrailing, todos, subs, metacommands);
			}
		}

		editor.setDecorations(decorationTypeIncludeLeading, includeLeading);
		editor.setDecorations(decorationTypeIncludeTrailing, includeTrailing);
		editor.setDecorations(decorationTypeTodo, todos);

		let decorationTypeSub = getSubDecoration();
		if (decorationTypeSub) {
			editor.setDecorations(decorationTypeSub, subs);
		}

		let metacommandDecoration = getMetaCommandDecoration();
		if (metacommandDecoration) {
			editor.setDecorations(metacommandDecoration, metacommands);
		}

		if (currrentLine) {
			const config = vscode.workspace.getConfiguration("qb64");
			if (config.get("isCurrentRowHighlightEnabled")) {
				let current: vscode.Range[] = [new vscode.Range(
					new vscode.Position(currrentLine.line, 0),
					new vscode.Position(currrentLine.line, editor.document.lineAt(currrentLine.line).text.length))
				];
				editor.setDecorations(decorationTypeCurrentRow, []);
				editor.setDecorations(decorationTypeCurrentRow, current);
			}
		}

	} catch (error) {
		logFunctions.writeLine(`ERROR in scanFile: ${error}`, outputChannnel);
	} finally {
		if (currrentLine) {
			lastLine = currrentLine;
		}
	}
}

/**
 * Decorate a line or loads the an array of decorations
 * @param editor 
 * @param lineNumber Line Number in the code file.
 * @param outputChannnel Channel to write mesages to
 * @param includeLeading 
 * @param includeTrailing 
 * @param todos Array of To do decorations 
 * @param subs Array of subs/functions decorations
 * @returns 
 */
function decorate(editor: any, lineNumber: number, outputChannnel: any, includeLeading: vscode.Range[], includeTrailing: vscode.Range[], todos: vscode.Range[], subs: vscode.Range[], metacommands: vscode.Range[]) {

	let lineOfCode: string = editor.document.lineAt(lineNumber).text
	if (!editor || editor.document.languageId == "Log"
		|| editor.document.fileName == "extension-output-qb64-official.qb64-#3-QB64: Decorate"
		|| (lineOfCode.trim().startsWith("'") && (lineOfCode.trim().toLowerCase().indexOf("include") < 0))
		|| lineOfCode.trim().toLocaleLowerCase().startsWith("rem")) {
		return;
	}

	const red = 0;
	const green = 1;
	const blue = 2;
	try {

		const config = vscode.workspace.getConfiguration("qb64")
		const extension = vscode.extensions.getExtension('qb64-official.qb64');

		if (extension) { // Skip no QB64 files.
			const languageConfigurations: any[] = extension.packageJSON.contributes.languages;
			const fileName = editor.document.fileName;
			const fileExtension = fileName.substring(fileName.lastIndexOf('.')).toLowerCase();
			for (const language of languageConfigurations) {
				const supportedExtensions: string[] = language.extensions;
				if (supportedExtensions.includes(fileExtension)) {
					break;
				} else {
					logFunctions.writeLine(`${editor.document.fileName} is not a supported file.`, outputChannnel);
					return;
				}
			}
		}
		logFunctions.writeLine(`decorate(${lineNumber + 1}) | editor.selection.active.line: ${editor.selection.active.line} | Code: ${lineOfCode}`, outputChannnel);

		if (config.get("isRgbColorEnabled")) {
			let matches = lineOfCode.matchAll(/(?<=rgb|rgb32)(\()[ 0-9]+(,[ 0-9]+)+(,[ 0-9]+)+(\))/ig);
			if (matches) {
				for (const match of matches) {
					logFunctions.writeLine(`lineNumber: ${lineNumber} | RGB Match Found at Column: ${match.index}`, outputChannnel);
					let rgb: string[] = match[0].substring(match[0].indexOf("(") + 1).replace(")", "").split(",");
					let work: vscode.Range[] = [commonFunctions.createRange(match, lineNumber, 0)];
					let colorDec = vscode.window.createTextEditorDecorationType({ border: `2px solid rgb(${rgb[red]},${rgb[green]},${rgb[blue]})`, borderRadius: "5px" });
					editor.setDecorations(colorDec, work);
				}
			}
		}

		// Look for include files
		let match = lineOfCode.match(/'\$INCLUDE:/i)
		if (match !== null && match.index !== undefined) {
			includeLeading.push(commonFunctions.createRange(match, lineNumber, 0));
			match = lineOfCode.match(/'(.*)'/i)
			if (match !== null && match.index !== undefined) {
				includeTrailing.push(commonFunctions.createRange(match, lineNumber, 0));
			}
		}

		// Look for todo
		if (config.get("isTodoHighlightEnabled")) {
			const matches = lineOfCode.matchAll(/(?<='*|rem*)TODO:|FIXIT:|FIXME:/ig);
			for (const match of matches) {
				todos.push(commonFunctions.createRange(match, lineNumber, 0));
			}
		}

		// Fix "as"
		// let matches = lineOfCode.matchAll(/\b\w+\s+as\s+\w+\b(?!\s*\))/ig); // Finds the starting word (broke)
		// TODO: Use this as base for getting parameter highlighting working.
		// TODO: Change to use the array system
		/*
		let matches = lineOfCode.matchAll(/\b(as)\s+(\b\w+)/ig);
		if (matches) {
			for (const match of matches) {
				logFunctions.writeLine(`lineNumber: ${lineNumber} | AS Match Found at Column: ${match.index}`, outputChannnel);
				let work: vscode.Range[] = [commonFunctions.createRange(match, lineNumber, 0)];
				let colorDec = vscode.window.createTextEditorDecorationType({ border: `2px solid rgb(0,255,0)`, borderRadius: "10px" });
				editor.setDecorations(colorDec, work);
			}
		}
		*/

		let matches = lineOfCode.matchAll(/(?<=\W|^)(REM|'|\$DYNAMIC|\$STATIC|Option _Explicit|Option Explicit|option _explicitarray|option explicitarray|\$ASSERTS|\$Noprefix|\$CHECKING|\$COLOR|\$CONSOLE|\$DEBUG|\$ERROR|\$EXEICON:|\$LET|\$IF|\$ELSEIF|\$END IF|\$SCREENHIDE|\$SCREENSHOW|\$VIRTUALKEYBOARD|\$VERSIONINFO:Comments|\$VERSIONINFO:CompanyName|\$VERSIONINFO:FileDescription|\$VERSIONINFO:FileVersion|\$VERSIONINFO:InternalName|\$VERSIONINFO:LegalCopyright|\$VERSIONINFO:LegalTrademarks|\$VERSIONINFO:OriginalFilename|\$VERSIONINFO:ProductName|\$VERSIONINFO:ProductVersion|\$VERSIONINFO:Web)(?=\W|$)/ig);
		if (matches) {
			for (const match of matches) {
				logFunctions.writeLine(`lineNumber: ${lineNumber} | MetaCommand Match Found at Column: ${match.index}`, outputChannnel);
				//let work: vscode.Range[] = [commonFunctions.createRange(match, lineNumber, 0)];				
				metacommands.push(commonFunctions.createRange(match, lineNumber, 0));
			}
		}

		if (symbolCache && symbolCache.length > 0) {
			const tokens = lineOfCode.split(/[\s(]+/);
			for (let tokenIndex = 0; tokenIndex < tokens.length; tokenIndex++) {

				const sub = symbolCache.find((s) => s.name.trim().replace(/^(call|gosub)/i, "").toLowerCase() === tokens[tokenIndex].trim().replace(/^(call|gosub)/i, "").toLowerCase() && (s.kind === vscode.SymbolKind.Method || s.kind === vscode.SymbolKind.Function));
				if (sub) {
					const matches = lineOfCode.matchAll(new RegExp(`\\s*(\\b(call|gosub|declare sub|sub|function|\\s+=\\s+)\\s+)?${commonFunctions.escapeRegExp(sub.name)}(?:\\()?(?!\\))`, 'gi'));

					for (let match of matches) {
						let start: number = match.index < 1 ? match[0].toLowerCase().indexOf(sub.name.toLowerCase()) : match.index
						let stop: number = match.index < 1 ? start + sub.name.length : start + sub.name.length + 1

						subs.push(
							new vscode.Range(
								new vscode.Position(lineNumber, start),
								new vscode.Position(lineNumber, stop)
							));
					}
				}
			}
		}
	} catch (error) {
		logFunctions.writeLine(`ERROR in decorate: ${error}`, outputChannnel);
	}
}