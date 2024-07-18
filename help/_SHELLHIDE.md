## _SHELLHIDE
---

### The _SHELLHIDE function hides the console window and returns any INTEGER code sent when a program exits.

#### SYNTAX

`returnCode% = _SHELLHIDE ( externalCommand$ )`

#### PARAMETERS
* The literal or variable [STRING](./STRING.md) externalCommand$ parameter can be any external command or call to another program.


#### DESCRIPTION
* A QB64 program can return codes specified after [END](./END.md) or [SYSTEM](./SYSTEM.md) calls.
* The returnCode% is usually 0 when the external program ends with no errors.


#### EXAMPLES
##### Example: Shelling to another QB64 program will return the exit code when one is set in the  program that is run.
```vb
returncode% = _SHELLHIDE("DesktopSize") 'replace call with your program EXE

PRINT returncode%

END
```
  


#### SEE ALSO
* [SHELL](./SHELL.md) (function)
* [SHELL](./SHELL.md) , [_HIDE](./_HIDE.md)
* [_CONSOLE](./_CONSOLE.md) , $[CONSOLE](./CONSOLE.md)
* [SYSTEM](./SYSTEM.md) , [END](./END.md)
