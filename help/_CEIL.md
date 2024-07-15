# _CEIL

The _CEIL function rounds a numeric value up to the next whole number or [INTEGER](INTEGER.md) value.

  

## Syntax

*result* = _CEIL(*expression*)
  

* _CEIL returns he smallest integral value that is greater than the numerical *expression* (as a floating-point value).
* This means that _CEIL rounds up for both positive and negative numbers.

  

## Availability

* **QB64 v1.0 and up**
* **QB64-PE all versions**

  

## Examples

*Example:* Displaying the rounding behavior of [INT](INT.md), [CINT](CINT.md) and [FIX](FIX.md) vs _CEIL.

``` [PRINT](PRINT.md) [INT](INT.md)(2.5), [CINT](CINT.md)(2.5), [FIX](FIX.md)(2.5), _CEIL(2.5) [PRINT](PRINT.md) [INT](INT.md)(-2.5), [CINT](CINT.md)(-2.5), [FIX](FIX.md)(-2.5), _CEIL(-2.5)  
```

```  2        2         2         3 -3       -2        -2        -2  
```

  

## See also

* [INT](INT.md), [FIX](FIX.md)
* [CINT](CINT.md), [CLNG](CLNG.md),
* [CSNG](CSNG.md), [CDBL](CDBL.md)
* [_ROUND](_ROUND.md)

  
