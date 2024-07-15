# _DESKTOPHEIGHT

The _DESKTOPHEIGHT function returns the height of the users current desktop.

  

## Syntax

*y&* = _DESKTOPHEIGHT
  

## Description

* No parameters are needed for this function.
* This returns the height of the user's desktop, not the size of any screen or window which might be open on that desktop.

  

## Availability

* **QB64 v1.0 and up**
* **QB64-PE all versions**

  

## Examples

``` s& = [_NEWIMAGE](_NEWIMAGE.md)(800, 600, 256) [SCREEN](SCREEN.md) s& [PRINT](PRINT.md) [_DESKTOPWIDTH](_DESKTOPWIDTH.md), _DESKTOPHEIGHT [PRINT](PRINT.md) [_WIDTH](_WIDTH.md) "WIDTH (function)"), [_HEIGHT](_HEIGHT.md)  
```

*Explanation:* This will print the size of the user desktop (for example *1920, 1080* for a standard hdmi monitor), and then the size of the current [screen](screen.md) (800, 600).
  

## See also

* [_HEIGHT](_HEIGHT.md), [_DESKTOPWIDTH](_DESKTOPWIDTH.md)
* [_WIDTH](_WIDTH.md), [_SCREENIMAGE](_SCREENIMAGE.md)

  
