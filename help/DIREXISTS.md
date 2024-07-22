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

## [_DIREXISTS](DIREXISTS.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_DIREXISTS)
---
<blockquote>

### The _DIREXISTS function determines if a designated file path or folder exists and returns true (-1) or false (0).

</blockquote>

#### SYNTAX

<blockquote>

`dirExists% = _DIREXISTS ( filepath$ )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  The filepath$ parameter can be a literal or variable string path value.
*  The function returns -1 when a path or folder exists and 0 when it does not.
*  The function reads the system information directly without using a [SHELL](SHELL.md)  procedure.
*  The function will use the appropriate Operating System path separators. _OS$ can determine the operating system.
*  This function does not guarantee that a path can be accessed, only that it exists.
*  NOTE: Checking if a folder exists in a CD drive may cause the tray to open automatically to request a disk when empty. To find drives in Windows, use this API Library: Disk Drives


</blockquote>

#### SEE ALSO

<blockquote>

*  [_FILEEXISTS](FILEEXISTS.md) 
*  [SHELL](SHELL.md) 
*  [_OS\$](OS\$.md) 

</blockquote>
