import * as path from 'path';
import * as vscode from "vscode";
import * as fs from "fs";
import QB64LanguageClient from './QB64LanguageClient';

// references
// https://github.com/d-language-server/vscode-dlang/blob/master/src/extension.ts#L94
// https://typescript.hotexamples.com/examples/vscode-languageclient/LanguageClient/-/typescript-languageclient-class-examples.html
// https://raw.githubusercontent.com/microsoft/vscode-languageserver-node/main/client/src/common/hover.ts
// https://stackoverflow.com/questions/40284523/connect-external-language-server-to-vscode-extension
// https://infinitbility.com/how-to-get-random-number-in-typescript
// https://nodejs.org/api/os.html#os_os_platform

/**
 * Activates the language server
 */
export async function activateLanguageServer(context: vscode.ExtensionContext, client: QB64LanguageClient) {

	try {

		//let port: number = getPort();
		await startLanguageServer(context, client.port);
		let disposable = client.start();

		client.onReady().then(() => {
			client.outputChannel.appendLine(`Name: ${client.initializeResult.serverInfo.name}`);
			client.outputChannel.appendLine(`version: ${client.initializeResult.serverInfo.version}`)
			client.onNotification('Test', (result: NotificationResult) => {
				client.outputChannel.appendLine(`onNotification: type: ${result.type} | messaage: ${result.message}`);
			});
		});

		context.subscriptions.push(disposable);
	}
	catch (error) {
		if (client.outputChannel) {
			client.outputChannel.appendLine("ERROR Starting LS: " + error)
		}
		else {
			console.log("ERROR Starting LS: " + error);
		}

	}
}

/**
 * The notification from the language server
 */
interface NotificationResult {
	type: string,
	message: string;
}

/**
 * Starts the Language Server 
 * @param context 
 */
async function startLanguageServer(context: vscode.ExtensionContext, port: number) {
	const os = require('node:os');
	// TODO: Move into QB64LanguageClient

	let serverModule: string = "";
	if (os.platform() == "win32") {
		serverModule = context.asAbsolutePath(path.join('server', 'qb64ls.exe')).trim();
	} else {
		serverModule = context.asAbsolutePath(path.join('server', 'qb64ls')).trim();
	}

	if (!fs.existsSync(serverModule)) {
		throw Error(`File ${serverModule} Not Found`);
	}

	const config = vscode.workspace.getConfiguration("qb64")
	let workingFolder: string = config.get("lsWorkingFolder");
	if (!workingFolder || workingFolder.length < 1) {
		workingFolder = os.tmpdir()
	}



	let args: string[] = [];
	args.push("/it=socket");
	args.push("/trace=" + config.get("lsIsTraceStatus"));
	args.push("/port=" + port.toString());
	args.push("/wf=" + workingFolder);
	require('child_process').spawn(serverModule, args, { detached: true });
	await new Promise(r => setTimeout(r, 1500)); // Wait for the server to start
}