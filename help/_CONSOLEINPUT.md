# _CONSOLEINPUT

The _CONSOLEINPUT function is used to monitor any new mouse or keyboard input coming from a $CONSOLE window. It must be called in order for [_CINP](_CINP.md) to return valid values. Windows-only.

  

## Syntax

*infoExists%%* = _CONSOLEINPUT
  

## Description

* Returns 1 if new keyboard information is available, 2 if mouse information is available, otherwise it returns 0.
* Must be called before reading any of the other mouse functions and before reading [_CINP](_CINP.md).
* To clear all previous input data, read _CONSOLEINPUT in a loop until it returns 0.
* **[Keyword not supported in Linux or macOS versions](Keyword not supported in Linux or macOS versions.md)**

  

## Examples

*Example 1:* Reading individual key strokes from a console window (Windows).

``` [$CONSOLE]($CONSOLE.md):[ONLY](ONLY.md) [_DEST](_DEST.md) [_CONSOLE](_CONSOLE.md): [_SOURCE](_SOURCE.md) [_CONSOLE](_CONSOLE.md)  [PRINT](PRINT.md) "Press any key, and I'll give you the scan code for it.  <ESC> quits the demo." [PRINT](PRINT.md) [PRINT](PRINT.md) [DO](DO.md)     x = _CONSOLEINPUT     [IF](IF.md) x = 1 [THEN](THEN.md) 'read only keyboard input ( = 1)         c = [_CINP](_CINP.md)         [PRINT](PRINT.md) c;     [END IF](END IF.md) [LOOP UNTIL](LOOP UNTIL.md) c = 1 [END](END.md)  
```

  

## See also

* [$CONSOLE]($CONSOLE.md), [_CONSOLE](_CONSOLE.md)
* [_CINP](_CINP.md), [Scan Codes](Scan Codes.md)
* [_MOUSEX](_MOUSEX.md), [_MOUSEY](_MOUSEY.md), [_MOUSEBUTTON](_MOUSEBUTTON.md), [_MOUSEWHEEL](_MOUSEWHEEL.md)

  
