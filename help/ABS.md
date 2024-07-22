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

## [ABS](ABS.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/ABS)
---
<blockquote>

### The ABS function returns the unsigned numerical value of a variable or literal value.

</blockquote>

#### SYNTAX

<blockquote>

`positive = ABS ( numericalValue )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  [ABS](ABS.md)  always returns positive numerical values. The value can be any numerical type.
*  Often used to keep a value positive when necessary in a program.
*  Use [SGN](SGN.md)  to determine a value's sign when necessary.
*  QB64 allows programs to return only positive [_UNSIGNED](UNSIGNED.md)  variable values using a [DIM](DIM.md)  or [_DEFINE](DEFINE.md)  statement.


</blockquote>

#### SEE ALSO

<blockquote>

*  [SGN](SGN.md)  , [DIM](DIM.md) 
*  [_UNSIGNED](UNSIGNED.md) 
*  [_DEFINE](DEFINE.md) 
*  Mathematical Operations

</blockquote>
