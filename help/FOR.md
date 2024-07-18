## FOR
---

### The FOR statement creates a counter loop using specified start and stop numerical boundaries. The default increment is + 1.

#### SYNTAX

`FOR counterVariable = startValue TO stopValue [[[STEP]] increment ] {code} ⋮`

#### PARAMETERS
* The [FOR](./FOR.md) counterVariable name is required to define the counter span and may also be used after the [NEXT](./NEXT.md) keyword.
* The startValue [TO](./TO.md) stopValue can be any literal or variable numerical type. Both values are  required.
* [STEP](./STEP.md) can be used for a loop increment other than the default plus 1 and can be any positive or negative literal or variable numerical value as long as the [STEP](./STEP.md) value corresponds to the loop's startValue and stopValue .
* [NEXT](./NEXT.md) ends the [FOR](./FOR.md) loop code block and increments the counter to the next value even when it exceeds the stop limit.


#### DESCRIPTION
* [FOR](./FOR.md)...[NEXT](./NEXT.md) counter loops must be within the proper start, stop and increment values or the entire loop code block will not be executed.
* Avoid changing the [FOR](./FOR.md) counterVariable' s value inside of the loop. This obfuscates code and is a poor programming practice.
* Once the loop has been started, changing the variables holding the startValue , stopValue or increment value will not affect loop execution.
* If the [STEP](./STEP.md) increment value does not match the startValue [TO](./TO.md) stopValue the [FOR](./FOR.md) loop block will be ignored.
	* If startValue is less than stopValue , use the default increment or positive [STEP](./STEP.md) value or the loop will not be executed.
	* If startValue is more than stopValue , use a negative [STEP](./STEP.md) interval or the loop will not be executed.
	* The [STEP](./STEP.md) increment value cannot be changed inside of the loop.
* Use [EXIT](./EXIT.md) [FOR](./FOR.md) to leave a [FOR](./FOR.md) loop early when a certain condition is met inside of the loop.
* The [NEXT](./NEXT.md) counter variable name is not required. [NEXT](./NEXT.md) loop increments can be separated by colons in nested [FOR](./FOR.md) loops.
* NOTE: When the [FOR](./FOR.md) loop is exited after the stopValue is reached, the counterVariable s value will be stopValue + 1 (or stopValue + increment )
* Beware of [FOR](./FOR.md) loop counts that exceed the counterVariable type limits and may repeat without error in QB64.
	* For example, if counterVariable is of type [INTEGER](./INTEGER.md) and the stop limit exceeds 32767, the counterVariable will reset back to -32768 and loop endlessly.


#### EXAMPLES
##### Example 1: Adding all of the even numbers from 10 to 0.
```vb
FOR i = 10 TO 0 STEP -2
 totaleven% = i + totaleven%
 PRINT totaleven%;
NEXT
PRINT "After loop, i ="; i
```
  
```vb
10 18 24 28 30 30 After loop, i = -2
```
  
##### Example 2: How an entire FOR loop block is ignored when the start and stop limits do not match the default or STEP increment.
```vb
PRINT "hi"

FOR i = 10 TO 1 'requires a negative STEP value
 PRINT "lo"
NEXT

PRINT "bye"
```
  
```vb
hi
bye
```
  


#### SEE ALSO
* [STEP](./STEP.md)
* [DO](./DO.md)...[LOOP](./LOOP.md) , [WHILE](./WHILE.md)...[WEND](./WEND.md)
