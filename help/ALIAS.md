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

## [ALIAS](ALIAS.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/ALIAS)
---
<blockquote>

### The ALIAS clause in a DECLARE LIBRARY statement block tells the program the name of the procedure used in the external library.

</blockquote>

#### SYNTAX

<blockquote>

`DECLARE LIBRARY SUB pseudoname ALIAS actualname [( parameters )]`

</blockquote>

#### PARAMETERS

<blockquote>

*  The pseudoname is the name of the [SUB](SUB.md)  or [FUNCTION](FUNCTION.md)  the QB64 program will use.
*  The actualname is the same procedure name [AS](AS.md)  it is inside of the library code, it may optionally have a prepended namespace specification (e.g. [ALIAS](ALIAS.md)  std::malloc).
*  QB64 must use all parameters of imported procedures including optional ones.

</blockquote>

#### DESCRIPTION

<blockquote>

*  The [ALIAS](ALIAS.md)  name clause is optional [AS](AS.md)  the original library procedure name can be used.
*  The procedure name does not have to be inside of quotes when using [DECLARE](DECLARE.md) [LIBRARY](LIBRARY.md)  .
*  QB64 does not support optional parameters.


</blockquote>

#### SEE ALSO

<blockquote>

*  [SUB](SUB.md)  , [FUNCTION](FUNCTION.md) 
*  [DECLARE](DECLARE.md) [LIBRARY](LIBRARY.md)  , [BYVAL](BYVAL.md) 

</blockquote>
