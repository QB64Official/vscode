# REDIM

A REDIM statement can re-dimension one [dynamic](dynamic.md)(flexible) [array](array.md) or a [comma](comma.md) separated list of arrays.

  

## Syntax

REDIM low_element[[[TO *upper_element*, ...]}) [[[AS [Type]([[AS [Type.md)]
  

## Description

* Can change the number of elements in an array (the present array data is lost unless [_PRESERVE](_PRESERVE.md) is used).
* Dynamic array elements can also be sized or resized by a program user's entry.
* The [_PRESERVE](_PRESERVE.md) option also allows the *element* range values to be moved upward or downward in **QB64 only!**
* *Array* is the name of the array to be dimensioned or re-dimensioned.
* *elements* is the number of elements the array should hold. Use the optional [TO](TO.md) *elements2* to set a range.
* **Always use the same array [TYPE](TYPE.md) suffix ([AS](AS.md) type) or a new array type with the same name may be created.**
* REDIM cannot change [$STATIC]($STATIC.md) arrays created with a [DIM](DIM.md) statement unless the [$DYNAMIC]($DYNAMIC.md) [Metacommand](Metacommand.md) is used!
* To create a dynamic array use the [$DYNAMIC]($DYNAMIC.md) metacommand or use REDIM rather than [DIM](DIM.md) when first creating the array.
* Use REDIM [_PRESERVE](_PRESERVE.md) to change the range or number of array elements without losing the remaining elements. Data may move up or down to accommodate those boundary changes.
* **REDIM [_PRESERVE](_PRESERVE.md) cannot change the number of array dimensions or type!**
* [Dynamic](Dynamic.md) arrays MUST be REDIMensioned if [ERASE](ERASE.md) or [CLEAR](CLEAR.md) are used to clear the arrays as they no longer exist.
* When [AS](AS.md) is used to declare the type, use [AS](AS.md) to retain that type or it will change to [SINGLE](SINGLE.md)!
* **NOTE: Many QBasic keyword variable names CAN be used with a [STRING](STRING.md) suffix($) ONLY! You CANNOT use them without the suffix, use a numerical suffix or use [DIM](DIM.md), REDIM, [_DEFINE](_DEFINE.md), [BYVAL](BYVAL.md) or [TYPE](TYPE.md) variable [AS](AS.md) statements!**
* **Warning! Do not use negative array upper bound index values as OS access or "Out of Memory" [errors](errors.md) will occur!**

  

*Example 1:* The [$DYNAMIC]($DYNAMIC.md) Metacommand allows an array to be re-sized using [DIM](DIM.md) and REDIM.

``` '[$DYNAMIC]($DYNAMIC.md)  [INPUT](INPUT.md) "Enter array size: ", size [DIM](DIM.md) Array(size)  REDIM Array(2 * size)  [PRINT](PRINT.md) [UBOUND](UBOUND.md)(Array)  
```

  

*Example 2:* Shows the difference between REDIM and REDIM [_PRESERVE](_PRESERVE.md).

``` REDIM array(20) array(10) = 24  [PRINT](PRINT.md) array(10)  REDIM [_PRESERVE](_PRESERVE.md) array(30) [PRINT](PRINT.md) array(10)  REDIM array(15) [PRINT](PRINT.md) array(10)  
```

```  24  24  0  
```

*Explanation:* REDIM without _PRESERVE erases the array data and cannot change the number of dimensions.
  

## See also

* [Arrays](Arrays.md)
* [DIM](DIM.md), [SHARED](SHARED.md)
* [_PRESERVE](_PRESERVE.md), [ERASE](ERASE.md)
* [$DYNAMIC]($DYNAMIC.md), [$STATIC]($STATIC.md)

  
