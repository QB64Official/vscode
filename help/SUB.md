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


## [SUB](SUB.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/SUB)
---
<blockquote>

### A SUB procedure is a procedure within a program that can calculate and return multiple parameter values just like a full program.

</blockquote>

#### SYNTAX

<blockquote>

`SUB ProcedureName [( 1stParam [, 2ndParam ... [, lastParam ]])]`

</blockquote>

#### PARAMETERS

<blockquote>


* Parameters passed after the procedure call must match the variable types in the [SUB](SUB.md) parameters in order.
* If there are no parameter s passed or they are [SHARED](SHARED.md) the parameters and parenthesis are not required in the procedure.
* Parameter Variable names in the procedure do not have to match the names used in the [CALL](CALL.md) , just the value types.
</blockquote>

#### DESCRIPTION

<blockquote>


* All dynamic variable values return to 0 or null strings when the procedure is exited except for [STATIC](STATIC.md) variable values.
* [SUB](SUB.md) procedures can return multiple values through the parameters unlike functions.
* [SUB](SUB.md) procedures return to the next code statement after the call in the main or other procedures.
* [EXIT](EXIT.md) [SUB](SUB.md) can be used to exit early or to exit before [GOSUB](GOSUB.md) procedures using [RETURN](RETURN.md) .
* [TYPE](TYPE.md) and [DECLARE](DECLARE.md) [LIBRARY](LIBRARY.md) declarations can be made inside of [SUB](SUB.md) procedures in QB64 only.
* [SUB](SUB.md) procedures can save program memory as all memory used in a [SUB](SUB.md) is released on procedure exit except for [STATIC](STATIC.md) values.
* [_DEFINE](DEFINE.md) can be used to define all new or old QB64 variable [TYPE](TYPE.md) definitions instead of DEF***.
* [&dollar;INCLUDE](&dollar;INCLUDE.md) text library files with needed [SUB](SUB.md) and [FUNCTION](FUNCTION.md) procedures can be included in programs after all sub-procedures.
* QB64 ignores all procedural [DECLARE](DECLARE.md) statements. Define all parameter TYPEs in the [SUB](SUB.md) procedure.
* Images are not deallocated when the [SUB](SUB.md) or [FUNCTION](FUNCTION.md) they are created in ends. Free them with [_FREEIMAGE](FREEIMAGE.md) .

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Text PRINT screen centering using PEEK to find the SCREEN mode width. Call and SUB procedure code:
```vb
DEFINT A-Z
SCREEN 13
Center 10, 15, "This text is centered." ' example module sub call
END

DEFINT A-Z ' only code allowed before SUB line is a DEF statement or a comment
SUB Center (Tclr, Trow, Text$)
Columns = _WIDTH / _FONTWIDTH 'Convert _WIDTH (in pixels) to width in characters
Middle = (Columns \ 2) + 1 ' reads any screen mode width
Tcol = Middle - (LEN(Text$) \ 2)
COLOR Tclr: LOCATE Trow, Tcol: PRINT Text$; ' end semicolon prevents screen roll
END SUB
```
  
<br>



##### Example 2: SUB and FUNCTION procedures always return to the place they were called in the main or other sub-procedures:
```vb
a = 10
Add1 a
PRINT a  'Add1 returns final 'a' value here

END

SUB Add1 (n)
n = n + 1
Add2 n
PRINT "exit 1"
END SUB

SUB Add2 (m)
m = m + 2
PRINT "exit 2"
END SUB
```
  
<br>


<div class="explanation">Note: Parameter a is used to call the sub-procedures even though parameters n and m are used internally.</div>

```vb
exit 2
exit 1
13
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [FUNCTION](FUNCTION.md) , [CALL](CALL.md)
* [BYVAL](BYVAL.md) , [SCREEN](SCREEN.md)
* [EXIT](EXIT.md) , [END](END.md)
</blockquote>
