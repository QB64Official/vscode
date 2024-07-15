# _SCREENY

The _SCREENY function returns the current row pixel coordinate of the program window on the desktop.

  

## Syntax

*positionY&* = _SCREENY
  

## Description

* Function returns the current program window's upper left corner row position on the desktop.
* Use [_DESKTOPWIDTH](_DESKTOPWIDTH.md) and [_DESKTOPHEIGHT](_DESKTOPHEIGHT.md) to find the current user's Windows desktop resolution to adjust the position with [_SCREENMOVE](_SCREENMOVE.md).
* **[Keyword not supported in Linux or macOS versions](Keyword not supported in Linux or macOS versions.md)**

  

## Examples

*Example:* Clicks and opens program window header menu:

``` [_SCREENMOVE](_SCREENMOVE.md) [_MIDDLE](_MIDDLE.md) [_SCREENCLICK](_SCREENCLICK.md) [_SCREENX](_SCREENX.md) + 10, _SCREENY + 10 [PRINT](PRINT.md) "Hello window!"  
```

  

## See also

* [_SCREENX](_SCREENX.md)
* [_SCREENIMAGE](_SCREENIMAGE.md)
* [_SCREENCLICK](_SCREENCLICK.md)
* [_SCREENPRINT](_SCREENPRINT.md)
* [_SCREENMOVE](_SCREENMOVE.md)

  
