## TIMER
---

### A TIMER statement enables, turns off or stops timer event trapping. QBasic only uses the base timer, but QB64 can run many.

#### PARAMETERS
* number denotes a specific numbered timer event in QB64 only . QB64 can run many timer events at once including the base timer.
* [TIMER](./TIMER.md) [ON](./ON.md) enables event trapping of an [ON](./ON.md) [TIMER](./TIMER.md)(n) statement. While enabled, a check is made after every code statement to see if the specified time has elapsed and the [ON](./ON.md) [TIMER](./TIMER.md) [GOSUB](./GOSUB.md) (or [SUB](./SUB.md) in QB64) procedure is executed.
* [TIMER](./TIMER.md) [STOP](./STOP.md) disables timer event trapping. When an event occurs while stopped, it is remembered. If timer events are turned back on later, any remembered events are immediately executed.
* [TIMER](./TIMER.md) [OFF](./OFF.md) turns timer event trapping completely off and no subsequent events are remembered.
QB64 only


#### EXAMPLES
##### Example: How to update the time while printing at the same time in a program.
```vb
TIMER ON ' enable timer event trapping
 LOCATE 4, 2 ' set the starting PRINT position
 ON TIMER(10) GOSUB Clock ' set procedure execution repeat time
 DO WHILE INKEY$ = "": PRINT "A"; : SLEEP 6: LOOP
 TIMER OFF
 SYSTEM

Clock:
 row = CSRLIN ' Save current print cursor row.
 col = POS(0) ' Save current print cursor column.
 LOCATE 2, 37: PRINT TIME$; ' print current time at top of screen.
 LOCATE row, col ' return to last print cursor position
RETURN
```
  


#### SEE ALSO
* [ON](./ON.md) [TIMER](./TIMER.md)(n) , [TIMER](./TIMER.md) (function)
* [_DELAY](./_DELAY.md) , [_LIMIT](./_LIMIT.md)
