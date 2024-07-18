## _UCHARPOS
---

### The _UCHARPOS function calculates the starting pixel positions of every character of the text string (0 being the starting pixel position of the first character). This information is returned in a long array. The function also returns the number of characters in the text string . The function supports Unicode encoded text.

#### SYNTAX

`codepoints& = _UCHARPOS ( text$ [, posArray&() ][, utfEncoding& ][, fontHandle& ])`

#### PARAMETERS
* text$ is any literal or variable [STRING](./STRING.md) value. This can be a Unicode encoded text.
* posArray&() is a long array that contains the pixel position information after a call to [_UCHARPOS](./_UCHARPOS.md) .
* utfEncoding& is an optional UTF encoding of text$ . This can be 0 for ASCII, 8 for UTF-8, 16 for UTF-16 or 32 for UTF-32.
* fontHandle& is an optional font handle.


#### DESCRIPTION
* If posArray&() is omitted, then the function simply returns the number of characters in the text string .
* If utfEncoding& is omitted, then it is assumed to be 0 (ASCII).
* If fontHandle& is omitted, then the current write page font is used.
* posArray&(codepoints&) (assuming posArray&() is declared (indexed) as 0 [TO](./TO.md) codepoints& ) will hold the (ending pixel position of the last character) + 1.
* All multi-byte UTF encodings are expected in little-endian.
* Unicode byte order mark (BOM) is not processed and must be handled by user code.
* This can be useful when the positions of every character in a string is required (e.g., when underling text or drawing a text cursor). This can be especially helpful when using variable width fonts.
* When working with Unicode excoded text, instead of calling the function twice (first time to get the array size and then a second time to get the pixel positions), call it once with a large enough array (0 [TO](./TO.md) [LEN](./LEN.md) ( text$ )) and then resize the array (0 [TO](./TO.md) codepoints& ) using [REDIM](./REDIM.md) PRESERVE .


#### EXAMPLES
```vb
OPTION _EXPLICIT

SCREEN 12

CONST TEXT = "Hello, world!"
CONST TEXT_X = 220
CONST TEXT_Y = 220

DIM fh AS LONG: fh = _LOADFONT("arial.ttf", 32)
_FONT fh

DIM arr(0 TO LEN(TEXT)) AS LONG, i AS LONG

PRINT "Len of "; TEXT; " ="; _UCHARPOS(TEXT, arr())

_UPRINTSTRING (TEXT_X, TEXT_Y), TEXT

FOR i = LBOUND(arr) TO UBOUND(arr) - 1
   PRINT arr(i + 1);
   LINE (TEXT_X + arr(i), TEXT_Y + _UFONTHEIGHT)-(TEXT_X + arr(i + 1) - 1, TEXT_Y + _UFONTHEIGHT), 9 + i MOD 7
NEXT

END
```
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* [_UFONTHEIGHT](./_UFONTHEIGHT.md) , [_ULINESPACING](./_ULINESPACING.md) , [_UPRINTWIDTH](./_UPRINTWIDTH.md) , [_UPRINTSTRING](./_UPRINTSTRING.md)
* [_FONTWIDTH](./_FONTWIDTH.md) , [_FONTHEIGHT](./_FONTHEIGHT.md) , [_PRINTWIDTH](./_PRINTWIDTH.md)
* [_NEWIMAGE](./_NEWIMAGE.md) , [_LOADFONT](./_LOADFONT.md)
* [_PRINTSTRING](./_PRINTSTRING.md) , [_FONT](./_FONT.md)
* Text Using Graphics
