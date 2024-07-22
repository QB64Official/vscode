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

## [MKDIR](MKDIR.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/MKDIR)
---
<blockquote>

### The MKDIR statement creates a new folder ( dir ectory) at a specified path.

</blockquote>

#### SYNTAX

<blockquote>

`MKDIR pathSpec$`

</blockquote>

#### DESCRIPTION

<blockquote>

*  The path specification (pathSpec$) is a literal or variable [STRING](STRING.md)  expression that also specifies the new folder's name.
*  If no path is given the directory will become a sub-directory of the present directory where the program is currently running.
*  QB64 can use both long or short path and file names with spaces when required.
*  The new folder will be created without a user prompt or verification.
*  If a path [IS](IS.md)  specified, the path must exist or a "Path not found" error will occur. See [_DIREXISTS](DIREXISTS.md)  .
*  [SHELL](SHELL.md)  can use the DOS command "MD " or " [MKDIR](MKDIR.md)  " + path$ + newfolder$ to [DO](DO.md)  the same thing.


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  [SHELL](SHELL.md)  , [CHDIR](CHDIR.md)  , [FILES](FILES.md) 
*  [NAME](NAME.md)  , [KILL](KILL.md)  , [RMDIR](RMDIR.md) 
*  [_DIREXISTS](DIREXISTS.md) 
*  Windows Open and Save Dialog Boxes

</blockquote>
