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

## [_CLIPBOARDIMAGE_(function)](CLIPBOARDIMAGE_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_CLIPBOARDIMAGE (function))
---
<blockquote>

### The _CLIPBOARDIMAGE function pastes an image from the clipboard into a new 32-bit image in memory.

</blockquote>

#### SYNTAX

<blockquote>

`newImageHandle& = _CLIPBOARDIMAGE`

</blockquote>

#### DESCRIPTION

<blockquote>

*  When the paste operation is successful, newImageHandle& will be < -1. Handle values of -1 or 0 indicate that there wasn't an image in the clipboard or that the format wasn't accepted.
*  Use [_FREEIMAGE](FREEIMAGE.md)  to [FREE](FREE.md)  the memory used by newImageHandle& when it's no longer needed by your program.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_CLIPBOARDIMAGE](CLIPBOARDIMAGE.md)  (statement - used to copy an image to the clipboard)
*  _CLIPBOARD$ , _CLIPBOARD$ (function) (used to copy/paste text)

</blockquote>
