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

## [_OFFSET_(function)](OFFSET_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_OFFSET (function))
---
<blockquote>

### The _OFFSET function returns the memory offset of/within a given variable.

</blockquote>

#### SYNTAX

<blockquote>

`offset%& = _OFFSET ( variable )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  The variable parameter can be any type of numerical or string variable name.
*  API [LIBRARY](LIBRARY.md)  parameter or type names may include lp, ptr or p which designates them as a pointer type.
*  [_OFFSET](OFFSET.md)  function return values should be stored in [_OFFSET](OFFSET.md)  type variables. As no other variable type is 'elastic' like [_OFFSET](OFFSET.md)  , there can be no guarantee that any other variable type can hold the value of an [_OFFSET](OFFSET.md) .
*  Returns the memory offset of variables, user-defined-types & elements, arrays & indices and the base offset of STRINGs .
*  Offset values are currently only useful when used in conjunction with [_MEM](MEM.md)  or [DECLARE](DECLARE.md) [LIBRARY](LIBRARY.md)  procedures.
*  OFFSET values are used as a part of the [_MEM](MEM.md)  variable type in QB64; variable .OFFSET returns or sets the current position in memory.
*  Warning: QB64 variable length strings can move about in memory at any time. If you get the [_OFFSET](OFFSET.md)  of a variable length sting on one line and use it on the next it may not be there anymore. To be safe, move variable length strings into fixed length strings first.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_OFFSET](OFFSET.md) 
*  [DECLARE](DECLARE.md) [LIBRARY](LIBRARY.md) 
*  [DECLARE](DECLARE.md) [LIBRARY](LIBRARY.md) 
*  Using [_OFFSET](OFFSET.md) 

</blockquote>
