# ERR

The ERR function returns the last QBasic error code number.

  

## Syntax

*errorNum%* = ERR
  

## Description

* If there is no error, the function returns 0
* Can be used in an error handling routine to report the last error code number.

  

## Examples

*Example:* Simulating an error to test a program error handler that looks for a "Subscript out of range" error.

``` [ON ERROR](ON ERROR.md) [GOTO](GOTO.md) handler  [IF](IF.md) x = 0 [THEN](THEN.md) [ERROR](ERROR.md) 111  'simulate an error code that does not exist x = x + 1 [IF](IF.md) x [THEN](THEN.md) [ERROR](ERROR.md) 9        'simulate array boundary being exceeded  [END](END.md)  handler: [PRINT](PRINT.md) ERR, [_ERRORLINE](_ERRORLINE.md) [BEEP](BEEP.md) [IF](IF.md) ERR = 9 [THEN](THEN.md)   [PRINT](PRINT.md) "The program has encountered an error and needs to close! Press a key!"   K$ = [INPUT$](INPUT$.md)(1)   [SYSTEM](SYSTEM.md) [END IF](END IF.md) [RESUME](RESUME.md) [NEXT](NEXT.md)               'RESUME can only be used in error handlers  
```

  

## See also

* [ON ERROR](ON ERROR.md), [RESUME](RESUME.md)
* [ERL](ERL.md)
* [_ERRORLINE](_ERRORLINE.md), [_INCLERRORLINE](_INCLERRORLINE.md), [_INCLERRORFILE$](_INCLERRORFILE$.md)
* [ERROR](ERROR.md)
* [ERROR Codes](ERROR Codes.md)

  
