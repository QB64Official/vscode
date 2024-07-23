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
    margin: 0 0 0.5em 0  !important;
    color: #88f !important;
    border: 0 !important;
    font-style: italic !important;
    font-weight: normal !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 4px !important; 
    border: 1px solid #333 !important;
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
    border-radius: 4px !important;
    background: #000 !important;
    border: 1px solid #333 !important;
    margin: 0 !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}
br + pre {
    border-radius: 0 !important;
    border-style: inset !important;
    border-width: 5px !important;
    border-color: #999 !important;
    background-color: #000 !important;
    box-shadow: 0px 10px 3px rgba(0, 0, 0, 0.25) !important;
    margin-top: -1em !important;
}
br + pre::before {
    content: "OUTPUT \A" !important;
    color: #555 !important;
    border-bottom: 1px solid #333;
    font-size: x-small;
    display: block !important;
    padding: 0 3px !important;
    margin: -1em -1em 1em -1em !important;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */    
}
br ~ h5 {
    margin-top: 2em !important;
}
.explanation {
    color: #995 !important;
    /* background-color: rgba(150, 150, 100) !important; */
    border-radius: 10em !important;
    border: 2px #441 dashed !important;
    padding: 8px 32px !important;
    margin-bottom: 4em !important;
    font-size: x-small !important;
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


* [SCREEN](SCREEN.md) 0 emulates the VGA palette with regular colors from 0 to 15 and blinking colors from 16-31 (these are the same colors as 0-15, except their blink attribute is set to on). [_BLINK](BLINK.md) [OFF](OFF.md) emulates writing to the video memory and disabling blinking for colors 16-31.
* Using colors 16-31 for the foreground with [_BLINK](BLINK.md) set to [OFF](OFF.md) will produce high intensity background colors.
* [_BLINK](BLINK.md) is only effective in [SCREEN](SCREEN.md) 0. It's ignored in graphic modes.
* [IF](IF.md) [_DISPLAY](DISPLAY.md) is used, blinking is disabled, even if [_BLINK](BLINK.md) is ON, but high intensity backgrounds aren't enabled in this case.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
COLOR 16, 7
PRINT "This is printed in black over gray background. Black letters are blinking."
PRINT "Hit a key..."
SLEEP
_BLINK OFF
PRINT "Now the same text is printed in black over bright white, because blinking was disabled."
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* [_BLINK](BLINK.md) (function)
* [OUT](OUT.md)
* [_DISPLAY](DISPLAY.md)
</blockquote>
