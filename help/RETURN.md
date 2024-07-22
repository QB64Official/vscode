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

## [RETURN](RETURN.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/RETURN)
---
<blockquote>

### RETURN is used in GOSUB procedures to return to the original call code line or a specified line label.

</blockquote>

#### SYNTAX

<blockquote>

`RETURN [{ linelabel | linenumber }]`

</blockquote>

#### PARAMETERS

<blockquote>

*  [RETURN](RETURN.md)  without parameters returns to the code immediately following the original [GOSUB](GOSUB.md)  call.
*  line number or linelabel after the [RETURN](RETURN.md)  statement returns code execution to that label.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Returns after a Gosub.
```vb
FOR a = 1 TO 10
PRINT a
IF a = 5 THEN GOSUB five
NEXT
END       'END or SYSTEM stop the program before the execution of a sub procedure

five:
PRINT "Aha! Five!"
RETURN
```
  
<br>

##### Example 1: Returns after a Gosub.
```vb
1
2
3
4
5
Aha! Five!
6
7
8
9
10
```
  
<br>

##### Example 2: Returns to a specific line label.
```vb
GOSUB hey
PRINT "it didn't go here."
hoho:
PRINT "it went here."
END

hey:
RETURN hoho
```
  
<br>

##### Example 2: Returns to a specific line label.
```vb
it went here.
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  [GOSUB](GOSUB.md)  , [GOTO](GOTO.md) 
*  [RESUME](RESUME.md) 

</blockquote>
