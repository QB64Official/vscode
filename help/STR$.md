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

## [STR\$](STR\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/STR$)
---
<blockquote>

### The STR$ function returns the STRING representation of a numerical value.

</blockquote>

#### SYNTAX

<blockquote>

`result$ = STR$( number )`

</blockquote>

#### PARAMETERS

<blockquote>

*  number is any numerical type value to convert.

</blockquote>

#### DESCRIPTION

<blockquote>

*  Returns any type number value with leading sign(space/minus) or decimal point when one exists in the numerical value.
*  If number is positive, the [STRING](STRING.md)  value returned will have a leading space character which can be removed using LTRIM$ .
*  If number is negative, the minus sign will precede the number instead of a space which LTRIM$ will not remove.
*  Trimming a STR$ string number using RTRIM$ is not required as [PRINT](PRINT.md)  creates the undocumented trailing number space.


</blockquote>

#### SEE ALSO

<blockquote>

*  [VAL](VAL.md)  , [STRING](STRING.md) 
*  LTRIM$ , MID$ (function)
*  RIGHT$ , [LEFT\$](LEFT\$.md) 
*  HEX$ , [OCT\$](OCT\$.md) 

</blockquote>
