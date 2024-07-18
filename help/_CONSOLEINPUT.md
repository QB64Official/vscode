## _CONSOLEINPUT
---

### The _CONSOLEINPUT function is used to monitor any new mouse or keyboard input coming from a $CONSOLE window. It must be called in order for _CINP to return valid values. Windows-only.

#### SYNTAX

`infoExists%% = _CONSOLEINPUT`

#### DESCRIPTION
* Returns 1 if new keyboard information is available, 2 if mouse information is available, otherwise it returns 0.
* Must be called before reading any of the other mouse functions and before reading [_CINP](./_CINP.md) .
* To clear all previous input data, read [_CONSOLEINPUT](./_CONSOLEINPUT.md) in a loop until it returns 0.
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
* [_CINP](./_CINP.md) , Scan Codes
* [_MOUSEX](./_MOUSEX.md) , [_MOUSEY](./_MOUSEY.md) , [_MOUSEBUTTON](./_MOUSEBUTTON.md) , [_MOUSEWHEEL](./_MOUSEWHEEL.md)
