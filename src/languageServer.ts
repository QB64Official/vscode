import * as path from 'path';
import * as net from 'net';
import * as vscode from "vscode";
import * as logFunctions from "./logFunctions";
import * as fs from "fs";
import * as cp from 'child_process';
import * as languageClient from 'vscode-languageclient/node';
import { TransportKind } from 'vscode-languageclient/node';

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

		const serverOptions: languageClient.ServerOptions = () => createServerWithSocket(serverModule, socket).then<languageClient.StreamInfo>(() => ({ reader: socket, writer: socket }))

		logFunctions.writeLine(`serverModule: ${serverModule}`, languageServerChannel);

		// const serverRunOptions = { execArgv: ["--cf=D:\\projects\\qb64-language-server\\.vscode\\qb64-debug.ini"] };
		// const serverDebugOptions = { execArgv: ["--cf=D:\\projects\\qb64-language-server\\.vscode\\qb64-debug.ini"] };

		let clientOptions: languageClient.LanguageClientOptions = {
			documentSelector: [{ scheme: "file", language: "qb64" }],
			synchronize: {
				fileEvents: vscode.workspace.createFileSystemWatcher('**/.bas,**/.bm,**/.bi')
			},
			revealOutputChannelOn: languageClient.RevealOutputChannelOn.Info
		};

		logFunctions.writeLine("Create LanguageClient", languageServerChannel)
		client = new languageClient.LanguageClient('qb64LanguageServer', 'QB64 Language Server', serverOptions, clientOptions, false);

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
					"--it=socket",
					"--socket=" + (<net.AddressInfo>server.address()).port,
					"--cf=D:\\projects\\qb64-language-server\\.vscode\\qb64-debug.ini"
				]);
		});
	});
}

/*
function createServerWithStdio(dlsPath: string) {
	return Promise.resolve(cp.spawn(dlsPath.trim(),
		[
			'--stdio',
			"-cf:D:\\projects\\qb64-language-server\\.vscode\\qb64-debug.ini"
		]));
}
*/