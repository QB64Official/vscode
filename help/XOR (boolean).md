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

## [XOR_(boolean)](XOR_(boolean).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/XOR (boolean))
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

*  Either condition or condition2 must be True for the evaluation to return True.
*  It is called "exclusive [OR](OR.md) " because the conditions cannot both be True for it to return True like the [OR](OR.md)  evaluation.
*  condition and condition2 can themselves contain [XOR](XOR.md)  evaluations.


</blockquote>

#### SEE ALSO

<blockquote>

*  [OR](OR.md)  (boolean) , [AND](AND.md)  (boolean)
*  [IF](IF.md) ... [THEN](THEN.md) 

</blockquote>
