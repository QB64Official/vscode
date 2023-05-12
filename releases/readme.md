# Change Log

All notable changes to the "QB64" extension will be documented in this file.

## [Unreleased]

## How version numbers work
  - major.minor.point
  - Major release: a huge changes  - Exepct for 1; major will go to 1 when the extension released to the market.
  - Minor: new functionality
  - Point: Bug Fixes|Polish


## 0.9.1
- Bugs
  - Issue [#115](https://github.com/QB64Official/vscode/issues/115) Version 0.9.1 Highlighting changes

## 0.9.0
- Enchantments
  - Issue [#112](https://github.com/QB64Official/vscode/issues/112) Add a command to remove line numbers (use Command Palette to access),
  - Issue [#110](https://github.com/QB64Official/vscode/issues/110) Add keypress to call the new stand alone color picker. (alt+p)
  - Issue [#108](https://github.com/QB64Official/vscode/issues/108) Include the help files (markdown) with the installer.  
- Bugs
  - Issue [#114](https://github.com/QB64Official/vscode/issues/114) Keywords that start with $ don't have hover text or help.
  - Issue [#113](https://github.com/QB64Official/vscode/issues/113) Subs and Functions are not highlighted like there are in the classic IDE
  - Issue [#111](https://github.com/QB64Official/vscode/issues/111) Formatter: doesn't handle code with line numbers correctly.
  - Issue [#109](https://github.com/QB64Official/vscode/issues/109) Open in QB64 is not using the correct setting.

## 0.8.9
- Pull Requests
  - PR [#106](https://github.com/QB64Official/vscode/pull/106) Fix hover link dollar signs.
  - PR [#105](https://github.com/QB64Official/vscode/pull/105) hoverProvider link open fix.
  - PR [#104](https://github.com/QB64Official/vscode/pull/104) Added new words that end with $ to helpify for hover help lookups.Added new words that end with $ to helpify for hover help lookups.
- Enchantments
  - Issue [#107](https://github.com/QB64Official/vscode/issues/107) Markdown opens in edit mode when clicking on hovertext
    - The change is only applied to the creation of new settings.json.  To apply this to exiting settings.json add the following snippet.
      "workbench.editorAssociations": {
        "*.md": "vscode.markdown.preview.editor"
      },
  - Issue [#103](https://github.com/QB64Official/vscode/issues/103) Add settings for compiler path and help path (split out)
- Bugs
  - Issue [#61](https://github.com/QB64Official/vscode/issues/61) 0.8.0 VSIX - CTRL+Move mouse doing *weird things*.

## 0.8.8
- Enchantments
  - PR - Document Symbol Enchantments
- Bugs
  - Issue [#100](https://github.com/QB64Official/vscode/issues/100) Version 0.8.8 Highlighting changes

## 0.8.7
- Bugs
  - Issue [#99](https://github.com/QB64Official/vscode/issues/99) ctrl+shift+u and ctrl+shift+l not working
  - Issue [#98](https://github.com/QB64Official/vscode/issues/98) Issue with working path for nested folders - Windows
  - Issue [#97](https://github.com/QB64Official/vscode/issues/97) "Statement cannot be placed between SUB/FUNCTIONs" does not show in Problems
  - Issue [#95](https://github.com/QB64Official/vscode/issues/95) Version 0.8.7 Formatting: Space is getting removed from >-1 
  - Issue [#94](https://github.com/QB64Official/vscode/issues/94) Version 0.8.7 Highlighting changes

## 0.8.6
- Bugs
  - Issue [#93](https://github.com/QB64Official/vscode/issues/93) VSCode starts old binary if build fails
  - Issue [#91](https://github.com/QB64Official/vscode/issues/91) Formatter is removing the space between =.
  - Issue [#90](https://github.com/QB64Official/vscode/issues/90) Formatter doen't work with Declare Library
  - Issue [#88](https://github.com/QB64Official/vscode/issues/88) Formatter removes spaces from $VersionInfo:FileDescription
  - Issue [#87](https://github.com/QB64Official/vscode/issues/87) The formatter removes the space between _delay and .01
  - Issue [#86](https://github.com/QB64Official/vscode/issues/86) **/desktop.ini": true has a missing leading double quote
  - Issue [#85](https://github.com/QB64Official/vscode/issues/85) InKey not "blue"
- Enchantments
  - Issue [#89](https://github.com/QB64Official/vscode/issues/89) Add a task for calling compact (on windows) 

## 0.8.5
- Bugs
  - Issue [#83](https://github.com/QB64Official/vscode/issues/83) Add desktop.ini to the list of files exluded from the exploer Window
  - Issue [#82](https://github.com/QB64Official/vscode/issues/81) Goto Definition (12) does not work with label
  - Issue [#81](https://github.com/QB64Official/vscode/issues/81) Add _direxists to the syntax highlighter
  - Issue [#80](https://github.com/QB64Official/vscode/issues/80) Updated the auto created .gitignore
  - Issue [#79](https://github.com/QB64Official/vscode/issues/79) Add "String expression or variable name required in LEN statement" to Lint
  - Issue [#77](https://github.com/QB64Official/vscode/issues/77) Command is not getting syntax colored  
- Enchantments
  - Issue [#84](https://github.com/QB64Official/vscode/issues/84) Ignore files in .gitignore with no extension
  - Issue [#78](https://github.com/QB64Official/vscode/issues/78) UpperCase constants

## 0.8.4
- Bugs
  - Issue [#75](https://github.com/QB64Official/vscode/issues/75) Function Snippet has a `return`
- Updated the linter to include more error types
- Added more keywords to the syntax highlighter
- Enchantments
  - Issue [#76](https://github.com/QB64Official/vscode/issues/76) Delete Binary after lint

## 0.8.3
- Bugs
  - Issue [#74](https://github.com/QB64Official/vscode/issues/74) The auto created launch.json does not work.
  - Issue [#73](https://github.com/QB64Official/vscode/issues/73) Goto Definition does not work with symbols
  - Issue [#72](https://github.com/QB64Official/vscode/issues/72) The fomatting of FileVersion breaks the compile
- Enchantments
  - Issue [#71](https://github.com/QB64Official/vscode/issues/71) Lint: Add more errors

## 0.8.2
- Bugs
  - Issue [#68](https://github.com/QB64Official/vscode/issues/68) Format: Spaces are added around
- Enchantments
  - Issue [#70](https://github.com/QB64Official/vscode/issues/70) Highlighting add more keyword colors
  - Issue [#69](https://github.com/QB64Official/vscode/issues/69) Format: MetaCommands as mixed Case

## 0.8.1
- Bugs
  - Issue [#67](https://github.com/QB64Official/vscode/issues/67) Help / Hovertext always opens for...next
  - Issue [#66](https://github.com/QB64Official/vscode/issues/66) Decimals points have leading spaces after formatting
  - Issue [#65](https://github.com/QB64Official/vscode/issues/65) Formatting <> is getting formatted as < >

## 0.8.0
- Bugs
  - Issue [#56](https://github.com/QB64Official/vscode/issues/56) Typo in "Decorate|Enable: Hightlight the current row"
- Enchantments
  - Issue [#64](https://github.com/QB64Official/vscode/issues/64) Add an option to run QB64's clean script.
    - Run open the command palete  `ctrl+shift+p`
    - Select `Tasks: Run Task`
    - Select `Clean QB64`
  - Issue [#63](https://github.com/QB64Official/vscode/issues/63) Add the ablity to open complielog.txt
  - Issue [#62](https://github.com/QB64Official/vscode/issues/62) Allow ctrl+shift+b to build current file
    - A tasks.json is created in the .vscode folder with a build task.
    - If you already have a tasks.json you will need to add the build task
  - Issue [#61](https://github.com/QB64Official/vscode/issues/61) Code Formatter
    - Setting to enable/disable `qb64.isFormatEnabled` default value is false.
  - Issue [#60](https://github.com/QB64Official/vscode/issues/60) Lanch.json OSX/Linux - Change for VSCode issue.
  - Issue [#59](https://github.com/QB64Official/vscode/issues/59) Write lint output to the terminal.  
    - A new terminal is not created, but the focus is set to the lint output channel.
    - New setting `qb64.isShowLintChannelEnabled` the default value is true. Set to false to disable the auto showing of the lint channel.
  - Issue [#58](https://github.com/QB64Official/vscode/issues/58) Add setting to enable/disable opening online help
    - The setting name is `isOpenOnLineHelpEnabled`
    - **Note** This will stop "create new wiki page from opening"
  - Issue [#57](https://github.com/QB64Official/vscode/issues/57) Add Keyword Reference
  - Issue [#55](https://github.com/QB64Official/vscode/issues/55) Add Add a setting to disable the hovertext
    - The setting name is `qb64.isHoverTextFileEnabled`
    - Also added `editor.multiCursorModifier": "ctrlCmd"` to the auto created setting.json
  - Issue [#54](https://github.com/QB64Official/vscode/issues/54) Make open include file part of goto definition
  - Issue [#53](https://github.com/QB64Official/vscode/issues/53) Add hovertext for "definition"
  - Issue [#52](https://github.com/QB64Official/vscode/issues/52) Add hovertext to keywords
  
## 0.7.0
  - Bugs  
   - Issue [#49](https://github.com/QB64Official/vscode/issues/49) When $NOPREFIX versions of keywords are in use, F1 for help can't find keywords
   - Issue [#46](https://github.com/QB64Official/vscode/issues/46) Lint doesn't work for new installs
   - Issue [#45](https://github.com/QB64Official/vscode/issues/45) Creating changelog.md does not work on OSX
   - Fixed spelling of isCreateGitIgnoreEnabled in package.json and gitFunctions.ts
   - Fixed the colorbox would not color if there were spaces around the number in the `rgb` commmand
   - Fixed `ERROR: TypeError: Cannot read properties of undefined (reading 'line')` in decoratorFunctions->decorateSingleLine
  - Enchantments    
   - Issue [#51](https://github.com/QB64Official/vscode/issues/51) Restructure project to use providers
   - Issue [#50](https://github.com/QB64Official/vscode/issues/50) Replace ? with Print
     - Replaces `? ` with `print ` on save. When the line starts with `? `        
   - Issue [#48](https://github.com/QB64Official/vscode/issues/48) Open current file in QB64.exe
     - Hot Key `alt+q`
     - Also on the contect menu
   - Issue [#47](https://github.com/QB64Official/vscode/issues/47) Lint doesn't mark DIM: Expected as an error
   - Issue [#44](https://github.com/QB64Official/vscode/issues/44) Goto Usage
     - Follows the standered VS Code `ReferenceProvider` patteren
   - Issue [#16](https://github.com/QB64Official/vscode/issues/16) Add ASCII Chart
     - The ASCII Chart can only be opened from the Command Palette `ctrl+shift+p`
     - After open the Command Palette type ascii chart, then select ascii chart from the list.    
   - Issue [#9](https://github.com/QB64Official/vscode/issues/9) Add "go to definition"
   - Issue [#8](https://github.com/QB64Official/vscode/issues/8) Add help to the context menu
     - Also added defualt landing help location if no keyword is selected.
  - Polish
    - Set the opacity to 0.5 for the active row marker.
    - Added more keywords to the syntax hightlighter

## 0.6.2
  - Bugs
   - Issue [#42](https://github.com/QB64Official/vscode/issues/42) Cannot find module 'vscode-debugadapter'
     - Chanaged the entire packaging system to use webpack
     - In therory can me installed in `Visual Studio Code for the Web`(https://vscode.dev) I have not tested this.
   - Issue [#35](https://github.com/QB64Official/vscode/issues/35) Utilize local QB64 help (markdown) when available
     - Changed the offline help directory to 
       ``` json
        ${installPath}/internal/help
       ```
  - Polish
   - Issue [#43](https://github.com/QB64Official/vscode/issues/43) Add change log to the extension description inside of VS Code
     - The readme.md from the releases folder is copied and renamed.

## 0.6.1
  - Bugs
   - Issue [#35](https://github.com/QB64Official/vscode/issues/35) Utilize local QB64 help (markdown) when available
     - `BREAKING CHANGE` Changed to only have 1 path setting. This setting for the QB64 folder. 
        The path for settings "Path: Full path to the QB64 compiler" and "Help|Path to the off line help files" have been removed.
        There is a new setting "QB64 Install Folder"  the compiler path and the help path are both infered from the install folder.
        To fix the break.  You'll either need to delete the launch.json (recommended) from the .vscode folder with *.bas file or edit the launch.json.
        If you want to manually change the launch.json.  Here's what it needs to look like:
         
         ``` json
         {
           "version": "0.2.0",
           "configurations": [
             {
               "name": "QB64 Build and Run",
               "type": "QB64",
               "request": "launch",
               "command": "${config:qb64.installPath}/qb64.exe -c \"${fileDirname}/${fileBasename}\" -o \"${fileDirname}/${fileBasenameNoExtension}.exe\" -x; start \"${fileDirname}/${fileBasenameNoExtension}.exe\"",
               "terminalName": "QB64",
               "terminalIndex": -1,
               "showTerminal": true,
               "linux": {
                 "command": "${config:qb64.installPath}/qb64 -c '${fileDirname}/${fileBasename}' -o '${fileDirname}/${fileBasenameNoExtension}' -x; ${fileDirname}/${fileBasenameNoExtension}"
               },
               "osx": {
                 "command": "${config:qb64.installPath}qb64 -c '${fileDirname}/${fileBasename}' -o '${fileDirname}/${fileBasenameNoExtension}' -x; ${fileDirname}/${fileBasenameNoExtension}"
               }
             }
           ]
         }
         ```

## 0.6.0
  - Enchantments
  - Issue [#35](https://github.com/QB64Official/vscode/issues/35) Utilize local QB64 help (markdown) when available
   - There are 2 setting that go with this
     - 1 "OffLineHelpPath" this is the path to the markdown files. Leave empty to use online help.
       - If the markdown file is not found the online help will be called.
     - 2 "isOpenInEditModeEnabled" if this is true the markdown file will be opened in edit mode, otherwise it will be opened in preview mode.

## 0.5.3
  - Polish
   - Issue [#41](https://github.com/QB64Official/vscode/issues/41) Highlight current line of code

## 0.5.2
  - Polish
   - Issue [#40](https://github.com/QB64Official/vscode/issues/40) Use updated images for the explorer

## 0.5.1
  - Fixes
   - Issue [#36](https://github.com/QB64Official/vscode/issues/36) Error when building 0.5.0
   - Issue [#37](https://github.com/QB64Official/vscode/issues/37) Open Include Files doesn't always work
  - Polish
   - Issue [#38](https://github.com/QB64Official/vscode/issues/38) Add icon to the explorer view for QB64 files.
   - Issue [#39](https://github.com/QB64Official/vscode/issues/38) Release notes change order.

## 0.5.0
  - Enchantments
   - Set the default language in the settings.json to QB64.
    - If you already have a setting.json in the .vdcode folder it will *not* be changed.
   - Issue [#31](https://github.com/QB64Official/vscode/issues/31) Add diagnostics markings
    - Hot Key (`F12`)
    - Added setting (`Lint the *.bas when saving.`) to enable diagnostic on save, default value: `false`
  - Fixes
   - Issue [#29](https://github.com/QB64Official/vscode/issues/29) Cannot find module '@vscode/debugadapter'
   - Issue [#30](https://github.com/QB64Official/vscode/issues/30) extension.<function name> not found
   - Issue [#32](https://github.com/QB64Official/vscode/issues/32) Change the Publisher Name
   - Issue [#33](https://github.com/QB64Official/vscode/issues/33) Document selector without scheme
   - Issue [#34](https://github.com/QB64Official/vscode/issues/34) Use package @vscode/test-electron
  - Miscellaneous
   - Upated the descriotions for the settings to be easier to find when searching for settings.

## 0.4.5
   - Reworked writting to the output channels
   - Added more error trapping.
   - Fixed Issue #26 - Space in filename (space in folder name in Windows).
   - Added .json-bak to the default gitignore and settings.json
   - Changed the auto backup to only backup *.bas || *.bm || *.bi
   - Defaulted the cwd in launch.json to the directory the *.bas file is in.

## 0.4.4
   - Fixed Issue [#23](https://github.com/QB64Official/vscode/issues/23) F1 (again) the help doesn't open if the cursor is to close to the beginging of the line.

## 0.4.3
   - Added vscode-debugadapter to the devDependencies in the package.json
   - Added 'use strict' to the ts files missing it.
   - Fixed Issue [#3](https://github.com/QB64Official/vscode/issues/3) Opening include containing a subfolder fails.

## 0.4.2
  - Fixed Issue [#22](https://github.com/QB64Official/vscode/issues/22) F2 should not go to the Outline if the active window is the Explorer

## 0.4.1
  - Fixes
    - Aded the the word "not" to `outputChannnel.appendLine('Could find selected keyword');`
    - Fixed the name of gitFunctions.ts

## 0.4.0
  - Enchantments
   - Reworked the creation of the outline to make it faster.
   - Issue [#19](Auto creates a .gitignore)
     - Aded context menu item to the explorer - "Add to .gitignore"
     - Hot Key ctrl+shift+i 
   - Issue [#20](Reworked the F5 (baked in F5 Anywhere and rebranded it QB64)
     - You will need to delete the old automatically launch.json to use this.
   - Issue [#05](Line decorations are set when moving off the line.)
   - Issue [#18](Auto Create back on save.)
     - The files will have the name but the extension will have "-bak" added to it.
     - The files will not show in the explorer view because a setting.json is getting created in the .vscode older to hide them.
     - If you want to see the backup files edit setting.json and set true to false for the files you'd like to see.
     - These files are added to the automatically created .gitignore
  - Fixes
   - Fixed the highlighting of the file part of the include file. (broke in v0.3.0)    
  - Misc
   - Removed unsued exe to *.bas folder

## 0.3.1 08/16/2022
- Fixes 
  - Launch.json support for OSX
  - Launch.json support for Linux
  - TODO not highlighed on "REM" line
  - "REM" line not comment color

## 0.3.0 08/15/2022
- Changed EcmaScript to version 2021
 - Enchantments
  - TODO is highlighed every time it appears in a line, not just the first.
  - Added FIXME and FIXIT to the words that get highlighed like TODO
  - F1 no longer requires a keyword to be selcted.  Just having the cusor on a workd is enough.
  - Changed the coloring of the RGB function to only draw the box around the number. This looks less busy.
  - Added setting "Create the color box in the RGB statement" to enable/disable the colored box in the rgb statement
  - Added setting "Highlight TODO in comments" to enable/disable the TODO highlighting
  - Add more output to the QB64: Help channel
 - Fixes
  - A new "QB64: Decorate" getting created very time the decorator runs.
  - TOOD: getting decorate when it's not a comment.
  - Typeo in the default value for How keywords are fomatted

## 0.2.1 08/11/2022
  - Added Snd* and Gfx* keywords to the sytax higlighter

## 0.2.0 08/11/2022
  - Open Include File (ctrl+shift+o or right click open include file.)

## 0.1.0 08/11/2022
  - Colored Box around (_)rbb(32) commands
  - TODO highlighting in comments
  - F5 to compile and run
  - Sytax highlighting
