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

	private _started: boolean = false;
	private _status: ClientStatus;
	private _status_changed_callbacks: ((v: ClientStatus) => void)[] = [];
	private _initialize_request: Message = null;
	private message_handler: MessageHandler = null;
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

	constructor(port: number) {
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
				//synchronize: {
				// Notify the server about file changes to '.bas|*.bm*/bi files contain in the workspace
				// fileEvents: workspace.createFileSystemWatcher("**/*.bas"),
				//},
				revealOutputChannelOn: RevealOutputChannelOn.Info
			}
		);

		this.outputChannel.appendLine("QB64LanguageClient.constructor: After Super")

		this.status = ClientStatus.PENDING;
		this.message_handler = new MessageHandler(this.io);
		this.io.on('disconnected', this.on_disconnected.bind(this));
		this.io.on('connected', this.on_connected.bind(this, port));
		this.io.on('message', this.on_message.bind(this));
		this.io.on('send_message', this.on_send_message.bind(this));
		//this.native_doc_manager = new NativeDocumentManager(this.io);
	}

	connect_to_server(port: number) {
		this.outputChannel.appendLine(`[CONNECT_TO_SERVER][${this.getTime()}]`)
		this.status = ClientStatus.PENDING;
		this.io.connect_to_language_server("127.0.0.1", port);
	}

	start(): vscode.Disposable {
		this.outputChannel.appendLine(`[START][${this.getTime()}]`)
		this._started = true;
		return super.start();
	}

	private on_send_message(message: Message) {
		this.outputChannel.appendLine(`[ON_SEND_MESSAGE][${this.getTime()}] ${JSON.stringify(message)}`)

		if ((message as RequestMessage).method == "initialize") {
			this._initialize_request = message;
		}
	}

	private on_message(message: Message) {
		this.outputChannel.appendLine(`[ON_MESSAGE][${this.getTime()}] ${JSON.stringify(message)}`)
		const match = JSON.stringify(message).match(/"target":"file:\/\/[^\/][^"]*"/);
		if (match) {
			for (let i = 0; i < message["result"].length; i++) {
				const x = message["result"][i]["target"];
				message["result"][i]["target"] = x.replace('file://', 'file:///');
			}
		}
		this.message_handler.on_message(message);
	}

	private on_connected() {
		this.outputChannel.appendLine(`[ON_CONNECTED][${this.getTime()}`)
		if (this._initialize_request) {
			this.outputChannel.appendLine(`[ON_CONNECTED][${this.getTime()}][initialize_request]`)
			this.io.writer.write(this._initialize_request);
		}
		this.status = ClientStatus.CONNECTED;
	}

	private on_disconnected() {
		this.outputChannel.appendLine(`[ON_DISCONNECTED][${this.getTime()}]`)
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
		// FIXME: Hot fix VSCode 1.42 hover position
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