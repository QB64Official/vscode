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

## [_ALPHA32](ALPHA32.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_ALPHA32)
---
<blockquote>

### The _ALPHA32 function returns the alpha transparency level of a 32 bit color value.

</blockquote>

#### SYNTAX

<blockquote>

`alpha& = _ALPHA32 ( color32~& )`

</blockquote>

#### PARAMETERS

<blockquote>

*  color32& is the [_UNSIGNED](UNSIGNED.md) [LONG](LONG.md)  32 bit color value used to retrieve the alpha level.
	* [COLOR](COLOR.md)  values that are set as a [_CLEARCOLOR](CLEARCOLOR.md)  always have an alpha level of 0 (transparent).
	* [_SETALPHA](SETALPHA.md)  can set any alpha level from 0 (or fully transparent) to 255 (or opaque).
	* Normal color values that are set by [_RGB](RGB.md)  or [_RGB32](RGB32.md)  always have an alpha level of 255 (opaque).

</blockquote>

#### DESCRIPTION

<blockquote>

*  In 4-bit (16 colors) or 8-bit (256 colors) palette screens the function will return 0.
*  [_RED32](RED32.md)  , [_GREEN32](GREEN32.md)  , [_BLUE32](BLUE32.md) [AND](AND.md)  [_ALPHA32](ALPHA32.md)  are all equivalent to [_RED](RED.md)  , [_GREEN](GREEN.md)  , [_BLUE](BLUE.md) [AND](AND.md)  [_ALPHA](ALPHA.md)  but they are highly optimized [AND](AND.md)  only accept a 32-bit color (RGBA) value. Using these in your code (opposed to dividing then ANDing 32-bit color values) makes code easy to read.
*  NOTE: 32 bit [_NEWIMAGE](NEWIMAGE.md)  screen page backgrounds are transparent black or [_ALPHA](ALPHA.md)  0. Use [_DONTBLEND](DONTBLEND.md)  or [CLS](CLS.md)  for opaque!


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  [_ALPHA](ALPHA.md)  , [_SETALPHA](SETALPHA.md) 
*  [_RGBA](RGBA.md)  , [_RGBA32](RGBA32.md)  (set color with alpha)
*  [_RED](RED.md)  , [_GREEN](GREEN.md)  , [_BLUE](BLUE.md) 
*  [_RED32](RED32.md)  , [_GREEN32](GREEN32.md)  . [_BLUE32](BLUE32.md) 
*  [_CLEARCOLOR](CLEARCOLOR.md)  , [_CLEARCOLOR](CLEARCOLOR.md)  (function)
*  Images

</blockquote>
