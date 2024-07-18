## _FREEIMAGE
---

### The _FREEIMAGE statement releases the designated file image created by the _LOADIMAGE , _NEWIMAGE or _COPYIMAGE functions from memory when they are no longer needed.

#### SYNTAX

`_FREEIMAGE [ handle& ]`

#### DESCRIPTION
* If handle& is omitted, the current destination image is freed from memory.
* Freeing the destination image or source image will result in the display page being selected instead.
* Invalid image handle values of -1 or 0 cannot be freed or an "Illegal Function" error will occur. Check the handle value first.
* [SCREEN](./SCREEN.md) modes in use cannot be freed or an "Illegal Function" error will occur. Change [SCREEN](./SCREEN.md) modes before freeing.
* Once a specific image handle is no longer used or referenced by your program, it can be freed with [_FREEIMAGE](./_FREEIMAGE.md) .
* Images are not deallocated when the [SUB](./SUB.md) or [FUNCTION](./FUNCTION.md) they are created in ends. Free them with [_FREEIMAGE](./_FREEIMAGE.md) .
* It is important to free unused or unneeded images with [_FREEIMAGE](./_FREEIMAGE.md) to prevent memory overflow errors.
* Do not try to free image handles currently being used as the active [SCREEN](./SCREEN.md) . Change screen modes first.
* Note that calling [_FREEIMAGE](./_FREEIMAGE.md) only frees the handle.  It does [NOT](./NOT.md) reset the variable used to store the handle back to 0.  (This is because 0 is often used as a short cut value for the current display, such as with [_DEST](./_DEST.md) 0.)


#### EXAMPLES
##### Example: Loading a program splash screen and freeing image when no longer necessary:
```vb
s& = _LOADIMAGE("SPLASH.BMP", 32) 'load 32 bit(24 BPP) image
IF s& < -1 THEN SCREEN s& 'use image as a 32 bit SCREEN
_DELAY 6 'display splash screen for 6 seconds
SCREEN 0 'MUST change screen mode before freeing a SCREEN image!
IF s& < -1 THEN _FREEIMAGE s& 'handle value MUST be less than -1 or error!
CLS
```
  


#### SEE ALSO
* [_NEWIMAGE](./_NEWIMAGE.md)
* [_LOADIMAGE](./_LOADIMAGE.md)
* [_SCREENIMAGE](./_SCREENIMAGE.md)
* [_COPYIMAGE](./_COPYIMAGE.md)
* [_SAVEIMAGE](./_SAVEIMAGE.md)
