import * as path from 'path';
//import * as net from 'net';
import * as vscode from "vscode";
import * as logFunctions from "./logFunctions";
import * as fs from "fs";
//import * as cp from 'child_process';
import * as lc from 'vscode-languageclient/node';
import * as commonFunctions from "./commonFunctions";
// import { Duplex } from 'stream';
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
export async function activateLanguageServer(context: vscode.ExtensionContext, client: lc.LanguageClient) {

	try {

		let port: number = getPort();
		await startLanguageServer(context, port);
		let client: QB64LanguageClient = new QB64LanguageClient(port)
		let disposable = client.start();

		client.outputChannel.appendLine("Client has been started")

		client.onReady().then(() => {
			client.outputChannel.appendLine("In OnReady");
			// client.outputChannel.appendLine(client.initializeResult.capabilities.colorProvider.valueOf.toString());
			// client.outputChannel.appendLine(`Name: ${client.initializeResult.serverInfo.name}`,;
			// client.outputChannel.appendLine(`version: ${client.initializeResult.serverInfo.version}`)
			client.onNotification('Test', (result: NotificationResult) => {
				client.outputChannel.appendLine(`onNotification: type: ${result.type} | messaage: ${result.message}`);
			});
		});

		//registerHoverProvider(client)


		context.subscriptions.push(disposable);
		client.outputChannel.appendLine("activateLanguageServer - end");
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
	args.push("/v=" + (config.get("lsIsVisable") ? "true" : "false"));
	args.push("/lr=" + (config.get("lsIsRequestLoggingEnabled") ? "true" : "false"));
	args.push("/port=" + port.toString());
	args.push("/wf=" + workingFolder);
	require('child_process').spawn(serverModule, args, { detached: true });
	await new Promise(r => setTimeout(r, 1500)); // Wait for the server to start
}

/**
* Genrate random port number (int)
* @returns random int - 1024 & 65535 inclusive
*/
function getPort() {
	// TODO: Add check if port is alrady in use and get a different one & move to QB64LanguageClient
	return Math.floor(Math.random() * (65535 - 1024 + 1)) + 1024;
}

function registerHoverProvider(client: lc.LanguageClient) {
	const provider: vscode.HoverProvider = {
		provideHover: (document, position, token) => {
			const provideHover: lc.ProvideHoverSignature = (document, position, token) => {

				logFunctions.writeLine("HoverProvider lS", client.outputChannel);
				//return null;

				return client.sendRequest(lc.HoverRequest.type, client.code2ProtocolConverter.asTextDocumentPositionParams(document, position), token).then((result: any) => {
					if (token.isCancellationRequested) {
						return null;
					}
					logFunctions.writeLine("HoverProvider: Send Request", client.outputChannel);
					// return client.protocol2CodeConverter.asHover(result);
					return null;
				}, (error: any) => {
					return client.handleFailedRequest(lc.HoverRequest.type, token, error);
				});
			};
			return provideHover(document, position, token);
			/*
			const middleware = client.middleware;
			return middleware.provideHover
				? middleware.provideHover(document, position, token, provideHover)
				: provideHover(document, position, token);
			*/
		}
	};
	vscode.languages.registerHoverProvider(commonFunctions.getDocumentSelector(), provider);
}