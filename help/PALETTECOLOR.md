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

## [_PALETTECOLOR](PALETTECOLOR.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_PALETTECOLOR)
---
<blockquote>

### The _PALETTECOLOR statement sets the color value of a palette entry of an image using 256 color modes or less (4 or 8 BPP).

</blockquote>

#### SYNTAX

<blockquote>

`_PALETTECOLOR attribute% , newColor& [, destHandle& ]`

</blockquote>

#### DESCRIPTION

<blockquote>

*  The attribute% is the palette index number of the color to set, ranging from 0 to 15 (4 bit) or 0 to 255 (8 bit) color modes.
*  The [LONG](LONG.md)  newColor& is the new color value to set using [_RGB32](RGB32.md)  or [_RGBA32](RGBA32.md)  values or using HEX$ 32 Bit Values .
*  If destHandle& is omitted, destination is assumed to be the current write page or screen surface.
*  If attribute% is outside of image or screen mode attribute range (0 to 15 or 0 to 255), an illegal function call error will occur.
*  If destHandle& does not use a palette, an illegal function call error occurs. Will not work in 24/32 bit color palette modes.
*  If destHandle& is an invalid handle value, an invalid handle error occurs.


</blockquote>

#### SEE ALSO

<blockquote>

*  [COLOR](COLOR.md)  , [_RGB32](RGB32.md)  , [_RGBA32](RGBA32.md) 
*  [_PALETTECOLOR](PALETTECOLOR.md)  (function)
*  [PALETTE](PALETTE.md)  , [OUT](OUT.md)  , [INP](INP.md) 
*  Images
*  HEX$ 32 Bit Values

</blockquote>
