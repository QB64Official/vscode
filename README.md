# QB64 Language Support

A VSCode extension that adds support for [QB64](https://qb64.com/).

This is very rough and still needs a lot of work.

## Give credit where credit is due
* Extensions Highlighting: based on: https://github.com/sorucoder/freebasic-vscode-extension
* Syntax coloring is based on: https://github.com/microsoft/vscode/blob/main/extensions/vb/syntaxes/asp-vb-net.tmlanguage.json
* OutLine based on: https://github.com/svaberg/SWMF-grammar
* The snippets came from https://github.com/microsoft/vscode/blob/main/extensions/vb/snippets/vb.code-snippets
   - They have been edited for QB64
* Followed for Decorations: https://vscode.rocks/decorations/
* The todo list icon came from: https://www.iconfinder.com/search?q=todo&price=free&style=outline&license=gte__1
* I just stright up stole the core of F5 anything and baked it in to get F5 working with out external extenstions
  - https://github.com/discretegames/f5anything
  
## Features
* Syntax highlighting for QB64 2.x
* Code outline
* Code folding
* Build Only
* Highlights TODOs in the comments
* Box around (_)rgb(32) commands the color of the command.
* Snippets
  - ifelse
  - ifthen
  - sub
  - func
  - type

## How to edit & debug.
1. Download the source to a folder
2. Open VS Code an open the downloaded folder from step 1
3. Run `npm install -g vsce` in the terminal (if you don't your changes won't get applied)
4. Press F5 -- A new VS code window will open
5. In the new VS Code window open a QB64 file
6. This new VS Code window will have the QB64 extension enabled
7. Open settings and change the path to your QB64.exe: `qb64.compilerPath`
    - Note on Windows need to use `\\` for path separators
        - Example: ```"qb64.compilerPath": "c:\\QB64\\qb64.exe"```
        - This has been updated to work with '/' in windows (as of v0.2.0).
    - Linux and Mac OS should use `/` for path separators    
~~8. Compile your basic projects using the task using Terminal -> Run Task (or CTRL+SHIFT+B) until debugging works~~
~~9. If you don't get the .vscode folder, I've been told some people are having issues with it.~~
~~    - You will need to create a launch.json - to use F5 for debugging the extension.~~
~~    - Create a new folder named .vscode the root of the project. ~~
~~    - In that folder create a new file named launch.json~~
~~    - Past the following code in the launch.json file~~
9. The launch.json & extensions.json are now auto created.  
   -- The files are not over written so any custom changes are safe.
10. The extension is now always rebuilt when debuging.

* The syntax settings are in the file `syntaxes\qb64.Language.json`
* The build tasks are in `tasks` folder

## Extension Building Requirements
1. NPM: https://nodejs.org/en/download/ or https://nodejs.dev/learn/how-to-install-nodejs
2. Typescript: `npm install -g typescript`
3. VSCode Types: `npm install -g --save @types/vscode`
4. NodeJS Types: `npm install -g --save @types/node`
5. To get Node:FS to compile  `npm i --save-dev @types/node`

## How to Build
1. Open VS Code and add the folder from this project to the workspace
2. Open a terminal window in VS Code
3. Run `npm install -g vsce` from the terminal window (if not already installed)
4. Run `npm i vscode-debugadapter` from the terminal window (if not already installed)
5. Run `vsce package` from the terminal window
6. Right click the `qb64*.vsix` extension file and choose Install Extension
7. The project install will be placed in root of this project

## Syntax Highlighting  
* The syntax highlighting is in `/syntaxes/qb64.tmLanguage.json`

## Known Issues
~~1. The task(s) for building are not auto installing when debugging - You will need to manually create the tasks for now~~
2. Keywords are not formatted
3. No real time problems / compiler warning
4. Not published on VS Code extension marketplace (yet)
5. There are still VB keywords in the `language-configuration.json`
~~6. The auto complete `sub/if/function` leaves the curson on the wrong line~~
~~7. The color and include file decorationse don't get applied when opening a new file or switching to an already open tab.~~

## What is currently working (I think)
* F1 to get open the help Wiki on GitHub
* Outline - F2 toggles focus to the outline
* Syntax coloring -- If we see keywords that are not colored.  Report and issue, I'm sure I missed some.
* Open Include file.
* Build & Run with F5