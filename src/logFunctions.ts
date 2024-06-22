import * as vscode from "vscode";

// Channels
// They have to be cached or vsc creates a new channel every time 😒
// Add them all and in alphabetical order that way they show in grouped and in alphabetical order in the output view.
const vscodeChannel: any = vscode.window.createOutputChannel("QB64PE: .vscode", "QB64PE");
const createBackupChannel: any = vscode.window.createOutputChannel("QB64PE: Create Backup", "QB64PE");
const decorateChannel: any = vscode.window.createOutputChannel("QB64PE: Decorate", "QB64PE");
const definitionProviderChannel: any = vscode.window.createOutputChannel("QB64PE: Definition Provider", "QB64PE");
const formatterhannel = vscode.window.createOutputChannel("QB64PE: Formatter", "QB64PE");
const gitChannel: any = vscode.window.createOutputChannel("QB64PE: Git", "QB64PE");
const helpChannel: any = vscode.window.createOutputChannel("QB64PE: Help", "QB64PE");
const hoverProviderChannel: any = vscode.window.createOutputChannel("QB64PE: Hover Provider", "QB64PE");
const lintChannel: any = vscode.window.createOutputChannel("QB64PE: Lint", "QB64PE");
const referenceProviderChannel: any = vscode.window.createOutputChannel("QB64PE: Reference Provider", "QB64PE");
const openIncludeFileChannel: any = vscode.window.createOutputChannel("QB64PE: Open Include File", "QB64PE");;
const openInQB64Channel: any = vscode.window.createOutputChannel("QB64PE: Open In QB64PE", "QB64PE");
const scriptChannel: any = vscode.window.createOutputChannel("QB64PE: Script", "QB64PE");

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