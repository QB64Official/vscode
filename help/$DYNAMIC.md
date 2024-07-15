# $DYNAMIC

The $DYNAMIC [metacommand](metacommand.md) allows the creation of dynamic (resizable) arrays.

  

## Syntax

{[REM](REM.md) | [']('.md) } $DYNAMIC
  

## Description

* QBasic [metacommands](metacommands.md) require [REM](REM.md) or [apostrophe](apostrophe.md) (') before them and are normally placed at the start of the main module.
* Dynamic arrays can be resized using [REDIM](REDIM.md). The array's type cannot be changed.
* All data in the array will be lost when [REDIMensioned](REDIMensioned.md) except when [_PRESERVE](_PRESERVE.md) is used.
* [REDIM](REDIM.md) [_PRESERVE](_PRESERVE.md) can preserve and may move the previous array data when the array boundaries change.
* [_PRESERVE](_PRESERVE.md) allows the [upper](upper.md) and [lower](lower.md) boundaries of an array to be changed. The number of dimensions cannot change.
* $DYNAMIC arrays must be [REDIMensioned](REDIMensioned.md) if [ERASE](ERASE.md) or [CLEAR](CLEAR.md) are used as the arrays are removed completely.

  

## Examples

*Example:* [REDIMing](REDIMing.md) a $DYNAMIC array using [_PRESERVE](_PRESERVE.md) to retain previous array values.

``` [REM](REM.md) $DYNAMIC             'create dynamic arrays only [DIM](DIM.md) array(10)            'create array with 11 elements [FOR](FOR.md) i = 0 [TO](TO.md) 10   array(i) = i: [PRINT](PRINT.md) array(i); 'set and display element values [NEXT](NEXT.md) [PRINT](PRINT.md) [REDIM](REDIM.md) [_PRESERVE](_PRESERVE.md) array(10 [TO](TO.md) 20) [FOR](FOR.md) i = 10 [TO](TO.md) 20   [PRINT](PRINT.md) array(i); [NEXT](NEXT.md) [END](END.md)  
```

``` 0  1  2  3  4  5  6  7  8  9  10  0  1  2  3  4  5  6  7  8  9  10  
```

  

## See also

* [$STATIC]($STATIC.md), [$INCLUDE]($INCLUDE.md)
* [DIM](DIM.md), [REDIM](REDIM.md), [_DEFINE](_DEFINE.md)
* [STATIC](STATIC.md)
* [ERASE](ERASE.md), [CLEAR](CLEAR.md)
* [Arrays](Arrays.md), [Metacommand](Metacommand.md)

  
