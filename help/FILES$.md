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


## [_FILES\$](FILES\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_FILES%24)
---
<blockquote>

### The _FILES$ function returns a file or directory name that matches the specified pattern.

</blockquote>

#### SYNTAX

<blockquote>

`e$ = _FILES$ [( filespec$ )]`

</blockquote>

#### PARAMETERS

<blockquote>


* filespec$ is an optional string expression that specifies a file name or path; may include wildcard characters.
</blockquote>

#### DESCRIPTION

<blockquote>


* If you omit filespec$ when you first call [_FILES&dollar;](FILES&dollar;.md) , QB64-PE generates the error message, "Illegal Function Call."
* If filespec$ is an empty string, then it is assumed to be " 
* " internally.
* [_FILES&dollar;](FILES&dollar;.md) returns the first file or directory name that matches the filespec$ you specify. To retrieve additional file or directory names that match the filespec$ pattern, call [_FILES&dollar;](FILES&dollar;.md) again with no argument. When no file or directory names match, [_FILES&dollar;](FILES&dollar;.md) returns an empty string.
* You do not have to retrieve all the file names that match a given filespec$ before calling [_FILES&dollar;](FILES&dollar;.md) again with a new filespec$ .
* [_FILES&dollar;](FILES&dollar;.md) is not case sensitive in Windows. However, it is case sensitive in Linux and macOS.
* Because file and directory names are retrieved in no particular order, you may want to store file names in a dynamic array and sort the array.
* Directory names returned, ends with a backslash on Windows and a forward-slash on Linux and macOS.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
$CONSOLE:ONLY
OPTION _EXPLICIT

DIM f AS STRING: f = _FILES$("../*.bas")

DO WHILE LEN(f) > 0
PRINT f

f = _FILES$
LOOP

END
```
  
<br>

```vb
$CONSOLE:ONLY
OPTION _EXPLICIT

DIM directory AS STRING: directory = COMMAND$

IF NOT _DIREXISTS(directory) THEN directory = _CWD$

$IF WINDOWS THEN
IF RIGHT$(directory, 1) <> "\" THEN directory = directory + "\"
$ELSE
IF RIGHT$(directory, 1) <> "/" THEN directory = directory + "/"
$END IF

PrintDirectory 3, directory

END

SUB PrintDirectory (L AS LONG, directory AS STRING)
DIM entry(0 TO 0) AS STRING, n AS _UNSIGNED LONG

DIM CL AS LONG: CL = L
IF CL > _WIDTH THEN CL = _WIDTH

DIM e AS STRING: e = _FILES$(directory)

DO
entry(n) = e
n = n + 1

IF n > UBOUND(entry) THEN REDIM _PRESERVE entry(0 TO n) AS STRING

e = _FILES$
LOOP WHILE LEN(e) > 0

IF CL > 2 THEN LOCATE , CL - 2 ELSE LOCATE , CL
PRINT directory

DIM i AS _UNSIGNED LONG

WHILE i < n
LOCATE , CL: PRINT entry(i)

$IF WINDOWS THEN
IF entry(i) <> ".\" AND entry(i) <> "..\" AND RIGHT$(entry(i), 1) = "\" THEN PrintDirectory CL + 2, directory + entry(i)
$ELSE
IF entry(i) <> "./" AND entry(i) <> "../" AND RIGHT$(entry(i), 1) = "/" THEN PrintDirectory CL + 2, directory + entry(i)
$END IF

i = i + 1
WEND
END SUB
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* [FILES](FILES.md)
* [_CWD&dollar;](CWD&dollar;.md) , [_STARTDIR&dollar;](STARTDIR&dollar;.md)
* [_DIR&dollar;](DIR&dollar;.md)
* [_FULLPATH&dollar;](FULLPATH&dollar;.md)
* [_DIREXISTS](DIREXISTS.md) , [_FILEEXISTS](FILEEXISTS.md)
</blockquote>
