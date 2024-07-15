# _PRESERVE

The _PRESERVE [REDIM](REDIM.md) action preserves the current contents of [dynamic](dynamic.md) [arrays](arrays.md), when resizing or changing indices.

  

## Syntax

[REDIM](REDIM.md) _PRESERVE array(*newLowerIndex&* [TO *newUpperIndex&*]) [AS variabletype]
  

## Description

* [REDIM](REDIM.md) or the [$DYNAMIC]($DYNAMIC.md) metacommand must be used when the array is first created to be able to resize and preserve.
* If _PRESERVE is not used, the current contents of the array are cleared by [REDIM](REDIM.md).
	+ All element values of an array are preserved if the array size is increased.
	+ The remaining elements of the array are preserved if the array size is decreased.
	+ If the new index range is different from the original, all values will be moved to the new corresponding indices.
* **REDIM _PRESERVE cannot change the number of array dimensions, but can change the number of elements.**
* **Always use the same array [TYPE](TYPE.md) suffix ([AS](AS.md) type) or a new array type with the same name may be created.**

### Errors

* [SUB](SUB.md) or [FUNCTION](FUNCTION.md) arrays created using [REDIM](REDIM.md) require that they be recreated to be used after arrays are [ERASEd](ERASEd.md).
* **Warning:** Do not use negative upper array index values as an "Out of Memory" [error](error.md) (or global Operating System errors) will occur.
* Use _PRESERVE before [SHARED](SHARED.md) or an "invalid variable name" error will occur.

  

## Examples

*Example 1:* Changing the upper and lower array bounds

``` [REDIM](REDIM.md) a(5 [TO](TO.md) 10) ' create array as dynamic using REDIM a(5) = 123 [REDIM](REDIM.md) _PRESERVE a(20 [TO](TO.md) 40) [PRINT](PRINT.md) a(20)  
```

*Explanation:* a(20) is now the 123 value a(5) was. The upper or lower bounds of arrays can be changed, but the type cannot. New array indices like a(40) are null(0) or empty strings. If the array element count is not reduced, all of the data will be preserved.
  

*Example 2:* Sizing an array while storing file data.

``` [REDIM](REDIM.md) Array$(1)                'create a dynamic string array filename$ = "Readme.txt"       'QB64 information text file [OPEN](OPEN.md) filename$ [FOR](FOR.md) "FOR (file statement)") [INPUT](INPUT.md) "INPUT (file mode)") [AS](AS.md) #1 [DO](DO.md) [UNTIL](UNTIL.md) [EOF](EOF.md)(1)   count = count + 1   [IF](IF.md) count > [UBOUND](UBOUND.md)(Array$) [THEN](THEN.md)     [REDIM](REDIM.md) _PRESERVE Array$(count * 3 / 2)'increase array's size by 50% without losing data   [END IF](END IF.md)    [LINE INPUT](LINE INPUT.md) "LINE INPUT (file statement)") #1, textline$   Array$(count) = textline$ [LOOP](LOOP.md) [CLOSE](CLOSE.md) #1 [FOR](FOR.md) c = 1 [TO](TO.md) count [PRINT](PRINT.md) Array$(c) [IF](IF.md) c [MOD](MOD.md) 20 = 0 [THEN](THEN.md) k$ = [INPUT$](INPUT$.md)(1) [NEXT](NEXT.md) [END](END.md)  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [REDIM](REDIM.md)
* [$DYNAMIC]($DYNAMIC.md)
* [Arrays](Arrays.md)

  
