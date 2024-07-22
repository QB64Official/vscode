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

## [_DEST](DEST.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_DEST)
---
<blockquote>

### The _DEST statement sets the current write image or page. All graphic and print changes will be done to this image.

</blockquote>

#### SYNTAX

<blockquote>

`_DEST imageHandle&`

</blockquote>

#### DESCRIPTION

<blockquote>

*  imageHandle& is the handle of the image that will act as the current write page.
*  [_DEST](DEST.md)  0 refers to the present program [SCREEN](SCREEN.md)  . You can use 0 to refer to the present program [SCREEN](SCREEN.md)  .
*  [_DEST](DEST.md)  [_CONSOLE]( [CONSOLE](CONSOLE.md) .md)  can set the destination to send information to a [CONSOLE](CONSOLE.md)  window using [PRINT](PRINT.md)  or [INPUT](INPUT.md)  .
*  If imageHandle& is an invalid handle, an invalid handle error occurs. Always check for valid handle values first ( imageHandle& < -1).
*  Note: Use [_SOURCE](SOURCE.md)  when you need to read a page or image with [POINT](POINT.md)  , [GET](GET.md)  or the [SCREEN](SCREEN.md)  function.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_DEST](DEST.md)  (function)
*  [_SOURCE](SOURCE.md) 
*  [_PUTIMAGE](PUTIMAGE.md) 
*  [_CONSOLE]( [CONSOLE](CONSOLE.md) .md) 

</blockquote>
