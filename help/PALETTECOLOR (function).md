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

## [_PALETTECOLOR_(function)](PALETTECOLOR_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_PALETTECOLOR (function))
---
<blockquote>

### The _PALETTECOLOR function is used to return the 32 bit attribute color setting of an image or screen page handle's palette.

</blockquote>

#### SYNTAX

<blockquote>

`color32Value& = _PALETTECOLOR ( attributeNumber% , imgHandle& )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  attributeNumber% is the color attribute value from 0 to 255 for 1, 4 or 8 bit images.
*  imgHandle& is the image handle being read for color data. Zero can be used to read the current screen mode palette.
*  Returns the 32 bit color value to be used by the 32 bit RGB functions.
*  For 32 bit images send the [_PALETTECOLOR](PALETTECOLOR.md)  return value to [_RED32](RED32.md)  , [_GREEN32](GREEN32.md)  and [_BLUE32](BLUE32.md)  functions to get the red, green, and blue intensity values.
*  Although 32 bit palette values are returned, the function cannot be used with 32 bit images or screen modes.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_PALETTECOLOR](PALETTECOLOR.md) 
*  [_NEWIMAGE](NEWIMAGE.md)  , [_LOADIMAGE](LOADIMAGE.md) 
*  SaveImage [SUB](SUB.md) 

</blockquote>
