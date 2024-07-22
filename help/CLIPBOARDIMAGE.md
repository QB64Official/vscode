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

## [_CLIPBOARDIMAGE](CLIPBOARDIMAGE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_CLIPBOARDIMAGE)
---
<blockquote>

### The _CLIPBOARDIMAGE statement copies a valid QB64 image to the clipboard.

</blockquote>

#### SYNTAX

<blockquote>

`_CLIPBOARDIMAGE = existingImageHandle&`

</blockquote>

#### DESCRIPTION

<blockquote>

*  existingImageHandle& is a valid handle to a graphic QB64 image in memory, created with [_NEWIMAGE](NEWIMAGE.md)  , [_LOADIMAGE](LOADIMAGE.md)  or [_COPYIMAGE](COPYIMAGE.md)  .
*  You can pass [_SOURCE](SOURCE.md)  , [_DEST](DEST.md)  or [_DISPLAY](DISPLAY.md)  to copy the current source, destination or active display pages, as long as they are valid graphic images.
*  [SCREEN](SCREEN.md)  0 handles (created either with [_NEWIMAGE](NEWIMAGE.md)  or passed using [_DEST](DEST.md)  while in a text [SCREEN](SCREEN.md) ) are not valid and will create an Illegal Function Call or Invalid Handle error.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_CLIPBOARDIMAGE](CLIPBOARDIMAGE.md)  (function - used to paste an image from the clipboard)
*  _CLIPBOARD$ , _CLIPBOARD$ (function) (used to copy/paste text)

</blockquote>
