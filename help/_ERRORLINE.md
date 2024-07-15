# _ERRORLINE

The _ERRORLINE function returns the source code line number that caused the most recent runtime error.

  

## Syntax

*e%* = _ERRORLINE
  

## Description

* Used in program error troubleshooting.
* Does not require that the program use line numbers as it counts the actual lines of code.
* The code line can be found using the QB64 IDE (Use the shortcut **Ctrl+G** to go to a specific line) or any other text editor such as Notepad.

  

## Examples

*Example:* Displaying the current program line using a simulated [ERROR](ERROR.md) code.

``` [ON ERROR](ON ERROR.md) [GOTO](GOTO.md) DebugLine 'can't use GOSUB  [ERROR](ERROR.md) 250 'simulated error code  [END](END.md) DebugLine: [PRINT](PRINT.md) _ERRORLINE [RESUME](RESUME.md) [NEXT](NEXT.md)  
```

  

## See also

* [ON ERROR](ON ERROR.md)
* [_INCLERRORLINE](_INCLERRORLINE.md), [_INCLERRORFILE$](_INCLERRORFILE$.md)
* [ERR](ERR.md), [ERL](ERL.md)
* [ERROR](ERROR.md)
* [ERROR Codes](ERROR Codes.md)

  
