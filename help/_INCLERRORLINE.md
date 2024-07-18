## _INCLERRORLINE
---

### The _INCLERRORFILE$ function returns the line number in an $INCLUDE file that caused the most recent error.

#### SYNTAX

`errline& = _INCLERRORLINE`

#### DESCRIPTION
* If the last error occurred in the main module, [_INCLERRORLINE](./_INCLERRORLINE.md) returns 0.
* By checking [_INCLERRORLINE](./_INCLERRORLINE.md) you can report exactly what line inside an included module caused the last error.


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
* _INCLERRORFILE$
* [ON](./ON.md) [ERROR](./ERROR.md) , [ERR](./ERR.md)
* [ERROR](./ERROR.md)
* [ERROR](./ERROR.md) Codes
* $INCLUDE
