# Change Log

All notable changes to the "QB64" extension will be documented in this file.

## [Unreleased]

## How version numbers work
  - major.minor.point
  - major release a huge changes  - Exepct for 1; major will go to 1 when the extension released to the market.
  - Bug Fixes

## 0.1.0 08/11/2022
  - Colored Box around (_)rbb(32) commands
  - TODO highlighting in comments
  - F5 to compile and run
  - Sytax highlighting

## 0.2.0 08/11/2022
  - Open Include File (ctrl+shift+o or right click open include file.)

## 0.2.1 08/11/2022
  - Added Snd* and Gfx* keywords to the sytax higlighter

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

## 0.3.1 08/16/2022
- Fixes 
   - Launch.json support for OSX
   - Launch.json support for Linux
   - TODO not highlighed on "REM" line
   - "REM" line not comment color

## 0.4.0
   - Enchantments
    - Reworked the creation of the outline to make it faster.
    - Issue# 19 Auto creates a .gitignore
      - Aded context menu item to the explorer - "Add to .gitignore"
      - Hot Key ctrl+shift+i 
    - Issue# 20 Reworked the F5 (baked in F5 Anywhere and rebranded it QB64)
      - You will need to delete the old automatically launch.json to use this.
    - Issue# 05 Line decorations are set when moving off the line.
    - Issue# 18 Auto Create back on save.
      - The files will have the name but the extension will have "-bak" added to it.
      - The files will not show in the explorer view because a setting.json is getting created in the .vscode older to hide them.
      - If you want to see the backup files edit setting.json and set true to false for the files you'd like to see.
      - These files are added to the automatically created .gitignore
  - Fixes
    - Fixed the highlighting of the file part of the include file. (broke in v0.3.0)    
  - Misc
    - Removed unsued exe to *.bas folder