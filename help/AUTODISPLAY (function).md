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

## [_AUTODISPLAY_(function)](AUTODISPLAY_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_AUTODISPLAY (function))
---
<blockquote>

### The _AUTODISPLAY function returns the current display mode as true (-1) if automatic or false (0) if disabled using _DISPLAY .

</blockquote>

#### SYNTAX

<blockquote>

`displayStatus%% = _AUTODISPLAY`

</blockquote>

#### DESCRIPTION

<blockquote>

*  The function returns true (-1) if [_AUTODISPLAY](AUTODISPLAY.md) [IS](IS.md)  enabled. This [IS](IS.md)  the default state and indicates that every screen change (text or graphics) [IS](IS.md)  displayed immediately [TO](TO.md)  the user.
*  If [_DISPLAY](DISPLAY.md) [IS](IS.md)  used, then [_AUTODISPLAY](AUTODISPLAY.md)  returns 0, [TO](TO.md)  indicate that screen changes (text or graphics) are only displayed per request, by calling [_DISPLAY](DISPLAY.md)  again [TO](TO.md)  refresh the screen.


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  [_AUTODISPLAY](AUTODISPLAY.md) 
*  [_DISPLAY](DISPLAY.md) 

</blockquote>
