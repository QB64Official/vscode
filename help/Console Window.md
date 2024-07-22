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

## [Console_Window](Console_Window.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Console Window)
---
<blockquote>

### QB64 has console window support using the following QB64 Metacommand or keyword:

</blockquote>

#### SYNTAX

<blockquote>

`$CONSOLE`

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Copying console window text is as simple as a right click on highlighted text areas. Another right click will close console.
```vb
$SCREENHIDE
$CONSOLE
_DEST _CONSOLE

PRINT
PRINT "Copy this text by highlighting and right clicking!"
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  $SCREENHIDE , $SCREENSHOW
*  $CONSOLE , [_CONSOLE](CONSOLE.md)  , [_DEST](DEST.md) 
*  Console Library

</blockquote>
