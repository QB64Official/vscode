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

## [_INSTRREV](INSTRREV.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_INSTRREV)
---
<blockquote>

### The _INSTRREV function searches for a substring inside another string, but unlike INSTR it searches from right to left.

</blockquote>

#### SYNTAX

<blockquote>

`position% = _INSTRREV ([ start% ,] baseString$ , subString$ )`

</blockquote>

#### PARAMETERS

<blockquote>

*  The optional literal or variable [INTEGER](INTEGER.md)  start% indicates where in the baseString$ the search must start, counted from the left.
*  The baseString$ is a literal or variable [STRING](STRING.md)  value to be searched for an exact match including letter cases .
*  The subString$ is a literal or variable [STRING](STRING.md)  value being searched.

</blockquote>

#### DESCRIPTION

<blockquote>

*  The function returns the position% in the baseString$ where the subString$ was found, from right to left.
*  position% will be 0 if the search found no matches in the base string.
*  [_INSTRREV](INSTRREV.md)  returns 0 if an empty baseString$ is passed, and returns [LEN](LEN.md)  ( baseString$ ) with an empty subString$ .
*  The start% position is useful when making multiple searches in the same string. See the example below.
*  The subString$ should be smaller or equal in length to the baseString$ , or 0 is returned.
*  A start% value of 0 or less starts search from the end of the baseString$ (same as not passing a start% parameter).


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  MID$ (function) , [INSTR](INSTR.md) 
*  [SPACE\$](SPACE\$.md) 

</blockquote>
