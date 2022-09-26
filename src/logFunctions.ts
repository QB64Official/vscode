import * as vscode from "vscode";

// Channels
// They have to be cached or vsc creates a new channel every time 😒
// Add them all and in alphabetical order that way they show in grouped and in alphabetical order in the output view.
const vscodeChannel: any = vscode.window.createOutputChannel("QB64: .vscode", "QB64");
const createBackupChannel: any = vscode.window.createOutputChannel("QB64: Create Backup", "QB64");
const decorateChannel: any = vscode.window.createOutputChannel("QB64: Decorate", "QB64");
const definitionProviderChannel: any = vscode.window.createOutputChannel("QB64: Definition Provider", "QB64");
const formatterhannel = vscode.window.createOutputChannel("QB64: Formatter", "QB64");
const gitChannel: any = vscode.window.createOutputChannel("QB64: Git", "QB64");
const helpChannel: any = vscode.window.createOutputChannel("QB64: Help", "QB64");
const hoverProviderChannel: any = vscode.window.createOutputChannel("QB64: Hover Provider", "QB64");
const lintChannel: any = vscode.window.createOutputChannel("QB64: Lint", "QB64");
const referenceProviderChannel: any = vscode.window.createOutputChannel("QB64: Reference Provider", "QB64");
const openIncludeFileChannel: any = vscode.window.createOutputChannel("QB64: Open Include File", "QB64");;
const openInQB64Channel: any = vscode.window.createOutputChannel("QB64: Open In QB64", "QB64");
const scriptChannel: any = vscode.window.createOutputChannel("QB64: Script", "QB64");

export enum channelType {
	help = 1,
	vscode = 2,
	lint = 3,
	decorator = 4,
	git = 5,
	createBackup = 6,
	formatter = 7,
	openIncludeFile = 8,
	openInQB64 = 9,
	referenceProvider = 10,
	definitionProvider = 11,
	hoverProvider = 12,
	script = 13,
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

		case channelType.openInQB64:
			return openInQB64Channel;

		case channelType.referenceProvider:
			return referenceProviderChannel;

		case channelType.definitionProvider:
			return definitionProviderChannel;

		case channelType.hoverProvider:
			return hoverProviderChannel;

		case channelType.script:
			return scriptChannel;

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