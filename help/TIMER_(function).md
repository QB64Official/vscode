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
    margin: 0 0 0.5em 0  !important;
    color: #88f !important;
    border: 0 !important;
    font-style: italic !important;
    font-weight: normal !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 4px !important; 
    border: 1px solid #333 !important;
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
    border-radius: 4px !important;
    background: #000 !important;
    border: 1px solid #333 !important;
    margin: 0 !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}
br + pre {
    border-radius: 0 !important;
    border-style: inset !important;
    border-width: 5px !important;
    border-color: #999 !important;
    background-color: #000 !important;
    box-shadow: 0px 10px 3px rgba(0, 0, 0, 0.25) !important;
    margin-top: -1em !important;
}
br + pre::before {
    content: "OUTPUT \A" !important;
    color: #555 !important;
    border-bottom: 1px solid #333;
    font-size: x-small;
    display: block !important;
    padding: 0 3px !important;
    margin: -1em -1em 1em -1em !important;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */    
}
br ~ h5 {
    margin-top: 2em !important;
}
.explanation {
    color: #995 !important;
    /* background-color: rgba(150, 150, 100) !important; */
    border-radius: 10em !important;
    border: 2px #441 dashed !important;
    padding: 8px 32px !important;
    margin-bottom: 4em !important;
    font-size: x-small !important;
}
</style>


## [TIMER (function)](TIMER_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/TIMER%20%28function%29)
---
<blockquote>

### The TIMER function returns the number of seconds past the previous midnite down to an accuracy of 1/18th (QuickBASIC) or 1/1000th (QB64) of a second.

</blockquote>

#### DESCRIPTION

<blockquote>


* [TIMER](TIMER.md) return values range from 0 at midnight to 86399! A comparison value must stay within that range!
* [INTEGER](INTEGER.md) or [LONG](LONG.md) second values range from 0 at midnight to 86399 seconds each day.
* QBasic can return [SINGLE](SINGLE.md) values down to about .04 or 1/18th (one tick) of a second accurately.
* QB64 can read [DOUBLE](DOUBLE.md) accuracy down to 1 millisecond. Example: start# = TIMER(.001)
* Use [DOUBLE](DOUBLE.md) variables for millisecond accuracy as [SINGLE](SINGLE.md) values are only accurate to 100ths of a second later in the day!
* [TIMER](TIMER.md) loops should use a midnight adjustment to avoid non-ending loops in QBasic.
* [TIMER](TIMER.md) can also be used for timing program Events. See [ON](ON.md) TIMER(n) or the [TIMER](TIMER.md) statement.
* QB64 can use a [_DELAY](DELAY.md) down to .001(one millisecond) or [_LIMIT](LIMIT.md) loops per second. Both help limit program CPU usage.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Delay SUB with a midnight correction for when TIMER returns to 0. QB64 can use _DELAY for delays down to .001.
```vb
DO
PRINT "Hello";
Delay .5  'accuracy down to .05 seconds or 1/18th of a second in QBasic
PRINT "World!";
LOOP UNTIL INKEY$ = CHR$(27) 'escape key exit

END

SUB Delay (dlay!)
start! = TIMER
DO WHILE start! + dlay! >= TIMER
IF start! > TIMER THEN start! = start! - 86400
LOOP
END SUB
```
  
<br>



##### Example 2: Looping one TIMER tick of 1/18th of a second (ticks per second can be changed)
```vb
DEF SEG = 0 ' set to PEEK and POKE TIMER Ticks
DO ' main program loop
' program code
POKE 1132, 0 ' zero Timer ticks
DO ' delay loop
x% = PEEK(1132)
IF x% <> px% THEN PRINT x%;
px% = x%
LOOP UNTIL x% >= 18 '18 ticks in one second
PRINT "code " ' program code
LOOP UNTIL INKEY$ = CHR$(27)
DEF SEG ' reset segment to default

END
```
  
<br>


<div class="explanation">Explanation: SINGLE variables will cut off the millisecond accuracy returned so DOUBLE variables should be used. TIMER values will also exceed INTEGER limits. When displaying TIMER values, use LONG for seconds and DOUBLE for milliseconds.</div>

```vb
0  1  2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18 code
0  1  2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18 code
0  1  2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18 code
```
  
<br>



##### Example 3: Using a DOUBLE variable for TIMER (.001) millisecond accuracy in QB64 throughout the day.
```vb
ts! = TIMER(.001)     'single variable
td# = TIMER(.001)     'double variable

PRINT "Single ="; ts!
PRINT "Double ="; td#
```
  
<br>

```vb
Single = 77073.09
Double = 77073.094
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_DELAY](DELAY.md) , [_LIMIT](LIMIT.md) , [SLEEP](SLEEP.md)
* [RANDOMIZE](RANDOMIZE.md) , Scancodes
* [ON](ON.md) TIMER(n) , [TIMER](TIMER.md)
</blockquote>
