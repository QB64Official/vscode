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


## [Boolean](Boolean.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Boolean)
---
<blockquote>

### Boolean statements are evaluations that return true (-1) or false (0) values. This are for instance the Relational Operations , but also functions such as _FILEEXISTS , EOF , _SCREENEXISTS etc. return those values when checking for certain conditions. The results of those evaluations or function calls can be used in other mathematical or logical operations.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
Table 3: The relational operations for condition checking.

In this table, A and B are the Expressions to compare. Both must represent
the same general type, i.e. they must result into either numerical values
or STRING values. If a test succeeds, then true (-1) is returned, false (0)
if it fails, which both can be used in further Boolean evaluations.
┌─────────────────────────────────────────────────────────────────────────┐
│                          Relational Operations                          │
├────────────┬───────────────────────────────────────────┬────────────────┤
│ Operation  │                Description                │ Example usage  │
├────────────┼───────────────────────────────────────────┼────────────────┤
│   A = B    │ Tests if A is equal to B.                 │ IF A = B THEN  │
├────────────┼───────────────────────────────────────────┼────────────────┤
│   A <> B   │ Tests if A is not equal to B.             │ IF A <> B THEN │
├────────────┼───────────────────────────────────────────┼────────────────┤
│   A < B    │ Tests if A is less than B.                │ IF A < B THEN  │
├────────────┼───────────────────────────────────────────┼────────────────┤
│   A > B    │ Tests if A is greater than B.             │ IF A > B THEN  │
├────────────┼───────────────────────────────────────────┼────────────────┤
│   A <= B   │ Tests if A is less than or equal to B.    │ IF A <= B THEN │
├────────────┼───────────────────────────────────────────┼────────────────┤
│   A >= B   │ Tests if A is greater than or equal to B. │ IF A >= B THEN │
└────────────┴───────────────────────────────────────────┴────────────────┘
The operations should be very obvious for numerical values. For strings
be aware that all checks are done case sensitive (i.e. "Foo" <> "foo").
The equal/not equal check is pretty much straight forward, but for the
less/greater checks the ASCII value of the first different character is
used for decision making:

E.g. "abc" is less than "abd", because in the first difference (the 3rd
character) the "c" has a lower ASCII value than the "d".

This behavior may give you some subtle results, if you are not aware of
the ASCII values and the written case:

E.g. "abc" is greater than "abD", because the small letters have higher
ASCII values than the capital letters, hence "c" > "D". You may use
LCASE$ or UCASE$ to make sure both strings have the same case.
```
  
<br>

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
INPUT "Enter a year greater than 1583: ", annum$
Y = VAL(annum$)
leap1 = (Y MOD 4 = 0 AND Y MOD 100 <> 0) OR (Y MOD 400 = 0)
leap2 = (Y MOD 4 = 0) - (Y MOD 100 = 0) + (Y MOD 400 = 0)
PRINT "Year = "; annum$, "Leap1 = "; leap1, "Leap2 = "; leap2
```
  
<br>

```vb
Evaluation for year 2000
leap1 = (-1 AND 0) OR -1 = -1 'the AND evaluation is false(0), so the OR value is used
leap2 = (-1) - (-1) + (-1) = -1 + 1 + -1 = -1
Evaluation for year 1900
leap1 = (-1 AND 0) OR 0 = 0 OR 0 = 0
leap2 = (-1) - (-1) + (0) = -1 + 1 + 0 = 0
```
  
<br>

```vb
SCREEN 12
COLOR 7
LOCATE 11, 20: PRINT "Using Screen 12 here to be in 80 X 30 coordinates mode"
LOCATE 13, 6: PRINT "Simple Example of Alternative programming without IF-THEN-ELSE Statements"
LOCATE 15, 1: PRINT "Use the four Cursor keys to move the yellow cursor, text will not be disturbed"
LOCATE 17, 12: PRINT "When you END the program with the ESC key, cursor will disappear"

cordx% = 40
cordy% = 15

DO
oldcordx% = cordx%
oldcordy% = cordy%
p% = SCREEN(cordy%, cordx%) 'get ASCII character code at present position
COLOR 14: LOCATE cordy%, cordx%: PRINT CHR$(178); 'print cursor character to position

WHILE cordx% = oldcordx% AND cordy% = oldcordy% AND k$ <> CHR$(27)
k$ = INKEY$
cordx% = cordx% + (k$ = (CHR$(0) + "K") AND cordx% > 1) + ABS(k$ = (CHR$(0) + "M") AND cordx% < 80)
cordy% = cordy% + (k$ = (CHR$(0) + "H") AND cordy% > 1) + ABS(k$ = (CHR$(0) + "P") AND cordy% < 30)
WEND

COLOR 7: LOCATE oldcordy%, oldcordx%: PRINT CHR$(p%); 'replace overwritten screen characters

LOOP UNTIL k$ = CHR$(27)
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* IF...THEN , [SELECT](SELECT.md) [CASE](CASE.md)
* Binary , [ABS](ABS.md) , [SGN](SGN.md)
* [AND](AND.md) , [OR](OR.md) , [XOR](XOR.md)
* Bitwise Operations
</blockquote>
