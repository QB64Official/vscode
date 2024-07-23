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


## [_UCHARPOS](UCHARPOS.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_UCHARPOS)
---
<blockquote>

### The _UCHARPOS function calculates the starting pixel positions of every character of the text string (0 being the starting pixel position of the first character). This information is returned in a long array. The function also returns the number of characters in the text string . The function supports Unicode encoded text.

</blockquote>

#### SYNTAX

<blockquote>

`codepoints& = _UCHARPOS ( text$ [, posArray&() ][, utfEncoding& ][, fontHandle& ])`

</blockquote>

#### PARAMETERS

<blockquote>


* text$ is any literal or variable [STRING](STRING.md) value. This can be a Unicode encoded text.
* posArray&() is a long array that contains the pixel position information after a call to [_UCHARPOS](UCHARPOS.md) .
* utfEncoding& is an optional UTF encoding of text$ . This can be 0 for ASCII, 8 for UTF-8, 16 for UTF-16 or 32 for UTF-32.
* fontHandle& is an optional font handle.
</blockquote>

#### DESCRIPTION

<blockquote>


* If posArray&() is omitted, then the function simply returns the number of characters in the text string .
* If utfEncoding& is omitted, then it is assumed to be 0 (ASCII).
* If fontHandle& is omitted, then the current write page font is used.
* posArray&(codepoints&) (assuming posArray&() is declared (indexed) as 0 [TO](TO.md) codepoints& ) will hold the (ending pixel position of the last character) + 1.
* All multi-byte UTF encodings are expected in little-endian.
* Unicode byte order mark (BOM) is not processed and must be handled by user code.
* This can be useful when the positions of every character in a string is required (e.g., when underling text or drawing a text cursor). This can be especially helpful when using variable width fonts.
* When working with Unicode excoded text, instead of calling the function twice (first time to get the array size and then a second time to get the pixel positions), call it once with a large enough array (0 [TO](TO.md) [LEN](LEN.md) ( text$ )) and then resize the array (0 [TO](TO.md) codepoints& ) using [REDIM](REDIM.md) PRESERVE .

</blockquote>

#### EXAMPLES

<blockquote>

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
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* [_UFONTHEIGHT](UFONTHEIGHT.md) , [_ULINESPACING](ULINESPACING.md) , [_UPRINTWIDTH](UPRINTWIDTH.md) , [_UPRINTSTRING](UPRINTSTRING.md)
* [_FONTWIDTH](FONTWIDTH.md) , [_FONTHEIGHT](FONTHEIGHT.md) , [_PRINTWIDTH](PRINTWIDTH.md)
* [_NEWIMAGE](NEWIMAGE.md) , [_LOADFONT](LOADFONT.md)
* [_PRINTSTRING](PRINTSTRING.md) , [_FONT](FONT.md)
* Text Using Graphics
</blockquote>
