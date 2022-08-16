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
 # Enchantments
  - TODO is highlighed every time it appears in a line, not just the first.
  - Added FIXME and FIXIT to the words that get highlighed like TODO
  - F1 no longer requires a keyword to be selcted.  Just having the cusor on a workd is enough.
  - Changed the coloring of the RGB function to only draw the box around the number. This looks less busy.
  - Added setting "Create the color box in the RGB statement" to enable/disable the colored box in the rgb statement
  - Added setting "Highlight TODO in comments" to enable/disable the TODO highlighting
  - Add more output to the QB64: Help channel
 # Fixes
  - A new "QB64: Decorate" getting created very time the decorator runs.
  - TOOD: getting decorate when it's not a comment.
  - Typeo in the default value for How keywords are fomatted

## 0.3.1 08/16/2022
  # Fixes 
  - Launch.json support for OSX
  - Launch.json support for Linux
  - TODO not highlighed on "REM" line
  - "REM" line not comment color