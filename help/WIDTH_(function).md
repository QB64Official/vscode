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


## [_WIDTH (function)](WIDTH_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_WIDTH%20%28function%29)
---
<blockquote>

### The _WIDTH function returns the width of an image handle or of the current write page.

</blockquote>

#### SYNTAX

<blockquote>

`columns& = _WIDTH [( imageHandle& )]`

</blockquote>

#### DESCRIPTION

<blockquote>


* If imageHandle& is omitted, it's assumed to be the handle of the current [SCREEN](SCREEN.md) or write page.
* To get the width of the current program screen window use zero for the handle value or nothing: columns& = [_WIDTH](WIDTH.md) (0) or columns& = [_WIDTH](WIDTH.md)
* If the image specified by imageHandle& is in text only( [SCREEN](SCREEN.md) 0) mode, the number of characters per row is returned.
* If the image specified by imageHandle& is in graphics mode, the number of pixels per row is returned.
* If imageHandle& is an invalid handle, then an invalid handle error is returned.
* The last visible pixel coordinate of a program screen is [_WIDTH](WIDTH.md) - 1 .

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: A SUB program that centers text in any graphic screen mode except text mode SCREEN 0.
```vb
s& = _NEWIMAGE(800, 600, 256)
SCREEN s&
Align 15, 5, s&, "This text is centered on the screen!"

SUB Align (Tcolor, Trow, mode&, txt$)
center& = _WIDTH (mode&) \ 2     'returns pixels in graphic modes
MaxCol = (center& \ 8) + 1              'screen text width = 8 pixels
Tcol = MaxCol - (LEN(txt$) \ 2)
COLOR Tcolor: LOCATE Trow, Tcol: PRINT txt$;
END SUB
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_HEIGHT](HEIGHT.md) , [_LOADIMAGE](LOADIMAGE.md) , [_NEWIMAGE](NEWIMAGE.md)
* [WIDTH](WIDTH.md)
* Bitmaps
</blockquote>
