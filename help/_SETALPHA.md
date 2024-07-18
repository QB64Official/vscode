## _SETALPHA
---

### The _SETALPHA statement sets the alpha channel transparency level of some or all of the pixels of an image.

#### SYNTAX

`_SETALPHA alpha& [, color1& ][ TO colour2& ] [, imageHandle& ]`

#### PARAMETERS
* alpha& is the new alpha level to set, ranging from 0 (transparent) to 255 (opaque).
* color1& designates the 32-bit [LONG](./LONG.md) color value or range of color values color1& [TO](./TO.md) colour2& to set the transparency.
* If no color value or range of colors is given, the entire image's alpha is changed, including any [_CLEARCOLOR](./_CLEARCOLOR.md) settings.
* If imageHandle& is omitted, it is assumed to be the current write page or destination image.


#### DESCRIPTION
* In the first syntax, the alpha level of all pixels is set to alpha& .
* In the second syntax, the alpha level of all pixels matching the color color1& is set to alpha& .
* In the third syntax, the alpha level of all pixels with red, green, blue and alpha channels in the range [ color1& [TO](./TO.md) color2& ] are set.
* The [_ALPHA](./_ALPHA.md) setting makes a 32-bit color transparent, opaque or something in between. Zero is clear and 255 totally blocks underlying images. Use it to see through backgrounds or image colors.
* If alpha& is outside that range, an illegal function call error will occur.
* If the image specified by imageHandle& uses a palette, an invalid handle error will occur.
* If imageHandle& is an invalid handle, an illegal function call error will occur.
* NOTE: 32-bit [_NEWIMAGE](./_NEWIMAGE.md) screen page backgrounds are transparent black or [_ALPHA](./_ALPHA.md) 0. Use [_DONTBLEND](./_DONTBLEND.md) or [CLS](./CLS.md) for opaque.


#### EXAMPLES
##### Example: Using a _SETALPHA color range to fade an image in and out while not affecting the transparent white background.
```vb
main = _NEWIMAGE(640, 480, 32)
SCREEN main
_SCREENMOVE _MIDDLE

Image1& = _LOADIMAGE("qb64_trans.png") '<<< PNG file with white background to hide
_SOURCE Image1&
clr~& = POINT(0, 0) 'find background color of image
_CLEARCOLOR clr~&, Image1& 'set background color as transparent

topclr~& = clr~& - _RGBA(1, 1, 1, 0)  'get topmost color range just below full white
_DEST main

a& = 0
d = 1
DO
 _LIMIT 10 'regulate speed of fade in and out
 CLS ', _RGB(255, 0, 0)
 a& = a& + d
 IF a& = 255 THEN d = -d
 _SETALPHA a&, 0 TO topclr~&, Image1& 'affects all colors below bright white
 _PUTIMAGE (0, 342), Image1&
 LOCATE 1, 1: PRINT "Alpha: "; a&
 _DISPLAY
LOOP UNTIL a& = 0
```
  


#### SEE ALSO
* [_ALPHA](./_ALPHA.md) , [_ALPHA32](./_ALPHA32.md)
* [_RGBA](./_RGBA.md) , [_RGBA32](./_RGBA32.md)
* [_CLEARCOLOR](./_CLEARCOLOR.md)
* [_CLEARCOLOR](./_CLEARCOLOR.md) (function)
* [_BLEND](./_BLEND.md) , [_DONTBLEND](./_DONTBLEND.md)
* [COLOR](./COLOR.md) , Images
