## DIM
---

### The DIM statement is used to declare a variable or a list of variables as a specified data type or to dimension $STATIC or $DYNAMIC arrays .

#### SYNTAX

`To declare variables: DIM [[[SHARED]]] variable [{suffix| AS [[[_UNSIGNED]]] type }] [, variable2 ...]]`

#### DESCRIPTION
* Sets the [INTEGER](./INTEGER.md) range of elements (indices) of a [STATIC](./STATIC.md) array. If only one number is used, the lowest boundary is 0 by default.
* When used before an array is dimensioned, [OPTION](./OPTION.md) [BASE](./BASE.md) 1 can set the default lower boundary of arrays to 1.
* [DIM](./DIM.md) [SHARED](./SHARED.md) shares variable values with sub-procedures without passing the value in a parameter.
* Use the [AS](./AS.md) keyword to define a variable or array type [AS](./AS.md) ...
	* [INTEGER](./INTEGER.md) (or use variable suffix % )
	* [LONG](./LONG.md) (or use variable suffix & )
	* [SINGLE](./SINGLE.md) (or use variable suffix ! or no suffix by default)
	* [DOUBLE](./DOUBLE.md) (or use variable suffix # )
	* [STRING](./STRING.md) (or use variable suffix $ ). An [AS](./AS.md) multiplier can set the string length . Ex: [DIM](./DIM.md) variable [AS](./AS.md) [STRING](./STRING.md) * 8
* QB64 variable types:
	* [_BIT](./_BIT.md) (or use variable suffix &grave; ). An [AS](./AS.md) multiplier can be used for multiple bits. Ex: [DIM](./DIM.md) variable [AS](./AS.md) [_BIT](./_BIT.md) * 8
	* [_BYTE](./_BYTE.md) (or use variable suffix %% )
	* [_INTEGER64](./_INTEGER64.md) (or use variable suffix && )
	* [_FLOAT](./_FLOAT.md) (or use variable suffix ## )
	* [_OFFSET](./_OFFSET.md) (or use variable suffix %& )
	* [DIM](./DIM.md) [AS](./AS.md) [_MEM](./_MEM.md) (the [_MEM](./_MEM.md) type has no type suffix).
* Note: When a variable has not been defined or has no type suffix, the type defaults to [SINGLE](./SINGLE.md) .
* When using the [AS](./AS.md) type variable-list syntax, type symbols cannot be used.
* When the $DYNAMIC metacommand or [REDIM](./REDIM.md) is used, array element sizes are changeable (not $[STATIC](./STATIC.md) ).
* Use [REDIM](./REDIM.md) instead of [DIM](./DIM.md) to dimension arrays as dynamic without the $DYNAMIC metacommand.
* Use [REDIM](./REDIM.md) [_PRESERVE](./_PRESERVE.md) in QB64 to retain previous array values when changing the size of an array.
* [REDIM](./REDIM.md) [_PRESERVE](./_PRESERVE.md) cannot change the number of array dimensions. An error will occur.
* Dynamic arrays MUST be REDIMensioned if [ERASE](./ERASE.md) or [CLEAR](./CLEAR.md) are used, as the arrays are completely removed.
* All numerical variable types except [SINGLE](./SINGLE.md) , [DOUBLE](./DOUBLE.md) and [_FLOAT](./_FLOAT.md) can be dimensioned as [_UNSIGNED](./_UNSIGNED.md) (suffix ~) or positive only.
* NOTE: Many QBasic keyword variable names can be used with a [STRING](./STRING.md) suffix ($). You cannot use them without the suffix, use a numerical suffix or use [DIM](./DIM.md), [REDIM](./REDIM.md) , [_DEFINE](./_DEFINE.md) , [BYVAL](./BYVAL.md) or [TYPE](./TYPE.md) variable [AS](./AS.md) statements. Although possible, it's recommended to avoid using reserved names.
* Warning: Do not use negative array upper bound index values, or OS access or "Out of Memory" errors will occur.


#### EXAMPLES
##### Example 1: Defines Qt variable as a one byte fixed length string.
```vb
DIM Qt AS STRING * 1
```
  
##### Example 2: Dimensions and types an array.
```vb
DIM Image(2000) AS INTEGER
```
  
##### Example 3: Dimensions array with an INTEGER type suffix.
```vb
DIM Image%(2000)
```
  
##### Example 4: Dimensions a range of array elements as SHARED integers.
```vb
DIM SHARED Image(1 TO 1000) AS INTEGER
```
  
##### Example 5: Dimensions variable as an array of 8 elements of the type UNSIGNED BIT.
```vb
DIM bit(8) AS _UNSIGNED _BIT
```
  
##### Example 6: QB64 is more flexible than QBasic when it comes to "Duplicate Definition" errors. The following code does not error:
```vb
x = 1 'x is a SINGLE variable
PRINT x
DIM x AS LONG
PRINT x
```
  
##### Example 7: The following code will create a "Name already in use" status error in QB64 when the variable types are the same.
```vb
x = 1 'x is a SINGLE variable
PRINT x
DIM x AS SINGLE
PRINT x
```
  
##### Example 8: Using QB64's alternative syntax to declare multiple variables/arrays of the same type.
```vb
DIM AS LONG w, h, id, weight, index 'all of these variables are created as type LONG
DIM AS SINGLE x, y, z               'all of these variables are created as type SINGLE
```
  


#### SEE ALSO
* [_DEFINE](./_DEFINE.md) , [_PRESERVE](./_PRESERVE.md)
* [REDIM](./REDIM.md) , [TYPE](./TYPE.md)
* [ERASE](./ERASE.md) , [CLEAR](./CLEAR.md)
* [DEFINT](./DEFINT.md) , [DEFSNG](./DEFSNG.md) , [DEFLNG](./DEFLNG.md) , [DEFDBL](./DEFDBL.md) , [DEFSTR](./DEFSTR.md)
* Mathematical Operations , Arrays
* Variable Types
* [OPTION](./OPTION.md) [_EXPLICIT](./_EXPLICIT.md)
