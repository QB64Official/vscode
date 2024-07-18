## _DELAY
---

### The _DELAY statement suspends program execution for a SINGLE value of seconds.

#### SYNTAX

`_DELAY seconds!`

#### DESCRIPTION
* seconds! is the time to wait, accurate to nearest millisecond (.001).
* While waiting, cpu cycles are relinquished to other applications.
* Delays are not affected by midnight timer corrections.


#### SEE ALSO
* [_LIMIT](./_LIMIT.md)
* [TIMER](./TIMER.md)
* [ON](./ON.md) [TIMER](./TIMER.md)(n)
