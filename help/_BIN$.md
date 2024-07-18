## _BIN$
---

### This function returns the binary (base 2) representation of any numeric value.

#### SYNTAX

`binvalue$ = _BIN$ ( number )`

#### PARAMETERS
* number can be any [INTEGER](./INTEGER.md) , [LONG](./LONG.md) or [_INTEGER64](./_INTEGER64.md) value, positive or negative.
* number can also be any [SINGLE](./SINGLE.md) , [DOUBLE](./DOUBLE.md) or [_FLOAT](./_FLOAT.md) value, but only the integer part of the value is converted in that case. That is, from the value -123.45 the function would convert the -123 only.


#### DESCRIPTION
* The function returns the base 2 (binary) representation of the given number as [STRING](./STRING.md) .
* Different from STR$ , this function does not return a leading sign placeholder space, so no LTRIM$ to strip that space from positive numbers is necessary.
* [VAL](./VAL.md) can convert the returned bin string value back to a decimal value by prefixing the string with " &B ".
	* Eg. decimal = [VAL](./VAL.md) ( "&B" + binvalue$) .


#### EXAMPLES
```vb
tabletop$ = " Decimal | Hexadecimal | Octal | Binary "
tablesep$ = "---------+-------------+-------+--------"
tableout$ = "  \ \    |      \\     |   \\  |  \  \  " 'the PRINT USING template

LOCATE 2, 10: PRINT tabletop$
LOCATE 3, 10: PRINT tablesep$
FOR n% = 0 TO 15
   LOCATE 4 + n%, 10: PRINT USING tableout$; STR$(n%); HEX$(n%); OCT$(n%); _BIN$(n%)
NEXT n%
```
  
```vb
Decimal | Hexadecimal | Octal | Binary
        ---------+-------------+-------+--------
           0     |      0      |   0   |  0
           1     |      1      |   1   |  1
           2     |      2      |   2   |  10
           3     |      3      |   3   |  11
           4     |      4      |   4   |  100
           5     |      5      |   5   |  101
           6     |      6      |   6   |  110
           7     |      7      |   7   |  111
           8     |      8      |   10  |  1000
           9     |      9      |   11  |  1001
           10    |      A      |   12  |  1010
           11    |      B      |   13  |  1011
           12    |      C      |   14  |  1100
           13    |      D      |   15  |  1101
           14    |      E      |   16  |  1110
           15    |      F      |   17  |  1111
```
  
```vb
binvalue$ = _BIN$(255)
PRINT "Bin: "; binvalue$
PRINT "Converting Bin value to Decimal:"; VAL("&B" + binvalue$)
```
  
```vb
Bin: 11111111
Converting Bin value to Decimal: 255
```
  


#### SEE ALSO
* HEX$ , OCT$ , STR$
* &B (binary), &H (hexadecimal), &O (octal), [VAL](./VAL.md)
* Base Comparisons
