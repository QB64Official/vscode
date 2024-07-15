# UBOUND

The UBOUND function returns the largest valid index (upper bound) of an array dimension.

  

## Syntax

*result%* = UBOUND(arrayName[, dimension%])
  

## Description

* *arrayName* specifies the name of the array.

* *dimension%* specifies the dimension number, starting with **1** for the first dimension.
	+ If omitted, *dimension%* is assumed to be **1**.
	+ If *dimension%* is less than **1** or is greater than the number of dimensions, a [subscript out of range](subscript out of range.md) error occurs.

* UBOUND, along with [LBOUND](LBOUND.md), is used to determine the range of valid indexes of an array.

  

## Examples

``` [DIM](DIM.md) myArray(5) [AS](AS.md) [INTEGER](INTEGER.md) [DIM](DIM.md) myOtherArray(1 to 2, 3 to 4) [AS](AS.md) [INTEGER](INTEGER.md)  [PRINT](PRINT.md) UBOUND(myArray) [PRINT](PRINT.md) UBOUND(myOtherArray, 2)  
```

```  5  4  
```

  

## See also

* [Arrays](Arrays.md), [LBOUND](LBOUND.md)
* [DIM](DIM.md), [COMMON](COMMON.md), [STATIC](STATIC.md), [SHARED](SHARED.md)

  
