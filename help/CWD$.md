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

## [_CWD\$](CWD\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_CWD$)
---
<blockquote>

### The _CWD$ function returns the current working directory path as a string value without a trailing path separator.

</blockquote>

#### SYNTAX

<blockquote>

`workingDirectory$ = _CWD$`

</blockquote>

#### DESCRIPTION

<blockquote>

*  By default, the initial working directory path is usually the same as the directory of the executable file run.
*  The current working directory can be changed with the [CHDIR](CHDIR.md)  or [SHELL](SHELL.md)  command; [CHDIR](CHDIR.md)  sets it, _CWD$ returns it.
*  Path returns will change only when the working path has changed.  When in C:\ and run QB64\cwd.exe, it will still return C:\
*  The current working directory string can be used in [OPEN](OPEN.md)  statements and [SHELL](SHELL.md)  commands that deal with files.
*  Works in Windows, macOS and Linux. _OS$ can be used by a program to predict the proper slash separations in different OS's.


</blockquote>

#### SEE ALSO

<blockquote>

*  [CHDIR](CHDIR.md)  (Change the current working directory)
*  [RMDIR](RMDIR.md)  (Remove a directory in the file system)
*  [KILL](KILL.md)  (Delete a file in the file system)
*  [MKDIR](MKDIR.md)  (Create a directory in the file system)
*  _OS$ (returns current OS to program)
*  _STARTDIR$ (returns path the user called program from)

</blockquote>
