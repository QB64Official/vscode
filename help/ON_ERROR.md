## ON ERROR
---
<blockquote>

### ON ERROR is used with GOTO to handle errors in a program.

</blockquote>

#### SYNTAX

<blockquote>

`ON ERROR GOTO { lineNumber | lineLabel }`

</blockquote>

#### DESCRIPTION

<blockquote>

* An untreated error in a program will cause execution to stop and an error message is displayed to the user, who can choose to continue (ignore the error - which could have unexpected results) or end the program.
* Use [ON](./ON.md) [ERROR](./ERROR.md) when your program performs operations that are likely to generate errors, like file access operations.
* [ON](./ON.md) [ERROR](./ERROR.md) statements can be in the main module code or in [SUB](./SUB.md) or [FUNCTION](./FUNCTION.md) procedures.
* [ON](./ON.md) [ERROR](./ERROR.md) statements take precedence in the order they are encountered. It will also handle any subroutine errors.
* [ON](./ON.md) [ERROR](./ERROR.md) [GOTO](./GOTO.md) 0 can be used to disable custom [ON](./ON.md) [ERROR](./ERROR.md) trapping and give default error messages.
* A subsequent [ON](./ON.md) [ERROR](./ERROR.md) statement will override the previous one.
* [GOTO](./GOTO.md) is required in the statement. Cannot use [GOSUB](./GOSUB.md) .
* Comment out [ON](./ON.md) [ERROR](./ERROR.md) to find specific error locations. QB64 can return the file line position with [_ERRORLINE](./_ERRORLINE.md)
* Note: QB64 does not support the PDS (QuickBASIC 7) [ON](./ON.md) [ERROR](./ERROR.md) [RESUME](./RESUME.md) [NEXT](./NEXT.md) statement.


</blockquote>

#### SEE ALSO

<blockquote>

* [ERR](./ERR.md) , [ERL](./ERL.md) , [RESUME](./RESUME.md)
* [ON](./ON.md)...[GOTO](./GOTO.md)
* [_ERRORLINE](./_ERRORLINE.md) , [_INCLERRORLINE](./_INCLERRORLINE.md) , _INCLERRORFILE$
* [ERROR](./ERROR.md)
* [ERROR](./ERROR.md) Codes

</blockquote>
