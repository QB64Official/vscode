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


## [ELSE](ELSE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/ELSE)
---
<blockquote>

### ELSE is used in IF...THEN or SELECT CASE statements to offer an alternative to other conditional statements.

</blockquote>

#### DESCRIPTION

<blockquote>


* [ELSE](ELSE.md) is used in a [IF](IF.md) block statement to cover any remaining conditions not covered in the main block by [IF](IF.md) or [ELSEIF](ELSEIF.md) .
* [CASE](CASE.md) [ELSE](ELSE.md) covers any remaining conditions not covered by the other [CASE](CASE.md) statements.
* [ELSE](ELSE.md) can also be used as a false comparison to a true [IF](IF.md) statement when a condition will only be true or false.
* Other IF...THEN statements can be inside of an [ELSE](ELSE.md) statement.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: One line IF statement
```vb
IF x = 100 THEN PRINT "100" ELSE PRINT "Not 100"
```
  
<br>



##### Example 2: Multiple line IF statement block
```vb
IF x = 100 THEN ' code executed MUST be on next statement line!
PRINT "100"
ELSE PRINT "Not 100"
END IF
```
  
<br>



##### Example 3: To alternate between any two values (as long as the value after ELSE is the same as the condition)
```vb
IF a = 3 THEN a = 5 ELSE a = 3
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [ELSEIF](ELSEIF.md)
* IF...THEN
</blockquote>
