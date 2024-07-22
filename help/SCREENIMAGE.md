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

## [_SCREENIMAGE](SCREENIMAGE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SCREENIMAGE)
---
<blockquote>

### The _SCREENIMAGE function stores the current desktop image or a portion of it and returns an image handle.

</blockquote>

#### SYNTAX

<blockquote>

`imageHandle& = _SCREENIMAGE [( column1 , row1 , column2 , row2 )]`

</blockquote>

#### DESCRIPTION

<blockquote>

*  imageHandle& is the handle to the new image in memory that will contain the desktop screenshot.
*  The optional screen column and row positions can be used to get only a portion of the desktop image.
*  The desktop image or partial image is always a 32-bit image.
*  The current screen resolution or [WIDTH](WIDTH.md) - [TO](TO.md) -height aspect ratio can be obtained with [_DESKTOPWIDTH](DESKTOPWIDTH.md)  and [_DESKTOPHEIGHT](DESKTOPHEIGHT.md)  .
*  Can be used to take screenshots of the desktop or used with [_PRINTIMAGE](PRINTIMAGE.md)  to [PRINT](PRINT.md)  them.
*  It is important to [FREE](FREE.md)  unused or uneeded image handles with [_FREEIMAGE](FREEIMAGE.md)  to prevent memory overflow errors.
*  Keyword not supported in Linux or macOS versions


</blockquote>

#### SEE ALSO

<blockquote>

*  [_SCREENCLICK](SCREENCLICK.md)  , [_SCREENPRINT](SCREENPRINT.md) 
*  [_SCREENMOVE](SCREENMOVE.md)  , [_SCREENX](SCREENX.md)  , [_SCREENY](SCREENY.md) 
*  [_WIDTH]( [WIDTH](WIDTH.md) .md)  , [_HEIGHT](HEIGHT.md) 
*  [_DESKTOPWIDTH](DESKTOPWIDTH.md)  , [_DESKTOPHEIGHT](DESKTOPHEIGHT.md) 
*  [_FULLSCREEN](FULLSCREEN.md)  , [_PRINTIMAGE](PRINTIMAGE.md) 
*  Screen Saver Programs
*  Bitmaps , Icons and Cursors
*  Hardware images

</blockquote>
