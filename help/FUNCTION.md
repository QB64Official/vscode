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


## [FUNCTION](FUNCTION.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/FUNCTION)
---
<blockquote>

### A FUNCTION block statement is used to create a function procedure to return a calculated value to a program.

</blockquote>

#### SYNTAX

<blockquote>

`FUNCTION procedureName [type-suffix] [( parameters )] {code} 'variable definitions and procedure statements ⋮ procedureName = returnValue`

</blockquote>

#### DESCRIPTION

<blockquote>


* The function type can be any variable type that it will return to the program and is represented by the type suffix.
* Functions hold one return value in the function's name which is a variable type. Other values can be passed through parameters .
* Functions are often referred to in program calculations, not called like [SUB](SUB.md) procedures. [CALL](CALL.md) cannot be used with functions.
* If there are no parameters passed or they are [SHARED](SHARED.md) the parameters and parenthesis are not required.
* Variable names within the procedure do not have to match the names used in the reference parameters, just the value types.
* To pass parameter variables by value to protect the value in a call, parenthesis can be placed around each variable name also.
* To pass arrays to a sub-procedure use empty brackets after the name or indicate the index in the call.
* All dynamic variable values return to 0 or null strings when the procedure is exited except when a variable or the entire function is [STATIC](STATIC.md) . This can save program memory as all dynamic memory used in a [FUNCTION](FUNCTION.md) is released on procedure exit.
* [FUNCTION](FUNCTION.md) procedure code can use [GOSUB](GOSUB.md) and [GOTO](GOTO.md) line numbers or labels inside of the procedure when necessary.
* For early function exits use [EXIT](EXIT.md) [FUNCTION](FUNCTION.md) before [END](END.md) [FUNCTION](FUNCTION.md) and [GOSUB](GOSUB.md) procedures using [RETURN](RETURN.md) .
* QB64 ignores all procedural [DECLARE](DECLARE.md) statements. Define all parameter types in the [FUNCTION](FUNCTION.md) procedure.
* Images are not deallocated when the [SUB](SUB.md) or [FUNCTION](FUNCTION.md) they are created in ends. Free them with [_FREEIMAGE](FREEIMAGE.md) .
* The IDE can create the [FUNCTION](FUNCTION.md) and [END](END.md) [FUNCTION](FUNCTION.md) lines for you. Use the New FUNCTION... option in the Edit Menu. A box will come up for you to enter a name for the FUNCTION. Enter all code between the [FUNCTION](FUNCTION.md) and [END](END.md) [FUNCTION](FUNCTION.md) lines.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: A simple function that returns the current path. Place FUNCTION or SUB procedures after the program END .
```vb
PRINT "Current path = "; PATH$
END

FUNCTION PATH$
f% = FREEFILE
file$ = "D0Spath.inf" 'file name uses a zero to prevent an overwrite of existing file name
SHELL _HIDE "CD > " + file$ 'send screen information to a created text file
OPEN file$ FOR INPUT AS #f% 'file should exist with one line of text
LINE INPUT #f%, PATH$ 'read file path text to function name
CLOSE #f%
KILL file$
END FUNCTION
```
  
<br>



##### Example 2: Returns a LONG array byte size required for a certain sized graphics screen pixel area GET .
```vb
INPUT "Enter a screen mode: ", mode%
INPUT "Enter image width: ", wide&
INPUT "Enter image depth: ", deep&
IntegerArray& = ImageBufferSize&(wide&, deep&, mode%) \ 2 ' returns size of an INTEGER array.
PRINT IntegerArray&
END

DEFINT A-Z
FUNCTION ImageBufferSize& (Wide&, Deep&, ScreenMode%)
SELECT CASE ScreenMode%
CASE 1: BPPlane = 2: Planes = 1
CASE 2, 3, 4, 11: BPPlane = 1: Planes = 1
CASE 7, 8, 9, 12: BPPlane = 1: Planes = 4
CASE 10: BPPlane = 1: Planes = 2
CASE 13: BPPlane = 8: Planes = 1
CASE ELSE: BPPlane = 0
END SELECT
ImageBufferSize& = 4 + INT((Wide& * BPPlane + 7) / 8) * (Deep& * Planes) 'return the value to function name.
END FUNCTION
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [SUB](SUB.md) , [SCREEN](SCREEN.md)
* [EXIT](EXIT.md) (statement), [END](END.md)
* [_EXIT](EXIT.md) (function)
</blockquote>
