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

## [Concatenation](Concatenation.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Concatenation)
---
<blockquote>

### Concatenation is a process where literal or variable STRING values are combined using the + operator.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Adding quotation marks to a string value using concatenation. Variables cannot be defined using semicolons!
```vb
quote$ = CHR$(34) + "Hello World!" + CHR$(34)

PRINT "Bill Gates never said "; quote$; " when he answered the telephone!"
```
  
<br>

##### Example 1: Adding quotation marks to a string value using concatenation. Variables cannot be defined using semicolons!
```vb
Bill Gates never said "Hello World!" when he answered the telephone!
```
  
<br>

##### Example 2: Inserting numerical values in a PRINT string with semicolons, PRINT USING and PRINT with concatenation.
```vb
name$ = "Billy"
boxes% = 102
sales! = 306.00
template$ = "& sold ### boxes for $$####,.##."

PRINT name$; " sold"; boxes%; "boxes for $"; sales!; "."
PRINT USING template$; name$; boxes%; sales!
PRINT name$ + " sold" + STR$(boxes%) + " boxes for $" + LTRIM$(STR$(sales!)) + "."
```
  
<br>

##### Example 2: Inserting numerical values in a PRINT string with semicolons, PRINT USING and PRINT with concatenation.
```vb
Billy sold 102 boxes for $ 306 .
Billy sold 102 boxes for $306.00.
Billy sold 102 boxes for $306.
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  [PRINT](PRINT.md)  , [PRINT](PRINT.md) [USING](USING.md) 
*  CHR$ , STR$ , [VARPTR\$](VARPTR\$.md) 
*  Semicolon , Comma

</blockquote>
