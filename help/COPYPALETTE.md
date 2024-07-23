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
    margin: 0 0 0.5em 0  !important;
    color: #88f !important;
    border: 0 !important;
    font-style: italic !important;
    font-weight: normal !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 4px !important; 
    border: 1px solid #333 !important;
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
    border-radius: 4px !important;
    background: #000 !important;
    border: 1px solid #333 !important;
    margin: 0 !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}
br + pre {
    border-radius: 0 !important;
    border-style: inset !important;
    border-width: 5px !important;
    border-color: #999 !important;
    background-color: #000 !important;
    box-shadow: 0px 10px 3px rgba(0, 0, 0, 0.25) !important;
    margin-top: -1em !important;
}
br + pre::before {
    content: "OUTPUT \A" !important;
    color: #555 !important;
    border-bottom: 1px solid #333;
    font-size: x-small;
    display: block !important;
    padding: 0 3px !important;
    margin: -1em -1em 1em -1em !important;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */    
}
br ~ h5 {
    margin-top: 2em !important;
}
.explanation {
    color: #995 !important;
    /* background-color: rgba(150, 150, 100) !important; */
    border-radius: 10em !important;
    border: 2px #441 dashed !important;
    padding: 8px 32px !important;
    margin-bottom: 4em !important;
    font-size: x-small !important;
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


* Palette Intensity settings are not used by 24/32 bit images. Use only with 4 or 8 BPP images.
* [_PIXELSIZE](PIXELSIZE.md) function returns 1 to indicate that [_COPYPALETTE](COPYPALETTE.md) can be used. 4 indicates 24/32 bit images.
* If sourceImageHandle& is omitted, it is assumed to be the current read page.
* If destinationImageHandle& is omitted, it is assumed to be the current write page.
* If either of the images specified by sourceImageHandle& or destinationImageHandle& do not use a palette, an illegal function call error is returned.
* If either sourceImageHandle& or destinationImageHandle& is an invalid handle, an invalid handle error is returned.
* When loading 4 or 8 BPP image files, it is necessary to adopt the color palette of the image or it may not have the correct colors!

</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>


* [_LOADIMAGE](LOADIMAGE.md)
* [_PIXELSIZE](PIXELSIZE.md)
* [_PALETTECOLOR](PALETTECOLOR.md) , [_PALETTECOLOR](PALETTECOLOR.md) (function)
* [PALETTE](PALETTE.md) , Images
</blockquote>
