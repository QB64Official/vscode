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

## [Comma](Comma.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Comma)
---
<blockquote>

### The comma is used to TAB the cursor after a PRINT statement's text to tab append another printed value.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Comparing TAB to comma tab spacing.
```vb
PRINT TAB(15); "T"

PRINT , "T"
```
  
<br>

##### Example 2: Comparing PRINT and WRITE statement displays.
```vb
value1 = 23567: value2 = 45678: value3 = 354126
COLOR 14: LOCATE 2, 1: PRINT value1, value2, value3
COLOR 12: LOCATE 4, 1: WRITE value1, value2, value3
```
  
<br>

##### Example 2: Comparing PRINT and WRITE statement displays.
```vb
23567        45678      354126

23567,45678,354126
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  Semicolon , Colon
*  [TAB](TAB.md)  , [SPC](SPC.md)  , [SPACE\$](SPACE\$.md) 
*  [PRINT](PRINT.md)  , [PRINT](PRINT.md) [USING](USING.md) 
*  [WRITE](WRITE.md)  , [INPUT](INPUT.md)  , [LINE](LINE.md)  [INPUT](INPUT.md) 

</blockquote>
