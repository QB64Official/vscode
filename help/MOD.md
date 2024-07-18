## MOD
---

### The MOD operator gives the remainder after division of one number by another (sometimes called modulus).

#### SYNTAX

`remainder = numerator MOD divisor`

#### PARAMETERS
* Returns the integer division remainder as a whole [INTEGER](./INTEGER.md) , [LONG](./LONG.md) or [_INTEGER64](./_INTEGER64.md) value.
* numerator is the [INTEGER](./INTEGER.md) value to divide.
* divisor is the [INTEGER](./INTEGER.md) value to divide by.


#### DESCRIPTION
* Floating decimal point numerator and divisor values are [CINT](./CINT.md) rounded (e.g. 19 [MOD](./MOD.md) 6.7 returns 5 just like 19 [MOD](./MOD.md) 7 would).
* [MOD](./MOD.md) returns 0 if a number is evenly divisible by integer division ( \ ) or the number divided is 0.
* divisor (second value) must not be between 0 and .5 . This will create a "Division by zero" error due to [CINT](./CINT.md) rounding the value to 0.
* The result has the same sign as the numerator (e.g. -1 [MOD](./MOD.md) 7 returns -1, not 6).
* Division and multiplication operations are performed before addition and subtraction in QBasic's order of operations.


#### EXAMPLES
##### Example 1:
```vb
I% = 100 \ 9
 R% = 100 MOD 9
 PRINT "Integer division ="; I%, "Remainder ="; R%
```
  
```vb
Integer division = 11        Remainder = 1
```
  
##### Explanation: Integer division 100 \ 9 returns 11. 11 * 9 = 99. So the remainder must be 1 as 100 - 99 = 1. Normal decimal point division would return 11.11111.
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
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* / (normal division operator)
* \ (integer division operator)
* [INT](./INT.md) , [CINT](./CINT.md) , [FIX](./FIX.md) , [_ROUND](./_ROUND.md) , [_CEIL](./_CEIL.md)
* Mathematical Operations
