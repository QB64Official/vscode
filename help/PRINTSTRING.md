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

## [_PRINTSTRING](PRINTSTRING.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_PRINTSTRING)
---
<blockquote>

### The _PRINTSTRING statement prints text strings using graphic column and row coordinate positions.

</blockquote>

#### SYNTAX

<blockquote>

`_PRINTSTRING ( column , row ), textExpression$ [, imageHandle& ]`

</blockquote>

#### PARAMETERS

<blockquote>

*  column and row are [INTEGER](INTEGER.md)  or [LONG](LONG.md)  starting PIXEL (graphic) column and row coordinates to set text or custom fonts.
*  textExpression$ is any literal or variable string value of text to be displayed.
*  imageHandle& is the optional image or destination to use. Zero designates current [SCREEN](SCREEN.md)  page.

</blockquote>

#### DESCRIPTION

<blockquote>

*  The starting coordinate sets the top left corner of the text to be printed. Use [_FONTHEIGHT](FONTHEIGHT.md)  to calculate that text or font position
*  The [_FONT](FONT.md)  size can affect the screen and row heights.
	* Custom fonts are not required. [_PRINTSTRING](PRINTSTRING.md)  can [PRINT](PRINT.md)  all ASCII characters.
*  [_PRINTWIDTH](PRINTWIDTH.md)  can be used to determine how wide a text [PRINT](PRINT.md)  will be so that the screen [WIDTH](WIDTH.md)  is not exceeded.
*  If the imageHandle& is omitted, the current image, page or screen destination is used.
*  Can use the current font alpha blending with a designated image background. See the [_RGBA](RGBA.md)  function example.
*  Use the [_PRINTMODE](PRINTMODE.md)  statement before printing to set how the background is rendered.
	* Use the [_PRINTMODE](PRINTMODE.md)  (function) to find the current [_PRINTMODE](PRINTMODE.md)  setting.
*  In [SCREEN](SCREEN.md)  0 (text only), [_PRINTSTRING](PRINTSTRING.md)  works as one-line replacement for [LOCATE](LOCATE.md)  x, y: [PRINT](PRINT.md)  text$ , without changing the current cursor position.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_NEWIMAGE](NEWIMAGE.md)  , [_PRINTWIDTH](PRINTWIDTH.md)  , [_PRINTMODE](PRINTMODE.md) 
*  [_CONTROLCHR](CONTROLCHR.md) 
*  [_FONT](FONT.md)  , [_LOADFONT](LOADFONT.md)  , [_FONTHEIGHT](FONTHEIGHT.md)  , [_FONTWIDTH](FONTWIDTH.md) 
*  [_SCREENIMAGE](SCREENIMAGE.md)  , [_SCREENPRINT](SCREENPRINT.md) 
*  Text Using Graphics

</blockquote>
