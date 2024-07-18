## _SCREENEXISTS
---

### The _SCREENEXISTS function returns true (-1) once a screen has been created.

#### SYNTAX

`screenReady%% = _SCREENEXISTS`

#### DESCRIPTION
* Function returns true (-1) once a program screen is available to use or change.
* Can be used to avoid program errors because a screen was not ready for input or alterations.
	* Use before [_TITLE](./_TITLE.md) , [_SCREENMOVE](./_SCREENMOVE.md) and other functions that require the output window to have been created.


#### EXAMPLES
```vb
SCREEN 12
DO: _LIMIT 10: LOOP UNTIL _SCREENEXISTS
_TITLE "My Title"
```
  


#### SEE ALSO
* [_FULLSCREEN](./_FULLSCREEN.md)
* [_SCREENIMAGE](./_SCREENIMAGE.md)
* $[CONSOLE](./CONSOLE.md)
* $RESIZE
