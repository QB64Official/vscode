# _DONTWAIT

_DONTWAIT is used with the [SHELL](SHELL.md) statement in **QB64** to specify that the program shouldn't wait until the external command/program is finished (which it otherwise does by default).

  

## Syntax

[SHELL](SHELL.md) [[[_DONTWAIT] [*commandLine$*]
  

## Description

* Runs the command/program specified in *commandline$* and lets the calling program continue at the same time in its current screen format.
* Especially useful when CMD /C or START is used in a SHELL command line to run another program.
* **QB64** automatically uses CMD /C or COMMAND /C when using SHELL.
* **QB64** program screens will not get distorted or minimized like QBasic fullscreen modes would.

  

## Examples

``` [SHELL](SHELL.md) _DONTWAIT "notepad " + filename$  [FOR](FOR.md) x = 1 [TO](TO.md) 5     [_LIMIT](_LIMIT.md) 1     [PRINT](PRINT.md) x [NEXT](NEXT.md)  
```

(opens up notepad at the same time as counting to 5)

```  1  2  3  4  5  
```

  

## See also

* [SHELL](SHELL.md), [_HIDE](_HIDE.md)

  
