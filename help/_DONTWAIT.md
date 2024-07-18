## _DONTWAIT
---

### _DONTWAIT is used with the SHELL statement in QB64 to specify that the program shouldn't wait until the external command/program is finished (which it otherwise does by default).

#### SYNTAX

`SHELL [[[_DONTWAIT]]] [ commandLine$ ]`

#### DESCRIPTION
* Runs the command/program specified in commandline$ and lets the calling program continue at the same time in its current screen format.
* Especially useful when CMD /C or START is used in a [SHELL](./SHELL.md) command line to run another program.
* QB64 automatically uses CMD /C or COMMAND /C when using [SHELL](./SHELL.md).
* QB64 program screens will not get distorted or minimized like QBasic fullscreen modes would.


#### EXAMPLES
```vb
SHELL _DONTWAIT "notepad " + filename$

FOR x = 1 TO 5
   _LIMIT 1
   PRINT x
NEXT
```
  
##### (opens up notepad at the same time as counting to 5)
```vb
1
2
3
4
5
```
  


#### SEE ALSO
* [SHELL](./SHELL.md) , [_HIDE](./_HIDE.md)
