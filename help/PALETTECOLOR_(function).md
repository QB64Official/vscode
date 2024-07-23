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


## [_PALETTECOLOR (function)](PALETTECOLOR_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_PALETTECOLOR%20%28function%29)
---
<blockquote>

### The _PALETTECOLOR function is used to return the 32 bit attribute color setting of an image or screen page handle's palette.

</blockquote>

#### SYNTAX

<blockquote>

`color32Value& = _PALETTECOLOR ( attributeNumber% , imgHandle& )`

</blockquote>

#### DESCRIPTION

<blockquote>


* attributeNumber% is the color attribute value from 0 to 255 for 1, 4 or 8 bit images.
* imgHandle& is the image handle being read for color data. Zero can be used to read the current screen mode palette.
* Returns the 32 bit color value to be used by the 32 bit RGB functions.
* For 32 bit images send the [_PALETTECOLOR](PALETTECOLOR.md) return value to [_RED32](RED32.md) , [_GREEN32](GREEN32.md) and [_BLUE32](BLUE32.md) functions to get the red, green, and blue intensity values.
* Although 32 bit palette values are returned, the function cannot be used with 32 bit images or screen modes.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: How _PALETTECOLOR works on 32 bit RGB compared to a 4 BPP(SCREEN 12) QBasic procedure.
```vb
SCREEN 12                         'can use any QBasic legacy screen mode
DIM RGB(0 TO 47) AS INTEGER       'color intensity array
FOR c& = 0 TO 15
'OUT &H3C7, c&                  'set color attribute to read
value32& = _PALETTECOLOR(c&, 0) 'sets color value to read of an image page handle.
'red% = INP(&H3C9)
red% = _RED32(value32&)
'green% = INP(&H3C9)
green% = _GREEN32(value32&)
'blue% = INP(&H3C9)
blue% = _BLUE32(value32&)
RGB(c& * 3) = red%: RGB((c& * 3) + 1) = green%: RGB((c& * 3) + 2) = blue%
NEXT
FOR i = 0 TO 47 STEP 3
RGBval$ = LTRIM$(STR$(RGB(i))) + "," + STR$(RGB(i + 1)) + "," + STR$(RGB(i + 2)) + ")"
PRINT "Color"; i / 3, "_RGB(" + RGBval$;
PRINT
NEXT
END
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_PALETTECOLOR](PALETTECOLOR.md)
* [_NEWIMAGE](NEWIMAGE.md) , [_LOADIMAGE](LOADIMAGE.md)
* SaveImage [SUB](SUB.md)
</blockquote>
