# _INCLERRORLINE

The [_INCLERRORFILE$](_INCLERRORFILE$.md) function returns the line number in an [$INCLUDE]($INCLUDE.md) file that caused the most recent error.

  

## Syntax

*errline&* = _INCLERRORLINE
  

## Description

* If the last error occurred in the main module, _INCLERRORLINE returns 0.
* By checking _INCLERRORLINE you can report exactly what line inside an included module caused the last error.

  

## Availability

* **Version 1.1 and up**.

  

## Examples

*Example:*

``` [ON ERROR](ON ERROR.md) [GOTO](GOTO.md) DebugLine  [ERROR](ERROR.md) 250 'simulated error code - an error in the main module leaves _INCLERRORLINE empty (= 0)  '[$INCLUDE]($INCLUDE.md):'haserror.bi'  [END](END.md)  DebugLine: [PRINT](PRINT.md) "An error occurred. Please contact support with the following details: [PRINT](PRINT.md) "ERROR "; [ERR](ERR.md); " ON LINE: "; [_ERRORLINE](_ERRORLINE.md) [IF](IF.md) _INCLERRORLINE [THEN](THEN.md)     [PRINT](PRINT.md) "    IN MODULE "; [_INCLERRORFILE$](_INCLERRORFILE$.md); " (line"; _INCLERRORLINE; ")" [END IF](END IF.md) [RESUME](RESUME.md) [NEXT](NEXT.md)  
```

``` An error occurred. Please contact support with the following details: ERROR  250  ON LINE:  6  An error occurred. Please contact support with the following details: ERROR  250  ON LINE:  9     IN MODULE haserror.bi ( line 1 )  
```

  

## See also

* [_INCLERRORFILE$](_INCLERRORFILE$.md)
* [ON ERROR](ON ERROR.md), [ERR](ERR.md)
* [ERROR](ERROR.md)
* [ERROR Codes](ERROR Codes.md)
* [$INCLUDE]($INCLUDE.md)

  
