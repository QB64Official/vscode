## EXIT
---

### The EXIT statement is used to exit certain QBasic procedures.

#### SYNTAX

`EXIT {DO|WHILE|FOR|SUB|FUNCTION|SELECT|CASE}`

#### DESCRIPTION
* [EXIT](./EXIT.md) leaves any of the following procedures immediately.
	* [EXIT](./EXIT.md) [DO](./DO.md) exits a [DO](./DO.md)...[LOOP](./LOOP.md) .
	* [EXIT](./EXIT.md) [WHILE](./WHILE.md) exits a [WHILE](./WHILE.md)...[WEND](./WEND.md) loop.
	* [EXIT](./EXIT.md) [FOR](./FOR.md) exits a [FOR](./FOR.md)...[NEXT](./NEXT.md) counter loop.
	* [EXIT](./EXIT.md) [SUB](./SUB.md) exits a [SUB](./SUB.md) procedure before it ends. Use before any [GOSUB](./GOSUB.md) procedures using [RETURN](./RETURN.md) .
	* [EXIT](./EXIT.md) [FUNCTION](./FUNCTION.md) exits a [FUNCTION](./FUNCTION.md) procedure before it ends. The value passed by the function's name should be defined.
	* [EXIT](./EXIT.md) [SELECT](./SELECT.md) exits a [SELECT](./SELECT.md) [CASE](./CASE.md) block.
	* [EXIT](./EXIT.md) [CASE](./CASE.md) does the same as [EXIT](./EXIT.md) [SELECT](./SELECT.md) unless when used in a [SELECT](./SELECT.md) [EVERYCASE](./EVERYCASE.md) block; in such case, execution proceeds to the next [CASE](./CASE.md) evaluation.
* [EXIT](./EXIT.md) statements normally use an [IF](./IF.md)...[THEN](./THEN.md) statement to evaluate a program condition that would require the [EXIT](./EXIT.md).
* To exit a program and allow the last program screen to be displayed with the message "Press any key to continue...", use [END](./END.md) .
* To exit the program immediately, use [SYSTEM](./SYSTEM.md) .


#### SEE ALSO
* [_EXIT](./_EXIT.md) (function)
* [END](./END.md) , [SYSTEM](./SYSTEM.md)
* [STOP](./STOP.md)
