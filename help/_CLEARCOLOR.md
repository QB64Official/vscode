# _CLEARCOLOR

The _CLEARCOLOR statement sets a specific color to be treated as transparent when an image is later put (via [_PUTIMAGE](_PUTIMAGE.md)) onto another image.

  

## Syntax

_CLEARCOLOR {*color&*|_NONE}[, *Dest_Handle&*]
  

## Parameters

* In color modes using a palette, *color&* is the palette index of the new transparent color value or _NONE designates no clear colors.
* If *color&* is not a valid palette index, an [illegal function call](illegal function call.md) error will occur.
* In 32-bit color modes, *color&* is the [_LONG](_LONG.md) color value of the new transparent color.
* If *Dest_Handle&* is omitted, the destination is assumed to be the current write page. Zero can designate the current program screen.

  

## Description

* If *Dest_Handle&* is an invalid handle, then an [invalid handle](invalid handle.md) error is returned. Check for bad handle values of -1 first.
* In 32-bit color modes, it simply sets the Alpha to 0 for all pixels matching the specified color.
* In the second syntax, transparency is disabled for color modes using a palette.
* **Note:** [_SETALPHA](_SETALPHA.md) can affect any _CLEARCOLOR alpha setting within the color range set.
* **NOTE: 32 bit [_NEWIMAGE](_NEWIMAGE.md) screen page backgrounds are transparent black or [_ALPHA](_ALPHA.md) 0. Use [_DONTBLEND](_DONTBLEND.md) or [CLS](CLS.md) for opaque.**

  

## Examples

*Example 1:* Using _CLEARCOLOR to "mask" the background color of an image.

``` [SCREEN](SCREEN.md) 13 img& = [_LOADIMAGE](_LOADIMAGE.md)("qb64_trans.png") [_PUTIMAGE](_PUTIMAGE.md) , img&, 0 'place actual image with background K$ = [INPUT$](INPUT$.md)(1) [CLS](CLS.md) , [_RGB](_RGB.md)(255, 0, 0) 'clear screen with red background _CLEARCOLOR [_RGB](_RGB.md)(255, 255, 255), img& [_PUTIMAGE](_PUTIMAGE.md) , img&, 0 'place image without white background [PRINT](PRINT.md) [_CLEARCOLOR](_CLEARCOLOR.md) "CLEARCOLOR (function)")(img&) 'displays closest clear color attribute [END](END.md)  
```

---

*Example 2:* Using a _CLEARCOLOR transparency with images created on a [_NEWIMAGE](_NEWIMAGE.md) page. Does not require an image file.

``` [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(512, 384, 32) ' screen uses handle value [CIRCLE](CIRCLE.md) (50, 50), 50, [_RGB](_RGB.md)(128, 0, 0) ' create a red ball image [PAINT](PAINT.md) (50, 50), [_RGB](_RGB.md)(255, 0, 0), [_RGB](_RGB.md)(128, 0, 0) redball = [_NEWIMAGE](_NEWIMAGE.md)(101, 101, 32) ' create a new image page [_PUTIMAGE](_PUTIMAGE.md) , 0, redball, (0, 0)-(101, 101) ' put screen page 0 image onto redball page _CLEARCOLOR [_RGB](_RGB.md)(0, 0, 0), redball ' makes black become see-through [CLS](CLS.md) , [_RGB](_RGB.md)(0, 0, 255) ' erase original ball and create a blue background [DO](DO.md)     [_PUTIMAGE](_PUTIMAGE.md) ([RND](RND.md) * 512, [RND](RND.md) * 384), redball     [SLEEP](SLEEP.md) 1 ' one second delay [LOOP UNTIL](LOOP UNTIL.md) [INKEY$](INKEY$.md) <> ""  
```

---

*Example 3:* Fading an image with a _CLEARCOLOR background using a new page image to prevent [_SETALPHA](_SETALPHA.md) changes.

``` mainscreen = [_NEWIMAGE](_NEWIMAGE.md)(640, 480, 32) ' Main Screen (viewable) [SCREEN](SCREEN.md) mainscreen [_SCREENMOVE](_SCREENMOVE.md) [_MIDDLE](_MIDDLE.md) Image1& = [_LOADIMAGE](_LOADIMAGE.md)("qb64_trans.png") '<<<<<< any image with one background color to clear  [IF](IF.md) Image1& < -1 [THEN](THEN.md) 'check loaded image handle value before using!     [_SOURCE](_SOURCE.md) Image1&     clr~& = [POINT](POINT.md)(0, 0) 'get background color from image source     _CLEARCOLOR clr~&, Image1& 'clear background color of loaded image     NewImage1& = [_NEWIMAGE](_NEWIMAGE.md)([_WIDTH](_WIDTH.md) "WIDTH (function)")(Image1&), [_HEIGHT](_HEIGHT.md)(Image1&), 32) 'new image page     [_PUTIMAGE](_PUTIMAGE.md) , Image1&, NewImage1& 'put image without background color on new page     [_FREEIMAGE](_FREEIMAGE.md) Image1& 'free loaded image from memory [END IF](END IF.md) [_DEST](_DEST.md) mainscreen:  a& = 0: d = 1 [DO](DO.md)     [_LIMIT](_LIMIT.md) 10 'regulate speed of fades     [CLS](CLS.md)     a& = a& + d     [IF](IF.md) a& = 255 [THEN](THEN.md) d = -d 'reverse fade     [_SETALPHA](_SETALPHA.md) a&, , NewImage1& 'sets alpha level of all colors to fade image page in/out     [_PUTIMAGE](_PUTIMAGE.md) (0, 342), NewImage1&     [LOCATE](LOCATE.md) 1, 1: [PRINT](PRINT.md) "Alpha: "; a&     [_DISPLAY](_DISPLAY.md) [LOOP UNTIL](LOOP UNTIL.md) a& = 0 [END](END.md)  
```

*Note:* If the _CLEARCOLOR image background was not put onto a separate page, [_SETALPHA](_SETALPHA.md) would display it also.
  

## See also

* [_CLEARCOLOR (function)](_CLEARCOLOR (function).md) "CLEARCOLOR (function)")
* [_SETALPHA](_SETALPHA.md) (sets transparency level)
* [_ALPHA](_ALPHA.md), [_ALPHA32](_ALPHA32.md) (read functions)
* [Images](Images.md), [Creating Sprite Masks](Creating Sprite Masks.md)

  
