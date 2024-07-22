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

## [_MOUSEMOVE](MOUSEMOVE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MOUSEMOVE)
---
<blockquote>

### The _MOUSEMOVE statement moves the mouse pointer to a new position on the screen as determined by the column and row coordinates.

</blockquote>

#### SYNTAX

<blockquote>

`_MOUSEMOVE column% , row%`

</blockquote>

#### PARAMETERS

<blockquote>

*  column% is the horizontal pixel coordinate to place the mouse pointer and can be any value from 0 to [_WIDTH]( [WIDTH](WIDTH.md) .md)  (0) - 1.
*  row% is the vertical pixel position to place the mouse pointer and can be any value from 0 to [_HEIGHT](HEIGHT.md)  (0) - 1

</blockquote>

#### DESCRIPTION

<blockquote>

*  Maximum coordinate values are based on a program's current [SCREEN](SCREEN.md)  mode resolution or the pixel size set by [_NEWIMAGE](NEWIMAGE.md)  .
*  [SCREEN](SCREEN.md)  0 uses text block coordinates. Coordinates off the [SCREEN](SCREEN.md)  area will create an "Illegal Function Call" [ERROR](ERROR.md) 
*  Can be used to position the pointer to a default dialog button or move the cursor away from a button so it is not clicked twice.
*  Does not require [_MOUSEINPUT](MOUSEINPUT.md)  to be used, but all moves will be remembered and can be read by mouse functions.


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  [_MOUSEX](MOUSEX.md)  , [_MOUSEY](MOUSEY.md) 
*  [_NEWIMAGE](NEWIMAGE.md)  , [_SCREENIMAGE](SCREENIMAGE.md) 

</blockquote>
