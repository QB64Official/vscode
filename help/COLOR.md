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


* background& colors are available in all QB64 color [SCREEN](SCREEN.md) modes.
* [SCREEN](SCREEN.md) mode 10 has only 3 white foreground attributes including flashing.
* To change the background& color only, use a comma and the desired color. Ex: [COLOR](COLOR.md) , background&
* Graphic drawing statements like [PSET](PSET.md) , [PRESET](PRESET.md) , [LINE](LINE.md) , etc, also use the colors set by the [COLOR](COLOR.md) statement if no color is passed when they are called.
* The [&dollar;COLOR](&dollar;COLOR.md) metacommand adds named color constants for both text and 32-bit modes.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
SCREEN 12
alpha$ = "FF" 'solid alpha colors only
PRINT "Attribute = Hex value      Red          Green         Blue "
PRINT
COLOR 7
FOR attribute = 1 TO 15
OUT &H3C7, attribute 'set color attribute to read
red$ = HEX$(INP(&H3C9) * 255 / 63) 'convert port setting to 32 bit values
grn$ = HEX$(INP(&H3C9) * 255 / 63)
blu$ = HEX$(INP(&H3C9) * 255 / 63)
IF LEN(red$) = 1 THEN red$ = "0" + red$ '2 hex digits required
IF LEN(grn$) = 1 THEN grn$ = "0" + grn$ 'for low or zero hex values
IF LEN(blu$) = 1 THEN blu$ = "0" + blu$
hex32$ = "&H" + alpha$ + red$ + grn$ + blu$
_PALETTECOLOR attribute, VAL(hex32$) 'VAL converts hex string to a LONG 32 bit value
IF attribute THEN COLOR attribute 'exclude black color print
PRINT "COLOR" + STR$(attribute) + " = " + hex32$, red$, grn$, blu$ 'returns closest attribute
NEXT
```
  
<br>

```vb
Attribute  Hex value      Red        Green       Blue

COLOR 1 = &HFF0000AA       00         00         AA
COLOR 2 = &HFF00AA00       00         AA         00
COLOR 3 = &HFF00AAAA       00         AA         AA
COLOR 4 = &HFFAA0000       AA         00         00
COLOR 5 = &HFFAA00AA       AA         00         AA
COLOR 6 = &HFFAA5500       AA         55         00
COLOR 7 = &HFFAAAAAA       AA         AA         AA
COLOR 8 = &HFF555555       55         55         55
COLOR 9 = &HFF5555FF       55         55         FF
COLOR 10 = &HFF55FF55      55         FF         55
COLOR 11 = &HFF55FFFF      55         FF         FF
COLOR 12 = &HFFFF5555      FF         55         55
COLOR 13 = &HFFFF55FF      FF         55         FF
COLOR 14 = &HFFFFFF55      FF         FF         55
COLOR 15 = &HFFFFFFFF      FF         FF         FF
```
  
<br>


<div class="explanation">Explanation: The DAC intensity values are multiplied by (255 / 63) to get the _RGB intensity values as hexadecimal values. The individual 2 digit HEX\$ intensity values can be added to "&HFF" to make up the 32-bit hexadecimal string value necessary for VAL to return to _PALETTECOLOR . The statement is only included in the example to show how that can be done with any 32-bit color value.</div>



##### Example 1: Reading the default RGB color settings of color attribute 15.
```vb
OUT &H3C7, 15
red% = INP(&H3C9)
green% = INP(&H3C9)
blue% = INP(&H3C9)
PRINT red%, green%, blue%
```
  
<br>

```vb
63       63       63
```
  
<br>



##### Example 2: Changing the color settings of attribute 0 (the background) to blue in SCREENs 12 or 13.
```vb
SCREEN 12
OUT &H3C8, 0          'set color port attribute to write
OUT &H3C9, 0          'red intensity
OUT &H3C9, 0          'green intensity
OUT &H3C9, 42         'blue intensity

OUT &H3C7, 0
PRINT INP(&H3C9); INP(&H3C9); INP(&H3C9)
END
```
  
<br>

```vb
0  0  42
```
  
<br>



##### Example 3: Printing in fullscreen SCREEN 0 mode with a color background under the text only.
```vb
SCREEN 0: _FULLSCREEN ' used for fullscreen instead of window
COLOR 14, 6: LOCATE 4, 4: PRINT "Hello!"
```
  
<br>

```vb
Hello!
```
  
<br>



##### Example 4: Using CLS after setting the background color in SCREEN 0 to make the color cover the entire screen.
```vb
SCREEN 0: _FULLSCREEN
COLOR , 7: CLS
COLOR 9: PRINT "Hello"
```
  
<br>

```vb
Hello
```
  
<br>



##### Example 5: Using a different foreground color for each letter:
```vb
SCREEN 0
COLOR 1: PRINT "H";
COLOR 3: PRINT "E";
COLOR 4: PRINT "L";
COLOR 5: PRINT "L";
COLOR 6: PRINT "O"
COLOR 9: PRINT "W";
COLOR 11: PRINT "O";
COLOR 12: PRINT "R";
COLOR 13: PRINT "L";
COLOR 14: PRINT "D"
```
  
<br>

```vb
HELLO
WORLD
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [&dollar;COLOR](&dollar;COLOR.md) (metacommand)
* [_RGB](RGB.md) , [_RGBA](RGBA.md) , [_RGB32](RGB32.md) , RGBA32 .
* [_RED](RED.md) , [_GREEN](GREEN.md) , [_BLUE](BLUE.md)
* [_RED32](RED32.md) , [_GREEN32](GREEN32.md) , [_BLUE32](BLUE32.md)
* [_ALPHA](ALPHA.md) , [_ALPHA32](ALPHA32.md) , [_CLEARCOLOR](CLEARCOLOR.md)
* [PRINT](PRINT.md) , [LOCATE](LOCATE.md) , [SCREEN](SCREEN.md)
* [POINT](POINT.md) , [SCREEN](SCREEN.md) (function)
* [OUT](OUT.md) , [INP](INP.md) , [PALETTE](PALETTE.md)
* [_BLINK](BLINK.md)
* [_DEFAULTCOLOR](DEFAULTCOLOR.md)
* [_BACKGROUNDCOLOR](BACKGROUNDCOLOR.md)
* [_PALETTECOLOR](PALETTECOLOR.md)
* Color Dialog Box
* $COLOR:0 Name Table
* $COLOR:32 Name Table
</blockquote>
