# QB64 for Visual Studio Code

A VSCode extension that adds support for [QB64](https://qb64.com/).

DISCLAIMER: This is very rough and still needs a lot of work.
  
## Features

* Utilize `F1` to *open help* via the QB64 Wiki
* `CTRL+Click` to *follow* (open) an Include file
* `F5` to Build & Run
* Syntax highlighting for QB64 2.x
* Code outline (`CTRL+F2`)
* Code folding
* Build Only
* Highlights TODOs in the comments
* Box around (_)rgb(32) commands the color of the command.
* `F12` to run the lint - this is expermental.  Please report any issues.
* Snippets
  - ifelse
  - ifthen
  - sub
  - func
  - type
  - for

## Requirements

* [QB64](https://qb64.com) installed.
* Latest *vsix* installed from [here](https://github.com/QB64Official/vscode/tree/main/releases).

## Get Started Writing QB64 with VS Code

* [Documentation](https://github.com/QB64Official/vscode/wiki/Documentation)

## Found a Bug?

Please utilize the [Issues](https://github.com/QB64Official/vscode/issues) and file a new one.

## Want to help build QB64 for VS Code?

* [Contribute](https://github.com/QB64Official/vscode/wiki/contribute).

## License

The VS Code for QB64 extension is subject to these license terms. The source code to this extension is available on https://github.com/QB64Official/vscode and licensed under the [MIT license](https://github.com/QB64Official/vscode/blob/main/LICENSE).

## Code of Conduct

This project has adopted the code of conduct defined by the [Contributor Covenant](https://www.contributor-covenant.org/) to clarify expected behavior in our community. For more information see the [QB64 Code of Conduct](https://qb64.com/conduct.html).

## Acknowledgments

* Extensions Highlighting: based on: https://github.com/sorucoder/freebasic-vscode-extension
* Syntax coloring is based on: https://github.com/microsoft/vscode/blob/main/extensions/vb/syntaxes/asp-vb-net.tmlanguage.json
* OutLine based on: https://github.com/svaberg/SWMF-grammar
* The snippets came from https://github.com/microsoft/vscode/blob/main/extensions/vb/snippets/vb.code-snippets
   - They have been edited for QB64
* Followed for Decorations: https://vscode.rocks/decorations/
* The todo list icon came from: https://www.iconfinder.com/search?q=todo&price=free&style=outline&license=gte__1
* I just stright up stole the core of F5 anything and baked it in to get F5 working with out external extenstions
  - https://github.com/discretegames/f5anything
* To get an absolute from a relative is used code based off of https://www.geeksforgeeks.org/convert-relative-path-url-to-absolute-path-url-using-javascript/