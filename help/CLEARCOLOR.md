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

## [_CLEARCOLOR](CLEARCOLOR.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_CLEARCOLOR)
---
<blockquote>

### The _CLEARCOLOR statement sets a specific color to be treated as transparent when an image is later put (via _PUTIMAGE ) onto another image.

</blockquote>

#### SYNTAX

<blockquote>

`_CLEARCOLOR { color& |_NONE}[, Dest_Handle& ]`

</blockquote>

#### PARAMETERS

<blockquote>

*  In color modes using a palette, color& is the palette index of the new transparent color value or [_NONE](NONE.md)  designates no clear colors.
*  If color& is not a valid palette index, an illegal function call error will occur.
*  In 32-bit color modes, color& is the _LONG color value of the new transparent color.
*  If Dest_Handle& is omitted, the destination is assumed to be the current write page. Zero can designate the current program screen.

</blockquote>

#### DESCRIPTION

<blockquote>

*  If Dest_Handle& is an invalid handle, then an invalid handle error is returned. Check for bad handle values of -1 first.
*  In 32-bit color modes, it simply sets the Alpha to 0 for all pixels matching the specified color.
*  In the second syntax, transparency is disabled for color modes using a palette.
*  Note: [_SETALPHA](SETALPHA.md)  can affect any [_CLEARCOLOR](CLEARCOLOR.md)  alpha setting within the [COLOR](COLOR.md)  range set.
*  NOTE: 32 bit [_NEWIMAGE](NEWIMAGE.md)  screen page backgrounds are transparent black or [_ALPHA](ALPHA.md)  0. Use [_DONTBLEND](DONTBLEND.md)  or [CLS](CLS.md)  for opaque.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_CLEARCOLOR](CLEARCOLOR.md)  (function)
*  [_SETALPHA](SETALPHA.md)  (sets transparency level)
*  [_ALPHA](ALPHA.md)  , [_ALPHA32](ALPHA32.md)  (read functions)
*  Images , Creating Sprite Masks

</blockquote>
