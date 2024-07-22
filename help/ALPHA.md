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

## [_ALPHA](ALPHA.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_ALPHA)
---
<blockquote>

### The _ALPHA function returns the alpha channel transparency level of a color value used on a screen page or image.

</blockquote>

#### SYNTAX

<blockquote>

`result& = _ALPHA ( color~& [, imageHandle& ])`

</blockquote>

#### DESCRIPTION

<blockquote>

*  If imageHandle& is omitted, it is assumed to be the current write page. Invalid handles will create Illegal function call errors.
*  [_NEWIMAGE](NEWIMAGE.md)  32 bit [SCREEN](SCREEN.md)  modes will always use an [_UNSIGNED](UNSIGNED.md) [LONG](LONG.md)  color~& value.
	* [COLOR](COLOR.md)  values that are set as a [_CLEARCOLOR](CLEARCOLOR.md)  always have an alpha level of 0 (transparent).
	* [_SETALPHA](SETALPHA.md)  can set any alpha level from 0 (or fully transparent) to 255 (or opaque).
	* Normal color values that are set by [_RGB](RGB.md)  or [_RGB32](RGB32.md)  always have an alpha level of 255(opaque).
*  In 4 (16 color) or 8 (256 color) bit palette screens the function will always return 255.
*  [_RED32](RED32.md)  , [_GREEN32](GREEN32.md)  , [_BLUE32](BLUE32.md) [AND](AND.md)  [_ALPHA32](ALPHA32.md)  are all equivalent to [_RED](RED.md)  , [_GREEN](GREEN.md)  , [_BLUE](BLUE.md) [AND](AND.md)  [_ALPHA](ALPHA.md)  but they are highly optimized [AND](AND.md)  only accept a 32-bit color (B8:G8:R8:A8). Using them (opposed to dividing then ANDing 32-bit color values manually) makes code easy to read.
*  NOTE: 32 bit [_NEWIMAGE](NEWIMAGE.md)  screen page backgrounds are transparent black or [_ALPHA](ALPHA.md)  0. Use [_DONTBLEND](DONTBLEND.md)  or [CLS](CLS.md)  for opaque.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_ALPHA32](ALPHA32.md)  , [_SETALPHA](SETALPHA.md) 
*  [_RGBA](RGBA.md)  , [_RGBA32](RGBA32.md)  (set color with alpha)
*  [_CLEARCOLOR](CLEARCOLOR.md)  , [_CLEARCOLOR](CLEARCOLOR.md)  (function)
*  [_RED](RED.md)  , [_GREEN](GREEN.md)  , [_BLUE](BLUE.md) 
*  [_RED32](RED32.md)  , [_GREEN32](GREEN32.md)  . [_BLUE32](BLUE32.md) 
*  [CLS](CLS.md)  , [COLOR](COLOR.md)  , Images

</blockquote>
