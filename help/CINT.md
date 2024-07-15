# CINT

The CINT function rounds decimal point numbers up or down to the nearest [INTEGER](INTEGER.md) value.

  

## Syntax

*value%* = CINT(*expression*)
  

## Parameters

* *expression* is any [TYPE](TYPE.md) of literal or variable numerical value or mathematical calculation.

  

## Description

* Values greater than .5 are rounded up. Values lower than .5 are rounded down.
* *Warning:* Since CINT is used for integer values, the input values cannot exceed 32767 to -32768!
* Use [CLNG](CLNG.md) for [LONG](LONG.md) integer values exceeding [INTEGER](INTEGER.md) limitations.
* Note: When decimal point values are given to BASIC functions requiring [INTEGERs](INTEGERs.md) the value will be CINTed.

  

## Examples

*Example:* Shows how CINT rounds values up or down as in "bankers' rounding".

``` a% = CINT(1.49): b% = CINT(1.50): c = 11.5 [COLOR](COLOR.md) c: [PRINT](PRINT.md) a%, b%, c  
```

``` 1       2       11.5  
```

  

## See also

* [_ROUND](_ROUND.md), [_CEIL](_CEIL.md)
* [CLNG](CLNG.md), [CSNG](CSNG.md), [CDBL](CDBL.md)
* [INT](INT.md), [FIX](FIX.md)

  
