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


## [LSET](LSET.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/LSET)
---
<blockquote>

### LSET left-justifies a fixed length string expression based on the size of the STRING variable and string expression.

</blockquote>

#### SYNTAX

<blockquote>

`LSET {stringVariable = stringExpression | stringExpression1 = stringExpression2}`

</blockquote>

#### DESCRIPTION

<blockquote>


* If the string expression is longer than a fixed length string variable the value is truncated from the right side in [LSET](LSET.md) or [RSET](RSET.md) .
* If the [LSET](LSET.md) string expression is smaller, spaces will occupy the extra positions to the right in the string.
* [LSET](LSET.md) can be used with a [FIELD](FIELD.md) or [TYPE](TYPE.md) definition to set the buffer position before a [PUT](PUT.md) .

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Using LSET with a FIELD definition. Note: May create an empty (unchanged) file that can be deleted.
```vb
OPEN "testfile.dat" FOR RANDOM AS #1 LEN = 15
FIELD 1, 6 AS a$, 9 AS other$
FIELD 1, 2 AS b$, 13 AS another$
LSET a$ = "1234567890"
LSET other$ = "1234567890"
PRINT a$, b$, other$, another$
CLOSE #1
```
  
<br>

```vb
123456            12         123456789     3456123456789
```
  
<br>



##### Example 2: How LSET can define two different string length values in one statement.
```vb
TYPE ninestring
head AS STRING * 9
END TYPE

TYPE fivestring
head AS STRING * 5
END TYPE

DIM me AS ninestring, you AS fivestring
me.head = "ACHES NOT"
CLS

LSET you.head = me.head
PRINT "me.head: "; me.head
PRINT "you.head: "; you.head
```
  
<br>

```vb
me.head: ACHES NOT
you.head: ACHES
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [RSET](RSET.md) , [RTRIM&dollar;](RTRIM&dollar;.md)
* [FIELD](FIELD.md) , [TYPE](TYPE.md)
</blockquote>
