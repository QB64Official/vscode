import * as vscode from "vscode";
import * as debugadapter from "@vscode/debugadapter";

var ownTerminal: vscode.Terminal;
export class DebugAdapterDescriptorFactory implements vscode.DebugAdapterDescriptorFactory {
	createDebugAdapterDescriptor(session: vscode.DebugSession): vscode.ProviderResult<vscode.DebugAdapterDescriptor> {
		if (!session.configuration.hasOwnProperty("command")) {
			vscode.window.showErrorMessage(`No command found for QB64PE launch configuration "${session.configuration.name}". Add one like "command": "echo Hello" to your launch.json.`);
		} else {
			const terminal = this.getTerminal(session.configuration);
			if (!session.configuration.hasOwnProperty("showTerminal") || session.configuration.showTerminal) {
				terminal.show();
			}
			terminal.sendText(String(session.configuration.command));
		}
		return new vscode.DebugAdapterInlineImplementation(new DummyDebugSession());
	}

	getTerminal(configuration: vscode.DebugConfiguration): vscode.Terminal {
		if (
			configuration.hasOwnProperty("terminalIndex") && Number.isInteger(configuration.terminalIndex) &&
			configuration.terminalIndex >= 0 && configuration.terminalIndex < vscode.window.terminals.length
		) {
			return vscode.window.terminals[configuration.terminalIndex];
		}

		if (!ownTerminal || ownTerminal.exitStatus) {
			let name = "QB64PE";
			if (configuration.hasOwnProperty("terminalName")) {
				name = String(configuration.terminalName);
			}
			ownTerminal = vscode.window.createTerminal(name);
		}
		return ownTerminal;
	}
}

export class DummyDebugSession extends debugadapter.DebugSession {
	protected initializeRequest(): void {
		this.sendEvent(new debugadapter.TerminatedEvent());
	}
}

