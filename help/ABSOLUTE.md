## CALL ABSOLUTE
---

### CALL ABSOLUTE is used to access interrupts on the computer or execute assembly type procedures.

#### SYNTAX

`CALL ABSOLUTE ([ argumentList ,] integerOffset )`

#### DESCRIPTION
* [CALL](./CALL.md) and parameter brackets are required in the statement.
* argumentList contains the list of arguments passed to the procedure.
* integerOffset contains the offset from the current code segment, set by [DEF](./DEF.md) [SEG](./SEG.md) and [SADD](./SADD.md) , to the starting location of the called procedure.
* QBasic and QB64 have the [ABSOLUTE](./ABSOLUTE.md) statement built in and require no library, like QuickBASIC did.
* NOTE: QB64 does not support [INT](./INT.md) 33h mouse functions above 3 or [BYVAL](./BYVAL.md) in an [ABSOLUTE](./ABSOLUTE.md) statement. Registers are emulated.


#### SEE ALSO
* [SADD](./SADD.md) , [INTERRUPT](./INTERRUPT.md)
* [_MOUSEINPUT](./_MOUSEINPUT.md)
