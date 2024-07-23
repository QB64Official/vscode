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


* If the DOSCommand$ [STRING](STRING.md) parameter isn't used, the "command console" is opened and execution is halted until the user closes it manually.
* If [_DONTWAIT](DONTWAIT.md) is used, the QB64 program doesn't wait for the SHELLed program/command to end.
* When the [_HIDE](HIDE.md) action is used, the console window is hidden and screen info can be "redirected" (using redirection characters like >) to a file (recommended).
* Commands are external commands, according to the user's operating system, passed as strings enclosed in quotes or string variables.
* Commands can be a mixture of strings and string variables added together using the + concatenation operator.
* Command text can be in upper or lower case. Use single spacing between items and options.
* QB64 automatically uses CMD /C when using [SHELL](SHELL.md) , but it is allowed in a command string. Note: CMD alone may lock up program.
* Note: Some commands may not work without adding CMD /C to the start of the command line.
* QB64 program screens will not get distorted, minimized or freeze the program like QBasic fullscreen modes would.
* QB64 can use long path folder names and file names and [SHELL](SHELL.md) command lines can be longer than 124 characters.
* In Windows, use additional [CHR&dollar;](CHR&dollar;.md) (34) quotation marks around folder or file names that contain spaces.
* For other operating systems, both the quotation mark character and the apostrophe can be used to enclose a file name that contains spaces.
* NOTE: Use [CHDIR](CHDIR.md) instead of CD as [SHELL](SHELL.md) commands cannot affect the current program path.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: When working with file or folder names with spaces, add quotation marks around the path and/or file name with CHR\$ (34).
```vb
SHELL _HIDE "dir " + CHR$(34) + "free cell.ico" + CHR$(34) + " /b > temp.dir"
SHELL "start Notepad temp.dir" ' display temp file contents in Notepad window
```
  
<br>

```vb
Free Cell.ico
```
  
<br>



##### Example 2: Opening a Windows program (Notepad) to read or print a Basic created text file.
```vb
INPUT "Enter a file name to read in Notepad: ", filename$
SHELL "CMD /C start /max notepad " + filename$  ' display in Notepad full screen in XP or NT

'SHELL "start /min notepad /p " + filename$ ' taskbar print using QB64 CMD /C not necessary
```
  
<br>



##### Example 3: Function that returns the program's current working path.
```vb
currentpath$ = Path$ ' function call saves a path for later program use
PRINT currentpath$

FUNCTION Path$
SHELL _HIDE "CD > D0S-DATA.INF"   'code to hide window in QB64
OPEN "D0S-DATA.INF" FOR APPEND AS #1  'this may create the file
L% = LOF(1)          'verify that file and data exist
CLOSE #1
IF L% THEN                       'read file if it has data
OPEN "D0S-DATA.INF" FOR INPUT AS #1
LINE INPUT #1, line$           'read only line in file
Path$ = line$ + "\"            'add slash to path so only a filename needs added later
CLOSE #1
ELSE : Path = ""                 'returns zero length string if path not found
END IF
KILL "D0S-DATA.INF"              'deleting the file is optional
END FUNCTION
```
  
<br>



##### Example 4: Determining if a drive or path exists. Cannot use with a file name specification.
```vb
LINE INPUT "Enter a drive or path (no file name): ", DirPath$
IF PathExist%(DirPath$) THEN PRINT "Drive Path exists!" ELSE PRINT "Drive Path does not exist!"
END

FUNCTION PathExist% (Path$)
PathExist% = 0
IF LEN(Path$) = 0 THEN EXIT FUNCTION 'no entry
IF LEN(ENVIRON$("OS")) THEN CMD$ = "CMD /C " ELSE CMD$ = "COMMAND /C "
SHELL _HIDE CMD$ + "If Exist " + Path$ + "\nul echo yes > D0S-DATA.INF"
OPEN "D0S-DATA.INF" FOR APPEND AS #1
IF LOF(1) THEN PathExist% = -1             'yes will be in file if path exists
CLOSE #1
KILL "D0S-DATA.INF"               'delete data file optional
END FUNCTION
```
  
<br>

```vb
SHELL _HIDE "CMD /C" + "wmic printer get name,default > default.txt"
```
  
<br>

```vb
Default  Name
FALSE    Microsoft XPS Document Writer
TRUE     HP Photosmart C7200 series
FALSE    HP Officejet Pro 8600
FALSE    Fax
```
  
<br>

```vb
SHELL _HIDE "CMD /C" + "wmic printer where name='HP Officejet Pro 8600' call setdefaultprinter"
```
  
<br>

```vb
Default  Name
FALSE    Microsoft XPS Document Writer
FALSE    HP Photosmart C7200 series
TRUE     HP Officejet Pro 8600
FALSE    Fax
```
  
<br>


</blockquote>

#### MORE EXAMPLES

<blockquote>


* FILELIST$ (function)
* FileExist Library Function
</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* [SHELL](SHELL.md) (function) , [_SHELLHIDE](SHELLHIDE.md)
* [FILES](FILES.md) , [CHDIR](CHDIR.md) , [MKDIR](MKDIR.md)
* [_CWD&dollar;](CWD&dollar;.md) , [_STARTDIR&dollar;](STARTDIR&dollar;.md)
* [_FILEEXISTS](FILEEXISTS.md) , [_DIREXISTS](DIREXISTS.md)
* [RMDIR](RMDIR.md) , [NAME](NAME.md) , [KILL](KILL.md) , [RUN](RUN.md)
* [_HIDE](HIDE.md) , [_DONTWAIT](DONTWAIT.md)
* [_CONSOLE](CONSOLE.md) , [&dollar;CONSOLE](&dollar;CONSOLE.md)
* [&dollar;SCREENHIDE](&dollar;SCREENHIDE.md) , [&dollar;SCREENSHOW](&dollar;SCREENSHOW.md)
* [_SCREENHIDE](SCREENHIDE.md) , [_SCREENSHOW](SCREENSHOW.md)
* FILELIST$ , DIR$
* Windows Open and Save Dialog Boxes
* C Console Library
* Windows Printer Settings
</blockquote>
