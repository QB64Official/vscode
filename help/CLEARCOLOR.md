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


## [_CLEARCOLOR](CLEARCOLOR.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_CLEARCOLOR)
---
<blockquote>

### The _CLEARCOLOR statement sets a specific color to be treated as transparent when an image is later put (via _PUTIMAGE ) onto another image.

</blockquote>

#### SYNTAX

<blockquote>

`_CLEARCOLOR { color& |_NONE}[, Dest_Handle& ]`

</blockquote>

#### PARAMETERS

<blockquote>


* In color modes using a palette, color& is the palette index of the new transparent color value or [_NONE](NONE.md) designates no clear colors.
* If color& is not a valid palette index, an illegal function call error will occur.
* In 32-bit color modes, color& is the _LONG color value of the new transparent color.
* If Dest_Handle& is omitted, the destination is assumed to be the current write page. Zero can designate the current program screen.
</blockquote>

#### DESCRIPTION

<blockquote>


* If Dest_Handle& is an invalid handle, then an invalid handle error is returned. Check for bad handle values of -1 first.
* In 32-bit color modes, it simply sets the Alpha to 0 for all pixels matching the specified color.
* In the second syntax, transparency is disabled for color modes using a palette.
* Note: [_SETALPHA](SETALPHA.md) can affect any [_CLEARCOLOR](CLEARCOLOR.md) alpha setting within the color range set.
* NOTE: 32 bit [_NEWIMAGE](NEWIMAGE.md) screen page backgrounds are transparent black or [_ALPHA](ALPHA.md) 0. Use [_DONTBLEND](DONTBLEND.md) or [CLS](CLS.md) for opaque.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Using _CLEARCOLOR to "mask" the background color of an image.
```vb
SCREEN 13
img& = _LOADIMAGE("qb64_trans.png")
_PUTIMAGE , img&, 0 'place actual image with background
K$ = INPUT$(1)
CLS , _RGB(255, 0, 0) 'clear screen with red background
_CLEARCOLOR _RGB(255, 255, 255), img&
_PUTIMAGE , img&, 0 'place image without white background
PRINT _CLEARCOLOR(img&) 'displays closest clear color attribute
END
```
  
<br>



##### Example 2: Using a _CLEARCOLOR transparency with images created on a _NEWIMAGE page. Does not require an image file.
```vb
SCREEN _NEWIMAGE(512, 384, 32) ' screen uses handle value
CIRCLE (50, 50), 50, _RGB(128, 0, 0) ' create a red ball image
PAINT (50, 50), _RGB(255, 0, 0), _RGB(128, 0, 0)
redball = _NEWIMAGE(101, 101, 32) ' create a new image page
_PUTIMAGE , 0, redball, (0, 0)-(101, 101) ' put screen page 0 image onto redball page
_CLEARCOLOR _RGB(0, 0, 0), redball ' makes black become see-through
CLS , _RGB(0, 0, 255) ' erase original ball and create a blue background
DO
_PUTIMAGE (RND * 512, RND * 384), redball
SLEEP 1 ' one second delay
LOOP UNTIL INKEY$ <> ""
```
  
<br>



##### Example 3: Fading an image with a _CLEARCOLOR background using a new page image to prevent _SETALPHA changes.
```vb
mainscreen = _NEWIMAGE(640, 480, 32) ' Main Screen (viewable)
SCREEN mainscreen
_SCREENMOVE _MIDDLE
Image1& = _LOADIMAGE("qb64_trans.png") '<<<<<< any image with one background color to clear

IF Image1& < -1 THEN 'check loaded image handle value before using!
_SOURCE Image1&
clr~& = POINT(0, 0) 'get background color from image source
_CLEARCOLOR clr~&, Image1& 'clear background color of loaded image
NewImage1& = _NEWIMAGE(_WIDTH(Image1&), _HEIGHT(Image1&), 32) 'new image page
_PUTIMAGE , Image1&, NewImage1& 'put image without background color on new page
_FREEIMAGE Image1& 'free loaded image from memory
END IF
_DEST mainscreen:

a& = 0: d = 1
DO
_LIMIT 10 'regulate speed of fades
CLS
a& = a& + d
IF a& = 255 THEN d = -d 'reverse fade
_SETALPHA a&, , NewImage1& 'sets alpha level of all colors to fade image page in/out
_PUTIMAGE (0, 342), NewImage1&
LOCATE 1, 1: PRINT "Alpha: "; a&
_DISPLAY
LOOP UNTIL a& = 0
END
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_CLEARCOLOR](CLEARCOLOR.md) (function)
* [_SETALPHA](SETALPHA.md) (sets transparency level)
* [_ALPHA](ALPHA.md) , [_ALPHA32](ALPHA32.md) (read functions)
* Images , Creating Sprite Masks
</blockquote>
