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

## [_FILES\$](FILES\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_FILES$)
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

*  filespec$ is an optional string expression that specifies a file name or path; may include wildcard characters.

</blockquote>

#### DESCRIPTION

<blockquote>

*  If you omit filespec$ when you first call _FILES$ , QB64-PE generates the error message, "Illegal Function Call."
*  If filespec$ is an empty string, then it is assumed to be " * " internally.
*  _FILES$ returns the first file or directory name that matches the filespec$ you specify. To retrieve additional file or directory names that match the filespec$ pattern, call _FILES$ again with no argument. When no file or directory names match, _FILES$ returns an empty string.
*  You do not have to retrieve all the file names that match a given filespec$ before calling _FILES$ again with a new filespec$ .
*  _FILES$ is not case sensitive in Windows. However, it is case sensitive in Linux and macOS.
*  Because file and directory names are retrieved in no particular order, you may want to store file names in a dynamic array and sort the array.
*  Directory names returned, ends with a backslash on Windows and a forward-slash on Linux and macOS.


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  [FILES](FILES.md) 
*  _CWD$ , [_STARTDIR\$](STARTDIR\$.md) 
*  [_DIR\$](DIR\$.md) 
*  [_FULLPATH\$](FULLPATH\$.md) 
*  [_DIREXISTS](DIREXISTS.md)  , [_FILEEXISTS](FILEEXISTS.md) 

</blockquote>
