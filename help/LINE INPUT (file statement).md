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

## [LINE_INPUT_(file_statement)](LINE_INPUT_(file_statement).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/LINE INPUT (file statement))
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

*  fileNumber& is the [INTEGER](INTEGER.md)  number of the file previously opened with the [OPEN](OPEN.md)  statement.
*  stringVariable$ holds the text line read from the file.

</blockquote>

#### DESCRIPTION

<blockquote>

*  Reads a file using the fileNumber& OPENed in the [INPUT](INPUT.md)  (file mode) or [BINARY](BINARY.md)  file mode as one file line text string.
*  NOTE: [LINE](LINE.md)  [INPUT](INPUT.md)  will work faster in [BINARY](BINARY.md)  mode than in [INPUT](INPUT.md)  mode.
	* Using [LINE](LINE.md)  [INPUT](INPUT.md)  # in [BINARY](BINARY.md)  mode is possible in version 1.000 and up
*  Can be used with [EOF](EOF.md)  to count the number of lines of data (records) in a file using a loop.
*  Use the [EOF](EOF.md)  function to avoid going past the end of a file and creating an error.
*  [LINE](LINE.md)  [INPUT](INPUT.md)  # can even retain the original quotation marks in text.
*  Note: QB64 will not remove CHR$(0) from the end of [LINE](LINE.md)  [INPUT](INPUT.md)  # string return values like QBasic did.


</blockquote>

#### SEE ALSO

<blockquote>

*  [OPEN](OPEN.md)  , [CLOSE](CLOSE.md) 
*  INPUT (file mode) , INPUT # , INPUT$ (file input)
*  INPUT , [LINE](LINE.md)  INPUT , INPUT$ (keyboard input)
*  [_FILEEXISTS](FILEEXISTS.md)  , [_DIREXISTS](DIREXISTS.md) 
*  FILELIST$ (member-contributed function replacement for [FILES](FILES.md)  )

</blockquote>
