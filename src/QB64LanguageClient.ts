import * as vscode from 'vscode';
import { LanguageClient, RequestMessage, RevealOutputChannelOn } from "vscode-languageclient/node";
//import { is_debug_mode, get_configuration } from "../utils";
import { MessageIO, MessageIOReader, MessageIOWriter, Message, WebSocketMessageIO, TCPMessageIO } from "./MessageIO";
//import logger from "../logger";
import { EventEmitter } from "events";
//import NativeDocumentManager from './NativeDocumentManager';

export enum ClientStatus {
	PENDING,
	DISCONNECTED,
	CONNECTED,
}
const CUSTOM_MESSAGE = "qb64scrip_client/";

export default class QB64LanguageClient extends LanguageClient {

	// public readonly io: MessageIO = (get_configuration("QB64_lsp_server_protocol", "tcp") == "ws") ? new WebSocketMessageIO() : new TCPMessageIO();
	// public readonly io: MessageIO = new WebSocketMessageIO();

	public readonly io: MessageIO = new TCPMessageIO()
	public port: number = -1;
	private _started: boolean = false;
	private _status: ClientStatus;
	private _status_changed_callbacks: ((v: ClientStatus) => void)[] = [];
	private _initialize_request: Message = null;
	private message_handler: MessageHandler = null;
	private _traceState = "";
	// private native_doc_manager: NativeDocumentManager = null;

	public get started(): boolean { return this._started; }
	public get status(): ClientStatus { return this._status; }
	public set status(v: ClientStatus) {
		if (this._status != v) {
			this._status = v;
			for (const callback of this._status_changed_callbacks) {
				callback(v);
			}
		}
	}

	/*
		Toogles the trace setting from off to verbose
	*/
	public toogleTrace() {
		try {
			if (this._traceState.length < 1) {
				const config = vscode.workspace.getConfiguration("qb64")
				this._traceState = config.get("lsIsTraceStatus");
			}

			// TODO: Handle messages
			if (this._traceState == "off") {
				this._traceState = "verbose";
			} else if (this._traceState == "verbose") {
				this._traceState = "off";
			}
			this.sendRequest("$/setTrace", { value: this._traceState });
		} catch (error) {
			this.outputChannel.appendLine(`ERROR: in toogleTrace:  ${error}`);
		}
	}

	public watch_status(callback: (v: ClientStatus) => void) {
		if (this._status_changed_callbacks.indexOf(callback) == -1) {
			this._status_changed_callbacks.push(callback);
		}
	}

	/*
	public open_documentation(symbolName: string) {
		this.native_doc_manager.request_documentation(symbolName);
	}
	*/

	// Set port here somewhere
	constructor() {
		super(
			`QB64: Language Client`,
			() => {
				return new Promise((resolve) => {
					resolve(
						{
							reader: new MessageIOReader(this.io)
							, writer: new MessageIOWriter(this.io)
						});
				});
			},
			{
				documentSelector: [
					{ scheme: "file", language: "qb64" },
					{ scheme: "untitled", language: "qb64" },
				],
				synchronize: {
					// Notify the server about file changes to '.bas|*.bm*/bi files contain in the workspace
					fileEvents: vscode.workspace.createFileSystemWatcher("**/*.{bas,bm,bi,bc,inc}"),
				},
				revealOutputChannelOn: RevealOutputChannelOn.Info
			}
		);

		this.port = this.getPort();
		this.status = ClientStatus.PENDING;
		this.message_handler = new MessageHandler(this.io);
		this.io.on('disconnected', this.on_disconnected.bind(this));
		this.io.on('connected', this.on_connected.bind(this, this.port));
		this.io.on('message', this.on_message.bind(this));
		this.io.on('send_message', this.on_send_message.bind(this));
		//this.native_doc_manager = new NativeDocumentManager(this.io);
	}

	connect_to_server(port: number) {
		if (this._traceState != "off") {
			this.outputChannel.appendLine(`[CONNECT_TO_SERVER][${this.getTime()}]`)
		}
		this.status = ClientStatus.PENDING;
		this.io.connect_to_language_server("127.0.0.1", port);
	}

	start(): vscode.Disposable {
		if (this._traceState != "off") {
			this.outputChannel.appendLine(`[START][${this.getTime()}]`)
		}
		this.connect_to_server(this.port);
		this._started = true;
		return super.start();
	}

	private on_send_message(message: Message) {
		if ((message as RequestMessage).method == "initialize") {
			this._initialize_request = message;
		} else {
			this.outputChannel.appendLine(`[ON_SEND_MESSAGE][${this.getTime()}] ${JSON.stringify(message)}`)
		}
	}

	private on_message(message: Message) {
		if (this._traceState != "off") {
			this.outputChannel.appendLine(`[ON_MESSAGE][${this.getTime()}] ${JSON.stringify(message)}`)
		}

		/*
		const match = JSON.stringify(message).match(/"target":"file:\/\/[^\/][^"]*"/);
		if (match) {
			for (let i = 0; i < message["result"].length; i++) {
				const x = message["result"][i]["target"];
				message["result"][i]["target"] = x.replace('file://', 'file:///');
			}
		}
		*/

		this.message_handler.on_message(message);
	}

	/**
	* Genrate random port number (int)
	* @returns random int - 1024 & 65535 inclusive
	*/
	private getPort() {
		// TODO: Add check if port is alrady in use and get a different one & move to QB64LanguageClient
		return Math.floor(Math.random() * (65535 - 1024 + 1)) + 1024;
	}

	private on_connected() {
		if (this._traceState != "off") {
			this.outputChannel.appendLine(`[ON_CONNECTED][${this.getTime()}`)
		}

		if (this._initialize_request) {
			this.io.writer.write(this._initialize_request);
		}

		this.status = ClientStatus.CONNECTED;
	}

	private on_disconnected() {
		if (this._traceState != "off") {
			this.outputChannel.appendLine(`[ON_DISCONNECTED][${this.getTime()}]`)
		}
		this.status = ClientStatus.DISCONNECTED;
	}

	private getTime(): string {
		const t = new Date();
		const hours = t.getHours()
		const minutes = t.getMinutes()
		return `${hours}:${minutes}`;
	}

}

class MessageHandler extends EventEmitter {

	private io: MessageIO = null;

	constructor(io: MessageIO) {
		super();
		this.io = io;
	}

	changeWorkspace(params: { path: string }) {
		vscode.window.showErrorMessage("The QB64 language server can't work properly!\nThe open workspace is different from the editor's.", 'Reload', 'Ignore').then(item => {
			if (item == "Reload") {
				let folderUrl = vscode.Uri.file(params.path);
				vscode.commands.executeCommand('vscode.openFolder', folderUrl, false);
			}
		});
	}

	on_message(message: any) {
		console.log(`[MessageHandler][on_message] ${message}`)
		if (message && message.result && message.result.range && message.result.contents) {
			message.result.range = undefined;
		}

		if (message && message.method && (message.method as string).startsWith(CUSTOM_MESSAGE)) {
			const method = (message.method as string).substring(CUSTOM_MESSAGE.length, message.method.length);
			if (this[method]) {
				let ret = this[method](message.params);
				if (ret) {
					this.io.writer.write(ret);
				}
			}
		}
	}
}