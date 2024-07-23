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


## [_PRINTWIDTH](PRINTWIDTH.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_PRINTWIDTH)
---
<blockquote>

### The _PRINTWIDTH function returns the width in pixels of the text string specified.

</blockquote>

#### SYNTAX

<blockquote>

`pixelWidth% = _PRINTWIDTH ( textToPrint$ [, destinationHandle& ])`

</blockquote>

#### DESCRIPTION

<blockquote>


* textToPrint$ is any literal or variable [STRING](STRING.md) value.
* If the destinationHandle& is omitted, the current destination image or screen page is used.
* Useful to find the width of the font print string before actually printing it.
* Can be used with variable-width fonts or built-in fonts, unlike [_FONTWIDTH](FONTWIDTH.md) which requires a MONOSPACE font handle.
* In [SCREEN](SCREEN.md) 0, [_PRINTWIDTH](PRINTWIDTH.md) returns the character length of a text string, exactly as [LEN](LEN.md) ( textToPrint$ ) ( version 1.000 and up ).

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: SUB returns font or screen mode's text block size using _PRINTWIDTH and _FONTHEIGHT without a handle parameter.
```vb
DO
INPUT "Enter Screen mode 1, 2 or 7 to 13: ", scr$
mode% = VAL(scr$)
LOOP UNTIL mode% > 0
SCREEN mode%
INPUT "Enter first name of TTF font to use or hit enter for text size: ", TTFont$
IF LEN(TTFont$) THEN INPUT "Enter font height: ", hi$
height& = VAL(hi$)
IF height& > 0 THEN _FONT _LOADFONT("C:\Windows\Fonts\" + TTFont$ + ".ttf", height&, style$)

TextSize wide&, high&       'get the font or current screen mode's text block pixel size

_PRINTSTRING (20, 100), CHR$(1) + STR$(wide&) + " X" + STR$(high&) + " " + CHR$(2)

END

SUB TextSize (TextWidth&, TextHeight&)
TextWidth& = _PRINTWIDTH("W")     'measure width of one font or text character
TextHeight& = _FONTHEIGHT         'can measure normal text block heights also
END SUB
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_FONTWIDTH](FONTWIDTH.md) , [_FONTHEIGHT](FONTHEIGHT.md)
* [_NEWIMAGE](NEWIMAGE.md) , [_LOADFONT](LOADFONT.md)
* [_PRINTSTRING](PRINTSTRING.md) , [_FONT](FONT.md)
* Text Using Graphics
</blockquote>
