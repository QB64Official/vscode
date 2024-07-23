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


## [PRINT (file statement)](PRINT_(file_statement).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/PRINT%20%28file%20statement%29)
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


* fileNumber& is the file number of a file or device opened for writing. See [OPEN](OPEN.md) .
* expression is a numeric or string expression to be written to the file. Quotes will be removed from strings.
* The print statement can be followed by a semicolon to stop the print cursor or a comma to tab the next print.
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

```vb
1             2            Three
```
  
<br>

```vb
1             2            Three
" 1             2            Three"
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [SPC](SPC.md) , [SPACE&dollar;](SPACE&dollar;.md) , [TAB](TAB.md)
* [PRINT](PRINT.md) #, [USING](USING.md)
* [PRINT](PRINT.md)
* [WRITE](WRITE.md) # , [INPUT](INPUT.md) #
* [LINE](LINE.md) [INPUT](INPUT.md) #
* [OPEN](OPEN.md) , [LPRINT](LPRINT.md) , [WRITE](WRITE.md)
</blockquote>
