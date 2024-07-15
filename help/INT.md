# INT

The INT function rounds a numeric value down to the next whole number.

  

## Syntax

*result* = INT(*expression*)
  

## Parameters

* *expression* is any [type](type.md) of literal or variable numerical value or mathematical calculation.

  

## Description

* INT returns the first whole number [INTEGER](INTEGER.md) that is less than the *expression* value.
* This means that INT rounds down for both positive and negative numbers.
* Use [FIX](FIX.md) to round negative values up. It is identical to INT for positive values.

  

## Examples

*Example:* Displaying the rounding behavior of INT.

``` PRINT INT(2.5) PRINT INT(-2.5)  
```

```  2 -3  
```

  

## See also

* [CINT](CINT.md), [CLNG](CLNG.md), [FIX](FIX.md)
* [CSNG](CSNG.md), [CDBL](CDBL.md)
* [_ROUND](_ROUND.md), [_CEIL](_CEIL.md)

  
