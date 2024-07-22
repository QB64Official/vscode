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

## [_NEWIMAGE](NEWIMAGE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_NEWIMAGE)
---
<blockquote>

### The _NEWIMAGE function prepares a window image surface and returns the LONG handle value.

</blockquote>

#### SYNTAX

<blockquote>

`handle& = _NEWIMAGE ( width& , height& [, { 0 | 1 | 2 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 256 | 32 }])`

</blockquote>

#### PARAMETERS

<blockquote>

*  Minimum [LONG](LONG.md)  screen dimensions are width& >= 1, height& >= 1 measured in pixels as [INTEGER](INTEGER.md)  or [LONG](LONG.md)  values.
	* For mode 0 (text), width& and height& are measured in character blocks, not pixels.
*  Mode is either a QBasic type screen mode (0 to 2 or 7 to 13), 256 colors or 32 bit (16 million colors) compatible.

</blockquote>

#### DESCRIPTION

<blockquote>

*  If the mode is omitted, an image will be created with the same BPP mode, font (which may block freeing of that font), palette, selected colors, transparent color, blend state and print method settings as the current _DESTination image/ screen page.
*  Valid [LONG](LONG.md)  handle returns are less than -1. Invalid handles equal -1 and a zero or positive value is also invalid.
*  You can create any sized window (limited by the OS) in any emulated [SCREEN](SCREEN.md)  mode or 32 bit using this function.
*  Default text block size in emulated [SCREEN](SCREEN.md)  modes 1, 2, 7, 8 and 13 is 8 X 8; 9 and 10 is 8 X 14; 11, 12, 256 and 32 bit is 8 X 16. The text block pixel size will allow you to calculate the available text rows and columns in a custom sized [SCREEN](SCREEN.md) .
*  To view the image page, just use [SCREEN](SCREEN.md)  handle& . Even if another procedure changes the [SCREEN](SCREEN.md)  mode and clears the [SCREEN](SCREEN.md) , the image can be restored later by using the same [SCREEN](SCREEN.md)  handle mode.
*  Use the [_COPYIMAGE](COPYIMAGE.md)  function to preserve a [SCREEN](SCREEN.md)  handle value when changing to another [SCREEN](SCREEN.md)  mode to restore it later.
*  32 bit screen surface backgrounds (black) have zero [_ALPHA](ALPHA.md)  so that they are transparent when placed over other surfaces.


</blockquote>

#### MORE EXAMPLES

<blockquote>

*  SaveImage [SUB](SUB.md) 
*  [_PIXELSIZE](PIXELSIZE.md) 

</blockquote>

#### SEE ALSO

<blockquote>

*  [_COPYIMAGE](COPYIMAGE.md) 
*  [_LOADIMAGE](LOADIMAGE.md) 
*  [_SAVEIMAGE](SAVEIMAGE.md) 
*  [_FREEIMAGE](FREEIMAGE.md) 
*  [_PUTIMAGE](PUTIMAGE.md) 
*  [_SCREENIMAGE](SCREENIMAGE.md) 
*  [_CLIPBOARDIMAGE](CLIPBOARDIMAGE.md)  (function)
*  [SCREEN](SCREEN.md) 

</blockquote>
