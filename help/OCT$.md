# OCT$

This function returns the octal (base 8) representation of any numeric value.

  

## Syntax

*octvalue$* = OCT$(*number*)
  

## Parameters

* *number* can be any [INTEGER](INTEGER.md), [LONG](LONG.md) or [_INTEGER64](_INTEGER64.md) value, positive or negative.
* *number* can also be any [SINGLE](SINGLE.md), [DOUBLE](DOUBLE.md) or [_FLOAT](_FLOAT.md) value, but only the integer part of the value is converted in that case. That is, from the value *-123.45* the function would convert the *-123* only.

  

## Description

* The function returns the base 8 (octal) representation of the given *number* as [STRING](STRING.md).
* Different from [STR$](STR$.md), this function does not return a leading sign placeholder space, so no [LTRIM$](LTRIM$.md) to strip that space from positive numbers is necessary.
* [VAL](VAL.md) can convert the returned oct string value back to a decimal value by prefixing the string with "[&O](&O.md)".
	+ Eg. decimal = [VAL](VAL.md)("&O" + octvalue$).

  

## Examples

Example 1
Comparing decimal, hexadecimal, octal and binary string values from 0 to 15.

``` tabletop$ = " Decimal | Hexadecimal | Octal | Binary " tablesep$ = "---------+-------------+-------+--------" tableout$ = "  \ \    |      \\     |   \\  |  \  \  " 'the PRINT USING template  [LOCATE](LOCATE.md) 2, 10: [PRINT](PRINT.md) tabletop$ [LOCATE](LOCATE.md) 3, 10: [PRINT](PRINT.md) tablesep$ [FOR](FOR.md) n% = 0 [TO](TO.md) 15     [LOCATE](LOCATE.md) 4 + n%, 10: [PRINT USING](PRINT USING.md) tableout$; [STR$](STR$.md)(n%); [HEX$](HEX$.md)(n%); OCT$(n%); [_BIN$](_BIN$.md)(n%) [NEXT](NEXT.md) n%  
```

Note
Although the decimal numbers 0-15 have a maximum width of 2 digits only, an extra space in the *tableout$* template is needed when using the (fixed width string) slash output format, as [STR$](STR$.md) values contain a leading sign placeholder space.

```           Decimal | Hexadecimal | Octal | Binary          ---------+-------------+-------+--------             0     |      0      |   0   |  0             1     |      1      |   1   |  1             2     |      2      |   2   |  10             3     |      3      |   3   |  11             4     |      4      |   4   |  100             5     |      5      |   5   |  101             6     |      6      |   6   |  110             7     |      7      |   7   |  111             8     |      8      |   10  |  1000             9     |      9      |   11  |  1001             10    |      A      |   12  |  1010             11    |      B      |   13  |  1011             12    |      C      |   14  |  1100             13    |      D      |   15  |  1101             14    |      E      |   16  |  1110             15    |      F      |   17  |  1111  
```

  

Example 2
Converting a octal value to decimal.

``` octvalue$ = OCT$(255) [PRINT](PRINT.md) "Oct: "; octvalue$ [PRINT](PRINT.md) "Converting Oct value to Decimal:"; [VAL](VAL.md)("&O" + octvalue$)  
```

``` Oct: 377 Converting Oct value to Decimal: 255  
```

  

## See also

* [_BIN$](_BIN$.md), [HEX$](HEX$.md), [STR$](STR$.md)
* [&B](&B.md), [&H](&H.md), [&O](&O.md), [VAL](VAL.md)
* [Base Comparisons](Base Comparisons.md)

  
