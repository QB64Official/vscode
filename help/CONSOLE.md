## _CONSOLE
---

### The _CONSOLE statement can be used to turn a console window ON/OFF.

#### SYNTAX

`_CONSOLE {OFF|ON}`

#### EXAMPLES
##### Example 1: Hiding and displaying a console window. Use _DELAY to place console in front of main program window.
```vb
$CONSOLE
_CONSOLE OFF 'close original console
_DELAY 2
_CONSOLE ON 'place console above program window

_DEST _CONSOLE
INPUT "Enter your name: ", nme$ 'get program input
_CONSOLE OFF 'close console

_DEST 0 'destination program window
PRINT nme$
END
```
  
##### Example 2: _CONSOLETITLE can be used to create a console title, but it must be redone every time the console window is restored once turned off:
```vb
$CONSOLE

_CONSOLETITLE "firstone"
_DELAY 10

_CONSOLE OFF
_DELAY 10

_CONSOLE ON
_CONSOLETITLE "secondone"
```
  


#### SEE ALSO
* $[CONSOLE](./CONSOLE.md) , [_CONSOLETITLE](./_CONSOLETITLE.md)
* $SCREENHIDE , $SCREENSHOW (QB64 Metacommands )
* [_SCREENHIDE](./_SCREENHIDE.md) , [_SCREENSHOW](./_SCREENSHOW.md)
* [_DEST](./_DEST.md) , [_ECHO](./_ECHO.md)
