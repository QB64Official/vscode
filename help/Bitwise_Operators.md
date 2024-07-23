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


## [Bitwise Operators](Bitwise_Operators.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Bitwise%20Operators)
---
<blockquote>

### Bitwise operators are much like the regular mathematics operators (+, * etc.) but are defined in terms of the individual bits of their operands. The full list of bitwise operators, with a brief summary of its operation:

</blockquote>

#### DESCRIPTION

<blockquote>



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

```vb
x& = VAL("&B101010") 'Arbitrary collection of bits
y& = VAL("&B001100") 'A bit mask
PRINT "Input 1: "; BinStr$(x&, 6) '6 indicates we want 6 bits of output
PRINT "Input 2: "; BinStr$(y&, 6)
PRINT "Output:  "; BinStr$(x& AND y&, 6)

'Converts the number n& to a string of binary digits, digits& long (padding or truncating as necessary).
FUNCTION BinStr$ (n&, digits&)
FOR i& = digits& - 1 TO 0 STEP -1
IF (n& AND 2 ^ i&) THEN B$ = B$ + "1" ELSE B$ = B$ + "0"
NEXT
BinStr$ = B$
END FUNCTION
```
  
<br>


<div class="explanation">Use XOR to toggle a bit flag (that is, change its state to the opposite of what it was). This example is the same as the OR example above, but with one extra line added. This time we enable flags A & C, then toggle flags A & B. This will disable flag A and enable B.</div>

```vb
Input 1: 101010
Input 2: 001100
Output:  001000
```
  
<br>

```vb
'The trick here is to give each flag a value corresponding to a different bit being 1
FLAG_A& = VAL("&B0001")
FLAG_B& = VAL("&B0010")
FLAG_C& = VAL("&B0100")
FLAG_D& = VAL("&B1000")

flags& = FLAG_A& OR FLAG_C& 'Set flags A, C

'Use each flag as a bitmask to test for its presence:
IF flags& AND FLAG_A& THEN PRINT "Flag A is set"
IF flags& AND FLAG_B& THEN PRINT "Flag B is set"
IF flags& AND FLAG_C& THEN PRINT "Flag C is set"
IF flags& AND FLAG_D& THEN PRINT "Flag D is set"
```
  
<br>

```vb
Flag A is set
Flag C is set
```
  
<br>

```vb
'The trick here is to give each flag a value corresponding to a different bit being 1
FLAG_A& = VAL("&B0001")
FLAG_B& = VAL("&B0010")
FLAG_C& = VAL("&B0100")
FLAG_D& = VAL("&B1000")

flags& = FLAG_A& OR FLAG_C& 'Set flags A, C
flags& = flags& XOR FLAG_A& XOR FLAG_B& 'Toggle flags A, B

'Use each flag as a bitmask to test for its presence:
IF flags& AND FLAG_A& THEN PRINT "Flag A is set"
IF flags& AND FLAG_B& THEN PRINT "Flag B is set"
IF flags& AND FLAG_C& THEN PRINT "Flag C is set"
IF flags& AND FLAG_D& THEN PRINT "Flag D is set"
```
  
<br>

```vb
Flag B is set
Flag C is set
```
  
<br>


</blockquote>
