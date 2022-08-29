# Change Log

All notable changes to the "QB64" extension will be documented in this file.

## [Unreleased]

## How version numbers work
  - major.minor.point
  - Major release: a huge changes  - Exepct for 1; major will go to 1 when the extension released to the market.
  - Minor: new functionality
  - Point: Bug Fixes|Polish

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
    - Aded the the word "not" to ```outputChannnel.appendLine('Could find selected keyword');```
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
