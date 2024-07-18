## $DYNAMIC
---

### The $DYNAMIC metacommand allows the creation of dynamic (resizable) arrays.

#### SYNTAX

`{ REM | ' } $DYNAMIC`

#### DESCRIPTION
* QBasic metacommands require [REM](./REM.md) or apostrophe (') before them and are normally placed at the start of the main module.
* Dynamic arrays can be resized using [REDIM](./REDIM.md) . The array's type cannot be changed.
* All data in the array will be lost when REDIMensioned except when [_PRESERVE](./_PRESERVE.md) is used.
* [REDIM](./REDIM.md) [_PRESERVE](./_PRESERVE.md) can preserve and may move the previous array data when the array boundaries change.
* [_PRESERVE](./_PRESERVE.md) allows the upper and lower boundaries of an array to be changed. The number of dimensions cannot change.
* $DYNAMIC arrays must be REDIMensioned if [ERASE](./ERASE.md) or [CLEAR](./CLEAR.md) are used as the arrays are removed completely.


#### EXAMPLES
##### Example: REDIMing a $DYNAMIC array using _PRESERVE to retain previous array values.
```vb
REM $DYNAMIC             'create dynamic arrays only
DIM array(10)            'create array with 11 elements
FOR i = 0 TO 10
 array(i) = i: PRINT array(i); 'set and display element values
NEXT
PRINT
REDIM _PRESERVE array(10 TO 20)
FOR i = 10 TO 20
 PRINT array(i);
NEXT
END
```
  
```vb
0  1  2  3  4  5  6  7  8  9  10

0  1  2  3  4  5  6  7  8  9  10
```
  


#### SEE ALSO
* $[STATIC](./STATIC.md) , $INCLUDE
* [DIM](./DIM.md) , [REDIM](./REDIM.md) , [_DEFINE](./_DEFINE.md)
* [STATIC](./STATIC.md)
* [ERASE](./ERASE.md) , [CLEAR](./CLEAR.md)
* Arrays , Metacommand
