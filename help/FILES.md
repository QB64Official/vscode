## FILES
---

### The FILES statement is used to print a list of files in the current directory using a file specification.

#### SYNTAX

`FILES [ fileSpec$ ]`

#### DESCRIPTION
* fileSpec$ is a string expression or variable containing a path when required.
* fileSpec$ can use the * and ? wildcard specifications:
	* * denotes one or more wildcard characters in a filename or path specification as any legal file name  character(s).
	* ? denotes one wildcard letter in a filename or path specification as any legal filename character.
* If fileSpec$ is omitted, it is assumed to be "*.*" (all files and folders in the current directory).
* Illegal filename characters in QB64 include * > < : " | \ / with any amount of dot extensions being allowed in Windows.
* [FILES](./FILES.md) lists can make the screen roll up. Try using [SHELL](./SHELL.md) "DIR" with the /P option. DIR command .
* To get individual directory entries use _FILES$ instead.


#### EXAMPLES
```vb
FILES "*.BAS"
```
  


#### SEE ALSO
* _FILES$
* [SHELL](./SHELL.md)
* [CHDIR](./CHDIR.md) , [MKDIR](./MKDIR.md)
* [RMDIR](./RMDIR.md) , [KILL](./KILL.md)
* _CWD$ , _STARTDIR$
* [_FILEEXISTS](./_FILEEXISTS.md) , [_DIREXISTS](./_DIREXISTS.md)
* $[CONSOLE](./CONSOLE.md)
