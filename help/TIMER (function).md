<style type="text/css">
body {
    background: #00a !important;
    color: #ccc !important;
}
li {
    list-style-type: square !important;
    color: #ccc !important;
}
li::marker {
    color: #77f !important;
}    
hr {
    border-color: #55f !important;
    border-width: 2px !important;
}
h2 {
    color: #fff !important;
    border: 0 !important;
}
h3 {
    color: #cfc !important;
    border: 0 !important;
}
h4 {
    color: #ccc !important;
    border: 0 !important;
}
h5 {
    margin: 0 0 1em 0  !important;
    color: #88f !important;
    border: 0 !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
}
pre > code {
    background: transparent !important;
    margin: 0 !important;
    padding: 0 !important;
    border-radius: inherit !important; 
    border: 0 !important;
}
blockquote {
    border: 0 !important;
    background: transparent !important;
    margin: 0 !important;
    padding: 0 1em !important;
}
pre {
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
    margin: 0 !important;
    box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.25) !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}

</style>

## [TIMER_(function)](TIMER_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/TIMER (function))
---
<blockquote>

### The TIMER function returns the number of seconds past the previous midnite down to an accuracy of 1/18th (QuickBASIC) or 1/1000th (QB64) of a second.

</blockquote>

#### DESCRIPTION

<blockquote>

*  [TIMER](TIMER.md)  return values range from 0 at midnight to 86399! A comparison value must stay within that range!
*  [INTEGER](INTEGER.md)  or [LONG](LONG.md)  second values range from 0 at midnight to 86399 seconds each day.
*  QBasic can return [SINGLE](SINGLE.md)  values down to about .04 or 1/18th (one tick) of a second accurately.
*  QB64 can read [DOUBLE](DOUBLE.md)  accuracy down to 1 millisecond. Example: start# = [TIMER](TIMER.md) (.001)
*  Use [DOUBLE](DOUBLE.md)  variables for millisecond accuracy as [SINGLE](SINGLE.md)  values are only accurate to 100ths of a second later in the day!
*  [TIMER](TIMER.md)  loops should use a midnight adjustment to avoid non-ending loops in QBasic.
*  [TIMER](TIMER.md)  can also be used for timing program Events. See [ON](ON.md)  [TIMER](TIMER.md) (n) or the [TIMER](TIMER.md)  statement.
*  QB64 can use a [_DELAY](DELAY.md)  down to .001(one millisecond) or [_LIMIT](LIMIT.md)  loops per second. Both help limit program CPU usage.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_DELAY](DELAY.md)  , [_LIMIT](LIMIT.md)  , [SLEEP](SLEEP.md) 
*  [RANDOMIZE](RANDOMIZE.md)  , Scancodes
*  [ON](ON.md)  [TIMER](TIMER.md) (n) , [TIMER](TIMER.md) 

</blockquote>
