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

## [_HEIGHT](HEIGHT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_HEIGHT)
---
<blockquote>

### The _HEIGHT function returns the height of an image handle or of the current write page.

</blockquote>

#### SYNTAX

<blockquote>

`columns& = _HEIGHT [( imageHandle& )]`

</blockquote>

#### DESCRIPTION

<blockquote>

*  If imageHandle& is omitted, it's assumed to be the handle of the current [SCREEN](SCREEN.md)  or write page.
*  To get the height of the current program screen window use zero for the handle value or nothing: lines& = [_HEIGHT](HEIGHT.md)  (0) or lines& = [_HEIGHT](HEIGHT.md) 
*  If the image specified by imageHandle& is in text only( [SCREEN](SCREEN.md)  0) mode, the number of lines of rows of characters are returned.
*  If the image specified by imageHandle& is in graphics mode, the number rows of pixels is returned.
*  If imageHandle& is an invalid handle, then an invalid handle error is returned.
*  The last visible pixel coordinate of a program screen is [_HEIGHT](HEIGHT.md)  - 1 .


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  [_WIDTH]( [WIDTH](WIDTH.md) .md)  (function) , [_LOADIMAGE](LOADIMAGE.md)  , [_NEWIMAGE](NEWIMAGE.md) 
*  Bitmaps

</blockquote>
