# FIX

The FIX function rounds a numerical value to the next whole number closest to zero.

  

## Syntax

*result* = FIX(*expression*)
  

## Parameters

* *expression* is any [type](type.md) of literal or variable numerical value or mathematical calculation.

  

## Description

* FIX effectively truncates (removes) the fractional part of *expression*, returning the integer part.
	+ This means that FIX rounds down for positive values and up for negative values.
* Use [INT](INT.md) to round down negative values. Positive values are rounded down by both.

  

## Examples

*Example 1:* Showing the behavior of FIX with positive and negative decimal point values.

```  PRINT FIX(2.5)  PRINT FIX(-2.5)  
```

``` 2 -2  
```

  

*Example 2:* The NORMAL arithmetic method (round half up) can be achieved using the function in the example code below:

``` [PRINT](PRINT.md) MATHROUND(0.5) [PRINT](PRINT.md) MATHROUND(1.5) [PRINT](PRINT.md) MATHROUND(2.5) [PRINT](PRINT.md) MATHROUND(3.5) [PRINT](PRINT.md) MATHROUND(4.5) [PRINT](PRINT.md) MATHROUND(5.5)  [FUNCTION](FUNCTION.md) MATHROUND(n)     MATHROUND = FIX(n + 0.5 * [SGN](SGN.md)(n)) [END FUNCTION](END FUNCTION.md)  
```

``` 1 2 3 4 5 6  
```

  

## See also

* [_CEIL](_CEIL.md)
* [INT](INT.md), [CINT](CINT.md)
* [CLNG](CLNG.md), [_ROUND](_ROUND.md)
* [MOD](MOD.md), [Integer Division](Integer Division.md)
* [Normal division](Normal division.md)

  
