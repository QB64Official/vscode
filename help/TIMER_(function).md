## TIMER (function)
---
<blockquote>

### The TIMER function returns the number of seconds past the previous midnite down to an accuracy of 1/18th (QuickBASIC) or 1/1000th (QB64) of a second.

</blockquote>

#### DESCRIPTION

<blockquote>

* [TIMER](./TIMER.md) return values range from 0 at midnight to 86399! A comparison value must stay within that range!
* [INTEGER](./INTEGER.md) or [LONG](./LONG.md) second values range from 0 at midnight to 86399 seconds each day.
* QBasic can return [SINGLE](./SINGLE.md) values down to about .04 or 1/18th (one tick) of a second accurately.
* QB64 can read [DOUBLE](./DOUBLE.md) accuracy down to 1 millisecond. Example: start# = [TIMER](./TIMER.md)(.001)
* Use [DOUBLE](./DOUBLE.md) variables for millisecond accuracy as [SINGLE](./SINGLE.md) values are only accurate to 100ths of a second later in the day!
* [TIMER](./TIMER.md) loops should use a midnight adjustment to avoid non-ending loops in QBasic.
* [TIMER](./TIMER.md) can also be used for timing program Events. See [ON](./ON.md) [TIMER](./TIMER.md)(n) or the [TIMER](./TIMER.md) statement.
* QB64 can use a [_DELAY](./_DELAY.md) down to .001(one millisecond) or [_LIMIT](./_LIMIT.md) loops per second. Both help limit program CPU usage.


</blockquote>

#### SEE ALSO

<blockquote>

* [_DELAY](./_DELAY.md) , [_LIMIT](./_LIMIT.md) , [SLEEP](./SLEEP.md)
* [RANDOMIZE](./RANDOMIZE.md) , Scancodes
* [ON](./ON.md) [TIMER](./TIMER.md)(n) , [TIMER](./TIMER.md)

</blockquote>
