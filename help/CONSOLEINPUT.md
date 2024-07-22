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

## [_CONSOLEINPUT](CONSOLEINPUT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_CONSOLEINPUT)
---
<blockquote>

### The _CONSOLEINPUT function is used to monitor any new mouse or keyboard input coming from a $CONSOLE window. It must be called in order for _CINP to return valid values. Windows-only.

</blockquote>

#### SYNTAX

<blockquote>

`infoExists%% = _CONSOLEINPUT`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Returns 1 if new keyboard information is available, 2 if mouse information is available, otherwise it returns 0.
*  Must be called before reading any of the other mouse functions and before reading [_CINP](CINP.md)  .
*  To clear all previous [INPUT](INPUT.md)  data, read [_CONSOLEINPUT](CONSOLEINPUT.md)  in a loop until it returns 0.
*  Keyword not supported in Linux or macOS versions


</blockquote>

#### SEE ALSO

<blockquote>

*  $CONSOLE , [_CONSOLE](CONSOLE.md) 
*  [_CINP](CINP.md)  , Scan Codes
*  [_MOUSEX](MOUSEX.md)  , [_MOUSEY](MOUSEY.md)  , [_MOUSEBUTTON](MOUSEBUTTON.md)  , [_MOUSEWHEEL](MOUSEWHEEL.md) 

</blockquote>
