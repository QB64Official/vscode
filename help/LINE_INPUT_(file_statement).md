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


## [LINE INPUT (file statement)](LINE_INPUT_(file_statement).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/LINE%20INPUT%20%28file%20statement%29)
---
<blockquote>

### The LINE INPUT # file statement reads an entire line from a text file into a string variable.

</blockquote>

#### SYNTAX

<blockquote>

`LINE INPUT # fileNumber& , stringVariable$`

</blockquote>

#### PARAMETERS

<blockquote>


* fileNumber& is the [INTEGER](INTEGER.md) number of the file previously opened with the [OPEN](OPEN.md) statement.
* stringVariable$ holds the text line read from the file.
</blockquote>

#### DESCRIPTION

<blockquote>


* Reads a file using the fileNumber& OPENed in the [INPUT](INPUT.md) (file mode) or [BINARY](BINARY.md) file mode as one file line text string.
* NOTE: [LINE](LINE.md) [INPUT](INPUT.md) will work faster in [BINARY](BINARY.md) mode than in [INPUT](INPUT.md) mode.
* Using [LINE](LINE.md) [INPUT](INPUT.md) # in [BINARY](BINARY.md) mode is possible in version 1.000 and up
* Can be used with [EOF](EOF.md) to count the number of lines of data (records) in a file using a loop.
* Use the [EOF](EOF.md) function to avoid going past the end of a file and creating an error.
* [LINE](LINE.md) [INPUT](INPUT.md) # can even retain the original quotation marks in text.
* Note: QB64 will not remove CHR$(0) from the end of [LINE](LINE.md) [INPUT](INPUT.md) # string return values like QBasic did.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Finding the number of filenames listed in a file to dimension an array to hold them.
```vb
REDIM FileArray$(100) 'create dynamic array
SHELL _HIDE "DIR /B *.* > D0S-DATA.INF"
IF _FILEEXISTS("D0S-DATA.INF") THEN
OPEN "D0S-DATA.INF" FOR INPUT AS #1
DO UNTIL EOF(1)
LINE INPUT #1, file$        'read entire text file line
filecount% = filecount% + 1
LOOP
CLOSE #1
END IF
REDIM FileArray$(filecount%)
PRINT filecount%
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [OPEN](OPEN.md) , [CLOSE](CLOSE.md)
* [INPUT](INPUT.md) (file mode) , [INPUT](INPUT.md) # , [INPUT&dollar;](INPUT&dollar;.md) (file input)
* [INPUT](INPUT.md) , [LINE](LINE.md) [INPUT](INPUT.md) , [INPUT&dollar;](INPUT&dollar;.md) (keyboard input)
* [_FILEEXISTS](FILEEXISTS.md) , [_DIREXISTS](DIREXISTS.md)
* FILELIST$ (member-contributed function replacement for [FILES](FILES.md) )
</blockquote>
