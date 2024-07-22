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

## [OUT](OUT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/OUT)
---
<blockquote>

### OUT writes values to register and port hardware addresses.

</blockquote>

#### SYNTAX

<blockquote>

`OUT registerAddress% , value%`

</blockquote>

#### PARAMETERS

<blockquote>

*  registerAddress% is a value expressed as a decimal [INTEGER](INTEGER.md)  or hexadecimal .
*  The [INTEGER](INTEGER.md)  value% sent is normally only 0 to 255 per byte register (8 bit) address.

</blockquote>

#### DESCRIPTION

<blockquote>

*  QB64 has limited access to registers. VGA memory and registers are emulated.
*  [OUT](OUT.md)  can be used to change color port and a limited number of other port settings in QB64.
*  Some settings may be set in a specific order to gain access to settings and [INP](INP.md)  reads.
*  [SCREEN](SCREEN.md)  modes determine the number of available color palette attributes from 2 to 256 in [SCREEN](SCREEN.md)  13.
*  Windows NT may block access to Parallel printer and Serial ports. See Port Access Libraries or other DLLs.
*  [_PALETTECOLOR](PALETTECOLOR.md)  can also be used to set RGB intensity values using 32 bit [COLOR](COLOR.md)  values.
*  [OUT](OUT.md)  can toggle the blinking attribute of [SCREEN](SCREEN.md)  0 color 16-31 for legacy code. [_BLINK](BLINK.md)  is the preferred method. (starting with build 20170816/61).


</blockquote>

#### SEE ALSO

<blockquote>

*  [PALETTE](PALETTE.md)  , [_PALETTECOLOR](PALETTECOLOR.md) 
*  [INP](INP.md) 
*  [PEEK](PEEK.md) 
*  [POKE](POKE.md) 
*  [COLOR](COLOR.md)  , [SCREEN](SCREEN.md) 
*  [BSAVE](BSAVE.md)  , [BLOAD](BLOAD.md) 
*  [_BLINK](BLINK.md)  , [_BLINK](BLINK.md)  (function)
*  Port Access Libraries

</blockquote>
