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

```vb
Bill Gates never said "Hello World!" when he answered the telephone!
```
  
<br>


<div class="explanation">Explanation: Printed numerical values using semicolons have a space on each side. PRINT USING properly formats the string and displays the cent values when they are zero. STR\$ converts the number to a string and excludes the right number space, but leaves the sign space. LTRIM\$ eliminates the leading sign space between the string number and the \$ dollar sign.</div>



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

```vb
Billy sold 102 boxes for $ 306 .
Billy sold 102 boxes for $306.00.
Billy sold 102 boxes for $306.
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [PRINT](PRINT.md) , [PRINT](PRINT.md) [USING](USING.md)
* [CHR&dollar;](CHR&dollar;.md) , [STR&dollar;](STR&dollar;.md) , [VARPTR&dollar;](VARPTR&dollar;.md)
* Semicolon , Comma
</blockquote>
