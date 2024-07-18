## _DONTBLEND
---

### The _DONTBLEND statement turns off 32 bit alpha blending for the current image or screen mode where _BLEND is default.

#### SYNTAX

`_DONTBLEND [ imageHandle& ]`

#### PARAMETERS
* If imageHandle& is omitted, it is assumed to be the current _DESTination write page.


#### DESCRIPTION
* If imageHandle& is not valid, an Invalid handle error will occur.
* [_DONTBLEND](./_DONTBLEND.md) is faster than the default [_BLEND](./_BLEND.md) . You may want to disable it , unless you really need to use it in 32 bit.
* 32 bit screen surface backgrounds (black) have zero [_ALPHA](./_ALPHA.md) so that they are transparent when placed over other surfaces.
* Use [CLS](./CLS.md) to make a new surface background [_ALPHA](./_ALPHA.md) 255 or opaque.
* Both [_SOURCE](./_SOURCE.md) and [_DEST](./_DEST.md) must have [_BLEND](./_BLEND.md) enabled, or else colors will [NOT](./NOT.md) blend.


#### EXAMPLES
##### Example 1: Use _DONTBLEND when you want the 32 bit screen surface to be opaque so that it covers up other backgrounds. CLS works too.
```vb
SCREEN _NEWIMAGE(1280, 720, 32)
'CLS
_DONTBLEND '<<< comment out to see the difference

LINE (100, 100)-(500, 500), _RGB32(255, 255, 0), BF

b& = SaveBackground&

PRINT "This is just test junk"
PRINT
PRINT "Hit any key and the text should disappear, leaving us our pretty yellow box."
SLEEP
RestoreBackground b&

END

FUNCTION SaveBackground&
   SaveBackground& = _COPYIMAGE(0)
END FUNCTION

SUB RestoreBackground (Image AS LONG)
   _PUTIMAGE , Image, 0
END SUB
```
  
##### Example 2: Turning off blending to create transparency.
```vb
SCREEN _NEWIMAGE(640, 480, 32)
alphaSprite& = _NEWIMAGE(64, 64, 32)

_DONTBLEND alphaSprite& ' turn off alpha-blending

'Create a simple sprite with transparency
_DEST alphaSprite&
FOR y = 0 TO 63
   FOR x = 0 TO 63
       alpha = SQR((x - 32) ^ 2 + (y - 32) ^ 2) / 32
       IF alpha < 0 THEN alpha = 0
       alpha = (1 - alpha * alpha) 'parabolic curve
       PSET (x, y), _RGBA32(255, 255, 255, alpha * 255)
   NEXT
NEXT

'Make a simple background texture
_DEST 0
FOR y = 1 TO 479
   FOR x = 0 TO 639
       PSET (x, y), _RGB32(x AND 255, y AND 255, (x XOR y) AND 255)
   NEXT
NEXT

'Store background so we can show moveable objects on it
background& = _COPYIMAGE(0)

'Treat my alpha values as transparency
_BLEND alphaSprite&

ph = 0
DO: _LIMIT 60
   x = 320 - 250 * COS(ph) - (_WIDTH(alphaSprite&) \ 2)
   y = 240 - 150 * COS(ph * 1.3) - (_HEIGHT(alphaSprite&) \ 2)
   ph = ph + 0.03
   _PUTIMAGE , background&, 0
   _PUTIMAGE (x, y), alphaSprite&, 0
   _DISPLAY
LOOP UNTIL LEN(INKEY$)
```
  
##### Explanation: To make the alpha image, turn alpha blending off. Otherwise PSET blends the pixel to instead of making the sprite transparent.


#### SEE ALSO
* [_BLEND](./_BLEND.md)
* [_BLEND](./_BLEND.md) (function)
* Images
