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

## [_SCREENPRINT](SCREENPRINT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SCREENPRINT)
---
<blockquote>

### The _SCREENPRINT statement simulates typing text into a Windows focused program.

</blockquote>

#### SYNTAX

<blockquote>

`_SCREENPRINT text$`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Keyword not supported in Linux or macOS versions
*  text$ is the text to be typed into a focused program's text entry area, one character at a time.
*  Set the focus to a desktop program by using the [_SCREENIMAGE](SCREENIMAGE.md)  handle as the [_SOURCE](SOURCE.md)  . Use the image to map the desired area.
*  [_SCREENCLICK](SCREENCLICK.md)  can also be used to set the focus to a program's text entry area on the desktop.
*  Note: If the focus is not set correctly, the text may be printed to the QB64 IDE, if open, or not printed at all.
*  Ctrl + letter key shortcuts can be simulated using the appropriate ASCII Control character codes 1 to 26 shown below:


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  [_SCREENIMAGE](SCREENIMAGE.md)  , [_SCREENCLICK](SCREENCLICK.md) 
*  [_SCREENMOVE](SCREENMOVE.md)  , [_SCREENX](SCREENX.md)  , [_SCREENY](SCREENY.md) 
*  ASCII

</blockquote>
