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

## [RMDIR](RMDIR.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/RMDIR)
---
<blockquote>

### The RMDIR statement deletes an empty directory using a designated path relative to the present path location.

</blockquote>

#### SYNTAX

<blockquote>

`RMDIR directory$`

</blockquote>

#### DESCRIPTION

<blockquote>

*  directory$ is a relative path to the directory to delete.
*  Directory path must be a literal or variable [STRING](STRING.md)  value designating the folder to be deleted.
*  If the directory contains files or folders, a file/path access error will occur.
*  If the directory path cannot be found, a path not found error occurs.


</blockquote>

#### SEE ALSO

<blockquote>

*  [MKDIR](MKDIR.md)  , [CHDIR](CHDIR.md) 
*  [KILL](KILL.md)  , [FILES](FILES.md) 

</blockquote>
