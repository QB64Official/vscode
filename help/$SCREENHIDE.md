# $SCREENHIDE

The $SCREENHIDE [metacommand](metacommand.md) can be used to hide the main program window throughout a program.

  

## Syntax

$SCREENHIDE
  

## Description

* $SCREENHIDE may be used at the start of a program to hide the main program window when using a [console](console.md) window.
* The [_SCREENHIDE](_SCREENHIDE.md) statement must be used before [_SCREENSHOW](_SCREENSHOW.md) can be used in sections of a program.
* **QB64 [metacommands](metacommands.md) cannot be commented out with [apostrophe](apostrophe.md) or [REM](REM.md)**.

  

## Examples

*Example:* Hiding a program when displaying a message box in Windows.

``` $SCREENHIDE [DECLARE DYNAMIC LIBRARY](DECLARE DYNAMIC LIBRARY.md) "user32"   [FUNCTION](FUNCTION.md) MessageBoxA& ([BYVAL](BYVAL.md) hWnd%&, [BYVAL](BYVAL.md) lpText%&, [BYVAL](BYVAL.md) lpCaption%&, [BYVAL](BYVAL.md) uType~&) [END DECLARE](END DECLARE.md) [DECLARE DYNAMIC LIBRARY](DECLARE DYNAMIC LIBRARY.md) "kernel32"   [SUB](SUB.md) ExitProcess ([BYVAL](BYVAL.md) uExitCode~&) [END DECLARE](END DECLARE.md) [DIM](DIM.md) s0 [AS](AS.md) [STRING](STRING.md) [DIM](DIM.md) s1 [AS](AS.md) [STRING](STRING.md) s0 = "Text" + [CHR$](CHR$.md)(0) s1 = "Caption" + [CHR$](CHR$.md)(0) ExitProcess MessageBoxA(0, [_OFFSET](_OFFSET.md) "OFFSET (function)")(s0), [_OFFSET](_OFFSET.md) "OFFSET (function)")(s1), 0)  
```

  

## See also

* [$CONSOLE]($CONSOLE.md), [$SCREENSHOW]($SCREENSHOW.md)
* [_SCREENHIDE](_SCREENHIDE.md), [_SCREENSHOW](_SCREENSHOW.md)
* [_CONSOLE](_CONSOLE.md)

  
