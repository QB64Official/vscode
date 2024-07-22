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

## [_BLUE32](BLUE32.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_BLUE32)
---
<blockquote>

### The _BLUE32 function returns the blue component intensity of a 32-bit image or surface color.

</blockquote>

#### SYNTAX

<blockquote>

`blue32color& = _BLUE32 ( rgbaColor& )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  rgbaColor& is the 32-bit RGBA color value to retrieve the blue component intensity value from.
*  RGBA [COLOR](COLOR.md)  values are returned by the [_PALETTECOLOR](PALETTECOLOR.md)  , [POINT](POINT.md)  , [_RGB](RGB.md)  , [_RGB32](RGB32.md)  , [_RGBA](RGBA.md) [OR](OR.md)  [_RGBA32](RGBA32.md)  functions.
*  [LONG](LONG.md)  intensity values returned range from 0 (no intensity, not present) to 255 (full intensity).


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  [_RED32](RED32.md)  , [_GREEN32](GREEN32.md) 
*  [_RGB32](RGB32.md)  , [_BLUE](BLUE.md) 

</blockquote>
