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

## [WAIT](WAIT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/WAIT)
---
<blockquote>

### The WAIT statement waits until the value read from an I/O port has certain bits set.

</blockquote>

#### SYNTAX

<blockquote>

`WAIT port% , andMask% [, xorMask% ]`

</blockquote>

#### DESCRIPTION

<blockquote>

*  The [WAIT](WAIT.md)  statement reads a value from port% using [INP](INP.md)  .
*  If xorMask% is specified, the value is [XOR](XOR.md)  'd with xorMask% . It has the effect of "toggle these bits".
*  The value is then [AND](AND.md)  'd with andMask% . It has the effect of "check if these bits are set".
*  If the final value is non-zero, [WAIT](WAIT.md)  returns. Otherwise, another value is read from port% and checked again.
*  The [WAIT](WAIT.md)  statement returns immediately if port% is not supported.


</blockquote>

#### SEE ALSO

<blockquote>

*  [INP](INP.md)  , [OUT](OUT.md) 
*  Scancodes

</blockquote>
