## _SCREENIMAGE
---

### The _SCREENIMAGE function stores the current desktop image or a portion of it and returns an image handle.

#### SYNTAX

`imageHandle& = _SCREENIMAGE [( column1 , row1 , column2 , row2 )]`

#### DESCRIPTION
* imageHandle& is the handle to the new image in memory that will contain the desktop screenshot.
* The optional screen column and row positions can be used to get only a portion of the desktop image.
* The desktop image or partial image is always a 32-bit image.
* The current screen resolution or width-to-height aspect ratio can be obtained with [_DESKTOPWIDTH](./_DESKTOPWIDTH.md) and [_DESKTOPHEIGHT](./_DESKTOPHEIGHT.md) .
* Can be used to take screenshots of the desktop or used with [_PRINTIMAGE](./_PRINTIMAGE.md) to print them.
* It is important to free unused or uneeded image handles with [_FREEIMAGE](./_FREEIMAGE.md) to prevent memory overflow errors.
* Keyword not supported in Linux or macOS versions


#### EXAMPLES
##### Example: Determining the present screen resolution of user's PC for a screensaver program.
```vb
desktop& = _SCREENIMAGE
MaxScreenX& = _WIDTH(desktop&)
MaxScreenY& = _HEIGHT(desktop&)
_FREEIMAGE desktop& 'free image after measuring screen(it is not displayed)
SCREEN _NEWIMAGE(MaxScreenX&, MaxScreenY&, 256) 'program window is sized to fit
_SCREENMOVE _MIDDLE
```
  


#### SEE ALSO
* [_SCREENCLICK](./_SCREENCLICK.md) , [_SCREENPRINT](./_SCREENPRINT.md)
* [_SCREENMOVE](./_SCREENMOVE.md) , [_SCREENX](./_SCREENX.md) , [_SCREENY](./_SCREENY.md)
* [_WIDTH](./_WIDTH.md) , [_HEIGHT](./_HEIGHT.md)
* [_DESKTOPWIDTH](./_DESKTOPWIDTH.md) , [_DESKTOPHEIGHT](./_DESKTOPHEIGHT.md)
* [_FULLSCREEN](./_FULLSCREEN.md) , [_PRINTIMAGE](./_PRINTIMAGE.md)
* Screen Saver Programs
* Bitmaps , Icons and Cursors
* Hardware images
