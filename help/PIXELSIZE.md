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


* If imageHandle& is omitted, it is assumed to be the current write page.
* Returns:
* 0 if the image or screen page specified by imageHandle& is in text mode.
* 1 if the image specified by imageHandle& is in 1 (B & W), 4 (16 colors) or 8 (256 colors) BPP mode.
* 4 if the image specified is a 24/32-bit compatible mode. Pixels use three bytes, one per red, green and blue color intensity.
* The [SCREEN](SCREEN.md) or [_NEWIMAGE](NEWIMAGE.md) or [_LOADIMAGE](LOADIMAGE.md) color mode (256 or 32) can influence the pixel sizes that can be returned.
* If imageHandle& is an invalid handle, then an invalid handle error occurs.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
handle1& = _Getimage(sx1, sy1, sx2, sy2, sourcehandle&) ' function call

FUNCTION GetImage& (sx1, sy1, sx2, sy2, sourcehandle&)
bytespp = _PIXELSIZE(sourcehandle&)
IF bytespp = 4 THEN Pal = 32 ELSE IF bytespp = 1 THEN Pal = 256 ELSE EXIT FUNCTION
h& = _NEWIMAGE(ABS(sx2 - sx1) + 1, ABS(sy2 - sy1) + 1, Pal)
_PUTIMAGE (0, 0), sourcehandle&, h&, (sx1, sy1)-(sx2, sy2) 'image is not displayed
GetImage& = h&
END FUNCTION
```
  
<br>


</blockquote>

#### MORE EXAMPLES

<blockquote>


* SaveImage [SUB](SUB.md)
* SaveIcon32
* ThirtyTwoBit [SUB](SUB.md)
* Bitmaps
</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* [_LOADIMAGE](LOADIMAGE.md) , [_SAVEIMAGE](SAVEIMAGE.md)
* [_NEWIMAGE](NEWIMAGE.md) , [_PUTIMAGE](PUTIMAGE.md)
* [_COPYPALETTE](COPYPALETTE.md)
</blockquote>
