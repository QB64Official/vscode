"use strict";
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
import { ChildProcessWithoutNullStreams } from "child_process";
import { lintCompilerOutput } from "./lintFunctions"

/*
	target = app to be debugged.
	
	This to look at
	-- Style Guide
	https://ts.dev/style/#syntax

	-- Debuger Setup
	https://www.codemag.com/Article/1809051/Writing-Your-Own-Debugger-and-Language-Extensions-with-Visual-Studio-Code
*/

enum DebugCommands {
	BreakpointCount = "breakpoint count:",
	BreakpointList = "breakpoint list:",
	ClearAllBreakPoints = "clear all breakpoints",
	ClearBreakPoint = "clear breakpoint:",
	ClearSkipLine = "clear skip line:",
	GetCallStack = "call stack",
	Hwnd = "hwnd:",
	LineCount = "line count:",
	Pause = "break",
	Quit = "quit:",
	Run = "run",
	RunToLine = "run to line:",
	SetBreakPoint = "set breakpoint:",
	SetGlobalAddress = "set global address:",
	SetLocalAddress = "set local address:",
	SetNextLine = "set next line:",
	SetSkipLine = "set skip line:",
	SkipCount = "skip count:",
	SkipList = "skip list:",
	StepInto = "step",
	StepOut = "step out",
	StepOver = "step over",
	VWatch = "vwatch:ok",
}

enum DebugCategories {
	/**
	 *  This is the default category and typically represents generic output from the debugged program.
	 */
	Console = 'console',
	/**
	 * This represents the output that the debugged program writes to stdout.
	 */
	StdOut = 'stdout',
	/**
	 * This represents the output that the debugged program writes to stderr.
	 */
	StdErr = 'stderr',
	/**
	 * This represents telemetry data that is sent to Visual Studio Code, which then sends it to telemetry backends.
	 */
	Telemetry = 'telemetry'
}

//let debug = require('vscode-debugadapter');
//let DebugSession = debug.DebugSession;
export function createDebuggerInterface(vsCodePort: number) {
	// Create a server that VS Code can connect to
	let server = net.createServer(async function (socket: net.Socket) {
		// 'connection' listener
		socket.on('end', function () {
			let outputChannnel: any = logFunctions.getChannel(logFunctions.channelType.debugger);
			logFunctions.writeLine(outputChannnel, `[${commonFunctions.getCurrentDateTime()}]DebugAdapter Disconnected`);
		});

		// When data is received from VS Code, handle it with the debug adapter
		socket.on('data', function (data) {
			debugerSession.handleDataFromVsCode(data);
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
	private targetServer: net.Server;
	private targetPort: number;
	private targetSocket: net.Socket;
	private targetSpawn: ChildProcessWithoutNullStreams = null;
	private targetAppPath: string = "";
	private isDebuggerRunning: boolean = false;
	private hwnd: bigint = undefined;
	private attached: boolean = false;

	constructor(socket: net.Socket) {
		super();
		this.vscode = socket;
		this.setDebuggerLinesStartAt1(true);
		this.setDebuggerColumnsStartAt1(true);
	}

	async startTargetConnection() {
		this.targetPort = await getPort();
		this.targetServer = net.createServer((socket) => {

			// This callback is executed whenever a client connects

			if (this.targetSocket) {
				this.writeLineToDebugConsole('New client attempted to connect, but a client is already connected. Connection denied.', DebugCategories.StdErr);
				socket.end(); // Close connection immediately
				return; // Exit the callback
			}

			this.targetSocket = socket;
			socket.on('data', (data) => {
				let message: string = data.toString().trim();
				if (message.startsWith("+") && message.includes("me:")) {
					let appName = message.split('me:')[1].trim();

					if (appName.toLowerCase() != this.targetAppPath.toLowerCase()) {
						this.writeLineToDebugConsole(`Failed to initiate debug session. Expected: ${this.targetAppPath} | Found: ${appName}`);
						this.stopDebugger();
						return;
					}
					this.writeLineToDebugConsole(`Debugging: ${appName}`);
					return;
				}

				if (message.includes(DebugCommands.Hwnd)) {
					let hwnd: string = message.split('hwnd:')[1];
					this.writeToTargetApp(DebugCommands.VWatch);
					this.hwnd = BigInt(this.cvl(hwnd));
					this.writeToTargetApp(`${DebugCommands.Hwnd}${this.mkl(this.hwnd)}`); // Echo hwnd back.					
					// this.writeToTargetApp(`${DebugCommands.Hwnd}${hwnd}`); // Echo hwnd back.					

					// Looks like the line count is always getting passed as 0 in the old code
					// But based on the name I'll send the actual line count if possible.
					if (vscode.window.activeTextEditor) {
						this.writeToTargetApp(`${DebugCommands.LineCount}${this.mkl(vscode.window.activeTextEditor.document.lineCount)}`);
					} else {
						this.writeToTargetApp(`${DebugCommands.LineCount}${this.mkl(0)}`);
					}
					//this.writeToTargetApp(DebugCommands.ClearAllBreakPoints);
					this.writeLineToDebugConsole(DebugCommands.BreakpointList);
					this.writeLineToDebugConsole(DebugCommands.SkipList);

					// TODO: Check for breakpoint on the first line
					this.writeLineToDebugConsole(DebugCommands.Run);
					return;
				}

				if (message.includes(DebugCommands.Quit)) {
					const quitMessage: string = message.split(DebugCommands.Quit)[1];
					if (quitMessage.toLowerCase().includes("error")) {
						this.writeLineToDebugConsole(quitMessage, DebugCategories.StdErr);
					} else {
						this.writeLineToDebugConsole(quitMessage, DebugCategories.Console);
					}
					this.stopDebugger();
					return;
				}

				if (message.includes(DebugCommands.BreakpointCount)) {
					this.writeLineToDebugConsole(`BreakpointCount: ${message}`);
					return;
				}

				if (message.includes(DebugCommands.BreakpointList)) {
					this.writeLineToDebugConsole(`BreakpointList: ${message}`);
					return;
				}

				this.writeLineToDebugConsole(`Unknown debug command: ${message}`);
			});

			socket.on('error', (err) => {
				this.writeLineToDebugConsole("Error occurred with the target", DebugCategories.StdErr);
			});

			socket.on('close', () => {
				this.stopDebugger();
			});

			socket.on('end', () => {
				this.stopDebugger();
			});

		});

		// Start listening for connections
		this.targetServer.listen(this.targetPort, '127.0.0.1', () => { console.log(`Server listening on port ${this.targetPort}`); });
	}

	/**
	* The CVL function decodes a 4-byte ASCII STRING value into a LONG numerical value.
	* @param mklString
	* @returns A decoded LONG numerical value.
	*/
	private cvl(mklString: string): number {
		let buffer: ArrayBuffer = new ArrayBuffer(4);
		let view: DataView = new DataView(buffer);
		let uint8array: Uint8Array = new Uint8Array(buffer);

		// Populate the buffer with the input string's char codes
		for (let i = 0; i < 4; i++) {
			uint8array[i] = mklString.charCodeAt(i);
		}

		return view.getInt32(0, true); // true for little endian
	}

	/**
	 * The MKL function encodes a LONG numerical value into an 8-byte ASCII STRING value.
	 * @param longValue 
	 * @returns An encoded a LONG numerical value into an 8-byte ASCII STRING value.
	 */
	private mkl(longValue: number): string;
	private mkl(longValue: bigint): string;
	private mkl(longValue: number | bigint): string {
		let bigLongValue: bigint;
		if (typeof longValue === 'number') {
			bigLongValue = BigInt(longValue);
		} else {
			bigLongValue = longValue;
		}

		let buffer: ArrayBuffer = new ArrayBuffer(8);
		let view: DataView = new DataView(buffer);
		view.setBigInt64(0, bigLongValue, true); // true for little endian
		let uint8array: Uint8Array = new Uint8Array(buffer);
		return Array.from(uint8array, byte => String.fromCharCode(byte)).join('');
	}
	/**
	 * Sends a command via a socket to the taget
	 * @param command The command to send to the target
	 */
	private writeToTargetApp(command: string) {
		if (!command || command.length < 1) {
			this.writeLineToDebugConsole('writeToTargetApp: the command is empty', DebugCategories.StdErr);
			return;
		}

		if (this.targetSocket && !this.targetSocket.destroyed) {
			command = `${this.mkl(command.length)}${command}`
			this.writeLineToDebugConsole(`writeToTargetApp command sent: "${command}"`)
			this.targetSocket.write(command);
		}
	}


	/**
	 * Writes a message to the debug console
	 * @param message Message to write
	 * @param category Type of message to write
	 */
	writeToDebugConsole(message: string, category: DebugCategories = DebugCategories.Console) {
		this.sendEvent(new debug.OutputEvent(message, category));
	}

	/**
	 * Writes a message to the debug console with a \n append to the end.
	 * @param message Message to write
	 * @param category Type of message to write
	 */
	writeLineToDebugConsole(message: string, category: DebugCategories = DebugCategories.Console) {
		this.writeToDebugConsole(`${message}\n`, category);
	}

	protected stackTraceRequest(response: DebugProtocol.StackTraceResponse, args: DebugProtocol.StackTraceArguments) {
		// Here, you'd communicate with your debugging engine to get the actual call stack.
		// The specific implementation would depend on how your debugging engine works.

		/*
		const frames = this.debuggingEngine.getCallStack()
			 .map((frame, index) => new StackFrame(index, frame.functionName, new Source(frame.fileName), frame.line));
  
		response.body = {
			 stackFrames: frames,
			 totalFrames: frames.length
		};
  
		this.sendResponse(response);
		*/
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
			this.writeToTargetApp(DebugCommands.ClearAllBreakPoints);

			// Iterate over the breakpoints and send each one to your target application
			for (const bp of args.breakpoints || []) {
				this.writeToTargetApp(`${DebugCommands.SetBreakPoint}${bp.line}`);
			}
		} catch (err) {
			this.writeLineToDebugConsole(err, DebugCategories.StdErr);
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

		fs.readFile(args.program, 'utf8', (err: any, data: string) => {
			if (err) {
				vscode.window.showErrorMessage(`error reading source: "${err}"`);
				this.stopDebugger();
				return;
			}

			const config: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration("qb64")
			const compilerPath: string = config.get("compilerPath");

			if (!compilerPath || compilerPath.length < 1) {
				this.writeLineToDebugConsole('The compilerPath setting must be set', DebugCategories.StdErr);
				this.stopDebugger();
				return;
			}

			if (!fs.existsSync(compilerPath)) {
				this.writeLineToDebugConsole(`Could not find compiler: "${compilerPath}`, DebugCategories.StdErr);
				this.stopDebugger();
				return;
			}

			// TODO: Loop  through the code looking to see if the first non-comment line is $debug.
			this.attached = data.split('\n')[0].trim().toLocaleLowerCase() === "$debug";

			this.targetAppPath = os.platform() === 'win32' ? args.program.replace(/\.bas$/i, '.exe') : args.program.replace(/\.bas$/i, '');
			const compilerArgs: string[] = ["-w", "-x", args.program, '-o', this.targetAppPath];

			/*
			if (attach) {
				compilerArgs = ["-x", args.program, '-o', this.targetAppPath];
			} else {
				compilerArgs = ["-x", args.program, '-o', this.targetAppPath];
			}
			*/

			const compiler = spawn(compilerPath, compilerArgs, { cwd: path.dirname(args.program) });
			let compilerOutput: string = ""
			this.writeLineToDebugConsole(`Compiler Command: ${compilerPath} ${compilerArgs.join(' ')}`);

			compiler.stdout.on('data', (data) => {
				this.writeLineToDebugConsole(data.toString().replaceAll("]", "]\n"));
				compilerOutput = compilerOutput += data;
			});

			compiler.stderr.on('data', (data) => {
				this.writeLineToDebugConsole(data.toString(), DebugCategories.StdErr);
				this.stopDebugger();
			});

			compiler.on('error', (error) => {
				this.writeLineToDebugConsole(`Compiler Errored ${error}`, DebugCategories.StdErr);
				this.stopDebugger();
			});

			// Fires before close -- then the app has quit.
			compiler.on('exit', (code, signal) => {
				if (code !== 0) {
					//this.writeLineToDebugConsole(`The app to debug exited with code ${code} and signal ${signal}`, DebugCategories.StdErr);
					this.stopDebugger();
				}
			});

			// Fires after exit -- Then the output stream stops
			compiler.on('close', (code: number) => {

				if (compilerOutput.length > 0) {
					lintCompilerOutput(compilerOutput, true)
				}

				if (code !== 0) {
					this.stopDebugger();
					this.writeLineToDebugConsole(`Compiler exited with code ${code}`, DebugCategories.StdErr);
					vscode.commands.executeCommand('workbench.actions.view.problems');
				}

				if (!fs.existsSync(this.targetAppPath)) {
					this.writeLineToDebugConsole(`File ${this.targetAppPath} Not Found.`, DebugCategories.StdErr);
					this.stopDebugger();
				}

				if (!this.isDebuggerRunning) {
					return
				}

				let env: any = { ...process.env }; // Make a copy of the current environment variables
				env.QB64DEBUGPORT = `${this.targetPort}`; // Set the QB64 debugging port
				this.targetSpawn = spawn(this.targetAppPath, [],
					{
						cwd: path.dirname(this.targetAppPath),
						env: env
					});

				this.targetSpawn.on('close', () => { this.stopDebugger(); });

				this.targetSpawn.on('error', (error) => {
					if (error.message.indexOf("Error: An extension called process.exit() and this was prevented.") < 0) {
						this.writeLineToDebugConsole(`Error in the app to debug: ${error}`, DebugCategories.StdErr);
					}
					this.stopDebugger();
				});

				if (!this.attached) {
					this.stopDebugger();
				}

				this.sendResponse(response);
			});
		});
	}

	public handleDataFromVsCode(data: Buffer) {
		// This method will handle data received from the app.
		// You could parse the data as a string and then handle it based on its contents.
		const message: string = data.toString();
		if (message.indexOf("{\"command\":\"disconnect\"") > -1) {
			this.writeLineToDebugConsole("VSCode stopped the debugger.");
			this.stopDebugger();
		}
		// Then you can do something with the message, like sending it to VS Code:
		if (
			!message.includes('"command":"initialize"')
			&& !message.includes('"command":"launch"')
			&& !message.includes('command":"disconnect')) {
			this.writeLineToDebugConsole(`unhandleDataFromApp: ${message}`, DebugCategories.StdErr);
		}
	}

	private stopDebugger(): void {
		if (this.isDebuggerRunning) {
			if (this.targetSpawn && this.attached) {
				this.targetSpawn.kill();
				this.targetSpawn = null;
			}
			this.sendEvent(new debug.TerminatedEvent());
			vscode.commands.executeCommand('workbench.view.explorer'); // Open the explorer
			vscode.commands.executeCommand('workbench.action.focusActiveEditorGroup'); // set focus back to the code window
			this.isDebuggerRunning = false;
		}
	}

}