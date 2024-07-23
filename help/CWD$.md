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


## [_CWD\$](CWD\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_CWD%24)
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


* By default, the initial working directory path is usually the same as the directory of the executable file run.
* The current working directory can be changed with the [CHDIR](CHDIR.md) or [SHELL](SHELL.md) command; [CHDIR](CHDIR.md) sets it, [_CWD&dollar;](CWD&dollar;.md) returns it.
* Path returns will change only when the working path has changed.  When in C:\ and run QB64\cwd.exe, it will still return C:\
* The current working directory string can be used in [OPEN](OPEN.md) statements and [SHELL](SHELL.md) commands that deal with files.
* Works in Windows, macOS and Linux. [_OS&dollar;](OS&dollar;.md) can be used by a program to predict the proper slash separations in different OS's.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Get the current working directory, and move around the file system:
```vb
startdir$ = _CWD$
PRINT "We started at "; startdir$
MKDIR "a_temporary_dir"
CHDIR "a_temporary_dir"
PRINT "We are now in "; _CWD$
CHDIR startdir$
PRINT "And now we're back in "; _CWD$
RMDIR "a_temporary_dir"
```
  
<br>

```vb
We started at C:\QB64
We are now in C:\QB64\a_temporary_dir
And now we're back in C:\QB64
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [CHDIR](CHDIR.md) (Change the current working directory)
* [RMDIR](RMDIR.md) (Remove a directory in the file system)
* [KILL](KILL.md) (Delete a file in the file system)
* [MKDIR](MKDIR.md) (Create a directory in the file system)
* [_OS&dollar;](OS&dollar;.md) (returns current OS to program)
* [_STARTDIR&dollar;](STARTDIR&dollar;.md) (returns path the user called program from)
</blockquote>
