import * as vscode from "vscode";

/**
 * Gets a new vscode.DocumentSelector
 */
export function getDocumentSelector(): vscode.DocumentSelector {
	return { scheme: "file", language: "QB64" };
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
export function escapeRegExp(text) { return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'); }


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