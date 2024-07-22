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

## [\$RESIZE](\$RESIZE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/$RESIZE)
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

*  $RESIZE: [ON](ON.md)  is used to allow the program window to be resized by a program user. Otherwise it cannot be changed.
*  $RESIZE: [OFF](OFF.md)  ( default ) is used when the program's window size cannot be changed by the user.
*  $RESIZE: [STRETCH](STRETCH.md)  the screen will be stretched to fit the new window size with a 1 to 1 ratio of width and height.
*  $RESIZE: [SMOOTH](SMOOTH.md)  the screen will be stretched also, but with linear filtering applied to the pixels.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_RESIZE](RESIZE.md)  , [_RESIZE](RESIZE.md)  (function)
*  [_RESIZEWIDTH](RESIZEWIDTH.md)  , [_RESIZEHEIGHT](RESIZEHEIGHT.md)  (functions return the requested dimensions)

</blockquote>
