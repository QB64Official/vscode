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

## [Binary](Binary.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Binary)
---
<blockquote>

### Binary is the base 2 numbering system. It is used by computers because the computer consists of switches that are either on or off. The primary purpose of reading bit values is to translate what was sent by a port or register read.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
Exponent of 2 and Bit #  7 6 5 4 3 2 1 0 

Bit 0 = 2 ^ 0 = 1 decimal    binary = 0 0 0 0 0 0 0 1
Bit 1 = 2 ^ 1 = 2 decimal    binary = 0 0 0 0 0 0 1 0
Bit 2 = 2 ^ 2 = 4 decimal    binary = 0 0 0 0 0 1 0 0
Bit 3 = 2 ^ 3 = 8 decimal    binary = 0 0 0 0 1 0 0 0
Bit 4 = 2 ^ 4 = 16 decimal   binary = 0 0 0 1 0 0 0 0
Bit 5 = 2 ^ 5 = 32 decimal   binary = 0 0 1 0 0 0 0 0
Bit 6 = 2 ^ 6 = 64 decimal   binary = 0 1 0 0 0 0 0 0
Bit 7 = 2 ^ 7 = 128 decimal  binary = 1 0 0 0 0 0 0 0

All_Bits_On = 1 + 2 + 4 + 8 + 16 + 32 + 64 + 128 = 255
```
  
<br>```vb
Table 4: The logical operations and its results.

In this table, A and B are the Expressions to invert or combine.
Both may be results of former Boolean evaluations.
┌────────────────────────────────────────────────────────────────────────┐
│                           Logical Operations                           │
├───────┬───────┬───────┬─────────┬────────┬─────────┬─────────┬─────────┤
│   A   │   B   │ NOT B │ A AND B │ A OR B │ A XOR B │ A EQV B │ A IMP B │
├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤
│ true  │ true  │ false │  true   │ true   │  false  │  true   │  true   │
├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤
│ true  │ false │ true  │  false  │ true   │  true   │  false  │  false  │
├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤
│ false │ true  │ false │  false  │ true   │  true   │  false  │  true   │
├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤
│ false │ false │ true  │  false  │ false  │  false  │  true   │  true   │
└───────┴───────┴───────┴─────────┴────────┴─────────┴─────────┴─────────┘
Note: In most BASIC languages incl. QB64 these are bitwise operations,
hence the logic is performed for each corresponding bit in both
operators, where true or false indicates whether a bit is set or
not set. The outcome of each bit is then placed into the respective
position to build the bit pattern of the final result value.

As all Relational Operations return negative one (-1, all bits set) for
true and zero (0, no bits set) for false, this allows us to use these
bitwise logical operations to invert or combine any relational checks,
as the outcome is the same for each bit and so always results into a
true (-1) or false (0) again for further evaluations.
```
  
<br>```vb
DO
LOCATE 2, 10
INPUT "Enter a numerical value to convert to binary(0 quits): ", decimal&
CLS: LOCATE 10, 10
Decimal2Binary (decimal&) 'pass number by value using parenthesis
LOOP UNTIL decimal& = 0
END

SUB Decimal2Binary (number&)
IF number& = 0 THEN EXIT SUB
DO
remain% = ABS(number& MOD 2) ' remainder is used to create binary number
number& = number& \ 2 ' move up one exponent of 2 with integer division
BinStr$ = LTRIM$(STR$(remain%)) ' make remainder a string number
Binary$ = BinStr$ + Binary$ ' add remainder to binary number
LOOP UNTIL number& = 0
PRINT "Binary number = " + Binary$ 'binary result
END SUB
```
  
<br>```vb
_DEFINE B AS _UNSIGNED _BYTE  'unsigned allows byte values from 128 to 255

PRINT "Hit number keys 1 to 8 to turn flags ON or OFF"

DO
a$ = INKEY$ 'get bit numbers 1 through 8 only
k = VAL(a$)
IF k > 0 AND k < 9 THEN 'test for switch on or off
bitval = 2 ^ (k - 1)
IF (byte AND bitval) = 0 THEN byte = byte + bitval ELSE byte = byte - bitval
LOCATE 10, 10: PRINT "Switches on:";
FOR i = 0 TO 7 'maximum byte value is 255
IF (byte AND 2 ^ i) THEN PRINT i + 1;
NEXT
PRINT "Byte ="; byte; SPACE$(4)
END IF
LOOP UNTIL _KEYDOWN(27)
SLEEP
SYSTEM
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  [_BIT](BIT.md)  , &B , [_BYTE](BYTE.md) 
*  [_SHL](SHL.md)  , [_SHR](SHR.md) 
*  [AND](AND.md)  , [OR](OR.md)  , [XOR](XOR.md)  , [EQV](EQV.md)  , [IMP](IMP.md) 
*  [BINARY](BINARY.md)  (file mode), [DO](DO.md) ... [LOOP](LOOP.md) 
*  [FOR](FOR.md) ... [NEXT](NEXT.md)  , Boolean
*  Mathematical Operations

</blockquote>
