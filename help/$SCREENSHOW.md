# $SCREENSHOW

The $SCREENSHOW [metacommand](metacommand.md) can be used to display the main program window throughout the program.

  

## Syntax

$SCREENSHOW
  

## Description

* The metacommand is intended to be used in a modular program when a screen surface is necessary in one or more modules.
* $SCREENSHOW can only be used after [$SCREENHIDE]($SCREENHIDE.md) or [_SCREENHIDE](_SCREENHIDE.md) have been used in another program module.
* If [$SCREENHIDE]($SCREENHIDE.md) and then $SCREENSHOW are used in the same program module the window will not be hidden.
* **QB64 [metacommands](metacommands.md) cannot be commented out with [apostrophe](apostrophe.md) or [REM](REM.md).**

  

## See also

* [$CONSOLE]($CONSOLE.md), [$SCREENHIDE]($SCREENHIDE.md) (QB64 [Metacommands](Metacommands.md))
* [_SCREENHIDE](_SCREENHIDE.md), [_SCREENSHOW](_SCREENSHOW.md)
* [_CONSOLE](_CONSOLE.md)

  
