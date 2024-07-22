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

*  textToPrint$ is any literal or variable [STRING](STRING.md)  value.
*  If the destinationHandle& is omitted, the current destination image or screen page is used.
*  Useful to find the width of the font print string before actually printing it.
*  Can be used with variable- [WIDTH](WIDTH.md)  fonts or built-in fonts, unlike [_FONTWIDTH](FONTWIDTH.md)  which requires a MONOSPACE font handle.
*  In [SCREEN](SCREEN.md)  0, [_PRINTWIDTH](PRINTWIDTH.md)  returns the character length of a text string, exactly as [LEN](LEN.md)  ( textToPrint$ ) ( version 1.000 and up ).


</blockquote>

#### SEE ALSO

<blockquote>

*  [_FONTWIDTH](FONTWIDTH.md)  , [_FONTHEIGHT](FONTHEIGHT.md) 
*  [_NEWIMAGE](NEWIMAGE.md)  , [_LOADFONT](LOADFONT.md) 
*  [_PRINTSTRING](PRINTSTRING.md)  , [_FONT](FONT.md) 
*  Text Using Graphics

</blockquote>
