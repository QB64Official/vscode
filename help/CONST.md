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

## [CONST](CONST.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/CONST)
---
<blockquote>

### The CONST statement globally defines one or more named numeric or string values which will not change while the program is running.

</blockquote>

#### SYNTAX

<blockquote>

`CONST constantName = value [, ...]`

</blockquote>

#### PARAMETERS

<blockquote>

*  constantName is the constant name or list of names assigned by the programmer.
*  value is the value to initialize the global constant which cannot change once defined.
	* If constantName specifies a numeric type, value must be a numeric expression containing literals and other constants.
	* If constantName specifies a string type, the value must be a literal value.

</blockquote>

#### DESCRIPTION

<blockquote>

*  The constantName does not have to include a type suffix. The datatype is automatically infered by the compiler using the value .
*  Constant values cannot reference a variable, [SUB](SUB.md)  or [FUNCTION](FUNCTION.md)  return values when defined.
	* The exception to the above are color functions [_RGB32](RGB32.md)  and [_RGBA32](RGBA32.md)  , which can be used in a [CONST](CONST.md)  statement. See Example 2 below.
*  Constants cannot be reassigned values. They retain the same value throughout all of the program procedures.
*  Constants defined in module-level code have shared scope, so they can also be used in [SUB](SUB.md)  or [FUNCTION](FUNCTION.md)  procedures.
*  Constants defined in [SUB](SUB.md)  or [FUNCTION](FUNCTION.md)  procedures are local to those procedures.
*  [CLEAR](CLEAR.md)  will not affect or change constant values.


</blockquote>

#### SEE ALSO

<blockquote>

*  [DIM](DIM.md)  , [SHARED](SHARED.md) 
*  [STATIC](STATIC.md)  , [COMMON](COMMON.md) 
*  [_PI](PI.md)  , [_RGB32](RGB32.md)  , [_RGBA32](RGBA32.md) 
*  Windows 32 API constant values

</blockquote>
