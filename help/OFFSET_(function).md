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
    margin: 0 0 0.5em 0  !important;
    color: #88f !important;
    border: 0 !important;
    font-style: italic !important;
    font-weight: normal !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 4px !important; 
    border: 1px solid #333 !important;
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
    border-radius: 4px !important;
    background: #000 !important;
    border: 1px solid #333 !important;
    margin: 0 !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}
br + pre {
    border-radius: 0 !important;
    border-style: inset !important;
    border-width: 5px !important;
    border-color: #999 !important;
    background-color: #000 !important;
    box-shadow: 0px 10px 3px rgba(0, 0, 0, 0.25) !important;
    margin-top: -1em !important;
}
br + pre::before {
    content: "OUTPUT \A" !important;
    color: #555 !important;
    border-bottom: 1px solid #333;
    font-size: x-small;
    display: block !important;
    padding: 0 3px !important;
    margin: -1em -1em 1em -1em !important;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */    
}
br ~ h5 {
    margin-top: 2em !important;
}
.explanation {
    color: #995 !important;
    /* background-color: rgba(150, 150, 100) !important; */
    border-radius: 10em !important;
    border: 2px #441 dashed !important;
    padding: 8px 32px !important;
    margin-bottom: 4em !important;
    font-size: x-small !important;
}
</style>


## [_OFFSET (function)](OFFSET_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_OFFSET%20%28function%29)
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


* The variable parameter can be any type of numerical or string variable name.
* API [LIBRARY](LIBRARY.md) parameter or type names may include lp, ptr or p which designates them as a pointer type.
* [_OFFSET](OFFSET.md) function return values should be stored in [_OFFSET](OFFSET.md) type variables. As no other variable type is 'elastic' like [_OFFSET](OFFSET.md) , there can be no guarantee that any other variable type can hold the value of an _OFFSET.
* Returns the memory offset of variables, user-defined-types & elements, arrays & indices and the base offset of STRINGs .
* Offset values are currently only useful when used in conjunction with [_MEM](MEM.md) or [DECLARE](DECLARE.md) [LIBRARY](LIBRARY.md) procedures.
* OFFSET values are used as a part of the [_MEM](MEM.md) variable type in QB64; variable .OFFSET returns or sets the current position in memory.
* Warning: QB64 variable length strings can move about in memory at any time. If you get the [_OFFSET](OFFSET.md) of a variable length sting on one line and use it on the next it may not be there anymore. To be safe, move variable length strings into fixed length strings first.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Using memcpy with the _OFFSET function values as parameters.
```vb
DECLARE CUSTOMTYPE LIBRARY
SUB memcpy (BYVAL dest AS _OFFSET, BYVAL source AS _OFFSET, BYVAL bytes AS LONG)
END DECLARE

a$ = "1234567890"
b$ = "ABCDEFGHIJ"

memcpy _OFFSET(a$) + 5, _OFFSET(b$) + 5, 5
PRINT a$
```
  
<br>

```vb
12345FGHIJ
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_OFFSET](OFFSET.md)
* [DECLARE](DECLARE.md) [LIBRARY](LIBRARY.md)
* [DECLARE](DECLARE.md) [LIBRARY](LIBRARY.md)
* Using [_OFFSET](OFFSET.md)
</blockquote>
