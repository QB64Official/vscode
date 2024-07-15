# _CWD$

  

The _CWD$ function returns the current working directory path as a string value without a trailing path separator.

  

## Syntax

*workingDirectory$* = _CWD$
  

## Description

* By default, the initial working directory path is usually the same as the directory of the executable file run.
* The current working directory can be changed with the [CHDIR](CHDIR.md) or [SHELL](SHELL.md) command; CHDIR sets it, _CWD$ returns it.
* Path returns will change only when the working path has changed. When in C:\ and run QB64\cwd.exe, it will still return C:\
* The current working directory string can be used in [OPEN](OPEN.md) statements and [SHELL](SHELL.md) commands that deal with files.
* Works in Windows, macOS and Linux. [_OS$](_OS$.md) can be used by a program to predict the proper slash separations in different OS's.

### Errors

* If an error occurs while obtaining the working directory from the operating system, [error code](error code.md) 51 (Internal Error) will be generated.

  

## Examples

*Example:* Get the current working directory, and move around the file system:

``` startdir$ = _CWD$ [PRINT](PRINT.md) "We started at "; startdir$ [MKDIR](MKDIR.md) "a_temporary_dir" [CHDIR](CHDIR.md) "a_temporary_dir" [PRINT](PRINT.md) "We are now in "; _CWD$ [CHDIR](CHDIR.md) startdir$ [PRINT](PRINT.md) "And now we're back in "; _CWD$ [RMDIR](RMDIR.md) "a_temporary_dir"  
```

``` We started at C:\QB64 We are now in C:\QB64\a_temporary_dir And now we're back in C:\QB64  
```

  

## See also

* [CHDIR](CHDIR.md) (Change the current working directory)
* [RMDIR](RMDIR.md) (Remove a directory in the file system)
* [KILL](KILL.md) (Delete a file in the file system)
* [MKDIR](MKDIR.md) (Create a directory in the file system)
* [_OS$](_OS$.md) (returns current OS to program)
* [_STARTDIR$](_STARTDIR$.md) (returns path the user called program from)

  
