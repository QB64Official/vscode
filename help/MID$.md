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

## [MID\$](MID\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/MID$)
---
<blockquote>

### The MID$ statement substitutes one or more new characters for existing characters of a previously defined STRING .

</blockquote>

#### SYNTAX

<blockquote>

`MID$ ( baseString$ , startPosition% [, bytes% ]) = replacementString$`

</blockquote>

#### PARAMETERS

<blockquote>

*  The baseString$ variable must exist and be large enough to contain the replacementString$ .
*  startPosition% specifies the string character position to start the overwrite.
*  bytes% or number of characters is optional. Excess byte lenghts are ignored.
*  The replacementString$ should be as long as the byte length reserved.
*  The length of the original string is not changed in any case. If replacementString$ is longer, it gets clipped.

</blockquote>

#### SEE ALSO

<blockquote>

*  MID$ (function)
*  [ASC](ASC.md)  , [ASC](ASC.md)  (function)
*  LEFT$ , [RIGHT\$](RIGHT\$.md) 
*  [INSTR](INSTR.md)  , ASCII , STR$ , HEX$ , Bitmaps
*  MKI$ , MKL$ , MKS$ , [MKD\$](MKD\$.md) 

</blockquote>
