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

## [_RGB32](RGB32.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_RGB32)
---
<blockquote>

### The _RGB32 function returns the 32-bit RGBA color value with specified red, green and blue component intensities and optional alpha.

</blockquote>

#### PARAMETERS

<blockquote>

*  red& specifies the red [LONG](LONG.md)  component intensity from 0 to 255.
*  green& specifies the green [LONG](LONG.md)  component intensity from 0 to 255.
*  blue& specifies the blue [LONG](LONG.md)  component intensity from 0 to 255.
*  alpha& specifies the alpha [LONG](LONG.md)  component from 0 to 255.
*  intensity& specifies the red, green and blue [LONG](LONG.md)  components intensity from 0 to 255 simultaneously, to generate a shade of gray.

</blockquote>

#### DESCRIPTION

<blockquote>

*  The value returned is always a 32-bit [_UNSIGNED](UNSIGNED.md) [LONG](LONG.md)  color value, as is the [POINT](POINT.md)  value.
*  Return variable types must be [_UNSIGNED](UNSIGNED.md) [LONG](LONG.md)  or [LONG](LONG.md)  , otherwise resulting color may lose the [_BLUE](BLUE.md)  value.
*  Parameter values outside of the 0 to 255 range are clipped.
*  Returns [LONG](LONG.md)  32 bit hexadecimal values from &H00 00 00 00 to &HFF FF FF FF .
*  When [LONG](LONG.md)  values are [PUT](PUT.md)  to file, the ARGB values become BGRA. Use LEFT$ ( MKL$ ( color32value~& ), 3) to place 3 colors.
*  NOTE: Default 32-bit backgrounds are clear black or [_RGB32](RGB32.md)  (0, 0). Use [CLS](CLS.md)  to make the black opaque.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_RGBA32](RGBA32.md)  , [_RGB](RGB.md)  , [_RGBA](RGBA.md) 
*  [_RED32](RED32.md)  , [_GREEN32](GREEN32.md)  , [_BLUE32](BLUE32.md) 
*  [_PALETTECOLOR](PALETTECOLOR.md) 
*  HEX$ 32 Bit Values
*  SaveImage [SUB](SUB.md) 
*  Hexadecimal Color Values

</blockquote>
