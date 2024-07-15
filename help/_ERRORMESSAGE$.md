# _ERRORMESSAGE$

The _ERRORMESSAGE$ function returns a human-readable description of the most recent runtime error, or the description of an arbitrary error code passed to it.

  

## Syntax

*e$* = _ERRORMESSAGE$
*e$* = _ERRORMESSAGE$(*errorCode%*)
  

## Description

* Used in program error troubleshooting.
* The message returned is identical to the message shown in the dialog box that appears if your program has no error handler. See [ERROR Codes](ERROR Codes.md) for the full list of error codes and their messages.

  

## Examples

*Example 1:* Using an error handler that ignores any error.

``` [ON ERROR](ON ERROR.md) [GOTO](GOTO.md) Errhandler ' Main module program error simulation code [ERROR](ERROR.md) 7 ' simulate an Out of Memory Error [PRINT](PRINT.md) "Error handled...ending program" [SLEEP](SLEEP.md) 4 [SYSTEM](SYSTEM.md) ' end of program code  Errhandler: ' error handler sub program line label [PRINT](PRINT.md) "Error"; [ERR](ERR.md); "on program file line"; [_ERRORLINE](_ERRORLINE.md) [PRINT](PRINT.md) "Description: "; _ERRORMESSAGE$; "." [BEEP](BEEP.md) ' warning beep [RESUME](RESUME.md) [NEXT](NEXT.md) ' moves program to code following the error.  
```

  

## See also

* [ON ERROR](ON ERROR.md)
* [_ERRORLINE](_ERRORLINE.md)
* [_INCLERRORLINE](_INCLERRORLINE.md), [_INCLERRORFILE$](_INCLERRORFILE$.md)
* [ERR](ERR.md), [ERL](ERL.md)
* [ERROR](ERROR.md)
* [ERROR Codes](ERROR Codes.md)

  
