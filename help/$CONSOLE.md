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

## [\$CONSOLE](\$CONSOLE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/$CONSOLE)
---
<blockquote>

### The $CONSOLE Metacommand creates a console window that can be used throughout a QB64 program module.

</blockquote>

#### SYNTAX

<blockquote>

`$CONSOLE [:ONLY]`

</blockquote>

#### DESCRIPTION

<blockquote>

*  [_CONSOLE]( [CONSOLE](CONSOLE.md) .md) [ON](ON.md)  or [OFF](OFF.md)  may be used to show or hide the [CONSOLE](CONSOLE.md)  window at run time.
*  The : [ONLY](ONLY.md)  option can be used when [ONLY](ONLY.md)  a console window is desired without a program window.
*  [_DEST](DEST.md)  [_CONSOLE]( [CONSOLE](CONSOLE.md) .md)  may be used to send screen output to the [CONSOLE](CONSOLE.md)  window.
*  [_SCREENHIDE](SCREENHIDE.md)  and [_SCREENSHOW](SCREENSHOW.md)  can be used to hide or show the main program window.
*  [_DELAY](DELAY.md)  or [SLEEP](SLEEP.md)  can be used to allow the console window to be set in front of the main program window.
*  QB64 Metacommands are not commented out with ' or [REM](REM.md) , unlike QuickBASIC metacommands
*  Change the title of the $CONSOLE windows created using [_CONSOLETITLE](CONSOLETITLE.md) 
*  Note: Text can be copied partially or totally from console screens in Windows by highlighting and using the title bar menu.


</blockquote>

#### SEE ALSO

<blockquote>

*  _CLIPBOARD$ (function) , _CLIPBOARD$ (statement)
*  [_CONSOLE]( [CONSOLE](CONSOLE.md) .md)  , [_ECHO](ECHO.md) 
*  $SCREENHIDE , $SCREENSHOW (QB64 Metacommands )
*  [_SCREENHIDE](SCREENHIDE.md)  , [_SCREENSHOW](SCREENSHOW.md) 
*  C Console Library

</blockquote>
