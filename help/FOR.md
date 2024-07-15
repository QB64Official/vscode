# FOR

The FOR statement creates a counter loop using specified start and stop numerical boundaries. The default increment is + 1.

  

## Syntax

FOR *counterVariable* = *startValue* [TO](TO.md) *stopValue* [[[STEP *increment*]
*{code}*
⋮
[NEXT](NEXT.md) [*counterVariable*]
  

## Parameters

* The FOR *counterVariable* name is required to define the counter span and may also be used after the NEXT keyword.
* The *startValue* [TO](TO.md) *stopValue* can be any literal or variable numerical type. Both values are required.
* [STEP](STEP.md) can be used for a loop *increment* other than the default *plus 1 and can be any positive or negative literal or variable numerical value as long as the STEP value corresponds to the loop's* startValue *and* stopValue*.*
* [NEXT](NEXT.md) ends the FOR loop code block and increments the counter to the next value even when it exceeds the stop limit.

  

## Description

* [FOR...NEXT](FOR...NEXT.md) counter loops must be within the proper start, stop and increment values or the entire loop code block will not be executed.
* Avoid changing the FOR *counterVariable'*s value inside of the loop. This obfuscates code and is a poor programming practice.
* Once the loop has been started, changing the variables holding the *startValue*, *stopValue* or *increment* value will not affect loop execution.
* **If the [STEP](STEP.md) *increment* value does not match the *startValue* [TO](TO.md) *stopValue* the FOR loop block will be ignored.**
	+ If *startValue* is less than *stopValue*, use the default increment or positive [STEP](STEP.md) value or the loop will not be executed.
	+ If *startValue* is more than *stopValue*, use a negative [STEP](STEP.md) interval or the loop will not be executed.
	+ The [STEP](STEP.md) *increment* value cannot be changed inside of the loop.
* Use **[EXIT](EXIT.md) FOR** to leave a FOR loop early when a certain condition is met inside of the loop.
* The [NEXT](NEXT.md) counter variable name is not required. NEXT loop increments can be separated by colons in nested FOR loops.
* **NOTE: When the FOR loop is exited after the *stopValue* is reached, the *counterVariable****s value will be* stopValue *+ 1 (or* stopValue *+* increment*)*
* **Beware of FOR loop counts that exceed the *counterVariable* type limits and may repeat without error in QB64.**
	+ For example, if *counterVariable* is of type [INTEGER](INTEGER.md) and the stop limit exceeds 32767, the *counterVariable* will reset back to -32768 and loop endlessly.

  

## Examples

*Example 1:* Adding all of the even numbers from 10 to 0.

``` FOR i = 10 TO 0 [STEP](STEP.md) -2   totaleven% = i + totaleven%   PRINT totaleven%; NEXT PRINT "After loop, i ="; i  
```

``` 10 18 24 28 30 30 After loop, i = -2  
```

*Explanation:* The loop counts down from 10 to every even value below it. The counter keeps stepping down until the FOR stop limit is reached or exceeded. Note that the value of i is -2 after the loop is exited. [NEXT](NEXT.md) always increments the counter one last time.
  

*Example 2:* How an entire FOR loop block is ignored when the start and stop limits do not match the default or [STEP](STEP.md) increment.

``` [PRINT](PRINT.md) "hi"  [FOR](FOR.md) i = 10 [TO](TO.md) 1 'requires a negative [STEP](STEP.md) value   [PRINT](PRINT.md) "lo" [NEXT](NEXT.md)  [PRINT](PRINT.md) "bye"  
```

``` hi bye  
```

  

## See also

* [STEP](STEP.md)
* [DO...LOOP](DO...LOOP.md), [WHILE...WEND](WHILE...WEND.md)

  
