## _UPRINTWIDTH
---

### The _UPRINTWIDTH function returns the width in pixels of the text string specified. The function supports Unicode encoded text.

#### SYNTAX

`pixelWidth& = _UPRINTWIDTH ( text$ [, utfEncoding& ][, fontHandle& ])`

#### PARAMETERS
* text$ is any literal or variable [STRING](./STRING.md) value.
* utfEncoding& is an optional UTF encoding of text$ . This can be 0 for ASCII, 8 for UTF-8, 16 for UTF-16 or 32 for UTF-32.
* fontHandle& is an optional font handle.


#### DESCRIPTION
* If the utfEncoding& is omitted, then it is assumed to be 0 (ASCII).
* If fontHandle& is omitted, then the current write page font is used.
* All multi-byte UTF encodings are expected in little-endian.
* Unicode byte order mark (BOM) is not processed and must be handled by user code.
* This can be useful to find the width of the font print string before actually printing it.
* Can be used with variable-width fonts or built-in fonts, unlike [_FONTWIDTH](./_FONTWIDTH.md) which requires a MONOSPACE font handle.
* Unlike [_PRINTWIDTH](./_PRINTWIDTH.md) , [_UPRINTWIDTH](./_UPRINTWIDTH.md) always returns the width of the text string in pixels.


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
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* [_UFONTHEIGHT](./_UFONTHEIGHT.md) , [_ULINESPACING](./_ULINESPACING.md) , [_UPRINTSTRING](./_UPRINTSTRING.md) , [_UCHARPOS](./_UCHARPOS.md)
* [_FONTWIDTH](./_FONTWIDTH.md) , [_FONTHEIGHT](./_FONTHEIGHT.md) , [_PRINTWIDTH](./_PRINTWIDTH.md)
* [_NEWIMAGE](./_NEWIMAGE.md) , [_LOADFONT](./_LOADFONT.md)
* [_PRINTSTRING](./_PRINTSTRING.md) , [_FONT](./_FONT.md)
* Text Using Graphics
