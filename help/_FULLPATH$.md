# _FULLPATH$

The **_FULLPATH$** function returns an absolute or full path name for the specified relative path name.

  

## Syntax

*p$* = _FULLPATH$(*pathName$*)
  

## Parameters

* *pathname$* is the file or directory for which to obtain absolute path information.

  

## Description

* The path returned ends with a backslash on Windows and a forward-slash on Linux and macOS if *pathname$* is a directory.
* A nonexistent file or directory generates the error message, "Path Not Found.".

  

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

Example
Display the absolute path name of the parent directory.

``` [PRINT](PRINT.md) "Parent directory full path: "; _FULLPATH$("../")  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [_CWD$](_CWD$.md), [_STARTDIR$](_STARTDIR$.md)
* [FILES](FILES.md), [_FILES$](_FILES$.md)
* [_DIREXISTS](_DIREXISTS.md), [_FILEEXISTS](_FILEEXISTS.md)

  
