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

## [_COPYPALETTE](COPYPALETTE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_COPYPALETTE)
---
<blockquote>

### The _COPYPALETTE statement copies the color palette intensities from one 4 or 8 BPP image to another image or a _NEWIMAGE screen page using 256 or less colors.

</blockquote>

#### SYNTAX

<blockquote>

`_COPYPALETTE [ sourceImageHandle& [, destinationImageHandle& ]]`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Palette Intensity settings are not used by 24/32 bit images. Use only with 4 or 8 BPP images.
*  [_PIXELSIZE](PIXELSIZE.md)  function returns 1 to indicate that [_COPYPALETTE](COPYPALETTE.md)  can be used. 4 indicates 24/32 bit images.
*  If sourceImageHandle& is omitted, it is assumed to be the current read page.
*  If destinationImageHandle& is omitted, it is assumed to be the current write page.
*  If either of the images specified by sourceImageHandle& or destinationImageHandle& do not use a palette, an illegal function call error is returned.
*  If either sourceImageHandle& or destinationImageHandle& is an invalid handle, an invalid handle error is returned.
*  When loading 4 or 8 BPP image files, it is necessary to adopt the color palette of the image or it may not have the correct colors!


</blockquote>

#### SEE ALSO

<blockquote>

*  [_LOADIMAGE](LOADIMAGE.md) 
*  [_PIXELSIZE](PIXELSIZE.md) 
*  [_PALETTECOLOR](PALETTECOLOR.md)  , [_PALETTECOLOR](PALETTECOLOR.md)  (function)
*  [PALETTE](PALETTE.md)  , Images

</blockquote>
