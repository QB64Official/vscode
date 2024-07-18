## ERL
---

### The ERL function returns the closest previous line number before the last error.

#### SYNTAX

`lastErrorLine& = ERL`

#### DESCRIPTION
* Used in an error handler to report the last line number used before the error.
* If the program does not use line numbers, then [ERL](./ERL.md) returns 0.
* Use [_ERRORLINE](./_ERRORLINE.md) to return the actual code line position of an error in a QB64 program.


#### EXAMPLES
##### Example: Using a fake error code to return the line number position in a program.
```vb
ON ERROR GOTO errorfix
1
ERROR 250
ERROR 250

5 ERROR 250

END
errorfix:
PRINT ERL
RESUME NEXT
```
  
```vb
1
1
5
```
  


#### SEE ALSO
* [ERR](./ERR.md)
* [ERROR](./ERROR.md)
* [ON](./ON.md) [ERROR](./ERROR.md)
* [_ERRORLINE](./_ERRORLINE.md) , [_INCLERRORLINE](./_INCLERRORLINE.md) , _INCLERRORFILE$
* [ERROR](./ERROR.md) Codes
