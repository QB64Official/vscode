## _CWD$
---

### The _CWD$ function returns the current working directory path as a string value without a trailing path separator.

#### SYNTAX

`workingDirectory$ = _CWD$`

#### DESCRIPTION
* By default, the initial working directory path is usually the same as the directory of the executable file run.
* The current working directory can be changed with the [CHDIR](./CHDIR.md) or [SHELL](./SHELL.md) command; [CHDIR](./CHDIR.md) sets it, _CWD$ returns it.
* Path returns will change only when the working path has changed.  When in C:\ and run QB64\cwd.exe, it will still return C:\
* The current working directory string can be used in [OPEN](./OPEN.md) statements and [SHELL](./SHELL.md) commands that deal with files.
* Works in Windows, macOS and Linux. _OS$ can be used by a program to predict the proper slash separations in different OS's.


#### EXAMPLES
##### Example: Get the current working directory, and move around the file system:
```vb
startdir$ = _CWD$
PRINT "We started at "; startdir$
MKDIR "a_temporary_dir"
CHDIR "a_temporary_dir"
PRINT "We are now in "; _CWD$
CHDIR startdir$
PRINT "And now we're back in "; _CWD$
RMDIR "a_temporary_dir"
```
  
```vb
We started at C:\QB64
We are now in C:\QB64\a_temporary_dir
And now we're back in C:\QB64
```
  


#### SEE ALSO
* [CHDIR](./CHDIR.md) (Change the current working directory)
* [RMDIR](./RMDIR.md) (Remove a directory in the file system)
* [KILL](./KILL.md) (Delete a file in the file system)
* [MKDIR](./MKDIR.md) (Create a directory in the file system)
* _OS$ (returns current OS to program)
* _STARTDIR$ (returns path the user called program from)
