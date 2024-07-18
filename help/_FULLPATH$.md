## _FULLPATH$
---

### The _FULLPATH$ function returns an absolute or full path name for the specified relative path name.

#### SYNTAX

`p$ = _FULLPATH$ ( pathName$ )`

#### PARAMETERS
* pathname$ is the file or directory for which to obtain absolute path information.


#### DESCRIPTION
* The path returned ends with a backslash on Windows and a forward-slash on Linux and macOS if pathname$ is a directory.
* A nonexistent file or directory generates the error message, "Path Not Found.".


#### EXAMPLES
```vb
PRINT "Parent directory full path: "; _FULLPATH$("../")
```
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* _CWD$ , _STARTDIR$
* [FILES](./FILES.md) , _FILES$
* [_DIREXISTS](./_DIREXISTS.md) , [_FILEEXISTS](./_FILEEXISTS.md)
