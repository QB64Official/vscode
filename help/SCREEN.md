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

## [SCREEN](SCREEN.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/SCREEN)
---
<blockquote>

### The SCREEN statement sets the video display mode and size of the program window's workspace.

</blockquote>

#### SYNTAX

<blockquote>

`SCREEN { mode% | imagehandle& } [, , active_page, visual_page]`

</blockquote>

#### PARAMETERS

<blockquote>

*  The [SCREEN](SCREEN.md)  mode [INTEGER](INTEGER.md)  values available today are 0 to 2 and 7 to 13 listed below.
*  QB64 can use a [LONG](LONG.md)  [_NEWIMAGE](NEWIMAGE.md)  page or [_LOADIMAGE](LOADIMAGE.md)  file image handle value instead.
*  The empty comma disables color when any value is used. [DO](DO.md)  [NOT](NOT.md)  USE! Include the comma [ONLY](ONLY.md)  when using page flipping.
*  If the [SCREEN](SCREEN.md)  mode supports pages, the active page is the page to be worked on while visual page is the one displayed.

</blockquote>

#### SEE ALSO

<blockquote>

*  [COLOR](COLOR.md)  , [CLS](CLS.md)  , [WIDTH](WIDTH.md) 
*  [_NEWIMAGE](NEWIMAGE.md)  , [_LOADIMAGE](LOADIMAGE.md)  , [_SAVEIMAGE](SAVEIMAGE.md) 
*  [_SCREENIMAGE](SCREENIMAGE.md) 
*  [_LOADFONT](LOADFONT.md)  , [_FONT](FONT.md) 
*  [_DISPLAY](DISPLAY.md)  , [_COPYIMAGE](COPYIMAGE.md)  , [_SCREENMOVE](SCREENMOVE.md) 
*  [_SCREENHIDE](SCREENHIDE.md)  , [_SCREENSHOW](SCREENSHOW.md)  , [_SCREENICON](SCREENICON.md) 
*  [PALETTE](PALETTE.md)  , [OUT](OUT.md)  , [PCOPY](PCOPY.md)  ,
*  [GET](GET.md)  , [PUT](PUT.md) 
*  [VIEW](VIEW.md)  , [WINDOW](WINDOW.md)  , [VIEW](VIEW.md)  [PRINT](PRINT.md) 
*  [SCREEN](SCREEN.md)  (function) , [POINT](POINT.md) 
*  Screen Memory , Screen Saver Programs
*  [_CONSOLE]( [CONSOLE](CONSOLE.md) .md) 

</blockquote>
