# _PI

The _PI function returns **π** as a [_FLOAT](_FLOAT.md) value with an optional multiplier parameter.

  

## Syntax

*circumference* = _PI[(*multiplier*)]
  

## Parameters

* Optional *multiplier* (*2 * radius* in above syntax) allows multiplication of the π value.

  

## Description

* Function can be used in to supply π or multiples in a program.
* Accuracy is determined by the return variable type [AS](AS.md) [SINGLE](SINGLE.md), [DOUBLE](DOUBLE.md) or [_FLOAT](_FLOAT.md).
* The π value can also be derived using 4 * [ATN](ATN.md)(1) for a [SINGLE](SINGLE.md) value.

  

## Examples

*Example:* Calculating the area of a circle using a [SINGLE](SINGLE.md) variable in this case.

``` radius = 5 circlearea = _PI(radius ^ 2) PRINT circlearea  
```

```  78.53982  
```

  

## See also

* [_ATAN2](_ATAN2.md), [TAN](TAN.md)
* [ATN](ATN.md)
* [SIN](SIN.md), [COS](COS.md)

  
