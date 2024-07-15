# ON

ON creates event procedure calls or enables event trapping.

  

* Set the sub-procedure call for [KEY(n)](KEY(n).md) "KEY(n)"), [STRIG(n)](STRIG(n).md) "STRIG(n)") and [TIMER(n)](TIMER(n).md)

* To turn on event trapping for [ON KEY(n)](ON KEY(n).md) "ON KEY(n)"), [ON STRIG(n)](ON STRIG(n).md) "ON STRIG(n)") and [ON TIMER(n)](ON TIMER(n).md) "ON TIMER(n)").

* In the case of [ON ERROR](ON ERROR.md) the trap is also enabled until a subsequent ON ERROR statement.
* ON procedures should be used only in the main program module and not inside of SUB procedures!
* If you have used the [$CHECKING]($CHECKING.md):[OFF](OFF.md) metacommand, [$CHECKING]($CHECKING.md):**ON** will turn on c++ error checking again.

  

## See also

* [ON...GOSUB](ON...GOSUB.md), [ON...GOTO](ON...GOTO.md)
* [OFF](OFF.md), [STOP](STOP.md), [KEY](KEY.md)
* [$CHECKING]($CHECKING.md)

  
