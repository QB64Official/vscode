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

## [_FONTHEIGHT_(function)](FONTHEIGHT_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_FONTHEIGHT (function))
---
<blockquote>

### The _FONTHEIGHT function returns the font height of a font handle created by _LOADFONT .

</blockquote>

#### SYNTAX

<blockquote>

`pixelHeight% = _FONTHEIGHT [( fontHandle& )]`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Returns the height of the last font used if a handle is not designated.
*  If no font is set it returns the current screen mode's text block height.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_FONTWIDTH](FONTWIDTH.md)  , [_FONT](FONT.md) 
*  [_PRINTWIDTH](PRINTWIDTH.md)  , [_PRINTSTRING](PRINTSTRING.md) 
*  [SCREEN](SCREEN.md)  , [_LOADFONT](LOADFONT.md) 
*  Text Using Graphics (Demo)

</blockquote>
