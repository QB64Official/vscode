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


## [WRITE (file statement)](WRITE_(file_statement).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/WRITE%20%28file%20statement%29)
---
<blockquote>

### The WRITE # file statement writes a list of comma separated variable values to a sequential file or port.

</blockquote>

#### SYNTAX

<blockquote>

`WRITE # filenumber& [, expressionList ]`

</blockquote>

#### DESCRIPTION

<blockquote>


* filenumber& is the number of the file or device OPENed in the [OUTPUT](OUTPUT.md) or [APPEND](APPEND.md) modes. See: [FREEFILE](FREEFILE.md) .
* expressionList is a comma-separated list of values to be written to the file or device.
* [WRITE](WRITE.md) can place any number and types of variable values needed in a file record separated by commas.
* String values will have quotation marks although quotes are not required to read strings in CSV files with [INPUT](INPUT.md) #.
* Data files using [WRITE](WRITE.md) normally will have the same number of values listed on each file line.
* Data containing commas must be in quotation marks. Number commas are illegal!
* [WRITE](WRITE.md) created files are normally read with [INPUT](INPUT.md) #.
* CSV files created can be read by Excel using a .CSV file name extension. Strings may or may not include quotation marks.
* Semicolons cannot be used in or following the [WRITE](WRITE.md) statement!

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Writes new data to a text file sequentially and reads it back to the program screen.
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
1,2,"Three"
```
  
<br>

```vb
1           2          Three
1,2,"Three"
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [PRINT](PRINT.md) #
* [INPUT](INPUT.md) #
* [LINE](LINE.md) [INPUT](INPUT.md) #
* SQL Client
</blockquote>
