## $SCREENSHOW
---

### The $SCREENSHOW metacommand can be used to display the main program window throughout the program.

#### SYNTAX

`$SCREENSHOW`

#### DESCRIPTION
* The metacommand is intended to be used in a modular program when a screen surface is necessary in one or more modules.
* $SCREENSHOW can only be used after $SCREENHIDE or [_SCREENHIDE](./_SCREENHIDE.md) have been used in another program module.
* If $SCREENHIDE and then $SCREENSHOW are used in the same program module the window will not be hidden.
* QB64 metacommands cannot be commented out with apostrophe or [REM](./REM.md) .


#### SEE ALSO
* $[CONSOLE](./CONSOLE.md) , $SCREENHIDE (QB64 Metacommands )
* [_SCREENHIDE](./_SCREENHIDE.md) , [_SCREENSHOW](./_SCREENSHOW.md)
* [_CONSOLE](./_CONSOLE.md)
