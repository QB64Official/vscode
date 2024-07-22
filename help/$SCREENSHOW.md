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

## [\$SCREENSHOW](\$SCREENSHOW.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/$SCREENSHOW)
---
<blockquote>

### The $SCREENSHOW metacommand can be used to display the main program window throughout the program.

</blockquote>

#### SYNTAX

<blockquote>

`$SCREENSHOW`

</blockquote>

#### DESCRIPTION

<blockquote>

*  The metacommand is intended to be used in a modular program when a screen surface is necessary in one or more modules.
*  $SCREENSHOW can only be used after $SCREENHIDE or [_SCREENHIDE](SCREENHIDE.md)  have been used in another program module.
*  If $SCREENHIDE and then $SCREENSHOW are used in the same program module the window will not be hidden.
*  QB64 metacommands cannot be commented out with apostrophe or [REM](REM.md)  .


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  $CONSOLE , $SCREENHIDE (QB64 Metacommands )
*  [_SCREENHIDE](SCREENHIDE.md)  , [_SCREENSHOW](SCREENSHOW.md) 
*  [_CONSOLE]( [CONSOLE](CONSOLE.md) .md) 

</blockquote>
