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


## [XOR (boolean)](XOR_(boolean).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/XOR%20%28boolean%29)
---
<blockquote>

### XOR evaluates two conditions and if either of them is True then it returns True, if both of them are True then it returns False, if both of them are False then it returns False.

</blockquote>

#### SYNTAX

<blockquote>

`condition XOR condition2`

</blockquote>

#### DESCRIPTION

<blockquote>


* Either condition or condition2 must be True for the evaluation to return True.
* It is called "exclusive OR" because the conditions cannot both be True for it to return True like the [OR](OR.md) evaluation.
* condition and condition2 can themselves contain [XOR](XOR.md) evaluations.

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



##### Example: Dilemma...
```vb
True = NOT False
AndersWon = True
PeterWon = True
IF AndersWon = True XOR PeterWon = True THEN
PRINT "Thank you for your honesty!"
ELSE
PRINT "You can't both have won (or lost)!"
END IF
```
  
<br>

```vb
You can't both have won (or lost)!
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [OR](OR.md) (boolean) , [AND](AND.md) (boolean)
* IF...THEN
</blockquote>
