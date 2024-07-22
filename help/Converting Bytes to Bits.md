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

## [Converting_Bytes_to_Bits](Converting_Bytes_to_Bits.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Converting Bytes to Bits)
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
  
<br>```vb
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

*  Binary
*  [_SHL](SHL.md)  , [_SHR](SHR.md) 
*  [_BIT](BIT.md)  , &B
*  [_BYTE](BYTE.md) 

</blockquote>
