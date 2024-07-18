## SUB
---

### A SUB procedure is a procedure within a program that can calculate and return multiple parameter values just like a full program.

#### SYNTAX

`SUB ProcedureName [( 1stParam [, 2ndParam ... [, lastParam ]])]`

#### PARAMETERS
* Parameters passed after the procedure call must match the variable types in the [SUB](./SUB.md) parameters in order.
* If there are no parameter s passed or they are [SHARED](./SHARED.md) the parameters and parenthesis are not required in the procedure.
* Parameter Variable names in the procedure do not have to match the names used in the [CALL](./CALL.md) , just the value types.


#### DESCRIPTION
* All dynamic variable values return to 0 or null strings when the procedure is exited except for [STATIC](./STATIC.md) variable values.
* [SUB](./SUB.md) procedures can return multiple values through the parameters unlike functions.
* [SUB](./SUB.md) procedures return to the next code statement after the call in the main or other procedures.
* [EXIT](./EXIT.md) [SUB](./SUB.md) can be used to exit early or to exit before [GOSUB](./GOSUB.md) procedures using [RETURN](./RETURN.md) .
* [TYPE](./TYPE.md) and [DECLARE](./DECLARE.md) [LIBRARY](./LIBRARY.md) declarations can be made inside of [SUB](./SUB.md) procedures in QB64 only.
* [SUB](./SUB.md) procedures can save program memory as all memory used in a [SUB](./SUB.md) is released on procedure exit except for [STATIC](./STATIC.md) values.
* [_DEFINE](./_DEFINE.md) can be used to define all new or old QB64 variable [TYPE](./TYPE.md) definitions instead of [DEF](./DEF.md)***.
* $INCLUDE text library files with needed [SUB](./SUB.md) and [FUNCTION](./FUNCTION.md) procedures can be included in programs after all sub-procedures.
* QB64 ignores all procedural [DECLARE](./DECLARE.md) statements. Define all parameter TYPEs in the [SUB](./SUB.md) procedure.
* Images are not deallocated when the [SUB](./SUB.md) or [FUNCTION](./FUNCTION.md) they are created in ends. Free them with [_FREEIMAGE](./_FREEIMAGE.md) .


#### SEE ALSO
* [FUNCTION](./FUNCTION.md) , [CALL](./CALL.md)
* [BYVAL](./BYVAL.md) , [SCREEN](./SCREEN.md)
* [EXIT](./EXIT.md) , [END](./END.md)
