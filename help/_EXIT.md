# EXIT

The EXIT statement is used to exit certain QBasic procedures.

  

## Syntax

EXIT {DO|WHILE|FOR|SUB|FUNCTION|SELECT|CASE}
  

## Description

* EXIT leaves any of the following procedures immediately.
	+ EXIT DO exits a [DO...LOOP](DO...LOOP.md).
	+ EXIT WHILE exits a [WHILE...WEND](WHILE...WEND.md) loop.
	+ EXIT FOR exits a [FOR...NEXT](FOR...NEXT.md) counter loop.
	+ EXIT SUB exits a [SUB](SUB.md) procedure before it ends. Use before any [GOSUB](GOSUB.md) procedures using [RETURN](RETURN.md).
	+ EXIT FUNCTION exits a [FUNCTION](FUNCTION.md) procedure before it ends. The value passed by the function's name should be defined.
	+ EXIT SELECT exits a [SELECT CASE](SELECT CASE.md) block.
	+ EXIT CASE does the same as EXIT SELECT unless when used in a **SELECT EVERYCASE** block; in such case, execution proceeds to the next CASE evaluation.
* EXIT statements normally use an [IF...THEN](IF...THEN.md) statement to evaluate a program condition that would require the EXIT.
* To exit a program and allow the last program screen to be displayed with the message "Press any key to continue...", use [END](END.md).
* To exit the program immediately, use [SYSTEM](SYSTEM.md).

  

## Availability

* **EXIT SELECT/CASE** available in:
	+ **QB64 v1.5 and up**
	+ **QB64-PE all versions**
* All other variants available in all versions of QB64

  

## See also

* [_EXIT (function)](_EXIT (function).md) "EXIT (function)")
* [END](END.md), [SYSTEM](SYSTEM.md)
* [STOP](STOP.md)

  
