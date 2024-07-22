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

## [_PIXELSIZE](PIXELSIZE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_PIXELSIZE)
---
<blockquote>

### The _PIXELSIZE function returns the color depth (Bits Per Pixel) of an image as 0 for text, 1 for 1 to 8 BPP or 4 for 32 bit.

</blockquote>

#### SYNTAX

<blockquote>

`pixelSize% = _PIXELSIZE [( imageHandle& )]`

</blockquote>

#### DESCRIPTION

<blockquote>

*  If imageHandle& is omitted, it is assumed to be the current write page.
*  Returns:
	* 0 if the image or screen page specified by imageHandle& is in text mode.
	* 1 if the image specified by imageHandle& is in 1 (B & W), 4 (16 colors) or 8 (256 colors) BPP mode.
	* 4 if the image specified is a 24/32-bit compatible mode. Pixels use three bytes, one per red, green and blue color intensity.
*  The [SCREEN](SCREEN.md)  or [_NEWIMAGE](NEWIMAGE.md)  or [_LOADIMAGE](LOADIMAGE.md)  color mode (256 or 32) can influence the pixel sizes that can be returned.
*  If imageHandle& is an invalid handle, then an invalid handle error occurs.


</blockquote>

#### MORE EXAMPLES

<blockquote>

*  SaveImage [SUB](SUB.md) 
*  SaveIcon32
*  ThirtyTwoBit [SUB](SUB.md) 
*  Bitmaps

</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  [_LOADIMAGE](LOADIMAGE.md)  , [_SAVEIMAGE](SAVEIMAGE.md) 
*  [_NEWIMAGE](NEWIMAGE.md)  , [_PUTIMAGE](PUTIMAGE.md) 
*  [_COPYPALETTE](COPYPALETTE.md) 

</blockquote>
