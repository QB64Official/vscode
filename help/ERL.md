# ERL

The ERL function returns the closest previous line number before the last error.

  

## Syntax

*lastErrorLine&* = ERL
  

## Description

* Used in an error handler to report the last line number used before the error.
* If the program does not use line numbers, then ERL returns 0.
* Use [_ERRORLINE](_ERRORLINE.md) to return the actual code line position of an error in a QB64 program.

  

## Examples

*Example:* Using a fake error code to return the line number position in a program.

``` [ON ERROR](ON ERROR.md) [GOTO](GOTO.md) errorfix 1 [ERROR](ERROR.md) 250 [ERROR](ERROR.md) 250  5 [ERROR](ERROR.md) 250  [END](END.md) errorfix: [PRINT](PRINT.md) ERL [RESUME](RESUME.md) [NEXT](NEXT.md)  
```

``` 1 1 5  
```

  

## See also

* [ERR](ERR.md)
* [ERROR](ERROR.md)
* [ON ERROR](ON ERROR.md)
* [_ERRORLINE](_ERRORLINE.md), [_INCLERRORLINE](_INCLERRORLINE.md), [_INCLERRORFILE$](_INCLERRORFILE$.md)
* [ERROR Codes](ERROR Codes.md)

  
