# _HEIGHT

The _HEIGHT function returns the height of an image handle or of the current write page.

  

## Syntax

*columns&* = _HEIGHT[(*imageHandle&*)]
  

## Description

* If *imageHandle&* is omitted, it's assumed to be the handle of the current [SCREEN](SCREEN.md) or write page.
* To get the height of the current program [screen](screen.md) window use zero for the handle value or nothing: *lines&* = _HEIGHT(0) *or* *lines&* = _HEIGHT
* If the image specified by *imageHandle&* is in text only([SCREEN](SCREEN.md) 0) mode, the number of lines of rows of characters are returned.
* If the image specified by *imageHandle&* is in graphics mode, the number rows of pixels is returned.
* If *imageHandle&* is an invalid handle, then an [invalid handle error](invalid handle error.md) is returned.
* The last visible pixel coordinate of a program [screen](screen.md) is **_HEIGHT - 1**.

  

## See also

* [_WIDTH (function)](_WIDTH (function).md) "WIDTH (function)"), [_LOADIMAGE](_LOADIMAGE.md), [_NEWIMAGE](_NEWIMAGE.md)
* [Bitmaps](Bitmaps.md)

  
