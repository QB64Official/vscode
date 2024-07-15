# OPTION BASE

The OPTION BASE statement is used to set the default lower bound of arrays.

  

## Syntax

OPTION BASE {0|1}
  

## Description

* This statement affects array declarations where the lower bound of a dimension is not specified.
* When used, OPTION BASE must come before any array declarations ([DIM](DIM.md)) to be affected.
* By default, the lower bound for arrays is zero, and may be changed to one using the statement.
* Otherwise, arrays will be dimensioned from element 0 if you DIM just the upper bounds.
* You can also set other array boundaries by using [TO](TO.md) in the DIM declaration such as DIM array(5 TO 10)

  

## Examples

*Example 1:* Set the default lower bound for array declarations to one.

``` OPTION BASE 1  ' Declare a 5-element one-dimensional array with element indexes of one through five. [DIM](DIM.md) array(5) [AS](AS.md) [INTEGER](INTEGER.md)  [PRINT](PRINT.md) [LBOUND](LBOUND.md)(array)  
```

```  1 
```

  

*Example 2:* Set the default lower bound for array declarations to zero.

``` OPTION BASE 0  ' Declare an 18-element two-dimensional array with element indexes of zero through two ' for the first dimension, and 10 through 15 for the second dimension. [DIM](DIM.md) array(2, 10 to 15) [AS](AS.md) [INTEGER](INTEGER.md)  [PRINT](PRINT.md) [LBOUND](LBOUND.md)(array, 1) [PRINT](PRINT.md) [LBOUND](LBOUND.md)(array, 2)  
```

```  0  10  
```

  

## See also

* [Arrays](Arrays.md), [LBOUND](LBOUND.md), [UBOUND](UBOUND.md)
* [DIM](DIM.md), [REDIM](REDIM.md), [STATIC](STATIC.md), [COMMON](COMMON.md)

  
