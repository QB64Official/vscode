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

## [_COPYIMAGE](COPYIMAGE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_COPYIMAGE)
---
<blockquote>

### This function creates an identical designated image in memory with a different negative LONG handle value.

</blockquote>

#### SYNTAX

<blockquote>

`newhandle& = _COPYIMAGE ( imageHandle& [, mode% ])`

</blockquote>

#### PARAMETERS

<blockquote>

*  The [LONG](LONG.md)  newhandle& value returned will be different than the source handle value supplied.
*  If imageHandle& is designated being zero, the current software destination screen or image is copied.
*  If 1 is designated instead of an imageHandle& , it designates the last OpenGL hardware surface to copy.
*  Mode 32 can be used to convert 256 color images to 32 bit colors.
*  Mode 33 images are hardware accelerated in version 1.000 and up , and are created using [_LOADIMAGE](LOADIMAGE.md)  or [_COPYIMAGE](COPYIMAGE.md)  .

</blockquote>

#### DESCRIPTION

<blockquote>

*  The function copies any image or screen handle to a new and unique negative [LONG](LONG.md)  handle value.
*  Valid copy handles are less than -1. Invalid handles return -1 or 0 if it was never created.
*  Every attribute of the passed image or program screen is copied to a new handle value in memory.
*  32 bit screen surface backgrounds (black) have zero [_ALPHA](ALPHA.md)  so that they are transparent when placed over other surfaces.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_LOADIMAGE](LOADIMAGE.md)  , [_NEWIMAGE](NEWIMAGE.md)  , [_SAVEIMAGE](SAVEIMAGE.md) 
*  [_PUTIMAGE](PUTIMAGE.md)  , [_MAPTRIANGLE](MAPTRIANGLE.md) 
*  [_SOURCE](SOURCE.md)  , [_DEST](DEST.md) 
*  [_FREEIMAGE](FREEIMAGE.md) 
*  _FILELIST$ (function) (Demo of [_COPYIMAGE](COPYIMAGE.md) )
*  [_DISPLAYORDER](DISPLAYORDER.md) 
*  Hardware images

</blockquote>
