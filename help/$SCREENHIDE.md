## $SCREENHIDE
---

### The $SCREENHIDE metacommand can be used to hide the main program window throughout a program.

#### SYNTAX

`$SCREENHIDE`

#### DESCRIPTION
* $SCREENHIDE may be used at the start of a program to hide the main program window when using a console window.
* The [_SCREENHIDE](./_SCREENHIDE.md) statement must be used before [_SCREENSHOW](./_SCREENSHOW.md) can be used in sections of a program.
* QB64 metacommands cannot be commented out with apostrophe or [REM](./REM.md) .


#### EXAMPLES
##### Example: Hiding a program when displaying a message box in Windows.
```vb
$SCREENHIDE
DECLARE DYNAMIC LIBRARY "user32"
 FUNCTION MessageBoxA& (BYVAL hWnd%&, BYVAL lpText%&, BYVAL lpCaption%&, BYVAL uType~&)
END DECLARE
DECLARE DYNAMIC LIBRARY "kernel32"
 SUB ExitProcess (BYVAL uExitCode~&)
END DECLARE
DIM s0 AS STRING
DIM s1 AS STRING
s0 = "Text" + CHR$(0)
s1 = "Caption" + CHR$(0)
ExitProcess MessageBoxA(0, _OFFSET(s0), _OFFSET(s1), 0)
```
  


#### SEE ALSO
* $[CONSOLE](./CONSOLE.md) , $SCREENSHOW
* [_SCREENHIDE](./_SCREENHIDE.md) , [_SCREENSHOW](./_SCREENSHOW.md)
* [_CONSOLE](./_CONSOLE.md)
