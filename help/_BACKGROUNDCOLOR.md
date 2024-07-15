# _BACKGROUNDCOLOR

The **_BACKGROUNDCOLOR** function returns the current background color for an image handle or page.

  

## Syntax

*col~&* = _BACKGROUNDCOLOR [(*imageHandle&*)]
  

## Parameters

* If *imageHandle&* is omitted, it is assumed to be the current write page or image designated by [_DEST](_DEST.md).
* If *imageHandle&* is an invalid handle, an [Invalid handle](Invalid handle.md) error occurs. Check handle values first. Zero designates the current screen.

  

## Description

* Use it to get the current background color to restore it later in a program.
* In legacy [SCREEN](SCREEN.md) modes and in [_NEWIMAGE](_NEWIMAGE.md) 256 colors mode the color attribute/palette index is returned.
* In [_NEWIMAGE](_NEWIMAGE.md) 32-bit mode the [_RGBA32](_RGBA32.md) value (**&H00000000** to **&HFFFFFFFF**) is returend, make sure to store it in an [_UNSIGNED](_UNSIGNED.md) [LONG](LONG.md) variable (as seen in the syntax above with the **~&** suffix), otherwise the blue component may be lost.

  

## Examples

Example
Storing the background color for later use.

``` [SCREEN](SCREEN.md) 0 [COLOR](COLOR.md) 1, 3 'set color 1 as foreground, color 3 as background [CLS](CLS.md) col~& = _BACKGROUNDCOLOR [PRINT](PRINT.md) col~&  
```

``` 3  
```

  

## See also

* [_DEFAULTCOLOR](_DEFAULTCOLOR.md)
* [COLOR](COLOR.md), [_DEST](_DEST.md)
* [SCREEN](SCREEN.md), [SCREEN (function)](SCREEN (function).md) "SCREEN (function)")
* [Color Dialog Box](Color Dialog Box.md)

  
