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

## [Dollar_Sign](Dollar_Sign.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Dollar Sign)
---
<blockquote>

### The $ is used to denote QBasic Metacommands or as a STRING variable type suffix.

</blockquote>

#### SYNTAX

<blockquote>

`$INCLUDE: 'QB.bi'`

</blockquote>

#### DESCRIPTION

<blockquote>

*  $STATIC denotes that all arrays can only be dimensioned once using [DIM](DIM.md)  .
*  $DYNAMIC denotes that all arrays can be redimensioned using [REDIM](REDIM.md) [ONLY](ONLY.md) .
*  $INCLUDE includes a BI file or QBasic Library in a program. The file name requires a comment before and after the name.
*  The string variable suffix MUST be used if the variable is not dimensioned in a [DIM](DIM.md)  statement. The statement can also set a fixed string length .


</blockquote>

#### SEE ALSO

<blockquote>

*  [DIM](DIM.md)  , [REDIM](REDIM.md) 
*  Metacommand

</blockquote>
