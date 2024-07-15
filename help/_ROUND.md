# _ROUND

The _ROUND function rounds to the closest even [INTEGER](INTEGER.md), [LONG](LONG.md) or [_INTEGER64](_INTEGER64.md) numerical value.

  

## Syntax

*value* = _ROUND(*number*)
  

## Description

* Can round [SINGLE](SINGLE.md), [DOUBLE](DOUBLE.md) or [_FLOAT](_FLOAT.md) floating decimal point parameter values.
* Can be used when numerical values exceed the limits of [CINT](CINT.md) or [CLNG](CLNG.md).
* Rounding is done to the closest even [integer](integer.md) value. The same as QBasic does with [integer division](integer division.md).

  

*Example:* Displays how QB64 rounds to the closest even integer value.

``` [PRINT](PRINT.md) _ROUND(0.5) [PRINT](PRINT.md) _ROUND(1.5) [PRINT](PRINT.md) _ROUND(2.5) [PRINT](PRINT.md) _ROUND(3.5) [PRINT](PRINT.md) _ROUND(4.5) [PRINT](PRINT.md) _ROUND(5.5)  
```

``` 0 2 2 4 4 6  
```

  

## See also

* [INT](INT.md), [CINT](CINT.md)
* [FIX](FIX.md), [CLNG](CLNG.md)

  
