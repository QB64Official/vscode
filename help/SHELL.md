# SHELL

The SHELL statement allows a program to run external programs or command line statements in Windows, macOS and Linux.

  

## Syntax

SHELL [*DOSCommand$*]
SHELL [**_DONTWAIT**] [**_HIDE**] [*DOSCommand$*]
  

## Description

* If the *DOSCommand$* [STRING](STRING.md) parameter isn't used, the "command console" is opened and execution is halted until the user closes it manually.
* If [_DONTWAIT](_DONTWAIT.md) is used, the **QB64** program doesn't wait for the SHELLed program/command to end.
* When the [_HIDE](_HIDE.md) action is used, the [console](console.md) window is hidden and screen info can be "redirected" (using redirection characters like >) to a file (recommended).
* Commands are external commands, according to the user's operating system, passed as [strings](strings.md) enclosed in quotes or string variables.
* Commands can be a mixture of [strings](strings.md) and string variables added together using the + [concatenation](concatenation.md) operator.
* Command text can be in upper or lower case. Use single spacing between items and options.
* **QB64** automatically uses CMD /C when using SHELL, but it is allowed in a command string. Note: CMD alone may lock up program.
	+ **Note: Some commands may not work without adding CMD /C to the start of the command line.**
* **QB64** program screens will not get distorted, minimized or freeze the program like QBasic fullscreen modes would.
* **QB64** can use long path folder names and file names and SHELL command lines can be longer than 124 characters.
* In Windows, use additional [CHR$](CHR$.md)(34) quotation marks around folder or file names that contain spaces.
* For other operating systems, both the quotation mark character and the apostrophe can be used to enclose a file name that contains spaces.
* **NOTE: Use [CHDIR](CHDIR.md) instead of CD as SHELL commands cannot affect the current program path.**

### QBasic/QuickBASIC

* **QBasic BAS files could be run like compiled programs without returning to the IDE when [SYSTEM](SYSTEM.md) was used to [end](end.md) them.**
* A user would invoke it with SHELL "QB.EXE /L /RUN program.BAS"

  

## Examples

*Example 1:* When working with file or folder names with spaces, add quotation marks around the path and/or file name with [CHR$](CHR$.md)(34).

``` SHELL [_HIDE](_HIDE.md) "dir " + [CHR$](CHR$.md)(34) + "free cell.ico" + [CHR$](CHR$.md)(34) + " /b > temp.dir" SHELL "start Notepad temp.dir" ' display temp file contents in Notepad window  
```

``` Free Cell.ico  
```

  

*Example 2:* Opening a Windows program (Notepad) to read or print a Basic created text file.

``` [INPUT](INPUT.md) "Enter a file name to read in Notepad: ", filename$ SHELL "CMD /C start /max notepad " + filename$  ' display in Notepad full screen in XP or NT  'SHELL "start /min notepad /p " + filename$ ' taskbar print using QB64 CMD /C not necessary  
```

*Explanation:* Notepad is an easy program to open in Windows as no path is needed. Windows NT computers, including XP, use CMD /C where older versions of DOS don't require any command reference. The top command opens Notepad in a normal window for a user to view the file. They can use Notepad to print it. The second command places Notepad file in the taskbar and prints it automatically. The filename variable is added by the program using proper spacing.
* **Start** is used to allow a Basic program to run without waiting for Notepad to be closed.
* **/min** places the window into the taskbar. **/max** is fullscreen and no option is a normal window.
* Notepad's **/p** option prints the file contents, even with USB printers.

  

*Example 3:* Function that returns the program's current working path.

```  currentpath$ = Path$ ' function call saves a path for later program use  PRINT currentpath$   [FUNCTION](FUNCTION.md) Path$    SHELL [_HIDE](_HIDE.md) "CD > D0S-DATA.INF"   'code to hide window in **QB64**    [OPEN](OPEN.md) "D0S-DATA.INF" FOR [APPEND](APPEND.md) AS #1  'this may create the file         L% = [LOF](LOF.md)(1)          'verify that file and data exist    [CLOSE](CLOSE.md) #1    [IF](IF.md) L% [THEN](THEN.md)                       'read file if it has data      [OPEN](OPEN.md) "D0S-DATA.INF" FOR [INPUT](INPUT.md) "INPUT (file mode)") AS #1      [LINE INPUT](LINE INPUT.md) "LINE INPUT (file statement)") #1, line$           'read only line in file      Path$ = line$ + "\"            'add slash to path so only a filename needs added later      [CLOSE](CLOSE.md) #1    [ELSE](ELSE.md) : Path = ""                 'returns zero length string if path not found    END IF    [KILL](KILL.md) "D0S-DATA.INF"              'deleting the file is optional  [END FUNCTION](END FUNCTION.md)  
```

*Explanation:* The **SHELL "CD"** statement requests the current working path. This info is normally printed to the screen, but the **>** pipe character sends the information to the DOS-DATA.INF file instead(**QB64** can use [_HIDE](_HIDE.md) to not display the DOS window). The function uses the [OPEN](OPEN.md) FOR [APPEND](APPEND.md) mode to check for the file and the data([INPUT](INPUT.md) "INPUT (file mode)") would create an error if file does not exist). The current path is listed on one line of the file. The file is opened and [LINE INPUT](LINE INPUT.md) "LINE INPUT (file statement)") returns one line of the file text. The function adds a "\" so that the Path$ returned can be used in another file statement by just adding a file name. Save the Path$ to another variable for later use when the program has moved to another directory.
In **QB64** you can simply use the [_CWD$](_CWD$.md) statement for the same purpose of the example above.
  

*Example 4:* Determining if a drive or path exists. Cannot use with a file name specification.

``` [LINE INPUT](LINE INPUT.md) "Enter a drive or path (no file name): ", DirPath$ [IF](IF.md) PathExist%(DirPath$) [THEN](THEN.md) PRINT "Drive Path exists!" [ELSE](ELSE.md) PRINT "Drive Path does not exist!" [END](END.md)  [FUNCTION](FUNCTION.md) PathExist% (Path$) PathExist% = 0 [IF](IF.md) [LEN](LEN.md)(Path$) = 0 [THEN](THEN.md) [EXIT FUNCTION](EXIT FUNCTION.md) 'no entry [IF](IF.md) [LEN](LEN.md)([ENVIRON$](ENVIRON$.md)("OS")) [THEN](THEN.md) CMD$ = "CMD /C " [ELSE](ELSE.md) CMD$ = "COMMAND /C " SHELL [_HIDE](_HIDE.md) CMD$ + "If Exist " + Path$ + "\nul echo yes > D0S-DATA.INF" [OPEN](OPEN.md) "D0S-DATA.INF" [FOR](FOR.md) "FOR (file statement)") [APPEND](APPEND.md) [AS](AS.md) #1 [IF](IF.md) [LOF](LOF.md)(1) [THEN](THEN.md) PathExist% = -1             'yes will be in file if path exists [CLOSE](CLOSE.md) #1 [KILL](KILL.md) "D0S-DATA.INF"               'delete data file optional [END FUNCTION](END FUNCTION.md)  
```

*Explanation: IF Exist* checks for the drive path. *\Nul* allows an emply folder at end of path. *Echo* prints **yes** in the file if it exists.
In **QB64** you can simply use the [_FILEEXISTS](_FILEEXISTS.md) statement for the same purpose of the example above.
  

*Snippet 1:* When looking for **printers** this command gives you a file list with the default printer marked as **TRUE**:

``` SHELL [_HIDE](_HIDE.md) "CMD /C" + "wmic printer get name,default > default.txt"  
```

**Created file's text:**

``` Default  Name   FALSE    Microsoft XPS Document Writer   TRUE     HP Photosmart C7200 series   FALSE    HP Officejet Pro 8600   FALSE    Fax  
```

*Explanation:* [LINE INPUT](LINE INPUT.md) could be used to find the printer names as [STRING](STRING.md) variables.
  

*Snippet 2:* Here is the code to set the default printer to the "HP Officejet Pro 8600":

``` SHELL _HIDE "CMD /C" + "wmic printer where name='HP Officejet Pro 8600' call setdefaultprinter"  
```

After executing this program, and then running the first snippet again, we see the following **contents of the text file:**

``` Default  Name   FALSE    Microsoft XPS Document Writer   FALSE    HP Photosmart C7200 series   TRUE     HP Officejet Pro 8600   FALSE    Fax  
```

### More examples

* [FILELIST$ (function)](FILELIST$ (function).md) "FILELIST$ (function)")
* [FileExist Library Function](FileExist Library Function.md)

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [SHELL (function)](SHELL (function).md) "SHELL (function)"), [_SHELLHIDE](_SHELLHIDE.md)
* [FILES](FILES.md), [CHDIR](CHDIR.md), [MKDIR](MKDIR.md)
* [_CWD$](_CWD$.md), [_STARTDIR$](_STARTDIR$.md)
* [_FILEEXISTS](_FILEEXISTS.md), [_DIREXISTS](_DIREXISTS.md)
* [RMDIR](RMDIR.md), [NAME](NAME.md), [KILL](KILL.md), [RUN](RUN.md)
* [_HIDE](_HIDE.md), [_DONTWAIT](_DONTWAIT.md)
* [_CONSOLE](_CONSOLE.md), [$CONSOLE]($CONSOLE.md)
* [$SCREENHIDE]($SCREENHIDE.md), [$SCREENSHOW]($SCREENSHOW.md)
* [_SCREENHIDE](_SCREENHIDE.md), [_SCREENSHOW](_SCREENSHOW.md)
* [FILELIST$](FILELIST$.md), [DIR$](DIR$.md)_Procedures#DIR$ "PDS(7.1) Procedures")
* [Windows Open and Save Dialog Boxes](Windows Open and Save Dialog Boxes.md)
* [C Console Library](C Console Library.md)
* [Windows Printer Settings](Windows Printer Settings.md)

  
