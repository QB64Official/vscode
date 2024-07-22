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

## [_MEMIMAGE](MEMIMAGE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MEMIMAGE)
---
<blockquote>

### The _MEMIMAGE function returns a _MEM value referring to an image's memory using a designated image handle.

</blockquote>

#### SYNTAX

<blockquote>

`imageBlock = _MEMIMAGE [( imageHandle& )]`

</blockquote>

#### PARAMETERS

<blockquote>

*  The imageBlock [_MEM](MEM.md)  [TYPE](TYPE.md)  variable holds the read-only elements .OFFSET, .SIZE, . [TYPE](TYPE.md)  and .ELEMENTSIZE.
*  If the optional imageHandle& isn't passed, it is assumed to be the current _DESTination program screen image.

</blockquote>

#### DESCRIPTION

<blockquote>

*  Use the function to place images into memory access blocks for faster data access.
*  All values created by this function must be freed using [_MEMFREE](MEMFREE.md)  with a valid [_MEM](MEM.md)  variable.
*  Image handle values and the memory used must still be freed using [_FREEIMAGE](FREEIMAGE.md)  when no longer required.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_MEM](MEM.md) 
*  [_MEMNEW](MEMNEW.md) 
*  [_MEMGET](MEMGET.md)  , [_MEMPUT](MEMPUT.md) 
*  [_MEMFREE](MEMFREE.md) 
*  $CHECKING

</blockquote>
