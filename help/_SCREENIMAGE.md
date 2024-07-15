# _SCREENIMAGE

The _SCREENIMAGE function stores the current desktop image or a portion of it and returns an image handle.

  

## Syntax

*imageHandle&* = _SCREENIMAGE[(*column1*, *row1*, *column2*, *row2*)]
  

## Description

* *imageHandle&* is the handle to the new image in memory that will contain the desktop screenshot.
* The optional screen *column* and *row* positions can be used to get only a portion of the desktop image.
* The desktop image or partial image is always a 32-bit image.
* The current screen resolution or width-to-height aspect ratio can be obtained with [_DESKTOPWIDTH](_DESKTOPWIDTH.md) and [_DESKTOPHEIGHT](_DESKTOPHEIGHT.md).
* Can be used to take screenshots of the desktop or used with [_PRINTIMAGE](_PRINTIMAGE.md) to print them.
* It is important to free unused or uneeded image handles with [_FREEIMAGE](_FREEIMAGE.md) to prevent memory overflow errors.
* **[Keyword not supported in Linux or macOS versions](Keyword not supported in Linux or macOS versions.md)**

  

## Examples

*Example:* Determining the present screen resolution of user's PC for a screensaver program.

```  desktop& = _SCREENIMAGE  MaxScreenX& = [_WIDTH](_WIDTH.md) "WIDTH (function)")(desktop&)  MaxScreenY& = [_HEIGHT](_HEIGHT.md)(desktop&)  [_FREEIMAGE](_FREEIMAGE.md) desktop& 'free image after measuring screen(it is not displayed)  [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(MaxScreenX&, MaxScreenY&, 256) 'program window is sized to fit  [_SCREENMOVE](_SCREENMOVE.md) _MIDDLE  
```

### Sample code to save images to disk

* [SaveImage SUB](SaveImage SUB.md)
* [Program ScreenShots](Program ScreenShots.md) (member-contributed program for legacy screen modes)
* [ThirtyTwoBit SUB](ThirtyTwoBit SUB.md)
* [SaveIcon32](SaveIcon32.md)

  

## See also

* [_SCREENCLICK](_SCREENCLICK.md), [_SCREENPRINT](_SCREENPRINT.md)
* [_SCREENMOVE](_SCREENMOVE.md), [_SCREENX](_SCREENX.md), [_SCREENY](_SCREENY.md)
* [_WIDTH](_WIDTH.md) "WIDTH (function)"), [_HEIGHT](_HEIGHT.md)
* [_DESKTOPWIDTH](_DESKTOPWIDTH.md), [_DESKTOPHEIGHT](_DESKTOPHEIGHT.md)
* [_FULLSCREEN](_FULLSCREEN.md), [_PRINTIMAGE](_PRINTIMAGE.md)
* [Screen Saver Programs](Screen Saver Programs.md)
* [Bitmaps](Bitmaps.md), [Icons and Cursors](Icons and Cursors.md)
* [Hardware images](Hardware images.md)

  
