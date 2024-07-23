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


## [_SETALPHA](SETALPHA.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SETALPHA)
---
<blockquote>

### The _SETALPHA statement sets the alpha channel transparency level of some or all of the pixels of an image.

</blockquote>

#### SYNTAX

<blockquote>

`_SETALPHA alpha& [, color1& ][ TO colour2& ] [, imageHandle& ]`

</blockquote>

#### PARAMETERS

<blockquote>


* alpha& is the new alpha level to set, ranging from 0 (transparent) to 255 (opaque).
* color1& designates the 32-bit [LONG](LONG.md) color value or range of color values color1& [TO](TO.md) colour2& to set the transparency.
* If no color value or range of colors is given, the entire image's alpha is changed, including any [_CLEARCOLOR](CLEARCOLOR.md) settings.
* If imageHandle& is omitted, it is assumed to be the current write page or destination image.
</blockquote>

#### DESCRIPTION

<blockquote>


* In the first syntax, the alpha level of all pixels is set to alpha& .
* In the second syntax, the alpha level of all pixels matching the color color1& is set to alpha& .
* In the third syntax, the alpha level of all pixels with red, green, blue and alpha channels in the range [ color1& [TO](TO.md) color2& ] are set.
* The [_ALPHA](ALPHA.md) setting makes a 32-bit color transparent, opaque or something in between. Zero is clear and 255 totally blocks underlying images. Use it to see through backgrounds or image colors.
* If alpha& is outside that range, an illegal function call error will occur.
* If the image specified by imageHandle& uses a palette, an invalid handle error will occur.
* If imageHandle& is an invalid handle, an illegal function call error will occur.
* NOTE: 32-bit [_NEWIMAGE](NEWIMAGE.md) screen page backgrounds are transparent black or [_ALPHA](ALPHA.md) 0. Use [_DONTBLEND](DONTBLEND.md) or [CLS](CLS.md) for opaque.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Using a _SETALPHA color range to fade an image in and out while not affecting the transparent white background.
```vb
main = _NEWIMAGE(640, 480, 32)
SCREEN main
_SCREENMOVE _MIDDLE

Image1& = _LOADIMAGE("qb64_trans.png") '<<< PNG file with white background to hide
_SOURCE Image1&
clr~& = POINT(0, 0) 'find background color of image
_CLEARCOLOR clr~&, Image1& 'set background color as transparent

topclr~& = clr~& - _RGBA(1, 1, 1, 0)  'get topmost color range just below full white
_DEST main

a& = 0
d = 1
DO
_LIMIT 10 'regulate speed of fade in and out
CLS ', _RGB(255, 0, 0)
a& = a& + d
IF a& = 255 THEN d = -d
_SETALPHA a&, 0 TO topclr~&, Image1& 'affects all colors below bright white
_PUTIMAGE (0, 342), Image1&
LOCATE 1, 1: PRINT "Alpha: "; a&
_DISPLAY
LOOP UNTIL a& = 0
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_ALPHA](ALPHA.md) , [_ALPHA32](ALPHA32.md)
* [_RGBA](RGBA.md) , [_RGBA32](RGBA32.md)
* [_CLEARCOLOR](CLEARCOLOR.md)
* [_CLEARCOLOR](CLEARCOLOR.md) (function)
* [_BLEND](BLEND.md) , [_DONTBLEND](DONTBLEND.md)
* [COLOR](COLOR.md) , Images
</blockquote>
