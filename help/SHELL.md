## SHELL
---

### The SHELL statement allows a program to run external programs or command line statements in Windows, macOS and Linux.

#### SYNTAX

`SHELL [ DOSCommand$ ]`

#### DESCRIPTION
* If the DOSCommand$ [STRING](./STRING.md) parameter isn't used, the "command console" is opened and execution is halted until the user closes it manually.
* If [_DONTWAIT](./_DONTWAIT.md) is used, the QB64 program doesn't wait for the SHELLed program/command to end.
* When the [_HIDE](./_HIDE.md) action is used, the console window is hidden and screen info can be "redirected" (using redirection characters like >) to a file (recommended).
* Commands are external commands, according to the user's operating system, passed as strings enclosed in quotes or string variables.
* Commands can be a mixture of strings and string variables added together using the + concatenation operator.
* Command text can be in upper or lower case. Use single spacing between items and options.
* QB64 automatically uses CMD /C when using [SHELL](./SHELL.md) , but it is allowed in a command string. Note: CMD alone may lock up program.
	* Note: Some commands may not work without adding CMD /C to the start of the command line.
* QB64 program screens will not get distorted, minimized or freeze the program like QBasic fullscreen modes would.
* QB64 can use long path folder names and file names and [SHELL](./SHELL.md) command lines can be longer than 124 characters.
* In Windows, use additional CHR$ (34) quotation marks around folder or file names that contain spaces.
* For other operating systems, both the quotation mark character and the apostrophe can be used to enclose a file name that contains spaces.
* NOTE: Use [CHDIR](./CHDIR.md) instead of CD as [SHELL](./SHELL.md) commands cannot affect the current program path.


#### EXAMPLES
##### Example 1: When working with file or folder names with spaces, add quotation marks around the path and/or file name with CHR$ (34).
```vb
SHELL _HIDE "dir " + CHR$(34) + "free cell.ico" + CHR$(34) + " /b > temp.dir"
SHELL "start Notepad temp.dir" ' display temp file contents in Notepad window
```
  
```vb
Free Cell.ico
```
  
##### Example 2: Opening a Windows program (Notepad) to read or print a Basic created text file.
```vb
INPUT "Enter a file name to read in Notepad: ", filename$
SHELL "CMD /C start /max notepad " + filename$  ' display in Notepad full screen in XP or NT

'SHELL "start /min notepad /p " + filename$ ' taskbar print using QB64 CMD /C not necessary
```
  
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
  
##### Snippet 1: When looking for printers this command gives you a file list with the default printer marked as TRUE :
```vb
SHELL _HIDE "CMD /C" + "wmic printer get name,default > default.txt"
```
  
##### Created file's text:
```vb
Default  Name
 FALSE    Microsoft XPS Document Writer
 TRUE     HP Photosmart C7200 series
 FALSE    HP Officejet Pro 8600
 FALSE    Fax
```
  
##### Snippet 2: Here is the code to set the default printer to the "HP Officejet Pro 8600":
```vb
SHELL _HIDE "CMD /C" + "wmic printer where name='HP Officejet Pro 8600' call setdefaultprinter"
```
  
```vb
Default  Name
 FALSE    Microsoft XPS Document Writer
 FALSE    HP Photosmart C7200 series
 TRUE     HP Officejet Pro 8600
 FALSE    Fax
```
  


#### MORE EXAMPLES
* FILELIST$ (function)
* FileExist Library Function


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* [SHELL](./SHELL.md) (function) , [_SHELLHIDE](./_SHELLHIDE.md)
* [FILES](./FILES.md) , [CHDIR](./CHDIR.md) , [MKDIR](./MKDIR.md)
* _CWD$ , _STARTDIR$
* [_FILEEXISTS](./_FILEEXISTS.md) , [_DIREXISTS](./_DIREXISTS.md)
* [RMDIR](./RMDIR.md) , [NAME](./NAME.md) , [KILL](./KILL.md) , [RUN](./RUN.md)
* [_HIDE](./_HIDE.md) , [_DONTWAIT](./_DONTWAIT.md)
* [_CONSOLE](./_CONSOLE.md) , $[CONSOLE](./CONSOLE.md)
* $SCREENHIDE , $SCREENSHOW
* [_SCREENHIDE](./_SCREENHIDE.md) , [_SCREENSHOW](./_SCREENSHOW.md)
* FILELIST$ , DIR$
* Windows Open and Save Dialog Boxes
* C Console Library
* Windows Printer Settings
