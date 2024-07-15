# HEX$

This function returns the hexadecimal (base 16) representation of any numeric value.

  

## Syntax

*hexvalue$* = HEX$(*number*)
  

## Parameters

* *number* can be any [INTEGER](INTEGER.md), [LONG](LONG.md) or [_INTEGER64](_INTEGER64.md) value, positive or negative.
* *number* can also be any [SINGLE](SINGLE.md), [DOUBLE](DOUBLE.md) or [_FLOAT](_FLOAT.md) value, but only the integer part of the value is converted in that case. That is, from the value *-123.45* the function would convert the *-123* only.

  

## Description

* The function returns the base 16 (hexadecimal) representation of the given *number* as [STRING](STRING.md).
* Different from [STR$](STR$.md), this function does not return a leading sign placeholder space, so no [LTRIM$](LTRIM$.md) to strip that space from positive numbers is necessary.
* [VAL](VAL.md) can convert the returned hex string value back to a decimal value by prefixing the string with "[&H](&H.md)".
	+ Eg. decimal = [VAL](VAL.md)("&H" + hexvalue$).

  

## Examples

Example 1
Comparing decimal, hexadecimal, octal and binary string values from 0 to 15.

``` tabletop$ = " Decimal | Hexadecimal | Octal | Binary " tablesep$ = "---------+-------------+-------+--------" tableout$ = "  \ \    |      \\     |   \\  |  \  \  " 'the PRINT USING template  [LOCATE](LOCATE.md) 2, 10: [PRINT](PRINT.md) tabletop$ [LOCATE](LOCATE.md) 3, 10: [PRINT](PRINT.md) tablesep$ [FOR](FOR.md) n% = 0 [TO](TO.md) 15     [LOCATE](LOCATE.md) 4 + n%, 10: [PRINT USING](PRINT USING.md) tableout$; [STR$](STR$.md)(n%); HEX$(n%); [OCT$](OCT$.md)(n%); [_BIN$](_BIN$.md)(n%) [NEXT](NEXT.md) n%  
```

Note
Although the decimal numbers 0-15 have a maximum width of 2 digits only, an extra space in the *tableout$* template is needed when using the (fixed width string) slash output format, as [STR$](STR$.md) values contain a leading sign placeholder space.

```           Decimal | Hexadecimal | Octal | Binary          ---------+-------------+-------+--------             0     |      0      |   0   |  0             1     |      1      |   1   |  1             2     |      2      |   2   |  10             3     |      3      |   3   |  11             4     |      4      |   4   |  100             5     |      5      |   5   |  101             6     |      6      |   6   |  110             7     |      7      |   7   |  111             8     |      8      |   10  |  1000             9     |      9      |   11  |  1001             10    |      A      |   12  |  1010             11    |      B      |   13  |  1011             12    |      C      |   14  |  1100             13    |      D      |   15  |  1101             14    |      E      |   16  |  1110             15    |      F      |   17  |  1111  
```

  

Example 2
Converting a hexadecimal value to decimal.

``` hexvalue$ = HEX$(255) [PRINT](PRINT.md) "Hex: "; hexvalue$ [PRINT](PRINT.md) "Converting Hex value to Decimal:"; [VAL](VAL.md)("&H" + hexvalue$)  
```

``` Hex: FF Converting Hex value to Decimal: 255  
```

  

## See also

* [_BIN$](_BIN$.md), [OCT$](OCT$.md), [STR$](STR$.md)
* [&B](&B.md) (binary), [&H](&H.md) (hexadecimal), [&O](&O.md) (octal), [VAL](VAL.md)
* [Base Comparisons](Base Comparisons.md)
* [HEX$ 32 Bit Values](HEX$ 32 Bit Values.md)

  
