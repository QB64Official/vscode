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


## [_PALETTECOLOR](PALETTECOLOR.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_PALETTECOLOR)
---
<blockquote>

### The _PALETTECOLOR statement sets the color value of a palette entry of an image using 256 color modes or less (4 or 8 BPP).

</blockquote>

#### SYNTAX

<blockquote>

`_PALETTECOLOR attribute% , newColor& [, destHandle& ]`

</blockquote>

#### DESCRIPTION

<blockquote>


* The attribute% is the palette index number of the color to set, ranging from 0 to 15 (4 bit) or 0 to 255 (8 bit) color modes.
* The [LONG](LONG.md) newColor& is the new color value to set using [_RGB32](RGB32.md) or [_RGBA32](RGBA32.md) values or using [HEX&dollar;](HEX&dollar;.md) 32 Bit Values .
* If destHandle& is omitted, destination is assumed to be the current write page or screen surface.
* If attribute% is outside of image or screen mode attribute range (0 to 15 or 0 to 255), an illegal function call error will occur.
* If destHandle& does not use a palette, an illegal function call error occurs. Will not work in 24/32 bit color palette modes.
* If destHandle& is an invalid handle value, an invalid handle error occurs.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
Attribute        Description     Red   Green   Blue   32 HEX    HTML Name 
0            Black            0      0       0    000000    Black
        1            Dark Blue        0      0      42    00008B    DarkBlue
        2            Dark Green       0     42       0    006400    DarkGreen
        3            Dark Cyan        0     42      42    008B8B    DarkCyan
        4            Dark Red        42      0       0    8B0000    DarkRed
        5            Dark Magenta    42      0      42    8B008B    DarkMagenta
        6            Dark Yellow     42     21       0    DAA520    GoldenRod
        7            Light Grey      42     42      42    D3D3D3    LightGrey
        8            Dark Grey       21     21      21    696969    DimGray
        9            Blue            21     21      63    0000FF    Blue
       10            Green           21     63      21    15FF15    Lime
       11            Cyan            21     63      63    15FFFF    Cyan
       12            Red             63     21      21    FF1515    Red
       13            Magenta         63     21      63    FF15FF    Magenta
       14            Yellow          63     63      21    FFFF00    Yellow
       15            White           63     63      63    FFFFFF    White
```
  
<br>



##### Example: Creating custom background colors in SCREEN 0 that follow the text. CLS makes entire background one color.
```vb
_PALETTECOLOR 1, _RGB32(255, 255, 255) ' white.
_PALETTECOLOR 2, _RGB32(255, 170, 170) ' lighter red.
_PALETTECOLOR 3, _RGB32(255, 85, 85) ' light red.
_PALETTECOLOR 4, _RGB32(255, 0, 0) ' red.
_PALETTECOLOR 5, _RGB32(170, 0, 0) ' dark red.
_PALETTECOLOR 6, _RGB32(85, 0, 0) ' darker red.

COLOR 0, 1: PRINT "black on white."
COLOR 0, 2: PRINT "black on lighter red."
COLOR 0, 3: PRINT "black on light red."
COLOR 0, 4: PRINT "black on red."
COLOR 0, 5: PRINT "black on dark red."
COLOR 0, 6: PRINT "black on darker red.

COLOR 1, 6: PRINT "white on darker red"
COLOR 2, 6: PRINT "ligher red on darker red"
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [COLOR](COLOR.md) , [_RGB32](RGB32.md) , [_RGBA32](RGBA32.md)
* [_PALETTECOLOR](PALETTECOLOR.md) (function)
* [PALETTE](PALETTE.md) , [OUT](OUT.md) , [INP](INP.md)
* Images
* [HEX&dollar;](HEX&dollar;.md) 32 Bit Values
</blockquote>
