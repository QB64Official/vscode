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


## [GOTO](GOTO.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/GOTO)
---
<blockquote>

### The GOTO statement sends the procedure to a line label or a line number in the program.

</blockquote>

#### SYNTAX

<blockquote>

`GOTO { lineNumber | lineLabel }`

</blockquote>

#### DESCRIPTION

<blockquote>


* lineNumber or lineLabel must already exist or an IDE status error will be displayed until it is created.
* Can be used in [SUB](SUB.md) or [FUNCTION](FUNCTION.md) procedures using their own line labels or numbers.
* The frequent use of [GOTO](GOTO.md) statements can become confusing when trying to follow the code and it could also cause endless loops.
* [GOTO](GOTO.md) is an easy trap for new programmers. Use loops instead when possible.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example:
```vb
1 PRINT "first line": GOTO gohere
2 PRINT "second line": GOTO 3

gohere:
PRINT "third line"
GOTO 2

3 END
```
  
<br>

```vb
first line
third line
second line
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [GOSUB](GOSUB.md) , [ON](ON.md) [ERROR](ERROR.md)
* ON...GOTO , ON...GOSUB
* DO...LOOP , FOR...NEXT
* IF...THEN , [SELECT](SELECT.md) [CASE](CASE.md)
* Line numbers and labels
</blockquote>
