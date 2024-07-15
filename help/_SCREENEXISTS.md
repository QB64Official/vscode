# _SCREENEXISTS

The _SCREENEXISTS function returns true (-1) once a screen has been created.

  

## Syntax

*screenReady%%* = _SCREENEXISTS
  

## Description

* Function returns true (-1) once a program screen is available to use or change.
* Can be used to avoid program errors because a screen was not ready for input or alterations.
	+ Use before [_TITLE](_TITLE.md), [_SCREENMOVE](_SCREENMOVE.md) and other functions that require the output window to have been created.

  

## Examples

Example
Waiting in a loop until the screen exists to add the title. The [_LIMIT](_LIMIT.md) prevents the loop from using all CPU time while waiting.

``` [SCREEN](SCREEN.md) 12 [DO](DO.md): [_LIMIT](_LIMIT.md) 10: [LOOP](LOOP.md) [UNTIL](UNTIL.md) _SCREENEXISTS [_TITLE](_TITLE.md) "My Title"  
```

  

## See also

* [_FULLSCREEN](_FULLSCREEN.md)
* [_SCREENIMAGE](_SCREENIMAGE.md)
* [$CONSOLE]($CONSOLE.md)
* [$RESIZE]($RESIZE.md)

  
