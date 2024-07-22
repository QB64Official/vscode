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

## [DATA](DATA.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/DATA)
---
<blockquote>

### The DATA statement creates a line of fixed program information separated by commas. The DATA can be later READ by the program at runtime.

</blockquote>

#### SYNTAX

<blockquote>

`DATA [value1, value2, ...]`

</blockquote>

#### DESCRIPTION

<blockquote>

*  [DATA](DATA.md)  is used at the beginning of every [DATA](DATA.md)  field line with commas separating the values that follow.
*  Values can be any literal [STRING](STRING.md)  or numerical type. Variables cannot be used.
*  [DATA](DATA.md)  fields can be placed and [READ](READ.md)  consecutively in the main program code body with [OR](OR.md)  without line labels for [RESTORE](RESTORE.md)  .
*  [DATA](DATA.md)  is best placed after the main program code.
	* QB64 [DATA](DATA.md)  can be placed inside a [SUB](SUB.md)  or [FUNCTION](FUNCTION.md)  procedures.
*  [RESTORE](RESTORE.md)  will only read the first [DATA](DATA.md)  field if the [DATA](DATA.md)  is not labeled [OR](OR.md)  no label is specified in a [RESTORE](RESTORE.md)  call.
*  When using multiple [DATA](DATA.md)  fields, label each [DATA](DATA.md)  field with a line label so that each [DATA](DATA.md)  pointer can be reset for multiple reads with [RESTORE](RESTORE.md)  linelabel .
*  QBasic comma separations were flexible to allow column alignments when creating them. QB64 removes spacing between commas.
*  [STRING](STRING.md) [DATA](DATA.md)  values with end spaces, QBasic keywords and values that include the comma character must be enclosed in quotation marks.
*  [DATA](DATA.md)  fields can only be created by the programmer and cannot be changed by a user or lost.
*  Comments after a data line require a colon before the comment.
*  If a [READ](READ.md)  statement attempts to [READ](READ.md)  past the last data value, an "Out of Data" error will occur. Use end of data markers when necessary.
*  [DATA](DATA.md)  fields can be placed after [SUB](SUB.md)  or [FUNCTION](FUNCTION.md)  procedures, but line labels are not allowed.


</blockquote>

#### SEE ALSO

<blockquote>

*  [RESTORE](RESTORE.md)  . [READ](READ.md) 
*  $EMBED . [_EMBEDDED\$](EMBEDDED\$.md) 
*  [SUB](SUB.md)  , [FUNCTION](FUNCTION.md) 

</blockquote>
