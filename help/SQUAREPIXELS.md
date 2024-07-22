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

## [_FULLSCREEN](FULLSCREEN.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_FULLSCREEN)
---
<blockquote>

### The _FULLSCREEN statement attempts to make the program window fullscreen.

</blockquote>

#### SYNTAX

<blockquote>

`_FULLSCREEN [ _STRETCH | _SQUAREPIXELS| _OFF ][, _SMOOTH ]`

</blockquote>

#### PARAMETERS

<blockquote>

*  [_STRETCH]( [STRETCH](STRETCH.md) .md)  default first choice attempts to mimic QBasic's full screens if possible. [_FULLSCREEN](FULLSCREEN.md)  (function) returns 1.
*  [_SQUAREPIXELS](SQUAREPIXELS.md)  alternate choice enlarges the pixels into squares on some monitors. [_FULLSCREEN](FULLSCREEN.md)  returns 2
*  [_OFF]( [OFF](OFF.md) .md)  turns [_FULLSCREEN](FULLSCREEN.md) [OFF](OFF.md)  after full [SCREEN](SCREEN.md)  has been enabled. [_FULLSCREEN](FULLSCREEN.md)  (function) returns 0.
*  Second optional parameter [_SMOOTH]( [SMOOTH](SMOOTH.md) .md)  applies antialiasing to the stretched screen.

</blockquote>

#### DESCRIPTION

<blockquote>

*  Set the [SCREEN](SCREEN.md)  mode and text [WIDTH](WIDTH.md)  when necessary first. Otherwise there may be desktop view issues.
*  [_FULLSCREEN](FULLSCREEN.md)  with no parameters chooses [_STRETCH]( [STRETCH](STRETCH.md) .md)  or [_SQUAREPIXELS](SQUAREPIXELS.md)  (prioritizes [_STRETCH]( [STRETCH](STRETCH.md) .md)  to mimic QBasic if possible)
*  Check the fullscreen mode with the [_FULLSCREEN](FULLSCREEN.md)  function in your programs when a method is required.
*  It is advisable to get input from the user to confirm that fullscreen was completed or there were possible monitor incompatibilities.
*  If fullscreen is not confirmed with a [_FULLSCREEN](FULLSCREEN.md)  (function) return greater than 0 , then disable with [_FULLSCREEN](FULLSCREEN.md) [_OFF]( [OFF](OFF.md) .md)  .
*  NOTE: [_FULLSCREEN](FULLSCREEN.md)  can also be affected by custom [_FONT](FONT.md)  size settings and make program screens too large.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_FULLSCREEN](FULLSCREEN.md)  (function)
*  [_SMOOTH]( [SMOOTH](SMOOTH.md) .md)  (function)
*  [_ALLOWFULLSCREEN](ALLOWFULLSCREEN.md) 
*  [_FONT](FONT.md)  , [SCREEN](SCREEN.md) 
*  [_SCREENIMAGE](SCREENIMAGE.md) 
*  [_SCREENMOVE](SCREENMOVE.md)  , [_SCREENX](SCREENX.md)  , [_SCREENY](SCREENY.md) 

</blockquote>
