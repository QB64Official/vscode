## RESUME
---

### The RESUME statement is used with NEXT or a line number or label in an error handling routine.

#### SYNTAX

`RESUME { NEXT | lineLabel | lineNumber }`

#### DESCRIPTION
* [NEXT](./NEXT.md) returns execution to the code immediately following the error.
* A lineLabel or lineNumber is the code line to return to after an error.
* If the line label or number is omitted or the line number = 0, the code execution resumes at the code that created the original error.
* RESUMEcan only be used in [ERROR](./ERROR.md) handling routines. Use [RETURN](./RETURN.md) in normal [GOSUB](./GOSUB.md) procedures.


#### SEE ALSO
* [ON](./ON.md) [ERROR](./ERROR.md) , [ERROR](./ERROR.md)
* [RETURN](./RETURN.md) , [ERROR](./ERROR.md) Codes
* [FOR](./FOR.md)...[NEXT](./NEXT.md)
