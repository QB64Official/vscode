# QB64 Language Support

A VSCode extension that adds support for QB64.

This is very rough and still needs a lot of work.

Based off the project https://github.com/sorucoder/freebasic-vscode-extension

## Features

* Syntax highlighting for QB64 2.x
* This is very rough and needs a lot of work

## How to edit & debug.

* 1 Download the source to a folder
* 2 Open VS Code an open the downloaded folder from step 1
* 3 Press F5 -- A new VS code window will open
* 4 in the new VS Code window open a QB64 file.
* This new VS Code window will have the QB64 extension enabled.

* The sytax settings are in the file syntaxes\qb64.Language.json
* The build tasks are in tasks folder

## How to Build
* 1 Open VS Code and open this project
* 2 Run "npm install -g vsce" from the terminal window (if not already installed)
* 3 Run "vsce package" from the terminal window
* 4 The project install will be placed in root of this project.

## Sytax Highlighting  
* The sytax highlighting runs are in language-configuration.json

## Known Issues
* 1 The task(s) for building are not auto installing when debugging - You will need to manually create the tasks for now.
* 2 The compiled vsix does not work.
* 3 Keywords do not proper cased
* 4 No real time problems
* 5 No Install
* 6 Hard coded QB64.exe path (need to create a setting page in VS Code)
* 7 There are still FreeBasic key words in the language-configuration.json
* 8 The auto complete sub/if/fucntion leaves the curson on the wrong line.
