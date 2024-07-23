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


## [PRINT](PRINT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/PRINT)
---
<blockquote>

### The PRINT statement prints numeric or string expressions to the program screen. Typing shortcut ? will convert to PRINT.

</blockquote>

#### SYNTAX

<blockquote>

`PRINT [ expression ] [{;|,}] [ expression ...]`

</blockquote>

#### PARAMETERS

<blockquote>


* expression is a numeric or string expression or list of expressions to be written to the screen. End quotes will not be displayed in strings.
* The print statement can be followed by a semicolon to stop the print cursor or a comma to tab space the next print.
</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Using semicolons, comma tabs or concatenation to insert ASCII characters and numbers in a PRINT:
```vb
PRINT CHR$(34); "Hello world!"; CHR$(34) ' adding quotation marks
PRINT 123 'demonstrates the positive leading space
a$ = "Hello country!": a = 321: b = -321
PRINT a$, a ' demonstrates comma in statement
PRINT a$; a ' demonstrates semicolon in statement
PRINT a$ + STR$(b) ' concatenation of string numerical values only
? "Hello city!" ' a ? changes to PRINT after moving cursor from the code line in IDE
```
  
<br>

```vb
"Hello world!"
123
Hello country!      321
Hello country! 321
Hello country!-321
Hello city!
```
  
<br>


<div class="explanation">First PRINT prints the text between two quotation marks, then it prints the value 123, notice that there are no quotation marks when printing the value, quotation marks mean that it will be treated like a literal string of text. a\$ is set to "Hello country" and 'a' is set to the value 321, the dollar sign is used when a variable holds the text string. The contents of a\$ is then printed and the "," means that the value of 'a' is printed separated by a tab and ";" means that there is no separation from the other text except for the leading positive value space.</div>



##### Example 2: Changing colors in a line of text using semicolons with colon separators between PRINTs on the same code line.
```vb
COLOR 12: PRINT "Start red "; : COLOR 10: PRINT "and end green."
COLOR 11: PRINT "Start aqua ";
COLOR 14: PRINT "and end blue."
```
  
<br>

```vb
Start red and end green.
Start aqua and end blue.
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_PRINTMODE](PRINTMODE.md) , [_PRINTSTRING](PRINTSTRING.md) , [PRINT](PRINT.md) [USING](USING.md)
* [SPC](SPC.md) , [TAB](TAB.md) , [SPACE&dollar;](SPACE&dollar;.md) , [SCREEN](SCREEN.md)
* [CSRLIN](CSRLIN.md) , [POS](POS.md) , [SCREEN](SCREEN.md) (function)
* [COLOR](COLOR.md) , [LOCATE](LOCATE.md) , [VIEW](VIEW.md) [PRINT](PRINT.md)
* [INPUT](INPUT.md) , [STR&dollar;](STR&dollar;.md) , [CHR&dollar;](CHR&dollar;.md)
* ASCII , [_CONTROLCHR](CONTROLCHR.md)
* Text Using Graphics
</blockquote>
