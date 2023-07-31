import * as vscode from "vscode";
import { TodoTreeProvider } from "./TodoTreeProvider";
import { DebugProtocol } from "@vscode/debugprotocol";

export class GlobalCache {
	public consolePrefix: string = "QB64: ";
	public activeEditor: vscode.TextEditor | undefined = undefined;
	public skipLineRanges: vscode.Range[] = []; // Global variable to keep track of the decorations
	public symbols: vscode.DocumentSymbol[] = [];
	public todoTreeProvider: TodoTreeProvider = new TodoTreeProvider();
	public constVariables: DebugProtocol.Variable[] = [];

	public readonly decorationSkipLine: vscode.TextEditorDecorationType = vscode.window.createTextEditorDecorationType(
		{
			borderRadius: "2px",
			dark: { backgroundColor: 'rgba(175, 243, 28, 0.2)' },
			light: { backgroundColor: 'rgba(115, 115, 115, 0.2)' }
		}
	);

	/**
	 * Gets the Configuration for the QB64 extension
	 * @returns Configuration for the QB64 workspace
	 */
	public GetConfiguration(): vscode.WorkspaceConfiguration {
		return vscode.workspace.getConfiguration("qb64");
	}

	/**
	 * Remove all rows from constVariables
	 */
	public clearConstVariables() {
		this.constVariables.length = 0;
	}


}

export var globalCache: GlobalCache = new GlobalCache();