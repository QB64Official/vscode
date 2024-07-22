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

## [_SCREENCLICK](SCREENCLICK.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SCREENCLICK)
---
<blockquote>

### The _SCREENCLICK statement simulates clicking on a pixel coordinate on the desktop screen with the left mouse button.

</blockquote>

#### SYNTAX

<blockquote>

`_SCREENCLICK column% , row% [, button% ]`

</blockquote>

#### DESCRIPTION

<blockquote>

*  column% is the horizontal pixel coordinate position on the screen.
*  row% is the vertical pixel coordinate position on the screen.
*  Optional button% can be used to specify left button (1, default), right button (2) or middle button (3) (available with build 20170924/68 ).
*  Coordinates can range from 0 [TO](TO.md)  the [_DESKTOPWIDTH](DESKTOPWIDTH.md)  and [_DESKTOPHEIGHT](DESKTOPHEIGHT.md)  . The desktop image acquired by [_SCREENIMAGE](SCREENIMAGE.md)  can be used [TO](TO.md)  map the coordinates required.
*  Keyword not supported in Linux or macOS versions


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  [_SCREENIMAGE](SCREENIMAGE.md)  , [_SCREENPRINT](SCREENPRINT.md) 
*  [_SCREENMOVE](SCREENMOVE.md)  , [_SCREENX](SCREENX.md)  , [_SCREENY](SCREENY.md) 
*  [_DESKTOPWIDTH](DESKTOPWIDTH.md)  , [_DESKTOPHEIGHT](DESKTOPHEIGHT.md) 

</blockquote>
