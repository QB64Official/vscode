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


## [_SCREENMOVE](SCREENMOVE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SCREENMOVE)
---
<blockquote>

### The _SCREENMOVE statement positions the program window on the desktop using designated coordinates.

</blockquote>

#### SYNTAX

<blockquote>

`_SCREENMOVE { column& , row& |_MIDDLE}`

</blockquote>

#### PARAMETERS

<blockquote>


* Positions the program window on the desktop using the column& and row& pixel coordinates for the upper left corner.
* [_MIDDLE](MIDDLE.md) can be used instead to automatically center the program window on the desktop, in any screen resolution.
</blockquote>

#### DESCRIPTION

<blockquote>


* The program's [SCREEN](SCREEN.md) dimensions may influence the desktop position that can be used to keep the entire window on the screen.
* Use [_DESKTOPWIDTH](DESKTOPWIDTH.md) and [_DESKTOPHEIGHT](DESKTOPHEIGHT.md) to find the current desktop resolution to place the program's window.
* On dual monitors a negative column& position or a value greater than the main screen width can be used to position a window in another monitor.
* A small delay may be necessary when a program first starts up to properly orient the screen on the desktop properly. See [_SCREENEXISTS](SCREENEXISTS.md) .
* Keyword not supported in Linux versions

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Calculating the border and header offsets by comparing a coordinate move with _MIDDLE by using trial and error.
```vb
userwidth& = _DESKTOPWIDTH: userheight& = _DESKTOPHEIGHT 'get current screen resolution
SCREEN _NEWIMAGE(800, 600, 256)
scrnwidth& = _WIDTH: scrnheight& = _HEIGHT  'get the dimensions of the program screen

_SCREENMOVE (userwidth& \ 2 - scrnwidth& \ 2) - 3, (userheight& \ 2 - scrnheight& \ 2) - 29
_DELAY 4
_SCREENMOVE _MIDDLE  'check centering

END
```
  
<br>



##### Example 2: Moving a program window to a second monitor positioned to the right of the main desktop.
```vb
wide& = _DESKTOPWIDTH
high& = _DESKTOPHEIGHT

PRINT wide&; "X"; high&

_DELAY 4
_SCREENMOVE wide& + 200, 200 'positive value for right monitor 2

img2& = _SCREENIMAGE
wide2& = _WIDTH(img2&)
high2& = _HEIGHT(img2&)
PRINT wide2&; "X"; high2&
_DELAY 4
_SCREENMOVE _MIDDLE 'moves program back to main monitor 1
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_SCREENX](SCREENX.md) , [_SCREENY](SCREENY.md)
* [_SCREENIMAGE](SCREENIMAGE.md) , [_DESKTOPWIDTH](DESKTOPWIDTH.md) , [_DESKTOPHEIGHT](DESKTOPHEIGHT.md)
* [_SCREENPRINT](SCREENPRINT.md)
* [_SCREENEXISTS](SCREENEXISTS.md)
* [_NEWIMAGE](NEWIMAGE.md) , [SCREEN](SCREEN.md)
</blockquote>
