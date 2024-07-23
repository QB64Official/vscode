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


## [MOD](MOD.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/MOD)
---
<blockquote>

### The MOD operator gives the remainder after division of one number by another (sometimes called modulus).

</blockquote>

#### SYNTAX

<blockquote>

`remainder = numerator MOD divisor`

</blockquote>

#### PARAMETERS

<blockquote>


* Returns the integer division remainder as a whole [INTEGER](INTEGER.md) , [LONG](LONG.md) or [_INTEGER64](INTEGER64.md) value.
* numerator is the [INTEGER](INTEGER.md) value to divide.
* divisor is the [INTEGER](INTEGER.md) value to divide by.
</blockquote>

#### DESCRIPTION

<blockquote>


* Floating decimal point numerator and divisor values are [CINT](CINT.md) rounded (e.g. 19 [MOD](MOD.md) 6.7 returns 5 just like 19 [MOD](MOD.md) 7 would).
* [MOD](MOD.md) returns 0 if a number is evenly divisible by integer division ( \ ) or the number divided is 0.
* divisor (second value) must not be between 0 and .5 . This will create a "Division by zero" error due to [CINT](CINT.md) rounding the value to 0.
* The result has the same sign as the numerator (e.g. -1 [MOD](MOD.md) 7 returns -1, not 6).
* Division and multiplication operations are performed before addition and subtraction in QBasic's order of operations.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1:
```vb
I% = 100 \ 9
R% = 100 MOD 9
PRINT "Integer division ="; I%, "Remainder ="; R%
```
  
<br>

```vb
Integer division = 11        Remainder = 1
```
  
<br>



##### Example 2: Comparing normal, integer and remainder division.
```vb
tmp1$ = " Normal:         ####.# / #### = ##.###   "
tmp2$ = " Integer:        ####.# \ #### = ###      "
tmp3$ = " Remainder:    ####.# MOD #### = ####     "
FOR i = 1 TO 6
SELECT CASE i
CASE 1: numerator = 1: divisor = 5
CASE 2: numerator = 13: divisor = 10
CASE 3: numerator = 990: divisor = 100
CASE 4: numerator = 1100: divisor = 100
CASE 5: numerator = 4501: divisor = 1000
CASE 6: numerator = 50.6: divisor = 10
END SELECT
LOCATE 5, 20: PRINT USING tmp1$; numerator; divisor; numerator / divisor
LOCATE 7, 20: PRINT USING tmp2$; numerator; divisor; numerator \ divisor
LOCATE 9, 20: PRINT USING tmp3$; numerator; divisor; numerator MOD divisor
DO: SLEEP: LOOP UNTIL INKEY$ <> ""
NEXT
```
  
<br>



##### Example 3: Integer division and MOD can be used to convert values to different base numbering systems from base 2 to 36 as strings :
```vb
CLS
DO
INPUT "Enter a base number system 2 to 36: ", b%
IF b% < 2 OR b% > 36 THEN EXIT DO
PRINT "Enter a positive value to convert: ";
num$ = ""
DO: K$ = INKEY$
num$ = num$ + K$
LOCATE CSRLIN, POS(0): PRINT K$;
LOOP UNTIL K$ = CHR$(13)
n& = VAL(num$)
IF n& = 0 THEN EXIT DO
Bnum$ = BASEN$(n&, b%)
PRINT Bnum$ ', VAL("&H" + Bnum$) 'tests hexadecimal base 16 only
LOOP

END

FUNCTION BASEN$ (number&, basenum%)
IF basenum% < 2 OR basenum% > 36 OR number& = 0 THEN EXIT FUNCTION
num& = number& 'protect value of number!
DO
remain% = ABS(num&) MOD basenum% ' remainder is used to create actual digit 0 to Z
num& = num& \ basenum% ' move up one exponent of base% with integer division
IF remain% > 9 THEN
b$ = CHR$(65 + (remain% - 10)) 'limited to base 36
ELSE: b$ = LTRIM$(STR$(remain%)) ' make remainder a string number
END IF
BN$ = b$ + BN$ ' add remainder character to base number string
LOOP UNTIL num& = 0
BASEN$ = BN$
END FUNCTION
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* / (normal division operator)
* \ (integer division operator)
* [INT](INT.md) , [CINT](CINT.md) , [FIX](FIX.md) , [_ROUND](ROUND.md) , [_CEIL](CEIL.md)
* Mathematical Operations
</blockquote>
