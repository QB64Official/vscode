## $CONSOLE
---

### The $CONSOLE Metacommand creates a console window that can be used throughout a QB64 program module.

#### SYNTAX

`$CONSOLE [:ONLY]`

#### DESCRIPTION
* [_CONSOLE](./_CONSOLE.md) [ON](./ON.md) or [OFF](./OFF.md) may be used to show or hide the console window at run time.
* The :[ONLY](./ONLY.md) option can be used when only a console window is desired without a program window.
* [_DEST](./_DEST.md) [_CONSOLE](./_CONSOLE.md) may be used to send screen output to the console window.
* [_SCREENHIDE](./_SCREENHIDE.md) and [_SCREENSHOW](./_SCREENSHOW.md) can be used to hide or show the main program window.
* [_DELAY](./_DELAY.md) or [SLEEP](./SLEEP.md) can be used to allow the console window to be set in front of the main program window.
* QB64 Metacommands are not commented out with ' or [REM](./REM.md), unlike QuickBASIC metacommands
* Change the title of the $[CONSOLE](./CONSOLE.md) windows created using [_CONSOLETITLE](./_CONSOLETITLE.md)
* Note: Text can be copied partially or totally from console screens in Windows by highlighting and using the title bar menu.


#### EXAMPLES
##### Example 1: Hiding and displaying a console window. Use _DELAY to place console in front of main program window.
```vb
$CONSOLE
_DELAY 4

_CONSOLE OFF
_DELAY 4
_CONSOLE ON

_DEST _CONSOLE
PRINT "Close this console window or click main window and press a key!"
```
  
##### Example 2: How to use a Console window to copy screen output using the Edit menu by right clicking the console title bar.
```vb
$CONSOLE
_DEST _CONSOLE

c&& = -1: d& = -1: e% = -1: f%% = -1
hx$ = HEX$(f%%)
PRINT "Max hex _BYTE = "; hx$; " with"; LEN(hx$); "digits ="; VAL("&H" + hx$)
hx$ = HEX$(e%)
PRINT "Max hex INTEGER = "; hx$; " with"; LEN(hx$); "digits ="; VAL("&H" + hx$)
hx$ = HEX$(d&)
PRINT "Max hex LONG = "; hx$; " with"; LEN(hx$); "digits ="; VAL("&H" + hx$)
hx$ = HEX$(c&&)
PRINT "Max hex _INTEGER64 = "; hx$; " with"; LEN(hx$); "digits ="; VAL("&H" + hx$)
hx$ = HEX$(9223372036854775807)
PRINT "Max _INTEGER64 value = "; hx$; " with"; LEN(hx$); "digits"
hx$ = HEX$(-9223372036854775808)
PRINT "Min _INTEGER64 value = "; hx$; " with"; LEN(hx$); "digits"
```
  
```vb
Max hex _BYTE = FF with 2 digits = 255
Max hex INTEGER = FFFF with 4 digits = 65535
Max hex LONG = FFFFFFFF with 8 digits = 4294967295
Max hex _INTEGER64 = FFFFFFFFFFFFFFFF with 16 digits =-1
Max _INTEGER64 value = 7FFFFFFFFFFFFFFF with 16 digits
Min _INTEGER64 value = 8000000000000000 with 16 digits
```
  
```vb
Max hex _BYTE = FF with 2 digits = 255
Max hex INTEGER = FFFF with 4 digits = 65535
Max hex LONG = FFFFFFFF with 8 digits = 4294967295
Max hex _INTEGER64 = FFFFFFFFFFFFFFFF with 16 digits =-1
```
  


#### SEE ALSO
* _CLIPBOARD$ (function) , _CLIPBOARD$ (statement)
* [_CONSOLE](./_CONSOLE.md) , [_ECHO](./_ECHO.md)
* $SCREENHIDE , $SCREENSHOW (QB64 Metacommands )
* [_SCREENHIDE](./_SCREENHIDE.md) , [_SCREENSHOW](./_SCREENSHOW.md)
* C Console Library
