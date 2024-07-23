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


## [FOR...NEXT](FOR...NEXT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/FOR...NEXT)
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


* The [FOR](FOR.md) counterVariable name is required to define the counter span and may also be used after the [NEXT](NEXT.md) keyword.
* The startValue [TO](TO.md) stopValue can be any literal or variable numerical type. Both values are  required.
* [STEP](STEP.md) can be used for a loop increment other than the default plus 1 and can be any positive or negative literal or variable numerical value as long as the [STEP](STEP.md) value corresponds to the loop's startValue and stopValue .
* [NEXT](NEXT.md) ends the [FOR](FOR.md) loop code block and increments the counter to the next value even when it exceeds the stop limit.
</blockquote>

#### DESCRIPTION

<blockquote>


* FOR...NEXT counter loops must be within the proper start, stop and increment values or the entire loop code block will not be executed.
* Avoid changing the [FOR](FOR.md) counterVariable' s value inside of the loop. This obfuscates code and is a poor programming practice.
* Once the loop has been started, changing the variables holding the startValue , stopValue or increment value will not affect loop execution.
* If the [STEP](STEP.md) increment value does not match the startValue [TO](TO.md) stopValue the [FOR](FOR.md) loop block will be ignored.
* If startValue is less than stopValue , use the default increment or positive [STEP](STEP.md) value or the loop will not be executed.
* If startValue is more than stopValue , use a negative [STEP](STEP.md) interval or the loop will not be executed.
* The [STEP](STEP.md) increment value cannot be changed inside of the loop.
* Use [EXIT](EXIT.md) [FOR](FOR.md) to leave a [FOR](FOR.md) loop early when a certain condition is met inside of the loop.
* The [NEXT](NEXT.md) counter variable name is not required. [NEXT](NEXT.md) loop increments can be separated by colons in nested [FOR](FOR.md) loops.
* NOTE: When the [FOR](FOR.md) loop is exited after the stopValue is reached, the counterVariable s value will be stopValue + 1 (or stopValue + increment )
* Beware of [FOR](FOR.md) loop counts that exceed the counterVariable type limits and may repeat without error in QB64.
* For example, if counterVariable is of type [INTEGER](INTEGER.md) and the stop limit exceeds 32767, the counterVariable will reset back to -32768 and loop endlessly.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Adding all of the even numbers from 10 to 0.
```vb
FOR i = 10 TO 0 STEP -2
totaleven% = i + totaleven%
PRINT totaleven%;
NEXT
PRINT "After loop, i ="; i
```
  
<br>

```vb
10 18 24 28 30 30 After loop, i = -2
```
  
<br>


<div class="explanation">Explanation: The loop counts down from 10 to every even value below it. The counter keeps stepping down until the FOR stop limit is reached or exceeded. Note that the value of i is -2 after the loop is exited. NEXT always increments the counter one last time.</div>



##### Example 2: How an entire FOR loop block is ignored when the start and stop limits do not match the default or STEP increment.
```vb
PRINT "hi"

FOR i = 10 TO 1 'requires a negative STEP value
PRINT "lo"
NEXT

PRINT "bye"
```
  
<br>

```vb
hi
bye
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [STEP](STEP.md)
* DO...LOOP , WHILE...WEND
</blockquote>
