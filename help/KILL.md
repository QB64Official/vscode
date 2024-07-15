# KILL

The KILL statement deletes a file designated by a [STRING](STRING.md) value or variable.

  

## Syntax

KILL *fileSpec$*
  

* *fileSpec$* is a literal or variable string path and filename. Wildcards * and ? can be used with caution.

***** denotes one or more wildcard letters of a name or extension
**?** denotes one wildcard letter of a name or extension
* *fileSpec$* can include a path that can be either relative to the program's current location or absolute, from the root drive.
* KILL cannot remove an [OPEN](OPEN.md) file. The program must [CLOSE](CLOSE.md) it first.
* If the path or file does not exist, a "File not found" or "Path not found" [error](error.md) will result. See [_FILEEXISTS](_FILEEXISTS.md).
* [SHELL](SHELL.md) "DEL /Q " + fileName$ does the same without a prompt or verification for wildcard deletions.
* [SHELL](SHELL.md) "DEL /P " + fileName$ will ask for user verification.
* Cannot delete folders or directories. Use [RMDIR](RMDIR.md) to remove empty folders.
* **Warning: files deleted with KILL will not go to the Recycle Bin and they cannot be restored.**

  

## Examples

``` KILL "C:\QBasic\data\2000data.dat"  
```

  

## See also

* [RMDIR](RMDIR.md), [FILES](FILES.md), [SHELL](SHELL.md), [OPEN](OPEN.md)
* [CHDIR](CHDIR.md), [MKDIR](MKDIR.md), [NAME](NAME.md)
* [_FILEEXISTS](_FILEEXISTS.md), [_DIREXISTS](_DIREXISTS.md)

  
