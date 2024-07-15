# _DEFAULTCOLOR

The **_DEFAULTCOLOR** function returns the current default (text/drawing) color for an image handle or page.

  

## Syntax

*col~&* = _DEFAULTCOLOR [(*imageHandle&*)]
  

## Parameters

* If *imageHandle&* is omitted, it is assumed to be the current write page or image designated by [_DEST](_DEST.md).
* If *imageHandle&* is an invalid handle, an [Invalid handle](Invalid handle.md) error occurs. Check handle values first. Zero designates the current screen.

  

## Description

* Use it to get the current default (foreground) color to restore it later in a program.
* In legacy [SCREEN](SCREEN.md) modes and in [_NEWIMAGE](_NEWIMAGE.md) 256 colors mode the color attribute/palette index is returned.
* In [_NEWIMAGE](_NEWIMAGE.md) 32-bit mode the [_RGBA32](_RGBA32.md) value (**&H00000000** to **&HFFFFFFFF**) is returend, make sure to store it in an [_UNSIGNED](_UNSIGNED.md) [LONG](LONG.md) variable (as seen in the syntax above with the **~&** suffix), otherwise the blue component may be lost.

  

## Examples

Example
Storing the default color for later use. The default color is the color set as foreground.

``` [SCREEN](SCREEN.md) 0 [COLOR](COLOR.md) 4, 7 'set color 4 as foreground, color 7 as background [CLS](CLS.md) col~& = _DEFAULTCOLOR [PRINT](PRINT.md) col~&  
```

``` 4  
```

  

## See also

* [_BACKGROUNDCOLOR](_BACKGROUNDCOLOR.md)
* [COLOR](COLOR.md), [_DEST](_DEST.md)
* [SCREEN](SCREEN.md), [SCREEN (function)](SCREEN (function).md) "SCREEN (function)")
* [Color Dialog Box](Color Dialog Box.md)

  
