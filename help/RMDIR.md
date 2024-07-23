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


## [RMDIR](RMDIR.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/RMDIR)
---
<blockquote>

### The RMDIR statement deletes an empty directory using a designated path relative to the present path location.

</blockquote>

#### SYNTAX

<blockquote>

`RMDIR directory$`

</blockquote>

#### DESCRIPTION

<blockquote>


* directory$ is a relative path to the directory to delete.
* Directory path must be a literal or variable [STRING](STRING.md) value designating the folder to be deleted.
* If the directory contains files or folders, a file/path access error will occur.
* If the directory path cannot be found, a path not found error occurs.

</blockquote>

#### EXAMPLES

<blockquote>

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
  
<br>

```vb
Enter path and name of directory to delete: Some\Folder\That\Doesnt\Exist
Some\folder\That\Doesnt\Exist does not exist!

Enter path and name of directory to delete: C:\temp
C:\temp is not empty!
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [MKDIR](MKDIR.md) , [CHDIR](CHDIR.md)
* [KILL](KILL.md) , [FILES](FILES.md)
</blockquote>
