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

## [FOR](FOR.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/FOR)
---
<blockquote>

### The FOR statement creates a counter loop using specified start and stop numerical boundaries. The default increment is + 1.

</blockquote>

#### SYNTAX

<blockquote>

`FOR counterVariable = startValue TO stopValue [[[STEP]] increment ] {code} ⋮`

</blockquote>

#### PARAMETERS

<blockquote>

*  The [FOR](FOR.md)  counterVariable name is required to define the counter span and may also be used after the [NEXT](NEXT.md)  keyword.
*  The startValue [TO](TO.md)  stopValue can be any literal or variable numerical type. Both values are  required.
*  [STEP](STEP.md)  can be used for a loop increment other than the default plus 1 and can be any positive or negative literal or variable numerical value as long as the [STEP](STEP.md)  value corresponds to the loop's startValue and stopValue .
*  [NEXT](NEXT.md)  ends the [FOR](FOR.md)  loop code block and increments the counter to the [NEXT](NEXT.md)  value even when it exceeds the stop limit.

</blockquote>

#### DESCRIPTION

<blockquote>

*  [FOR](FOR.md) ... [NEXT](NEXT.md)  counter loops must be within the proper start, stop and increment values [OR](OR.md)  the entire loop code block will not be executed.
*  Avoid changing the [FOR](FOR.md)  counterVariable' s value inside of the loop. This obfuscates code and is a poor programming practice.
*  Once the loop has been started, changing the variables holding the startValue , stopValue or increment value will not affect loop execution.
*  If the [STEP](STEP.md)  increment value does not match the startValue [TO](TO.md)  stopValue the [FOR](FOR.md)  loop block will be ignored.
	* If startValue is less than stopValue , use the default increment or positive [STEP](STEP.md)  value or the loop will not be executed.
	* If startValue is more than stopValue , use a negative [STEP](STEP.md)  interval or the loop will not be executed.
	* The [STEP](STEP.md)  increment value cannot be changed inside of the loop.
*  Use [EXIT](EXIT.md) [FOR](FOR.md)  to leave a [FOR](FOR.md)  loop early when a certain condition is met inside of the loop.
*  The [NEXT](NEXT.md)  counter variable name is not required. [NEXT](NEXT.md)  loop increments can be separated by colons in nested [FOR](FOR.md)  loops.
*  NOTE: When the [FOR](FOR.md)  loop is exited after the stopValue is reached, the counterVariable s value will be stopValue + 1 ( [OR](OR.md)  stopValue + increment )
*  Beware of [FOR](FOR.md)  loop counts that exceed the counterVariable type limits and may repeat without error in QB64.
	* For example, if counterVariable is of type [INTEGER](INTEGER.md)  and the stop limit exceeds 32767, the counterVariable will reset back to -32768 and loop endlessly.


</blockquote>

#### SEE ALSO

<blockquote>

*  [STEP](STEP.md) 
*  [DO](DO.md) ... [LOOP](LOOP.md)  , [WHILE](WHILE.md) ... [WEND](WEND.md) 

</blockquote>
