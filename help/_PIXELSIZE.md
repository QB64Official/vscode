# _PIXELSIZE

The _PIXELSIZE function returns the color depth (Bits Per Pixel) of an image as 0 for text, 1 for 1 to 8 BPP or 4 for 32 bit.

  

## Syntax

*pixelSize%* = _PIXELSIZE[(*imageHandle&*)]
  

## Description

* If *imageHandle&* is omitted, it is assumed to be the current write page.
* Returns:
	+ 0 if the image or screen page specified by *imageHandle&* is in text mode.
	+ 1 if the image specified by *imageHandle&* is in 1 (B & W), 4 (16 colors) or 8 (256 colors) BPP mode.
	+ 4 if the image specified is a 24/32-bit compatible mode. Pixels use three bytes, one per red, green and blue color intensity.
* The [SCREEN](SCREEN.md) or [_NEWIMAGE](_NEWIMAGE.md) or [_LOADIMAGE](_LOADIMAGE.md) color mode (256 or 32) can influence the pixel sizes that can be returned.
* If *imageHandle&* is an invalid handle, then an [invalid handle](invalid handle.md) error occurs.

  

## Examples

*Snippet:* Saving Images for later program use. Handle values could be saved to an array.

```   handle1& = _Getimage(sx1, sy1, sx2, sy2, sourcehandle&) ' function call  [FUNCTION](FUNCTION.md) GetImage& (sx1, sy1, sx2, sy2, sourcehandle&) bytespp = _PIXELSIZE(sourcehandle&) [IF](IF.md) bytespp = 4 [THEN](THEN.md) Pal = 32 [ELSE](ELSE.md) [IF](IF.md) bytespp = 1 [THEN](THEN.md) Pal = 256 [ELSE](ELSE.md) [EXIT FUNCTION](EXIT FUNCTION.md) h& = [_NEWIMAGE](_NEWIMAGE.md)([ABS](ABS.md)(sx2 - sx1) + 1, [ABS](ABS.md)(sy2 - sy1) + 1, Pal) [_PUTIMAGE](_PUTIMAGE.md) (0, 0), sourcehandle&, h&, (sx1, sy1)-(sx2, sy2) 'image is not displayed GetImage& = h& [END FUNCTION](END FUNCTION.md)  
```

### More examples

* [SaveImage SUB](SaveImage SUB.md)
* [SaveIcon32](SaveIcon32.md)
* [ThirtyTwoBit SUB](ThirtyTwoBit SUB.md)
* [Bitmaps](Bitmaps.md)

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [_LOADIMAGE](_LOADIMAGE.md), [_SAVEIMAGE](_SAVEIMAGE.md)
* [_NEWIMAGE](_NEWIMAGE.md), [_PUTIMAGE](_PUTIMAGE.md)
* [_COPYPALETTE](_COPYPALETTE.md)

  
