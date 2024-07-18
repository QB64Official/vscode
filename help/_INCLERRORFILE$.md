## _INCLERRORFILE$
---

### The _INCLERRORFILE$ function returns the name of the original source code $INCLUDE module that caused the most recent error.

#### SYNTAX

`errfile$ = _INCLERRORFILE$`

#### DESCRIPTION


#### EXAMPLES
##### Example:
```vb
ON ERROR GOTO DebugLine

ERROR 250 'simulated error code - an error in the main module leaves _INCLERRORLINE empty (= 0)

'$INCLUDE:'haserror.bi'

END

DebugLine:
PRINT "An error occurred. Please contact support with the following details:
PRINT "ERROR "; ERR; " ON LINE: "; _ERRORLINE
IF _INCLERRORLINE THEN
   PRINT "    IN MODULE "; _INCLERRORFILE$; " (line"; _INCLERRORLINE; ")"
END IF
RESUME NEXT
```
  
```vb
An error occurred. Please contact support with the following details:
ERROR  250  ON LINE:  6

An error occurred. Please contact support with the following details:
ERROR  250  ON LINE:  9
   IN MODULE haserror.bi ( line 1 )
```
  


#### SEE ALSO
* [_INCLERRORLINE](./_INCLERRORLINE.md)
* [ON](./ON.md) [ERROR](./ERROR.md) , [ERR](./ERR.md)
* [ERROR](./ERROR.md)
* [ERROR](./ERROR.md) Codes
* $INCLUDE
