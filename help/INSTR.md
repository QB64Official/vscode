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

## [INSTR](INSTR.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/INSTR)
---
<blockquote>

### The INSTR function searches for the first occurence of a search STRING within a base string and returns the position it was found.

</blockquote>

#### SYNTAX

<blockquote>

`position% = INSTR ([ start% ,] baseString$ , searchString$ )`

</blockquote>

#### PARAMETERS

<blockquote>

*  The optional literal or variable [INTEGER](INTEGER.md)  start% indicates where in the baseString$ the search must start.
*  The baseString$ is a literal or variable [STRING](STRING.md)  value to be searched for an exact match including letter cases .
*  The searchString$ is a literal or variable [STRING](STRING.md)  value being searched.

</blockquote>

#### DESCRIPTION

<blockquote>

*  The function returns the position% in the baseString$ where the searchString$ was found.
*  position% will be 0 if the search found no matches in the base string.
*  [INSTR](INSTR.md)  returns 0 if an empty baseString$ is passed, and returns 1 with an empty searchString$ .
*  The start% position is useful when making multiple searches in the same string. See the example below.
*  The searchString$ should be smaller or equal in length to the baseString$ , or 0 is returned.
*  Non-zero position% return values can be used as a new start position by adding 1 to re-search the base string. See the example below.
*  In a loop, [INSTR](INSTR.md)  can search an entire file for occurences of certain words. See the MID$ statement example.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_INSTRREV](INSTRREV.md)  , MID$ (function)
*  LEFT$ , [RIGHT\$](RIGHT\$.md) 
*  LCASE$ , [UCASE\$](UCASE\$.md) 
*  [STRING](STRING.md)  , [INTEGER](INTEGER.md) 

</blockquote>
