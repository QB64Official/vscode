## _UPRINTSTRING
---

### The _UPRINTSTRING statement prints ASCII / UNICODE text strings using graphic column and row coordinate positions.

#### SYNTAX

`_UPRINTSTRING ( column , row ), textExpression$ [, maxWidth& ][, utfEncoding& ][, fontHandle& ][, imageHandle& ]`

#### PARAMETERS
* column and row are [INTEGER](./INTEGER.md) or [LONG](./LONG.md) starting PIXEL (graphic) column and row coordinates to set text or custom fonts.
* textExpression$ is any literal or variable string value of text to be displayed.
* maxWidth& is an optional horizontal pixel limit after which the text rendering will be clipped.
* utfEncoding& is an optional UTF encoding of textExpression$ . This can be 0 for ASCII, 8 for UTF-8, 16 for UTF-16 or 32 for UTF-32.
* fontHandle& is an optional font handle.
* imageHandle& is the optional image or destination to use. Zero designates current [SCREEN](./SCREEN.md) page.


#### DESCRIPTION
* The starting coordinate sets the top left corner of the text to be printed.
* If maxWidth& is omitted, then the entire textExpression$ is rendered.
* If utfEncoding& is omitted, then it is assumed to be 0 (ASCII).
* If fontHandle& is omitted, then the current write page font is used.
* [_UPRINTWIDTH](./_UPRINTWIDTH.md) can be used to determine how wide a text print will be so that the screen width is not exceeded. Alternatively, maxWidth& can be used to clip text rending after a certain amount of pixel width.
* [_ULINESPACING](./_ULINESPACING.md) can be used to calculate the next font vertical position.
* Unicode byte order mark (BOM) is not processed and must be handled by user code except for UTF-16.
* UTF-16 LE is assumed if BOM is absent in the string and utfEncoding& is 16.
* Can use the current font alpha blending with a designated image background. See the [_RGBA](./_RGBA.md) function example.
* Use the [_PRINTMODE](./_PRINTMODE.md) statement before printing to set how the background is rendered.
	* Use the [_PRINTMODE](./_PRINTMODE.md) (function) to find the current [_PRINTMODE](./_PRINTMODE.md) setting.
* [SCREEN](./SCREEN.md) 0 (text only) mode is not supported. Attempting to use this in [SCREEN](./SCREEN.md) 0 will generate an error.


#### EXAMPLES
```vb
OPTION _EXPLICIT

SCREEN _NEWIMAGE(800, 600, 32)

DIM fh AS LONG: fh = _LOADFONT("cyberbit.ttf", 21)
IF fh <= 0 THEN
   PRINT "Failed to load font file!"
   END
END IF

_FONT fh

RESTORE text_data
DIM myString AS STRING: myString = LoadUData$

_UPRINTSTRING (_WIDTH \ 2 - _UPRINTWIDTH(myString, 8, fh) \ 2, _HEIGHT \ 2 - _UFONTHEIGHT \ 2), myString, _WIDTH, 8

END

text_data:
DATA 6F,D0,91,D1,8B,D1,81,D1,82,D1,80,D0,B0,D1,8F,20,D0,BA,D0,BE,D1,80,D0,B8,D1
DATA 87,D0,BD,D0,B5,D0,B2,D0,B0,D1,8F,20,D0,BB,D0,B8,D1,81,D0,B0,20,D0,BF,D0,B5
DATA D1,80,D0,B5,D0,BF,D1,80,D1,8B,D0,B3,D0,B8,D0,B2,D0,B0,D0,B5,D1,82,20,D1,87
DATA D0,B5,D1,80,D0,B5,D0,B7,20,D0,BB,D0,B5,D0,BD,D0,B8,D0,B2,D1,83,D1,8E,20,D1
DATA 81,D0,BE,D0,B1,D0,B0,D0,BA,D1,83,2E

FUNCTION LoadUData$
   DIM AS _UNSIGNED LONG i, s
   DIM d AS STRING
   DIM buffer AS STRING

   READ d
   s = VAL("&h" + d)
   buffer = SPACE$(s)

   FOR i = 1 TO s
       READ d
       ASC(buffer, i) = VAL("&h" + d)
   NEXT

   LoadUData = buffer
END FUNCTION
```
  
```vb
OPTION _EXPLICIT

SCREEN _NEWIMAGE(800, 600, 32)

DIM fh AS LONG: fh = _LOADFONT("LHANDW.TTF", 23)
IF fh <= 0 THEN
   PRINT "Failed to load font file!"
   END
END IF

_FONT fh

CLS , _RGB32(200, 200, 200)
COLOR _RGB32(0, 0, 0)
_PRINTMODE _KEEPBACKGROUND

DIM l AS STRING, i AS LONG
FOR i = 0 TO 4
   READ l
   _UPRINTSTRING (0, _ULINESPACING * i), l
NEXT

END

DATA "We are not now that strength which in old days"
DATA "Moved earth and heaven; that which we are,we are;"
DATA "One equal temper of heroic hearts,"
DATA "Made weak by time and fate,but strong in will"
DATA "To strive,to seek,to find,and not to yield."
```
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series (Part 1)
* Featured in our "Keyword of the Day" series (Part 2)
* [_UPRINTWIDTH](./_UPRINTWIDTH.md) , [_UFONTHEIGHT](./_UFONTHEIGHT.md) , [_ULINESPACING](./_ULINESPACING.md) , [_UCHARPOS](./_UCHARPOS.md)
* [_NEWIMAGE](./_NEWIMAGE.md) , [_PRINTWIDTH](./_PRINTWIDTH.md) , [_PRINTMODE](./_PRINTMODE.md)
* [_CONTROLCHR](./_CONTROLCHR.md)
* [_FONT](./_FONT.md) , [_LOADFONT](./_LOADFONT.md) , [_FONTHEIGHT](./_FONTHEIGHT.md) , [_FONTWIDTH](./_FONTWIDTH.md)
* [_SCREENIMAGE](./_SCREENIMAGE.md) , [_SCREENPRINT](./_SCREENPRINT.md)
* Text Using Graphics
