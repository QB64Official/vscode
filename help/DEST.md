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


## [_DEST](DEST.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_DEST)
---
<blockquote>

### The _DEST statement sets the current write image or page. All graphic and print changes will be done to this image.

</blockquote>

#### SYNTAX

<blockquote>

`_DEST imageHandle&`

</blockquote>

#### DESCRIPTION

<blockquote>


* imageHandle& is the handle of the image that will act as the current write page.
* [_DEST](DEST.md) 0 refers to the present program [SCREEN](SCREEN.md) . You can use 0 to refer to the present program [SCREEN](SCREEN.md) .
* [_DEST](DEST.md) [_CONSOLE](CONSOLE.md) can set the destination to send information to a console window using [PRINT](PRINT.md) or [INPUT](INPUT.md) .
* If imageHandle& is an invalid handle, an invalid handle error occurs. Always check for valid handle values first ( imageHandle& < -1).
* Note: Use [_SOURCE](SOURCE.md) when you need to read a page or image with [POINT](POINT.md) , [GET](GET.md) or the [SCREEN](SCREEN.md) function.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Placing a center point and a circle using _CLEARCOLOR to eliminate the background color black.
```vb
SCREEN 13 'program screen can use 256 colors
a& = _NEWIMAGE(320, 200, 13) 'create 2 screen page handles a& and b&
b& = _NEWIMAGE(320, 200, 13)
_DEST a& 'set destination image to handle a&
PSET (100, 100), 15 'draw a dot on the current destination handle a&
_DEST b& 'set destination image to handle b&
CIRCLE (100, 100), 50, 15 'draw a circle on the current destination handle b&
_CLEARCOLOR 0 'make page b color 0 (black) transparent
_PUTIMAGE , b&, a& 'put circle on image b to image a& (a PSET dot)
_PUTIMAGE , a&, 0 'put what is on image a& to the screen (handle 0)
```
  
<br>



##### Example 2: Demonstrates how printed text can be stretched using _PUTIMAGE with _DEST pages.
```vb
DIM a(10) AS LONG
DIM b AS LONG

REM Sets up a newimage for B then sets the screen to that.
b = _NEWIMAGE(640, 480, 32)
SCREEN b

REM Make pages 48 pixels tall. If the image is not at least that it wont work
a(1) = _NEWIMAGE(240, 48, 32)
a(2) = _NEWIMAGE(240, 48, 32)
a(3) = _NEWIMAGE(98, 48, 32)

xa = 100
ya = 120
xm = 4
ym = 4

REM Some fun things for the bouncing text.
st$(0) = "doo"
st$(1) = "rey"
st$(2) = "mee"
st$(3) = "faa"
st$(4) = "soo"
st$(5) = "laa"
st$(6) = "tee"

sta$(0) = "This is a demo"
sta$(1) = "showing how to use"
sta$(2) = "the _DEST command"
sta$(3) = "with PRINT"
sta$(4) = "and _PUTIMAGE"

REM prints to a(3) image then switches back to the default 0
_DEST a(3): f = INT(RND * 6): PRINT st$(3): _DEST 0

DO
REM prints to a(1) and a(2) then switches bac to 0
_DEST a(1)
CLS
PRINT sta(r)
_DEST a(2)
CLS
PRINT sta(r + 1)
_DEST 0 'destination zero is the main program page

REM a loop to putimage the images in a(1) and a(2) in a way to make it look like its rolling
FOR yat = 150 TO 380 STEP 4
CLS
_PUTIMAGE (0, yat)-(640, 380), a(1)
_PUTIMAGE (0, 150)-(640, yat), a(2)
GOSUB bounce
_DISPLAY
_LIMIT 20
NEXT yat

r = r + 1
IF r = 4 THEN r = 0
LOOP UNTIL INKEY$ <> ""
END

bounce:
IF xa > 600 OR xa < 20 THEN xm = xm * -1: _DEST a(3): f = INT(RND * 6): CLS: _CLEARCOLOR 0: PRINT st$(f): _DEST 0
IF ya > 400 OR ya < 20 THEN ym = ym * -1: _DEST a(3): f = INT(RND * 7): CLS: _CLEARCOLOR 0: PRINT st$(f): _DEST 0
_PUTIMAGE (xa, ya)-(xa + 150, ya + 80), a(3)
xa = xa + xm
ya = ya + ym
RETURN
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_DEST](DEST.md) (function)
* [_SOURCE](SOURCE.md)
* [_PUTIMAGE](PUTIMAGE.md)
* [_CONSOLE](CONSOLE.md)
</blockquote>
