# Hello World Sample

This is a Hello World example that shows you how to use VS Code API.

Guide for this sample: https://code.visualstudio.com/api/get-started/your-first-extension.

## Demo

![demo](demo.gif)

## VS Code API

### `vscode` module

- [`commands.registerCommand`](https://code.visualstudio.com/api/references/vscode-api#commands.registerCommand)
- [`window.showInformationMessage`](https://code.visualstudio.com/api/references/vscode-api#window.showInformationMessage)

### Contribution Points

- [`contributes.commands`](https://code.visualstudio.com/api/references/contribution-points#contributes.commands)

## Running the Sample

- Run `npm install` in terminal to install dependencies
- Run the `Run Extension` target in the Debug View. This will:
	- Start a task `npm: watch` to compile the code
	- Run the extension in a new VS Code window


## References
1. [Git integration for Visual Studio Code](https://github.com/microsoft/vscode/blob/main/extensions/git/README.md#git-integration-for-visual-studio-code)
2. [Vscode API](https://code.visualstudio.com/api/references/contribution-points#contributes.configuration)
3. [中文文档](https://liiked.github.io/VS-Code-Extension-Doc-ZH/#/working-with-extensions/bundling-extension)
4. [vsce publish fails - VS Code Extension using pnpm/yarn](https://stackoverflow.com/questions/59798905/vsce-publish-fails-vs-code-extension-using-pnpm-yarn)
5. [vscode-use](https://vscode-use-docs.netlify.app/) by Simon He