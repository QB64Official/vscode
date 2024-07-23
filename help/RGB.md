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


## [_RGB](RGB.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_RGB)
---
<blockquote>

### The _RGB function returns the closest palette attribute index (legacy SCREEN modes) OR the LONG 32-bit color value (32-bit screens).

</blockquote>

#### SYNTAX

<blockquote>

`colorIndex~& = _RGB ( red& , green& , blue& [, imageHandle& ])`

</blockquote>

#### DESCRIPTION

<blockquote>


* The value returned is either the closest color attribute number or a 32-bit [_UNSIGNED](UNSIGNED.md) [LONG](LONG.md) color value.
* Return variable types must be [LONG](LONG.md) or resulting color may lose the [_BLUE](BLUE.md) value.
* red& specifies the red component intensity from 0 to 255.
* green& specifies the green component intensity from 0 to 255.
* blue& specifies the blue component intensity from 0 to 255.
* Intensity values outside the valid range are clipped.
* Returns [LONG](LONG.md) 32-bit hexadecimal values from &HFF 00 00 00 to &HFF FF FF FF , always with full [_ALPHA](ALPHA.md) .
* When [LONG](LONG.md) values are [PUT](PUT.md) to file, the ARGB values become BGRA. Use [LEFT&dollar;](LEFT&dollar;.md) ( [MKL&dollar;](MKL&dollar;.md) ( colorIndex~& ), 3) to place 3 colors.
* If the imageHandle& is omitted the image is assumed to be the current destination or [SCREEN](SCREEN.md) page.
* Colors returned are always opaque as the transparency value is always 255. Use [_ALPHA](ALPHA.md) or [_CLEARCOLOR](CLEARCOLOR.md) to change it.
* NOTE: Default 32-bit backgrounds are clear black or [_RGBA](RGBA.md) (0, 0, 0, 0). Use [CLS](CLS.md) to make the black opaque.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Converting the color port RGB intensity palette values 0 to 63 to 32 bit hexadecimal values.
```vb
SCREEN 12
DIM hex32$(15)
FOR attribute = 1 TO 15
OUT &H3C7, attribute      'set color attribute to read
red = INP(&H3C9) * 4      'multiply by 4 to convert intensity to 0 to 255 RGB values
grn = INP(&H3C9) * 4
blu = INP(&H3C9) * 4
hex32$(attribute) = "&H" + HEX$(_RGB32(red, grn, blu))   'always returns the 32 bit value
COLOR attribute
PRINT "COLOR" + STR$(_RGB(red, grn, blu)) + " = " + hex32$(attribute)  'closest attribute
NEXT
```
  
<br>

```vb
COLOR 1 = &HFF0000A8
COLOR 2 = &HFF00A800
COLOR 3 = &HFF00A8A8
COLOR 4 = &HFFA80000
COLOR 5 = &HFFA800A8
COLOR 6 = &HFFA85400
COLOR 7 = &HFFA8A8A8
COLOR 8 = &HFF545454
COLOR 9 = &HFF5454FC
COLOR 10 = &HFF54FC54
COLOR 11 = &HFF54FCFC
COLOR 12 = &HFFFC5454
COLOR 13 = &HFFFC54FC
COLOR 14 = &HFFFCFC54
COLOR 15 = &HFFFCFCFC
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_RGBA](RGBA.md) , [_RGB32](RGB32.md) , [_RGBA32](RGBA32.md)
* [_RED](RED.md) , [_GREEN](GREEN.md) , [_BLUE](BLUE.md)
* [_LOADIMAGE](LOADIMAGE.md) , [_NEWIMAGE](NEWIMAGE.md)
* [HEX&dollar;](HEX&dollar;.md) 32 Bit Values , [POINT](POINT.md)
* SaveImage [SUB](SUB.md)
* Hexadecimal Color Values
</blockquote>
