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

## [SHELL](SHELL.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/SHELL)
---
<blockquote>

### The SHELL statement allows a program to run external programs or command line statements in Windows, macOS and Linux.

</blockquote>

#### SYNTAX

<blockquote>

`SHELL [ DOSCommand$ ]`

</blockquote>

#### DESCRIPTION

<blockquote>

*  If the DOSCommand$ [STRING](STRING.md)  parameter isn't used, the "command console" is opened and execution is halted until the user closes it manually.
*  If [_DONTWAIT](DONTWAIT.md)  is used, the QB64 program doesn't [WAIT](WAIT.md)  for the SHELLed program/command to end.
*  When the [_HIDE](HIDE.md)  action is used, the console window is hidden and screen info can be "redirected" (using redirection characters like >) to a file (recommended).
*  Commands are external commands, according to the user's operating system, passed as strings enclosed in quotes or string variables.
*  Commands can be a mixture of strings and string variables added together using the + concatenation operator.
*  Command text can be in upper or lower case. Use single spacing between items and options.
*  QB64 automatically uses CMD /C when using [SHELL](SHELL.md)  , but it is allowed in a command string. Note: CMD alone may lock up program.
	* Note: Some commands may not work without adding CMD /C to the start of the command line.
*  QB64 program screens will not get distorted, minimized or freeze the program like QBasic fullscreen modes would.
*  QB64 can use long path folder names and file names and [SHELL](SHELL.md)  command lines can be longer than 124 characters.
*  In Windows, use additional CHR$ (34) quotation marks around folder or file names that contain spaces.
*  For other operating systems, both the quotation mark character and the apostrophe can be used to enclose a file name that contains spaces.
*  NOTE: Use [CHDIR](CHDIR.md)  instead of CD as [SHELL](SHELL.md)  commands cannot affect the current program path.


</blockquote>

#### MORE EXAMPLES

<blockquote>

*  FILELIST$ (function)
*  FileExist Library Function

</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  [SHELL](SHELL.md)  (function) , [_SHELLHIDE](SHELLHIDE.md) 
*  [FILES](FILES.md)  , [CHDIR](CHDIR.md)  , [MKDIR](MKDIR.md) 
*  _CWD$ , [_STARTDIR\$](STARTDIR\$.md) 
*  [_FILEEXISTS](FILEEXISTS.md)  , [_DIREXISTS](DIREXISTS.md) 
*  [RMDIR](RMDIR.md)  , [NAME](NAME.md)  , [KILL](KILL.md)  , [RUN](RUN.md) 
*  [_HIDE](HIDE.md)  , [_DONTWAIT](DONTWAIT.md) 
*  [_CONSOLE](CONSOLE.md)  , $CONSOLE
*  $SCREENHIDE , $SCREENSHOW
*  [_SCREENHIDE](SCREENHIDE.md)  , [_SCREENSHOW](SCREENSHOW.md) 
*  FILELIST$ , DIR$
*  Windows Open and Save Dialog Boxes
*  C Console Library
*  Windows Printer Settings

</blockquote>
