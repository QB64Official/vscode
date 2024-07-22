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

## [_SCREENY](SCREENY.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SCREENY)
---
<blockquote>

### The _SCREENY function returns the current row pixel coordinate of the program window on the desktop.

</blockquote>

#### SYNTAX

<blockquote>

`positionY& = _SCREENY`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Function returns the current program window's upper left corner row position on the desktop.
*  Use [_DESKTOPWIDTH](DESKTOPWIDTH.md)  and [_DESKTOPHEIGHT](DESKTOPHEIGHT.md) [TO](TO.md)  find the current user's Windows desktop resolution [TO](TO.md)  adjust the position with [_SCREENMOVE](SCREENMOVE.md)  .
*  Keyword not supported in Linux or macOS versions


</blockquote>

#### SEE ALSO

<blockquote>

*  [_SCREENX](SCREENX.md) 
*  [_SCREENIMAGE](SCREENIMAGE.md) 
*  [_SCREENCLICK](SCREENCLICK.md) 
*  [_SCREENPRINT](SCREENPRINT.md) 
*  [_SCREENMOVE](SCREENMOVE.md) 

</blockquote>
