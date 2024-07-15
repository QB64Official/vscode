# TO

TO indicates a range of numerical values or an assignment of one value to another.

  

## Syntax

DIM array(1 TO 100)
FOR i = 1 TO 10
_MAPUNICODE unicode TO asciicode
_SETALPHA alpha%, c1& TO c2&
  

* To specify a range in the [CASE](CASE.md) clause of a [SELECT CASE](SELECT CASE.md) statement.
* To specify the range for the loop counter in a [FOR...NEXT](FOR...NEXT.md) loop.
* Array dimensions can be set to have a range of element numbers with TO.
* Specifies an [ASCII](ASCII.md) character code to set with [_MAPUNICODE](_MAPUNICODE.md).
* Specifies a range of color values to set the transparencies with [_SETALPHA](_SETALPHA.md).
* To specify a range of records to lock or unlock in a networked environment, in the [LOCK...UNLOCK](LOCK...UNLOCK.md) statement.
* To separate the lower and upper bounds of an array specification in a [DIM](DIM.md) or [REDIM](REDIM.md) statement.

  

## See also

* [DIM](DIM.md), [FOR...NEXT](FOR...NEXT.md)
* [_MAPUNICODE](_MAPUNICODE.md)
* [_SETALPHA](_SETALPHA.md)

  
