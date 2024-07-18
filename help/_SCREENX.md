## _SCREENX
---

### The _SCREENX function returns the current column pixel coordinate of the program window on the desktop.

#### SYNTAX

`positionX& = _SCREENX`

#### DESCRIPTION
* Function returns the current program window's upper left corner column position on the desktop.
* Use [_DESKTOPWIDTH](./_DESKTOPWIDTH.md) and [_DESKTOPHEIGHT](./_DESKTOPHEIGHT.md) to find the current Windows desktop resolution to adjust the position with [_SCREENMOVE](./_SCREENMOVE.md) .
* Keyword not supported in Linux or macOS versions


#### EXAMPLES
##### Example: Clicks and opens program window header menu:
```vb
_SCREENMOVE _MIDDLE
_SCREENCLICK _SCREENX + 10, _SCREENY + 10
PRINT "Hello window!"
```
  


#### SEE ALSO
* [_SCREENY](./_SCREENY.md)
* [_SCREENIMAGE](./_SCREENIMAGE.md)
* [_SCREENCLICK](./_SCREENCLICK.md)
* [_SCREENPRINT](./_SCREENPRINT.md)
* [_SCREENMOVE](./_SCREENMOVE.md)
