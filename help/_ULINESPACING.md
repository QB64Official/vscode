## _ULINESPACING
---

### The _ULINESPACING function returns the vertical line spacing (distance between two consecutive baselines) in pixels.

#### SYNTAX

`pixels& = _ULINESPACING [( fontHandle& )]`

#### PARAMETERS
* fontHandle& is an optional font handle.


#### DESCRIPTION
* Returns the vertical line spacing of the last font used if a handle is not designated.
* If no font is set, it returns the current screen mode's text block height.
* This can be used to leave the correct amount of line gap between lines.


#### EXAMPLES
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
* Featured in our "Keyword of the Day" series
* [_UPRINTWIDTH](./_UPRINTWIDTH.md) , [_UFONTHEIGHT](./_UFONTHEIGHT.md) , [_UPRINTSTRING](./_UPRINTSTRING.md) , [_UCHARPOS](./_UCHARPOS.md)
* [_FONTWIDTH](./_FONTWIDTH.md) , [_FONTHEIGHT](./_FONTHEIGHT.md) , [_FONT](./_FONT.md)
* [_PRINTWIDTH](./_PRINTWIDTH.md) , [_PRINTSTRING](./_PRINTSTRING.md)
* [SCREEN](./SCREEN.md) , [_LOADFONT](./_LOADFONT.md)
* Text Using Graphics
