# _FILES$

The _FILES$ function returns a file or directory name that matches the specified pattern.

  

## Syntax

*e$* = _FILES$[(*filespec$*)]
  

## Parameters

* *filespec$* is an optional string expression that specifies a file name or path; may include wildcard characters.

  

## Description

* If you omit *filespec$* when you first call _FILES$, QB64-PE generates the error message, "Illegal Function Call."
* If *filespec$* is an empty string, then it is assumed to be "*****" internally.
* _FILES$ returns the first file or directory name that matches the *filespec$* you specify. To retrieve additional file or directory names that match the *filespec$* pattern, call _FILES$ again with no argument. When no file or directory names match, _FILES$ returns an empty string.
* You do not have to retrieve all the file names that match a given *filespec$* before calling _FILES$ again with a new *filespec$*.
* _FILES$ is not case sensitive in Windows. However, it is case sensitive in Linux and macOS.
* Because file and directory names are retrieved in no particular order, you may want to store file names in a dynamic array and sort the array.
* Directory names returned, ends with a backslash on Windows and a forward-slash on Linux and macOS.

  

## Availability

* [![none](![none.md)](File:Qb64.png "none")

**none**
* [![v3.11.0](![v3.11.0.md)](File:Qbpe.png "v3.11.0")

**v3.11.0**
* [![Apix.png](![Apix.png.md)](File:Apix.png)
* [![yes](![yes.md)](File:Win.png "yes")

**yes**
* [![yes](![yes.md)](File:Lnx.png "yes")

**yes**
* [![yes](![yes.md)](File:Osx.png "yes")

**yes**

  

## Examples

Example 1
Prints the names of all ".bas" files in the parent directory.

``` [$CONSOLE]($CONSOLE.md):[ONLY](ONLY.md) [OPTION](OPTION.md) [_EXPLICIT](_EXPLICIT.md)  [DIM](DIM.md) f [AS](AS.md) [STRING](STRING.md): f = _FILES$("../*.bas")  [DO WHILE](DO WHILE.md) [LEN](LEN.md)(f) > 0     [PRINT](PRINT.md) f      f = _FILES$ [LOOP](LOOP.md)  [END](END.md)  
```

Example 2
Recursively prints the directory tree.

``` [$CONSOLE]($CONSOLE.md):[ONLY](ONLY.md) [OPTION](OPTION.md) [_EXPLICIT](_EXPLICIT.md)  [DIM](DIM.md) directory [AS](AS.md) [STRING](STRING.md): directory = [COMMAND$](COMMAND$.md)  [IF](IF.md) [NOT](NOT.md) [_DIREXISTS](_DIREXISTS.md)(directory) [THEN](THEN.md) directory = [_CWD$](_CWD$.md)  [$IF]($IF.md) WINDOWS [THEN](THEN.md)     [IF](IF.md) [RIGHT$](RIGHT$.md)(directory, 1) <> "\" [THEN](THEN.md) directory = directory + "\" [$ELSE]($ELSE.md)     [IF](IF.md) [RIGHT$](RIGHT$.md)(directory, 1) <> "/" [THEN](THEN.md) directory = directory + "/" [$END IF]($END IF.md)   PrintDirectory 3, directory  [END](END.md)  [SUB](SUB.md) PrintDirectory (L [AS](AS.md) [LONG](LONG.md), directory [AS](AS.md) [STRING](STRING.md))     [DIM](DIM.md) entry(0 [TO](TO.md) 0) [AS](AS.md) [STRING](STRING.md), n [AS](AS.md) [_UNSIGNED](_UNSIGNED.md) [LONG](LONG.md)      [DIM](DIM.md) CL [AS](AS.md) [LONG](LONG.md): CL = L     [IF](IF.md) CL > [_WIDTH](_WIDTH.md) "WIDTH (function)") [THEN](THEN.md) CL = [_WIDTH](_WIDTH.md) "WIDTH (function)")      [DIM](DIM.md) e [AS](AS.md) [STRING](STRING.md): e = _FILES$(directory)      [DO](DO.md)         entry(n) = e         n = n + 1          [IF](IF.md) n > [UBOUND](UBOUND.md)(entry) [THEN](THEN.md) [REDIM](REDIM.md) [_PRESERVE](_PRESERVE.md) entry(0 [TO](TO.md) n) [AS](AS.md) [STRING](STRING.md)          e = _FILES$     [LOOP WHILE](LOOP WHILE.md) [LEN](LEN.md)(e) > 0      [IF](IF.md) CL > 2 [THEN](THEN.md) [LOCATE](LOCATE.md) , CL - 2 [ELSE](ELSE.md) [LOCATE](LOCATE.md) , CL     [PRINT](PRINT.md) directory      [DIM](DIM.md) i [AS](AS.md) [_UNSIGNED](_UNSIGNED.md) [LONG](LONG.md)      [WHILE](WHILE.md) i < n         [LOCATE](LOCATE.md) , CL: [PRINT](PRINT.md) entry(i)          [$IF]($IF.md) WINDOWS [THEN](THEN.md)             [IF](IF.md) entry(i) <> ".\" [AND](AND.md) "AND (boolean)") entry(i) <> "..\" [AND](AND.md) "AND (boolean)") [RIGHT$](RIGHT$.md)(entry(i), 1) = "\" [THEN](THEN.md) PrintDirectory CL + 2, directory + entry(i)         [$ELSE]($ELSE.md)             [IF](IF.md) entry(i) <> "./" [AND](AND.md) "AND (boolean)") entry(i) <> "../" [AND](AND.md) "AND (boolean)") [RIGHT$](RIGHT$.md)(entry(i), 1) = "/" [THEN](THEN.md) PrintDirectory CL + 2, directory + entry(i)         [$END IF]($END IF.md)           i = i + 1     [WEND](WEND.md) [END SUB](END SUB.md)  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [FILES](FILES.md)
* [_CWD$](_CWD$.md), [_STARTDIR$](_STARTDIR$.md)
* [_DIR$](_DIR$.md)
* [_FULLPATH$](_FULLPATH$.md)
* [_DIREXISTS](_DIREXISTS.md), [_FILEEXISTS](_FILEEXISTS.md)

  
