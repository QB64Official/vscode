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

*  column and row are [INTEGER](INTEGER.md)  or [LONG](LONG.md)  starting PIXEL (graphic) column and row coordinates to set text or custom fonts.
*  textExpression$ is any literal or variable string value of text to be displayed.
*  maxWidth& is an optional horizontal pixel limit after which the text rendering will be clipped.
*  utfEncoding& is an optional UTF encoding of textExpression$ . This can be 0 for ASCII, 8 for UTF-8, 16 for UTF-16 or 32 for UTF-32.
*  fontHandle& is an optional font handle.
*  imageHandle& is the optional image or destination to use. Zero designates current [SCREEN](SCREEN.md)  page.

</blockquote>

#### DESCRIPTION

<blockquote>

*  The starting coordinate sets the top left corner of the text to be printed.
*  If maxWidth& is omitted, then the entire textExpression$ is rendered.
*  If utfEncoding& is omitted, then it is assumed to be 0 (ASCII).
*  If fontHandle& is omitted, then the current write page font is used.
*  [_UPRINTWIDTH](UPRINTWIDTH.md)  can be used to determine how wide a text [PRINT](PRINT.md)  will be so that the screen [WIDTH](WIDTH.md)  is not exceeded. Alternatively, maxWidth& can be used to clip text rending after a certain amount of pixel [WIDTH](WIDTH.md) .
*  [_ULINESPACING](ULINESPACING.md)  can be used to calculate the next font vertical position.
*  Unicode byte order mark (BOM) is not processed and must be handled by user code except for UTF-16.
*  UTF-16 LE is assumed if BOM is absent in the string and utfEncoding& is 16.
*  Can use the current font alpha blending with a designated image background. See the [_RGBA](RGBA.md)  function example.
*  Use the [_PRINTMODE](PRINTMODE.md)  statement before printing to set how the background is rendered.
	* Use the [_PRINTMODE](PRINTMODE.md)  (function) to find the current [_PRINTMODE](PRINTMODE.md)  setting.
*  [SCREEN](SCREEN.md)  0 (text only) mode is not supported. Attempting to use this in [SCREEN](SCREEN.md)  0 will generate an error.


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series (Part 1)
*  Featured in our "Keyword of the Day" series (Part 2)
*  [_UPRINTWIDTH](UPRINTWIDTH.md)  , [_UFONTHEIGHT](UFONTHEIGHT.md)  , [_ULINESPACING](ULINESPACING.md)  , [_UCHARPOS](UCHARPOS.md) 
*  [_NEWIMAGE](NEWIMAGE.md)  , [_PRINTWIDTH](PRINTWIDTH.md)  , [_PRINTMODE](PRINTMODE.md) 
*  [_CONTROLCHR](CONTROLCHR.md) 
*  [_FONT](FONT.md)  , [_LOADFONT](LOADFONT.md)  , [_FONTHEIGHT](FONTHEIGHT.md)  , [_FONTWIDTH](FONTWIDTH.md) 
*  [_SCREENIMAGE](SCREENIMAGE.md)  , [_SCREENPRINT](SCREENPRINT.md) 
*  Text Using Graphics

</blockquote>
