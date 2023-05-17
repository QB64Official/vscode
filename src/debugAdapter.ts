import * as net from "net";
import * as vscode from "vscode";
import * as logFunctions from "./logFunctions";
import * as commonFunctions from "./commonFunctions";
import * as fs from "fs";
import { spawn } from 'node:child_process';
import * as debug from "@vscode/debugadapter";
import { DebugProtocol } from "@vscode/debugprotocol";
import * as path from 'path';
import * as os from 'os';

/*
	This to look at
	-- Style Guide
	https://ts.dev/style/#syntax

	-- Debuger Setup
	https://www.codemag.com/Article/1809051/Writing-Your-Own-Debugger-and-Language-Extensions-with-Visual-Studio-Code
*/


//let debug = require('vscode-debugadapter');
let DebugSession = debug.DebugSession;

export function createDebuggerInterface(port: number) {
	// Create a server that VS Code can connect to
	let server = net.createServer(function (socket: net.Socket) {
		// 'connection' listener
		console.log('client connected');

		let session = new DebugAdapter(socket);
		session.start(socket, socket);

		socket.on('end', function () {
			let outputChannnel: any = logFunctions.getChannel(logFunctions.channelType.debugger);
			logFunctions.writeLine(outputChannnel, `[${commonFunctions.getCurrentDateTime()}]DebugAdapter Disconnected`);
		});

		// When data is received from VS Code, handle it with the debug adapter
		socket.on('data', function (data) {
			session.handleDataFromApp(data);
		});
	});

	server.listen(port, function () {
		let outputChannnel: any = logFunctions.getChannel(logFunctions.channelType.debugger);
		logFunctions.writeLine(outputChannnel, 'server listening on port ' + server.address());
	});

	return server;
}

/**
 * Handles the communction between the QB64 app and VS Code's debugger.
 */
class DebugAdapter extends debug.DebugSession {
	public socket: net.Socket;

	constructor(socket: net.Socket) {
		super();
		this.socket = socket;
		// This will make sure to send the 'initialize' event back to VS Code
		this.setDebuggerLinesStartAt1(true);
		this.setDebuggerColumnsStartAt1(true);
	}

	protected initializeRequest(response: DebugProtocol.InitializeResponse, args: DebugProtocol.InitializeRequestArguments): void {
		// Here you can set some capabilities of your debug adapter
		response.body = response.body || {};
		response.body.supportsConfigurationDoneRequest = true;
		this.sendResponse(response);
	}

	stepInRequest(response: DebugProtocol.Response, args: any): void {
		try {
			// Handle the request to step into a function here
			this.socket.write("stepIn");
		} catch (err) {
			vscode.window.showErrorMessage(err);
		} finally {
			this.sendResponse(response);
		}
	}

	nextRequest(response: DebugProtocol.NextResponse, args: DebugProtocol.NextArguments): void {
		try {
			// Handle the request to step over a line of code here
			this.socket.write("stepIn");
		} catch (err) {
			vscode.window.showErrorMessage(err);
		} finally {
			this.sendResponse(response);
		}
	}

	launchRequest(response: any, args: any) {
		vscode.commands.executeCommand('workbench.panel.repl.view.focus');
		this.sendEvent(new debug.OutputEvent('launchRequest started\n'));
		fs.readFile(args.program, 'utf8', (err: any, data: string) => {

			if (err) {
				vscode.window.showErrorMessage(`error reading source: "${err}"`);
				this.sendEvent(new debug.TerminatedEvent(err));
				return;
			}

			this.sendEvent(new debug.OutputEvent('source has been read\n'));
			const config: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration("qb64")
			const compiler: string = config.get("compilerPath");

			if (!compiler || compiler.length < 1) {
				this.sendEvent(new debug.OutputEvent('The compilerPath setting must be set."\n', 'stderr'));
				this.sendEvent(new debug.TerminatedEvent());
				return;
			}

			if (!fs.existsSync(compiler)) {
				this.sendEvent(new debug.OutputEvent(`Could not find compiler: "${compiler}\n`, 'stderr'));
				this.sendEvent(new debug.TerminatedEvent());
				return;
			}

			this.sendEvent(new debug.OutputEvent(`compiler ${compiler} found.\n`));

			const attach = data.split('\n')[0].trim().toLocaleLowerCase() === "$debug";
			let commandLineArgs: string;
			if (attach) {
				commandLineArgs = `-p:${this.socket.localPort}`
			} else {
				commandLineArgs = "-x";
			}
			this.sendEvent(new debug.OutputEvent('starting compiler\n'));
			const qb64 = spawn(compiler, [commandLineArgs, args.program], { cwd: path.dirname(args.program) });

			qb64.stdout.on('data', (data) => {
				this.sendEvent(new debug.OutputEvent(data.toString()));
			});

			qb64.stderr.on('data', (data) => {
				this.sendEvent(new debug.OutputEvent(data.toString()));
			});

			qb64.on('close', (code: number) => {
				if (code !== 0) {
					this.sendEvent(new debug.OutputEvent(`QB64 compiler exited with code ${code}\n`, 'stderr'));
					this.sendEvent(new debug.TerminatedEvent());
					return;
				}

				this.sendEvent(new debug.OutputEvent('starting app\n'));
				let app: any;
				if (os.platform() === 'win32') {
					app = spawn(args.program.replace(/\.bas$/i, '.exe'), [], { cwd: path.dirname(args.program) });
				} else {
					app = spawn(args.program.replace(/\.bas$/i, ''), [], { cwd: path.dirname(args.program) });
				}

				if (!attach) {
					this.stopDebugger();
				}

				app.on('exit', () => {
					this.stopDebugger();
				});
				this.sendResponse(response);
			});
		});
	}

	public handleDataFromApp(data: Buffer) {
		// This method will handle data received from the app.
		// You could parse the data as a string and then handle it based on its contents.
		const message = data.toString();

		// Then you can do something with the message, like sending it to VS Code:
		this.sendEvent(new debug.OutputEvent(message));
	}


	private stopDebugger(): void {
		this.sendEvent(new debug.TerminatedEvent());
		vscode.commands.executeCommand('workbench.view.explorer'); // Open the explorer
		vscode.commands.executeCommand('workbench.action.focusActiveEditorGroup'); // set focus back to the code window
	}

}