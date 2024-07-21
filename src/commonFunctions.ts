import * as vscode from "vscode";

/**
 * Gets a new vscode.DocumentSelector
 */
export function getDocumentSelector(): vscode.DocumentSelector {
	return { scheme: "file", language: "QB64PE" };
}

/**
 * Gets the selected editor text is nothing is selected return empty string.
 * @returns The text selected in the current editor or the whole line if no text is selected.
 */
export function getSelectedTextOrLineTest(): string {
	let editor = vscode.window.activeTextEditor;
	let retvalue = editor ? editor.document.getText(editor.selection) : "";

	if (retvalue.length < 1) {
		retvalue = editor.document.lineAt(vscode.window.activeTextEditor.selection.active.line).text;
	}
	return retvalue;
}

/**
 * Escapes RegExp text value.  Found at https://stackoverflow.com/questions/3115150/how-to-escape-regular-expression-special-characters-using-javascript
 * @param text 
 * @returns 
 */
export function escapeRegExp(text: string) { return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'); }

/**
 * Gets an absolute path from a relative path.
 * @param base Base folder
 * @param relative The relative file path.
 * @returns can absolute path from a relative path.
 */
export function getAbsolutePath(base: string, relative: string): string {
	let work: string[] = base.split("/");
	let relativeArrary = relative.split("/");
	work.pop(); // ignore the current file name (or no string)
	// (ignore if "base" is the current folder without having slash in trail)
	for (let i = 0; i < relativeArrary.length; i++) {
		if (relativeArrary[i] == ".")
			continue;
		if (relativeArrary[i] == "..") {
			work.pop();
		} else {
			work.push(relativeArrary[i]);
		}
	}
	return work.join("/");
}

/**
 * Creates a new range object from a regex match.
 * @param match Match with the start and stop for the range.
 * @param lineNumber Line Number in the source file that range is for.
 * @param matchIndex The index in the match array to use.
 * @returns 
 */
export function createRange(match: RegExpMatchArray, lineNumber: number, matchIndex: number = 0) {
	return new vscode.Range(
		new vscode.Position(lineNumber, match.index),
		new vscode.Position(lineNumber, match.index + match[matchIndex].length));
}

/**
 * Gets the QB64PE word at the current curson postion in the current from the passed editor.
 * @param editor 
 * @returns The selected word/word under the cursor
 */
export function getQB64Word(editor: vscode.TextEditor): string {

	if (!editor) {
		return "";
	}

	if (!editor.document) {
		return "";
	}

	return getQB64WordFromDocument(editor.document, editor.selection.active);
}

/**
 * * Gets the QB64PE word at the current postion in the passed document
 * @param document 
 * @param position 
 * @returns 
 */
export function getQB64WordFromDocument(document: vscode.TextDocument, position: vscode.Position): string {

	const stop: string = " (+-=<>[{}]`);:.,%#`&!\t";
	const lineOfCode = document.lineAt(position.line).text;
	const cursorPostion = position.character + 1;
	let retvalue: string = "";

	// Get the first part of athe string
	for (let i: number = cursorPostion - 1; i >= 0; i--) {
		let currentChar = lineOfCode.substring(i - 1, i);
		if (currentChar == "" || stop.indexOf(currentChar) > -1) {
			break;
		}
		retvalue = currentChar + retvalue;
	}

	// Get the last part of athe string
	for (let i: number = cursorPostion; i <= lineOfCode.length; i++) {
		let currentChar = lineOfCode.substring(i - 1, i);
		if (currentChar == "" || stop.indexOf(currentChar) > -1) {
			break;
		}
		retvalue = retvalue + currentChar;
	}
	return retvalue.replaceAll("'", "");
}
