## SHELL (function)
---
<blockquote>

### The SHELL function displays the console and returns the INTEGER code value sent when the external program exits.

</blockquote>

#### SYNTAX

<blockquote>

`return_code = SHELL( DOScommand$ )`

</blockquote>

#### PARAMETERS

<blockquote>

* The literal or variable [STRING](./STRING.md) command parameter can be any valid external command or call to another program.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Shelling to another QB64 program will return the exit code when one is set in the  program that is run.
```vb
'DesktopSize.BAS  Compile in Windows with QB64 first

CONST SM_CXSCREEN = 0
CONST SM_CYSCREEN = 1

DECLARE LIBRARY
   FUNCTION GetSystemMetrics& (BYVAL n AS LONG)
END DECLARE

PRINT trimstr$(GetSystemMetrics(SM_CXSCREEN)); "X"; trimstr$(GetSystemMetrics(SM_CYSCREEN))

s& = _SCREENIMAGE
PRINT _WIDTH(s&); "X"; _HEIGHT(s&)

END 3 '<<<<<< add a code to return after END or SYSTEM in any program

FUNCTION trimstr$ (whatever)
trimstr = LTRIM$(RTRIM$(STR$(whatever)))
END FUNCTION
```
  


##### Example: Shelling to another QB64 program will return the exit code when one is set in the  program that is run.
```vb
returncode% = SHELL("DesktopSize") 'replace call with name of any QB64 program EXE

PRINT returncode% 'prints code sent by called program after it is closed

END
```
  


##### Example: Shelling to another QB64 program will return the exit code when one is set in the  program that is run.
```vb
3
```
  

</blockquote>

#### SEE ALSO

<blockquote>

* [_SHELLHIDE](./_SHELLHIDE.md)
* [SHELL](./SHELL.md) , [_HIDE](./_HIDE.md)
* [_CONSOLE](./_CONSOLE.md) , $[CONSOLE](./CONSOLE.md)
* [SYSTEM](./SYSTEM.md) , [END](./END.md)

</blockquote>
