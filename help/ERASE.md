## ERASE
---

### The ERASE statement is used to clear all data from an array. $STATIC array dimensions are not affected.

#### SYNTAX

`ERASE arrayName [, arrayName2 ...]`

#### DESCRIPTION
* All string array elements become null strings ("") and all numerical array elements become 0.
* Multiple arrays can be erased using commas between the array names.
* Dynamic arrays must be REDIMensioned if they are referenced after erased.
* Dimension subprocedure arrays as [STATIC](./STATIC.md) to use [ERASE](./ERASE.md) and not have to [REDIM](./REDIM.md).
* You do not have to include array brackets in an [ERASE](./ERASE.md) call.


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* [DIM](./DIM.md) , [REDIM](./REDIM.md)
* [CLEAR](./CLEAR.md)
* [STATIC](./STATIC.md)
* $DYNAMIC
* Arrays
