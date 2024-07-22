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

## [_DEFAULTCOLOR](DEFAULTCOLOR.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_DEFAULTCOLOR)
---
<blockquote>

### The _DEFAULTCOLOR function returns the current default (text/drawing) color for an image handle or page.

</blockquote>

#### SYNTAX

<blockquote>

`col~& = _DEFAULTCOLOR [( imageHandle& )]`

</blockquote>

#### PARAMETERS

<blockquote>

*  If imageHandle& is omitted, it is assumed to be the current write page or image designated by [_DEST](DEST.md)  .
*  If imageHandle& is an invalid handle, an Invalid handle error occurs. Check handle values first. Zero designates the current screen.

</blockquote>

#### DESCRIPTION

<blockquote>

*  Use it to get the current default (foreground) color to restore it later in a program.
*  In legacy [SCREEN](SCREEN.md)  modes and in [_NEWIMAGE](NEWIMAGE.md)  256 colors mode the color attribute/palette index is returned.
*  In [_NEWIMAGE](NEWIMAGE.md)  32-bit mode the [_RGBA32](RGBA32.md)  value ( &H00 00 00 00 to &HFF FF FF FF ) is returend, make sure to store it in an [_UNSIGNED](UNSIGNED.md) [LONG](LONG.md)  variable (as seen in the syntax above with the ~& suffix), otherwise the blue component may be lost.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_BACKGROUNDCOLOR](BACKGROUNDCOLOR.md) 
*  [COLOR](COLOR.md)  , [_DEST](DEST.md) 
*  [SCREEN](SCREEN.md)  , [SCREEN](SCREEN.md)  (function)
*  Color Dialog Box

</blockquote>
