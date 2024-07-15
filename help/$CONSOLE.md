# $CONSOLE

The $CONSOLE [Metacommand](Metacommand.md) creates a console window that can be used throughout a QB64 program module.

  

## Syntax

$CONSOLE[:ONLY]
  

## Description

* [_CONSOLE](_CONSOLE.md) **ON** or **OFF** may be used to show or hide the console window at run time.
* The **:ONLY** option can be used when only a console window is desired without a program window.
* [_DEST](_DEST.md) [_CONSOLE](_CONSOLE.md) may be used to send screen output to the console window.
* [_SCREENHIDE](_SCREENHIDE.md) and [_SCREENSHOW](_SCREENSHOW.md) can be used to hide or show the main program window.
* [_DELAY](_DELAY.md) or [SLEEP](SLEEP.md) can be used to allow the console window to be set in front of the main program window.
* **QB64 [Metacommands](Metacommands.md) are not commented out with ' or REM, unlike QuickBASIC metacommands**
* Change the title of the $CONSOLE windows created using [_CONSOLETITLE](_CONSOLETITLE.md)
* **Note:** Text can be copied partially or totally from console screens in Windows by highlighting and using the title bar menu.

To copy console text output, right click the title bar and select *Edit* for *Mark* to highlight and repeat to *Copy*
  

## Examples

*Example 1:* Hiding and displaying a console window. Use [_DELAY](_DELAY.md) to place console in front of main program window.

``` $CONSOLE [_DELAY](_DELAY.md) 4  [_CONSOLE](_CONSOLE.md) [OFF](OFF.md) [_DELAY](_DELAY.md) 4 [_CONSOLE](_CONSOLE.md) [ON](ON.md)  [_DEST](_DEST.md) [_CONSOLE](_CONSOLE.md) [PRINT](PRINT.md) "Close this console window or click main window and press a key!"  
```

---

*Example 2:* How to use a Console window to copy screen output using the *Edit* menu by right clicking the console title bar.

``` $CONSOLE [_DEST](_DEST.md) [_CONSOLE](_CONSOLE.md)  c&& = -1: d& = -1: e% = -1: f%% = -1 hx$ = [HEX$](HEX$.md)(f%%) [PRINT](PRINT.md) "Max hex _BYTE = "; hx$; " with"; [LEN](LEN.md)(hx$); "digits ="; [VAL](VAL.md)("&H" + hx$) hx$ = [HEX$](HEX$.md)(e%) [PRINT](PRINT.md) "Max hex INTEGER = "; hx$; " with"; [LEN](LEN.md)(hx$); "digits ="; [VAL](VAL.md)("&H" + hx$) hx$ = [HEX$](HEX$.md)(d&) [PRINT](PRINT.md) "Max hex LONG = "; hx$; " with"; [LEN](LEN.md)(hx$); "digits ="; [VAL](VAL.md)("&H" + hx$) hx$ = [HEX$](HEX$.md)(c&&) [PRINT](PRINT.md) "Max hex _INTEGER64 = "; hx$; " with"; [LEN](LEN.md)(hx$); "digits ="; [VAL](VAL.md)("&H" + hx$) hx$ = [HEX$](HEX$.md)(9223372036854775807) [PRINT](PRINT.md) "Max _INTEGER64 value = "; hx$; " with"; [LEN](LEN.md)(hx$); "digits" hx$ = [HEX$](HEX$.md)(-9223372036854775808) [PRINT](PRINT.md) "Min _INTEGER64 value = "; hx$; " with"; [LEN](LEN.md)(hx$); "digits"  
```

``` Max hex _BYTE = FF with 2 digits = 255 Max hex INTEGER = FFFF with 4 digits = 65535 Max hex LONG = FFFFFFFF with 8 digits = 4294967295 Max hex _INTEGER64 = FFFFFFFFFFFFFFFF with 16 digits =-1 Max _INTEGER64 value = 7FFFFFFFFFFFFFFF with 16 digits Min _INTEGER64 value = 8000000000000000 with 16 digits  
```

*Console:* Right click and select *Edit* > *Select All* (mouse highlight after) then hit Enter or select *Edit* > *Copy* to the clipboard.

``` Max hex _BYTE = FF with 2 digits = 255 Max hex INTEGER = FFFF with 4 digits = 65535 Max hex LONG = FFFFFFFF with 8 digits = 4294967295 Max hex _INTEGER64 = FFFFFFFFFFFFFFFF with 16 digits =-1  
```

*Copied text:* The above text was copied after *Select All* was selected and the smaller area was re-highlighted with the mouse.
  

## See also

* [_CLIPBOARD$ (function)](_CLIPBOARD$ (function).md) "CLIPBOARD$ (function)"), [_CLIPBOARD$](_CLIPBOARD$.md) (statement)
* [_CONSOLE](_CONSOLE.md), [_ECHO](_ECHO.md)
* [$SCREENHIDE]($SCREENHIDE.md), [$SCREENSHOW]($SCREENSHOW.md) (QB64 [Metacommands](Metacommands.md))
* [_SCREENHIDE](_SCREENHIDE.md), [_SCREENSHOW](_SCREENSHOW.md)
* [C Console Library](C Console Library.md)

  
