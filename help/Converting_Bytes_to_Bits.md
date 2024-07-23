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


## [Converting Bytes to Bits](Converting_Bytes_to_Bits.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Converting%20Bytes%20to%20Bits)
---
<blockquote>

### Although QB64 has _BYTE and _BIT variable types, there may be times that you just want to know which bits are on of off in the byte value or convert the value to a Binary number.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
DIM byte as _UNSIGNED _BYTE

byte = 222

FOR bit = 7 to 0 STEP -1
IF byte AND 2 ^ bit THEN PRINT "1"; ELSE PRINT "0";
NEXT
```
  
<br>

```vb
SCREEN 12

COLOR 11: LOCATE 10, 2: PRINT "      AH (High Register Byte Bits)           AL (Low Register Byte Bits)"
COLOR 14: LOCATE 11, 2: PRINT "    15   14  13   12   11  10    9   8    7   6    5   4    3    2   1    0"
COLOR 13: LOCATE 14, 2: PRINT " &H8000 4000 2000 1000 800 400  200 100  80   40  20   10   8    4   2  &H1"
COLOR 11: LOCATE 15, 2: PRINT "-32768 16384 8192 4096 2048 1024 512 256 128  64  32   16   8    4   2    1"
FOR i = 1 TO 16
CIRCLE (640 - (37 * i), 189), 8, 9 'place bit circles
NEXT
LINE (324, 160)-(326, 207), 11, BF 'line splits bytes
DO
IF Num THEN
FOR i = 15 TO 0 STEP -1
IF (Num AND 2 ^ i) THEN
PAINT (640 - (37 * (i + 1)), 189), 12, 9
BinStr$ = BinStr$ + "1"
ELSE: PAINT (640 - (37 * (i + 1)), 189), 0, 9
BinStr$ = BinStr$ + "0"
END IF
NEXT
COLOR 10: LOCATE 16, 50: PRINT "Binary ="; VAL(BinStr$)
COLOR 9: LOCATE 16, 10: PRINT "Decimal ="; Num;: COLOR 13: PRINT "       Hex = "; Hexa$
Hexa$ = "": BinStr$ = ""
END IF
COLOR 14: LOCATE 17, 15: INPUT "Enter a decimal or HEX(&H) value (0 Quits): ", frst$
first = VAL(frst$)
LOCATE 17, 15: PRINT SPACE$(55)
IF first THEN
COLOR 13: LOCATE 17, 15: INPUT "Enter a second value: ", secnd$
second = VAL(secnd$)
LOCATE 16, 10: PRINT SPACE$(69)
END IF
Num = first + second
Hexa$ = "&H" + HEX$(Num)
LOOP UNTIL first = 0 OR Num > 32767 OR Num < -32768 OR (Num < -1 AND Num > -32768
END
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Binary
* [_SHL](SHL.md) , [_SHR](SHR.md)
* [_BIT](BIT.md) , &B
* [_BYTE](BYTE.md)
</blockquote>
