# CLNG

The CLNG function rounds decimal point numbers up or down to the nearest [LONG](LONG.md) integer value.

  

## Syntax

*value&* = CLNG(*expression*)
  

## Parameters

* *expression* is any [TYPE](TYPE.md) of literal or variable numerical value or mathematical calculation.

  

## Description

* Used when integer values exceed 32767 or are less than -32768.
* Values greater than .5 are rounded up; .5 or lower are rounded down.
* CLNG can return normal [INTEGER](INTEGER.md) values under 32768 too.
* Use it when a number could exceed normal [INTEGER](INTEGER.md) number limits.

  

## Examples

```  a& = CLNG(2345678.51)  [PRINT](PRINT.md)  
```

```  2345679  
```

  

## See also

* [CINT](CINT.md), [INT](INT.md)
* [CSNG](CSNG.md), [CDBL](CDBL.md)
* [_ROUND](_ROUND.md)

  
