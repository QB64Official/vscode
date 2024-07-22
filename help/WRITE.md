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

## [WRITE](WRITE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/WRITE)
---
<blockquote>

### The WRITE statement writes a comma -separated list of values to the screen without spacing.

</blockquote>

#### SYNTAX

<blockquote>

`WRITE [ expression, List ]`

</blockquote>

#### DESCRIPTION

<blockquote>

*  expressionList is a comma-separated list of variable or literal values to be written to the screen.
*  Write statement separates displayed values using comma separators(required) that will display on the screen.
*  Leading and trailing number spaces are omitted when displaying numerical values.
*  String quotation marks will also be displayed.
*  Semicolons cannot be used in or following the [WRITE](WRITE.md)  statement!


</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Comparing WRITE to the same PRINT statement.
```vb
a% = 123
b$ = "Hello"
c! = 3.1415

PRINT a%, b$, c!   'commas display tab spaced data
WRITE a%, b$, c!   'displays commas between values, strings retain end quotes
```
  
<br>

##### Example: Comparing WRITE to the same PRINT statement.
```vb
123        Hello      3.1415
123,"Hello",3.1415
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  [WRITE](WRITE.md)  #
*  [INPUT](INPUT.md)  #
*  [PRINT](PRINT.md)  , [PRINT](PRINT.md)  #
*  [PRINT](PRINT.md) [USING](USING.md) 

</blockquote>
