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

## [_MOUSEWHEEL](MOUSEWHEEL.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MOUSEWHEEL)
---
<blockquote>

### The _MOUSEWHEEL function returns a positive or negative INTEGER value indicating mouse scroll events since the last read of _MOUSEINPUT .

</blockquote>

#### SYNTAX

<blockquote>

`scrollAmount% = _MOUSEWHEEL`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Returns -1 when scrolling up and 1 when scrolling down with 0 indicating no movement since last read.
*  After an event has been read, the value resets to 0 automatically so cumulative position values must be added.
*  If no movement on the wheel has occurred since the last [_MOUSEINPUT](MOUSEINPUT.md)  read, [_MOUSEWHEEL](MOUSEWHEEL.md)  returns 0.


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  [_MOUSEX](MOUSEX.md)  , [_MOUSEY](MOUSEY.md)  , [_MOUSEBUTTON](MOUSEBUTTON.md) 
*  [_MOUSEINPUT](MOUSEINPUT.md)  , [_MOUSEMOVE](MOUSEMOVE.md) 
*  [_MOUSESHOW](MOUSESHOW.md)  , [_MOUSEHIDE](MOUSEHIDE.md) 
*  Controller Devices

</blockquote>
