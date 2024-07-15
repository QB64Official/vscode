# ABS

The ABS function returns the unsigned numerical value of a variable or literal value.

  

## Syntax

*positive* = ABS(*numericalValue*)
  

## Description

* ABS always returns positive numerical values. The value can be any numerical type.
* Often used to keep a value positive when necessary in a program.
* Use [SGN](SGN.md) to determine a value's sign when necessary.
* **QB64** allows programs to return only positive [_UNSIGNED](_UNSIGNED.md) variable values using a [DIM](DIM.md) or [_DEFINE](_DEFINE.md) statement.

  

## Examples

*Example:* Finding the absolute value of positive and negative numerical values.

``` a = -6 b = -7 c = 8 [IF](IF.md) a < 0 [THEN](THEN.md) a = ABS(a) b = ABS(b) c = ABS(c) [PRINT](PRINT.md) a, b, c  
```

```  6        7        8  
```

  

## See also

* [SGN](SGN.md), [DIM](DIM.md)
* [_UNSIGNED](_UNSIGNED.md)
* [_DEFINE](_DEFINE.md)
* [Mathematical Operations](Mathematical Operations.md)

  
