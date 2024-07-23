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


## [GOSUB](GOSUB.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/GOSUB)
---
<blockquote>

### GOSUB sends the program flow to a sub procedure identified by a line number or label.

</blockquote>

#### SYNTAX

<blockquote>

`GOSUB { lineNumber | label }`

</blockquote>

#### DESCRIPTION

<blockquote>


* Use [RETURN](RETURN.md) in a sub procedure to return to the next line of code after the original [GOSUB](GOSUB.md) call. [END](END.md) or [SYSTEM](SYSTEM.md) can also be used to end program.
* [GOSUB](GOSUB.md) and [GOTO](GOTO.md) can be used within [SUB](SUB.md) or [FUNCTION](FUNCTION.md) procedures, but cannot refer to a label located outside the procedure.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Simple usage of GOSUB
```vb
PRINT "1. It goes to the subroutine."
GOSUB subroutine
PRINT "3. And it returns."
END

subroutine:
PRINT "2. It is at the subroutine."
RETURN
```
  
<br>

```vb
1. It goes to the subroutine.
2. It is at the subroutine.
3. And it returns.
```
  
<br>



##### Example: What happens if two GOSUB executes then two RETURN's?
```vb
start:

a = a + 1
IF a = 1 THEN GOSUB here: PRINT "It returned to IF a = 1": END
IF a = 2 THEN GOSUB there: PRINT "It returned to IF a = 2": RETURN



here:
PRINT "It went here."
GOTO start

there:
PRINT "It went there."
RETURN
```
  
<br>

```vb
It went here.
It went there.
It returned to IF a = 2
It returned to IF a = 1
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* ON...GOSUB
* ON...GOTO , [GOTO](GOTO.md)
* [ON](ON.md) [ERROR](ERROR.md) , [RESUME](RESUME.md)
* [ON](ON.md) TIMER(n)
* Line number
</blockquote>
