## _CINP
---

### The _CINP function returns keyboard key press codes from a $CONSOLE window. Windows-only.

#### SYNTAX

`keycode& = _CINP`

#### DESCRIPTION
* Return values are the same as the ones for [INP](./INP.md) when used to read keyboard input. See table below.
* Negative values returned indicate that a key was released or a lock function key has been turned off.
* Keyword not supported in Linux or macOS versions


#### EXAMPLES
##### Example 1: Reading individual key strokes from a console window (Windows).
```vb
$CONSOLE:ONLY
_DEST _CONSOLE: _SOURCE _CONSOLE

PRINT "Press any key, and I'll give you the scan code for it.  <ESC> quits the demo."
PRINT
PRINT
DO
   x = _CONSOLEINPUT
   IF x = 1 THEN 'read only keyboard input ( = 1)
       c = _CINP
       PRINT c;
   END IF
LOOP UNTIL c = 1
END
```
  


#### SEE ALSO
* $[CONSOLE](./CONSOLE.md) , [_CONSOLE](./_CONSOLE.md)
* [_CONSOLEINPUT](./_CONSOLEINPUT.md)
* [_MOUSEX](./_MOUSEX.md) , [_MOUSEY](./_MOUSEY.md) , [_MOUSEBUTTON](./_MOUSEBUTTON.md) , [_MOUSEWHEEL](./_MOUSEWHEEL.md)
