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

## [RSET](RSET.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/RSET)
---
<blockquote>

### The RSET statement right-justifies a string according to length of the string expression.

</blockquote>

#### SYNTAX

<blockquote>

`RSET string_variable = string_expression`

</blockquote>

#### EXAMPLES

<blockquote>



##### Example:
```vb
CLS
DIM thestring AS STRING * 10
PRINT "12345678901234567890"
RSET thestring = "Hello!"
PRINT thestring
anystring$ = SPACE$(20)
RSET anystring$ = "Hello again!"
PRINT anystring$
RSET thestring = "Over ten characters long"
PRINT thestring
```
  
<br>

##### Example:
```vb
12345678901234567890
Hello!
Hello Again!
Over ten c
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  RTRIM$ , [FIELD](FIELD.md) 
*  [LSET](LSET.md)  , [LTRIM\$](LTRIM\$.md) 
*  [PUT](PUT.md)  , [GET](GET.md) 

</blockquote>
