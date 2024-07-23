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


## [Mathematical Operations](Mathematical_Operations.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Mathematical%20Operations)
---
<blockquote>

### 

</blockquote>

#### SYNTAX

<blockquote>

`Rounding is used when the program needs a certain number value or type. There are 4 INTEGER or LONG Integer functions and one function each for closest SINGLE and closest DOUBLE numerical types. Closest functions use "bankers" rounding which rounds up if the decimal point value is over one half. Variable types should match the return value.`

</blockquote>

#### EXAMPLES

<blockquote>

```vb
Degree to Radian Conversion:
FUNCTION Radian (degrees)
Radian = degrees * (4 * ATN(1)) / 180
END FUNCTION

FUNCTION Degree (radians)
Degree = radians * 180 / (4 * ATN(1))
END FUNCTION

Logarithm to base n
FUNCTION LOGN (X, n)
IF n > 0 AND n <> 1 AND X > 0 THEN LOGN = LOG(X) / LOG(n) ELSE BEEP
END FUNCTION

FUNCTION LOG10 (X)    'base 10 logarithm
IF X > 0 THEN LOG10 = LOG(X) / LOG(10) ELSE BEEP
END FUNCTION
```
  
<br>

```vb
FUNCTION SEC (x) 'Secant
IF COS(x) <> 0 THEN SEC = 1 / COS(x) ELSE BEEP
END FUNCTION

FUNCTION CSC (x) 'CoSecant
IF SIN(x) <> 0 THEN CSC = 1 / SIN(x) ELSE BEEP
END FUNCTION

FUNCTION COT (x) 'CoTangent
IF TAN(x) <> 0 THEN COT = 1 / TAN(x) ELSE BEEP
END FUNCTION

FUNCTION ARCSIN (x) 'Inverse Sine
IF x < 1 THEN ARCSIN = ATN(x / SQR(1 - (x * x))) ELSE BEEP
END FUNCTION

FUNCTION ARCCOS (x) ' Inverse Cosine
IF x < 1 THEN ARCCOS = (2 * ATN(1)) - ATN(x / SQR(1 - x * x)) ELSE BEEP
END FUNCTION

FUNCTION ARCSEC (x) ' Inverse Secant
IF x < 1 THEN ARCSEC = ATN(x / SQR(1 - x * x)) + (SGN(x) - 1) * (2 * ATN(1)) ELSE BEEP
END FUNCTION

FUNCTION ARCCSC (x) ' Inverse CoSecant
IF x < 1 THEN ARCCSC = ATN(1 / SQR(1 - x * x)) + (SGN(x) - 1) * (2 * ATN(1)) ELSE BEEP
END FUNCTION

FUNCTION ARCCOT (x) ' Inverse CoTangent
ARCCOT = (2 * ATN(1)) - ATN(x)
END FUNCTION

FUNCTION SINH (x) ' Hyperbolic Sine
IF x <= 88.02969 THEN SINH = (EXP(x) - EXP(-x)) / 2 ELSE BEEP
END FUNCTION

FUNCTION COSH (x) ' Hyperbolic CoSine
IF x <= 88.02969 THEN COSH = (EXP(x) + EXP(-x)) / 2 ELSE BEEP
END FUNCTION

FUNCTION TANH (x) ' Hyperbolic Tangent or SINH(x) / COSH(x)
IF 2 * x <= 88.02969 AND EXP(2 * x) + 1 <> 0 THEN
TANH = (EXP(2 * x) - 1) / (EXP(2 * x) + 1)
ELSE BEEP
END IF
END FUNCTION

FUNCTION SECH (x) ' Hyperbolic Secant or (COSH(x)) ^ -1
IF x <= 88.02969 AND (EXP(x) + EXP(-x)) <> 0 THEN SECH = 2 / (EXP(x) + EXP(-x)) ELSE BEEP
END FUNCTION

FUNCTION CSCH (x) ' Hyperbolic CoSecant or (SINH(x)) ^ -1
IF x <= 88.02969 AND (EXP(x) - EXP(-x)) <> 0 THEN CSCH = 2 / (EXP(x) - EXP(-x)) ELSE BEEP
END FUNCTION

FUNCTION COTH (x) ' Hyperbolic CoTangent or COSH(x) / SINH(x)
IF 2 * x <= 88.02969 AND EXP(2 * x) - 1 <> 0 THEN
COTH = (EXP(2 * x) + 1) / (EXP(2 * x) - 1)
ELSE BEEP
END IF
END FUNCTION

FUNCTION ARCSINH (x) ' Inverse Hyperbolic Sine
IF (x * x) + 1 >= 0 AND x + SQR((x * x) + 1) > 0 THEN
ARCSINH = LOG(x + SQR(x * x + 1))
ELSE BEEP
END IF
END FUNCTION

FUNCTION ARCCOSH (x) ' Inverse Hyperbolic CoSine
IF x >= 1 AND x * x - 1 >= 0 AND x + SQR(x * x - 1) > 0 THEN
ARCCOSH = LOG(x + SQR(x * x - 1))
ELSE BEEP
END IF
END FUNCTION

FUNCTION ARCTANH (x) ' Inverse Hyperbolic Tangent
IF x < 1 THEN ARCTANH = LOG((1 + x) / (1 - x)) / 2 ELSE BEEP
END FUNCTION

FUNCTION ARCSECH (x) ' Inverse Hyperbolic Secant
IF x > 0 AND x <= 1 THEN ARCSECH = LOG((SGN(x) * SQR(1 - x * x) + 1) / x) ELSE BEEP
END FUNCTION

FUNCTION ARCCSCH (x) ' Inverse Hyperbolic CoSecant
IF x <> 0 AND x * x + 1 >= 0 AND (SGN(x) * SQR(x * x + 1) + 1) / x > 0 THEN
ARCCSCH = LOG((SGN(x) * SQR(x * x + 1) + 1) / x)
ELSE BEEP
END IF
END FUNCTION

FUNCTION ARCCOTH (x) ' Inverse Hyperbolic CoTangent
IF x > 1 THEN ARCCOTH = LOG((x + 1) / (x - 1)) / 2 ELSE BEEP
END FUNCTION
```
  
<br>

```vb
Hyperbolic Function Relationships:

COSH(-x) = COSH(x)
SINH(-x) = -SINH(x)

SECH(-x) = SECH(x)
CSCH(-x) = -CSCH(x)
TANH(-x) = -TANH(x)
COTH(-x) = -COTH(x)

Inverse Hyperbolic Function Relatonships:

ARSECH(x) = ARCOSH(x) ^ -1
ARCSCH(x) = ARSINH(x) ^ -1
ARCOTH(x) = ARTANH(x) ^ -1

Hyperbolic sine and cosine satisfy the Pythagorean trig. identity:

(COSH(x) ^ 2) - (SINH(x) ^ 2) = 1
```
  
<br>

```vb
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
  
<br>

```vb
Table 3: The relational operations for condition checking.

In this table, A and B are the Expressions to compare. Both must represent
the same general type, i.e. they must result into either numerical values
or STRING values. If a test succeeds, then true (-1) is returned, false (0)
if it fails, which both can be used in further Boolean evaluations.
┌─────────────────────────────────────────────────────────────────────────┐
│                          Relational Operations                          │
├────────────┬───────────────────────────────────────────┬────────────────┤
│ Operation  │                Description                │ Example usage  │
├────────────┼───────────────────────────────────────────┼────────────────┤
│   A = B    │ Tests if A is equal to B.                 │ IF A = B THEN  │
├────────────┼───────────────────────────────────────────┼────────────────┤
│   A <> B   │ Tests if A is not equal to B.             │ IF A <> B THEN │
├────────────┼───────────────────────────────────────────┼────────────────┤
│   A < B    │ Tests if A is less than B.                │ IF A < B THEN  │
├────────────┼───────────────────────────────────────────┼────────────────┤
│   A > B    │ Tests if A is greater than B.             │ IF A > B THEN  │
├────────────┼───────────────────────────────────────────┼────────────────┤
│   A <= B   │ Tests if A is less than or equal to B.    │ IF A <= B THEN │
├────────────┼───────────────────────────────────────────┼────────────────┤
│   A >= B   │ Tests if A is greater than or equal to B. │ IF A >= B THEN │
└────────────┴───────────────────────────────────────────┴────────────────┘
The operations should be very obvious for numerical values. For strings
be aware that all checks are done case sensitive (i.e. "Foo" <> "foo").
The equal/not equal check is pretty much straight forward, but for the
less/greater checks the ASCII value of the first different character is
used for decision making:

E.g. "abc" is less than "abd", because in the first difference (the 3rd
character) the "c" has a lower ASCII value than the "d".

This behavior may give you some subtle results, if you are not aware of
the ASCII values and the written case:

E.g. "abc" is greater than "abD", because the small letters have higher
ASCII values than the capital letters, hence "c" > "D". You may use
LCASE$ or UCASE$ to make sure both strings have the same case.
```
  
<br>

```vb
Comparing the INTEGER Base Number Systems

Decimal (base 10)    Binary (base 2)    Hexadecimal (base 16)    Octal (base 8)

  &B                 &H HEX$(n)           &O OCT$(n)

0                  0000                  0                     0
1                  0001                  1                     1
2                  0010                  2                     2
3                  0011                  3                     3
4                  0100                  4                     4
5                  0101                  5                     5
6                  0110                  6                     6
7                  0111                  7                     7 -- maxed
8                  1000                  8                    10
maxed-- 9                  1001                  9                    11
10                  1010                  A                    12
11                  1011                  B                    13
12                  1100                  C                    14
13                  1101                  D                    15
14                  1110                  E                    16
15  -------------   1111 <--- Match --->  F  ----------------  17 -- max 2
16                 10000                 10                    20

When the Decimal value is 15, the other 2 base systems are all maxed out!
The Binary values can be compared to all of the HEX value digit values so
it is possible to convert between the two quite easily. To convert a HEX
value to Binary just add the 4 binary digits for each HEX digit place so:

F      A      C      E
&HFACE = 1111 + 1010 + 1100 + 1101 = &B1111101011001101

To convert a Binary value to HEX you just need to divide the number into
sections of four digits starting from the right(LSB) end. If one has less
than 4 digits on the left end you could add the leading zeros like below:

&B101011100010001001 = 0010 1011 1000 1000 1001
hexadecimal =  2  + B  + 8 +  8  + 9 = &H2B889

See the Decimal to Binary conversion function that uses HEX$ on the &H page.
```
  
<br>

```vb
Offset or Position:    0    1   2   3   4   5   6   7      Example: 11110000
----------------------------------             --------
Big-Endian Bit On Value:   128  64  32  16   8   4   2   1                 240
Little-Endian Bit On Value:    1    2   4   8  16  32  64  128                 15
```
  
<br>

```vb
16 BIT INTEGER OR REGISTER
AH (High Byte Bits)                         AL (Low Byte Bits)
BIT:    15    14   13   12   11   10   9   8  |   7   6    5   4    3    2   1    0
---------------------------------------|--------------------------------------
HEX:   8000  4000 2000 1000  800 400  200 100 |  80   40  20   10   8    4   2    1
```
  
<br>



##### Example: Program displays the bits on for any integer value between -32768 and 32767 or &H80000 and &H7FFF.
```vb
DEFINT A-Z
SCREEN 12
COLOR 11: LOCATE 10, 2
PRINT "      AH (High Register Byte Bits)           AL (Low Register Byte Bits)"
COLOR 14: LOCATE 11, 2
PRINT "    15   14  13   12   11  10    9   8    7   6    5   4    3    2   1    0"
COLOR 13: LOCATE 14, 2
PRINT " &H8000 4000 2000 1000 800 400  200 100  80   40  20   10   8    4   2  &H1"
COLOR 11: LOCATE 15, 2
PRINT "-32768 16384 8192 4096 2048 1024 512 256 128  64  32   16   8    4   2    1"
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
ELSE
PAINT (640 - (37 * (i + 1)), 189), 0, 9
BinStr$ = BinStr$ + "0"
END IF
NEXT
COLOR 10: LOCATE 16, 50: PRINT "Binary ="; VAL(BinStr$)
COLOR 9: LOCATE 16, 10: PRINT "Decimal ="; Num;: COLOR 13: PRINT "       Hex = "; Hexa$
Hexa$ = "": BinStr$ = ""
END IF
COLOR 14: LOCATE 17, 15: INPUT "Enter a decimal or HEX(&H) value (0 Quits): ", frst$
first = VAL(frst$)
IF first THEN
LOCATE 17, 15: PRINT SPACE$(55)
COLOR 13: LOCATE 17, 15: INPUT "Enter a second value: ", secnd$
second = VAL(secnd$)
LOCATE 17, 10: PRINT SPACE$(69)
END IF
Num = first + second
Hexa$ = "&H" + HEX$(Num)
LOOP UNTIL first = 0 OR Num > 32767 OR Num < -32767
COLOR 11: LOCATE 28, 30: PRINT "Press any key to exit!";
SLEEP
SYSTEM
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_OFFSET](OFFSET.md) , [_MEM](MEM.md)
* [DIM](DIM.md) , [_DEFINE](DEFINE.md)
* [TYPE](TYPE.md)
</blockquote>
