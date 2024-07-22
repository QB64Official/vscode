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

## [CHDIR](CHDIR.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/CHDIR)
---
<blockquote>

### The CHDIR statement changes the program's location from one working directory to another by specifying a literal or variable STRING path.

</blockquote>

#### SYNTAX

<blockquote>

`CHDIR path$`

</blockquote>

#### DESCRIPTION

<blockquote>

*  path$ is the new directory path the program will work in.
*  path$ can be an absolute path (starting from the root folder) or relative path (starting from the current program location).
*  If path$ specifies a non-existing path, a "Path not found" error will occur.
*  A QB64 [SHELL](SHELL.md)  statement cannot use "CD " or " [CHDIR](CHDIR.md)  " + path$ to change directories.


</blockquote>

#### SEE ALSO

<blockquote>

*  [SHELL](SHELL.md)  , [FILES](FILES.md) 
*  [MKDIR](MKDIR.md)  , [RMDIR](RMDIR.md) 
*  $CONSOLE

</blockquote>
