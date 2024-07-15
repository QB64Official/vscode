# RMDIR

The RMDIR statement deletes an empty directory using a designated path relative to the present path location.

  

## Syntax

RMDIR *directory$*
  

## Description

* *directory$* is a relative path to the directory to delete.
* Directory path must be a literal or variable [STRING](STRING.md) value designating the folder to be deleted.
* If the directory contains files or folders, a [file/path access error](file/path access error.md) will occur.
* If the directory path cannot be found, a [path not found](path not found.md) error occurs.

  

## Examples

```   [ON ERROR GOTO](ON ERROR GOTO.md) ErrorHandler  DO  ERRcode = 0  [INPUT](INPUT.md) "Enter path and name of directory to delete: "; directory$  IF [LEN](LEN.md)(directory$) THEN      'valid user entry or quits    RMDIR directory$    'removes empty folder without a prompt    IF ERRcode = 0 THEN PRINT "Folder "; directory$; " removed."  END IF  LOOP UNTIL ERRcode = 0 OR LEN(directory$) = 0 [SYSTEM](SYSTEM.md)   ErrorHandler: ERRcode = [ERR](ERR.md)    'get error code returned [SELECT CASE](SELECT CASE.md) ERRcode [CASE](CASE.md) 75     [PRINT](PRINT.md) directory$ + " is not empty!" [CASE](CASE.md) 76     [PRINT](PRINT.md) directory$ + " does not exist!" [CASE ELSE](CASE ELSE.md)     [PRINT](PRINT.md) "Error"; ERRcode; "attempting to delete " + directory$ [END SELECT](END SELECT.md) [PRINT](PRINT.md) [RESUME NEXT](RESUME NEXT.md)   
```

This Windows-specific output from two runs of the above program is typical, though your output may vary. User-entered text is in italics.

```   Enter path and name of directory to delete: *Some\Folder\That\Doesnt\Exist* Some\folder\That\Doesnt\Exist does not exist!  Enter path and name of directory to delete: *C:\temp* C:\temp is not empty!   
```

  

## See also

* [MKDIR](MKDIR.md), [CHDIR](CHDIR.md)
* [KILL](KILL.md), [FILES](FILES.md)

  
