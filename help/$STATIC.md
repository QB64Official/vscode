## $STATIC
---

### The $STATIC metacommand allows the creation of static (unresizable) arrays.

#### SYNTAX

`{ REM | ' } $STATIC`

#### DESCRIPTION
* QBasic Metacommands require a [REM](./REM.md) or apostrophy (') before them and are normally placed at the start of the main module.
* Static arrays cannot be resized. If a variable is used to size any array, it becomes $DYNAMIC .
* A [REDIM](./REDIM.md) statement has no effect on $[STATIC](./STATIC.md) arrays except perhaps a duplicate definition error at the [REDIM](./REDIM.md) statement.
* The array's type cannot be changed once [DIM](./DIM.md) and a literal value sets the dimensions and element size.
* $[STATIC](./STATIC.md) defined program arrays cannot be re-sized or use [_PRESERVE](./_PRESERVE.md) .


#### EXAMPLES
##### Example: When a variable is used, the array can be resized despite $STATIC. The array becomes $DYNAMIC .
```vb
'$STATIC

INPUT "Enter array size: ", size
DIM array(size)   'using an actual number instead of the variable will create an error!

REDIM array(2 * size)

PRINT UBOUND(array)
```
  


#### SEE ALSO
* $DYNAMIC , [STATIC](./STATIC.md)
* Arrays , Metacommand
