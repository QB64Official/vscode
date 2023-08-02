import * as vscode from "vscode";
import { TodoItem } from "./TodoItem";

export class TodoTreeProvider implements vscode.TreeDataProvider<TodoItem> {
	private _onDidChangeTreeData: vscode.EventEmitter<TodoItem | undefined | null> = new vscode.EventEmitter<TodoItem | undefined | null>();
	readonly onDidChangeTreeData: vscode.Event<TodoItem | undefined | null> = this._onDidChangeTreeData.event;

	private _todoItems: TodoItem[] = [];  // This will hold your TodoItems

	refresh(): void {
		this._onDidChangeTreeData.fire(null);
	}

	getTreeItem(element: TodoItem): vscode.TreeItem | Thenable<vscode.TreeItem> {
		return element.getTreeItem();
	}

	getChildren(element?: TodoItem): Thenable<TodoItem[]> {
		if (element) {
			return Promise.resolve([]);
		} else {
			return Promise.resolve(this._todoItems);
		}
	}

	addTodoItem(item: TodoItem): void {
		this._todoItems.push(item);
	}

	clear(): void {
		this._todoItems = [];
	}
}