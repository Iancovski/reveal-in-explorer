import * as vscode from 'vscode';

const CONFIG_COLLAPSE_OTHER_FOLDERS = 'reveal-in-explorer.collapseOtherFolders';

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('reveal-in-explorer.reveal', async () => {
        if (vscode.window.activeTextEditor &&
			vscode.window.activeTextEditor.document.uri.scheme !== 'welcomePage'
        ) {
            const collapseOtherFolders = vscode.workspace.getConfiguration().get<boolean>(CONFIG_COLLAPSE_OTHER_FOLDERS);
            if (collapseOtherFolders) {
                await vscode.commands.executeCommand('workbench.files.action.collapseExplorerFolders');
            }
            await vscode.commands.executeCommand('workbench.files.action.showActiveFileInExplorer');
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
