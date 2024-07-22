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

## [_RGBA32](RGBA32.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_RGBA32)
---
<blockquote>

### The _RGBA32 function returns the 32-bit RGBA color value with the specified red, green, blue and alpha component intensities.

</blockquote>

#### SYNTAX

<blockquote>

`color32value~& = _RGBA32 ( red& , green& , blue& , alpha& )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  The value returned is a 32-bit [_UNSIGNED](UNSIGNED.md) [LONG](LONG.md)  color value.
*  Return variable types must be [_UNSIGNED](UNSIGNED.md) [LONG](LONG.md)  or resulting color may lose the [_BLUE](BLUE.md)  value.
*  red& specifies the red component intensity from 0 to 255.
*  green& specifies the green component intensity from 0 to 255.
*  blue& specifies the blue component intensity from 0 to 255.
*  alpha& specifies the alpha component transparency value from 0 (fully transparent) to 255 (opaque).
*  Alpha or intensity values outside of the valid range of 0 to 255 are clipped.
*  Returns [LONG](LONG.md)  32-bit hexadecimal values from &H00 00 00 00 to &HFF FF FF FF with varying [_ALPHA](ALPHA.md)  transparency.
*  When [LONG](LONG.md)  values are [PUT](PUT.md)  to file, the ARGB values become BGRA. Use LEFT$ ( MKL$ ( color32value~& ), 3) to place 3 colors.
*  NOTE: Default 32-bit backgrounds are clear black or [_RGBA](RGBA.md)  (0, 0, 0, 0). Use [CLS](CLS.md)  to make the black opaque.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_RGB32](RGB32.md)  , [_RGBA](RGBA.md)  , [_RGB](RGB.md) 
*  [_RED32](RED32.md)  , [_GREEN32](GREEN32.md)  , [_BLUE32](BLUE32.md) 
*  HEX$ 32 Bit Values , [POINT](POINT.md) 
*  SaveImage [SUB](SUB.md) 
*  Hexadecimal Color Values

</blockquote>
