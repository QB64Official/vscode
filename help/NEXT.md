# NEXT

NEXT is used in a [FOR](FOR.md) counter loop to progress through the loop count.

  

## Syntax

[FOR](FOR.md) *counterVariable* = *startValue* [TO](TO.md) *stopValue* [[[STEP *increment*]
*{code}*
⋮
NEXT [*counterVariable*]
  

## Description

* NEXT is required in a FOR loop or a ["FOR without NEXT" error]("FOR without NEXT" error.md) will occur.
* The FOR variable name is not required after NEXT.
* NEXT can be grouped with other NEXTs in nested FOR loops using colons like NEXT: NEXT
* NEXT can also end more than one nested [FOR](FOR.md) loop using comma separated variables like NEXT j, i
* NEXT increases the FOR loop count, so after the loop is over the counterVariable's value will be stopValue + 1 (or stopValue + increment).
* NEXT is also used with the [RESUME](RESUME.md) statement.

  

## Examples

*Example:* Finding the FOR variable value AFTER a simple counter loop to 10.

``` FOR i = 1 TO 10 PRINT i; NEXT i  PRINT "AFTER the LOOP, NEXT makes the value of i ="; i  
```

``` 1 2 3 4 5 6 7 8 9 10 AFTER the LOOP, NEXT makes the value of i = 11  
```

*Result:* The last value of i = 11 although FOR only looped 10 times. **Only use the count values while inside of the loop or compensate for this behavior in your code.**

  

## See also

* [FOR...NEXT](FOR...NEXT.md)
* [DO...LOOP](DO...LOOP.md)
* [RESUME NEXT](RESUME NEXT.md)

  
