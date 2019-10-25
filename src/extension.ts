import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "cppIncludeGuard" is now active!');

    const commands = require('./commands');
    context.subscriptions.push(vscode.commands.registerCommand('extension.insertIncludeGuard', () => {
        commands.insertIncludeGuard();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('extension.removeIncludeGuard', () => {
        commands.removeIncludeGuard();
    }));
}

// this method is called when your extension is deactivated
export function deactivate() {}