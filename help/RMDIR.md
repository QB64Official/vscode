## RMDIR
---

### The RMDIR statement deletes an empty directory using a designated path relative to the present path location.

#### SYNTAX

`RMDIR directory$`

#### DESCRIPTION
* directory$ is a relative path to the directory to delete.
* Directory path must be a literal or variable [STRING](./STRING.md) value designating the folder to be deleted.
* If the directory contains files or folders, a file/path access error will occur.
* If the directory path cannot be found, a path not found error occurs.


#### EXAMPLES
```vb
ON ERROR GOTO ErrorHandler
DO
ERRcode = 0
INPUT "Enter path and name of directory to delete: "; directory$
IF LEN(directory$) THEN      'valid user entry or quits
  RMDIR directory$    'removes empty folder without a prompt
  IF ERRcode = 0 THEN PRINT "Folder "; directory$; " removed."
END IF
LOOP UNTIL ERRcode = 0 OR LEN(directory$) = 0
SYSTEM


ErrorHandler:
ERRcode = ERR    'get error code returned
SELECT CASE ERRcode
CASE 75
   PRINT directory$ + " is not empty!"
CASE 76
   PRINT directory$ + " does not exist!"
CASE ELSE
   PRINT "Error"; ERRcode; "attempting to delete " + directory$
END SELECT
PRINT
RESUME NEXT
```
  
```vb
Enter path and name of directory to delete: Some\Folder\That\Doesnt\Exist
Some\folder\That\Doesnt\Exist does not exist!

Enter path and name of directory to delete: C:\temp
C:\temp is not empty!
```
  


#### SEE ALSO
* [MKDIR](./MKDIR.md) , [CHDIR](./CHDIR.md)
* [KILL](./KILL.md) , [FILES](./FILES.md)
