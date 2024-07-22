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

## [_RED](RED.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_RED)
---
<blockquote>

### The _RED function returns the palette index or the red component intensity of a 32-bit image color.

</blockquote>

#### SYNTAX

<blockquote>

`redIntensity& = _RED ( rgbaColorIndex& [, imageHandle& ])`

</blockquote>

#### DESCRIPTION

<blockquote>

*  rgbaColorIndex& is the RGBA color value or palette index of the color to retrieve the red component intensity from.
*  The [LONG](LONG.md)  intensity value returned ranges from 0 (no intensity, not present) to 255 (full intensity).
*  imageHandle& is optional.
*  If imageHandle& specifies a 32-bit color image, rgbaColorIndex& is interpreted as a 32-bit RGBA color value.
*  If imageHandle& specifies an image that uses a palette, rgbaColorIndex& is interpreted as a palette index.
*  If imageHandle& is not specified, it is assumed to be the current write page.
*  If imageHandle& is an invalid handle, an invalid handle error occurs.
*  If rgbaColorIndex& is outside the range of valid indexes for a given image mode, an illegal function call error occurs.
*  Uses index parameters passed by the [_RGB](RGB.md)  , [_RGBA](RGBA.md)  , [_RGB32](RGB32.md)  or [_RGBA32](RGBA32.md)  functions.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_GREEN](GREEN.md)  , [_BLUE](BLUE.md) 
*  [_RGB](RGB.md)  , RGB32
*  [_LOADIMAGE](LOADIMAGE.md) 

</blockquote>
