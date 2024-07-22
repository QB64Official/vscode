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

## [PCOPY](PCOPY.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/PCOPY)
---
<blockquote>

### The PCOPY statement copies one source screen page to a destination page in memory.

</blockquote>

#### SYNTAX

<blockquote>

`PCOPY sourcePage% , destinationPage%`

</blockquote>

#### DESCRIPTION

<blockquote>

*  sourcePage% is an image page in video memory.
*  destinationPage% is the video memory location to copy the source image to.
*  The working page is set as 0. All drawing occurs there.
*  The visible page is set as any page number that the [SCREEN](SCREEN.md)  mode allows.
*  The [_DISPLAY](DISPLAY.md)  (function) return can be used a page number reference in QB64 (See Example 1).
*  The QB64 [_DISPLAY](DISPLAY.md)  statement can also be used to stop screen flicker without page flipping or [CLS](CLS.md)  and [IS](IS.md)  the recommended practice .


</blockquote>

#### SEE ALSO

<blockquote>

*  [_DISPLAY](DISPLAY.md) 
*  [SCREEN](SCREEN.md) 

</blockquote>
