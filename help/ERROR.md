# ERROR

The ERROR statement is used to simulate a program error or to troubleshoot error handling procedures.

  

## Syntax

ERROR *codeNumber%*
  

## Description

* Can be used to test an error handling routine by simulating an error.
* Error code 97 can be used to invoke the error handler for your own use, no real error in the program will trigger error 97.
* Use error codes between 100 and 200 for custom program errors that will not be responded to by QB64.

  

## Examples

*Example:* Creating custom error codes for a program that can be handled by an [ON ERROR](ON ERROR.md) handling routine.

``` [ON ERROR](ON ERROR.md) [GOTO](GOTO.md) handler  [IF](IF.md) x = 0 [THEN](THEN.md) ERROR 123 x = x + 1 [IF](IF.md) x [THEN](THEN.md) ERROR 111  [END](END.md)   handler: [PRINT](PRINT.md) [ERR](ERR.md), [_ERRORLINE](_ERRORLINE.md) [BEEP](BEEP.md) [RESUME](RESUME.md) [NEXT](NEXT.md)  
```

**Note: Don't use error codes under 97 or over 200 as QB64 may respond to those errors and interrupt the program.**
  

## See also

* [ON ERROR](ON ERROR.md)
* [ERR](ERR.md), [ERL](ERL.md)
* [_ERRORLINE](_ERRORLINE.md)
* [ERROR Codes](ERROR Codes.md) (list)

  
