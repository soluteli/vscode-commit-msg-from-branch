// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { GitExtension } from './types/git';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const disposable = vscode.commands.registerCommand('git-commit-msg-from-branch.getMessageFromBranchName', async () => {
		const commitMessageRegexStr = vscode.workspace.getConfiguration().get<string>('git-commit-msg-from-branch.commitMessageRegex');
		const isEmptyRegexStr = !(commitMessageRegexStr?.trim() || '');
		const commitMessageRegex = new RegExp(commitMessageRegexStr?.trim() || '');
		const gitExtension = vscode.extensions.getExtension<GitExtension>('vscode.git')?.exports;
		await vscode.commands.executeCommand('workbench.view.scm');
		if (gitExtension) {

			const git = gitExtension.getAPI(1);
			const workspaceFolders = vscode.workspace.workspaceFolders || [];
			const repo = git.getRepository(workspaceFolders[0]?.uri);
			if (repo) {
				if (isEmptyRegexStr) {
					await vscode.window.showInformationMessage('[git-commit-msg-from-branch]: Do not set commitMessageRegex');	
					repo.inputBox.value = repo.state.HEAD?.name || ''; 	
				} else {
					const result = (repo.state.HEAD?.name || '').match(commitMessageRegex);
					if (result && result.length > 0) {
						repo.inputBox.value = result[0];
					} else {
						await  vscode.window.showInformationMessage('[git-commit-msg-from-branch]: can not extract message commitMessageRegex');	
					}
				}
			}
		}
	});

	context.subscriptions.push(disposable);
}
