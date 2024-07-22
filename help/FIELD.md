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

## [FIELD](FIELD.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/FIELD)
---
<blockquote>

### The FIELD statement creates a STRING type definition for a random -access file buffer.

</blockquote>

#### SYNTAX

<blockquote>

`FIELD [#] fileNumber& , fieldWidth1% AS variable1$ [, fieldWidthN% AS variableN$ ]`

</blockquote>

#### DESCRIPTION

<blockquote>

*  fileNumber% is a file number used in the [OPEN](OPEN.md)  statement or a value from the [FREEFILE](FREEFILE.md)  function.
*  Combined size of the fieldWidth% parameters must not exceed the [LEN](LEN.md)  = recordsize in the [RANDOM](RANDOM.md) [OPEN](OPEN.md)  statement or a " [FIELD](FIELD.md)  overflow" error will occur.
*  Variables are limited to [STRING](STRING.md)  types. Use [TYPE](TYPE.md)  instead of [FIELD](FIELD.md)  if you want to use numerical values.
*  Once a [FIELD](FIELD.md)  is defined in a statement, [GET](GET.md)  can read and [PUT](PUT.md)  can write data without placeholders or variables.
*  [LSET](LSET.md)  , [RSET](RSET.md)  , [PRINT](PRINT.md)  # , [PRINT](PRINT.md)  # [USING](USING.md)  , and [WRITE](WRITE.md)  # can be used to place characters in the file buffer before a [PUT](PUT.md)  .
*  All field definitions for a file are removed when the file is closed or [RESET](RESET.md)  and all strings are set to null ("").
*  Do not re-assign a field defined variable value or use it in an [INPUT](INPUT.md)  statement if you want the variable to remain a field .


</blockquote>

#### SEE ALSO

<blockquote>

*  [OPEN](OPEN.md)  , [TYPE](TYPE.md) 
*  [GET](GET.md)  , [PUT](PUT.md) 
*  [LSET](LSET.md)  , [RSET](RSET.md) 

</blockquote>
