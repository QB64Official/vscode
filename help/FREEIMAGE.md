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

## [_FREEIMAGE](FREEIMAGE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_FREEIMAGE)
---
<blockquote>

### The _FREEIMAGE statement releases the designated file image created by the _LOADIMAGE , _NEWIMAGE or _COPYIMAGE functions from memory when they are no longer needed.

</blockquote>

#### SYNTAX

<blockquote>

`_FREEIMAGE [ handle& ]`

</blockquote>

#### DESCRIPTION

<blockquote>

*  If handle& is omitted, the current destination image is freed from memory.
*  Freeing the destination image or source image will result in the display page being selected instead.
*  Invalid image handle values of -1 or 0 cannot be freed or an "Illegal Function" error will occur. Check the handle value first.
*  [SCREEN](SCREEN.md)  modes in use cannot be freed or an "Illegal Function" error will occur. Change [SCREEN](SCREEN.md)  modes before freeing.
*  Once a specific image handle is no longer used or referenced by your program, it can be freed with [_FREEIMAGE](FREEIMAGE.md)  .
*  Images are not deallocated when the [SUB](SUB.md)  or [FUNCTION](FUNCTION.md)  they are created in ends. [FREE](FREE.md)  them with [_FREEIMAGE](FREEIMAGE.md)  .
*  It is important to [FREE](FREE.md)  unused or unneeded images with [_FREEIMAGE](FREEIMAGE.md)  to prevent memory overflow errors.
*  Do not try to free image handles currently being used as the active [SCREEN](SCREEN.md)  . Change [SCREEN](SCREEN.md)  modes first.
*  Note that calling [_FREEIMAGE](FREEIMAGE.md)  only frees the handle.  It does [NOT](NOT.md)  reset the variable used to store the handle back to 0.  (This is because 0 is often used as a short cut value for the current display, such as with [_DEST](DEST.md)  0.)


</blockquote>

#### SEE ALSO

<blockquote>

*  [_NEWIMAGE](NEWIMAGE.md) 
*  [_LOADIMAGE](LOADIMAGE.md) 
*  [_SCREENIMAGE](SCREENIMAGE.md) 
*  [_COPYIMAGE](COPYIMAGE.md) 
*  [_SAVEIMAGE](SAVEIMAGE.md) 

</blockquote>
