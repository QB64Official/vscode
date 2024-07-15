# LOOP

The **LOOP** statement denotes the end of a [DO...LOOP](DO...LOOP.md) where the program jumps to the beginning of the loop if the optional condition is true.

  

## Syntax

DO
.
.
.
LOOP [{UNTIL|WHILE} *condition*]
  

* LOOP indicates the bottom or end of a [DO...LOOP](DO...LOOP.md) block of code.
* Either the [DO](DO.md) statement or LOOP statement can set a condition to end the loop.
* When a loop uses a LOOP condition, the code inside of it will run at least ONCE.

* A [WHILE](WHILE.md) condition continues the loop until the condition is false.
* An [UNTIL](UNTIL.md) condition continues the loop until the condition is true.
* If only DO and LOOP are used the loop will never end! **Ctrl-Break** can be used to stop an endless loop!
* DO LOOPs can also be exited using [EXIT DO](EXIT DO.md) or [GOTO](GOTO.md).

  

## See also

* [FOR...NEXT](FOR...NEXT.md) {counter loop)
* [WHILE...WEND](WHILE...WEND.md) (loop)
* [UNTIL](UNTIL.md), [WHILE](WHILE.md) {conditions)
* [DO...LOOP](DO...LOOP.md), [EXIT DO](EXIT DO.md)

  
