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


## [NEXT](NEXT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/NEXT)
---
<blockquote>

### NEXT is used in a FOR counter loop to progress through the loop count.

</blockquote>

#### SYNTAX

<blockquote>

`FOR counterVariable = startValue TO stopValue [[[STEP]] increment ] {code} ⋮`

</blockquote>

#### DESCRIPTION

<blockquote>


* [NEXT](NEXT.md) is required in a [FOR](FOR.md) loop or a "FOR without NEXT" error will occur.
* The [FOR](FOR.md) variable name is not required after [NEXT](NEXT.md) .
* [NEXT](NEXT.md) can be grouped with other NEXTs in nested [FOR](FOR.md) loops using colons like [NEXT](NEXT.md) : [NEXT](NEXT.md)
* [NEXT](NEXT.md) can also end more than one nested [FOR](FOR.md) loop using comma separated variables like [NEXT](NEXT.md) j, i
* [NEXT](NEXT.md) increases the [FOR](FOR.md) loop count, so after the loop is over the counterVariable's value will be stopValue + 1 (or stopValue + increment).
* [NEXT](NEXT.md) is also used with the [RESUME](RESUME.md) statement.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Finding the FOR variable value AFTER a simple counter loop to 10.
```vb
FOR i = 1 TO 10
PRINT i;
NEXT i

PRINT "AFTER the LOOP, NEXT makes the value of i ="; i
```
  
<br>

```vb
1 2 3 4 5 6 7 8 9 10 AFTER the LOOP, NEXT makes the value of i = 11
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* FOR...NEXT
* DO...LOOP
* [RESUME](RESUME.md) [NEXT](NEXT.md)
</blockquote>
