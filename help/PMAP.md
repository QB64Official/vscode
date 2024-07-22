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

*  [WINDOW](WINDOW.md)  , [VIEW](VIEW.md) 
*  [VIEW](VIEW.md)  [PRINT](PRINT.md) 

</blockquote>
