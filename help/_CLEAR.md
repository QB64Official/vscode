# CLEAR

The CLEAR statement clears all variable and array element values in a program.

  

## Syntax

CLEAR [, *ignored&* , *ignored&*]
  

## Description

* All parameters are optional and ignored by **QB64**.
* Normally used to clear all program variable and [array](array.md) values where numerical values become zero and string values become empty ("").
* It does not clear [constant](constant.md) values.
* Closes all opened files.
* [$DYNAMIC]($DYNAMIC.md) or [REDIM](REDIM.md) arrays will need to be [redimensioned](redimensioned.md) or an [error](error.md) will occur when referenced because they are removed.

  

## Examples

*Example:* Using CLEAR to clear array elements from [static](static.md) arrays or arrays created using [DIM](DIM.md).

``` [CLS](CLS.md) [DIM](DIM.md) array(10)   'create a [$STATIC]($STATIC.md) array array(5) = 23  [PRINT](PRINT.md) array(5)  CLEAR  [PRINT](PRINT.md) array(5)  
```

*Note:* If you change DIM to REDIM a "Subscript out of range" error will occur because a [$DYNAMIC]($DYNAMIC.md) array is removed by CLEAR.
  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [ERASE](ERASE.md)
* [REDIM](REDIM.md), [_PRESERVE](_PRESERVE.md)
* [Arrays](Arrays.md)

  
