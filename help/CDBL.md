# CDBL

CDBL converts a value to the closest [DOUBLE](DOUBLE.md)-precision value.

  

## Syntax

*doubleValue#* = CDBL(*expression*)
  

## Parameters

* *expression* is any [TYPE](TYPE.md) of literal or variable numerical value or mathematical calculation.

  

## Description

* Rounds to the closest [DOUBLE](DOUBLE.md) floating decimal point value.
* Also can be used to define a value as [DOUBLE](DOUBLE.md)-precision up to 15 decimals.

  

## Examples

*Example:* Prints a double-precision version of the single-precision value stored in the variable named A.

```  A = 454.67  [PRINT](PRINT.md) A; CDBL(A)  
```

```  454.67 454.6700134277344  
```

The last 11 numbers in the double-precision number change the value in this example, since A was previously defined to only two-decimal place accuracy.
  

## See also

* [CINT](CINT.md), [CLNG](CLNG.md)
* [CSNG](CSNG.md), [_ROUND](_ROUND.md)

  
