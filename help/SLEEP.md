# SLEEP

SLEEP pauses the program indefinitely or for a specified number of seconds, program is unpaused when the user presses a key or when the specified number of seconds has passed.

  

## Syntax

SLEEP [seconds]
  

* Seconds are an optional [INTEGER](INTEGER.md) value. If there is no parameter, then it waits for a keypress.
* Any user keypress will abort the SLEEP time.
* SLEEP does NOT clear the keyboard buffer so it can affect [INKEY$](INKEY$.md), [INPUT](INPUT.md), [INPUT$](INPUT$.md) and [LINE INPUT](LINE INPUT.md) reads.
* Use an [INKEY$](INKEY$.md) keyboard buffer clearing loop when an empty keyboard buffer is necessary.
* SLEEP allows other programs to share the processor time during the interval.

  

*Example:*

``` [CLS](CLS.md) [PRINT](PRINT.md) "Press a key..." SLEEP [PRINT](PRINT.md) "You pressed a key, now wait for 2 seconds." SLEEP 2 [PRINT](PRINT.md) "You've waited for 2 seconds." [PRINT](PRINT.md) "(or you pressed a key)"  
```

``` Press a key... You pressed a key, now wait for 2 seconds. You've waited for 2 seconds. (or you pressed a key)  
```

*Explanation:* SLEEP without any arguments waits until a key is pressed, next SLEEP statement uses the argument 2 which means that it will wait for 2 seconds, any number of seconds can be specified.
  

## See also

* [TIMER (function)](TIMER (function).md) "TIMER (function)"), [INKEY$](INKEY$.md)
* [_DELAY](_DELAY.md), [_LIMIT](_LIMIT.md)

  
