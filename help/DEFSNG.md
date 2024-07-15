# DEFSNG

The DEFSNG statement defines all variables with names starting with the specified letter (or letter range) AS [SINGLE](SINGLE.md) variables.

  

## Syntax

DEFSNG *letter*[-*range*], *letter2*[-*range2*], [...]
### Legacy support

* **DEF** statements ([DEFDBL](DEFDBL.md), DEFSNG, [DEFLNG](DEFLNG.md), [DEFINT](DEFINT.md), [DEFSTR](DEFSTR.md)) were used when storage space was a concern in older computers, as their usage could save up typing. Instead of DIM a AS SINGLE, a2 AS SINGLE, a3 AS SINGLE, simply having DEFSNG A in the code before using variables starting with letter **A** would do the same job.
* For clarity, it is recommended to declare variables with meaningful names.

  

## Description

* Undeclared variables with no type suffix are of type [SINGLE](SINGLE.md) by default.
* *letter* (or *range*) can be from A-Z or any other range, like **G-M**.
* You can also use commas for specific undefined variable first letters.
* Variables [DIMensioned](DIMensioned.md) as another variable type or that use type suffixes are not affected by DEFSNG.
* DEFSNG sets the [type](type.md) of all variable names with the starting letter(s) or letter ranges when encountered in the progression of the program (even in conditional statement blocks not executed and subsequent [SUB](SUB.md) procedures).
* **Warning: QBasic keyword names cannot be used as numerical variable names with or without the type suffix.**

### QBasic/QuickBASIC

* QBasic's IDE would add DEF statements before any [SUB](SUB.md) or [FUNCTION](FUNCTION.md). QB64 (like QBasic) will change all variable types in subsequent sub-procedures to that default variable type without giving a ["Parameter Type Mismatch"]("Parameter Type Mismatch".md) warning or adding DEF statement to subsequent procedures. If you do not want that to occur, either remove that DEF statement or add the proper DEF type statements to subsequent procedures. May also affect [$INCLUDE]($INCLUDE.md) procedures.

  

## Examples

``` DEFSNG A, F-H, M  'With the above, all variables with names starting with A, F, G, H and M 'will be of type SINGLE, unless they have a type suffix 'indicating another type or they are [dimensioned](dimensioned.md) differently  
```

  

## See also

* [DEFDBL](DEFDBL.md), [DEFLNG](DEFLNG.md), [DEFINT](DEFINT.md), [DEFSTR](DEFSTR.md)
* [_DEFINE](_DEFINE.md)

  
