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
    margin: 0 0 1em 0  !important;
    color: #88f !important;
    border: 0 !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
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
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
    margin: 0 !important;
    box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.25) !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}

</style>

## [_UPRINTWIDTH](UPRINTWIDTH.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_UPRINTWIDTH)
---
<blockquote>

### The _UPRINTWIDTH function returns the width in pixels of the text string specified. The function supports Unicode encoded text.

</blockquote>

#### SYNTAX

<blockquote>

`pixelWidth& = _UPRINTWIDTH ( text$ [, utfEncoding& ][, fontHandle& ])`

</blockquote>

#### PARAMETERS

<blockquote>

*  text$ is any literal or variable [STRING](STRING.md)  value.
*  utfEncoding& is an optional UTF encoding of text$ . This can be 0 for ASCII, 8 for UTF-8, 16 for UTF-16 or 32 for UTF-32.
*  fontHandle& is an optional font handle.

</blockquote>

#### DESCRIPTION

<blockquote>

*  If the utfEncoding& is omitted, then it is assumed to be 0 (ASCII).
*  If fontHandle& is omitted, then the current write page font is used.
*  All multi-byte UTF encodings are expected in little-endian.
*  Unicode byte order mark (BOM) is not processed and must be handled by user code.
*  This can be useful to find the width of the font print string before actually printing it.
*  Can be used with variable- [WIDTH](WIDTH.md)  fonts or built-in fonts, unlike [_FONTWIDTH](FONTWIDTH.md)  which requires a MONOSPACE font handle.
*  Unlike [_PRINTWIDTH](PRINTWIDTH.md)  , [_UPRINTWIDTH](UPRINTWIDTH.md)  always returns the [WIDTH](WIDTH.md)  of the text string in pixels.


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  [_UFONTHEIGHT](UFONTHEIGHT.md)  , [_ULINESPACING](ULINESPACING.md)  , [_UPRINTSTRING](UPRINTSTRING.md)  , [_UCHARPOS](UCHARPOS.md) 
*  [_FONTWIDTH](FONTWIDTH.md)  , [_FONTHEIGHT](FONTHEIGHT.md)  , [_PRINTWIDTH](PRINTWIDTH.md) 
*  [_NEWIMAGE](NEWIMAGE.md)  , [_LOADFONT](LOADFONT.md) 
*  [_PRINTSTRING](PRINTSTRING.md)  , [_FONT](FONT.md) 
*  Text Using Graphics

</blockquote>
