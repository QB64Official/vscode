# _CLIPBOARDIMAGE

The _CLIPBOARDIMAGE statement copies a valid QB64 image to the clipboard.

  

## Syntax

_CLIPBOARDIMAGE = *existingImageHandle&*
  

## Description

* *existingImageHandle&* is a valid handle to a graphic QB64 image in memory, created with [_NEWIMAGE](_NEWIMAGE.md), [_LOADIMAGE](_LOADIMAGE.md) or [_COPYIMAGE](_COPYIMAGE.md).
* You can pass [_SOURCE](_SOURCE.md), [_DEST](_DEST.md) or [_DISPLAY](_DISPLAY.md) to copy the current source, destination or active display pages, as long as they are valid graphic images.
* SCREEN 0 handles (created either with [_NEWIMAGE](_NEWIMAGE.md) or passed using _DEST while in a text screen) are not valid and will create an [Illegal Function Call](Illegal Function Call.md) or [Invalid Handle](Invalid Handle.md) error.

  

## Availability

* [![v1.2](![v1.2.md)](File:Qb64.png "v1.2")

**v1.2**
* [![all](![all.md)](File:Qbpe.png "all")

**all**
* [![Apix.png](![Apix.png.md)](File:Apix.png)
* [![yes](![yes.md)](File:Win.png "yes")

**yes**
* [![yes](![yes.md)](File:Lnx.png "yes")

**yes**
* [![yes](![yes.md)](File:Osx.png "yes")

**yes**

* Available for *macOS* and *Linux* since **QB64-PE v3.13.0**

  

## Examples

Example
Create a sample image and copy it to the clipboard:

``` [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(800, 600, 32)  'Create image in memory: canvas& = [_NEWIMAGE](_NEWIMAGE.md)(300, 200, 32) [_DEST](_DEST.md) canvas&  'Draw some random rectangles: [RANDOMIZE](RANDOMIZE.md) [TIMER](TIMER.md) "TIMER (function)") [FOR](FOR.md) i = 1 [TO](TO.md) 100     [LINE](LINE.md) (-100 + [RND](RND.md) * [_WIDTH](_WIDTH.md) "WIDTH (function)"), -100 + [RND](RND.md) * [_HEIGHT](_HEIGHT.md))-[STEP](STEP.md)([RND](RND.md) * 150, [RND](RND.md) * 150), [_RGB](_RGB.md)([RND](RND.md) * 255, [RND](RND.md) * 255, [RND](RND.md) * 255), BF [NEXT](NEXT.md) [LINE](LINE.md) (0, 0)-([_WIDTH](_WIDTH.md) "WIDTH (function)") - 1, [_HEIGHT](_HEIGHT.md) - 1), [_RGB](_RGB.md)(255, 255, 255), B [COLOR](COLOR.md) [_RGB](_RGB.md)(0, 0, 0), [_RGB](_RGB.md)(255, 255, 255) m$ = " Hello, world! " [_PRINTSTRING](_PRINTSTRING.md) ([_WIDTH](_WIDTH.md) "WIDTH (function)") / 2 - [_PRINTWIDTH](_PRINTWIDTH.md)(m$) / 2, [_HEIGHT](_HEIGHT.md) / 2 - [_FONTHEIGHT](_FONTHEIGHT.md) / 2), m$  'Show the image: [_DEST](_DEST.md) 0 [_PUTIMAGE](_PUTIMAGE.md) ([_WIDTH](_WIDTH.md) "WIDTH (function)") / 2 - [_WIDTH](_WIDTH.md) "WIDTH (function)")(canvas&) / 2, [_HEIGHT](_HEIGHT.md) / 2 - [_HEIGHT](_HEIGHT.md)(canvas&) / 2), canvas& [PRINT](PRINT.md) "Image generated."  'Copy to the clipboard: _CLIPBOARDIMAGE = canvas&  [PRINT](PRINT.md) "Image copied to clipboard."  
```

  

## See also

* [_CLIPBOARDIMAGE](_CLIPBOARDIMAGE.md) "CLIPBOARDIMAGE (function)") (function - used to paste an image from the clipboard)
* [_CLIPBOARD$](_CLIPBOARD$.md), [_CLIPBOARD$ (function)](_CLIPBOARD$ (function).md) "CLIPBOARD$ (function)") (used to copy/paste text)

  
