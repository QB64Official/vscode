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

## [\$COLOR](\$COLOR.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/$COLOR)
---
<blockquote>

### $COLOR is a metacommand that adds named color constants into a program, which then can be used instead of hardcoded literal color values.

</blockquote>

#### SYNTAX

<blockquote>

`$COLOR : {0|32}`

</blockquote>

#### PARAMETERS

<blockquote>

*  The one and only parameter is a literal number designating either to include [SCREEN](SCREEN.md)  0 based color indexes, or full [_RGB32](RGB32.md)  color values with full (opaque) alpha.

</blockquote>

#### DESCRIPTION

<blockquote>

*  $COLOR:0 adds constants for the colors 0-15 available in [SCREEN](SCREEN.md)  0 , these do also match for the first 16 colors on 8-Bit (256 colors) graphic screens as long as they are not changed using [PALETTE](PALETTE.md) [OR](OR.md)  [_PALETTECOLOR](PALETTECOLOR.md)  . For the actual constant names see $COLOR:0 Name Table .
*  $COLOR:32 adds constants for full 32-Bit color values as used on 32-Bit screens created via [_NEWIMAGE](NEWIMAGE.md)  , similar to HTML color names. For the actual constant names see $COLOR:32 Name Table .
*  Prior to QB64-PE v0.5.0, $COLOR was not compatible with $NOPREFIX .
*  Since QB64-PE v0.5.0, $COLOR can now be used with $NOPREFIX , with a few notable differences to three conflicting colors -- Red, Green, Blue.


</blockquote>

#### SEE ALSO

<blockquote>

*  [COLOR](COLOR.md) 
*  [SCREEN](SCREEN.md)  , [_NEWIMAGE](NEWIMAGE.md) 
*  Metacommand
*  $COLOR:0 Name Table
*  $COLOR:32 Name Table

</blockquote>
