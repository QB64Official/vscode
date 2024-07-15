# _DEST

The _DEST statement sets the current write image or page. All graphic and print changes will be done to this image.

  

## Syntax

_DEST *imageHandle&*
  

## Description

* *imageHandle&* is the handle of the image that will act as the current write page.
* **_DEST 0** refers to the present program [SCREEN](SCREEN.md). You can use 0 to refer to the present program [SCREEN](SCREEN.md).
* _DEST [_CONSOLE](_CONSOLE.md) can set the destination to send information to a console window using [PRINT](PRINT.md) or [INPUT](INPUT.md).
* If *imageHandle&* is an invalid handle, an [invalid handle](invalid handle.md) error occurs. Always check for valid handle values first (*imageHandle&* < -1).
* *Note:* Use [_SOURCE](_SOURCE.md) when you need to read a page or image with [POINT](POINT.md), [GET](GET.md) "GET (graphics statement)") or the [SCREEN](SCREEN.md) "SCREEN (function)") function.

  

## Examples

*Example 1:* Placing a center point and a circle using [_CLEARCOLOR](_CLEARCOLOR.md) to eliminate the background color black.

``` [SCREEN](SCREEN.md) 13 'program screen can use 256 colors a& = [_NEWIMAGE](_NEWIMAGE.md)(320, 200, 13) 'create 2 screen page handles a& and b& b& = [_NEWIMAGE](_NEWIMAGE.md)(320, 200, 13) _DEST a& 'set destination image to handle a& [PSET](PSET.md) (100, 100), 15 'draw a dot on the current destination handle a& _DEST b& 'set destination image to handle b& [CIRCLE](CIRCLE.md) (100, 100), 50, 15 'draw a circle on the current destination handle b& [_CLEARCOLOR](_CLEARCOLOR.md) 0 'make page b color 0 (black) transparent [_PUTIMAGE](_PUTIMAGE.md) , b&, a& 'put circle on image b to image a& (a PSET dot) [_PUTIMAGE](_PUTIMAGE.md) , a&, 0 'put what is on image a& to the screen (handle 0)  
```

---

*Example 2:* Demonstrates how [printed](printed.md) text can be stretched using [_PUTIMAGE](_PUTIMAGE.md) with _DEST pages.

``` [DIM](DIM.md) a(10) [AS](AS.md) [LONG](LONG.md) [DIM](DIM.md) b [AS](AS.md) [LONG](LONG.md)  [REM](REM.md) Sets up a newimage for B then sets the screen to that. b = [_NEWIMAGE](_NEWIMAGE.md)(640, 480, 32) [SCREEN](SCREEN.md) b  [REM](REM.md) Make pages 48 pixels tall. If the image is not at least that it wont work a(1) = [_NEWIMAGE](_NEWIMAGE.md)(240, 48, 32) a(2) = [_NEWIMAGE](_NEWIMAGE.md)(240, 48, 32) a(3) = [_NEWIMAGE](_NEWIMAGE.md)(98, 48, 32)  xa = 100 ya = 120 xm = 4 ym = 4  [REM](REM.md) Some fun things for the bouncing text. st$(0) = "doo" st$(1) = "rey" st$(2) = "mee" st$(3) = "faa" st$(4) = "soo" st$(5) = "laa" st$(6) = "tee"  sta$(0) = "This is a demo" sta$(1) = "showing how to use" sta$(2) = "the _DEST command" sta$(3) = "with PRINT" sta$(4) = "and _PUTIMAGE"  [REM](REM.md) prints to a(3) image then switches back to the default 0 _DEST a(3): f = [INT](INT.md)([RND](RND.md) * 6): [PRINT](PRINT.md) st$(3): _DEST 0  [DO](DO.md)     [REM](REM.md) prints to a(1) and a(2) then switches bac to 0     _DEST a(1)     [CLS](CLS.md)     [PRINT](PRINT.md) sta(r)     _DEST a(2)     [CLS](CLS.md)     [PRINT](PRINT.md) sta(r + 1)     _DEST 0 'destination zero is the main program page      [REM](REM.md) a loop to putimage the images in a(1) and a(2) in a way to make it look like its rolling     [FOR](FOR.md) yat = 150 [TO](TO.md) 380 [STEP](STEP.md) 4         [CLS](CLS.md)         [_PUTIMAGE](_PUTIMAGE.md) (0, yat)-(640, 380), a(1)         [_PUTIMAGE](_PUTIMAGE.md) (0, 150)-(640, yat), a(2)         [GOSUB](GOSUB.md) bounce         [_DISPLAY](_DISPLAY.md)         [_LIMIT](_LIMIT.md) 20     [NEXT](NEXT.md) yat      r = r + 1     [IF](IF.md) r = 4 [THEN](THEN.md) r = 0 [LOOP UNTIL](LOOP UNTIL.md) [INKEY$](INKEY$.md) <> "" [END](END.md)  bounce: [IF](IF.md) xa > 600 [OR](OR.md) "OR (boolean)") xa < 20 [THEN](THEN.md) xm = xm * -1: _DEST a(3): f = [INT](INT.md)([RND](RND.md) * 6): [CLS](CLS.md): [_CLEARCOLOR](_CLEARCOLOR.md) 0: [PRINT](PRINT.md) st$(f): _DEST 0 [IF](IF.md) ya > 400 [OR](OR.md) "OR (boolean)") ya < 20 [THEN](THEN.md) ym = ym * -1: _DEST a(3): f = [INT](INT.md)([RND](RND.md) * 7): [CLS](CLS.md): [_CLEARCOLOR](_CLEARCOLOR.md) 0: [PRINT](PRINT.md) st$(f): _DEST 0 [_PUTIMAGE](_PUTIMAGE.md) (xa, ya)-(xa + 150, ya + 80), a(3) xa = xa + xm ya = ya + ym [RETURN](RETURN.md)  
```

  

## See also

* [_DEST (function)](_DEST (function).md) "DEST (function)")
* [_SOURCE](_SOURCE.md)
* [_PUTIMAGE](_PUTIMAGE.md)
* [_CONSOLE](_CONSOLE.md)

  
