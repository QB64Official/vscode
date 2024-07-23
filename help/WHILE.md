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


## [WHILE...WEND](WHILE...WEND.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/WHILE...WEND)
---
<blockquote>

### The WHILE...WEND statement is used to repeat a block of statements while the condition is met.

</blockquote>

#### SYNTAX

<blockquote>

`WHILE condition`

</blockquote>

#### DESCRIPTION

<blockquote>


* condition is a numeric expression used to determine if the loop will execute.
* statements will execute repeatedly while condition is a non-zero value.
* [EXIT](EXIT.md) [WHILE](WHILE.md) can be used for emergency exits from the loop in QB64 only.
* A DO...LOOP can use the same [DO](DO.md) [WHILE](WHILE.md) condition to get the same results.
* [WHILE](WHILE.md) loops only run if the [WHILE](WHILE.md) condition is True.

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



##### Example 1: Reading an entire file. Example assumes the program has a file opened as #1
```vb
OPEN "Readme.txt" FOR INPUT AS #1
WHILE NOT EOF(1)
_LIMIT 1                                    'limit line prints to one per second
LINE INPUT #1, text$
IF INKEY$ = CHR$(27) THEN EXIT WHILE        'ESC key exits
PRINT text$
WEND
```
  
<br>



##### Example 2: Clearing the keyboard buffer.
```vb
WHILE INKEY$ <> "" : WEND
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* DO...LOOP
* FOR...NEXT
* [UNTIL](UNTIL.md)
* [_CONTINUE](CONTINUE.md)
</blockquote>
