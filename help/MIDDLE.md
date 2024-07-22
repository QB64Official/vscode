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

## [_SCREENMOVE](SCREENMOVE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SCREENMOVE)
---
<blockquote>

### The _SCREENMOVE statement positions the program window on the desktop using designated coordinates.

</blockquote>

#### SYNTAX

<blockquote>

`_SCREENMOVE { column& , row& |_MIDDLE}`

</blockquote>

#### PARAMETERS

<blockquote>

*  Positions the program window on the desktop using the column& and row& pixel coordinates for the upper left corner.
*  [_MIDDLE](MIDDLE.md)  can be used instead to automatically center the program window on the desktop, in any screen resolution.

</blockquote>

#### DESCRIPTION

<blockquote>

*  The program's [SCREEN](SCREEN.md)  dimensions may influence the desktop position that can be used to keep the entire window on the [SCREEN](SCREEN.md) .
*  Use [_DESKTOPWIDTH](DESKTOPWIDTH.md)  and [_DESKTOPHEIGHT](DESKTOPHEIGHT.md) [TO](TO.md)  find the current desktop resolution [TO](TO.md)  place the program's window.
*  On dual monitors a negative column& position or a value greater than the main screen width can be used to position a window in another monitor.
*  A small delay may be necessary when a program first starts up to properly orient the [SCREEN](SCREEN.md)  on the desktop properly. See [_SCREENEXISTS](SCREENEXISTS.md)  .
*  Keyword not supported in Linux versions


</blockquote>

#### SEE ALSO

<blockquote>

*  [_SCREENX](SCREENX.md)  , [_SCREENY](SCREENY.md) 
*  [_SCREENIMAGE](SCREENIMAGE.md)  , [_DESKTOPWIDTH](DESKTOPWIDTH.md)  , [_DESKTOPHEIGHT](DESKTOPHEIGHT.md) 
*  [_SCREENPRINT](SCREENPRINT.md) 
*  [_SCREENEXISTS](SCREENEXISTS.md) 
*  [_NEWIMAGE](NEWIMAGE.md)  , [SCREEN](SCREEN.md) 

</blockquote>
