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


## [_RGBA32](RGBA32.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_RGBA32)
---
<blockquote>

### The _RGBA32 function returns the 32-bit RGBA color value with the specified red, green, blue and alpha component intensities.

</blockquote>

#### SYNTAX

<blockquote>

`color32value~& = _RGBA32 ( red& , green& , blue& , alpha& )`

</blockquote>

#### DESCRIPTION

<blockquote>


* The value returned is a 32-bit [_UNSIGNED](UNSIGNED.md) [LONG](LONG.md) color value.
* Return variable types must be [_UNSIGNED](UNSIGNED.md) [LONG](LONG.md) or resulting color may lose the [_BLUE](BLUE.md) value.
* red& specifies the red component intensity from 0 to 255.
* green& specifies the green component intensity from 0 to 255.
* blue& specifies the blue component intensity from 0 to 255.
* alpha& specifies the alpha component transparency value from 0 (fully transparent) to 255 (opaque).
* Alpha or intensity values outside of the valid range of 0 to 255 are clipped.
* Returns [LONG](LONG.md) 32-bit hexadecimal values from &H00 00 00 00 to &HFF FF FF FF with varying [_ALPHA](ALPHA.md) transparency.
* When [LONG](LONG.md) values are [PUT](PUT.md) to file, the ARGB values become BGRA. Use [LEFT&dollar;](LEFT&dollar;.md) ( [MKL&dollar;](MKL&dollar;.md) ( color32value~& ), 3) to place 3 colors.
* NOTE: Default 32-bit backgrounds are clear black or [_RGBA](RGBA.md) (0, 0, 0, 0). Use [CLS](CLS.md) to make the black opaque.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Changing the ALPHA value to fade an image in and out using a 32 bit PNG image.
```vb
SCREEN _NEWIMAGE(600, 400, 32)

img& = _LOADIMAGE("qb64_trans.png")  'use any 24/32 bit image
'Turn off auto display
_DISPLAY

' Fade in
FOR i% = 255 TO 0 STEP -5
_LIMIT 20                          'control fade speed
_PUTIMAGE (0, 0)-(600, 400), img&
LINE (0, 0)-(600, 400), _RGBA(0, 0, 0, i%), BF 'decrease black box transparency
_DISPLAY
NEXT

' Fade out
FOR i% = 0 TO 255 STEP 5
_LIMIT 20                          'control fade speed
_PUTIMAGE (0, 0)-(600, 400), img&
LINE (0, 0)-(600, 400), _RGBA(0, 0, 0, i%), BF 'increase black box transparency
_DISPLAY
NEXT
END
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_RGB32](RGB32.md) , [_RGBA](RGBA.md) , [_RGB](RGB.md)
* [_RED32](RED32.md) , [_GREEN32](GREEN32.md) , [_BLUE32](BLUE32.md)
* [HEX&dollar;](HEX&dollar;.md) 32 Bit Values , [POINT](POINT.md)
* SaveImage [SUB](SUB.md)
* Hexadecimal Color Values
</blockquote>
