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

## [_BLINK](BLINK.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_BLINK)
---
<blockquote>

### The _BLINK statement toggles blinking colors in text mode (SCREEN 0). Default state is ON.

</blockquote>

#### SYNTAX

<blockquote>

`_BLINK {ON|OFF}`

</blockquote>

#### DESCRIPTION

<blockquote>

*  [SCREEN](SCREEN.md)  0 emulates the VGA palette with regular colors from 0 to 15 and blinking colors from 16-31 (these are the same colors as 0-15, except their blink attribute is set to on). [_BLINK](BLINK.md) [OFF](OFF.md)  emulates writing to the video memory and disabling blinking for colors 16-31.
*  Using colors 16-31 for the foreground with [_BLINK](BLINK.md)  set to [OFF](OFF.md)  will produce high intensity background colors.
*  [_BLINK](BLINK.md)  is only effective in [SCREEN](SCREEN.md)  0. It's ignored in graphic modes.
*  [IF](IF.md)  [_DISPLAY](DISPLAY.md) [IS](IS.md)  used, blinking [IS](IS.md)  disabled, even [IF](IF.md)  [_BLINK](BLINK.md) [IS](IS.md) [ON](ON.md) , but high intensity backgrounds aren't enabled in this case.


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  [_BLINK](BLINK.md)  (function)
*  [OUT](OUT.md) 
*  [_DISPLAY](DISPLAY.md) 

</blockquote>
