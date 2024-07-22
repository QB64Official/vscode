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

## [_RESIZE](RESIZE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_RESIZE)
---
<blockquote>

### The _RESIZE statement sets resizing of the window ON or OFF and sets the method as _STRETCH or _SMOOTH.

</blockquote>

#### SYNTAX

<blockquote>

`_RESIZE [{ON|OFF}][, {_STRETCH|_SMOOTH}]`

</blockquote>

#### PARAMETERS

<blockquote>

*  When resizing is turned [OFF](OFF.md)  no method is listed.
*  When resizing is turned [ON](ON.md)  or left empty, a [_STRETCH]( [STRETCH](STRETCH.md) .md)  or [_SMOOTH]( [SMOOTH](SMOOTH.md) .md)  method can be used.

</blockquote>

#### DESCRIPTION

<blockquote>

*  Before this statement can be used, you must add the $RESIZE : [ON](ON.md)  metacommand to your program.


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  $RESIZE
*  [_RESIZE](RESIZE.md)  (function)
*  [_RESIZEHEIGHT](RESIZEHEIGHT.md) 
*  [_RESIZEWIDTH](RESIZEWIDTH.md) 

</blockquote>
