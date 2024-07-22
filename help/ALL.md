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

## [_ALLOWFULLSCREEN](ALLOWFULLSCREEN.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_ALLOWFULLSCREEN)
---
<blockquote>

### The _ALLOWFULLSCREEN statement allows setting the behavior of the ALT+ENTER combo.

</blockquote>

#### SYNTAX

<blockquote>

`_ALLOWFULLSCREEN [{_STRETCH|_SQUAREPIXELS|OFF|_ALL}][, {_SMOOTH|OFF|_ALL}]`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Calling the statement with no parameters enables all four possible full screen modes (and is the default state when a program is started): both [_STRETCH]( [STRETCH](STRETCH.md) .md)  ( [_SMOOTH]( [SMOOTH](SMOOTH.md) .md)  and [_OFF]( [OFF](OFF.md) .md)  ) and [_SQUAREPIXELS](SQUAREPIXELS.md)  ( [_SMOOTH]( [SMOOTH](SMOOTH.md) .md)  and [_OFF]( [OFF](OFF.md) .md)  ).
	* Using [_ALLOWFULLSCREEN](ALLOWFULLSCREEN.md) [_ALL](ALL.md)  , [_ALL](ALL.md)  has the same effect.
*  [_ALLOWFULLSCREEN](ALLOWFULLSCREEN.md)  only affects the behavior of ALT+ENTER. The [_FULLSCREEN](FULLSCREEN.md)  statement is not bound by [_ALLOWFULLSCREEN](ALLOWFULLSCREEN.md)  's settings so all modes can be accessed programmatically.
*  To limit just the mode but allow both [_SMOOTH]( [SMOOTH](SMOOTH.md) .md)  + [_OFF]( [OFF](OFF.md) .md)  antialiasing modes, pass just the first parameter: Example: [_ALLOWFULLSCREEN](ALLOWFULLSCREEN.md) [_SQUAREPIXELS](SQUAREPIXELS.md) 
*  To allow multiple modes with [_SMOOTH]( [SMOOTH](SMOOTH.md) .md)  or [_OFF]( [OFF](OFF.md) .md)  as default, pass just the second parameter. Example: [_ALLOWFULLSCREEN](ALLOWFULLSCREEN.md)  , [_SMOOTH]( [SMOOTH](SMOOTH.md) .md) 
*  Any possible permutation of the parameters is allowed.
*  With [_ALLOWFULLSCREEN](ALLOWFULLSCREEN.md) [_OFF]( [OFF](OFF.md) .md)  you can trap Alt+Enter manually in your program and reassign it. See example 2 below.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_FULLSCREEN](FULLSCREEN.md)  , [_SMOOTH]( [SMOOTH](SMOOTH.md) .md)  (function)

</blockquote>
