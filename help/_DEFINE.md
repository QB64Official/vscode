# _DEFINE

_DEFINE defines a set of variable names according to their first character as a specified data type.

  

## Syntax

_DEFINE *letter*[*-range*, ...] [AS](AS.md) [[[_UNSIGNED] data[type](type.md)
  

## Parameters

* Variable start *letter range* is in the form firstletter-endingletter (like A-C) or just a single letter.
* *Data types*: [INTEGER](INTEGER.md), [SINGLE](SINGLE.md), [DOUBLE](DOUBLE.md), [LONG](LONG.md), [STRING](STRING.md), [_BIT](_BIT.md), [_BYTE](_BYTE.md), [_INTEGER64](_INTEGER64.md), [_FLOAT](_FLOAT.md), [_OFFSET](_OFFSET.md), [_MEM](_MEM.md)
* Can also use the [_UNSIGNED](_UNSIGNED.md) definition for positive whole [INTEGER](INTEGER.md) type numerical values.

  

## Description

* **When a variable has not been defined or has no type suffix, the value defaults to a [SINGLE](SINGLE.md) precision floating point value.**
* _DEFINE sets the [type](type.md) of all variable names with the starting letter(s) or letter ranges when encountered in the progression of the program (even in conditional statement blocks not executed and subsequent [SUB](SUB.md) procedures).
* **NOTE: Many QBasic keyword variable names CAN be used with a [STRING](STRING.md) suffix ($)! You cannot use them without the suffix, use a numerical suffix or use [DIM](DIM.md), [REDIM](REDIM.md), _DEFINE, [BYVAL](BYVAL.md) or [TYPE](TYPE.md) variable [AS](AS.md) statements.**
* **QBasic's IDE** added DEF statements before any [SUB](SUB.md) or [FUNCTION](FUNCTION.md). **QB64** (like QB) will change all variable types in subsequent sub-procedures to that default variable type without giving a ["Parameter Type Mismatch"]("Parameter Type Mismatch".md) warning or adding the proper DEF statement to subsequent procedures. If you do not want that to occur, either remove that DEF statement or add the proper DEF type statements to subsequent procedures.
* May also affect [$INCLUDE]($INCLUDE.md) procedures.

  

## Examples

*Example:* Defining variables that start with the letters A, B, C or F as unsigned integers, including the *Add2* [FUNCTION](FUNCTION.md).

``` _DEFINE A-C, F [AS](AS.md) [_UNSIGNED](_UNSIGNED.md) [INTEGER](INTEGER.md)  [PRINT](PRINT.md) Add2(-1.1, -2.2)  [END](END.md)  [FUNCTION](FUNCTION.md) Add2 (one, two)     Add2 = one + two [END FUNCTION](END FUNCTION.md)  
```

``` 65533  
```

*Explanation:* Unsigned integers can only return positive values while ordinary [integers](integers.md) can also return negative values.
  

## See also

* [DEFSTR](DEFSTR.md), [DEFLNG](DEFLNG.md), [DEFINT](DEFINT.md), [DEFSNG](DEFSNG.md), [DEFDBL](DEFDBL.md)
* [DIM](DIM.md), [REDIM](REDIM.md)
* [COMMON](COMMON.md), [SHARED](SHARED.md)
* [_UNSIGNED](_UNSIGNED.md)

  
