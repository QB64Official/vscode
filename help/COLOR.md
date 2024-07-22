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

## [COLOR](COLOR.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/COLOR)
---
<blockquote>

### The COLOR statement is used to change the foreground and background colors for printing text.

</blockquote>

#### SYNTAX

<blockquote>

`COLOR [ foreground& ][, background& ]`

</blockquote>

#### DESCRIPTION

<blockquote>

*  background& colors are available in all QB64 color [SCREEN](SCREEN.md)  modes.
*  [SCREEN](SCREEN.md)  mode 10 has only 3 white foreground attributes including flashing.
*  To change the background& [COLOR](COLOR.md)  only, use a comma and the desired [COLOR](COLOR.md) . Ex: [COLOR](COLOR.md)  , background&
*  Graphic drawing statements like [PSET](PSET.md)  , [PRESET](PRESET.md)  , [LINE](LINE.md)  , etc, also use the colors set by the [COLOR](COLOR.md)  statement if no [COLOR](COLOR.md)  is passed when they are called.
*  The $COLOR metacommand adds named color constants for both text and 32-bit modes.


</blockquote>

#### SEE ALSO

<blockquote>

*  $COLOR (metacommand)
*  [_RGB](RGB.md)  , [_RGBA](RGBA.md)  , [_RGB32](RGB32.md)  , RGBA32 .
*  [_RED](RED.md)  , [_GREEN](GREEN.md)  , [_BLUE](BLUE.md) 
*  [_RED32](RED32.md)  , [_GREEN32](GREEN32.md)  , [_BLUE32](BLUE32.md) 
*  [_ALPHA](ALPHA.md)  , [_ALPHA32](ALPHA32.md)  , [_CLEARCOLOR](CLEARCOLOR.md) 
*  [PRINT](PRINT.md)  , [LOCATE](LOCATE.md)  , [SCREEN](SCREEN.md) 
*  [POINT](POINT.md)  , [SCREEN](SCREEN.md)  (function)
*  [OUT](OUT.md)  , [INP](INP.md)  , [PALETTE](PALETTE.md) 
*  [_BLINK](BLINK.md) 
*  [_DEFAULTCOLOR](DEFAULTCOLOR.md) 
*  [_BACKGROUNDCOLOR](BACKGROUNDCOLOR.md) 
*  [_PALETTECOLOR](PALETTECOLOR.md) 
*  Color Dialog Box
*  $COLOR:0 Name Table
*  $COLOR:32 Name Table

</blockquote>
