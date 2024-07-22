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

## [NAME](NAME.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/NAME)
---
<blockquote>

### The NAME statement changes the name of a file or directory to a new name.

</blockquote>

#### SYNTAX

<blockquote>

`NAME oldFileOrFolderName$ AS newFileOrFolderName$`

</blockquote>

#### DESCRIPTION

<blockquote>

*  oldFileOrFolderName$ and newFileOrFolderName$ are variables or literal STRINGs in quotes. Paths can be included.
*  If the two paths are different, the statement moves the original file to the new path and renames it.
*  If the path is the same or a path is not included, the original file is just renamed.
*  [SHELL](SHELL.md)  can use "REN " + filename$ + " " + newname$ for the same purpose (Windows).
*  Path or filename errors are possible and should be handled in the program.
*  Caution: There is no prompt to continue or execution verification.


</blockquote>

#### SEE ALSO

<blockquote>

*  [SHELL](SHELL.md)  , [MKDIR](MKDIR.md)  , [FILES](FILES.md) 
*  [CHDIR](CHDIR.md)  , [KILL](KILL.md)  , [RMDIR](RMDIR.md) 
*  Windows Open and Save Dialog Boxes

</blockquote>
