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

*  expression is a numeric or string expression or list of expressions to be written to the screen. End quotes will not be displayed in strings.
*  The print statement can be followed by a semicolon to stop the print cursor or a comma to tab space the next print.

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

##### Example 1: Using semicolons, comma tabs or concatenation to insert ASCII characters and numbers in a PRINT:
```vb
"Hello world!"
123
Hello country!      321
Hello country! 321
Hello country!-321
Hello city!
```
  
<br>

##### Example 2: Changing colors in a line of text using semicolons with colon separators between PRINTs on the same code line.
```vb
COLOR 12: PRINT "Start red "; : COLOR 10: PRINT "and end green."
COLOR 11: PRINT "Start aqua ";
COLOR 14: PRINT "and end blue."
```
  
<br>

##### Example 2: Changing colors in a line of text using semicolons with colon separators between PRINTs on the same code line.
```vb
Start red and end green.
Start aqua and end blue.
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  [_PRINTMODE](PRINTMODE.md)  , [_PRINTSTRING](PRINTSTRING.md)  , [PRINT](PRINT.md) [USING](USING.md) 
*  [SPC](SPC.md)  , [TAB](TAB.md)  , SPACE$ , [SCREEN](SCREEN.md) 
*  [CSRLIN](CSRLIN.md)  , [POS](POS.md)  , [SCREEN](SCREEN.md)  (function)
*  [COLOR](COLOR.md)  , [LOCATE](LOCATE.md)  , [VIEW](VIEW.md)  [PRINT](PRINT.md) 
*  [INPUT](INPUT.md)  , STR$ , [CHR\$](CHR\$.md) 
*  ASCII , [_CONTROLCHR](CONTROLCHR.md) 
*  Text Using Graphics

</blockquote>
