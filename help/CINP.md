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

## [_CINP](CINP.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_CINP)
---
<blockquote>

### The _CINP function returns keyboard key press codes from a $CONSOLE window. Windows-only.

</blockquote>

#### SYNTAX

<blockquote>

`keycode& = _CINP`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Return values are the same as the ones for [INP](INP.md)  when used to read keyboard input. See table below.
*  Negative values returned indicate that a key was released or a lock function key has been turned off.
*  Keyword not supported in Linux or macOS versions


</blockquote>

#### SEE ALSO

<blockquote>

*  $CONSOLE , [_CONSOLE](CONSOLE.md) 
*  [_CONSOLEINPUT](CONSOLEINPUT.md) 
*  [_MOUSEX](MOUSEX.md)  , [_MOUSEY](MOUSEY.md)  , [_MOUSEBUTTON](MOUSEBUTTON.md)  , [_MOUSEWHEEL](MOUSEWHEEL.md) 

</blockquote>
