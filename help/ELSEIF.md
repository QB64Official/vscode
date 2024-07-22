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

## [ELSEIF](ELSEIF.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/ELSEIF)
---
<blockquote>

### ELSEIF is used in an IF...THEN block statement to offer an alternative condition.

</blockquote>

#### SYNTAX

<blockquote>

`IF condition THEN {code} ⋮`

</blockquote>

#### DESCRIPTION

<blockquote>

*  [ELSEIF](ELSEIF.md)  statements require a separate code block line with [THEN](THEN.md)  for each alternative condition.
*  There can be more than one [ELSE](ELSE.md) [IF](IF.md)  statement in a single-line [IF](IF.md)  statement.
*  If there is only one possible alternative condition (such as 0 or [NOT](NOT.md)  0), use [ELSE](ELSE.md)  instead.
*  [IF](IF.md)  the comparisons are based on multiple conditions being true, it may require many [ELSEIF](ELSEIF.md)  comparisons. [ELSE](ELSE.md)  could help cover some of those conditions.
*  You can use [SELECT](SELECT.md) [CASE](CASE.md)  when [IF](IF.md)  blocks have a long list of alterative [ELSEIF](ELSEIF.md)  conditions.


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  [ELSE](ELSE.md)  , [END](END.md) [IF](IF.md) 
*  [IF](IF.md) ... [THEN](THEN.md) 

</blockquote>
