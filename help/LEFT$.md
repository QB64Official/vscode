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

## [LEFT\$](LEFT\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/LEFT$)
---
<blockquote>

### The LEFT$ string function returns a number of characters from the left of a STRING .

</blockquote>

#### SYNTAX

<blockquote>

`LEFT$ ( stringValue$ , numberOfCharacters% )`

</blockquote>

#### PARAMETERS

<blockquote>

*  stringValue$ can be any [STRING](STRING.md)  literal or variable.
*  numberOfCharacters% [INTEGER](INTEGER.md)  determines the number of characters to return from left of string.

</blockquote>

#### DESCRIPTION

<blockquote>

*  If the number of characters exceeds the string length the entire string is returned. Use [LEN](LEN.md)  to determine a string's length.
*  LEFT$ returns always start at the first character of the string, even if it's a space. LTRIM$ can remove leading spaces.
*  numberOfCharacters% cannot be a negative value.


</blockquote>

#### SEE ALSO

<blockquote>

*  RIGHT$ , MID$ (function)
*  LTRIM$ , [RTRIM\$](RTRIM\$.md) 
*  [INSTR](INSTR.md)  , [LEN](LEN.md) 

</blockquote>
