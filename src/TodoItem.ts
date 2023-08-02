import * as vscode from "vscode";

export class TodoItem extends vscode.TreeItem {
	constructor(
		public readonly label: string,
		public readonly collapsibleState: vscode.TreeItemCollapsibleState,
		public readonly range: vscode.Range,
		public readonly uri: vscode.Uri
	) {
		super(label, collapsibleState);
	}

	getTreeItem(): vscode.TreeItem {
		let treeItem = new vscode.TreeItem(this.label, this.collapsibleState);
		treeItem.command = {
			command: 'vscode.open',
			title: "Open File",
			arguments: [this.uri, { selection: this.range }]
		};
		return treeItem;
	}
}