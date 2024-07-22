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

## [DIM](DIM.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/DIM)
---
<blockquote>

### The DIM statement is used to declare a variable or a list of variables as a specified data type or to dimension $STATIC or $DYNAMIC arrays .

</blockquote>

#### SYNTAX

<blockquote>

`To declare variables: DIM [[[SHARED]]] variable [{suffix| AS [[[_UNSIGNED]]] type }] [, variable2 ...]]`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Sets the [INTEGER](INTEGER.md)  range of elements (indices) of a [STATIC](STATIC.md)  array. If only one number is used, the lowest boundary is 0 by default.
*  When used before an array is dimensioned, [OPTION](OPTION.md) [BASE](BASE.md)  1 can set the default lower boundary of arrays to 1.
*  [DIM](DIM.md)  [SHARED](SHARED.md)  shares variable values with sub-procedures without passing the value in a parameter.
*  Use the [AS](AS.md)  keyword to define a variable or array type [AS](AS.md)  ...
	* [INTEGER](INTEGER.md)  (or use variable suffix % )
	* [LONG](LONG.md)  (or use variable suffix & )
	* [SINGLE](SINGLE.md)  (or use variable suffix ! or no suffix by default)
	* [DOUBLE](DOUBLE.md)  (or use variable suffix # )
	* [STRING](STRING.md)  (or use variable suffix $ ). An [AS](AS.md)  multiplier can set the [STRING](STRING.md)  length . Ex: [DIM](DIM.md)  variable [AS](AS.md)  [STRING](STRING.md)  * 8
*  QB64 variable types:
	* [_BIT](BIT.md)  (or use variable suffix &grave; ). An [AS](AS.md)  multiplier can be used for multiple bits. Ex: [DIM](DIM.md)  variable [AS](AS.md)  [_BIT](BIT.md)  * 8
	* [_BYTE](BYTE.md)  (or use variable suffix %% )
	* [_INTEGER64](INTEGER64.md)  (or use variable suffix && )
	* [_FLOAT](FLOAT.md)  (or use variable suffix ## )
	* [_OFFSET](OFFSET.md)  (or use variable suffix %& )
	* [DIM](DIM.md) [AS](AS.md)  [_MEM](MEM.md)  (the [_MEM](MEM.md)  type has no type suffix).
*  Note: When a variable has not been defined or has no type suffix, the type defaults to [SINGLE](SINGLE.md)  .
*  When using the [AS](AS.md)  type variable-list syntax, type symbols cannot be used.
*  When the $DYNAMIC metacommand or [REDIM](REDIM.md)  is used, array element sizes are changeable (not $STATIC ).
*  Use [REDIM](REDIM.md)  instead of [DIM](DIM.md)  to dimension arrays as dynamic without the $DYNAMIC metacommand.
*  Use [REDIM](REDIM.md)  [_PRESERVE](PRESERVE.md)  in QB64 to retain previous array values when changing the size of an array.
*  [REDIM](REDIM.md)  [_PRESERVE](PRESERVE.md)  cannot change the number of array dimensions. An error will occur.
*  Dynamic arrays MUST be REDIMensioned if [ERASE](ERASE.md)  or [CLEAR](CLEAR.md)  are used, [AS](AS.md)  the arrays are completely removed.
*  All numerical variable types except [SINGLE](SINGLE.md)  , [DOUBLE](DOUBLE.md)  and [_FLOAT](FLOAT.md)  can be dimensioned as [_UNSIGNED](UNSIGNED.md)  (suffix ~) or positive only.
*  NOTE: Many QBasic keyword variable names can be used with a [STRING](STRING.md)  suffix ($). You cannot use them without the suffix, use a numerical suffix or use [DIM](DIM.md) , [REDIM](REDIM.md)  , [_DEFINE](DEFINE.md)  , [BYVAL](BYVAL.md)  or [TYPE](TYPE.md)  variable [AS](AS.md)  statements. Although possible, it's recommended to avoid using reserved names.
*  Warning: Do not use negative array upper bound index values, or OS access or "Out of Memory" errors will occur.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_DEFINE](DEFINE.md)  , [_PRESERVE](PRESERVE.md) 
*  [REDIM](REDIM.md)  , [TYPE](TYPE.md) 
*  [ERASE](ERASE.md)  , [CLEAR](CLEAR.md) 
*  [DEFINT](DEFINT.md)  , [DEFSNG](DEFSNG.md)  , [DEFLNG](DEFLNG.md)  , [DEFDBL](DEFDBL.md)  , [DEFSTR](DEFSTR.md) 
*  Mathematical Operations , Arrays
*  Variable Types
*  [OPTION](OPTION.md)  [_EXPLICIT](EXPLICIT.md) 

</blockquote>
