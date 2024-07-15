# CHDIR

The CHDIR statement changes the program's location from one working directory to another by specifying a literal or variable [STRING](STRING.md) path.

  

## Syntax

CHDIR *path$*
  

## Description

* *path$* is the new directory path the program will work in.
* *path$* can be an absolute path (starting from the root folder) or relative path (starting from the current program location).
* If *path$* specifies a non-existing path, a ["Path not found"]("Path not found".md) error will occur.
* **A QB64 [SHELL](SHELL.md) statement cannot use "CD " or "CHDIR " + path$ to change directories.**

  

## Examples

*Example 1:* The following code is Windows-specific:

``` CHDIR "C:\"      'change to the root drive C (absolute path) CHDIR "DOCUME~1" 'change to "C:\Documents and Settings" from root drive (relative path) CHDIR "..\"      'change back to previous folder one up  
```

*Details:* **QB64** can use long or short (8.3 notation) file and path names.
  

*Example 2:* Using the Windows API to find the current program's name and root path. The PATH$ is a shared function value.

``` [_TITLE](_TITLE.md) "My program" [PRINT](PRINT.md) TITLE$ [PRINT](PRINT.md) PATH$  [FUNCTION](FUNCTION.md) TITLE$ *=== SHOW CURRENT PROGRAM* [SHARED](SHARED.md) PATH$           'optional path information shared with main module only [DECLARE LIBRARY](DECLARE LIBRARY.md)        'Directory Information using KERNEL32 provided by Dav   [FUNCTION](FUNCTION.md) GetModuleFileNameA ([BYVAL](BYVAL.md) Module [AS](AS.md) [LONG](LONG.md), FileName [AS](AS.md) [STRING](STRING.md), [BYVAL](BYVAL.md) nSize [AS](AS.md) [LONG](LONG.md)) [END DECLARE](END DECLARE.md)  FileName$ = [SPACE$](SPACE$.md)(256) Result = GetModuleFileNameA(0, FileName$, [LEN](LEN.md)(FileName$))  '0 designates the current program [IF](IF.md) Result [THEN](THEN.md)             'Result returns the length or bytes of the string information   PATH$ = [LEFT$](LEFT$.md)(FileName$, Result)   start = 1   DO     posit = [INSTR](INSTR.md)(start, PATH$, "\")     [IF](IF.md) posit [THEN](THEN.md) last = posit     start = posit + 1   [LOOP](LOOP.md) [UNTIL](UNTIL.md) posit = 0   TITLE$ = [MID$](MID$.md) "MID$ (function)")(PATH$, last + 1)   PATH$ = [LEFT$](LEFT$.md)(PATH$, last) [ELSE](ELSE.md) TITLE$ = "": PATH$ = "" [END IF](END IF.md) [END FUNCTION](END FUNCTION.md)  
```

**Note:** The program's [_TITLE](_TITLE.md) name may be different from the actual program module's file name returned by Windows.
  

## See also

* [SHELL](SHELL.md), [FILES](FILES.md)
* [MKDIR](MKDIR.md), [RMDIR](RMDIR.md)
* [$CONSOLE]($CONSOLE.md)

  
