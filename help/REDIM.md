## REDIM
---

### A REDIM statement can re-dimension one dynamic (flexible) array or a comma separated list of arrays.

#### SYNTAX

`REDIM [[[_PRESERVE]]] [[[SHARED]]] ArrayName[ typesuffix ] ({ max_element |low_element[[[TO]] upper_element , ...]}) [[[AS]] Type ]`

#### DESCRIPTION
* Can change the number of elements in an array (the present array data is lost unless [_PRESERVE](./_PRESERVE.md) is used).
* Dynamic array elements can also be sized or resized by a program user's entry.
* The [_PRESERVE](./_PRESERVE.md) option also allows the element range values to be moved upward or downward in QB64 only!
* Array is the name of the array to be dimensioned or re-dimensioned.
* elements is the number of elements the array should hold. Use the optional [TO](./TO.md) elements2 to set a range.
* Always use the same array [TYPE](./TYPE.md) suffix ( [AS](./AS.md) type) or a new array type with the same name may be created.
* [REDIM](./REDIM.md) cannot change $[STATIC](./STATIC.md) arrays created with a [DIM](./DIM.md) statement unless the $DYNAMIC Metacommand is used!
* To create a dynamic array use the $DYNAMIC metacommand or use [REDIM](./REDIM.md) rather than [DIM](./DIM.md) when first creating the array.
* Use [REDIM](./REDIM.md) [_PRESERVE](./_PRESERVE.md) to change the range or number of array elements without losing the remaining elements. Data may move up or down to accommodate those boundary changes.
* [REDIM](./REDIM.md) [_PRESERVE](./_PRESERVE.md) cannot change the number of array dimensions or type!
* Dynamic arrays MUST be REDIMensioned if [ERASE](./ERASE.md) or [CLEAR](./CLEAR.md) are used to clear the arrays as they no longer exist.
* When [AS](./AS.md) is used to declare the type, use [AS](./AS.md) to retain that type or it will change to [SINGLE](./SINGLE.md) !
* NOTE: Many QBasic keyword variable names CAN be used with a [STRING](./STRING.md) suffix($) [ONLY](./ONLY.md)! You CANNOT use them without the suffix, use a numerical suffix or use [DIM](./DIM.md) , [REDIM](./REDIM.md) , [_DEFINE](./_DEFINE.md) , [BYVAL](./BYVAL.md) or [TYPE](./TYPE.md) variable [AS](./AS.md) statements!
* Warning! Do not use negative array upper bound index values as OS access or "Out of Memory" errors will occur!


#### SEE ALSO
* Arrays
* [DIM](./DIM.md) , [SHARED](./SHARED.md)
* [_PRESERVE](./_PRESERVE.md) , [ERASE](./ERASE.md)
* $DYNAMIC , $[STATIC](./STATIC.md)
