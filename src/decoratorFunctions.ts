"use strict";
import * as vscode from "vscode";
import * as logFunctions from "./logFunctions";
import * as commonFunctions from "./commonFunctions";
import { symbolCache } from "./extension";
import * as path from 'path';

class DecorateArgs {
	public includeLeading: vscode.Range[] = [];
	public includeTrailing: vscode.Range[] = [];
	public todos: vscode.Range[] = [];
	public subs: vscode.Range[] = [];
	public metacommands: vscode.Range[] = [];
	public existingDiagnostics: vscode.Diagnostic[] = [];
	public diagnostics: vscode.Diagnostic[] = [];
	public IsDebugMode: boolean = false;
	public editor: any = null;
	public lineNumber: number = -1;
	public isRgbColorEnabled: boolean = false;
	public isTodoHighlightEnabled: boolean = false;
	public isCurrentRowHighlightEnabled: boolean = false;
	public readonly outputChannnel: any = logFunctions.getChannel(logFunctions.channelType.decorator);
	public editorConfig: any = null;
	public lineOfCode: string = "";
	public lineOfCodeTrimmedLowered: string = "";
	public lineLenght: number = 0;
	public hasOptionExplicit: boolean = false;
	public isRunCPCheckesEnabled: boolean = false;

	constructor() {
		this.reset();
	}

	public setCode(lineOfCode: string, lineNumber: number) {
		this.lineOfCode = lineOfCode;
		this.lineLenght = lineOfCode.length;
		this.lineOfCodeTrimmedLowered = lineOfCode.trim().toLowerCase();
		this.lineNumber = lineNumber;
	}

	public reset(resetAllScanAll: boolean = false, editor: any = null) {
		const config = vscode.workspace.getConfiguration("qb64");
		this.isRgbColorEnabled = config.get("isRgbColorEnabled");
		this.isTodoHighlightEnabled = config.get("isTodoHighlightEnabled");
		this.editorConfig = vscode.workspace.getConfiguration("editor.tokenColorCustomizations");
		this.isCurrentRowHighlightEnabled = config.get("isCurrentRowHighlightEnabled");

		const filesToSkip: string[] = config.get('filesToSkip', []).map(file => file.toLowerCase());
		if (editor && filesToSkip.includes(path.parse(editor.document.fileName.toLowerCase()).base)) {
			this.isRunCPCheckesEnabled = false;
		} else {
			this.isRunCPCheckesEnabled = config.get("isRunCPCheckesEnabled");
		}

		this.includeLeading.length = 0;
		this.includeTrailing.length = 0;
		this.todos.length = 0;
		this.subs.length = 0;
		this.metacommands.length = 0;
		this.existingDiagnostics.length = 0;
		this.diagnostics.length = 0;
		this.editor = editor;
		if (resetAllScanAll) {
			this.hasOptionExplicit = false;
		}
	}
}

const decorationTypeCurrentRow: vscode.TextEditorDecorationType = vscode.window.createTextEditorDecorationType(
	{
		fontWeight: "bold",
		borderRadius: "5px",
		dark: { border: "1px solid rgb(215,215,215); opacity: 0.5;" },
		light: { border: "1px solid rgb(115,115,115); opacity: 0.5;" }
	}
);

const diagnosticCollection = vscode.languages.createDiagnosticCollection('extension');
let lastLine: vscode.Position;
let decorateArgs: DecorateArgs = new DecorateArgs();

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

function hasMixedIndentation(lineOfCode: string): boolean {
	let regex = /^[\t ]+/; // Match spaces or tabs at the start of a string
	let match = lineOfCode.match(regex);
	if (match) {
		let leadingWhitespace = match[0];
		return leadingWhitespace.includes('\t') && leadingWhitespace.includes(' ');
	}
	return false;
}

function getMetaCommandDecoration(decorateArgs: DecorateArgs, scopeName: string): vscode.TextEditorDecorationType {
	let retvalue: vscode.TextEditorDecorationType = null;
	try {
		const textMateRules = decorateArgs.editorConfig.get('textMateRules') as Array<any>;
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
function getSubDecoration(decorateArgs: DecorateArgs): vscode.TextEditorDecorationType {

	let decorationTypeSub: vscode.TextEditorDecorationType = null;
	try {
		const textMateRules = decorateArgs.editorConfig.get('textMateRules') as Array<any>;  // Type assertion here
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

	if (!editor || !editor.document || isOutputWindowActive(editor) || editor.document.languageId.toLowerCase() === "log" || editor.document.languageId.toLowerCase() === "jsonc" || editor.document.fileName.toLowerCase().indexOf("qb64: ") > 0) {
		return;
	}

	const extension = vscode.extensions.getExtension('qb64-official.qb64');

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
				return; // Can't log the file name. That cause an infinite loop.
			}
		}
	}

	const currrentLine: vscode.Position = editor.selection.active;
	try {

		const decorationTypeIncludeLeading: vscode.TextEditorDecorationType = vscode.window.createTextEditorDecorationType({ color: 'rgb(68,140,255)' })
		const decorationTypeIncludeTrailing: vscode.TextEditorDecorationType = vscode.window.createTextEditorDecorationType({ color: 'rgb(0,255,0)' })

		if (scanAllLines) {
			decorateArgs.reset(true, editor);
			const sourceCode = editor.document.getText().split('\n');
			for (let currrentLineNumber = 0; currrentLineNumber < sourceCode.length; currrentLineNumber++) {
				decorateArgs.lineNumber = currrentLineNumber;
				decorateArgs.setCode(decorateArgs.editor.document.lineAt(decorateArgs.lineNumber).text, currrentLineNumber)
				decorate(decorateArgs);
			}

			if (decorateArgs.isRunCPCheckesEnabled && !decorateArgs.hasOptionExplicit) {
				if (path.extname(editor.document.uri.fsPath).toLowerCase() == ".bas") {
					decorateArgs.setCode("", 0);
					addDiagnostic(decorateArgs, "CP: Should have 'Option Explicit'", vscode.DiagnosticSeverity.Warning);
				}
			}

		} else {

			if ((lastLine && (lastLine.line !== currrentLine.line))) {
				decorateArgs.reset(false, editor);
				decorateArgs.lineNumber = lastLine.line;
				decorateArgs.existingDiagnostics = diagnosticCollection.get(editor.document.uri).filter(diagnostic => diagnostic.range.start.line !== lastLine.line);
				decorateArgs.setCode(decorateArgs.editor.document.lineAt(decorateArgs.lineNumber).text, lastLine.line)
				decorate(decorateArgs);

				if (decorateArgs.hasOptionExplicit) {
					let diagnostics = diagnosticCollection.get(editor.document.uri);
					diagnostics = diagnostics.filter(diagnostic => diagnostic.message !== "CP: Should have 'Option Explicit'");
					diagnosticCollection.set(editor.document.uri, diagnostics);
				}

			}
		}

		const mergedDiagnostics = decorateArgs.existingDiagnostics.concat(decorateArgs.diagnostics);
		let uniqueMessages = new Set<string>();
		let uniqueDiagnostics: vscode.Diagnostic[] = [];
		mergedDiagnostics.forEach(diagnostic => {
			if (!uniqueMessages.has(diagnostic.message)) {
				uniqueMessages.add(diagnostic.message);
				uniqueDiagnostics.push(diagnostic);
			}
		});
		diagnosticCollection.set(editor.document.uri, mergedDiagnostics);

		editor.setDecorations(decorationTypeIncludeLeading, decorateArgs.includeLeading);
		editor.setDecorations(decorationTypeIncludeTrailing, decorateArgs.includeTrailing);

		let decorationTypeSub = getSubDecoration(decorateArgs);
		if (decorationTypeSub) {
			editor.setDecorations(decorationTypeSub, decorateArgs.subs);
		}

		let metacommandDecoration = getMetaCommandDecoration(decorateArgs, "metacommand.QB64");
		if (metacommandDecoration) {
			editor.setDecorations(metacommandDecoration, decorateArgs.metacommands);
		}

		let todoDecoration = getMetaCommandDecoration(decorateArgs, "todo.QB64");
		if (todoDecoration) {
			editor.setDecorations(todoDecoration, decorateArgs.todos);
		}

		if (currrentLine) {
			if (decorateArgs.isCurrentRowHighlightEnabled) {
				let current: vscode.Range[] = [new vscode.Range(new vscode.Position(currrentLine.line, 0), new vscode.Position(currrentLine.line, editor.document.lineAt(currrentLine.line).text.length))];
				editor.setDecorations(decorationTypeCurrentRow, []);
				editor.setDecorations(decorationTypeCurrentRow, current);
			}
		}

	} catch (error) {
		logFunctions.writeLine(`ERROR in scanFile: ${error}`, decorateArgs.outputChannnel);
	} finally {
		if (currrentLine) {
			lastLine = currrentLine;
		}
	}
}

/**
 * Add a diagnostic to the diagnostics array
 */
function addDiagnostic(decorateArgs: DecorateArgs, message: string, diagnosticSeverity: vscode.DiagnosticSeverity) {
	try {
		const lineRange = new vscode.Range(new vscode.Position(decorateArgs.lineNumber, 0), new vscode.Position(decorateArgs.lineNumber, decorateArgs.lineLenght));
		const existingDiagnostic = decorateArgs.diagnostics.find(diagnostic => diagnostic.range.isEqual(lineRange) && diagnostic.message === message);
		if (!existingDiagnostic) {
			decorateArgs.diagnostics.push(new vscode.Diagnostic(lineRange, message, diagnosticSeverity));
		}
	} catch (error) {
		console.log('Error while adding diagnostic:', error);
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
function decorate(decorateArgs: DecorateArgs) {
	// TODO: move line of code to DecorateArgs	
	if (decorateArgs.editor.document.languageId == "Log" || decorateArgs.editor.document.fileName == "extension-output-qb64-official.qb64-#3-QB64: Decorate") {
		return;
	}

	if (decorateArgs.lineOfCodeTrimmedLowered.length < 2) {
		return;
	}

	if (decorateArgs.lineOfCodeTrimmedLowered.startsWith("$debug")) {
		decorateArgs.IsDebugMode = true;
	}

	const red = 0;
	const green = 1;
	const blue = 2;
	try {

		if (hasMixedIndentation(decorateArgs.lineOfCode)) {
			addDiagnostic(decorateArgs, "Mixed Indentation", vscode.DiagnosticSeverity.Information);
		}

		if (decorateArgs.lineOfCodeTrimmedLowered.startsWith("rem") || ((decorateArgs.lineOfCodeTrimmedLowered.startsWith("'") && decorateArgs.lineOfCodeTrimmedLowered.indexOf("include") < 0))) {
			// Look for todo
			if (decorateArgs.isTodoHighlightEnabled) {
				const matches = decorateArgs.lineOfCode.matchAll(/(?:'|\brem\b)\s*\b(todo|fixit|fixme)\b:?/ig);
				for (const match of matches) {
					decorateArgs.todos.push(commonFunctions.createRange(match, decorateArgs.lineNumber, 0));
				}
			}
			return;
		}

		if (decorateArgs.lineOfCodeTrimmedLowered.startsWith("option _explicit") || decorateArgs.lineOfCodeTrimmedLowered.startsWith("option explicit")) {
			decorateArgs.hasOptionExplicit = true;
		}

		if (decorateArgs.lineOfCodeTrimmedLowered.startsWith("$virtualkeyboard")) {
			addDiagnostic(decorateArgs, "Deprecated feature", vscode.DiagnosticSeverity.Warning);
		}

		if (decorateArgs.isRunCPCheckesEnabled && decorateArgs.lineOfCodeTrimmedLowered.match(/^(?!('|rem).*).*\bgoto\b/im)) {
			addDiagnostic(decorateArgs, "CP: Avoid using GOTO", vscode.DiagnosticSeverity.Warning);
		}

		if (decorateArgs.IsDebugMode && decorateArgs.lineOfCodeTrimmedLowered.startsWith("$checking") && decorateArgs.lineOfCodeTrimmedLowered.endsWith("off")) {
			addDiagnostic(decorateArgs, "$Debug features won't work in $Checking:Off blocks", vscode.DiagnosticSeverity.Warning);
		}

		if (decorateArgs.isRgbColorEnabled) {
			const matches = decorateArgs.lineOfCode.matchAll(/(?<=rgb|rgb32)(\()[ 0-9]+(,[ 0-9]+)+(,[ 0-9]+)+(\))/ig);
			if (matches) {
				for (const match of matches) {
					let rgb: string[] = match[0].substring(match[0].indexOf("(") + 1).replace(")", "").split(",");
					decorateArgs.editor.setDecorations(vscode.window.createTextEditorDecorationType({ border: `2px solid rgb(${rgb[red]},${rgb[green]},${rgb[blue]})`, borderRadius: "5px" }), [commonFunctions.createRange(match, decorateArgs.lineNumber, 0)]);
				}
			}
		}

		if (decorateArgs.isRunCPCheckesEnabled) {
			let match: RegExpMatchArray = decorateArgs.lineOfCode.match(/^dim\s+\b([a-hj-z]\$?%?&?!?#?)(\s+as\s+\w+)?\b/gi)
			if (match) {
				addDiagnostic(decorateArgs, "CP: Avoid single letter variable names", vscode.DiagnosticSeverity.Information);
			}
		}

		let match: RegExpMatchArray = decorateArgs.lineOfCode.match(/'\$INCLUDE:/i)
		if (match && match.index !== undefined) {
			decorateArgs.includeLeading.push(commonFunctions.createRange(match, decorateArgs.lineNumber, 0));
			match = decorateArgs.lineOfCode.match(/'(.*)'/i)
			if (match !== null && match.index !== undefined) {
				decorateArgs.includeTrailing.push(commonFunctions.createRange(match, decorateArgs.lineNumber, 0));
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

		let matches = decorateArgs.lineOfCode.matchAll(/(?<=\W|^)(REM|'|\$DYNAMIC|\$STATIC|Option _Explicit|Option Explicit|option _explicitarray|option explicitarray|\$RESIZE:ON|\$RESIZE:OFF|\$RESIZE:STRETCH|\$RESIZE:SMOOTH|\$ASSERTS|\$Noprefix|\$CHECKING|\$COLOR|\$CONSOLE:ONLY|\$CONSOLE:ON|\$CONSOLE:OFF|\$CONSOLE|\$DEBUG|\$ERROR|\$EXEICON:|\$LET|\$IF|\$ELSEIF|\$END IF|\$SCREENHIDE|\$SCREENSHOW|\$VIRTUALKEYBOARD|\$VERSIONINFO:Comments|\$VERSIONINFO:CompanyName|\$VERSIONINFO:FileDescription|\$VERSIONINFO:FileVersion|\$VERSIONINFO:InternalName|\$VERSIONINFO:LegalCopyright|\$VERSIONINFO:LegalTrademarks|\$VERSIONINFO:OriginalFilename|\$VERSIONINFO:ProductName|\$VERSIONINFO:ProductVersion|\$VERSIONINFO:Web)(?=\W|$)/ig);
		if (matches) {
			for (const match of matches) {
				decorateArgs.metacommands.push(commonFunctions.createRange(match, decorateArgs.lineNumber, 0));
			}
		}

		if (symbolCache && symbolCache.length > 0) {
			const tokens: string[] = Array.from(new Set(decorateArgs.lineOfCode.replace(/'.*$/, '').trimEnd().split(/[\s(]+/).filter(token => token.trim() !== '')));
			for (let tokenIndex = 0; tokenIndex < tokens.length; tokenIndex++) {
				const sub = symbolCache.find((s) => s.name && s.name === tokens[tokenIndex].trim().toLowerCase().replace(/(call|gosub|goto|:)$/i, ""));
				if (sub) {
					let subName = commonFunctions.escapeRegExp(sub.name)

					if (subName.endsWith(":")) {
						subName = subName.slice(0, -1);
					}
					// Typescritpt regex sucks.
					// Remove the comments from the line and parse that.
					const matches = decorateArgs.lineOfCode.replace(/'.*$/, '').trimEnd().matchAll(new RegExp(`\\b(?:call\\s*|gosub\\s*|goto\\s*|declare sub\\s*|sub\\s*|declare function\\s*|function\\s*)?(${subName})\\b|\\b(${subName}):`, 'gi'));
					for (const match of matches) {
						const start: number = match[1] ? match.index + match[0].indexOf(match[1]) : match.index || 0;
						decorateArgs.subs.push(new vscode.Range(new vscode.Position(decorateArgs.lineNumber, start), new vscode.Position(decorateArgs.lineNumber, match.index < 1 ? start + sub.name.length : start + sub.name.length + 1)));
					}
				}
			}
		}

	} catch (error) {
		logFunctions.writeLine(`ERROR in decorate: ${error}`, decorateArgs.outputChannnel);
	}
}