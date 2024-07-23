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


## [_MEMIMAGE](MEMIMAGE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MEMIMAGE)
---
<blockquote>

### The _MEMIMAGE function returns a _MEM value referring to an image's memory using a designated image handle.

</blockquote>

#### SYNTAX

<blockquote>

`imageBlock = _MEMIMAGE [( imageHandle& )]`

</blockquote>

#### PARAMETERS

<blockquote>


* The imageBlock [_MEM](MEM.md) type variable holds the read-only elements .OFFSET, .SIZE, .TYPE and .ELEMENTSIZE.
* If the optional imageHandle& isn't passed, it is assumed to be the current _DESTination program screen image.
</blockquote>

#### DESCRIPTION

<blockquote>


* Use the function to place images into memory access blocks for faster data access.
* All values created by this function must be freed using [_MEMFREE](MEMFREE.md) with a valid [_MEM](MEM.md) variable.
* Image handle values and the memory used must still be freed using [_FREEIMAGE](FREEIMAGE.md) when no longer required.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Darkening an image using memory with \$CHECKING :OFF for greater speed. Use any 24 bit image file name on the second code line.
```vb
SCREEN _NEWIMAGE(1024, 768, 32)
i& = _LOADIMAGE("turtle.jpg") '<<<<<<<<<<<<< use any 24 bit image file

FOR n! = 1 TO 0.01 STEP -0.01
i2& = _COPYIMAGE(i&)
DarkenImage i2&, n!
_PUTIMAGE (0, 0), i2&
_FREEIMAGE i2&
_DISPLAY
NEXT

SUB DarkenImage (Image AS LONG, Value_From_0_To_1 AS SINGLE)
IF Value_From_0_To_1 <= 0 OR Value_From_0_To_1 >= 1 OR _PIXELSIZE(Image) <> 4 THEN EXIT SUB
DIM Buffer AS _MEM: Buffer = _MEMIMAGE(Image) 'Get a memory reference to our image
DIM Frac_Value AS LONG: Frac_Value = Value_From_0_To_1 * 65536 'Used to avoid slow floating point calculations
DIM O AS _OFFSET, O_Last AS _OFFSET
O = Buffer.OFFSET 'We start at this offset
O_Last = Buffer.OFFSET + _WIDTH(Image) * _HEIGHT(Image) * 4 'We stop when we get to this offset
'use on error free code ONLY!
$CHECKING:OFF
DO
_MEMPUT Buffer, O, _MEMGET(Buffer, O, _UNSIGNED _BYTE) * Frac_Value \ 65536 AS _UNSIGNED _BYTE
_MEMPUT Buffer, O + 1, _MEMGET(Buffer, O + 1, _UNSIGNED _BYTE) * Frac_Value \ 65536 AS _UNSIGNED _BYTE
_MEMPUT Buffer, O + 2, _MEMGET(Buffer, O + 2, _UNSIGNED _BYTE) * Frac_Value \ 65536 AS _UNSIGNED _BYTE
O = O + 4
LOOP UNTIL O = O_Last
'turn checking back on when done!
$CHECKING:ON
_MEMFREE Buffer
END SUB
```
  
<br>



##### Example 2: Reading information stored in an image with _MEMIMAGE to print ASC text characters to the screen.
```vb
SCREEN 13
_FULLSCREEN
PSET (0, 0), ASC("H")
PSET (1, 0), ASC("E")
PSET (2, 0), ASC("L")
PSET (3, 0), ASC("L")
PSET (4, 0), ASC("O")
PSET (5, 0), 32
PSET (6, 0), ASC("W")
PSET (7, 0), ASC("O")
PSET (8, 0), ASC("R")
PSET (9, 0), ASC("L")
PSET (10, 0), ASC("D")
DIM m AS _MEM
m = _MEMIMAGE
x1$ = _MEMGET(m, m.OFFSET, STRING * 11) 'convert numbers to ASCII text characters
_MEMFREE m 'free memory when done
LOCATE 10, 1: PRINT LEN(x1$) 'prints 11 as byte length
PRINT x1$ 'prints HELLO WORLD
END
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_MEM](MEM.md)
* [_MEMNEW](MEMNEW.md)
* [_MEMGET](MEMGET.md) , [_MEMPUT](MEMPUT.md)
* [_MEMFREE](MEMFREE.md)
* [&dollar;CHECKING](&dollar;CHECKING.md)
</blockquote>
