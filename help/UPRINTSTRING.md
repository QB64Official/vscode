<style type="text/css">
body {
    background: #00a !important;
    color: #ccc !important;
}
li {
    list-style-type: square !important;
    color: #ccc !important;
}
li::marker {
    color: #77f !important;
}    
hr {
    border-color: #55f !important;
    border-width: 2px !important;
}
h2 {
    color: #fff !important;
    border: 0 !important;
}
h3 {
    color: #cfc !important;
    border: 0 !important;
}
h4 {
    color: #ccc !important;
    border: 0 !important;
}
h5 {
    margin: 0 0 0.5em 0  !important;
    color: #88f !important;
    border: 0 !important;
    font-style: italic !important;
    font-weight: normal !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 4px !important; 
    border: 1px solid #333 !important;
}
pre > code {
    background: transparent !important;
    margin: 0 !important;
    padding: 0 !important;
    border-radius: inherit !important; 
    border: 0 !important;
}
blockquote {
    border: 0 !important;
    background: transparent !important;
    margin: 0 !important;
    padding: 0 1em !important;
}
pre {
    border-radius: 4px !important;
    background: #000 !important;
    border: 1px solid #333 !important;
    margin: 0 !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}
br + pre {
    border-radius: 0 !important;
    border-style: inset !important;
    border-width: 5px !important;
    border-color: #999 !important;
    background-color: #000 !important;
    box-shadow: 0px 10px 3px rgba(0, 0, 0, 0.25) !important;
    margin-top: -1em !important;
}
br + pre::before {
    content: "OUTPUT \A" !important;
    color: #555 !important;
    border-bottom: 1px solid #333;
    font-size: x-small;
    display: block !important;
    padding: 0 3px !important;
    margin: -1em -1em 1em -1em !important;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */    
}
br ~ h5 {
    margin-top: 2em !important;
}
.explanation {
    color: #995 !important;
    /* background-color: rgba(150, 150, 100) !important; */
    border-radius: 10em !important;
    border: 2px #441 dashed !important;
    padding: 8px 32px !important;
    margin-bottom: 4em !important;
    font-size: x-small !important;
}
</style>


## [_UPRINTSTRING](UPRINTSTRING.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_UPRINTSTRING)
---
<blockquote>

### The _UPRINTSTRING statement prints ASCII / UNICODE text strings using graphic column and row coordinate positions.

</blockquote>

#### SYNTAX

<blockquote>

`_UPRINTSTRING ( column , row ), textExpression$ [, maxWidth& ][, utfEncoding& ][, fontHandle& ][, imageHandle& ]`

</blockquote>

#### PARAMETERS

<blockquote>


* column and row are [INTEGER](INTEGER.md) or [LONG](LONG.md) starting PIXEL (graphic) column and row coordinates to set text or custom fonts.
* textExpression$ is any literal or variable string value of text to be displayed.
* maxWidth& is an optional horizontal pixel limit after which the text rendering will be clipped.
* utfEncoding& is an optional UTF encoding of textExpression$ . This can be 0 for ASCII, 8 for UTF-8, 16 for UTF-16 or 32 for UTF-32.
* fontHandle& is an optional font handle.
* imageHandle& is the optional image or destination to use. Zero designates current [SCREEN](SCREEN.md) page.
</blockquote>

#### DESCRIPTION

<blockquote>


* The starting coordinate sets the top left corner of the text to be printed.
* If maxWidth& is omitted, then the entire textExpression$ is rendered.
* If utfEncoding& is omitted, then it is assumed to be 0 (ASCII).
* If fontHandle& is omitted, then the current write page font is used.
* [_UPRINTWIDTH](UPRINTWIDTH.md) can be used to determine how wide a text print will be so that the screen width is not exceeded. Alternatively, maxWidth& can be used to clip text rending after a certain amount of pixel width.
* [_ULINESPACING](ULINESPACING.md) can be used to calculate the next font vertical position.
* Unicode byte order mark (BOM) is not processed and must be handled by user code except for UTF-16.
* UTF-16 LE is assumed if BOM is absent in the string and utfEncoding& is 16.
* Can use the current font alpha blending with a designated image background. See the [_RGBA](RGBA.md) function example.
* Use the [_PRINTMODE](PRINTMODE.md) statement before printing to set how the background is rendered.
* Use the [_PRINTMODE](PRINTMODE.md) (function) to find the current [_PRINTMODE](PRINTMODE.md) setting.
* [SCREEN](SCREEN.md) 0 (text only) mode is not supported. Attempting to use this in [SCREEN](SCREEN.md) 0 will generate an error.

</blockquote>

#### EXAMPLES

<blockquote>

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
  
<br>

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
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series (Part 1)
* Featured in our "Keyword of the Day" series (Part 2)
* [_UPRINTWIDTH](UPRINTWIDTH.md) , [_UFONTHEIGHT](UFONTHEIGHT.md) , [_ULINESPACING](ULINESPACING.md) , [_UCHARPOS](UCHARPOS.md)
* [_NEWIMAGE](NEWIMAGE.md) , [_PRINTWIDTH](PRINTWIDTH.md) , [_PRINTMODE](PRINTMODE.md)
* [_CONTROLCHR](CONTROLCHR.md)
* [_FONT](FONT.md) , [_LOADFONT](LOADFONT.md) , [_FONTHEIGHT](FONTHEIGHT.md) , [_FONTWIDTH](FONTWIDTH.md)
* [_SCREENIMAGE](SCREENIMAGE.md) , [_SCREENPRINT](SCREENPRINT.md)
* Text Using Graphics
</blockquote>
