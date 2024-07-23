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


## [_RGB32](RGB32.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_RGB32)
---
<blockquote>

### The _RGB32 function returns the 32-bit RGBA color value with specified red, green and blue component intensities and optional alpha.

</blockquote>

#### PARAMETERS

<blockquote>


* red& specifies the red [LONG](LONG.md) component intensity from 0 to 255.
* green& specifies the green [LONG](LONG.md) component intensity from 0 to 255.
* blue& specifies the blue [LONG](LONG.md) component intensity from 0 to 255.
* alpha& specifies the alpha [LONG](LONG.md) component from 0 to 255.
* intensity& specifies the red, green and blue [LONG](LONG.md) components intensity from 0 to 255 simultaneously, to generate a shade of gray.
</blockquote>

#### DESCRIPTION

<blockquote>


* The value returned is always a 32-bit [_UNSIGNED](UNSIGNED.md) [LONG](LONG.md) color value, as is the [POINT](POINT.md) value.
* Return variable types must be [_UNSIGNED](UNSIGNED.md) [LONG](LONG.md) or [LONG](LONG.md) , otherwise resulting color may lose the [_BLUE](BLUE.md) value.
* Parameter values outside of the 0 to 255 range are clipped.
* Returns [LONG](LONG.md) 32 bit hexadecimal values from &H00 00 00 00 to &HFF FF FF FF .
* When [LONG](LONG.md) values are [PUT](PUT.md) to file, the ARGB values become BGRA. Use [LEFT&dollar;](LEFT&dollar;.md) ( [MKL&dollar;](MKL&dollar;.md) ( color32value~& ), 3) to place 3 colors.
* NOTE: Default 32-bit backgrounds are clear black or [_RGB32](RGB32.md) (0, 0). Use [CLS](CLS.md) to make the black opaque.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Converting the color port RGB intensity palette values 0 to 63 to 32 bit hexadecimal values.
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


<div class="explanation">Note: This procedure also shows how the returns from _RGB and _RGB32 differ in a non-32 bit screen mode.</div>



##### Example 2: Working with 32 bit colors.
```vb
SCREEN _NEWIMAGE(640, 480, 32)

CLS , _RGB32(0, 0, 128) 'deep blue background

LINE (100, 100)-(540, 380), _RGB(255, 0, 0), BF ' a red box
LINE (200, 200)-(440, 280), _RGB(0, 255, 0), BF ' a green box


SLEEP 'Just so we can see our pretty background before we print anything on it.


COLOR _RGB32(255, 255, 255), 0 'White on NO BACKGROUND

FOR i = 1 TO 10
PRINT "This is just a whole bunch of happy nothing!  Happy World!!"
NEXT
PRINT: PRINT: PRINT:

COLOR 0, _RGB32(0, 0, 0) 'And here, we're going with NO COLOR text, with a BLACK background.
'Notice how this doesn't change the color on the screen at all, where the text is, but does toss a black background to it.

LOCATE , 15: PRINT "NOTICE HOW OUR 0 COLOR WORKS?"
PRINT
LOCATE , 15: PRINT "NEAT, HUH?"
SLEEP
SYSTEM
```
  
<br>



##### Example 3: Comparing the output of the new _RGB32 syntaxes (starting with version 1.3) and their equivalents in previous versions.
```vb
SCREEN _NEWIMAGE(400, 400, 32)

COLOR _RGB32(255, 255, 255)
PRINT "White"
COLOR _RGB32(255)
PRINT "White, too, but with less typing"
PRINT

COLOR _RGB32(80, 80, 80)
PRINT "Dark gray"
COLOR _RGB32(80)
PRINT "Same gray, but with less typing"
PRINT

COLOR _RGBA32(255, 255, 255, 120)
PRINT "White with alpha of 120 (out of 255)"
COLOR _RGB32(255, 120)
PRINT "White with alpha of 120 - but with less typing"
PRINT

COLOR _RGBA32(255, 0, 255, 110)
PRINT "Magenta, 110 alpha"
COLOR _RGB32(255, 0, 255, 110)
PRINT "Magenta too, 110 alpha - but with less typing"
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_RGBA32](RGBA32.md) , [_RGB](RGB.md) , [_RGBA](RGBA.md)
* [_RED32](RED32.md) , [_GREEN32](GREEN32.md) , [_BLUE32](BLUE32.md)
* [_PALETTECOLOR](PALETTECOLOR.md)
* [HEX&dollar;](HEX&dollar;.md) 32 Bit Values
* SaveImage [SUB](SUB.md)
* Hexadecimal Color Values
</blockquote>
