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


## [_BLUE](BLUE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_BLUE)
---
<blockquote>

### The _BLUE function returns the palette intensity or the blue component intensity of a 32-bit image color.

</blockquote>

#### SYNTAX

<blockquote>

`blueintensity& = _BLUE ( rgbaColorIndex& [, imageHandle& ])`

</blockquote>

#### DESCRIPTION

<blockquote>


* rgbaColorIndex& is the RGBA color value or palette index of the color to retrieve the blue component intensity from.
* The [LONG](LONG.md) intensity value returned ranges from 0 (no intensity, not present) to 255 (full intensity).
* If imageHandle& specifies a 32-bit color image, rgbaColorIndex& is interpreted as a 32-bit RGBA color value.
* If imageHandle& specifies an image that uses a palette, rgbaColorIndex& is interpreted as a palette index.
* If imageHandle& is not specified, it is assumed to be the current write page.
* If imageHandle& is an invalid handle, an invalid handle error will occur.
* If rgbaColorIndex& is outside the range of valid indexes for a given image mode, an illegal function call error occurs.
* Uses index parameters passed by the [_RGB](RGB.md) , [_RGBA](RGBA.md) , [_RGB32](RGB32.md) or [_RGBA32](RGBA32.md) funtions.
* An image handle is optional.

</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>


* [_RED](RED.md) , [_GREEN](GREEN.md)
* [_RGB](RGB.md) , RGB32
* [_LOADIMAGE](LOADIMAGE.md)
</blockquote>
