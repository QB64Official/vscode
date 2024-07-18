## _SCREENY
---

### The _SCREENY function returns the current row pixel coordinate of the program window on the desktop.

#### SYNTAX

`positionY& = _SCREENY`

#### DESCRIPTION
* Function returns the current program window's upper left corner row position on the desktop.
* Use [_DESKTOPWIDTH](./_DESKTOPWIDTH.md) and [_DESKTOPHEIGHT](./_DESKTOPHEIGHT.md) to find the current user's Windows desktop resolution to adjust the position with [_SCREENMOVE](./_SCREENMOVE.md) .
* Keyword not supported in Linux or macOS versions


#### EXAMPLES
##### Example: Clicks and opens program window header menu:
```vb
_SCREENMOVE _MIDDLE
_SCREENCLICK _SCREENX + 10, _SCREENY + 10
PRINT "Hello window!"
```
  


#### SEE ALSO
* [_SCREENX](./_SCREENX.md)
* [_SCREENIMAGE](./_SCREENIMAGE.md)
* [_SCREENCLICK](./_SCREENCLICK.md)
* [_SCREENPRINT](./_SCREENPRINT.md)
* [_SCREENMOVE](./_SCREENMOVE.md)
