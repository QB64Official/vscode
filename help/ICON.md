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

## [_ICON](ICON.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_ICON)
---
<blockquote>

### The _ICON statement uses an image handle from _LOADIMAGE for the program header and icon image in the OS.

</blockquote>

#### SYNTAX

<blockquote>

`_ICON [ mainImageHandle& [, smallImageHandle& ]]`

</blockquote>

#### PARAMETERS

<blockquote>

*  mainImageHandle& is the [LONG](LONG.md)  handle value of the OS icon and title bar image pre-loaded with [_LOADIMAGE](LOADIMAGE.md)  when used alone.
*  smallImageHandle& is the [LONG](LONG.md)  handle value of a different title bar image pre-loaded with [_LOADIMAGE](LOADIMAGE.md)  when used.
*  No image handle designates use of the default QB64 icon or the embedded icon set by $EXEICON .

</blockquote>

#### DESCRIPTION

<blockquote>

*  If no image handle is passed, the default QB64 icon will be used (all versions). If the $EXEICON metacommand is used, [_ICON](ICON.md)  without an image handle uses the embedded icon from the binary (Windows only).
*  Beginning with version 1.000 , the following is considered:


</blockquote>

#### SEE ALSO

<blockquote>

*  [_TITLE](TITLE.md) 
*  [_LOADIMAGE](LOADIMAGE.md)  , [_SAVEIMAGE](SAVEIMAGE.md) 
*  $EXEICON
*  Creating Icon Bitmaps
*  Bitmaps , Icons and Cursors
*  Icon Extraction

</blockquote>
