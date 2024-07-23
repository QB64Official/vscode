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


* path$ is the new directory path the program will work in.
* path$ can be an absolute path (starting from the root folder) or relative path (starting from the current program location).
* If path$ specifies a non-existing path, a "Path not found" error will occur.
* A QB64 [SHELL](SHELL.md) statement cannot use "CD " or "CHDIR " + path$ to change directories.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: The following code is Windows-specific:
```vb
CHDIR "C:\"      'change to the root drive C (absolute path)
CHDIR "DOCUME~1" 'change to "C:\Documents and Settings" from root drive (relative path)
CHDIR "..\"      'change back to previous folder one up
```
  
<br>



##### Example 2: Using the Windows API to find the current program's name and root path. The PATH\$ is a shared function value.
```vb
_TITLE "My program"
PRINT TITLE$
PRINT PATH$

FUNCTION TITLE$ === SHOW CURRENT PROGRAM
SHARED PATH$           'optional path information shared with main module only
DECLARE LIBRARY        'Directory Information using KERNEL32 provided by Dav
FUNCTION GetModuleFileNameA (BYVAL Module AS LONG, FileName AS STRING, BYVAL nSize AS LONG)
END DECLARE

FileName$ = SPACE$(256)
Result = GetModuleFileNameA(0, FileName$, LEN(FileName$))  '0 designates the current program
IF Result THEN             'Result returns the length or bytes of the string information
PATH$ = LEFT$(FileName$, Result)
start = 1
DO
posit = INSTR(start, PATH$, "\")
IF posit THEN last = posit
start = posit + 1
LOOP UNTIL posit = 0
TITLE$ = MID$(PATH$, last + 1)
PATH$ = LEFT$(PATH$, last)
ELSE TITLE$ = "": PATH$ = ""
END IF
END FUNCTION
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [SHELL](SHELL.md) , [FILES](FILES.md)
* [MKDIR](MKDIR.md) , [RMDIR](RMDIR.md)
* [&dollar;CONSOLE](&dollar;CONSOLE.md)
</blockquote>
