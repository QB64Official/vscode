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

## [_SOURCE](SOURCE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SOURCE)
---
<blockquote>

### The _SOURCE statement establishes the image SOURCE using a handle created by _LOADIMAGE , _NEWIMAGE or _COPYIMAGE .

</blockquote>

#### SYNTAX

<blockquote>

`_SOURCE handle&`

</blockquote>

#### DESCRIPTION

<blockquote>

*  The handle is a [LONG](LONG.md)  integer value from the [_SOURCE](SOURCE.md)  function or a handle created by [_NEWIMAGE](NEWIMAGE.md)  .
*  If the handle is designated as 0, it refers to the current [SCREEN](SCREEN.md)  image.
*  A source image can only supply information to a program. [POINT](POINT.md)  and [GET](GET.md)  might require a source other than the one currently active.


</blockquote>

#### MORE EXAMPLES

<blockquote>

*  Bitmaps
*  SaveImage [SUB](SUB.md) 
*  SaveIcon32

</blockquote>

#### SEE ALSO

<blockquote>

*  [_DEST](DEST.md) 
*  [_SOURCE](SOURCE.md)  (function)
*  [POINT](POINT.md)  , [GET](GET.md)  (graphics statement)

</blockquote>
