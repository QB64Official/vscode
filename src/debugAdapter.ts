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
import { getPort } from "./extension";

/*
	This to look at
	-- Style Guide
	https://ts.dev/style/#syntax

	-- Debuger Setup
	https://www.codemag.com/Article/1809051/Writing-Your-Own-Debugger-and-Language-Extensions-with-Visual-Studio-Code
*/

enum DebugCommands {
	Continue = "run",
	Pause = "break",
	StepInto = "step",
	StepOut = "step out",
	StepOver = "step over",
	SetBreakPoint = "set breakpoint:",
	ClearBreakPoint = "clear breakpoint:",
	ClearAllBreakPoints = "clear all breakpoints",
	GetCallStack = "call stack",
	RunToLine = "run to line:",
	SetNextLine = "set next line:",
	SetGlobalAddress = "set global address:",
	SetLocalAddress = "set local address:"
}

//let debug = require('vscode-debugadapter');
//let DebugSession = debug.DebugSession;
export function createDebuggerInterface(vsCodePort: number) {
	// Create a server that VS Code can connect to
	let server = net.createServer(async function (socket: net.Socket) {
		// 'connection' listener
		console.log('createDebuggerInterface createServer\n');

		socket.on('end', function () {
			let outputChannnel: any = logFunctions.getChannel(logFunctions.channelType.debugger);
			logFunctions.writeLine(outputChannnel, `[${commonFunctions.getCurrentDateTime()}]DebugAdapter Disconnected`);
		});

		// When data is received from VS Code, handle it with the debug adapter
		socket.on('data', function (data) {
			debugerSession.handleDataFromApp(data);
		});

		let debugerSession = new DebugAdapter(socket);
		await debugerSession.startTargetConnection()
		debugerSession.start(socket, socket);

	});

	server.listen(vsCodePort, function () {
		let outputChannnel: any = logFunctions.getChannel(logFunctions.channelType.debugger);
		logFunctions.writeLine(outputChannnel, 'server listening on port ' + server.address());
	});

	return server;
}

/**
 * Handles the communction between the QB64 app and VS Code's debugger.
 */
class DebugAdapter extends debug.DebugSession {
	public vscode: net.Socket;
	private targetApp: net.Socket;
	private isDebuggerRunning: boolean = false;

	constructor(socket: net.Socket) {
		super();
		this.vscode = socket;
		this.setDebuggerLinesStartAt1(true);
		this.setDebuggerColumnsStartAt1(true);
	}

	async startTargetConnection() {
		let port: number = await getPort();
		this.targetApp = net.createConnection({ port: port, host: "127.0.0.1" }, () => {
			console.log('connected to target');
		});

		this.targetApp.on('data', (data) => {
			this.writeToDebugConsole(data.toString());
		});

		this.targetApp.on('end', () => {
			this.stopDebugger();
			console.log('disconnected from target app');
		});
	}

	private writeToTargetApp(command: string) {
		this.writeToDebugConsole(`writeToTargetApp: ${command}`)
		if (this.targetApp) {
			this.writeToDebugConsole(`writeToTargetApp command sent: ${command}`)
			this.targetApp.write(command);
		}
		// TODO: Update call stack if visable.
	}

	/**
	 * category Options
		'console': This is the default category and typically represents generic output from the debugged program.
		'stdout': This represents the output that the debugged program writes to stdout.
		'stderr': This represents the output that the debugged program writes to stderr.
		'telemetry': This represents telemetry data that is sent to Visual Studio Code, which then sends it to telemetry backends.
	 */
	writeToDebugConsole(message: string, category: string = "console") {
		console.log(message);
		this.sendEvent(new debug.OutputEvent(message, category));
	}

	protected initializeRequest(response: DebugProtocol.InitializeResponse, args: DebugProtocol.InitializeRequestArguments): void {
		// Build and return the capabilities of your debug adapter
		response.body = response.body || {};

		// Enables or disables all breakpoints for this session.
		response.body.supportsBreakpointLocationsRequest = true;

		// The debug adapter supports setting value from the watch window.
		response.body.supportsSetVariable = false;

		// Other capabilities like configuration done request
		response.body.supportsConfigurationDoneRequest = true;

		// Additional capabilities for Continue, Step Out, Step Over, Step Into, Run to Line, and Set Next Line

		//response.body.supportsContinueRequest = true;
		response.body.supportsStepBack = true;
		response.body.supportsStepInTargetsRequest = true;
		response.body.supportsGotoTargetsRequest = true;
		//response.body.supportsStepOut = true;
		//response.body.supportsNextRequest = true;

		this.sendResponse(response);
	}

	protected setBreakPointsRequest(response: DebugProtocol.SetBreakpointsResponse, args: DebugProtocol.SetBreakpointsArguments, request?: DebugProtocol.Request): void {
		try {

			if (!args.breakpoints) {
				return;
			}

			// Clear all the break points and reload them
			//if (args.breakpoints.length < 1) {
			this.writeToTargetApp(DebugCommands.ClearAllBreakPoints);
			//}

			// Iterate over the breakpoints and send each one to your target application
			for (const bp of args.breakpoints || []) {
				this.writeToTargetApp(`${DebugCommands.SetBreakPoint}${bp.line}`);
			}
		} catch (err) {
			this.writeToDebugConsole(err, "stderr");
			vscode.window.showErrorMessage(err);
		} finally {
			this.sendResponse(response);
		}
	}

	protected stepOutArguments(response: DebugProtocol.Response, args: any): void {
		try {
			this.writeToTargetApp(DebugCommands.StepOut); // Send command to app being debugged
		} catch (err) {
			vscode.window.showErrorMessage(err);
		} finally {
			this.sendResponse(response);
		}
	}

	protected stepInRequest(response: DebugProtocol.Response, args: any): void {
		try {
			this.writeToTargetApp(DebugCommands.StepInto); // Send command to app being debugged
		} catch (err) {
			vscode.window.showErrorMessage(err);
		} finally {
			this.sendResponse(response);
		}
	}

	protected nextRequest(response: DebugProtocol.NextResponse, args: DebugProtocol.NextArguments): void {
		try {
			this.writeToTargetApp(DebugCommands.StepOver);
		} catch (err) {
			vscode.window.showErrorMessage(err);
		} finally {
			this.sendResponse(response);
		}
	}

	launchRequest(response: any, args: any) {
		this.isDebuggerRunning = true;
		vscode.commands.executeCommand('workbench.panel.repl.view.focus');
		this.writeToDebugConsole('launchRequest started');
		fs.readFile(args.program, 'utf8', (err: any, data: string) => {

			if (err) {
				vscode.window.showErrorMessage(`error reading source: "${err}"`);
				this.stopDebugger();
				return;
			}

			this.writeToDebugConsole('source has been read');
			const config: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration("qb64")
			const compilerPath: string = config.get("compilerPath");

			if (!compilerPath || compilerPath.length < 1) {
				this.writeToDebugConsole('The compilerPath setting must be set', 'stderr');
				this.stopDebugger();
				return;
			}

			if (!fs.existsSync(compilerPath)) {
				this.writeToDebugConsole(`Could not find compiler: "${compilerPath}`, 'stderr');
				this.stopDebugger();
				return;
			}

			this.writeToDebugConsole(`compiler ${compilerPath} found.`);

			// TODO: Loop  through the code looking to see if the first non-comment line is $debug.
			const attach = data.split('\n')[0].trim().toLocaleLowerCase() === "$debug";
			this.writeToDebugConsole('starting compiler');

			let env: any = { ...process.env }; // Make a copy of the current environment variables
			env.QB64DEBUGPORT = `${this.vscode.localPort}`; // Set the QB64 debugging port


			let appToDebugPath: string = os.platform() === 'win32' ? args.program.replace(/\.bas$/i, '.exe') : args.program.replace(/\.bas$/i, '');
			let compilerArgs: string[] = [];

			if (attach) {
				compilerArgs = ["-c", args.program, '-o', appToDebugPath];
			} else {
				compilerArgs = ["-x", args.program, '-o', appToDebugPath];
			}

			const compiler = spawn(compilerPath, compilerArgs,
				{
					cwd: path.dirname(args.program),
					env: env
				});

			this.writeToDebugConsole(`Compile Command: ${compilerPath} ${compilerArgs.join(' ')}`);

			compiler.stdout.on('data', (data) => {
				this.writeToDebugConsole(data.toString());
			});

			compiler.stderr.on('data', (data) => {
				this.sendEvent(new debug.OutputEvent(data.toString()));
			});

			compiler.on('close', (code: number) => {
				/*
				if (code !== 0) {
					this.writeToDebugConsole(`QB64 compiler exited with code ${code}\n`, 'stderr');
					this.stopDebugger();
					return;
				}
				*/

				this.writeToDebugConsole(`starting app: ${appToDebugPath}`)


				if (!fs.existsSync(appToDebugPath)) {
					this.writeToDebugConsole(`File ${appToDebugPath} Not Found.`, 'stderr');
					this.stopDebugger();
					return;
				}

				let appToDebug = spawn(appToDebugPath, [],
					{
						cwd: path.dirname(appToDebugPath),
						env: env
					});

				appToDebug.on('close', () => { this.stopDebugger(); });

				appToDebug.on('error', (error) => {
					this.writeToDebugConsole(`Error in the app to debug: ${error}`, 'stderr');
					this.stopDebugger();
					return;
				});

				if (!attach) {
					this.stopDebugger();
				}

				this.sendResponse(response);
			});
		});
	}

	public handleDataFromApp(data: Buffer) {
		// This method will handle data received from the app.
		// You could parse the data as a string and then handle it based on its contents.
		const message: string = data.toString();
		if (message.indexOf("{\"command\":\"disconnect\"") > -1) {
			this.stopDebugger();
		}
		// Then you can do something with the message, like sending it to VS Code:
		this.sendEvent(new debug.OutputEvent("handleDataFromApp: " + message));
	}

	private stopDebugger(): void {
		if (this.isDebuggerRunning) {
			this.sendEvent(new debug.TerminatedEvent());
			vscode.commands.executeCommand('workbench.view.explorer'); // Open the explorer
			vscode.commands.executeCommand('workbench.action.focusActiveEditorGroup'); // set focus back to the code window
			this.isDebuggerRunning = false;
		}
	}

}