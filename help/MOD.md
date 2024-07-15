# MOD

The MOD operator gives the remainder after division of one number by another (sometimes called modulus).

  

## Syntax

*remainder* = *numerator* MOD *divisor*
  

## Parameters

* Returns the integer division remainder as a whole [INTEGER](INTEGER.md), [LONG](LONG.md) or [_INTEGER64](_INTEGER64.md) value.
* *numerator* is the [INTEGER](INTEGER.md) value to divide.
* *divisor* is the [INTEGER](INTEGER.md) value to divide by.

  

## Description

* Floating decimal point *numerator* and *divisor* values are [CINT](CINT.md) rounded (e.g. 19 MOD 6.7 returns 5 just like 19 MOD 7 would).
* MOD returns 0 if a number is evenly divisible by integer division ( [\](\.md) ) or the number divided is 0.
* ***divisor* (second value) must not be between 0 and .5**. This will create a ["Division by zero" error]("Division by zero" error.md) due to [CINT](CINT.md) rounding the value to 0.
* The result has the same sign as the numerator (e.g. -1 MOD 7 returns -1, not 6).
* Division and multiplication operations are performed before addition and subtraction in QBasic's order of operations.

  

## Examples

*Example 1:*

```   I% = 100 [\](\.md) 9   R% = 100 MOD 9   PRINT "Integer division ="; I%, "Remainder ="; R%  
```

```   Integer division = 11        Remainder = 1  
```

*Explanation:* Integer division 100 \ 9 returns 11. 11 [*](*.md) 9 = 99. So the remainder must be 1 as 100 - 99 = 1. Normal decimal point division would return 11.11111.

  

*Example 2:* Comparing normal, integer and remainder division.

``` tmp1$ = " Normal:         ####.# / #### = ##.###   " tmp2$ = " Integer:        ####.# \ #### = ###      " tmp3$ = " Remainder:    ####.# MOD #### = ####     " FOR i = 1 TO 6    SELECT CASE i      CASE 1: numerator = 1: divisor = 5      CASE 2: numerator = 13: divisor = 10      CASE 3: numerator = 990: divisor = 100      CASE 4: numerator = 1100: divisor = 100      CASE 5: numerator = 4501: divisor = 1000      CASE 6: numerator = 50.6: divisor = 10    END SELECT LOCATE 5, 20: PRINT USING tmp1$; numerator; divisor; numerator / divisor LOCATE 7, 20: PRINT USING tmp2$; numerator; divisor; numerator \ divisor LOCATE 9, 20: PRINT USING tmp3$; numerator; divisor; numerator MOD divisor DO: SLEEP: LOOP UNTIL INKEY$ <> "" NEXT  
```

  

*Example 3:* Integer division and MOD can be used to convert values to different base numbering systems from base 2 to 36 as [strings](strings.md):

``` [CLS](CLS.md) DO   [INPUT](INPUT.md) "Enter a base number system 2 to 36: ", b%   [IF](IF.md) b% < 2 [OR](OR.md) "OR (boolean)") b% > 36 [THEN](THEN.md) [EXIT DO](EXIT DO.md)   [PRINT](PRINT.md) "Enter a positive value to convert: ";   num$ = ""   [DO](DO.md): K$ = [INKEY$](INKEY$.md)     num$ = num$ + K$     [LOCATE](LOCATE.md) [CSRLIN](CSRLIN.md), [POS](POS.md)(0): [PRINT](PRINT.md) K$;   [LOOP](LOOP.md) [UNTIL](UNTIL.md) K$ = [CHR$](CHR$.md)(13)   n& = [VAL](VAL.md)(num$)   [IF](IF.md) n& = 0 [THEN](THEN.md) [EXIT DO](EXIT DO.md)   Bnum$ = BASEN$(n&, b%)   [PRINT](PRINT.md) Bnum$ ', [VAL](VAL.md)("[&H](&H.md)" + Bnum$) 'tests hexadecimal base 16 only [LOOP](LOOP.md)  [END](END.md)  [FUNCTION](FUNCTION.md) BASEN$ (number&, basenum%) [IF](IF.md) basenum% < 2 [OR](OR.md) "OR (boolean)") basenum% > 36 [OR](OR.md) "OR (boolean)") number& = 0 [THEN](THEN.md) [EXIT FUNCTION](EXIT FUNCTION.md) num& = number& 'protect value of number! DO   remain% = [ABS](ABS.md)(num&) MOD basenum% ' remainder is used to create actual digit 0 to Z   num& = num& \ basenum% ' move up one exponent of base% with integer division   [IF](IF.md) remain% > 9 [THEN](THEN.md)     b$ = [CHR$](CHR$.md)(65 + (remain% - 10)) 'limited to base 36   [ELSE](ELSE.md): b$ = [LTRIM$](LTRIM$.md)([STR$](STR$.md)(remain%)) ' make remainder a string number   [END IF](END IF.md)   BN$ = b$ + BN$ ' add remainder character to base number string [LOOP](LOOP.md) [UNTIL](UNTIL.md) num& = 0 BASEN$ = BN$ [END FUNCTION](END FUNCTION.md)  
```

*Note:* Base numbering systems over base 10(0 - 9) use alphabetical letters to represent digits greater than 9 like [Hexadecimal](Hexadecimal.md)(0 - F).
  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [/ (normal division operator)](/ (normal division operator).md)
* [\ (integer division operator)](\ (integer division operator).md)
* [INT](INT.md), [CINT](CINT.md), [FIX](FIX.md), [_ROUND](_ROUND.md), [_CEIL](_CEIL.md)
* [Mathematical Operations](Mathematical Operations.md)

  
