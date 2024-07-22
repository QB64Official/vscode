"use strict";
import * as vscode from "vscode";
import * as logFunctions from "./logFunctions";
import * as commonFunctions from "./commonFunctions";
import { symbolCache } from "./extension";
import { syncBuiltinESMExports } from "module";

//const decorationTypeTodo: vscode.TextEditorDecorationType = vscode.window.createTextEditorDecorationType({ backgroundColor: 'green', color: 'rgb(0,0,0)' });
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

function getMetaCommandDecoration(scopeName: string): vscode.TextEditorDecorationType {
	let retvalue: vscode.TextEditorDecorationType = null;
	try {
		const editorConfig: any = vscode.workspace.getConfiguration("editor.tokenColorCustomizations");
		const textMateRules = editorConfig.get('textMateRules') as Array<any>;  // Type assertion here
		if (!textMateRules) {
			return retvalue;
		}
		let colorRule: any = textMateRules.find(rule => rule.scope == scopeName);
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

		const config: any = vscode.workspace.getConfiguration("qb64pe");
		let userFunctionColorRule: any = textMateRules.find(rule => rule.scope == 'userfunctions.qb64');
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


/**
 * Scans all the lines to apply decorations.
 * @param editor 
 * @param scanAllLines True will check all lines in the file | False checks only the current line
 * @returns 
 */
export function scanFile(editor: any, scanAllLines: boolean) {

	if (!editor || editor.document.uri.scheme.toLowerCase() === 'output' || editor.document.languageId.toLowerCase() === "log" || editor.document.languageId.toLowerCase() === "jsonc" || editor.document.fileName.toLowerCase().indexOf("QB64PE: ") > 0) {
		return;
	}

	const extension = vscode.extensions.getExtension('qb64pe.qb64');
	const outputChannel: any = logFunctions.getChannel(logFunctions.channelType.decorator);

	if (extension) { // Skip non QB64PE files.
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

	const currentLine: vscode.Position = editor.selection.active;
	try {

		const decorationTypeIncludeLeading: vscode.TextEditorDecorationType = vscode.window.createTextEditorDecorationType({ color: 'rgb(68,140,255)' })
		const decorationTypeIncludeTrailing: vscode.TextEditorDecorationType = vscode.window.createTextEditorDecorationType({ color: 'rgb(0,255,0)' })
		const config = vscode.workspace.getConfiguration("qb64pe");
		const isRgbColorEnabled: boolean = config.get("isRgbColorEnabled");
		const isTodoHighlightEnabled: boolean = config.get("isTodoHighlightEnabled");
		let includeLeading: vscode.Range[] = [];
		let includeTrailing: vscode.Range[] = [];
		let todos: vscode.Range[] = [];
		let subs: vscode.Range[] = [];
		let metacommands: vscode.Range[] = [];

		if (scanAllLines) {
			const sourceCode = editor.document.getText().split('\n');
			for (let currentLineNumber = 0; currentLineNumber < sourceCode.length; currentLineNumber++) {
				decorate(editor, currentLineNumber, outputChannel, includeLeading, includeTrailing, todos, subs, metacommands, isTodoHighlightEnabled, isRgbColorEnabled);
			}
		} else {
			if ((lastLine && (lastLine.line !== currentLine.line))) {
				decorate(editor, lastLine.line, outputChannel, includeLeading, includeTrailing, todos, subs, metacommands, isTodoHighlightEnabled, isRgbColorEnabled);
			}
		}

		editor.setDecorations(decorationTypeIncludeLeading, includeLeading);
		editor.setDecorations(decorationTypeIncludeTrailing, includeTrailing);

		let decorationTypeSub = getSubDecoration();
		if (decorationTypeSub) {
			editor.setDecorations(decorationTypeSub, subs);
		}

		let metacommandDecoration = getMetaCommandDecoration('metacommand.QB64');
		if (metacommandDecoration) {
			editor.setDecorations(metacommandDecoration, metacommands);
		}

		let todoDecoration = getMetaCommandDecoration('todo.QB64');
		if (todoDecoration) {
			editor.setDecorations(todoDecoration, todos);
		}

		if (currentLine) {
			const config = vscode.workspace.getConfiguration("qb64pe");
			if (config.get("isCurrentRowHighlightEnabled")) {
				let current: vscode.Range[] = [new vscode.Range(
					new vscode.Position(currentLine.line, 0),
					new vscode.Position(currentLine.line, editor.document.lineAt(currentLine.line).text.length))
				];
				editor.setDecorations(decorationTypeCurrentRow, []);
				editor.setDecorations(decorationTypeCurrentRow, current);
			}
		}

	} catch (error) {
		logFunctions.writeLine(`ERROR in scanFile: ${error}`, outputChannel);
	} finally {
		if (currentLine) {
			lastLine = currentLine;
		}
	}
}

/**
 * Decorate a line or loads the an array of decorations
 * @param editor 
 * @param lineNumber Line Number in the code file.
 * @param outputChannel Channel to write messages to
 * @param includeLeading 
 * @param includeTrailing 
 * @param todos Array of To do decorations 
 * @param subs Array of subs/functions decorations
 * @returns 
 */
function decorate(editor: any, lineNumber: number, outputChannel: any, includeLeading: vscode.Range[], includeTrailing: vscode.Range[], todos: vscode.Range[], subs: vscode.Range[], metacommands: vscode.Range[], isTodoHighlightEnabled: boolean, isRgbColorEnabled: boolean) {

	let lineOfCode: string = editor.document.lineAt(lineNumber).text;

	if (lineOfCode.trim().length < 2) {
		return;
	}

	if (editor.document.languageId == "Log" || editor.document.fileName == "extension-output-qb64pe-#3-QB64PE: Decorate") {
		return;
	}

	const red = 0;
	const green = 1;
	const blue = 2;
	try {

		//const config = vscode.workspace.getConfiguration("qb64pe")

		if (lineOfCode.trim().toLocaleLowerCase().startsWith("rem") || ((lineOfCode.trim().startsWith("'") && lineOfCode.trim().toLowerCase().indexOf("include") < 0))) {
			// Look for todo
			if (isTodoHighlightEnabled) {
				const matches = lineOfCode.matchAll(/(?:'|\brem\b)\s*\b(todo|fixit|fixme)\b:?/ig);
				for (const match of matches) {
					todos.push(commonFunctions.createRange(match, lineNumber, 0));
				}
			}
			return;
		}
		//logFunctions.writeLine(`decorate(${lineNumber + 1}) | editor.selection.active.line: ${editor.selection.active.line} | Code: ${lineOfCode}`, outputChannel);

		if (isRgbColorEnabled) {
			const matches = lineOfCode.matchAll(/(?<=rgb|rgb32)(\()[ 0-9]+(,[ 0-9]+)+(,[ 0-9]+)+(\))/ig);
			if (matches) {
				for (const match of matches) {
					logFunctions.writeLine(`lineNumber: ${lineNumber} | RGB Match Found at Column: ${match.index}`, outputChannel);
					let rgb: string[] = match[0].substring(match[0].indexOf("(") + 1).replace(")", "").split(",");
					let work: vscode.Range[] = [commonFunctions.createRange(match, lineNumber, 0)];
					let colorDec = vscode.window.createTextEditorDecorationType({ border: `2px solid rgb(${rgb[red]},${rgb[green]},${rgb[blue]})`, borderRadius: "5px" });
					editor.setDecorations(colorDec, work);
				}
			}
		}

		// Look for include files
		if (!lineOfCode.toLowerCase().startsWith("rem")) {
			let match = lineOfCode.match(/'\$INCLUDE:/i)
			if (match !== null && match.index !== undefined) {
				includeLeading.push(commonFunctions.createRange(match, lineNumber, 0));
				match = lineOfCode.match(/'(.*)'/i)
				if (match !== null && match.index !== undefined) {
					includeTrailing.push(commonFunctions.createRange(match, lineNumber, 0));
				}
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
				logFunctions.writeLine(`lineNumber: ${lineNumber} | AS Match Found at Column: ${match.index}`, outputChannel);
				let work: vscode.Range[] = [commonFunctions.createRange(match, lineNumber, 0)];
				let colorDec = vscode.window.createTextEditorDecorationType({ border: `2px solid rgb(0,255,0)`, borderRadius: "10px" });
				editor.setDecorations(colorDec, work);
			}
		}
		*/

		let matches = lineOfCode.matchAll(/(?<=\W|^)(REM|'|\$DYNAMIC|\$STATIC|Option _Explicit|Option Explicit|option _explicitarray|option explicitarray|\$RESIZE:ON|\$RESIZE:OFF|\$RESIZE:STRETCH|\$RESIZE:SMOOTH|\$ASSERTS|\$Noprefix|\$CHECKING|\$COLOR|\$CONSOLE:ONLY|\$CONSOLE:ON|\$CONSOLE:OFF|\$CONSOLE|\$DEBUG|\$ERROR|\$EXEICON:|\$LET|\$IF|\$ELSEIF|\$END IF|\$SCREENHIDE|\$SCREENSHOW|\$VIRTUALKEYBOARD|\$VERSIONINFO:Comments|\$VERSIONINFO:CompanyName|\$VERSIONINFO:FileDescription|\$VERSIONINFO:FileVersion|\$VERSIONINFO:InternalName|\$VERSIONINFO:LegalCopyright|\$VERSIONINFO:LegalTrademarks|\$VERSIONINFO:OriginalFilename|\$VERSIONINFO:ProductName|\$VERSIONINFO:ProductVersion|\$VERSIONINFO:Web)(?=\W|$)/ig);
		if (matches) {
			for (const match of matches) {
				logFunctions.writeLine(`lineNumber: ${lineNumber} | MetaCommand Match Found at Column: ${match.index}`, outputChannel);
				metacommands.push(commonFunctions.createRange(match, lineNumber, 0));
			}
		}


		if (symbolCache && symbolCache.length > 0) {
			const tokens: string[] = Array.from(new Set(lineOfCode.replace(/'.*$/, '').trimEnd().split(/[\s(]+/).filter(token => token.trim() !== '')));
			for (let tokenIndex = 0; tokenIndex < tokens.length; tokenIndex++) {
				const sub = symbolCache.find((s) => s.name && s.name === tokens[tokenIndex].trim().toLowerCase().replace(/(call|gosub|goto|:)$/i, ""));
				if (sub) {
					// TypeScript regex sucks.
					// Remove the comments from the line and parse that.
					const codeWithoutComments = lineOfCode.replace(/'.*$/, '').trimEnd();
					let subName = commonFunctions.escapeRegExp(sub.name)

					if (subName.endsWith(":")) {
						subName = subName.slice(0, -1);
					}
					const matches = codeWithoutComments.matchAll(new RegExp(`\\b(?:call\\s*|gosub\\s*|goto\\s*|declare sub\\s*|sub\\s*|declare function\\s*|function\\s*)?(${subName})\\b|\\b(${subName}):`, 'gi'));

					for (let match of matches) {
						let start: number = match[1] ? match.index + match[0].indexOf(match[1]) : match.index || 0;

						subs.push(
							new vscode.Range(
								new vscode.Position(lineNumber, start),
								new vscode.Position(lineNumber, match.index < 1 ? start + sub.name.length : start + sub.name.length + 1)
							));
					}
				}
			}
		}

	} catch (error) {
		logFunctions.writeLine(`ERROR in decorate: ${error}`, outputChannel);
	}
}