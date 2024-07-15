# _BIN$

This function returns the binary (base 2) representation of any numeric value.

  

## Syntax

*binvalue$* = _BIN$(*number*)
  

## Parameters

* *number* can be any [INTEGER](INTEGER.md), [LONG](LONG.md) or [_INTEGER64](_INTEGER64.md) value, positive or negative.
* *number* can also be any [SINGLE](SINGLE.md), [DOUBLE](DOUBLE.md) or [_FLOAT](_FLOAT.md) value, but only the integer part of the value is converted in that case. That is, from the value *-123.45* the function would convert the *-123* only.

  

## Description

* The function returns the base 2 (binary) representation of the given *number* as [STRING](STRING.md).
* Different from [STR$](STR$.md), this function does not return a leading sign placeholder space, so no [LTRIM$](LTRIM$.md) to strip that space from positive numbers is necessary.
* [VAL](VAL.md) can convert the returned bin string value back to a decimal value by prefixing the string with "[&B](&B.md)".
	+ Eg. decimal = [VAL](VAL.md)("&B" + binvalue$).

  

## Availability

* **QB64 v2.1 and up**
* **QB64-PE all versions**

  

## Examples

Example 1
Comparing decimal, hexadecimal, octal and binary string values from 0 to 15.

``` tabletop$ = " Decimal | Hexadecimal | Octal | Binary " tablesep$ = "---------+-------------+-------+--------" tableout$ = "  \ \    |      \\     |   \\  |  \  \  " 'the PRINT USING template  [LOCATE](LOCATE.md) 2, 10: [PRINT](PRINT.md) tabletop$ [LOCATE](LOCATE.md) 3, 10: [PRINT](PRINT.md) tablesep$ [FOR](FOR.md) n% = 0 [TO](TO.md) 15     [LOCATE](LOCATE.md) 4 + n%, 10: [PRINT USING](PRINT USING.md) tableout$; [STR$](STR$.md)(n%); [HEX$](HEX$.md)(n%); [OCT$](OCT$.md)(n%); _BIN$(n%) [NEXT](NEXT.md) n%  
```

Note
Although the decimal numbers 0-15 have a maximum width of 2 digits only, an extra space in the *tableout$* template is needed when using the (fixed width string) slash output format, as [STR$](STR$.md) values contain a leading sign placeholder space.

```           Decimal | Hexadecimal | Octal | Binary          ---------+-------------+-------+--------             0     |      0      |   0   |  0             1     |      1      |   1   |  1             2     |      2      |   2   |  10             3     |      3      |   3   |  11             4     |      4      |   4   |  100             5     |      5      |   5   |  101             6     |      6      |   6   |  110             7     |      7      |   7   |  111             8     |      8      |   10  |  1000             9     |      9      |   11  |  1001             10    |      A      |   12  |  1010             11    |      B      |   13  |  1011             12    |      C      |   14  |  1100             13    |      D      |   15  |  1101             14    |      E      |   16  |  1110             15    |      F      |   17  |  1111  
```

  

Example 2
Converting a binary value to decimal.

``` binvalue$ = _BIN$(255) [PRINT](PRINT.md) "Bin: "; binvalue$ [PRINT](PRINT.md) "Converting Bin value to Decimal:"; [VAL](VAL.md)("&B" + binvalue$)  
```

``` Bin: 11111111 Converting Bin value to Decimal: 255  
```

  

## See also

* [HEX$](HEX$.md), [OCT$](OCT$.md), [STR$](STR$.md)
* [&B](&B.md) (binary), [&H](&H.md) (hexadecimal), [&O](&O.md) (octal), [VAL](VAL.md)
* [Base Comparisons](Base Comparisons.md)

  
