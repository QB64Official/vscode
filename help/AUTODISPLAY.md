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

## [_AUTODISPLAY](AUTODISPLAY.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_AUTODISPLAY)
---
<blockquote>

### The _AUTODISPLAY statement enables the automatic display of the screen image changes previously disabled by _DISPLAY .

</blockquote>

#### SYNTAX

<blockquote>

`_AUTODISPLAY`

</blockquote>

#### DESCRIPTION

<blockquote>

*  [_AUTODISPLAY](AUTODISPLAY.md) [IS](IS.md)  on by default and displays the screen at around 30 frames per second (normal vertical retrace speed).
*  [_DISPLAY](DISPLAY.md)  disables automatic graphic displays, but it also eliminates having to use [PCOPY](PCOPY.md)  or page flipping when used correctly. Placing [_DISPLAY](DISPLAY.md)  after screen draws or other screen changes assures completion of the changes before they are displayed. The speed of QB64 code execution makes this a viable option.
*  The [_AUTODISPLAY](AUTODISPLAY.md)  (function) can be used [TO](TO.md)  detect the current display behavior.


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  [_DISPLAY](DISPLAY.md) 
*  [_AUTODISPLAY](AUTODISPLAY.md)  (function)

</blockquote>
