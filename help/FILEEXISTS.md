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

## [_FILEEXISTS](FILEEXISTS.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_FILEEXISTS)
---
<blockquote>

### The _FILEEXISTS function determines if a designated file name exists and returns true (-1) or false (0).

</blockquote>

#### SYNTAX

<blockquote>

`theFileExists% = _FILEEXISTS ( filename$ )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  The filename$ parameter can be a literal or variable string value that can include a path.
*  The function returns -1 when a file exists and 0 when it does not.
*  The function reads the system information directly without using a [SHELL](SHELL.md)  procedure.
*  The function will use the appropriate Operating System path separators. _OS$ can determine the operating system.
*  This function does not guarantee that a file can be accessed or opened, just that it exists.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_DIREXISTS](DIREXISTS.md)  , [_OS\$](OS\$.md) 
*  [SHELL](SHELL.md)  , [FILES](FILES.md) 
*  [KILL](KILL.md) 

</blockquote>
