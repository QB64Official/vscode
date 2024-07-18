## _DIREXISTS
---

### The _DIREXISTS function determines if a designated file path or folder exists and returns true (-1) or false (0).

#### SYNTAX

`dirExists% = _DIREXISTS ( filepath$ )`

#### DESCRIPTION
* The filepath$ parameter can be a literal or variable string path value.
* The function returns -1 when a path or folder exists and 0 when it does not.
* The function reads the system information directly without using a [SHELL](./SHELL.md) procedure.
* The function will use the appropriate Operating System path separators. _OS$ can determine the operating system.
* This function does not guarantee that a path can be accessed, only that it exists.
* NOTE: Checking if a folder exists in a CD drive may cause the tray to open automatically to request a disk when empty. To find drives in Windows, use this API Library: Disk Drives


#### EXAMPLES
##### Example: Checks if a folder exists before proceeding.
```vb
IF _DIREXISTS("internal\temp") THEN
   PRINT "Folder found."
END IF
```
  


#### SEE ALSO
* [_FILEEXISTS](./_FILEEXISTS.md)
* [SHELL](./SHELL.md)
* _OS$
