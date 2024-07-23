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


## [IMP](IMP.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/IMP)
---
<blockquote>

### The IMP logical operator converts the result of two comparative values and returns a bit result.

</blockquote>

#### SYNTAX

<blockquote>

`result = firstValue IMP secondValue`

</blockquote>

#### DESCRIPTION

<blockquote>


* Returns a different result from [AND](AND.md) , [OR](OR.md) or [XOR](XOR.md) - see truth table below.
* Evaluates if firstValue imp lies secondValue .
* If firstValue is true then secondValue must also be true.
* So if firstValue is true, and secondValue false, then the condition is false, otherwise it is true (see table below).

</blockquote>

#### EXAMPLES

<blockquote>

```vb
Table 4: The logical operations and its results.

In this table, A and B are the Expressions to invert or combine.
Both may be results of former Boolean evaluations.
┌────────────────────────────────────────────────────────────────────────┐
│                           Logical Operations                           │
├───────┬───────┬───────┬─────────┬────────┬─────────┬─────────┬─────────┤
│   A   │   B   │ NOT B │ A AND B │ A OR B │ A XOR B │ A EQV B │ A IMP B │
├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤
│ true  │ true  │ false │  true   │ true   │  false  │  true   │  true   │
├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤
│ true  │ false │ true  │  false  │ true   │  true   │  false  │  false  │
├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤
│ false │ true  │ false │  false  │ true   │  true   │  false  │  true   │
├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤
│ false │ false │ true  │  false  │ false  │  false  │  true   │  true   │
└───────┴───────┴───────┴─────────┴────────┴─────────┴─────────┴─────────┘
Note: In most BASIC languages incl. QB64 these are bitwise operations,
hence the logic is performed for each corresponding bit in both
operators, where true or false indicates whether a bit is set or
not set. The outcome of each bit is then placed into the respective
position to build the bit pattern of the final result value.

As all Relational Operations return negative one (-1, all bits set) for
true and zero (0, no bits set) for false, this allows us to use these
bitwise logical operations to invert or combine any relational checks,
as the outcome is the same for each bit and so always results into a
true (-1) or false (0) again for further evaluations.
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Binary
* Boolean
</blockquote>
