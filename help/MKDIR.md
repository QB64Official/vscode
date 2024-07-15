# MKDIR

The MKDIR statement creates a new folder (**dir**ectory) at a specified path.

  

## Syntax

MKDIR pathSpec$
  

## Description

* The path specification (pathSpec$) is a literal or variable [STRING](STRING.md) expression that also specifies the new folder's name.
* If no path is given the directory will become a sub-directory of the present directory where the program is currently running.
* **QB64** can use both long or short path and file names with spaces when required.
* The new folder will be created without a user prompt or verification.
* If a path is specified, the path must exist or a ["Path not found" error]("Path not found" error.md) will occur. See [_DIREXISTS](_DIREXISTS.md).
* [SHELL](SHELL.md) can use the DOS command "MD " or "MKDIR " + path$ + newfolder$ to do the same thing.

  

## See also

* [SHELL](SHELL.md), [CHDIR](CHDIR.md), [FILES](FILES.md)
* [NAME](NAME.md), [KILL](KILL.md), [RMDIR](RMDIR.md)
* [_DIREXISTS](_DIREXISTS.md)
* [Windows Open and Save Dialog Boxes](Windows Open and Save Dialog Boxes.md)

  
