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

## [_UFONTHEIGHT](UFONTHEIGHT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_UFONTHEIGHT)
---
<blockquote>

### The _UFONTHEIGHT function returns the global glyph height (incl. ascender/descender) of a font loaded by _LOADFONT .

</blockquote>

#### SYNTAX

<blockquote>

`pixelHeight& = _UFONTHEIGHT [( fontHandle& )]`

</blockquote>

#### PARAMETERS

<blockquote>

*  fontHandle& is an optional font handle.

</blockquote>

#### DESCRIPTION

<blockquote>

*  Returns the height of the last font used if a handle is not designated.
*  If no font is set, it returns the current screen mode's text block height.
*  This is different from [_FONTHEIGHT](FONTHEIGHT.md)  as it may return larger values when using scalable fonts.


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  [_UPRINTWIDTH](UPRINTWIDTH.md)  , [_ULINESPACING](ULINESPACING.md)  , [_UPRINTSTRING](UPRINTSTRING.md)  , [_UCHARPOS](UCHARPOS.md) 
*  [_FONTWIDTH](FONTWIDTH.md)  , [_FONTHEIGHT](FONTHEIGHT.md)  , [_FONT](FONT.md) 
*  [_PRINTWIDTH](PRINTWIDTH.md)  , [_PRINTSTRING](PRINTSTRING.md) 
*  [SCREEN](SCREEN.md)  , [_LOADFONT](LOADFONT.md) 
*  Text Using Graphics

</blockquote>
