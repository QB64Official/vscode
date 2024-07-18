## _ERRORLINE
---

### The _ERRORLINE function returns the source code line number that caused the most recent runtime error.

#### SYNTAX

`e% = _ERRORLINE`

#### DESCRIPTION
* Used in program error troubleshooting.
* Does not require that the program use line numbers as it counts the actual lines of code.
* The code line can be found using the QB64 IDE (Use the shortcut Ctrl+G to go to a specific line) or any other text editor such as Notepad.


#### EXAMPLES
##### Example: Displaying the current program line using a simulated ERROR code.
```vb
ON ERROR GOTO DebugLine 'can't use GOSUB

ERROR 250 'simulated error code

END
DebugLine:
PRINT _ERRORLINE
RESUME NEXT
```
  


#### SEE ALSO
* [ON](./ON.md) [ERROR](./ERROR.md)
* [_INCLERRORLINE](./_INCLERRORLINE.md) , _INCLERRORFILE$
* [ERR](./ERR.md) , [ERL](./ERL.md)
* [ERROR](./ERROR.md)
* [ERROR](./ERROR.md) Codes
