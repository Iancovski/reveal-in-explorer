import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('reveal-in-explorer.reveal', () => {
        if (vscode.window.activeTextEditor &&
			vscode.window.activeTextEditor.document.uri.scheme !== 'welcomePage'
        ) {
            vscode.commands.executeCommand('workbench.files.action.showActiveFileInExplorer');
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
