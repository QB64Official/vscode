# _FILEEXISTS

The **_FILEEXISTS** function determines if a designated file name exists and returns true (-1) or false (0).

  

## Syntax

*theFileExists%* = _FILEEXISTS(*filename$*)
  

## Description

* The *filename$* parameter can be a literal or variable [string](string.md) value that can include a path.
* The function returns -1 when a file exists and 0 when it does not.
* The function reads the system information directly without using a [SHELL](SHELL.md) procedure.
* The function will use the appropriate Operating System path separators. [_OS$](_OS$.md) can determine the operating system.
* **This function does not guarantee that a file can be accessed or opened, just that it exists.**

  

## Examples

*Example:* Checks if a file exists before opening it.

``` [IF](IF.md) _FILEEXISTS("mysettings.ini") [THEN](THEN.md)     [PRINT](PRINT.md) "Settings file found." [END IF](END IF.md)  
```

  

## See also

* [_DIREXISTS](_DIREXISTS.md), [_OS$](_OS$.md)
* [SHELL](SHELL.md), [FILES](FILES.md)
* [KILL](KILL.md)

  
