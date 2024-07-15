# SPC

The SPC function is used in [PRINT](PRINT.md) and [LPRINT](LPRINT.md) statements to print or output a number of space characters.

  

## Syntax

**SPC(*count%*)**
  

## Parameters

* *count* designates the number of column spaces to move the cursor in a [PRINT](PRINT.md) statement.

  

## Description

* When used in a [PRINT](PRINT.md) statement,
	+ *count%* is the number of space characters to print, overwriting existing characters.
	+ If *count%* is greater than the number of columns left in the current row, remaining space characters are printed on the next row.
* When used in a [PRINT #](PRINT #.md) "PRINT (file statement)") statement,
	+ *count%* is the number of space characters to output.
	+ If *count%* is less than or equal to zero, the function has no effect.

  

## Examples

*Example:* Using SPC to space a text print.

``` [PRINT](PRINT.md) "123456789" [PRINT](PRINT.md) "abc" ; SPC(3) ; "123" 
```

``` 123456789 abc   123  
```

  

## See also

* [PRINT](PRINT.md), [PRINT #](PRINT #.md) "PRINT (file statement)")
* [LPRINT](LPRINT.md), [STRING$](STRING$.md)
* [TAB](TAB.md), [SPACE$](SPACE$.md)

  
