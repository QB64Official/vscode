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

## [HEX\$_32_Bit_Values](HEX\$_32_Bit_Values.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/HEX$ 32 Bit Values)
---
<blockquote>

### LONG Hexadecimal values can be used to set a _PALETTECOLOR instead of using _RGB32 or _RGBA32 values.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Converting the color port RGB intensity palette values 0 to 63 to 32 bit hexadecimal string values.
```vb
SCREEN 12
DIM hex32$(15)
alpha$ = "FF"                              'solid alpha colors only
OUT &H3C8, 0: OUT &H3C9, 0: OUT &H3C9, 0: OUT &H3C9, 20 'set black background to dark blue

FOR attribute = 0 TO 15
OUT &H3C7, attribute                     'set color attribute to read
red$ = HEX$(INP(&H3C9) * 4)              'convert port setting to 32 bit values
grn$ = HEX$(INP(&H3C9) * 4)
blu$ = HEX$(INP(&H3C9) * 4)
IF LEN(red$) = 1 THEN red$ = "0" + red$  'necessary for low or zero color intensities
IF LEN(grn$) = 1 THEN grn$ = "0" + grn$
IF LEN(blu$) = 1 THEN blu$ = "0" + blu$
hex32$(attribute) = "&H" + alpha$ + red$ + grn$ + blu$
NEXT
PRINT "COLOR 0 = " + hex32$(0)
FOR i = 1 TO 15
_PALETTECOLOR i, VAL(hex32$(i))
COLOR i
PRINT "COLOR" + STR$(i) + " = " + hex32$(i) 'returns closest attribute
NEXT
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  [_PALETTECOLOR](PALETTECOLOR.md) 
*  [_RGB32](RGB32.md)  , [_RGBA32](RGBA32.md) 
*  [_RGB](RGB.md)  , [_RGBA](RGBA.md)  (when used in 32 bit only)
*  [COLOR](COLOR.md)  , [SCREEN](SCREEN.md)  , [POINT](POINT.md) 
*  HTML Color Table HEX Values and Names

</blockquote>
