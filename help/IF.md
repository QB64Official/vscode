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


## [IF...THEN](IF...THEN.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/IF...THEN)
---
<blockquote>

### IF...THEN statements make boolean (true or false) evaluations to automate program decision making.

</blockquote>

#### DESCRIPTION

<blockquote>


* The conditionStatement evaluation by [IF](IF.md) must be true (-1) or a non-zero numerical value for the [THEN](THEN.md) {code} to be executed.
* Multiple conditional evaluations can be made using inclusive [AND](AND.md) or alternative [OR](OR.md) conditional expressions.
* [THEN](THEN.md) is not required when [GOTO](GOTO.md) is used to send program flow to a line number or label.
* [IF](IF.md) statements can also have alternative evaluations using [ELSEIF](ELSEIF.md) and [ELSE](ELSE.md) conditions.
* When the [IF](IF.md) statement and/or code to be run is more than code line, an [END](END.md) [IF](IF.md) statement must be used.
* With multiple code lines to run, end the [IF](IF.md) statement with [THEN](THEN.md) and place all of the code on lines below that line.
* Multiple code line block statements require that the IF...THEN , [ELSEIF](ELSEIF.md) , [ELSE](ELSE.md) and [END](END.md) [IF](IF.md) be on separate lines.
* The IDE may return an error of [NEXT](NEXT.md) without [FOR](FOR.md) or [LOOP](LOOP.md) without [DO](DO.md) when [END](END.md) [IF](IF.md) does not end a statement block.
* The QB64 IDE will indicate an error in the [IF](IF.md) statement line until [END](END.md) [IF](IF.md) closes the statement block.
* Use colons to execute multiple statements in a single-line [IF](IF.md) statement.
* An underscore can be used anywhere after the code on a single-line to continue it to the next line in QB64 .
* NOTE: [STRING](STRING.md) values can only be evaluated in an [IF](IF.md) statement if a value is compared to a literal or [CHR&dollar;](CHR&dollar;.md) string value. QB64 may not compile literal [IF](IF.md) string statements or indicate an IDE coding error. Use [LEN](LEN.md) or [ASC](ASC.md) to compare strings numerically.

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



##### Example 1: In a one line IF statement, only REM can be used to comment out the action without an END IF error:
```vb
INPUT "Enter a number over or under 100: ", x
IF x > 100 THEN PRINT x
IF x > 100 THEN REM PRINT x  '
```
  
<br>



##### Example 2: IF statement blocks require that the IF THEN and END IF statements be separate from the code executed.
```vb
INPUT "Enter a number over or under 100: ", x
IF x > 100 THEN
y = 200
PRINT y
PRINT x
END IF
```
  
<br>



##### Example 3: True or False evaluation of a numerical value executes only when the value is not 0. Cannot evaluate STRING values.
```vb
INPUT "Enter a number or just hit Enter: ", x
IF x THEN PRINT x
```
  
<br>



##### Example 4: Multiple evaluations using parenthesis to determine the order.
```vb
INPUT "Enter a number over or under 100 or 50: ", value
IF (value% > 100 AND value% < 200) OR value% = 50 THEN PRINT "OK"
```
  
<br>



##### Example 5: Using multiple IF options in a one line statement.
```vb
INPUT "Enter a number over or under 200: ", x
IF x > 200 THEN PRINT "High" [[ELSEIF|ELSEIF]] x < 0 THEN PRINT "Low" [[ELSE|ELSE]] PRINT "OK"
```
  
<br>



##### Example 6: STRING values can be compared using greater than, less than, not equal to or equal to operators only.
```vb
PRINT "Press a letter key: ";
Key$ = INPUT$(1)
PRINT Key$
IF Key$ >= CHR$(65) AND Key$ <= CHR$(90) THEN PRINT "A to Z"
```
  
<br>

```vb
x# = 5 / 10
y# = 6 / 10
z# = x# + y#
PRINT x#, y#, z#
IF x# + y# = z# THEN PRINT "equal" ELSE PRINT "unequal"
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [ELSEIF](ELSEIF.md) , [ELSE](ELSE.md)
* [AND](AND.md) (boolean) , [OR](OR.md) (boolean)
* [NOT](NOT.md) , [GOTO](GOTO.md)
* [SELECT](SELECT.md) [CASE](CASE.md)
* Boolean (numerical comparisons return a true or false value)
</blockquote>
