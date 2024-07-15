# WRITE

The WRITE statement writes a [comma](comma.md)-separated list of values to the screen without spacing.

  

## Syntax

WRITE [*expression, List*]
  

## Description

* *expressionList* is a comma-separated list of variable or literal values to be written to the screen.
* Write statement separates displayed values using [comma](comma.md) separators(required) that will display on the screen.
* Leading and trailing number spaces are omitted when displaying numerical values.
* [String](String.md) [quotation marks](quotation marks.md) will also be displayed.
* [Semicolons](Semicolons.md) cannot be used in or following the WRITE statement!

  

*Example:* Comparing WRITE to the same PRINT statement.

``` a% = 123 b$ = "Hello" c! = 3.1415  [PRINT](PRINT.md) a%, b$, c!   'commas display tab spaced data WRITE a%, b$, c!   'displays commas between values, strings retain end quotes  
```

``` 123        Hello      3.1415 123,"Hello",3.1415  
```

  

## See also

* [WRITE #](WRITE #.md) "WRITE (file statement)")
* [INPUT #](INPUT #.md) "INPUT (file statement)")
* [PRINT](PRINT.md), [PRINT #](PRINT #.md) "PRINT (file statement)")
* [PRINT USING](PRINT USING.md)

  
