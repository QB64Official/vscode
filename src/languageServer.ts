import * as path from 'path';
import * as net from 'net';
import * as vscode from "vscode";
import * as logFunctions from "./logFunctions";
import * as fs from "fs";
import * as cp from 'child_process';

/*
import {
	LanguageClient,
	LanguageClientOptions,
	RevealOutputChannelOn,
	ServerOptions,
	TransportKind,
	StreamInfo
} from 'vscode-languageclient/node';
*/

import * as languageClient from 'vscode-languageclient/node';
// import { networkInterfaces } from "os";

import { Socket } from 'dgram';

// A large part of this was pulled from 
// https://github.com/d-language-server/vscode-dlang/blob/master/src/extension.ts#L94


/**
 * Activates the language server
 */
export async function activateLanguageServer(context: vscode.ExtensionContext, client: languageClient.LanguageClient) {

	const languageServerChannel: any = logFunctions.getChannel(logFunctions.channelType.languageServer);
	try {

		const serverModule = context.asAbsolutePath(path.join('server', 'qb64ls.exe')).trim();
		if (!fs.existsSync(serverModule)) {
			throw Error(`File ${serverModule} Not Found`);
		}
		let socket: net.Socket = new net.Socket;
		/*
		const serverOptions: languageClient.ServerOptions = vscode.workspace.getConfiguration('qb64').get('connectionType') === 'socket'
			? () => createServerWithSocket(serverModule, socket).then<languageClient.StreamInfo>(() => ({ reader: socket, writer: socket }))
			: () => createServerWithStdio(serverModule);
		*/

		const serverOptions: languageClient.ServerOptions = () => createServerWithSocket(serverModule, socket).then<languageClient.StreamInfo>(() => ({ reader: socket, writer: socket }))

		logFunctions.writeLine(`serverModule: ${serverModule}`, languageServerChannel);

		const serverRunOptions = { execArgv: ["-cf:D:\\projects\\qb64-language-server\\.vscode\\qb64-debug.ini"] };
		const serverDebugOptions = { execArgv: ["-cf:D:\\projects\\qb64-language-server\\.vscode\\qb64-debug.ini"] };

		/*
		let serverOptions = () => {
			// Connect to language server via socket
			let socket = net.connect({ port: 5007 });
			let result: StreamInfo = {
				writer: socket,
				reader: socket
			};
			return Promise.resolve(result);
		};
		*/

		/*
		let serverOptions: ServerOptions = {
			run: {
				command: serverModule,
				module: serverModule,
				transport: TransportKind.socket,
				options: serverRunOptions
			},
			debug: {
				command: serverModule,
				module: serverModule,
				transport: TransportKind.socket,
				options: serverDebugOptions
			}
		};
		*/

		// let ds = []
		// ds.push(commonFunctions.getDocumentSelector());		
		// let clientOptions: LanguageClientOptions = {
		// 	documentSelector: ds,
		// 	synchronize: {
		// 		// Notify the server about file changes to qb64 files contained in the workspace
		// 		fileEvents: vscode.workspace.createFileSystemWatcher('**/.bas,**/.bm,**/.bi')
		// 	},
		// 	revealOutputChannelOn: RevealOutputChannelOn.Info
		// };

		let clientOptions: languageClient.LanguageClientOptions = {
			documentSelector: [{ scheme: "file", language: "qb64" }],
			synchronize: {
				fileEvents: vscode.workspace.createFileSystemWatcher('**/.bas,**/.bm,**/.bi')
			},
			revealOutputChannelOn: languageClient.RevealOutputChannelOn.Info
		};

		logFunctions.writeLine("Create LanguageClient", languageServerChannel)
		client = new languageClient.LanguageClient('qb64LanguageServer', 'QB64 Language Server', serverOptions, clientOptions, false);

		// client.onReady().then(() => {
		// 	logFunctions.writeLine("qb64ls is ready|starting", languageServerChannel)
		// 	let disposable = client.start();
		// 	context.subscriptions.push(disposable);
		// });

		logFunctions.writeLine("Before Starting Client ", languageServerChannel)
		let disposable = client.start();
		context.subscriptions.push(disposable);
		logFunctions.writeLine("After ready", languageServerChannel)

	}
	catch (error) {
		logFunctions.writeLine("ERROR Starting LS: " + error, languageServerChannel)
	}

}

function createServerWithSocket(serverModule: string, socket: net.Socket) {
	let dls: cp.ChildProcess;
	return new Promise<cp.ChildProcess>(resolve => {
		let server = net.createServer(s => {
			socket = s;
			socket.setNoDelay(true);
			server.close();
			resolve(dls);
		});

		server.listen(0, '127.0.0.1', () => {
			dls = cp.spawn(serverModule, ['--socket=' + (<net.AddressInfo>server.address()).port]);
		});
	});
}


function createServerWithStdio(dlsPath: string) {
	return Promise.resolve(cp.spawn(dlsPath.trim(), ['--stdio']));
}