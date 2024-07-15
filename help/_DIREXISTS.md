# _DIREXISTS

The _DIREXISTS function determines if a designated file path or folder exists and returns true (-1) or false (0).

  

## Syntax

*dirExists%* = _DIREXISTS(*filepath$*)
  

## Description

* The *filepath$* parameter can be a literal or variable [string](string.md) path value.
* The function returns -1 when a path or folder exists and 0 when it does not.
* The function reads the system information directly without using a [SHELL](SHELL.md) procedure.
* The function will use the appropriate Operating System path separators. [_OS$](_OS$.md) can determine the operating system.
* **This function does not guarantee that a path can be accessed, only that it exists.**
* **NOTE: Checking if a folder exists in a CD drive may cause the tray to open automatically to request a disk when empty.** To find drives in Windows, use this API Library: [Disk Drives](Disk Drives.md)

  

## Examples

*Example:* Checks if a folder exists before proceeding.

``` [IF](IF.md) _DIREXISTS("internal\temp") [THEN](THEN.md)     [PRINT](PRINT.md) "Folder found." [END IF](END IF.md)  
```

  

## See also

* [_FILEEXISTS](_FILEEXISTS.md)
* [SHELL](SHELL.md)
* [_OS$](_OS$.md)

  
