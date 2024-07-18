## LBOUND
---

### The LBOUND function returns the smallest valid index (lower bound) of an array dimension.

#### SYNTAX

`result% = LBOUND ( arrayName [, dimension% ])`

#### DESCRIPTION
* arrayName specifies the name of the array.
* dimension% specifies the dimension number, starting with 1 for the first dimension.
	* If omitted, dimension% is assumed to be 1 .
	* If dimension% is less than 1 or is greater than the number of dimensions, a subscript out of range error occurs.
* [LBOUND](./LBOUND.md) and [UBOUND](./UBOUND.md) are used to determine the range of valid indexes of an array.


#### EXAMPLES
```vb
DIM myArray(5) AS INTEGER
DIM myOtherArray(1 to 2, 3 to 4) AS INTEGER

PRINT LBOUND(myArray)
PRINT LBOUND(myOtherArray, 2)
```
  
```vb
0
3
```
  


#### SEE ALSO
* Arrays , [UBOUND](./UBOUND.md)
* [DIM](./DIM.md) , [COMMON](./COMMON.md) , [STATIC](./STATIC.md) , [SHARED](./SHARED.md)
