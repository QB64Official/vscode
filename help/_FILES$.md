## _FILES$
---

### The _FILES$ function returns a file or directory name that matches the specified pattern.

#### SYNTAX

`e$ = _FILES$ [( filespec$ )]`

#### PARAMETERS
* filespec$ is an optional string expression that specifies a file name or path; may include wildcard characters.


#### DESCRIPTION
* If you omit filespec$ when you first call _FILES$ , QB64-PE generates the error message, "Illegal Function Call."
* If filespec$ is an empty string, then it is assumed to be " * " internally.
* _FILES$ returns the first file or directory name that matches the filespec$ you specify. To retrieve additional file or directory names that match the filespec$ pattern, call _FILES$ again with no argument. When no file or directory names match, _FILES$ returns an empty string.
* You do not have to retrieve all the file names that match a given filespec$ before calling _FILES$ again with a new filespec$ .
* _FILES$ is not case sensitive in Windows. However, it is case sensitive in Linux and macOS.
* Because file and directory names are retrieved in no particular order, you may want to store file names in a dynamic array and sort the array.
* Directory names returned, ends with a backslash on Windows and a forward-slash on Linux and macOS.


#### EXAMPLES
```vb
$CONSOLE:ONLY
OPTION _EXPLICIT

DIM f AS STRING: f = _FILES$("../*.bas")

DO WHILE LEN(f) > 0
   PRINT f

   f = _FILES$
LOOP

END
```
  
```vb
$CONSOLE:ONLY
OPTION _EXPLICIT

DIM directory AS STRING: directory = COMMAND$

IF NOT _DIREXISTS(directory) THEN directory = _CWD$

$IF WINDOWS THEN
   IF RIGHT$(directory, 1) <> "\" THEN directory = directory + "\"
$ELSE
   IF RIGHT$(directory, 1) <> "/" THEN directory = directory + "/"
$END IF 

PrintDirectory 3, directory

END

SUB PrintDirectory (L AS LONG, directory AS STRING)
   DIM entry(0 TO 0) AS STRING, n AS _UNSIGNED LONG

   DIM CL AS LONG: CL = L
   IF CL > _WIDTH THEN CL = _WIDTH

   DIM e AS STRING: e = _FILES$(directory)

   DO
       entry(n) = e
       n = n + 1

       IF n > UBOUND(entry) THEN REDIM _PRESERVE entry(0 TO n) AS STRING

       e = _FILES$
   LOOP WHILE LEN(e) > 0

   IF CL > 2 THEN LOCATE , CL - 2 ELSE LOCATE , CL
   PRINT directory

   DIM i AS _UNSIGNED LONG

   WHILE i < n
       LOCATE , CL: PRINT entry(i)

       $IF WINDOWS THEN
           IF entry(i) <> ".\" AND entry(i) <> "..\" AND RIGHT$(entry(i), 1) = "\" THEN PrintDirectory CL + 2, directory + entry(i)
       $ELSE
           IF entry(i) <> "./" AND entry(i) <> "../" AND RIGHT$(entry(i), 1) = "/" THEN PrintDirectory CL + 2, directory + entry(i)
       $END IF 

       i = i + 1
   WEND
END SUB
```
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* [FILES](./FILES.md)
* _CWD$ , _STARTDIR$
* _DIR$
* _FULLPATH$
* [_DIREXISTS](./_DIREXISTS.md) , [_FILEEXISTS](./_FILEEXISTS.md)
