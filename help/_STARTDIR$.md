# _STARTDIR$

The _STARTDIR$ function returns the path a user called a QB64 program from as a string value without a trailing path separator.

  

## Syntax

*callPath$* = _STARTDIR$
  

## Description

* Returns a [STRING](STRING.md) representing the user's program calling path.

  

## Availability

* **QB64 v1.0 and up**
* **QB64-PE all versions**

  

## Examples

*Example:* Showcasing QB64 path functions:

``` [$CONSOLE]($CONSOLE.md):ONLY [_DEST](_DEST.md) [_CONSOLE](_CONSOLE.md) [SHELL](SHELL.md) "cd" [PRINT](PRINT.md) [_CWD$](_CWD$.md) [PRINT](PRINT.md) _STARTDIR$ [SYSTEM](SYSTEM.md)  
```

  

## See also

* [_CWD$](_CWD$.md)
* [SHELL](SHELL.md)

  
