# _CONSOLE

The _CONSOLE statement can be used to turn a console window ON/OFF.

  

## Syntax

_CONSOLE {OFF|ON}
_DEST _CONSOLE
  

* _CONSOLE OFF or ON must be used after the [$CONSOLE]($CONSOLE.md) [Metacommand](Metacommand.md) has established that a console window is desired.
* _CONSOLE OFF turns the console window off once a console has been established using [$CONSOLE]($CONSOLE.md):ON or ONLY.
* _CONSOLE ON should only be used after the console window has been turned OFF previously.
* [_DEST](_DEST.md) _CONSOLE can be used to send screen output to the console window using QB64 commands such as [PRINT](PRINT.md).
* [_SCREENHIDE](_SCREENHIDE.md) or [_SCREENSHOW](_SCREENSHOW.md) can be used to hide or display the main program window.
* The [$SCREENHIDE]($SCREENHIDE.md) [Metacommand](Metacommand.md) can hide the main program window throughout a program when only the console is used.
* **Note:** Text can be copied partially or totally from console screens in Windows by highlighting and using the title bar menu.

To copy console text output, right click the title bar and select *Edit* for *Mark* to highlight and repeat to *Copy*.
  

## Examples

*Example 1:* Hiding and displaying a console window. Use [_DELAY](_DELAY.md) to place console in front of main program window.

``` [$CONSOLE]($CONSOLE.md) _CONSOLE [OFF](OFF.md) 'close original console [_DELAY](_DELAY.md) 2 _CONSOLE [ON](ON.md) 'place console above program window  [_DEST](_DEST.md) _CONSOLE [INPUT](INPUT.md) "Enter your name: ", nme$ 'get program input _CONSOLE [OFF](OFF.md) 'close console  [_DEST](_DEST.md) 0 'destination program window [PRINT](PRINT.md) nme$ [END](END.md)  
```

*Explanation:* The [destination](destination.md) must be changed with [_DEST](_DEST.md) _CONSOLE to get [INPUT](INPUT.md) from the [$CONSOLE]($CONSOLE.md) screen.

---

*Example 2:* [_CONSOLETITLE](_CONSOLETITLE.md) can be used to create a console title, but it must be redone every time the console window is restored once turned off:

``` [$CONSOLE]($CONSOLE.md)  [_CONSOLETITLE](_CONSOLETITLE.md) "firstone" [_DELAY](_DELAY.md) 10  _CONSOLE [OFF](OFF.md) [_DELAY](_DELAY.md) 10  _CONSOLE [ON](ON.md) [_CONSOLETITLE](_CONSOLETITLE.md) "secondone"  
```

*Note:* Some versions of Windows may display the program path or Administrator: prefix in console title bars.
  

## See also

* [$CONSOLE]($CONSOLE.md), [_CONSOLETITLE](_CONSOLETITLE.md)
* [$SCREENHIDE]($SCREENHIDE.md), [$SCREENSHOW]($SCREENSHOW.md) (QB64 [Metacommands](Metacommands.md))
* [_SCREENHIDE](_SCREENHIDE.md), [_SCREENSHOW](_SCREENSHOW.md)
* [_DEST](_DEST.md), [_ECHO](_ECHO.md)

  
