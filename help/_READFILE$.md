# _READFILE$

The **_READFILE$** function returns the complete contents of a file in a single string, but without the usual overhead. It does [OPEN](OPEN.md), [GET](GET.md) and [CLOSE](CLOSE.md) the file in one run.

  

## Syntax

*contents$* = _READFILE$(*fileSpec$*)
  

## Parameters

* *contents$* is the entire file contents returned as [STRING](STRING.md). May return an empty string, if the specified file was empty, or if the program was continued from a file related [ERROR](ERROR.md).
* *fileSpec$* is the name of the file to read as literal or variable [STRING](STRING.md), if required inclusive a full or relative path.
	+ To avoid errors you should use [_FILEEXISTS](_FILEEXISTS.md) before calling this function to make sure the file exists.

  

## Description

* Sometimes it's required or at least useful to have the whole contents of a file in a single string for further processing, e.g. to pass it to hashing or compression functions which expect strings.
* In earlier versions of QB64(PE) you had to implement that loading process manually all the time or create a reusable custom [FUNCTION](FUNCTION.md) for it.
* Now **_READFILE$** will simplify this, it's mainly a convenience function to wrap the following code sequence into one handy function:

``` fh = [FREEFILE](FREEFILE.md) [OPEN](OPEN.md) fileSpec$ [FOR](FOR.md) [BINARY](BINARY.md) [AS](AS.md) #fh contents$ = [SPACE$](SPACE$.md)([LOF](LOF.md)(fh)) [GET](GET.md) #fh, , contents$ [CLOSE](CLOSE.md) #fh  
```

  

## Availability

* [![none](![none.md)](File:Qb64.png "none")

**none**
* [![v3.12.0](![v3.12.0.md)](File:Qbpe.png "v3.12.0")

**v3.12.0**
* [![Apix.png](![Apix.png.md)](File:Apix.png)
* [![yes](![yes.md)](File:Win.png "yes")

**yes**
* [![yes](![yes.md)](File:Lnx.png "yes")

**yes**
* [![yes](![yes.md)](File:Osx.png "yes")

**yes**

  

## Examples

Example 1
Showing that this function's result is equal to the code sequence shown above.

``` [$COLOR]($COLOR.md):0  fileSpec$ = "source\global\settings.bas"  fh = [FREEFILE](FREEFILE.md) [OPEN](OPEN.md) fileSpec$ [FOR](FOR.md) [BINARY](BINARY.md) [AS](AS.md) #fh content$ = [SPACE$](SPACE$.md)([LOF](LOF.md)(fh)) [GET](GET.md) #fh, , content$ [CLOSE](CLOSE.md) #fh  [COLOR](COLOR.md) LightGreen [PRINT](PRINT.md) "Using old manual load method..." [COLOR](COLOR.md) White [PRINT](PRINT.md) content$  [COLOR](COLOR.md) LightGreen [PRINT](PRINT.md) "Using new direct load method..." [COLOR](COLOR.md) White [PRINT](PRINT.md) _READFILE$(fileSpec$)  [END](END.md)  
```

---

Example 2
Passing a whole file's contents to hashing functions.

``` [$COLOR]($COLOR.md):0  fileSpec$ = "source\global\settings.bas"  [COLOR](COLOR.md) LightGreen [PRINT](PRINT.md) "CRC32 of the file..." [COLOR](COLOR.md) White [PRINT](PRINT.md) [RIGHT$](RIGHT$.md)("00000000" + [HEX$](HEX$.md)([_CRC32](_CRC32.md)(_READFILE$(fileSpec$))), 8) [PRINT](PRINT.md)  [COLOR](COLOR.md) LightGreen [PRINT](PRINT.md) "MD5 of the file..." [COLOR](COLOR.md) White [PRINT](PRINT.md) [_MD5$](_MD5$.md)(_READFILE$(fileSpec$))  [END](END.md)  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [_WRITEFILE](_WRITEFILE.md), [BLOAD](BLOAD.md), [BSAVE](BSAVE.md)
* [_DEFLATE$](_DEFLATE$.md), [_INFLATE$](_INFLATE$.md)
* [_ADLER32](_ADLER32.md), [_CRC32](_CRC32.md), [_MD5$](_MD5$.md)

  
