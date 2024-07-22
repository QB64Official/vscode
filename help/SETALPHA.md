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

## [_SETALPHA](SETALPHA.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SETALPHA)
---
<blockquote>

### The _SETALPHA statement sets the alpha channel transparency level of some or all of the pixels of an image.

</blockquote>

#### SYNTAX

<blockquote>

`_SETALPHA alpha& [, color1& ][ TO colour2& ] [, imageHandle& ]`

</blockquote>

#### PARAMETERS

<blockquote>

*  alpha& is the new alpha level to set, ranging from 0 (transparent) to 255 (opaque).
*  color1& designates the 32-bit [LONG](LONG.md)  color value or range of color values color1& [TO](TO.md)  colour2& [TO](TO.md)  set the transparency.
*  If no [COLOR](COLOR.md)  value [OR](OR.md)  range of colors is given, the entire image's alpha is changed, including any [_CLEARCOLOR](CLEARCOLOR.md)  settings.
*  If imageHandle& is omitted, it is assumed to be the current write page or destination image.

</blockquote>

#### DESCRIPTION

<blockquote>

*  In the first syntax, the alpha level of all pixels is set to alpha& .
*  In the second syntax, the alpha level of all pixels matching the color color1& is set to alpha& .
*  In the third syntax, the alpha level of all pixels with red, green, blue and alpha channels in the range [ color1& [TO](TO.md)  color2& ] are set.
*  The [_ALPHA](ALPHA.md)  setting makes a 32-bit color transparent, opaque or something in between. Zero is clear and 255 totally blocks underlying images. Use it to see through backgrounds or image colors.
*  If alpha& is outside that range, an illegal function call error will occur.
*  If the image specified by imageHandle& uses a palette, an invalid handle error will occur.
*  If imageHandle& is an invalid handle, an illegal function call error will occur.
*  NOTE: 32-bit [_NEWIMAGE](NEWIMAGE.md)  screen page backgrounds are transparent black or [_ALPHA](ALPHA.md)  0. Use [_DONTBLEND](DONTBLEND.md)  or [CLS](CLS.md)  for opaque.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_ALPHA](ALPHA.md)  , [_ALPHA32](ALPHA32.md) 
*  [_RGBA](RGBA.md)  , [_RGBA32](RGBA32.md) 
*  [_CLEARCOLOR](CLEARCOLOR.md) 
*  [_CLEARCOLOR](CLEARCOLOR.md)  (function)
*  [_BLEND](BLEND.md)  , [_DONTBLEND](DONTBLEND.md) 
*  [COLOR](COLOR.md)  , Images

</blockquote>
