"use strict";
import * as net from "net";
import * as vscode from "vscode";
import * as commonFunctions from "./commonFunctions";
import * as fs from "fs";
import * as path from 'path';
import * as os from 'os';
import * as debug from "@vscode/debugadapter";
import { spawn } from 'node:child_process';
import { DebugProtocol } from "@vscode/debugprotocol";
import { consolePrefix, getPort } from "./extension";
import { ChildProcessWithoutNullStreams } from "child_process";
import { lintCompilerOutput } from "./lintFunctions"
import { Handles } from "@vscode/debugadapter"
import { skipLineRanges } from "./extension"
import { activeEditor } from "./extension"

export var constVariables: DebugProtocol.Variable[] = [];

export function clearConstVariables() {
	constVariables.length = 0;
}

export const decorationSkipLine: vscode.TextEditorDecorationType = vscode.window.createTextEditorDecorationType(
	{
		borderRadius: "2px",
		dark: { backgroundColor: 'rgba(175, 243, 28, 0.2)' },
		light: { backgroundColor: 'rgba(115, 115, 115, 0.2)' }
	}
);


/**
 * Property bag to hold the debuggee stuff.
 */
class Debuggee {
	private readonly valueSeparator: string = ":"
	public appPath: string = "";
	public server: net.Server = null;
	public paddingSize: number = 6;
	public port: number = -1;
	public socket: net.Socket = null;
	public attached: boolean = false;
	public spawn: ChildProcessWithoutNullStreams = null;
	public readonly endOfTransmission: string = String.fromCharCode(4);
	public readonly startOfTransmission: string = String.fromCharCode(2);
	public readonly unitSeparator: string = String.fromCharCode(31)
	public readonly waitTime: number = 20; //This should be a setting

	constructor() {
		const config: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration("qb64")
		const waitTime: number = config.get("debuggeeWaitTime")
		if (waitTime) {
			this.waitTime = waitTime;
		}
	}

	/**
	 * Pads the a number to the paddingSize digits with leading zeros.
	 * This is for QB64's VWatch module.
	 * @param value A number
	 * @returns A padded string
	 */
	public padForVWatch(value: number): string {
		return value.toString().padStart(this.paddingSize, "0");
	}

	/**
	 * Splits the debuggee on the unit separator
	 * @param message The message from the debuggee
	 * @returns A string array with each data unit
	 */
	public splitMessage(message: string): string[] {
		return message.replace(this.startOfTransmission, "").replace(this.endOfTransmission, "").split(this.unitSeparator).filter(item => item !== '');
	}

	public getUnitValue(unit: string): string {
		return unit.split(this.valueSeparator)[1];
	}

	/**
	* Sends a command via a socket to the debuggee
	* @param command The command to send to the debuggee
	*/
	public async write(command: string) {
		if (!command || command.length < 1) {
			return;
		}

		if (this.socket && !this.socket.destroyed) {
			command = `${this.padForVWatch(command.length)}${command}`
			console.log(`${consolePrefix}writeToDebuggee command sent: "${command}"`)
			this.socket.write(command);
			if (this.waitTime > 0) {
				await await new Promise(f => setTimeout(f, this.waitTime));
			}
		}
	}

	/**
	 * Stop debugging
	 */
	public async stopDebugger() {

		if (activeEditor) {
			activeEditor.setDecorations(decorationSkipLine, []);
		}

		if (skipLineRanges) {
			skipLineRanges.length = 0;
		}

		if (this.spawn && this.attached) {
			if (this.spawn && !this.spawn.killed) {
				this.spawn.kill();
			}
			this.spawn = null;

			if (this.socket) {
				this.socket.end();
			}
			this.socket = null;
			this.attached = false;
		}
	}
}


/*
	debuggee = app to be debugged.
	
	This to look at
	-- Style Guide
	https://ts.dev/style/#syntax

	-- Debuger Setup
	https://www.codemag.com/Article/1809051/Writing-Your-Own-Debugger-and-Language-Extensions-with-Visual-Studio-Code

	Went with chr(31) -- Unit Separator Character 
	https://www.nist.gov/system/files/documents/2021/03/23/ansi-nist_2010_traditional_encoding.pdf
	https://ascii.cl/control-characters.htm

*/

export enum DebugCommands {
	Breakpoint = "breakpoint:",
	BreakpointCount = "breakpoint count:",
	BreakpointList = "breakpoint list:",
	ClearAllBreakPoints = "clear all breakpoints",
	ClearBreakPoint = "clear breakpoint:",
	ClearSkipLine = "clear skip line:",
	ClearAllSkips = "clear all skips",
	GetCallStack = "call stack:",
	GetGobbalVariables = "get global var:",
	GetLocalVariables = "get local var:",
	Hwnd = "hwnd:",
	LineCount = "line count:",
	LineNumber = "line number:",
	LocalVariables = "address read:",
	PaddingSize = "padding size:",
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
		socket.on('end', function () { console.log(`[${commonFunctions.getCurrentDateTime()}]DebugAdapter Disconnected`); });
		socket.on('data', function (data) { debugerSession.handleDataFromVsCode(data); });

		let debugerSession = new DebugAdapter(socket);
		await debugerSession.startDebuggeeConnection()
		debugerSession.start(socket, socket);

	});

	server.listen(vsCodePort, function () {
		const address = server.address();
		if (typeof address === 'string') {
			console.log(`${consolePrefix}server is listening at ${address}`);
		} else {
			console.log(`${consolePrefix}server listening on port ${address?.port}`);
		}
	});
	return server;
}

/**
 * Handles the communction between the QB64 app and VS Code's debugger.
 */
class DebugAdapter extends debug.DebugSession {
	public vscode: net.Socket;
	private debuggee: Debuggee = new Debuggee();
	private isDebuggerRunning: boolean = false;
	private variableHandles = new Handles<string>();
	private currentStack: DebugProtocol.StackFrame[] = [];
	private variables: { [name: string]: DebugProtocol.Variable } = {};
	private gotoLineTarget: DebugProtocol.GotoTarget = undefined;

	// Used to get around timing problems to get a full call stack when stepping though the code.
	private pendingCallStackRequests: Map<string, () => void> = new Map();


	constructor(socket: net.Socket) {
		super();
		this.vscode = socket;
		this.setDebuggerLinesStartAt1(true);
		this.setDebuggerColumnsStartAt1(true);
		this.setupBreakpointListeners();
	}


	async startDebuggeeConnection() {
		this.debuggee.port = await getPort("debuggerPort");
		this.debuggee.server = net.createServer((socket) => {

			if (!this.isDebuggerRunning || !this.debuggee.attached) {
				socket.end();
				return;
			}

			// This callback is executed whenever a client connects
			if (this.debuggee.socket) {
				this.writeLineToDebugConsole('New client attempted to connect, but a client is already connected. Connection denied.', DebugCategories.StdErr);
				socket.end(); // Close connection immediately
				return; // Exit the callback
			}

			const handshakeTimeout = async () => {
				this.writeLineToDebugConsole(`Connection to ${this.debuggee.appPath} timed out`, DebugCategories.StdErr);
				await this.stopDebugger();
			}

			this.debuggee.socket = socket;
			this.debuggee.socket.setTimeout(10000); // ten seconds
			this.debuggee.socket.on('timeout', handshakeTimeout);

			this.debuggee.socket.on('close', async () => {
				await this.writeLineToDebugConsole("Connection to debuggee closed.");
				await this.stopDebugger();
			});

			this.debuggee.socket.on('data', async (data) => {

				let message: string = data.toString();


				if (!message.startsWith(this.debuggee.startOfTransmission)) {
					await this.writeLineToDebugConsole(`Invalid message | Missing STX: ${message}`);
					await this.stopDebugger();
					return;
				}

				if (!message.endsWith(this.debuggee.endOfTransmission)) {
					await this.writeLineToDebugConsole(`Invalid message | Missing EOT: ${message}`);
					await this.stopDebugger();
					return;
				}

				if (message.includes("me:")) {
					if (!await this.handShakeMessage(message, handshakeTimeout)) {
						await this.stopDebugger();
					}
					return;
				}

				if (message.includes(DebugCommands.Breakpoint) || message.includes(DebugCommands.LineNumber)) {
					await this.stopAtLineMessage();
					return;
				}

				if (message.includes(DebugCommands.Quit)) {
					await this.quitMessage(message);
					return;
				}

				if (message.includes(DebugCommands.GetCallStack)) {
					await this.callStackMessage(message);
					return;
				}

				if (message.includes(DebugCommands.LocalVariables)) {
					await this.localVariablesMessage(message);
					return;
				}

				if (message.includes("enter input:")) {
					await this.writeLineToDebugConsole("Waiting on input...");
					return;
				}

				this.writeLineToDebugConsole(`Unknown debug command: ${message}`);
			});

			socket.on('error', async (err) => {
				this.writeLineToDebugConsole(`Error occurred with the debuggee: ${err}`, DebugCategories.StdErr);
				await this.stopDebugger();
			});

			socket.on('close', async () => { await this.stopDebugger(); });
			socket.on('end', async () => { await this.stopDebugger(); });

		});

		this.debuggee.server.listen(this.debuggee.port, '127.0.0.1');
	}

	private async callStackMessage(message: string) {
		this.currentStack.length = 0;
		const stacks: string[] = this.debuggee.splitMessage(this.debuggee.getUnitValue(message))

		// TODO: Somehow handle include files
		for (let i: number = stacks.length - 1; i >= 0; i--) {
			this.writeLineToDebugConsole(stacks[i], DebugCategories.Console);
			const stackInfo = stacks[i].split(",");
			const stack: DebugProtocol.StackFrame = {
				id: i,
				name: stackInfo[0],
				line: Number(stackInfo[1].trim().split(" ")[1]),
				column: 0,
				source: {
					name: vscode.window.activeTextEditor?.document.fileName,
					path: vscode.window.activeTextEditor?.document.uri.fsPath
				}
			}
			this.currentStack.push(stack);
		}
	}

	private async localVariablesMessage(message: string) {
		// TODO: Load the variables array here
		this.writeLineToDebugConsole(message);
	}

	private async stopAtLineMessage() {
		await this.debuggee.write(DebugCommands.GetCallStack);
		this.sendEvent(new debug.StoppedEvent("breakpoint", 1));
	}

	protected continueRequest(response: DebugProtocol.ContinueResponse, args: DebugProtocol.ContinueArguments): void {
		this.currentStack = [];
		this.debuggee.write(DebugCommands.Run);
		this.sendResponse(response);
	}

	/**
	 * Handles the quit command from the debuggee app.
	 * @param message Message form the debuggee app
	 */
	private async quitMessage(message: string) {
		const quitMessage: string = message.split(DebugCommands.Quit)[1];
		if (quitMessage.toLowerCase().includes("error")) {
			await this.writeLineToDebugConsole(quitMessage, DebugCategories.StdErr);
		} else {
			await this.writeLineToDebugConsole(quitMessage, DebugCategories.Console);
		}
		await this.stopDebugger();
	}

	private async handShakeMessage(message: string, handshakeTimeout: () => void) {

		if (!message.includes(this.debuggee.appPath)) {
			await this.writeLineToDebugConsole(`Failed to initiate debug session. Expected: ${this.debuggee.appPath} | Message: ${message}`);
			await this.stopDebugger();
			return false;
		}
		await this.writeLineToDebugConsole(`Debugging: ${this.debuggee.appPath}`);
		await this.debuggee.write(DebugCommands.VWatch);

		const messageUnits = this.debuggee.splitMessage(message);
		for (let i: number = 0; i < messageUnits.length; i++) {
			if (messageUnits[i].includes(DebugCommands.Hwnd)) {
				await this.debuggee.write(`${DebugCommands.Hwnd}${this.debuggee.getUnitValue(messageUnits[i].trim())}}`);
			}

			if (messageUnits[i].includes(DebugCommands.PaddingSize)) {
				this.debuggee.paddingSize = Number(this.debuggee.getUnitValue(messageUnits[i]));
			}
		}

		await this.debuggee.write(`${DebugCommands.LineCount}${vscode.window.activeTextEditor.document.lineCount}`);

		const breakpoints = vscode.debug.breakpoints;
		let breakpointCount = 0;
		if (breakpoints.length > 0) {
			let breakPoints: string = ""
			breakpoints.forEach(async (breakpoint) => {
				if (breakpoint instanceof vscode.SourceBreakpoint) {
					let sourceBreakpoint = breakpoint as vscode.SourceBreakpoint;
					if (sourceBreakpoint.location.uri.fsPath == vscode.window.activeTextEditor.document.uri.fsPath) {
						breakpointCount++;
						console.log(`${consolePrefix}Breakpoint at file: ${sourceBreakpoint.location.uri.fsPath} Line: ${sourceBreakpoint.location.range.start.line + 1}`);
						breakPoints += this.debuggee.padForVWatch(sourceBreakpoint.location.range.start.line + 1);
					}
				}
			});
			if (breakpointCount > 0) {
				console.log(`${consolePrefix}Setting Breakpoints`);
				await this.debuggee.write(`${DebugCommands.BreakpointCount}${breakpointCount}`);
				await this.debuggee.write(`${DebugCommands.BreakpointList}${breakPoints}`);
			}
		} else {
			await this.debuggee.write(`${DebugCommands.BreakpointCount}`);
			await this.debuggee.write(DebugCommands.BreakpointList);
		}

		await this.debuggee.write(DebugCommands.SkipList);
		await this.debuggee.write(DebugCommands.Run);
		this.debuggee.socket.off('timeout', handshakeTimeout); // After the handshake is complete. Reset the timeout.

		this.debuggee.socket.setTimeout(900000); // 15 minutes in milliseconds
		this.debuggee.socket.on('timeout', async () => {
			console.log(`${consolePrefix}Debug session timed out after 15 minutes`);
			await this.writeLineToDebugConsole('Debug session timed out after 15 minutes');
			await this.stopDebugger();
		});
		return true;
	}

	/**
	 * Listen for breakpoint changes after debugging has started.
	 */
	private setupBreakpointListeners(): void {
		vscode.debug.onDidChangeBreakpoints(event => {
			event.added.forEach(async (breakpoint) => {
				if (breakpoint instanceof vscode.SourceBreakpoint) {
					if (breakpoint.location.uri.fsPath == vscode.window.activeTextEditor.document.uri.fsPath) {
						console.log(`${consolePrefix}Breakpoint at file: ${breakpoint.location.uri.fsPath} Line: ${breakpoint.location.range.start.line}`);
						await this.debuggee.write(`${DebugCommands.SetBreakPoint}${breakpoint.location.range.start.line + 1}`);
					}
				}
			});

			event.removed.forEach(async (breakpoint) => {
				if (breakpoint instanceof vscode.SourceBreakpoint) {
					if (breakpoint.location.uri.fsPath == vscode.window.activeTextEditor.document.uri.fsPath) {
						console.log(`${consolePrefix}Breakpoint removed at ${breakpoint.location.range.start.line}`);
						await this.debuggee.write(`${DebugCommands.ClearBreakPoint}${breakpoint.location.range.start.line + 1}`);
					}
				}
			});

			event.changed.forEach(async (breakpoint) => {
				if (breakpoint instanceof vscode.SourceBreakpoint) {
					if (breakpoint.location.uri.fsPath == vscode.window.activeTextEditor.document.uri.fsPath) {
						console.log(`${consolePrefix}Breakpoint changed at ${breakpoint.location.range.start.line}`);
						await this.debuggee.write(`${DebugCommands.SetBreakPoint}${breakpoint.location.range.start.line + 1}`);
					}
				}
			});
		});
	}

	/**
	 * Writes a message to the debug console
	 * @param message Message to write
	 * @param category Type of message to write
	 */
	private async writeToDebugConsole(message: string, category: DebugCategories = DebugCategories.Console) { this.sendEvent(new debug.OutputEvent(message, category)); }

	/**
	 * Writes a message to the debug console with a \n append to the end.
	 * @param message Message to write
	 * @param category Type of message to write
	 */
	private async writeLineToDebugConsole(message: string, category: DebugCategories = DebugCategories.Console) { this.writeToDebugConsole(`${message}\n`, category); }

	/**
	 * This will need to change if multi-threading is ever added to QB64
	 * @param response 
	 */
	protected threadsRequest(response: DebugProtocol.ThreadsResponse): void {
		response.body = { threads: [new debug.Thread(1, "thread 1")] };
		this.sendResponse(response);
	}

	/**
	 * Sends a customer command to the debuggee
	 * @param command The command to send
	 * @param response 
	 * @param args 
	 */
	protected async customRequest(command: string, response: DebugProtocol.Response, args: any): Promise<void> {
		switch (command) {
			case DebugCommands.SetSkipLine:
				await this.debuggee.write(`${DebugCommands.SetSkipLine}${args.line + 1}`);
				break;
			case DebugCommands.ClearSkipLine:
				await this.debuggee.write(`${DebugCommands.ClearSkipLine}${args.line + 1}`);
				break;
			case DebugCommands.ClearAllSkips:
				await this.debuggee.write(DebugCommands.ClearAllSkips);
				break;
			default:
				super.customRequest(command, response, args);
				break;
		}
		this.sendResponse(response);
	}

	/**
	 * Used to handle complex value evaluate / Watch window
	 * @param response 
	 * @param args 
	 */
	protected evaluateRequest(response: DebugProtocol.EvaluateResponse, args: DebugProtocol.EvaluateArguments): void {
		if (this.variables && Object.keys(this.variables).length > 0) {
			// Look up the variable if they have been loaded.
			const variable = this.variables[args.expression];
			if (variable) {
				response.body = {
					result: variable.value,
					variablesReference: 0
				};

			} else {
				//	This will run once before the variables get load.  Just ignore the problem (for now)
				const message: string = `Variable '${args.expression}' not found`;
				this.writeLineToDebugConsole(message)
				this.sendErrorResponse(response, 2001, message);
			}
		}
		this.sendResponse(response);
	}

	protected scopesRequest(response: DebugProtocol.ScopesResponse, args: DebugProtocol.ScopesArguments): void {
		const scopes: DebugProtocol.Scope[] = [
			{
				name: "Locals",
				variablesReference: this.variableHandles.create("Locals"),
				expensive: false,
			},
			{
				name: "Globals",
				variablesReference: this.variableHandles.create("Globals"),
				expensive: false,
			},
			{
				name: "Constants",
				variablesReference: this.variableHandles.create("Constants"),
				expensive: false,

			}
		];
		response.body = { scopes: scopes };
		this.sendResponse(response);
	}

	protected variablesRequest(response: DebugProtocol.VariablesResponse, args: DebugProtocol.VariablesArguments): void {
		let variables: DebugProtocol.Variable[] = [];
		const scope = this.variableHandles.get(args.variablesReference);
		//console.log(`${consolePrefix}Scope = ${scope}`);
		switch (scope) {
			case "Constants":
				{
					variables = constVariables;
					break;
				}
			case "Globals":
				{
					break;
				}
			case "Locals":
				{
					/*
					const variable1 = {
						name: "name1",
						value: "tom",
						variablesReference: 0
					};
					variables.push(variable1);
					this.variables[variable1.name] = variable1;
					const variable2 = {
						name: "name$",
						value: "var with a $",
						variablesReference: 0
					};
					this.variables[variable2.name] = variable2;
					variables.push(variable2);
					*/
					break;
				}
			default:
				{
					console.log(`${consolePrefix}Unknown Scope: ${scope}`);
					break;
				}
		}

		response.body = { variables: variables };
		this.sendResponse(response);
	}

	protected stackTraceRequest(response: DebugProtocol.StackTraceResponse, args: DebugProtocol.StackTraceArguments): void {
		const frames: DebugProtocol.StackFrame[] = this.currentStack.map((frame, index) => {
			return new debug.StackFrame(
				index, // frameId: A unique identifier for the frame.
				frame.name, // name: Name of the frame, typically a method name.
				new debug.Source(frame.source.path), // source: The source of the frame.
				frame.line, // line: The line number in the source code.
				frame.column // column: The column number in the source code.
			);
		});

		response.body = {
			stackFrames: frames,
			totalFrames: frames.length
		};

		this.sendResponse(response);
	}

	protected initializeRequest(response: DebugProtocol.InitializeResponse, args: DebugProtocol.InitializeRequestArguments): void {
		// Build and return the capabilities of your debug adapter
		response.body = response.body || {};
		response.body.supportsBreakpointLocationsRequest = true;
		response.body.supportsSetVariable = false; // The debug adapter supports setting value from the watch window.
		response.body.supportsConfigurationDoneRequest = true;
		response.body.supportsStepBack = true;
		response.body.supportsStepInTargetsRequest = true;
		response.body.supportsGotoTargetsRequest = true;
		//response.body.supportsContinueRequest = true;
		//response.body.supportsStepOut = true;
		//response.body.supportsNextRequest = true;

		this.sendResponse(response);
	}

	protected setBreakPointsRequest(response: DebugProtocol.SetBreakpointsResponse, args: DebugProtocol.SetBreakpointsArguments, request?: DebugProtocol.Request): void {
		try {

			if (!args.breakpoints) {
				return;
			}

			this.debuggee.write(DebugCommands.ClearAllBreakPoints);

			for (const bp of args.breakpoints || []) {
				this.debuggee.write(`${DebugCommands.SetBreakPoint}${bp.line}`);
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
			this.debuggee.write(DebugCommands.StepOut);
		} catch (err) {
			vscode.window.showErrorMessage(err);
		} finally {
			this.sendResponse(response);
		}
	}

	/**
	 * This is step into (F11)
	 * @param response 
	 * @param args 
	 */
	protected stepInRequest(response: DebugProtocol.Response, args: any): void {
		try {
			this.debuggee.write(DebugCommands.StepInto);
		} catch (err) {
			vscode.window.showErrorMessage(err);
		} finally {
			this.sendResponse(response);
		}
	}

	/**
	 * This is step over (F10)
	 * @param response 
	 * @param args 
	 */
	protected nextRequest(response: DebugProtocol.NextResponse, args: DebugProtocol.NextArguments): void {
		try {
			this.debuggee.write(DebugCommands.StepOver);
		} catch (err) {
			vscode.window.showErrorMessage(err);
		} finally {
			this.sendResponse(response);
		}
	}

	/**
	 * For jump to cursor
	 * @param response 
	 * @param args 
	 */
	protected gotoTargetsRequest(response: DebugProtocol.GotoTargetsResponse, args: DebugProtocol.GotoTargetsArguments): void {
		this.gotoLineTarget =
		{
			id: args.line + args.column, // Assign a unique id to the target
			label: `Target ${args.line}`,
			line: args.line,
			column: args.column,
		};
		response.body = { targets: [this.gotoLineTarget] };
		this.sendResponse(response);
	}

	/**
	 * For jump to cursor
	 * @param response 
	 * @param args 
	 */
	protected async gotoRequest(response: DebugProtocol.GotoResponse, args: DebugProtocol.GotoArguments): Promise<void> {
		if (this.gotoLineTarget) {
			// Code to instruct your debugger to jump to the target location
			await this.debuggee.write(`${DebugCommands.SetNextLine}${this.gotoLineTarget.line}`);
			this.gotoLineTarget = undefined;
			response.success = true;
		} else {
			response.success = false;
		}
		this.sendResponse(response);
	}

	deleteQB64Log(compilerPath: any): void {
		let parsedPath = path.parse(compilerPath);
		parsedPath.ext = '.log';
		parsedPath.base = `${parsedPath.name}${parsedPath.ext}`;
		const logFile = path.format(parsedPath);
		if (fs.existsSync(logFile)) {
			// this.writeToDebugConsole(`File '${logFile}' Found`);
		} else {
			// this.writeToDebugConsole(`File '${logFile}' Not Found`);
		}
		//TODO: delete qb64.log
		/*
		// QB64 Code
		DIM SHARED debugPath$
		debugPath$ = _CWD$
		IF _FILEEXISTS(debugPath$ + "/qb64.log") THEN
		KILL debugPath$ + "/qb64.log"
		END IF
		*/
	}

	/**
	 * Is the the code in set for debug mode (has $debug)
	 * @param cpde 
	 */
	private isDebugMode(code: string): boolean {
		let lines = code.split("\r");
		for (let i: number = 0; i < lines.length; i++) {
			let line = lines[i].trimEnd().toLowerCase();
			if (line.startsWith("'") || line.startsWith("rem")) {
				continue;
			}
			return (line === "$debug");
		}
		return false;
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

			this.deleteQB64Log(compilerPath);
			this.debuggee.attached = this.isDebugMode(data);
			this.debuggee.appPath = os.platform() === 'win32' ? args.program.replace(/\.bas$/i, '.exe') : args.program.replace(/\.bas$/i, '');
			const compilerArgs: string[] = ["-w", "-x", args.program, '-o', this.debuggee.appPath];

			/*
			if (attach) {
				compilerArgs = ["-x", args.program, '-o', this.debuggee.appPath];
			} else {
				compilerArgs = ["-x", args.program, '-o', this.debuggee.appPath];
			}
			*/

			let env: any = { ...process.env }; // Make a copy of the current environment variables
			env.QB64IDEVER = "2";
			const compiler = spawn(compilerPath, compilerArgs,
				{
					cwd: path.dirname(args.program),
					env: env
				});

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
					this.writeLineToDebugConsole(`The compiler exited with code ${code} and signal ${signal}. Unable to start debugger.`, DebugCategories.StdErr);
					this.stopDebugger();

					if (compilerOutput.length > 0) {
						lintCompilerOutput(compilerOutput, this.debuggee.attached)
						compilerOutput = "";
					}
					return;
				}
			});

			// Fires after exit -- Then the output stream stops
			compiler.on('close', (code: number) => {

				if (code !== 0) {
					this.stopDebugger();
					return;
				}

				if (compilerOutput.length > 0) {
					lintCompilerOutput(compilerOutput, this.debuggee.attached)
				}

				if (code !== 0) {
					this.stopDebugger();
					this.writeLineToDebugConsole(`Compiler exited with code ${code}`, DebugCategories.StdErr);
					vscode.commands.executeCommand('workbench.actions.view.problems');
				}

				if (!fs.existsSync(this.debuggee.appPath)) {
					this.stopDebugger();
					this.writeLineToDebugConsole(`File ${this.debuggee.appPath} Not Found.`, DebugCategories.StdErr);
				}

				// Catch any place that has turned off the debugger.
				if (!this.isDebuggerRunning) {
					return
				}

				let env: any = { ...process.env };
				env.QB64DEBUGPORT = `${this.debuggee.port}`; // Set the QB64 debugging port
				this.debuggee.spawn = spawn(this.debuggee.appPath, [],
					{
						cwd: path.dirname(this.debuggee.appPath),
						env: env
					});

				this.debuggee.spawn.on('close', () => { this.stopDebugger(); });

				this.debuggee.spawn.on('error', (error) => {
					if (error.message.indexOf("Error: An extension called process.exit() and this was prevented.") < 0) {
						this.writeLineToDebugConsole(`Error in the app to debug: ${error}`, DebugCategories.StdErr);
					}
					this.stopDebugger();
				});

				if (!this.debuggee.attached) {
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
			this.stopDebugger();
		}
		/*
		// Then you can do something with the message, like sending it to VS Code:
		if (message.includes("breakpointLocations")) {
			// Might need to just ignore this.
			// this.writeLineToDebugConsole(`breakpointLocations: ${message}`, DebugCategories.Console);
		}
		else if (
			!message.includes('"command":"initialize"')
			&& !message.includes('"command":"launch"')
			&& !message.includes('command":"disconnect')
			&& !message.includes('command":"stackTrace')
			&& !message.includes('command":"scopes')
			&& !message.includes('command":"continue')) {
			this.writeLineToDebugConsole(`unhandleDataFromApp: ${message}`, DebugCategories.StdErr);
		}
		*/
	}

	private async stopDebugger(): Promise<void> {
		if (this.isDebuggerRunning) {
			await this.debuggee.stopDebugger();
			this.sendEvent(new debug.TerminatedEvent());
			vscode.commands.executeCommand('workbench.view.explorer'); // Open the explorer... should track if it was open before debugging stated 
			vscode.commands.executeCommand('workbench.action.focusActiveEditorGroup'); // set focus back to the code window
			this.isDebuggerRunning = false;
		}
	}

}