# DIM

The DIM statement is used to declare a variable or a list of variables as a specified data type or to dimension [$STATIC]($STATIC.md) or [$DYNAMIC]($DYNAMIC.md) [arrays](arrays.md).

  

## Syntax

*To declare variables:*
DIM  [AS](AS.md) [[[_UNSIGNED] *type*}] [, *variable2*...
*To declare arrays:*
DIM  [AS](, *variable2*...
*To declare arrays:*
DIM  [AS.md) [[[_UNSIGNED] *type*}] [, *variable2*...]
 ***QB64** Alternative Syntax:*
DIM [[[SHARED] [AS](AS.md) [[[_UNSIGNED] *type* *variable* [, *variable2*...]
DIM [[[SHARED] [AS](AS.md) [[[_UNSIGNED] *type* *array([lowest% [TO](lowest% [TO.md)] highest%])* [, *array2(elements)*...]
  

## Description

* Sets the [INTEGER](INTEGER.md) range of elements (indices) of a [STATIC](STATIC.md) array. If only one number is used, the [lowest boundary](lowest boundary.md) is 0 by default.
* When used before an array is dimensioned, **[OPTION BASE](OPTION BASE.md) 1** can set the default [lower boundary](lower boundary.md) of arrays to 1.
* DIM [SHARED](SHARED.md) shares variable values with sub-procedures without passing the value in a parameter.
* Use the [AS](AS.md) keyword to define a variable or array *type* [AS](AS.md)...
	+ [INTEGER](INTEGER.md) (or use variable suffix **%**)
	+ [LONG](LONG.md) (or use variable suffix **&**)
	+ [SINGLE](SINGLE.md) (or use variable suffix **!** or no suffix by default)
	+ [DOUBLE](DOUBLE.md) (or use variable suffix **#**)
	+ [STRING](STRING.md) (or use variable suffix **$**). An AS multiplier can set the string [length](length.md). Ex: DIM *variable* AS STRING * 8
* **QB64** variable types:
	+ [_BIT](_BIT.md) (or use variable suffix **`**). An AS multiplier can be used for multiple bits. Ex: DIM *variable* AS _BIT * 8
	+ [_BYTE](_BYTE.md) (or use variable suffix **%%**)
	+ [_INTEGER64](_INTEGER64.md) (or use variable suffix **&&**)
	+ [_FLOAT](_FLOAT.md) (or use variable suffix **##**)
	+ [_OFFSET](_OFFSET.md) (or use variable suffix **%&**)
	+ DIM AS [_MEM](_MEM.md) (the _MEM type has no type suffix).
* **Note: When a variable has not been defined or has no type suffix, the type defaults to [SINGLE](SINGLE.md).**
* When using the **AS type variable-list** syntax, type symbols cannot be used.
* When the [$DYNAMIC]($DYNAMIC.md) metacommand or [REDIM](REDIM.md) is used, array element sizes are changeable (not [$STATIC]($STATIC.md)).
* Use [REDIM](REDIM.md) instead of DIM to dimension arrays as dynamic without the [$DYNAMIC]($DYNAMIC.md) metacommand.
* Use [REDIM](REDIM.md) [_PRESERVE](_PRESERVE.md) in **QB64** to retain previous array values when changing the size of an array.
* [REDIM](REDIM.md) [_PRESERVE](_PRESERVE.md) cannot change the number of array dimensions. An [error](error.md) will occur.
* [Dynamic](Dynamic.md) arrays MUST be [REDIMensioned](REDIMensioned.md) if [ERASE](ERASE.md) or [CLEAR](CLEAR.md) are used, as the arrays are completely removed.
* All numerical variable types **except** [SINGLE](SINGLE.md), [DOUBLE](DOUBLE.md) and [_FLOAT](_FLOAT.md) can be dimensioned as [_UNSIGNED](_UNSIGNED.md) (suffix ~) or positive only.
* **NOTE:** Many QBasic keyword variable names can be used with a [STRING](STRING.md) suffix ($). You cannot use them without the suffix, use a numerical suffix or use *DIM, [REDIM](REDIM.md), [_DEFINE](_DEFINE.md), [BYVAL](BYVAL.md) or [TYPE](TYPE.md) variable [AS](AS.md)* statements. **Although possible, it's recommended to avoid using reserved names.**
* **Warning: Do not use negative array upper bound index values, or OS access or "Out of Memory" [errors](errors.md) will occur.**

  

## Examples

*Example 1:* Defines Qt variable as a one byte fixed length string.

```  DIM Qt [AS](AS.md) [STRING](STRING.md) * 1  
```

*Example 2:* Dimensions and types an array.

```  DIM Image(2000) [AS](AS.md) [INTEGER](INTEGER.md)  
```

*Example 3:* Dimensions array with an [INTEGER](INTEGER.md) type suffix.

```  DIM Image%(2000)  
```

*Example 4:* Dimensions a range of [array](array.md) elements as [SHARED](SHARED.md) integers.

```  DIM [SHARED](SHARED.md) Image(1 [TO](TO.md) 1000) [AS](AS.md) [INTEGER](INTEGER.md)  
```

*Example 5:* Dimensions variable as an [array](array.md) of 8 elements of the type [UNSIGNED](UNSIGNED.md) BIT.

```  DIM bit(8) [AS](AS.md) [_UNSIGNED](_UNSIGNED.md) [_BIT](_BIT.md)  
```

  

*Example 6:* QB64 is more flexible than QBasic when it comes to "Duplicate Definition" errors. The following code does not error:

``` x = 1 'x is a [SINGLE](SINGLE.md) variable [PRINT](PRINT.md) x DIM x [AS](AS.md) [LONG](LONG.md) [PRINT](PRINT.md) x  
```

*Explanation:* The [SINGLE](SINGLE.md) variable can be differentiated from the [LONG](LONG.md) x variable by using suffixes like x! or x& in later code.
  

*Example 7:* The following code will create a "Name already in use" **status error** in QB64 when the variable types are the same.

``` x = 1 'x is a [SINGLE](SINGLE.md) variable [PRINT](PRINT.md) x DIM x [AS](AS.md) [SINGLE](SINGLE.md) [PRINT](PRINT.md) x  
```

*Explanation:* QB64 gives an error because the creation of the new variable would make referring to the existing one impossible.
  

*Example 8:* Using QB64's alternative syntax to declare multiple variables/arrays of the same type.

``` DIM [AS](AS.md) [LONG](LONG.md) w, h, id, weight, index 'all of these variables are created as type LONG DIM [AS](AS.md) [SINGLE](SINGLE.md) x, y, z               'all of these variables are created as type SINGLE  
```

  

## See also

* [_DEFINE](_DEFINE.md), [_PRESERVE](_PRESERVE.md)
* [REDIM](REDIM.md), [TYPE](TYPE.md)
* [ERASE](ERASE.md), [CLEAR](CLEAR.md)
* [DEFINT](DEFINT.md), [DEFSNG](DEFSNG.md), [DEFLNG](DEFLNG.md), [DEFDBL](DEFDBL.md), [DEFSTR](DEFSTR.md)
* [Mathematical Operations](Mathematical Operations.md), [Arrays](Arrays.md)
* [Variable Types](Variable Types.md)
* [OPTION _EXPLICIT](OPTION _EXPLICIT.md)

  
