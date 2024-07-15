# DEFSTR

The DEFSTR statement defines all variables with names starting with the specified letter (or letter range) AS [STRING](STRING.md) variables instead of the [SINGLE](SINGLE.md) type default.

  

## Syntax

DEFSTR *letter*[-*range*], *letter2*[-*range2*], [...]
### Legacy support

* **DEF** statements ([DEFDBL](DEFDBL.md), [DEFSNG](DEFSNG.md), [DEFLNG](DEFLNG.md), [DEFINT](DEFINT.md), DEFSTR) were used when storage space was a concern in older computers, as their usage could save up typing. Instead of DIM a AS STRING, a2 AS STRING, a3 AS STRING, simply having DEFSTR A in the code before using variables starting with letter **A** would do the same job.
* For clarity, it is recommended to declare variables with meaningful names.

  

## Description

* *letter* (or *range*) can be from A-Z or any other range, like **G-M**.
* You can also use commas for specific undefined variable first letters.
* Variables [DIMensioned](DIMensioned.md) as another variable type or that use type suffixes are not affected by DEFSTR.
* DEFSTR sets the [type](type.md) of all variable names with the starting letter(s) or letter ranges when encountered in the progression of the program (even in conditional statement blocks not executed and subsequent [SUB](SUB.md) procedures).
* **Warning: QBasic keyword names can only be used as string variable names when they are followed by the string type suffix ($).**

### QBasic/QuickBASIC

* QBasic's IDE would add DEF statements before any [SUB](SUB.md) or [FUNCTION](FUNCTION.md). QB64 (like QBasic) will change all variable types in subsequent sub-procedures to that default variable type without giving a ["Parameter Type Mismatch"]("Parameter Type Mismatch".md) warning or adding DEF statement to subsequent procedures. If you do not want that to occur, either remove that DEF statement or add the proper DEF type statements to subsequent procedures. May also affect [$INCLUDE]($INCLUDE.md) procedures.

  

## Examples

``` DEFSTR A, F-H, M  'With the above, all variables with names starting with A, F, G, H and M 'will be of type STRING, unless they have a type suffix 'indicating another type or they are [dimensioned](dimensioned.md) differently  
```

  

## See also

* [DEFSNG](DEFSNG.md), [DEFLNG](DEFLNG.md), [DEFINT](DEFINT.md), [DEFDBL](DEFDBL.md)
* [_DEFINE](_DEFINE.md)

  
