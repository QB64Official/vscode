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

## [MID\$_(function)](MID\$_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/MID$ (function))
---
<blockquote>

### The MID$ function returns a portion of a STRING .

</blockquote>

#### SYNTAX

<blockquote>

`portion$ = MID$ ( stringValue$ , startPosition% [, bytes% ])`

</blockquote>

#### PARAMETERS

<blockquote>

*  stringValue$ can be any literal or variable non-empty [STRING](STRING.md)  value. Use [LEN](LEN.md)  to check the length of a [STRING](STRING.md) .
*  startPosition% designates the non-zero position of the first character to be returned by the function.
*  bytes% (optional) tells the function how many characters to return including the first character at startPosition% .

</blockquote>

#### DESCRIPTION

<blockquote>

*  When the bytes% value is not passed, the function returns the remainder of the string from the starting character position.
*  Number of character bytes% should be within the string's length from the start position, but will only return the string's remainder when exceeded.
*  If the bytes% value is 0 or the startPosition% is 0 or greater than the length of the string, an empty string is returned (no error is triggered).
*  In QB64 , the [ASC](ASC.md)  (function) reads string byte positions about 5 times faster than MID$ when parsing strings character wise. See Example 2 below.


</blockquote>

#### SEE ALSO

<blockquote>

*  [MID\$](MID\$.md) 
*  [ASC](ASC.md)  , [ASC](ASC.md)  (function)
*  LEFT$ , [RIGHT\$](RIGHT\$.md) 
*  LTRIM$ , [RTRIM\$](RTRIM\$.md) 
*  [INSTR](INSTR.md)  , [LEN](LEN.md) 
*  [_MEMPUT](MEMPUT.md)  , [_MEMGET](MEMGET.md) 

</blockquote>
