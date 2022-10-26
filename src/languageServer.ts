import * as path from 'path';
import * as net from 'net';
import * as vscode from "vscode";
import * as logFunctions from "./logFunctions";
import * as fs from "fs";
import * as cp from 'child_process';
import * as languageClient from 'vscode-languageclient/node';

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
		let totalSize = 0;
		client.onReady().then(() => {
			logFunctions.writeLine("In Client onReady", languageServerChannel)
			let resolve: languageClient.GenericNotificationHandler;
			client.onNotification('didStop', () => resolve());
			client.onNotification('didChangeTotalSize', (params: UpgradeSizeParams) => totalSize = params.size);
		});

		context.subscriptions.push(disposable);
		logFunctions.writeLine("After ready", languageServerChannel)

	}
	catch (error) {
		logFunctions.writeLine("ERROR Starting LS: " + error, languageServerChannel)
	}

}

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

interface TranslationParams {
	tr: string;
}

interface UpgradeSizeParams extends TranslationParams {
	size: number;
}

/*
function createServerWithStdio(dlsPath: string) {
	const os = require('node:os');
	return Promise.resolve(cp.spawn(dlsPath.trim(),
		[
			"--v=true",
			"--it=socket",
			'--wf="' + os.tmpdir() + '"',			
		]));
}
*/