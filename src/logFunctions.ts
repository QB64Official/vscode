import * as vscode from "vscode";

// Channels
// They have to be cached or vsc creates a new channel every time 😒
// Add them all and in alphabetical order that way they show in grouped and in alphabetical order in the output view.
const vscodeChannel: any = vscode.window.createOutputChannel("QB64: .vscode");
const createBackupChannel: any = vscode.window.createOutputChannel("QB64: CreateBackup");
const decorateChannel: any = vscode.window.createOutputChannel("QB64: Decorate");
const formatterhannel = vscode.window.createOutputChannel("QB64: Formatter");
const gitChannel: any = vscode.window.createOutputChannel("QB64: Git");
const helpChannel: any = vscode.window.createOutputChannel("QB64: Help");
const lintChannel: any = vscode.window.createOutputChannel("QB64: Lint");
const openIncludeFileChannel: any = vscode.window.createOutputChannel("QB64: OpenIncludeFile");;

export enum channelType {
	help = 1,
	vscode = 2,
	lint = 3,
	decorator = 4,
	git = 5,
	createBackup = 6,
	formatter = 7,
	openIncludeFile = 8,
}

/**
 * Gets an output channel
 * @param type The type of output channel to get.
 */
export function getChannel(type: channelType) {
	switch (type) {
		case channelType.help:
			return helpChannel;

		case channelType.git:
			return gitChannel;

		case channelType.vscode:
			return vscodeChannel;

		case channelType.lint:
			return lintChannel;

		case channelType.decorator:
			return decorateChannel;

		case channelType.createBackup:
			return createBackupChannel;

		case channelType.formatter:
			return formatterhannel;

		case channelType.openIncludeFile:
			return openIncludeFileChannel;

		default:
			throw `Unknown channelType of ${type}`;
	}
}

/**
 * 
 * @param message Message to write to the output channel
 * @param outputChannnel The channel to write the message to.
 */
export function writeLine(message: string, outputChannnel: any) {
	if (outputChannnel) {
		outputChannnel.appendLine(message);
	} else {
		console.log(message);
	}
}