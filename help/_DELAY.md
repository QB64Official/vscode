# _DELAY

The _DELAY statement suspends program execution for a [SINGLE](SINGLE.md) value of seconds.

  

## Syntax

_DELAY *seconds!*
  

## Description

* *seconds!* is the time to wait, accurate to nearest millisecond (.001).
* While waiting, cpu cycles are relinquished to other applications.
* Delays are not affected by midnight timer corrections.

  

## See also

* [_LIMIT](_LIMIT.md)
* [TIMER](TIMER.md)
* [ON TIMER(n)](ON TIMER(n).md) "ON TIMER(n)")

  
