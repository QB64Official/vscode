# _LIMIT

The _LIMIT statement sets the loop repeat rate of a program to so many per second, relinquishing spare CPU cycles to other applications.

  

## Syntax

_LIMIT *framesPerSecond!*
  

* The *framesPerSecond!* [SINGLE](SINGLE.md) parameter value adjusts the loops per second of a program loop. **Do not use negative values.**
* The loop code is executed before the loop is delayed. Loop cycles below once per second may delay program [_EXITs](_EXITs.md).
* _LIMIT measures its interval from the previous time that it was called and minor adjustments are automatically made to ensure that the number of times a loop is repeated is correct overall.
* Loop cycle rates of 1000 or less can **significantly reduce CPU usage** in programs.
* Do not use it to limit a loop to **run less than once every 60 seconds** (i.e. _LIMIT .0167 or _LIMIT 1/60) or an [ILLEGAL FUNCTION CALL error](ILLEGAL FUNCTION CALL error.md) will occur.
* Do not use _LIMIT as a timing delay outside of loops. Use [_DELAY](_DELAY.md) instead.
* Use _LIMIT to slow down old QBasic program loops that run too fast and use too much CPU.

  

## Examples

*Example:* Limits loop execution to 30 frames per second and limits the program's CPU usage.

``` [PRINT](PRINT.md) "To Quit press ESC key!" [DO](DO.md)     _LIMIT 30     [PRINT](PRINT.md) [CHR$](CHR$.md)(26);     [IF](IF.md) [INKEY$](INKEY$.md) = [CHR$](CHR$.md)(27) [THEN](THEN.md) [EXIT DO](EXIT DO.md) [LOOP](LOOP.md)  
```

``` To Quit press ESC key! →→→→→→→→→→→→→→→→→→→→  
```

*Note:* In the above example, _LIMIT has to be within the loop.
  

## See also

* [_DELAY](_DELAY.md)
* [TIMER](TIMER.md), [ON TIMER(n)](ON TIMER(n).md) "ON TIMER(n)")
* [SLEEP](SLEEP.md)

  
