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

## [AND_(boolean)](AND_(boolean).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/AND (boolean))
---
<blockquote>

### The AND conditonal operator is used to include another evaluation in an IF...THEN or Boolean statement.

</blockquote>

#### SYNTAX

<blockquote>

`IF condition AND condition2`

</blockquote>

#### DESCRIPTION

<blockquote>

*  If condition [AND](AND.md)  condition2 are true then the evaluation returns true (-1).
*  condition [AND](AND.md)  condition2 can also contain their own [AND](AND.md)  evaluations.
*  Both the [IF](IF.md)  evaluation [AND](AND.md)  the [AND](AND.md)  evaluation must be true for the statement to be true.
*  Statements can use parenthesis to clarify an evaluation.
*  [AND](AND.md)  (boolean) [AND](AND.md) [OR](OR.md)  (boolean) cannot be used to combine command line operations.
*  Not to be confused with the [AND](AND.md)  [AND](AND.md) [OR](OR.md)  numerical operations.


</blockquote>

#### SEE ALSO

<blockquote>

*  [AND](AND.md)  , [OR](OR.md)  (logical operators)
*  [OR](OR.md)  (boolean) , [XOR](XOR.md)  (boolean)
*  [IF](IF.md) ... [THEN](THEN.md) 

</blockquote>
