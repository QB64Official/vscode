# _DONTBLEND

The _DONTBLEND statement turns off 32 bit alpha blending for the current image or screen mode where [_BLEND](_BLEND.md) is default.

  

## Syntax

_DONTBLEND [*imageHandle&*]
  

## Parameters

* If *imageHandle&* is omitted, it is assumed to be the current [_DESTination](_DESTination.md) write page.

  

## Description

* If *imageHandle&* is not valid, an [Invalid handle](Invalid handle.md) error will occur.
* _DONTBLEND is faster than the default [_BLEND](_BLEND.md). **You may want to disable it**, unless you really need to use it in 32 bit.
* **32 bit screen surface backgrounds (black) have zero [_ALPHA](_ALPHA.md) so that they are transparent when placed over other surfaces.**
* Use [CLS](CLS.md) to make a new surface background [_ALPHA](_ALPHA.md) 255 or opaque.
* Both [_SOURCE](_SOURCE.md) and [_DEST](_DEST.md) must have [_BLEND](_BLEND.md) enabled, or else colors will NOT blend.

  

## Examples

*Example 1:* Use _DONTBLEND when you want the 32 bit screen surface to be opaque so that it covers up other backgrounds. [CLS](CLS.md) works too.

``` [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(1280, 720, 32) 'CLS _DONTBLEND '<<< comment out to see the difference  [LINE](LINE.md) (100, 100)-(500, 500), [_RGB32](_RGB32.md)(255, 255, 0), BF  b& = SaveBackground&  [PRINT](PRINT.md) "This is just test junk" [PRINT](PRINT.md) [PRINT](PRINT.md) "Hit any key and the text should disappear, leaving us our pretty yellow box." [SLEEP](SLEEP.md) RestoreBackground b&  [END](END.md)  [FUNCTION](FUNCTION.md) SaveBackground&     SaveBackground& = [_COPYIMAGE](_COPYIMAGE.md)(0) [END FUNCTION](END FUNCTION.md)  [SUB](SUB.md) RestoreBackground (Image [AS](AS.md) [LONG](LONG.md))     [_PUTIMAGE](_PUTIMAGE.md) , Image, 0 [END SUB](END SUB.md)  
```

---

*Example 2:* Turning off blending to create transparency.

``` [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(640, 480, 32) alphaSprite& = [_NEWIMAGE](_NEWIMAGE.md)(64, 64, 32)  _DONTBLEND alphaSprite& ' turn off alpha-blending  'Create a simple sprite with transparency [_DEST](_DEST.md) alphaSprite& [FOR](FOR.md) y = 0 [TO](TO.md) 63     [FOR](FOR.md) x = 0 [TO](TO.md) 63         alpha = [SQR](SQR.md)((x - 32) ^ 2 + (y - 32) ^ 2) / 32         [IF](IF.md) alpha < 0 [THEN](THEN.md) alpha = 0         alpha = (1 - alpha * alpha) 'parabolic curve         [PSET](PSET.md) (x, y), [_RGBA32](_RGBA32.md)(255, 255, 255, alpha * 255)     [NEXT](NEXT.md) [NEXT](NEXT.md)  'Make a simple background texture [_DEST](_DEST.md) 0 [FOR](FOR.md) y = 1 [TO](TO.md) 479     [FOR](FOR.md) x = 0 [TO](TO.md) 639         [PSET](PSET.md) (x, y), [_RGB32](_RGB32.md)(x [AND](AND.md) 255, y [AND](AND.md) 255, (x [XOR](XOR.md) y) [AND](AND.md) 255)     [NEXT](NEXT.md) [NEXT](NEXT.md)  'Store background so we can show moveable objects on it background& = [_COPYIMAGE](_COPYIMAGE.md)(0)  'Treat my alpha values as transparency [_BLEND](_BLEND.md) alphaSprite&  ph = 0 [DO](DO.md): [_LIMIT](_LIMIT.md) 60     x = 320 - 250 * [COS](COS.md)(ph) - ([_WIDTH](_WIDTH.md) "WIDTH (function)")(alphaSprite&) \ 2)     y = 240 - 150 * [COS](COS.md)(ph * 1.3) - ([_HEIGHT](_HEIGHT.md)(alphaSprite&) \ 2)     ph = ph + 0.03     [_PUTIMAGE](_PUTIMAGE.md) , background&, 0     [_PUTIMAGE](_PUTIMAGE.md) (x, y), alphaSprite&, 0     [_DISPLAY](_DISPLAY.md) [LOOP UNTIL](LOOP UNTIL.md) [LEN](LEN.md)([INKEY$](INKEY$.md))  
```

*Explanation:* To make the alpha image, turn alpha blending off. Otherwise PSET blends the pixel to instead of making the sprite transparent.

  

## See also

* [_BLEND](_BLEND.md)
* [_BLEND (function)](_BLEND (function).md) "BLEND (function)")
* [Images](Images.md)

  
