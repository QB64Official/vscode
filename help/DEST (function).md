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

## [_DEST_(function)](DEST_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_DEST (function))
---
<blockquote>

### The _DEST function returns the handle value of the current write page (the image used for drawing).

</blockquote>

#### SYNTAX

<blockquote>

`result& = _DEST`

</blockquote>

#### DESCRIPTION

<blockquote>

*  The current write page is where all drawing occurs by default.
*  The value returned is the same as the latest [SCREEN](SCREEN.md)  's handle when creating custom [SCREEN](SCREEN.md)  modes using [_NEWIMAGE](NEWIMAGE.md)  .
*  Keep the [_NEWIMAGE](NEWIMAGE.md)  handle values when you move to another [SCREEN](SCREEN.md)  mode so that you can return to that [SCREEN](SCREEN.md)  later. You can go to another [SCREEN](SCREEN.md)  mode and return without having to redo the [SCREEN](SCREEN.md) .
*  [_DEST](DEST.md)  return values do not change in legacy screen modes. The value will not help restore them.


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  [_DEST](DEST.md) 
*  [_SOURCE](SOURCE.md)  (function)
*  [SCREEN](SCREEN.md) 

</blockquote>
