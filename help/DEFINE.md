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


## [_DEFINE](DEFINE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_DEFINE)
---
<blockquote>

### _DEFINE defines a set of variable names according to their first character as a specified data type.

</blockquote>

#### SYNTAX

<blockquote>

`_DEFINE letter [ -range , ...] AS [[[_UNSIGNED]]] data type`

</blockquote>

#### PARAMETERS

<blockquote>


* Variable start letter range is in the form firstletter-endingletter (like A-C) or just a single letter.
* Data types : [INTEGER](INTEGER.md) , [SINGLE](SINGLE.md) , [DOUBLE](DOUBLE.md) , [LONG](LONG.md) , [STRING](STRING.md) , [_BIT](BIT.md) , [_BYTE](BYTE.md) , [_INTEGER64](INTEGER64.md) , [_FLOAT](FLOAT.md) , [_OFFSET](OFFSET.md) , [_MEM](MEM.md)
* Can also use the [_UNSIGNED](UNSIGNED.md) definition for positive whole [INTEGER](INTEGER.md) type numerical values.
</blockquote>

#### DESCRIPTION

<blockquote>


* When a variable has not been defined or has no type suffix, the value defaults to a [SINGLE](SINGLE.md) precision floating point value.
* [_DEFINE](DEFINE.md) sets the type of all variable names with the starting letter(s) or letter ranges  when encountered in the progression of the program (even in conditional statement blocks not executed and subsequent [SUB](SUB.md) procedures).
* NOTE: Many QBasic keyword variable names CAN be used with a [STRING](STRING.md) suffix ($)! You cannot use them without the suffix, use a numerical suffix or use [DIM](DIM.md) , [REDIM](REDIM.md) , [_DEFINE](DEFINE.md) , [BYVAL](BYVAL.md) or [TYPE](TYPE.md) variable [AS](AS.md) statements.
* QBasic's IDE added [DEF](DEF.md) statements before any [SUB](SUB.md) or [FUNCTION](FUNCTION.md) . QB64 (like QB) will change all variable types in subsequent sub-procedures to that default variable type without giving a "Parameter Type Mismatch" warning or adding the proper [DEF](DEF.md) statement to subsequent procedures. If you do not want that to occur, either remove that [DEF](DEF.md) statement or add the proper [DEF](DEF.md) type statements to subsequent procedures.
* May also affect [&dollar;INCLUDE](&dollar;INCLUDE.md) procedures.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Defining variables that start with the letters A, B, C or F as unsigned integers, including the Add2 FUNCTION .
```vb
_DEFINE A-C, F AS _UNSIGNED INTEGER

PRINT Add2(-1.1, -2.2)

END

FUNCTION Add2 (one, two)
Add2 = one + two
END FUNCTION
```
  
<br>

```vb
65533
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [DEFSTR](DEFSTR.md) , [DEFLNG](DEFLNG.md) , [DEFINT](DEFINT.md) , [DEFSNG](DEFSNG.md) , [DEFDBL](DEFDBL.md)
* [DIM](DIM.md) , [REDIM](REDIM.md)
* [COMMON](COMMON.md) , [SHARED](SHARED.md)
* [_UNSIGNED](UNSIGNED.md)
</blockquote>
