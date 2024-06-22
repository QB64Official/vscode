**Metacommands** are program wide commands that start with $.

## Legacy metacommands (QBasic/QuickBASIC)

### Syntax

> REM [$INCLUDE]($INCLUDE): '[QB.BI](QB.BI)' 'loads a reference file or library

> REM [$DYNAMIC]($DYNAMIC) 'enables resizing of array dimensions with REDIM

> REM [$STATIC]($STATIC) 'arrays cannot be resized once dimensioned

### Description

* QBasic Metacommands are normally used at the program start and are in effect throughout the program.
* QBasic Metacommands are always prefixed with $ and MUST be commented with an apostrophe or [REM](REM).
* [$INCLUDE]($INCLUDE) is always followed by a colon and the full text code file name is commented on both sides.
* [$DYNAMIC]($DYNAMIC) allows larger arrays that are changeable in size at runtime.
* [$STATIC]($STATIC) makes all arrays unchangeable in size.
* **QBasic metacommands should have their own program line because they are commented.**

## QB64PE metacommands

### Syntax

> [$CHECKING]($CHECKING){OFF|ON} 'disables QB64PE C++ event and error checking (no spaces)

> [$CONSOLE]($CONSOLE) 'creates a QB64PE console window throughout the program

> [$RESIZE]($RESIZE):{ON|OFF} 'determines if re-sizing of the program screen by the user is allowed(no spaces)

> [$SCREENHIDE]($SCREENHIDE) 'hides the QB64PE program window throughout the program

> [$SCREENSHOW]($SCREENSHOW) 'displays the main QB64PE program window

> [$EXEICON]($EXEICON):'iconfile.ico' 'embeds an .ICO file into the final executable (Windows only)

> [$VERSIONINFO]($VERSIONINFO):key=value 'embeds version info metadata into the final executable (Windows only)

> [$IF]($IF)...[$END IF]($END-IF) 'precompiler directive

### Description

* [$INCLUDE]($INCLUDE) can be used at the beginning or at the end of program SUB procedures.
* [$CHECKING]($CHECKING):OFF should only be used with **errorless** code where every CPU cycle counts! Use **ON** to re-enable event checking. Event checking can be turned OFF or ON throughout a program.
* [$CONSOLE]($CONSOLE) creates a console window which can be turned off later with [_CONSOLE](_CONSOLE) OFF.
* [$RESIZE]($RESIZE):ON allows a user to resize the program window. OFF is default.
* [$SCREENHIDE]($SCREENHIDE) hides the QB64PE program window throughout the program until [$SCREENSHOW]($SCREENSHOW) is used.
* [$IF]($IF)...[$END IF]($END-IF) allows selective inclusion of code in the final program.
* **Do not comment out with ' or [REM](REM) QB64PE-specific metacommands.**

## See Also

* [Statement](Statement), [Function (explanatory)](Function-(explanatory))
* [REM](REM)
* [DIM](DIM), [REDIM](REDIM)
* [ON TIMER(n)](ON-TIMER(n))
