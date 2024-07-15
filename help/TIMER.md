# TIMER

A **TIMER** statement enables, turns off or stops timer event trapping. QBasic only uses the base timer, but **QB64** can run many.

  

## Syntax

QuickBASIC
TIMER {ON|STOP|OFF}
QB64
TIMER(*number%*) {ON|STOP|OFF|FREE}
  

## Parameters

* *number* denotes a specific numbered timer event in **QB64 only**. QB64 can run many timer events at once including the base timer.
* TIMER ON enables event trapping of an [ON TIMER(n)](ON TIMER(n).md) "ON TIMER(n)") statement. While enabled, a check is made after every code statement to see if the specified time has elapsed and the ON TIMER [GOSUB](GOSUB.md) (or [SUB](SUB.md) in QB64) procedure is executed.
* TIMER STOP disables timer event trapping. When an event occurs while stopped, it is remembered. If timer events are turned back on later, any remembered events are immediately executed.
* TIMER OFF turns timer event trapping completely off and no subsequent events are remembered.

* Get a TIMER number from [_FREETIMER](_FREETIMER.md) ONLY except when the base timer(no number or 0) is used. Use specific variables or an array to hold each event number value for later reference.
* If the TIMER number is omitted or 0, the TIMER used is the base timer.
* Specific TIMER events can be enabled, suspended, turned off or freed using TIMER(n) ON, STOP, OFF or FREE.
* TIMER(n) **FREE** clears a specific timer event when it is no longer needed. **The base TIMER or TIMER(0) cannot be freed!**

* The [TIMER (function)](TIMER (function).md) "TIMER (function)") can be used to find timed intervals down to 1 millisecond(.001) accuracy.
* The [_DELAY](_DELAY.md) statement can be used to delay program execution for intervals down to milliseconds.
* [_LIMIT](_LIMIT.md) can slow down loops to a specified number of frames per second. This can also alleviate a program's CPU usage.

  

## Examples

*Example:* How to update the time while [printing](printing.md) at the same time in a program.

```   TIMER ON ' enable timer event trapping   LOCATE 4, 2 ' set the starting PRINT position   [ON TIMER](ON TIMER.md) "ON TIMER(n)")(10) GOSUB Clock ' set procedure execution repeat time   DO WHILE INKEY$ = "": PRINT "A"; : SLEEP 6: LOOP   TIMER OFF   [SYSTEM](SYSTEM.md)   Clock:   row = [CSRLIN](CSRLIN.md) ' Save current print cursor row.   col = [POS(0)](POS(0).md) ' Save current print cursor column.   LOCATE 2, 37: PRINT [TIME$](TIME$.md); ' print current time at top of screen.   LOCATE row, col ' return to last print cursor position  [RETURN](RETURN.md)  
```

NOTE: SLEEP will be interrupted in QBasic.
  

## See also

* [ON TIMER(n)](ON TIMER(n).md) "ON TIMER(n)"), [TIMER (function)](TIMER (function).md) "TIMER (function)")
* [_DELAY](_DELAY.md), [_LIMIT](_LIMIT.md)

  
