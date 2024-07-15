# $STATIC

The $STATIC [metacommand](metacommand.md) allows the creation of static (unresizable) arrays.

  

## Syntax

{[REM](REM.md) | [']('.md) } $STATIC
  

## Description

* QBasic [Metacommands](Metacommands.md) require a REM or apostrophy (') before them and are normally placed at the start of the main module.
* Static arrays cannot be resized. If a variable is used to size any array, it becomes [$DYNAMIC]($DYNAMIC.md).
* A [REDIM](REDIM.md) statement has no effect on $STATIC arrays except perhaps a [duplicate definition error](duplicate definition error.md) at the [REDIM](REDIM.md) statement.
* The array's type cannot be changed once [DIM](DIM.md) and a literal value sets the dimensions and element size.
* $STATIC defined program [arrays](arrays.md) cannot be [re-sized](re-sized.md) or use [_PRESERVE](_PRESERVE.md).

  

## Examples

*Example:* When a variable is used, the array can be resized despite $STATIC. The array becomes [$DYNAMIC]($DYNAMIC.md).

``` '$STATIC  [INPUT](INPUT.md) "Enter array size: ", size [DIM](DIM.md) array(size)   'using an actual number instead of the variable will create an error!  [REDIM](REDIM.md) array(2 * size)  [PRINT](PRINT.md) [UBOUND](UBOUND.md)(array)  
```

*Note:* [DIM](DIM.md) using a literal numerical size will create a Duplicate definition error.
  

## See also

* [$DYNAMIC]($DYNAMIC.md), [STATIC](STATIC.md)
* [Arrays](Arrays.md), [Metacommand](Metacommand.md)

  
