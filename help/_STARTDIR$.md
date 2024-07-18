## _STARTDIR$
---

### The _STARTDIR$ function returns the path a user called a QB64 program from as a string value without a trailing path separator.

#### SYNTAX

`callPath$ = _STARTDIR$`

#### DESCRIPTION
* Returns a [STRING](./STRING.md) representing the user's program calling path.


#### EXAMPLES
##### Example: Showcasing QB64 path functions:
```vb
$CONSOLE:ONLY
_DEST _CONSOLE
SHELL "cd"
PRINT _CWD$
PRINT _STARTDIR$
SYSTEM
```
  


#### SEE ALSO
* _CWD$
* [SHELL](./SHELL.md)
