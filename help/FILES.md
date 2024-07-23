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


## [FILES](FILES.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/FILES)
---
<blockquote>

### The FILES statement is used to print a list of files in the current directory using a file specification.

</blockquote>

#### SYNTAX

<blockquote>

`FILES [ fileSpec$ ]`

</blockquote>

#### DESCRIPTION

<blockquote>


* fileSpec$ is a string expression or variable containing a path when required.
* fileSpec$ can use the 
* and ? wildcard specifications:
* 
* denotes one or more wildcard characters in a filename or path specification as any legal file name  character(s).
* ? denotes one wildcard letter in a filename or path specification as any legal filename character.
* If fileSpec$ is omitted, it is assumed to be "*.*" (all files and folders in the current directory).
* Illegal filename characters in QB64 include 
* > < : " | \ / with any amount of dot extensions being allowed in Windows.
* [FILES](FILES.md) lists can make the screen roll up. Try using [SHELL](SHELL.md) "DIR" with the /P option. DIR command .
* To get individual directory entries use [_FILES&dollar;](FILES&dollar;.md) instead.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
FILES "*.BAS"
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_FILES&dollar;](FILES&dollar;.md)
* [SHELL](SHELL.md)
* [CHDIR](CHDIR.md) , [MKDIR](MKDIR.md)
* [RMDIR](RMDIR.md) , [KILL](KILL.md)
* [_CWD&dollar;](CWD&dollar;.md) , [_STARTDIR&dollar;](STARTDIR&dollar;.md)
* [_FILEEXISTS](FILEEXISTS.md) , [_DIREXISTS](DIREXISTS.md)
* [&dollar;CONSOLE](&dollar;CONSOLE.md)
</blockquote>
