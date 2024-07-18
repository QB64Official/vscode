## _ERRORMESSAGE$
---

### The _ERRORMESSAGE$ function returns a human-readable description of the most recent runtime error, or the description of an arbitrary error code passed to it.

#### SYNTAX

`e$ = _ERRORMESSAGE$`

#### DESCRIPTION
* Used in program error troubleshooting.
* The message returned is identical to the message shown in the dialog box that appears if your program has no error handler. See [ERROR](./ERROR.md) Codes for the full list of error codes and their messages.


#### EXAMPLES
##### Example 1: Using an error handler that ignores any error.
```vb
ON ERROR GOTO Errhandler
' Main module program error simulation code
ERROR 7 ' simulate an Out of Memory Error
PRINT "Error handled...ending program"
SLEEP 4
SYSTEM ' end of program code

Errhandler: ' error handler sub program line label
PRINT "Error"; ERR; "on program file line"; _ERRORLINE
PRINT "Description: "; _ERRORMESSAGE$; "."
BEEP ' warning beep
RESUME NEXT ' moves program to code following the error.
```
  


#### SEE ALSO
* [ON](./ON.md) [ERROR](./ERROR.md)
* [_ERRORLINE](./_ERRORLINE.md)
* [_INCLERRORLINE](./_INCLERRORLINE.md) , _INCLERRORFILE$
* [ERR](./ERR.md) , [ERL](./ERL.md)
* [ERROR](./ERROR.md)
* [ERROR](./ERROR.md) Codes
