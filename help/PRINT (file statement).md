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

## [PRINT_(file_statement)](PRINT_(file_statement).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/PRINT (file statement))
---
<blockquote>

### The PRINT # statement prints numeric or string expressions to a sequential file, IO port or device.

</blockquote>

#### SYNTAX

<blockquote>

`PRINT # fileNumber& , [ [ expression ] [{;|,] ... ]`

</blockquote>

#### PARAMETERS

<blockquote>

*  fileNumber& is the file number of a file or device opened for writing. See [OPEN](OPEN.md)  .
*  expression is a numeric or string expression to be written to the file. Quotes will be removed from strings.
*  The print statement can be followed by a semicolon to stop the print cursor or a comma to tab the next print.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Prints data to a text file sequentially and reads it back to the program screen as one line of text.
```vb
filename$ = "testfile.dat"
x = 1: y = 2: z$ = "Three"

OPEN filename$ FOR OUTPUT AS #1 'opens and clears an existing file or creates new empty file

PRINT #1, x, y, z$

CLOSE #1

PRINT "File created with data. Press a key!"

K$ = INPUT$(1) 'press a key

OPEN filename$ FOR INPUT AS #2 'opens a file to read it

LINE INPUT #2, text$

CLOSE #2

PRINT text$
WRITE text$

END
```
  
<br>

##### Example: Prints data to a text file sequentially and reads it back to the program screen as one line of text.
```vb
1             2            Three
```
  
<br>

##### Example: Prints data to a text file sequentially and reads it back to the program screen as one line of text.
```vb
1             2            Three
" 1             2            Three"
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  [SPC](SPC.md)  , SPACE$ , [TAB](TAB.md) 
*  [PRINT](PRINT.md)  #, [USING](USING.md) 
*  [PRINT](PRINT.md) 
*  [WRITE](WRITE.md)  # , [INPUT](INPUT.md)  #
*  [LINE](LINE.md)  [INPUT](INPUT.md)  #
*  [OPEN](OPEN.md)  , [LPRINT](LPRINT.md)  , [WRITE](WRITE.md) 

</blockquote>
