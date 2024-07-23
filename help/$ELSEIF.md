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


## [\$IF](\$IF.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/%24IF)
---
<blockquote>

### $IF is precompiler metacommand , which determines which sections of code inside its blocks are included into the final code for compliing.

</blockquote>

#### SYNTAX

<blockquote>

`$IF variable = expression THEN`

</blockquote>

#### DESCRIPTION

<blockquote>


* [&dollar;IF](&dollar;IF.md) is the start of a precompiler code block which includes or excludes sections of code from being compiled.
* There is no single line [&dollar;IF](&dollar;IF.md) statement.  [&dollar;IF](&dollar;IF.md) must be in a valid [&dollar;IF](&dollar;IF.md) THEN...$END [IF](IF.md) block to work properly.
* Like all other metacommands, you can not use more than one metacommand per line. Use of : to separate statements in a single line is not allowed.
* Variable names can contain numbers, letters and periods, in any order.
* Expressions can contain one set of leading and/or trailing quotes; and any number of numbers, letters and periods, in any order.
* The precompiler comes with some preset values which can be used to help determine which code blocks to include/exclude.  These are:
* WIN or WINDOWS if the user is running QB64 in a Windows environment.
* LINUX if the user is running QB64 in a Linux environment.
* MAC or MACOSX if the user is running QB64 in a macOS environment.
* 32BIT if the user is running a 32-bit version of QB64.
* 64BIT if the user is running a 64-bit version of QB64.
* VERSION , which is set to the version of the QB64 compiler. This is a number and can be ordered, see example below.
* Special values DEFINED and UNDEFINED can be used to check whether a precompiler variable has already been assigned a value. Useful for code in libraries which may be repeated.
* [&dollar;END](&dollar;END.md) [IF](IF.md) denotes the end of a valid precompiler [&dollar;IF](&dollar;IF.md) block.
* [&dollar;ELSEIF](&dollar;ELSEIF.md) must follow a valid [&dollar;IF](&dollar;IF.md) or [&dollar;ELSEIF](&dollar;ELSEIF.md) statement.
* If [&dollar;ELSE](&dollar;ELSE.md) is used, it must be used as the last conditional check before [&dollar;END](&dollar;END.md) IF.  [&dollar;ELSEIF](&dollar;ELSEIF.md) cannot come after $ELSE.
* There can only be one [&dollar;ELSE](&dollar;ELSE.md) in an $IF-$ELSEIF-$ELSE-$END [IF](IF.md) block, and it must be the last block selection before the [&dollar;END](&dollar;END.md) IF.  [&dollar;ELSEIF](&dollar;ELSEIF.md) cannot follow $ELSE.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1:
```vb
$LET SCREENMODE = 32
$IF SCREENMODE = 0 THEN
CONST Red = 4
$ELSEIF SCREENMODE = 32 THEN
CONST Red = _RGB32(255, 0, 0)
$END IF

COLOR Red
PRINT "Hello World"
```
  
<br>



##### Example 2:
```vb
$IF WIN THEN
CONST Slash = "\"
$ELSE
CONST Slash = "/"
$END IF

PRINT "The proper slash for your operating system is "; Slash
```
  
<br>



##### Example 3:
```vb
$IF VERSION < 1.5 THEN
$ERROR Requires QB64 version 1.5 or greater
$END IF
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [&dollar;LET](&dollar;LET.md)
* [&dollar;ERROR](&dollar;ERROR.md)
* Metacommands
</blockquote>
