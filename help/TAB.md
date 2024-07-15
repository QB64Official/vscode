# TAB

The TAB function is used in [PRINT](PRINT.md) and [LPRINT](LPRINT.md) statements to move to a specified column position.

  

## Syntax

TAB(*column%*)
  

## Description

* Space characters are printed until the print cursor reaches the designated *column%*, overwriting existing characters.
* If a subsequent TAB *column%* is less than the current position, TAB moves the next print to that column on the next row.
* [ASCII](ASCII.md) [CHR$](CHR$.md)(9) can be substituted for sequencial 9 space column moves.
* [Comma](Comma.md) PRINT spacing is up to 15 column places (IE: TAB(15)) to a maximum column of 57.
* When printing to a file, a carriage return([CHR$](CHR$.md)(13)) and linefeed([CHR$](CHR$.md)(10)) character are output when it moves to the next row.
* **Note:** QBasic did not allow a TAB to be [added](added.md) to a string value. In [PRINT](PRINT.md) statements the [plus](plus.md) would be changed to a [semicolon](semicolon.md).

In QB64, TAB [concatenation](concatenation.md) is allowed instead of [semicolons](semicolons.md). Example: PRINT "text" + TAB(9) + "here"
  

*Example:* Comparing TAB to [comma](comma.md) print spacing which moves the next text print 15 columns.

``` [PRINT](PRINT.md) TAB(15); "T" 'TAB spacing  [PRINT](PRINT.md) , "T" 'comma spacing  [PRINT](PRINT.md) TAB(15); "T"; TAB(20); "A"; TAB(15); "B" 'semicolons add nothing to position  [PRINT](PRINT.md) TAB(15); "T", TAB(20); "A"; TAB(15); "B" 'comma moves column position beyond 20  
```

```               T               T               T    A               B               T                    A               B 
```

*Explanation:* TAB moves the PRINT down to the next row when the current column position is more than the TAB position.
  

## See also

* [PRINT](PRINT.md), [LPRINT](LPRINT.md)
* [SPC](SPC.md), [SPACE$](SPACE$.md)
* [STRING$](STRING$.md)
* [CHR$](CHR$.md), [ASCII](ASCII.md)

  
