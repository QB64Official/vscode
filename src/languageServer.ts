import * as path from 'path';
//import * as net from 'net';
import * as vscode from "vscode";
//import * as logFunctions from "./logFunctions";
import * as fs from "fs";
//import * as cp from 'child_process';
import * as lc from 'vscode-languageclient/node';
//import * as commonFunctions from "./commonFunctions";
import { Duplex } from 'stream';
import { openStdin } from 'process';

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

		// const serverModule = context.asAbsolutePath(path.join('server', 'qb64ls.exe')).trim();
		// if (!fs.existsSync(serverModule)) {
		// 	throw Error(`File ${serverModule} Not Found`);
		// }

		/*
		let socket: net.Socket = new net.Socket;
		const serverOptions: lc.ServerOptions = () => createServerWithSocket(serverModule, socket).then<lc.StreamInfo>(() => ({ reader: socket, writer: socket }))

		/*
		const os = require('node:os');
		const startOptions: { execArgv: string[] } = { execArgv: ["/v=true", "/it=socket", "/lr=true", '/wf="' + os.tmpdir() + '"', "/port="] };
		const serverOptions: lc.ServerOptions = {
			run: { module: serverModule, transport: lc.TransportKind.socket, options: startOptions },
			debug: { module: serverModule, transport: lc.TransportKind.socket },
		};
		*/

		// let clientOptions: lc.LanguageClientOptions = {
		// 	documentSelector: [{ scheme: "file", language: "qb64" }],
		// 	synchronize: {
		// 		fileEvents: vscode.workspace.createFileSystemWatcher('**/.bas,**/.bm,**/.bi')
		// 	},
		// 	revealOutputChannelOn: lc.RevealOutputChannelOn.Info,
		// };

		//client = new lc.LanguageClient('qb64', 'QB64: Language Server', serverOptions, clientOptions);
		let port: number = getPort();
		await startLanguageServer(context, port);
		//let client: lc.LanguageClient = connectionToLanguageServer(6447);
		let client: lc.LanguageClient = connectionToLanguageServer(port);
		let disposable = client.start();
		client.outputChannel.appendLine("Client has been started")

		// client.outputChannel.appendLine(client.initializeResult.capabilities.colorProvider.valueOf.toString());
		// client.outputChannel.appendLine(`Name: ${client.initializeResult.serverInfo.name}`,;
		// client.outputChannel.appendLine(`version: ${client.initializeResult.serverInfo.version}`);

		client.onReady().then(() => {
			client.outputChannel.appendLine("In OnReady");
			// let resolve: languageClient.GenericNotificationHandler;
			// client.onNotification('didStop', () => resolve());
			client.onNotification('Test', (result: NotificationResult) => {
				client.outputChannel.appendLine(`onNotification: type: ${result.type} | messaage: ${result.message}`);
			});
		});
		// registerHoverProvider(client, outputChannnel)


		context.subscriptions.push(disposable);
		client.outputChannel.appendLine("activateLanguageServer - End");
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
 * Get a new language server client
 * @returns A LanguageClient connected to the QB64 language server
 */
function connectionToLanguageServer(port: number): lc.LanguageClient {
	const connection = connectToServer("127.0.0.1:" + port.toString());
	const client = new lc.LanguageClient(
		"qb64",
		"QB64 Language Server",
		() => Promise.resolve<lc.StreamInfo>({
			reader: connection,
			writer: connection,
		}),
		{});
	return client;
}

function connectToServer(hostname: string): Duplex {
	const WebSocket = require('ws');
	const ws = new WebSocket(`ws://${hostname}`);
	return WebSocket.createWebSocketStream(ws);
}

/**
* Genrate random port number (int)
* @returns random int - 1024 & 65535 inclusive
*/
function getPort() {
	// TODO: Add check if port is alrady in use and get a different one	
	return Math.floor(Math.random() * (65535 - 1024 + 1)) + 1024;
}


/*
function createServerWithSocket(serverModule: string, socket: net.Socket) {
	const os = require('node:os');
	let qb64Server: cp.ChildProcess;
	return new Promise<cp.ChildProcess>(resolve => {
		let server = net.createServer(s => {
			socket = s;
			socket.setNoDelay(true);
			server.close();
			resolve(qb64Server);
		});

		server.listen(0, '127.0.0.1', () => {
			qb64Server = cp.spawn(serverModule,
				[
					"/v=true",
					"/it=socket",
					"/lr=true",
					'/wf="' + os.tmpdir() + '"',
					"/port=" + (<net.AddressInfo>server.address()).port,
				]);
		});
	});
}
*/


// function registerHoverProvider(client: lc.LanguageClient, outputChannnel: any) {
// 	const provider: vscode.HoverProvider = {
// 		provideHover: (document, position, token) => {
// 			const provideHover: lc.ProvideHoverSignature = (document, position, token) => {
// 				logFunctions.writeLine("HoverProvider", outputChannnel);
// 				return null;
// 				/*
// 				return client.sendRequest(lc.HoverRequest.type, client.code2ProtocolConverter.asTextDocumentPositionParams(document, position), token).then((result: any) => {
// 					if (token.isCancellationRequested) {
// 						return null;
// 					}
// 					logFunctions.writeLine("HoverProvider", outputChannnel);
// 					// return client.protocol2CodeConverter.asHover(result);
// 					return null;
// 				}, (error: any) => {
// 					return client.handleFailedRequest(lc.HoverRequest.type, token, error);
// 				});
// 				*/
// 			};
// 			return provideHover(document, position, token);
// 			/*
// 			const middleware = client.middleware;
// 			return middleware.provideHover
// 				? middleware.provideHover(document, position, token, provideHover)
// 				: provideHover(document, position, token);
// 			*/
// 		}
// 	};
// 	vscode.languages.registerHoverProvider(commonFunctions.getDocumentSelector(), provider);
// }
