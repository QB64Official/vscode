# SGN

The **SGN** function returns the sign of a number value.

  

## Syntax

sign% = SGN(value)
  

* Returns -1 when a sign is negative, 0 when a value is zero, or 1 when a value is positive.
* Function is used to store the original sign of a number.
* **QB64** allows programs to return only [_UNSIGNED](_UNSIGNED.md) variable values using a [_DEFINE](_DEFINE.md) statement.

  

*Example:* Checking and changing negative values to positive ones.

``` n = -100 [IF](IF.md) SGN(n) = -1 THEN n = [ABS](ABS.md)(n) PRINT n  
```

```  100  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [ABS](ABS.md)
* [_DEFINE](_DEFINE.md), [_UNSIGNED](_UNSIGNED.md)
* [Mathematical Operations](Mathematical Operations.md)

  
