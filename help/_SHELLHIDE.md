# _SHELLHIDE

The _SHELLHIDE function hides the console window and returns any [INTEGER](INTEGER.md) code sent when a program exits.

  

## Syntax

*returnCode%* = _SHELLHIDE(*externalCommand$*)
  

## Parameters

* The literal or variable [STRING](STRING.md) *externalCommand$* parameter can be any external command or call to another program.

  

## Description

* A QB64 program can return codes specified after [END](END.md) or [SYSTEM](SYSTEM.md) calls.
* The *returnCode%* is usually 0 when the external program ends with no errors.

  

## Examples

*Example:* Shelling to another QB64 program will return the exit code when one is set in the program that is run.

``` returncode% = _SHELLHIDE("DesktopSize") 'replace call with your program EXE  [PRINT](PRINT.md) returncode%  [END](END.md)  
```

*Explanation:* To set a program exit code use an [INTEGER](INTEGER.md) parameter value after [END](END.md) or [SYSTEM](SYSTEM.md) in the called program.
  

## See also

* [SHELL (function)](SHELL (function).md) "SHELL (function)")
* [SHELL](SHELL.md), [_HIDE](_HIDE.md)
* [_CONSOLE](_CONSOLE.md), [$CONSOLE]($CONSOLE.md)
* [SYSTEM](SYSTEM.md), [END](END.md)

  
