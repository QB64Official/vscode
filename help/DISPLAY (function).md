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

## [_DISPLAY_(function)](DISPLAY_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_DISPLAY (function))
---
<blockquote>

### The _DISPLAY function returns the handle of the current image that is displayed on the screen.

</blockquote>

#### SYNTAX

<blockquote>

`currentImage& = _DISPLAY`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Returns the current image handle value that is being displayed. Returns 0 if in the default screen image.
*  Not [TO](TO.md)  be confused with the [_DISPLAY](DISPLAY.md)  statement that displays the screen when not using [_AUTODISPLAY](AUTODISPLAY.md)  .


</blockquote>

#### SEE ALSO

<blockquote>

*  [SCREEN](SCREEN.md) 
*  [PCOPY](PCOPY.md) 
*  [_DISPLAY](DISPLAY.md)  (statement)
*  [_AUTODISPLAY](AUTODISPLAY.md)  (default mode)
*  [_DISPLAYORDER](DISPLAYORDER.md)  (statement)

</blockquote>
