## ERR
---

### The ERR function returns the last QBasic error code number.

#### SYNTAX

`errorNum% = ERR`

#### DESCRIPTION
* If there is no error, the function returns 0
* Can be used in an error handling routine to report the last error code number.


#### EXAMPLES
##### Example: Simulating an error to test a program error handler that looks for a "Subscript out of range" error.
```vb
ON ERROR GOTO handler

IF x = 0 THEN ERROR 111  'simulate an error code that does not exist
x = x + 1
IF x THEN ERROR 9        'simulate array boundary being exceeded

END

handler:
PRINT ERR, _ERRORLINE
BEEP
IF ERR = 9 THEN
 PRINT "The program has encountered an error and needs to close! Press a key!"
 K$ = INPUT$(1)
 SYSTEM
END IF
RESUME NEXT               'RESUME can only be used in error handlers
```
  


#### SEE ALSO
* [ON](./ON.md) [ERROR](./ERROR.md) , [RESUME](./RESUME.md)
* [ERL](./ERL.md)
* [_ERRORLINE](./_ERRORLINE.md) , [_INCLERRORLINE](./_INCLERRORLINE.md) , _INCLERRORFILE$
* [ERROR](./ERROR.md)
* [ERROR](./ERROR.md) Codes
