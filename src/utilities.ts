import * as vscode from "vscode";
import { TodoTreeProvider } from "./TodoTreeProvider";
import { DebugProtocol } from "@vscode/debugprotocol";

export class Utilities {
	public consolePrefix: string = "QB64: ";
	public activeEditor: vscode.TextEditor | undefined = undefined;
	public skipLineRanges: vscode.Range[] = []; // Global variable to keep track of the decorations
	public symbols: vscode.DocumentSymbol[] = [];
	public todoTreeProvider: TodoTreeProvider = new TodoTreeProvider();
	public constVariables: DebugProtocol.Variable[] = [];
	public sharedVariables: DebugProtocol.Variable[] = [];

	public readonly decorationSkipLine: vscode.TextEditorDecorationType = vscode.window.createTextEditorDecorationType(
		{
			borderRadius: "2px",
			dark: { backgroundColor: 'rgba(175, 243, 28, 0.2)' },
			light: { backgroundColor: 'rgba(115, 115, 115, 0.2)' }
		}
	);

	/**
 * Gets a new vscode.DocumentSelector
 */
	public getDocumentSelector(): vscode.DocumentSelector {
		return { scheme: "file", language: "QB64" };
	}

	/**
	 * Gets the selected editor text is nothing is selected return empty string.
	 * @returns The text selected in the current editor or the whole line if no text is selected.
	 */
	public getSelectedTextOrLineTest(): string {
		let editor = vscode.window.activeTextEditor;
		let retvalue = editor ? editor.document.getText(editor.selection) : "";

		if (retvalue.length < 1) {
			retvalue = editor.document.lineAt(vscode.window.activeTextEditor.selection.active.line).text;
		}
		return retvalue;
	}


	/**
	 * Gets the Configuration for the QB64 extension
	 * @returns Configuration for the QB64 workspace
	 */
	public getConfiguration(): vscode.WorkspaceConfiguration {
		return vscode.workspace.getConfiguration("qb64");
	}

	public logError(message: string, showError: boolean = true) {
		console.error(`${this.consolePrefix}${message}`);
		if (showError) {
			vscode.window.showErrorMessage(message);
		}
	}

	public log(message: string) {
		console.log(`${this.consolePrefix}${message}`);
	}

	/**
	 * Writes a line to the output channel
	 * @param message Message to write to the output channel
	 * @param outputChannel The channel to write the message to.
	 */
	public writeToChannel(message: string, outputChannel: vscode.OutputChannel) {
		if (outputChannel) {
			outputChannel.appendLine(message);
		} else {
			this.log(message);
		}
	}

	/**
	 * Gets an output channel
	 * @param type The type of output channel to get.
	 */

	public getChannel() {
		return qb64Channel;
	}

	/**
	 * Get the currnet date as a string
	 * @returns a date string in the format of yyyy-MM-dd:hh:mm:ss
	 */
	public getCurrentDateTime(): string {
		let date = new Date();
		let year = date.getFullYear();
		let month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based, so we add 1
		let day = date.getDate().toString().padStart(2, '0');
		let hours = date.getHours().toString().padStart(2, '0');
		let minutes = date.getMinutes().toString().padStart(2, '0');
		let seconds = date.getSeconds().toString().padStart(2, '0');

		return `${year}-${month}-${day}:${hours}:${minutes}:${seconds}`;
	}


	/**
	 * Escapes RegExp text value.  Found at https://stackoverflow.com/questions/3115150/how-to-escape-regular-expression-special-characters-using-javascript
	 * @param text 
	 * @returns 
	 */
	public escapeRegExp(text: string) { return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'); }

	/**
 * Gets an absolute path from a relative path.
 * @param base Base folder
 * @param relative The relative file path.
 * @returns can absolute path from a relative path.
 */
	public getAbsolutePath(base: string, relative: string): string {
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
	public createRange(match: RegExpMatchArray, lineNumber: number, matchIndex: number = 0) {
		return new vscode.Range(
			new vscode.Position(lineNumber, match.index),
			new vscode.Position(lineNumber, match.index + match[matchIndex].length));
	}


	/**
 * Gets the QB64 word at the current curson postion in the current from the passed editor.
 * @param editor 
 * @returns The selected word/word under the cursor
 */
	public getQB64Word(editor: vscode.TextEditor): string {

		if (!editor) {
			return "";
		}

		if (!editor.document) {
			return "";
		}

		return this.getQB64WordFromDocument(editor.document, editor.selection.active);
	}

	/**
	 * * Gets the QB64 word at the current postion in the passed document
	 * @param document 
	 * @param position 
	 * @returns 
	 */
	public getQB64WordFromDocument(document: vscode.TextDocument, position: vscode.Position): string {

		const stop: string = " (+-=<>[{}]`);:.,%$#`&!\t";
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

}

const qb64Channel: vscode.OutputChannel = vscode.window.createOutputChannel("QB64", "QB64");
export var utilities: Utilities = new Utilities();