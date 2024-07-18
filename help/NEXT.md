## NEXT
---

### NEXT is used in a FOR counter loop to progress through the loop count.

#### SYNTAX

`FOR counterVariable = startValue TO stopValue [[[STEP]] increment ] {code} ⋮`

#### DESCRIPTION
* [NEXT](./NEXT.md) is required in a [FOR](./FOR.md) loop or a "[FOR](./FOR.md) without [NEXT](./NEXT.md)" error will occur.
* The [FOR](./FOR.md) variable name is not required after [NEXT](./NEXT.md) .
* [NEXT](./NEXT.md) can be grouped with other NEXTs in nested [FOR](./FOR.md) loops using colons like [NEXT](./NEXT.md) : [NEXT](./NEXT.md)
* [NEXT](./NEXT.md) can also end more than one nested [FOR](./FOR.md) loop using comma separated variables like [NEXT](./NEXT.md) j, i
* [NEXT](./NEXT.md) increases the [FOR](./FOR.md) loop count, so after the loop is over the counterVariable's value will be stopValue + 1 (or stopValue + increment).
* [NEXT](./NEXT.md) is also used with the [RESUME](./RESUME.md) statement.


#### EXAMPLES
##### Example: Finding the FOR variable value AFTER a simple counter loop to 10.
```vb
FOR i = 1 TO 10
PRINT i;
NEXT i

PRINT "AFTER the LOOP, NEXT makes the value of i ="; i
```
  
```vb
1 2 3 4 5 6 7 8 9 10 AFTER the LOOP, NEXT makes the value of i = 11
```
  
##### Result: The last value of i = 11 although FOR only looped 10 times. Only use the count values while inside of the loop or compensate for this behavior in your code.


#### SEE ALSO
* [FOR](./FOR.md)...[NEXT](./NEXT.md)
* [DO](./DO.md)...[LOOP](./LOOP.md)
* [RESUME](./RESUME.md) [NEXT](./NEXT.md)
