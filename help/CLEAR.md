## CLEAR
---

### The CLEAR statement clears all variable and array element values in a program.

#### SYNTAX

`CLEAR [, ignored& , ignored& ]`

#### DESCRIPTION
* All parameters are optional and ignored by QB64 .
* Normally used to clear all program variable and array values where numerical values become zero and string values become empty ("").
* It does not clear constant values.
* Closes all opened files.
* $DYNAMIC or [REDIM](./REDIM.md) arrays will need to be redimensioned or an error will occur when referenced because they are removed.


#### EXAMPLES
##### Example: Using CLEAR to clear array elements from static arrays or arrays created using DIM .
```vb
CLS
DIM array(10)   'create a $STATIC array
array(5) = 23

PRINT array(5)

CLEAR

PRINT array(5)
```
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* [ERASE](./ERASE.md)
* [REDIM](./REDIM.md) , [_PRESERVE](./_PRESERVE.md)
* Arrays
