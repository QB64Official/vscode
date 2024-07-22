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

## [_MOUSEY](MOUSEY.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MOUSEY)
---
<blockquote>

### The _MOUSEY function returns the current vertical (row) mouse cursor position when read after _MOUSEINPUT .

</blockquote>

#### SYNTAX

<blockquote>

`pixelRow% = _MOUSEY`

</blockquote>

#### DESCRIPTION

<blockquote>

*  [SCREEN](SCREEN.md)  0 returns the [INTEGER](INTEGER.md)  vertical text row position (from build 20170817/62 onward); older versions return a [SINGLE](SINGLE.md)  vertical text row position. Use [INTEGER](INTEGER.md)  variables to avoid floating decimal returns.
*  Graphic screen modes 1, 2 and 7 to 13 and [_NEWIMAGE](NEWIMAGE.md)  32 bit return the [INTEGER](INTEGER.md)  pixel columns.
*  To calculate text rows in graphic modes divide the return by 16 or the [_FONTHEIGHT](FONTHEIGHT.md)  of [_FONT](FONT.md)  characters.
*  [_MOUSEINPUT](MOUSEINPUT.md)  must be used to detect any changes in the mouse position and is required for any coordinate returns.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_MOUSEX](MOUSEX.md)  , [_MOUSEBUTTON](MOUSEBUTTON.md)  , [_MOUSEWHEEL](MOUSEWHEEL.md) 
*  [_MOUSEINPUT](MOUSEINPUT.md)  , [_MOUSEMOVE](MOUSEMOVE.md) 
*  [_MOUSESHOW](MOUSESHOW.md)  , [_MOUSEHIDE](MOUSEHIDE.md) 
*  [_MOUSEMOVEMENTX](MOUSEMOVEMENTX.md)  , [_MOUSEMOVEMENTY](MOUSEMOVEMENTY.md) 
*  Controller Devices

</blockquote>
