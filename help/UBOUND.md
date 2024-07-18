## UBOUND
---

### The UBOUND function returns the largest valid index (upper bound) of an array dimension.

#### SYNTAX

`result% = UBOUND (arrayName[, dimension%])`

#### DESCRIPTION
* arrayName specifies the name of the array.
* dimension% specifies the dimension number, starting with 1 for the first dimension.
	* If omitted, dimension% is assumed to be 1 .
	* If dimension% is less than 1 or is greater than the number of dimensions, a subscript out of range error occurs.
* [UBOUND](./UBOUND.md) , along with [LBOUND](./LBOUND.md) , is used to determine the range of valid indexes of an array.


#### EXAMPLES
```vb
DIM myArray(5) AS INTEGER
DIM myOtherArray(1 to 2, 3 to 4) AS INTEGER

PRINT UBOUND(myArray)
PRINT UBOUND(myOtherArray, 2)
```
  
```vb
5
4
```
  


#### SEE ALSO
* Arrays , [LBOUND](./LBOUND.md)
* [DIM](./DIM.md) , [COMMON](./COMMON.md) , [STATIC](./STATIC.md) , [SHARED](./SHARED.md)
