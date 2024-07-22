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

## [_WIDTH_(function)](WIDTH_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_WIDTH (function))
---
<blockquote>

### The _WIDTH function returns the width of an image handle or of the current write page.

</blockquote>

#### SYNTAX

<blockquote>

`columns& = _WIDTH [( imageHandle& )]`

</blockquote>

#### DESCRIPTION

<blockquote>

*  If imageHandle& is omitted, it's assumed to be the handle of the current [SCREEN](SCREEN.md)  or write page.
*  To get the [WIDTH](WIDTH.md)  of the current program screen window use zero for the handle value or nothing: columns& = [_WIDTH]( [WIDTH](WIDTH.md) .md)  (0) or columns& = [_WIDTH]( [WIDTH](WIDTH.md) .md) 
*  If the image specified by imageHandle& is in text only( [SCREEN](SCREEN.md)  0) mode, the number of characters per row is returned.
*  If the image specified by imageHandle& is in graphics mode, the number of pixels per row is returned.
*  If imageHandle& is an invalid handle, then an invalid handle error is returned.
*  The last visible pixel coordinate of a program screen is [_WIDTH]( [WIDTH](WIDTH.md) .md)  - 1 .


</blockquote>

#### SEE ALSO

<blockquote>

*  [_HEIGHT](HEIGHT.md)  , [_LOADIMAGE](LOADIMAGE.md)  , [_NEWIMAGE](NEWIMAGE.md) 
*  [WIDTH](WIDTH.md) 
*  Bitmaps

</blockquote>
