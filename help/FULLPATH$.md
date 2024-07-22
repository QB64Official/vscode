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

## [_FULLPATH\$](FULLPATH\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_FULLPATH$)
---
<blockquote>

### The _FULLPATH$ function returns an absolute or full path name for the specified relative path name.

</blockquote>

#### SYNTAX

<blockquote>

`p$ = _FULLPATH$ ( pathName$ )`

</blockquote>

#### PARAMETERS

<blockquote>

*  pathname$ is the file or directory for which to obtain absolute path information.

</blockquote>

#### DESCRIPTION

<blockquote>

*  The path returned ends with a backslash on Windows and a forward-slash on Linux and macOS if pathname$ is a directory.
*  A nonexistent file or directory generates the error message, "Path Not Found.".


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  _CWD$ , [_STARTDIR\$](STARTDIR\$.md) 
*  [FILES](FILES.md)  , [_FILES\$]( [FILES](FILES.md) \$.md) 
*  [_DIREXISTS](DIREXISTS.md)  , [_FILEEXISTS](FILEEXISTS.md) 

</blockquote>
