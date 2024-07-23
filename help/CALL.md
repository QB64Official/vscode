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


## [CALL](CALL.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/CALL)
---
<blockquote>

### CALL sends code execution to a subroutine procedure in a program. In QB64 the subroutine doesn't need to be declared.

</blockquote>

#### SYNTAX

<blockquote>

`CALL ProcedureName ( parameter1 , parameter2 ,...)]`

</blockquote>

#### DESCRIPTION

<blockquote>


* [CALL](CALL.md) requires [SUB](SUB.md) program parameters to be enclosed in brackets (parenthesis).
* [CALL](CALL.md) is not required to call a subprocedure. Use the SUB-procedure name and list any parameters without parenthesis.
* Neither syntax can be used to call [GOSUB](GOSUB.md) linelabel sub procedures.
* To pass parameters by value, instead of by reference, enclose passed variables in parenthesis.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: How parameters are passed in two SUB calls, one with CALL using brackets and one without CALL or brackets:
```vb
DIM a AS INTEGER 'value not shared with SUB
DIM SHARED b AS INTEGER 'value shared with any SUB
a = 1
b = 2
c = 3

CALL helloworld (a) 'a passed to c parameter with CALL
helloworld a        'a passed to c parameter w/o CALL

END

SUB helloworld (c) 'SUB parameter variables are always inside of brackets in SUB code
PRINT "Hello World!"
PRINT a,  b, c
a = a + 1 'a is a SUB value of 0 when printed which may increase inside SUB only
b = b + 1 'b is a shared value which can increase anywhere
c = c + 1 'c is a SUB parameter value from a in calls which may increase inside SUB only
END SUB
```
  
<br>

```vb
Hello World!
0            2            1
Hello World!
0            3            1
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [SUB](SUB.md) , [FUNCTION](FUNCTION.md)
</blockquote>
