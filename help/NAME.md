## NAME
---

### The NAME statement changes the name of a file or directory to a new name.

#### SYNTAX

`NAME oldFileOrFolderName$ AS newFileOrFolderName$`

#### DESCRIPTION
* oldFileOrFolderName$ and newFileOrFolderName$ are variables or literal STRINGs in quotes. Paths can be included.
* If the two paths are different, the statement moves the original file to the new path and renames it.
* If the path is the same or a path is not included, the original file is just renamed.
* [SHELL](./SHELL.md) can use "REN " + filename$ + " " + newname$ for the same purpose (Windows).
* Path or filename errors are possible and should be handled in the program.
* Caution: There is no prompt to continue or execution verification.


#### EXAMPLES
```vb
NAME "BIGBAD.TXT" AS "BADWOLF.TXT"
```
  


#### SEE ALSO
* [SHELL](./SHELL.md) , [MKDIR](./MKDIR.md) , [FILES](./FILES.md)
* [CHDIR](./CHDIR.md) , [KILL](./KILL.md) , [RMDIR](./RMDIR.md)
* Windows Open and Save Dialog Boxes
