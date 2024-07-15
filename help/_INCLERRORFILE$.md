# _INCLERRORFILE$

The _INCLERRORFILE$ function returns the name of the original source code [$INCLUDE]($INCLUDE.md) module that caused the most recent error.

  

## Syntax

*errfile$* = _INCLERRORFILE$
  

## Description

If the last error occurred in the main module, _INCLERRORFILE$ returns an empty string.

  

## Availability

* **Version 1.1 and up**.

  

## Examples

*Example:*

``` [ON ERROR](ON ERROR.md) [GOTO](GOTO.md) DebugLine  [ERROR](ERROR.md) 250 'simulated error code - an error in the main module leaves _INCLERRORLINE empty (= 0)  '[$INCLUDE]($INCLUDE.md):'haserror.bi'  [END](END.md)  DebugLine: [PRINT](PRINT.md) "An error occurred. Please contact support with the following details: [PRINT](PRINT.md) "ERROR "; [ERR](ERR.md); " ON LINE: "; [_ERRORLINE](_ERRORLINE.md) [IF](IF.md) [_INCLERRORLINE](_INCLERRORLINE.md) [THEN](THEN.md)     [PRINT](PRINT.md) "    IN MODULE "; _INCLERRORFILE$; " (line"; [_INCLERRORLINE](_INCLERRORLINE.md); ")" [END IF](END IF.md) [RESUME](RESUME.md) [NEXT](NEXT.md)  
```

``` An error occurred. Please contact support with the following details: ERROR  250  ON LINE:  6  An error occurred. Please contact support with the following details: ERROR  250  ON LINE:  9     IN MODULE haserror.bi ( line 1 )  
```

  

## See also

* [_INCLERRORLINE](_INCLERRORLINE.md)
* [ON ERROR](ON ERROR.md), [ERR](ERR.md)
* [ERROR](ERROR.md)
* [ERROR Codes](ERROR Codes.md)
* [$INCLUDE]($INCLUDE.md)

  
