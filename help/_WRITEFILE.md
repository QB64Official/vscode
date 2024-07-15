# _WRITEFILE

The **_WRITEFILE** statement writes a string into a new file, overwriting an existing file of the same name. It does [OPEN](OPEN.md), [PUT](PUT.md) and [CLOSE](CLOSE.md) the file in one run. It's the counterpart to the [_READFILE$](_READFILE$.md) function.

  

## Syntax

_WRITEFILE *fileSpec$*, *contents$*
  

## Parameters

* *fileSpec$* is the name of the file to write as literal or variable [STRING](STRING.md), if required inclusive a full or relative path.
	+ To avoid errors you should use [_DIREXISTS](_DIREXISTS.md) before using this statement to make sure a desired path exists.
* *contents$* is the literal or variable [STRING](STRING.md) which its contents shall be written into the file.

  

## Description

* Sometimes you may be in need to quickly dump a huge amount of data into a file without much fuss, e.g. the results of the pack/unpack functions [_DEFLATE$](_DEFLATE$.md) and [_INFLATE$](_INFLATE$.md) or when copying a file in conjunction with the [_READFILE$](_READFILE$.md) function.
* In earlier versions of QB64(PE) you had to implement that saving process manually all the time or create a reusable custom [FUNCTION](FUNCTION.md) for it.
* Now **_WRITEFILE** will simplify this, it's mainly for convenience to wrap the following code sequence into one handy statement:

``` fh = [FREEFILE](FREEFILE.md) [OPEN](OPEN.md) fileSpec$ [FOR](FOR.md) [OUTPUT](OUTPUT.md) [AS](AS.md) #fh: [CLOSE](CLOSE.md) #fh [OPEN](OPEN.md) fileSpec$ [FOR](FOR.md) [BINARY](BINARY.md) [AS](AS.md) #fh [PUT](PUT.md) #fh, , contents$ [CLOSE](CLOSE.md) #fh  
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

Example
Implementing a simple file copy routine using **_READFILE$** and **_WRITEFILE**.

``` s$ = "Makefile" d$ = "Makefile - Copy"  r$ = CopyFile$(s$, d$)  [IF](IF.md) r$ = "" [THEN](THEN.md)     [PRINT](PRINT.md) "Sucessfully copied '"; s$; "' to '"; d$; "'." [ELSE](ELSE.md)     [PRINT](PRINT.md) r$ [END IF](END IF.md)  [END](END.md)  [FUNCTION](FUNCTION.md) CopyFile$ (src$, dst$)     CopyFile$ = "" 'empty = success, otherwise error message     buffer$ = [_READFILE$](_READFILE$.md)(src$)     [IF](IF.md) buffer$ = "" [AND](AND.md) "AND (boolean)") [_FILEEXISTS](_FILEEXISTS.md)(src$) = 0 [THEN](THEN.md)         CopyFile$ = "ERROR: Source file not found."     [ELSE](ELSE.md)         slp% = [_INSTRREV](_INSTRREV.md)(dst$, "\")         [IF](IF.md) slp% = 0 [THEN](THEN.md) slp% = [_INSTRREV](_INSTRREV.md)(dst$, "/")         [IF](IF.md) slp% > 0 [THEN](THEN.md)             [IF](IF.md) [NOT](NOT.md) [_DIREXISTS](_DIREXISTS.md)([LEFT$](LEFT$.md)(dst$, slp% - 1)) [THEN](THEN.md)                 CopyFile$ = "ERROR: Destination path not found."                 [EXIT FUNCTION](EXIT FUNCTION.md)             [END IF](END IF.md)         [END IF](END IF.md)         _WRITEFILE dst$, buffer$     [END IF](END IF.md) [END FUNCTION](END FUNCTION.md)  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [_READFILE$](_READFILE$.md), [BLOAD](BLOAD.md), [BSAVE](BSAVE.md)
* [_DEFLATE$](_DEFLATE$.md), [_INFLATE$](_INFLATE$.md)

  
