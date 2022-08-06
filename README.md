# QB64 Language Support

A VSCode extension that adds support for QB64.

This is very rough and still needs a lot of work.

## Give credit where credit is due
* Syntax Highlighting: based on: https://github.com/sorucoder/freebasic-vscode-extension
* OutLine based on: https://github.com/svaberg/SWMF-grammar

## Features

* Syntax highlighting for QB64 2.x
* Code outline
* Code folding
* Build Only

## How to edit & debug.

* 1 Download the source to a folder
* 2 Open VS Code an open the downloaded folder from step 1
* 3 run "npm install -g vsce" in the terminal (if you don't your changes won't get applied).  
* 4 Press F5 -- A new VS code window will open
* 5 in the new VS Code window open a QB64 file.
* 6 This new VS Code window will have the QB64 extension enabled.

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
* 3 Keywords are not formatted
* 4 No real time problems / compiler warning.
* 5 No Install
* 6 Hard coded QB64.exe path (need to create a setting page in VS Code)
* 7 There are still FreeBasic key words in the language-configuration.json
* 8 The auto complete sub/if/fucntion leaves the curson on the wrong line.

## What is currently working (I think)
* F1 to get open the help Wiki on GitHub
* Outline - F2 toggles focus to the outline
* Syntax coloring -- If we see keywords that are not colored.  Report and issue, I'm sure I missed some.

## NPM installs
* If you don't have node installed you'll needit
*    https://nodejs.dev/learn/how-to-install-nodejs
* npm install should work, but if it doesn't
* 1 npm install --save @types/vscode
* 2 npm install --@types/node
* 3 npm install -g vsce

