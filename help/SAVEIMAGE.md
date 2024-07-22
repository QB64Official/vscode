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

## [_SAVEIMAGE](SAVEIMAGE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SAVEIMAGE)
---
<blockquote>

### _SAVEIMAGE saves the contents of an image or screen page to an image file.

</blockquote>

#### SYNTAX

<blockquote>

`_SAVEIMAGE fileName$ [, imageHandle& ][, requirements$ ]`

</blockquote>

#### PARAMETERS

<blockquote>

*  fileName$ is literal or variable [STRING](STRING.md)  file name value.
*  Optional imageHandle& is a [LONG](LONG.md)  image handle or a valid screen page number.
*  Optional requirements$ [STRING](STRING.md)  values can be:
	* BMP : Saves the image as Windows Bitmap if no file extension is specified.
	* GIF : Saves the image as Graphics Interchange Format [IF](IF.md)  no file extension is specified.
	* HDR : Saves the image as Radiance HDR if no file extension is specified.
	* ICO : Saves the image as Windows Icon if no file extension is specified.
	* JPG : Saves the image as Joint Photographic Experts Group if no file extension is specified.
	* PNG : Saves the image as Portable Network Graphics if no file extension is specified.
	* QOI : Saves the image as Quite OK Image if no file extension is specified.
	* TGA : Saves the image as Truevision TARGA if no file extension is specified.

</blockquote>

#### DESCRIPTION

<blockquote>

*  fileName$ extension name takes precedence over requirements$
*  If no file extension is specified in fileName$ and no format is specified in requirements$ , then the PNG format is used by default.
*  If imageHandle& [IS](IS.md)  omitted then the image handle returned by [_DISPLAY](DISPLAY.md)  (function) [IS](IS.md)  used.
*  Efforts are made to save the image in the highest quality possible using 32-bit RGBA format, ensuring that alpha channel information is retained whenever the format permits.
*  Due to the inherent limitations of GIFs, these images are stored in an 8-bit indexed format, which results in a reduction of quality and color detail.
*  Windows ICO files utilize the PNG specification, which enables the storage of images exceeding 256x256 pixels in size.
*  [SCREEN](SCREEN.md)  0 (text mode) screens and "images" can be saved. Text surfaces are rendered internally using the master QB64-PE VGA fonts prior to saving.


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  [_LOADIMAGE](LOADIMAGE.md)  , [_ICON](ICON.md)  , $EXEICON
*  [SCREEN](SCREEN.md) 
*  [TYPE](TYPE.md)  , MKI$ , [MKL\$](MKL\$.md) 
*  Program ScreenShots
*  ThirtyTwoBit [SUB](SUB.md) 
*  ThirtyTwoBit MEM [SUB](SUB.md) 
*  SaveIcon32
*  Bitmaps , Icons and Cursors
*  Text Using Graphics

</blockquote>
