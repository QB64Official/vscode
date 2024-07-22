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

## [_OFFSET](OFFSET.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_OFFSET)
---
<blockquote>

### The _OFFSET variable type stores the location of a value in memory. The byte size varies as required by the system.

</blockquote>

#### SYNTAX

<blockquote>

`DIM variable AS _OFFSET`

</blockquote>

#### DESCRIPTION

<blockquote>

*  [_OFFSET](OFFSET.md)  types can be created as signed or [_UNSIGNED](UNSIGNED.md)  at the programmer's discretion.
*  The type suffix for [_OFFSET](OFFSET.md)  is %& which designates the integer value's flexible size.
*  Offset values are only useful when used in conjunction with [_MEM](MEM.md)  or [DECLARE](DECLARE.md) [LIBRARY](LIBRARY.md)  procedures.
*  OFFSET values are used as a part of the [_MEM](MEM.md)  variable type in QB64. Variable.OFFSET returns or sets the current position in memory.
*  API [LIBRARY](LIBRARY.md)  parameter or type names may include lp, ptr or p which designates them as a pointer type.
*  Warning: [_OFFSET](OFFSET.md)  values cannot be cast to other variable type values reliably.
*  Warning: Variable length [STRING](STRING.md)  values can move about in memory at any time. If you get the [_OFFSET](OFFSET.md)  of a variable length sting on one code line and use it on the next it may not be there anymore. To be safe, move variable length strings into fixed length strings first.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_WINDOWHANDLE](WINDOWHANDLE.md) 
*  Using [_OFFSET](OFFSET.md) 
*  [_OFFSET](OFFSET.md)  (function) , [_MEM](MEM.md) 
*  [DECLARE](DECLARE.md) [LIBRARY](LIBRARY.md) 
*  [DECLARE](DECLARE.md) [LIBRARY](LIBRARY.md) 
*  Variable Types

</blockquote>
