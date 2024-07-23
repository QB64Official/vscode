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


## [\$RESIZE](\$RESIZE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/%24RESIZE)
---
<blockquote>

### The $RESIZE metacommand determines if a program window can be resized by the user.

</blockquote>

#### SYNTAX

<blockquote>

`$RESIZE :{ON|OFF|STRETCH|SMOOTH}`

</blockquote>

#### DESCRIPTION

<blockquote>


* $RESIZE:ON is used to allow the program window to be resized by a program user. Otherwise it cannot be changed.
* $RESIZE:OFF ( default ) is used when the program's window size cannot be changed by the user.
* $RESIZE:STRETCH the screen will be stretched to fit the new window size with a 1 to 1 ratio of width and height.
* $RESIZE:SMOOTH the screen will be stretched also, but with linear filtering applied to the pixels.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Resizing a program screen when the user changes it without clearing the entire screen image:
```vb
$RESIZE:ON

SCREEN _NEWIMAGE(160, 140, 32)
_DELAY 0.1
_SCREENMOVE 20, 20
_DISPLAY

' CLEAR _RESIZE FLAG BY READING IT ONCE
temp& = _RESIZE

DO

_LIMIT 60

IF CheckResize(_SOURCE) = -1 THEN
FOR i = 1 TO 10
CIRCLE (RND * _WIDTH(0) - 1, RND * _HEIGHT(0) - 1), RND * 100 + 5, _RGB32(RND * 255, RND * 255, RND * 255)
NEXT
ELSE
FOR i = 1 TO 200
PSET (RND * _WIDTH(0) - 1, RND * _HEIGHT(0) - 1), _RGB32(RND * 255, RND * 255, RND * 255)
NEXT
END IF

_DISPLAY

k& = _KEYHIT

LOOP UNTIL k& = 27 OR k& = 32

SYSTEM



' *************************************************************************************************
' *                                                                                               *
' *  CheckResize: This FUNCTION checks if the user resized the window, and if so, recreates the   *
' *               ORIGINAL SCREEN image to the new window size.                                   *
' *                                                                                               *
' *               Developer Note: You must use $RESIZE:ON, $RESIZE:SMOOTH, or $RESIZE:SMOOTH at   *
' *                               the beginning of your project for this to work.                 *
' *                               This FUNCTION only works in QB64 version 1.000 and up.          *
' *                                                                                               *
' *************************************************************************************************
FUNCTION CheckResize (CurrentScreen AS _UNSIGNED LONG)

' *** Define local variable for temporary screen
DIM TempScreen AS _UNSIGNED LONG

CheckResize = 0

' *** Check to see if the user resized the window. If so, change the SCREEN image to the correct size.
IF _RESIZE THEN

' *** First, create a copy of the current SCREEN image.
TempScreen = _COPYIMAGE(CurrentScreen, 32)

' *** Set the SCREEN to the copied image, releasing the current SCREEN image.
SCREEN TempScreen

' *** Remove (FREE) the original SCREEN image.
_FREEIMAGE CurrentScreen

' *** Create a new "original" SCREEN image.
CurrentScreen = _NEWIMAGE(_RESIZEWIDTH, _RESIZEHEIGHT, 32)

' *** Set the SCREEN to the new "original" image, releasing the copied SCREEN image.
SCREEN CurrentScreen

'  DRAW PREVIOUS SCREEN ON THE NEW ONE
_PUTIMAGE (0, 0), TempScreen, CurrentScreen

_DISPLAY

' *** Remove (FREE) the copied SCREEN image.
_FREEIMAGE TempScreen

' *** Tell the caller there was a resize
CheckResize = -1

END IF


END FUNCTION
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_RESIZE](RESIZE.md) , [_RESIZE](RESIZE.md) (function)
* [_RESIZEWIDTH](RESIZEWIDTH.md) , [_RESIZEHEIGHT](RESIZEHEIGHT.md) (functions return the requested dimensions)
</blockquote>
