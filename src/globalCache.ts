import * as vscode from "vscode";
import { TodoTreeProvider } from "./TodoTreeProvider";
import { DebugProtocol } from "@vscode/debugprotocol";

const lintChannel: vscode.OutputChannel = vscode.window.createOutputChannel("QB64: Lint", "QB64");

export enum channelType {
	lint = 3
}

export class GlobalCache {
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
	 * Gets the Configuration for the QB64 extension
	 * @returns Configuration for the QB64 workspace
	 */
	public getConfiguration(): vscode.WorkspaceConfiguration {
		return vscode.workspace.getConfiguration("qb64");
	}

	public LogError(message: string) {
		console.error(`${this.consolePrefix}${message}`);
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

	public getChannel(type: channelType) {
		switch (type) {

			case channelType.lint:
				return lintChannel;

			default:
				throw `Unknown channelType of ${type}`;
		}
	}


}

export var globalCache: GlobalCache = new GlobalCache();