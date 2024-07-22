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

## [INPUT_(file_statement)](INPUT_(file_statement).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/INPUT (file statement))
---
<blockquote>

### The INPUT # file or port statement reads sequential data using one variable or a comma separated list of matching variable types.

</blockquote>

#### SYNTAX

<blockquote>

`INPUT # fileNumber& , variable1 [, variable2 , ..., variableN ]`

</blockquote>

#### PARAMETERS

<blockquote>

*  fileNumber& is a positive [LONG](LONG.md)  integer value used to [OPEN](OPEN.md)  the file [FOR](FOR.md)  [INPUT](INPUT.md)  mode.
*  The type of the variable used defines the value or list of values to be returned from the file. Numeric types must match the values returned.
*  As reflected in the syntax you can list a number of variables with different types seperated by a comma and they will hold the values in the file (keep in mind that the information in the file should match the variable types used).

</blockquote>

#### DESCRIPTION

<blockquote>

*  The file number can be determined by the programmer or be an unused number returned by the [FREEFILE](FREEFILE.md)  function.
*  Variable types must match the numerical types being read. [STRING](STRING.md)  variables can return unquoted numeric values.
*  Leading or trailing spaces of [STRING](STRING.md)  values must be inside of quotes. [WRITE](WRITE.md)  # writes strings inside of quotes automatically. [PRINT](PRINT.md)  # removes quotes.
*  [INPUT](INPUT.md)  # will read each value until it encounters a comma for the next value in a list.
*  Use the [EOF](EOF.md)  function to avoid reading past the end of a file.
*  Files created by [WRITE](WRITE.md)  # usually have the same number of values on each file line. If [INPUT](INPUT.md)  reads more or less values, it may read beyond the end of file or return bad data.
*  Use the [LINE](LINE.md)  [INPUT](INPUT.md)  (file statement) for files created with [PRINT](PRINT.md)  # or [PRINT](PRINT.md)  #, [USING](USING.md) .
*  [INPUT](INPUT.md)  can read Excel CSV files, but beware of unquoted text or numerical values containing commas.


</blockquote>

#### SEE ALSO

<blockquote>

*  INPUT (file mode) , [LINE](LINE.md)  INPUT # , INPUT$ (file input)
*  INPUT , [LINE](LINE.md)  INPUT , INPUT$ (keyboard input)
*  [PRINT](PRINT.md)  # , [PRINT](PRINT.md)  #, [USING](USING.md) 
*  [GET](GET.md)  #

</blockquote>
