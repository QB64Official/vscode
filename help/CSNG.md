# CSNG

CSNG converts a numerical value to the closest [SINGLE](SINGLE.md)-precision number.

  

## Syntax

*singleValue!* = CSNG(*expression*)
  

## Parameters

* *expression* is any [TYPE](TYPE.md) of literal or variable numerical value or mathematical calculation.

  

## Description

* Returns the closest [SINGLE](SINGLE.md) decimal point value.
* Also used to define a value as [SINGLE](SINGLE.md)-precision up to 7 decimals.

  

## Examples

```  A# = 975.3421222#  PRINT A#, CSNG(A#)  
```

``` 975.3421222      975.3421  
```

  

## See also

* [CDBL](CDBL.md), [CLNG](CLNG.md)
* [CINT](CINT.md), [INT](INT.md)
* [_ROUND](_ROUND.md)

  
