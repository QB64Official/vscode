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


* imageHandle& is the handle to the new image in memory that will contain the desktop screenshot.
* The optional screen column and row positions can be used to get only a portion of the desktop image.
* The desktop image or partial image is always a 32-bit image.
* The current screen resolution or width-to-height aspect ratio can be obtained with [_DESKTOPWIDTH](DESKTOPWIDTH.md) and [_DESKTOPHEIGHT](DESKTOPHEIGHT.md) .
* Can be used to take screenshots of the desktop or used with [_PRINTIMAGE](PRINTIMAGE.md) to print them.
* It is important to free unused or uneeded image handles with [_FREEIMAGE](FREEIMAGE.md) to prevent memory overflow errors.
* Keyword not supported in Linux or macOS versions

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Determining the present screen resolution of user's PC for a screensaver program.
```vb
desktop& = _SCREENIMAGE
MaxScreenX& = _WIDTH(desktop&)
MaxScreenY& = _HEIGHT(desktop&)
_FREEIMAGE desktop& 'free image after measuring screen(it is not displayed)
SCREEN _NEWIMAGE(MaxScreenX&, MaxScreenY&, 256) 'program window is sized to fit
_SCREENMOVE _MIDDLE
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_SCREENCLICK](SCREENCLICK.md) , [_SCREENPRINT](SCREENPRINT.md)
* [_SCREENMOVE](SCREENMOVE.md) , [_SCREENX](SCREENX.md) , [_SCREENY](SCREENY.md)
* [_WIDTH](WIDTH.md) , [_HEIGHT](HEIGHT.md)
* [_DESKTOPWIDTH](DESKTOPWIDTH.md) , [_DESKTOPHEIGHT](DESKTOPHEIGHT.md)
* [_FULLSCREEN](FULLSCREEN.md) , [_PRINTIMAGE](PRINTIMAGE.md)
* Screen Saver Programs
* Bitmaps , Icons and Cursors
* Hardware images
</blockquote>
