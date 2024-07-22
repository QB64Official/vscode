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

## [_DISPLAY](DISPLAY.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_DISPLAY)
---
<blockquote>

### The _DISPLAY statement turns off the automatic display while only displaying the screen changes when called.

</blockquote>

#### SYNTAX

<blockquote>

`_DISPLAY`

</blockquote>

#### DESCRIPTION

<blockquote>

*  [_DISPLAY](DISPLAY.md)  turns off the auto refresh screen default [_AUTODISPLAY](AUTODISPLAY.md)  behavior. Prevents screen flickering.
*  Call [_DISPLAY](DISPLAY.md)  each time the screen graphics are to be displayed. Place call after the image has been changed.
*  Re-enable automatic display refreshing by calling [_AUTODISPLAY](AUTODISPLAY.md)  . If it isn't re-enabled, things may not be displayed later.
*  [_DISPLAY](DISPLAY.md)  tells QB64 to render all of the hardware [_PUTIMAGE](PUTIMAGE.md)  commands loaded into the buffer previously.
*  The [_AUTODISPLAY](AUTODISPLAY.md)  (function) can be used [TO](TO.md)  detect the current display behavior.
*  QB64 can set the graphic rendering order of [_SOFTWARE](SOFTWARE.md) , [_HARDWARE](HARDWARE.md) , and [_GLRENDER](GLRENDER.md)  with [_DISPLAYORDER](DISPLAYORDER.md)  .


</blockquote>

#### SEE ALSO

<blockquote>

*  [_DISPLAY](DISPLAY.md)  (function)
*  [_DISPLAYORDER](DISPLAYORDER.md) 
*  [_AUTODISPLAY](AUTODISPLAY.md)  , [_AUTODISPLAY](AUTODISPLAY.md)  (function)
*  [_PUTIMAGE](PUTIMAGE.md) 
*  [PCOPY](PCOPY.md) 

</blockquote>
