'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider({ scheme: "file", language: "QB64" }, new Qb64ConfigDocumentSymbolProvider()));
}
exports.activate = activate;
class Qb64ConfigDocumentSymbolProvider {
    provideDocumentSymbols(document, token) {
        return new Promise((resolve, reject) => {
            let symbols = [];
            let nodes = [symbols];
            let inside_marker = false;
            let symbolkind_marker = vscode.SymbolKind.Field;
            for (var i = 0; i < document.lineCount; i++) {
                var line = document.lineAt(i);
                let tokens = line.text.split(" ");
                if (line.text.toLowerCase().startsWith("sub ") || line.text.toLowerCase().startsWith("function ")) {
                    let isSub = line.text.toLowerCase().startsWith("sub ");
                    let marker_symbol = new vscode.DocumentSymbol(tokens[1].trim(), isSub ? "Sub" : "Function", isSub ? vscode.SymbolKind.Method : vscode.SymbolKind.Function, line.range, line.range);
                    nodes[nodes.length - 1].push(marker_symbol);
                    if (!inside_marker) {
                        nodes.push(marker_symbol.children);
                        inside_marker = true;
                    }
                }
                else if (line.text.toLowerCase().startsWith("end sub") || line.text.toLowerCase().startsWith("end function")) {
                    if (inside_marker) {
                        nodes.pop();
                        inside_marker = false;
                    }
                }
            }
            resolve(symbols);
        });
    }
}
//# sourceMappingURL=extension.js.map