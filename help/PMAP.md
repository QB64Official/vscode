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


## [PMAP](PMAP.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/PMAP)
---
<blockquote>

### The PMAP statement returns the physical or WINDOW view port coordinates.

</blockquote>

#### SYNTAX

<blockquote>

`PMAP ( coordinate , function_number% )`

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Use PMAP to convert coordinate values from view to screen coordinates and from screen coordinates to view coordinates.
```vb
SCREEN 12
'Coordinates of upper-left corner of the window is defined in following statement are (90,100)
WINDOW SCREEN (90, 100)-(200, 200) 'coordinates of lower-right 'corner are 200, 200.

X = PMAP(90, 0)          ' X = 0
PRINT X
Y = PMAP(100, 1)         ' Y = 0
PRINT Y

'These statements return the screen coordinates equal to the view coordinates 200, 200.
X = PMAP(200, 0)         ' X = 639
PRINT X
Y = PMAP(200, 1)         ' Y = 479
PRINT Y

'These statements return the view coordinates equal to the screen coordinates 0, 0
X = PMAP(0, 0)
PRINT X
Y = PMAP(0, 0)
PRINT Y

'These statements return the view coordinates equal to the screen coordinates 639, 479.
X = PMAP(639, 2)         ' X = 200
PRINT X
Y = PMAP(479, 3)         ' Y = 200
PRINT Y

SLEEP                    ' pause before clearing view port
CLS 1                    ' clear grahic view port
WINDOW                   ' end graphic view port
END
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [WINDOW](WINDOW.md) , [VIEW](VIEW.md)
* [VIEW](VIEW.md) [PRINT](PRINT.md)
</blockquote>
