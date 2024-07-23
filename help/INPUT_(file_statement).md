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


## [INPUT (file statement)](INPUT_(file_statement).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/INPUT%20%28file%20statement%29)
---
<blockquote>

### The INPUT # file or port statement reads sequential data using one variable or a comma separated list of matching variable types.

</blockquote>

#### SYNTAX

<blockquote>

`INPUT # fileNumber& , variable1 [, variable2 , ..., variableN ]`

</blockquote>

#### PARAMETERS

<blockquote>


* fileNumber& is a positive [LONG](LONG.md) integer value used to [OPEN](OPEN.md) the file [FOR](FOR.md) [INPUT](INPUT.md) mode.
* The type of the variable used defines the value or list of values to be returned from the file. Numeric types must match the values returned.
* As reflected in the syntax you can list a number of variables with different types seperated by a comma and they will hold the values in the file (keep in mind that the information in the file should match the variable types used).
</blockquote>

#### DESCRIPTION

<blockquote>


* The file number can be determined by the programmer or be an unused number returned by the [FREEFILE](FREEFILE.md) function.
* Variable types must match the numerical types being read. [STRING](STRING.md) variables can return unquoted numeric values.
* Leading or trailing spaces of [STRING](STRING.md) values must be inside of quotes. [WRITE](WRITE.md) # writes strings inside of quotes automatically. [PRINT](PRINT.md) # removes quotes.
* [INPUT](INPUT.md) # will read each value until it encounters a comma for the next value in a list.
* Use the [EOF](EOF.md) function to avoid reading past the end of a file.
* Files created by [WRITE](WRITE.md) # usually have the same number of values on each file line. If [INPUT](INPUT.md) reads more or less values, it may read beyond the end of file or return bad data.
* Use the [LINE](LINE.md) [INPUT](INPUT.md) (file statement) for files created with [PRINT](PRINT.md) # or [PRINT](PRINT.md) #, USING.
* [INPUT](INPUT.md) can read Excel CSV files, but beware of unquoted text or numerical values containing commas.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Writes new data to a text file sequentially and reads it back to the program screen.
```vb
filename$ = "testfile.dat"
x = 1: y = 2: z$ = "Three"

OPEN filename$ FOR OUTPUT AS #1 'opens and clears an existing file or creates new empty file
WRITE #1, x, y, z$
CLOSE #1

PRINT "File created with data. Press a key!"
K$ = INPUT$(1) 'press a key

OPEN filename$ FOR INPUT AS #2 'opens a file to read it
INPUT #2, a, b, c$
CLOSE #2

PRINT a, b, c$
WRITE a, b, c$

END
```
  
<br>

```vb
1           2          Three
1,2,"Three"
```
  
<br>


<div class="explanation">File content: Commas inside of strings delimited with quotes will be ignored. WRITE will always enclose string values in quotes.</div>

```vb
1,2,"Three"
```
  
<br>



##### Example 2: Commas inside of string values will not affect the INPUT value as those commas are not WRITE separators.
```vb
x$ = "Hello, how are you?"
y$ = "I'm fine."

OPEN "testinp.dat" FOR OUTPUT AS #1
WRITE #1, x$, y$
CLOSE #1


OPEN "testinp.dat" FOR INPUT AS #1

INPUT #1, a$, b$
CLOSE #1

PRINT a$, b$
WRITE a$, b$
```
  
<br>

```vb
Hello, how are you?        I'm fine.
"Hello, how are you?","I'm fine."
```
  
<br>

```vb
"Hello, how are you?","I'm fine."
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [INPUT](INPUT.md) (file mode) , [LINE](LINE.md) [INPUT](INPUT.md) # , [INPUT&dollar;](INPUT&dollar;.md) (file input)
* [INPUT](INPUT.md) , [LINE](LINE.md) [INPUT](INPUT.md) , [INPUT&dollar;](INPUT&dollar;.md) (keyboard input)
* [PRINT](PRINT.md) # , [PRINT](PRINT.md) #, [USING](USING.md)
* [GET](GET.md) #
</blockquote>
