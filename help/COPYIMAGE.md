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


* The [LONG](LONG.md) newhandle& value returned will be different than the source handle value supplied.
* If imageHandle& is designated being zero, the current software destination screen or image is copied.
* If 1 is designated instead of an imageHandle& , it designates the last OpenGL hardware surface to copy.
* Mode 32 can be used to convert 256 color images to 32 bit colors.
* Mode 33 images are hardware accelerated in version 1.000 and up , and are created using [_LOADIMAGE](LOADIMAGE.md) or [_COPYIMAGE](COPYIMAGE.md) .
</blockquote>

#### DESCRIPTION

<blockquote>


* The function copies any image or screen handle to a new and unique negative [LONG](LONG.md) handle value.
* Valid copy handles are less than -1. Invalid handles return -1 or 0 if it was never created.
* Every attribute of the passed image or program screen is copied to a new handle value in memory.
* 32 bit screen surface backgrounds (black) have zero [_ALPHA](ALPHA.md) so that they are transparent when placed over other surfaces.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
SCREEN 13
CIRCLE (160, 100), 100, 40
DO: SLEEP: LOOP UNTIL INKEY$ <> ""

'backup screen before changing SCREEN mode
oldmode& = _COPYIMAGE(0) 'the 0 value designates the current destination SCREEN

s& = _NEWIMAGE(800, 600, 32)
SCREEN s&
LINE (100, 100)-(500, 500), _RGB(0, 255, 255), BF
DO: SLEEP: LOOP UNTIL INKEY$ <> ""

SCREEN oldmode& 'restore original screen
IF s& < -1 THEN _FREEIMAGE s&
END
```
  
<br>

```vb
SCREEN _NEWIMAGE(640, 480, 32)
my_hardware_handle = _COPYIMAGE(_SCREENIMAGE, 33) 'take a screenshot and use it as our texture
_MAPTRIANGLE (0, 0)-(500, 0)-(250, 500), my_hardware_handle TO _
(-1, 0, -1)-(1, 0, -1)-(0, 5, -10), , _SMOOTH
_DISPLAY
DO: _LIMIT 30: LOOP UNTIL INKEY$ <> ""
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_LOADIMAGE](LOADIMAGE.md) , [_NEWIMAGE](NEWIMAGE.md) , [_SAVEIMAGE](SAVEIMAGE.md)
* [_PUTIMAGE](PUTIMAGE.md) , [_MAPTRIANGLE](MAPTRIANGLE.md)
* [_SOURCE](SOURCE.md) , [_DEST](DEST.md)
* [_FREEIMAGE](FREEIMAGE.md)
* _FILELIST$ (function) (Demo of _COPYIMAGE)
* [_DISPLAYORDER](DISPLAYORDER.md)
* Hardware images
</blockquote>
