## ERROR
---

### The ERROR statement is used to simulate a program error or to troubleshoot error handling procedures.

#### SYNTAX

`ERROR codeNumber%`

#### DESCRIPTION
* Can be used to test an error handling routine by simulating an error.
* Error code 97 can be used to invoke the error handler for your own use, no real error in the program will trigger error 97.
* Use error codes between 100 and 200 for custom program errors that will not be responded to by QB64.


#### EXAMPLES
##### Example: Creating custom error codes for a program that can be handled by an ON ERROR handling routine.
```vb
ON ERROR GOTO handler

IF x = 0 THEN ERROR 123
x = x + 1
IF x THEN ERROR 111

END


handler:
PRINT ERR, _ERRORLINE
BEEP
RESUME NEXT
```
  


#### SEE ALSO
* [ON](./ON.md) [ERROR](./ERROR.md)
* [ERR](./ERR.md) , [ERL](./ERL.md)
* [_ERRORLINE](./_ERRORLINE.md)
* [ERROR](./ERROR.md) Codes (list)
