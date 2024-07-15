# WIDTH

The **WIDTH** statement changes the text dimensions of certain **SCREEN** modes or devices.

  

## Syntax

For SCREEN
* **WIDTH** [*columns%*] [,*rows%*]

For CONSOLE (Windows Console Only)
* **WIDTH** [*columns%*] [,*rows%*] [,*buffer_columns%*] [,*buffer_rows%*]

For Files
* **WIDTH** *file_number | device*, *columnwidth%*

  

## Parameters

* When parameters are not specified, columns defaults to 80 with 25 (30 in [SCREEN](SCREEN.md) 11 or 12) rows.

  

## Description

* **WIDTH** should be used after a program [SCREEN](SCREEN.md) statement. It does not affect screen graphics or graphic coordinates.
* Affects SCREEN 0 Window size and alters the text block size of each screen mode listed in QBasic:

* SCREEN 0 can use 80 or 40 columns and 25, 43 or 50 rows. Default is **WIDTH** 80, 25.
* SCREEN 9 can use 80 columns and 25 or 43(not supported on many monitors) rows. Default **WIDTH** 80, 25 fullscreen.
* SCREEN 10 can use 80 columns and 25 or 43 rows. Default is **WIDTH** 80, 25 fullscreen.
* SCREEN 11 and 12 can use 80 columns and 30 or 60 rows. Default is **WIDTH** 80, 30 fullscreen.

* **QB64** can alter all [SCREEN](SCREEN.md) mode widths and heights which may also affect text or [_FONT](_FONT.md) block sizes.
* If a [$CONSOLE]($CONSOLE.md) window is active and you set [_DEST](_DEST.md) [_CONSOLE](_CONSOLE.md), **WIDTH** will affect the console output window size (Windows only), with the last two optional parameters setting the buffer size for the console. (For example, you can set a console to be 80 characters x 25 lines for the display, with a buffer size of 300 characters and 100 lines, which allows you to display that much information and navigate the visible display with the scroll bars.)

Note
* **WIDTH** changes may change screen color settings in QBasic. Use [PALETTE](PALETTE.md) to reset to default colors.
* **WIDTH LPRINT** is not supported in QB64.

  

## Examples

Example 1
* Showing the use of the buffer parameters for [$CONSOLE]($CONSOLE.md) usage.
* The program creates more output than fits to the display, but the buffer preserves the output and you can scroll back and forth.

``` [$CONSOLE:ONLY]($CONSOLE:ONLY.md) WIDTH 80, 25, 300, 100 [CLS](CLS.md) [FOR](FOR.md) i = 1 [TO](TO.md) 97     [PRINT](PRINT.md) i [NEXT](NEXT.md) [PRINT](PRINT.md) [STRING$](STRING$.md)(100, "0") + [STRING$](STRING$.md)(100, "1") + [STRING$](STRING$.md)(100, "2") 'print the 100's placeholders [FOR](FOR.md) j = 1 [TO](TO.md) 3     [FOR](FOR.md) i = 0 [TO](TO.md) 9         [PRINT](PRINT.md) [STRING$](STRING$.md)(10, [_TRIM$](_TRIM$.md)([STR$](STR$.md)(i))); 'print the 10's placeholders     [NEXT](NEXT.md) [NEXT](NEXT.md)  [FOR](FOR.md) j = 1 [TO](TO.md) 30     [FOR](FOR.md) i = 0 [TO](TO.md) 9         [PRINT](PRINT.md) [_TRIM$](_TRIM$.md)([STR$](STR$.md)(i)); 'print the 1's placeholders.     [NEXT](NEXT.md) [NEXT](NEXT.md)  [SLEEP](SLEEP.md)  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [SCREEN](SCREEN.md), [COLOR](COLOR.md), [OUT](OUT.md)
* [_PRINTWIDTH](_PRINTWIDTH.md)
* [_WIDTH (function)](_WIDTH (function).md) "WIDTH (function)"), [_HEIGHT](_HEIGHT.md)
* [_FONT](_FONT.md), [_FONTWIDTH](_FONTWIDTH.md), [_FONTHEIGHT](_FONTHEIGHT.md)

  
