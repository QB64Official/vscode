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


## [ON ERROR](ON_ERROR.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/ON%20ERROR)
---
<blockquote>

### ON ERROR is used with GOTO to handle errors in a program.

</blockquote>

#### SYNTAX

<blockquote>

`ON ERROR GOTO { lineNumber | lineLabel }`

</blockquote>

#### DESCRIPTION

<blockquote>


* An untreated error in a program will cause execution to stop and an error message is displayed to the user, who can choose to continue (ignore the error - which could have unexpected results) or end the program.
* Use [ON](ON.md) [ERROR](ERROR.md) when your program performs operations that are likely to generate errors, like file access operations.
* [ON](ON.md) [ERROR](ERROR.md) statements can be in the main module code or in [SUB](SUB.md) or [FUNCTION](FUNCTION.md) procedures.
* [ON](ON.md) [ERROR](ERROR.md) statements take precedence in the order they are encountered. It will also handle any subroutine errors.
* [ON](ON.md) [ERROR](ERROR.md) [GOTO](GOTO.md) 0 can be used to disable custom [ON](ON.md) [ERROR](ERROR.md) trapping and give default error messages.
* A subsequent [ON](ON.md) [ERROR](ERROR.md) statement will override the previous one.
* [GOTO](GOTO.md) is required in the statement. Cannot use [GOSUB](GOSUB.md) .
* Comment out [ON](ON.md) [ERROR](ERROR.md) to find specific error locations. QB64 can return the file line position with [_ERRORLINE](ERRORLINE.md)
* Note: QB64 does not support the PDS (QuickBASIC 7) [ON](ON.md) [ERROR](ERROR.md) [RESUME](RESUME.md) [NEXT](NEXT.md) statement.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Using an error handler that ignores any error.
```vb
ON ERROR GOTO Errhandler
' Main module program error simulation code
ERROR 7           ' simulate an Out of Memory Error
PRINT "Error handled...ending program"
SLEEP 4
SYSTEM            ' end of program code

Errhandler:              'error handler sub program line label
PRINT "Error"; ERR; "on program file line"; _ERRORLINE
BEEP             ' warning beep
RESUME NEXT       ' moves program to code following the error.
```
  
<br>

```vb
Error 7 on program file line 3
Error handled...ending program
```
  
<br>


<div class="explanation">Explanation: The ON ERROR statement is normally placed at the beginning of the main module code.  Errhandle is the line label sub referred to in the statement. The handler prints the error code and attempts to use the next line of code using RESUME NEXT which is only used in error handling procedures. _ERRORLINE returns the program file's actual text line count found in the IDE.</div>



##### Example 2: Using an error handler in a SUB procedure.
```vb
s
END

hand:
PRINT "got error!"
RESUME NEXT

SUB s
ON ERROR GOTO hand
ERROR 1
ON ERROR GOTO 0
PRINT "Done!"
END SUB
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [ERR](ERR.md) , [ERL](ERL.md) , [RESUME](RESUME.md)
* ON...GOTO
* [_ERRORLINE](ERRORLINE.md) , [_INCLERRORLINE](INCLERRORLINE.md) , [_INCLERRORFILE&dollar;](INCLERRORFILE&dollar;.md)
* [ERROR](ERROR.md)
* [ERROR](ERROR.md) Codes
</blockquote>
