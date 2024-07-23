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


* Minimum [LONG](LONG.md) screen dimensions are width& >= 1, height& >= 1 measured in pixels as [INTEGER](INTEGER.md) or [LONG](LONG.md) values.
* For mode 0 (text), width& and height& are measured in character blocks, not pixels.
* Mode is either a QBasic type screen mode (0 to 2 or 7 to 13), 256 colors or 32 bit (16 million colors) compatible.
</blockquote>

#### DESCRIPTION

<blockquote>


* If the mode is omitted, an image will be created with the same BPP mode, font (which may block freeing of that font), palette, selected colors, transparent color, blend state and print method settings as the current _DESTination image/ screen page.
* Valid [LONG](LONG.md) handle returns are less than -1. Invalid handles equal -1 and a zero or positive value is also invalid.
* You can create any sized window (limited by the OS) in any emulated [SCREEN](SCREEN.md) mode or 32 bit using this function.
* Default text block size in emulated [SCREEN](SCREEN.md) modes 1, 2, 7, 8 and 13 is 8 X 8; 9 and 10 is 8 X 14; 11, 12, 256 and 32 bit is 8 X 16. The text block pixel size will allow you to calculate the available text rows and columns in a custom sized screen.
* To view the image page, just use [SCREEN](SCREEN.md) handle& . Even if another procedure changes the screen mode and clears the screen, the image can be restored later by using the same [SCREEN](SCREEN.md) handle mode.
* Use the [_COPYIMAGE](COPYIMAGE.md) function to preserve a [SCREEN](SCREEN.md) handle value when changing to another screen mode to restore it later.
* 32 bit screen surface backgrounds (black) have zero [_ALPHA](ALPHA.md) so that they are transparent when placed over other surfaces.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Shrinking a SCREEN 0 text window's size:
```vb
SCREEN _NEWIMAGE(28, 25, 0)
```
  
<br>



##### Example 2: Creating an 800 by 600 window version of SCREEN 12 with 256 colors (text 37 X 100):
```vb
handle& = _NEWIMAGE(800, 600, 256)
SCREEN handle&
```
  
<br>



##### Example 3: Setting up a 32 bit SCREEN with _NEWIMAGE for page flipping in QB64.
```vb
SCREEN _NEWIMAGE(640, 480, 32), , 1, 0
```
  
<br>



##### Example 4: Switching between two different SCREEN modes
```vb
_TITLE "Switching SCREEN modes"
SCREEN _NEWIMAGE (800, 600, 256)
mode1& = _DEST               'get current screen mode handle
mode2& = _NEWIMAGE (300, 200, 13)

_DEST mode2&                  'prepare small window
COLOR 10: LOCATE 10, 13: PRINT "mode2& = "; mode2&
COLOR 13: LOCATE 16, 16: PRINT "First"

_DEST mode1&  'work in main window
LOCATE 5
FOR c = 1 TO 248
Color c: PRINT c;
NEXT
COLOR 12: LOCATE 20, 44: PRINT "mode1& = "; mode1&
COLOR 11: LOCATE 30, 34: PRINT "Press a key to goto Pop-up Window"
DO: SLEEP: LOOP UNTIL INKEY$ <> ""

SCREEN mode2&  'switch to small window
DO: SLEEP: LOOP UNTIL INKEY$ <> ""

SCREEN mode1&  'back to main window
COLOR 12: LOCATE 37, 43: PRINT "One more time!"
DO: SLEEP: LOOP UNTIL INKEY$ <> ""

SCREEN mode2&  'back to small window
COLOR 14: LOCATE 16, 16: PRINT "LAST "
```
  
<br>


</blockquote>

#### MORE EXAMPLES

<blockquote>


* SaveImage [SUB](SUB.md)
* [_PIXELSIZE](PIXELSIZE.md)
</blockquote>

#### SEE ALSO

<blockquote>


* [_COPYIMAGE](COPYIMAGE.md)
* [_LOADIMAGE](LOADIMAGE.md)
* [_SAVEIMAGE](SAVEIMAGE.md)
* [_FREEIMAGE](FREEIMAGE.md)
* [_PUTIMAGE](PUTIMAGE.md)
* [_SCREENIMAGE](SCREENIMAGE.md)
* [_CLIPBOARDIMAGE](CLIPBOARDIMAGE.md) (function)
* [SCREEN](SCREEN.md)
</blockquote>
