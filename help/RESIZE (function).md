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

## [_RESIZE_(function)](RESIZE_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_RESIZE (function))
---
<blockquote>

### The _RESIZE function returns true (-1) when a user has attempted to resize the program window and $RESIZE :ON has allowed it.

</blockquote>

#### SYNTAX

<blockquote>

`IF _RESIZE THEN rx& = _RESIZEWIDTH : ry& = _RESIZEHEIGHT`

</blockquote>

#### DESCRIPTION

<blockquote>

*  The function returns -1 if a program screen resize was attempted by the user.
*  After the function returns -1, [_RESIZEWIDTH](RESIZEWIDTH.md)  and [_RESIZEHEIGHT](RESIZEHEIGHT.md)  can return the new requested dimensions in pixels.
*  The $RESIZE : [ON](ON.md)  metacommand must be used so the program is created with a user resizable window.


</blockquote>

#### SEE ALSO

<blockquote>

*  $RESIZE
*  [_RESIZE](RESIZE.md) 
*  [_RESIZEWIDTH](RESIZEWIDTH.md)  , [_RESIZEHEIGHT](RESIZEHEIGHT.md) 

</blockquote>
