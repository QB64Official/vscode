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


## [WINDOW](WINDOW.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/WINDOW)
---
<blockquote>

### The WINDOW command scales the graphics coordinate system of the current _DEST image, optionally inverting the direction of the vertical axis. Any coordinates used in drawing commands made to the image are scaled such that the image seems have have the dimensions requested.

</blockquote>

#### SYNTAX

<blockquote>

`WINDOW [ [ SCREEN ] ( x1! , y1! ) - ( x2! , y2! )]`

</blockquote>

#### PARAMETERS

<blockquote>


</blockquote>

#### DESCRIPTION

<blockquote>



</blockquote>

#### EXAMPLES

<blockquote>

```vb
SCREEN _NEWIMAGE(600, 600, 32) '600 pixels in x and y directions and displayed on screen
WINDOW SCREEN (0, 0)-(6, 6)
```
  
<br>

```vb
SCREEN _NEWIMAGE(640, 480, 32) 'Not a square image
WINDOW SCREEN (0, 0)-(10, 10) 'SCREEN keeps the axis direction the same
LINE (4, 4)-(6, 6), _RGB32(255, 0, 0), BF 'Red square centred on (5, 5); will be stretched into a rectangle
CIRCLE (5, 5), 1, _RGB32(0, 255, 0) 'Green circle at (5, 5) with radius 1
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [PMAP](PMAP.md)
* [VIEW](VIEW.md)
* [VIEW](VIEW.md) [PRINT](PRINT.md)
</blockquote>
