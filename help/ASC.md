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

## [ASC](ASC.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/ASC)
---
<blockquote>

### The ASC statement allows a program to change a character at any position of a STRING variable.

</blockquote>

#### SYNTAX

<blockquote>

`ASC ( stringExpression$ [, position% ]) = code%`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Note: The statement variant of [ASC](ASC.md)  is not available in QBasic/QuickBASIC, but in QB64 only .
*  The stringExpression$ variable's value must have been previously defined and cannot be an empty string ("").
*  position% is optional. If no position is used, the leftmost character at position 1 is assumed.
*  position% cannot be zero or greater than the string's length or an Illegal function call error will occur.
*  The ASCII replacement code% value can be any [INTEGER](INTEGER.md)  value from 0 to 255.


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  [ASC](ASC.md)  (function)
*  MID$ , MID$ (function)
*  INKEY$ , ASCII

</blockquote>
