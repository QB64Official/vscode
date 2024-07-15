# _NEWIMAGE

The _NEWIMAGE function prepares a window image surface and returns the [LONG](LONG.md) [handle](handle.md) value.

  

## Syntax

*handle&* = _NEWIMAGE(*width&*, *height&*[, {*0*|*1*|*2*|*7*|*8*|*9*|*10*|*11*|*12*|*13*|*256*|*32*}])
  

## Parameters

* Minimum [LONG](LONG.md) screen dimensions are *width&* >= 1, *height&* >= 1 measured in pixels as [INTEGER](INTEGER.md) or [LONG](LONG.md) values.
	+ For mode 0 (text), *width&* and *height&* are measured in character blocks, not pixels.
* Mode is either a QBasic type [screen](screen.md) mode (0 to 2 or 7 to 13), 256 colors or 32 bit (16 million colors) compatible.

  

## Description

* If the mode is omitted, an image will be created with the same BPP mode, font (which may block freeing of that font), palette, selected colors, transparent color, blend state and print method settings as the current [_DESTination](_DESTination.md) image/[screen](screen.md) page.
* Valid [LONG](LONG.md) [handle](handle.md) returns are less than -1. Invalid handles equal -1 and a zero or positive value is also invalid.
* You can create any sized window (limited by the OS) in any emulated [SCREEN](SCREEN.md) mode or 32 bit using this function.
* Default text block size in emulated [SCREEN](SCREEN.md) modes 1, 2, 7, 8 and 13 is 8 X 8; 9 and 10 is 8 X 14; 11, 12, 256 and 32 bit is 8 X 16. The text block pixel size will allow you to calculate the available text rows and columns in a custom sized screen.
* To view the image page, just use [SCREEN](SCREEN.md) *handle&*. Even if another procedure changes the screen mode and clears the screen, the image can be restored later by using the same SCREEN handle mode.
* Use the [_COPYIMAGE](_COPYIMAGE.md) function to preserve a SCREEN handle value when changing to another screen mode to restore it later.
* **32 bit screen surface backgrounds (black) have zero [_ALPHA](_ALPHA.md) so that they are transparent when placed over other surfaces.**

Use [CLS](CLS.md) or [_DONTBLEND](_DONTBLEND.md) to make a new surface background [_ALPHA](_ALPHA.md) 255 or opague.
* **Images are not deallocated when the [SUB](SUB.md) or [FUNCTION](FUNCTION.md) they are created in ends. Free them with [_FREEIMAGE](_FREEIMAGE.md).**
* **It is important to free unused or uneeded images with [_FREEIMAGE](_FREEIMAGE.md) to prevent CPU [memory overflow errors](memory overflow errors.md).**
* **Do not try to free image handles currently being used as the active [SCREEN](SCREEN.md). Change screen modes first.**

  

## Examples

*Example 1:* Shrinking a SCREEN 0 text window's size:

``` [SCREEN](SCREEN.md) _NEWIMAGE(28, 25, 0)  
```

  

*Example 2:* Creating an 800 by 600 window version of SCREEN 12 with 256 colors (text 37 X 100):

``` handle& = _NEWIMAGE(800, 600, 256) [SCREEN](SCREEN.md) handle&  
```

  

*Example 3:* Setting up a 32 bit SCREEN with _NEWIMAGE for page flipping in QB64.

``` SCREEN _NEWIMAGE(640, 480, 32), , 1, 0  
```

*Note:* [_DISPLAY](_DISPLAY.md) may be used as a substitute for page flipping or [PCOPY](PCOPY.md).
  

*Example 4:* Switching between two different SCREEN modes

``` [_TITLE](_TITLE.md) "Switching [SCREEN](SCREEN.md) modes" [SCREEN](SCREEN.md) _NEWIMAGE (800, 600, 256) mode1& = [_DEST](_DEST.md)               'get current screen mode handle mode2& = _NEWIMAGE (300, 200, 13)  [_DEST](_DEST.md) mode2&                  'prepare small window [COLOR](COLOR.md) 10: [LOCATE](LOCATE.md) 10, 13: [PRINT](PRINT.md) "mode2& = "; mode2& [COLOR](COLOR.md) 13: [LOCATE](LOCATE.md) 16, 16: [PRINT](PRINT.md) "First"  [_DEST](_DEST.md) mode1&  'work in main window [LOCATE](LOCATE.md) 5 [FOR](FOR.md) c = 1 [TO](TO.md) 248    Color c: [PRINT](PRINT.md) c; [NEXT](NEXT.md) [COLOR](COLOR.md) 12: [LOCATE](LOCATE.md) 20, 44: [PRINT](PRINT.md) "mode1& = "; mode1& [COLOR](COLOR.md) 11: [LOCATE](LOCATE.md) 30, 34: [PRINT](PRINT.md) "Press a key to goto Pop-up Window" [DO](DO.md): [SLEEP](SLEEP.md): [LOOP](LOOP.md) [UNTIL](UNTIL.md) [INKEY$](INKEY$.md) <> ""  [SCREEN](SCREEN.md) mode2&  'switch to small window [DO](DO.md): [SLEEP](SLEEP.md): [LOOP](LOOP.md) [UNTIL](UNTIL.md) [INKEY$](INKEY$.md) <> ""  [SCREEN](SCREEN.md) mode1&  'back to main window [COLOR](COLOR.md) 12: [LOCATE](LOCATE.md) 37, 43: [PRINT](PRINT.md) "One more time!" [DO](DO.md): [SLEEP](SLEEP.md): [LOOP](LOOP.md) [UNTIL](UNTIL.md) [INKEY$](INKEY$.md) <> ""  [SCREEN](SCREEN.md) mode2&  'back to small window [COLOR](COLOR.md) 14: [LOCATE](LOCATE.md) 16, 16: [PRINT](PRINT.md) "LAST "  
```

*Explanation:* The [_DEST](_DEST.md) "DEST (function)") function can determine the present screen mode destination handle. The second _NEWIMAGE handle is created using a SCREEN 13 palette(256 colors also). Each SCREEN is worked on after changing the destination with [_DEST](_DEST.md) *handle&* statement. Images can be created before viewing them. When a key is pressed the second SCREEN created is displayed and so on.
**Legacy SCREEN modes can also return a _DEST value, but the value will create a handle error.** To restore legacy screens get the[_COPYIMAGE](_COPYIMAGE.md) function value before changing screens. Then restore it using SCREEN oldmode&.
### More examples

* [SaveImage SUB](SaveImage SUB.md)
* [_PIXELSIZE](_PIXELSIZE.md)

  

## See also

* [_COPYIMAGE](_COPYIMAGE.md)
* [_LOADIMAGE](_LOADIMAGE.md)
* [_SAVEIMAGE](_SAVEIMAGE.md)
* [_FREEIMAGE](_FREEIMAGE.md)
* [_PUTIMAGE](_PUTIMAGE.md)
* [_SCREENIMAGE](_SCREENIMAGE.md)
* [_CLIPBOARDIMAGE (function)](_CLIPBOARDIMAGE (function).md) "CLIPBOARDIMAGE (function)")
* [SCREEN](SCREEN.md)

  
