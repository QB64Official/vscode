# ASC

The **ASC** statement allows a program to change a character at any position of a [STRING](STRING.md) variable.

  

## Syntax

ASC(*stringExpression$*[, *position%*]) = *code%*
  

## Description

* **Note:** The statement variant of **ASC** is not available in QBasic/QuickBASIC, but in **QB64 only**.
* The *stringExpression$* variable's value must have been previously defined and cannot be an empty string ("").
* *position%* is optional. If no position is used, the leftmost character at position 1 is assumed.
* *position%* cannot be zero or greater than the string's length or an [Illegal function call](Illegal function call.md) error will occur.
* The [ASCII](ASCII.md) replacement *code%* value can be any [INTEGER](INTEGER.md) value from 0 to 255.

  

## Examples

Example
Demonstrates how to change existing text characters one letter at a time.

``` a$ = "YZC" ASC(a$) = 65                 ' CHR$(65) = "A" ASC(a$, 2) = 66              ' CHR$(66) = "B" [PRINT](PRINT.md) a$  ASC(a$, 2) = 32              ' CHR$(32) = " " [PRINT](PRINT.md) a$  ASC(a$, 2) = [ASC](ASC.md) "ASC (function)")("S")        ' get code value from ASC function [PRINT](PRINT.md) a$  
```

``` ABC A C ASC  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [ASC (function)](ASC (function).md) "ASC (function)")
* [MID$](MID$.md), [MID$ (function)](MID$ (function).md) "MID$ (function)")
* [INKEY$](INKEY$.md), [ASCII](ASCII.md)

  
