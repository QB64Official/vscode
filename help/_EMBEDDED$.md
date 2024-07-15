# _EMBEDDED$

The **_EMBEDDED$** function is used to recall the data of a file which was earlier embedded into the EXE file using the [$EMBED]($EMBED.md) metacommand. You can roughly compare this to a [RESTORE](RESTORE.md) to any [DATA](DATA.md) block and then using [READ](READ.md) to retrieve the data.

  

## Syntax

*filedata$* = _EMBEDDED$("*handle*")
  

## Parameters

IMPORTANT

* The parameter *handle* must be given as a single literal string enclosed in quotes, variables cannot be used here.
* Your inputs are checked while typing to ensure its validity, warnings (if any) will be displayed immediately in the IDE status area.

* The *filedata$* will receive the embedded file data as a single contiguous string, just as you would regularly [OPEN](OPEN.md) the file and read its entire contents into that string.
* The *handle* is a unique case sensitive identifier beginning with a letter and only containing lower/upper case letters and/or numbers. It must exactly match the *handle* value used to [$EMBED]($EMBED.md) the respective file.
	+ You can compare this identifier to the line label in front of a [DATA](DATA.md) block, which is later used in a [RESTORE](RESTORE.md) call to set the [READ](READ.md) pointer to exactly that [DATA](DATA.md) block.

  

## Description

* All embedded files can be recalled individually by using its respective *handle* identifier.
	+ If required, decompression is done internally, hence you always get back the original file contents.
* Recalling a file multiple times is possible, but in regard for the needed decompression time considered inefficient. Rather recall the file once and store the result in a [STRING](STRING.md) variable, if you know you need it multiple times in your program.
* To easily embed a file into your compiled EXE file use the [$EMBED]($EMBED.md) metacommand.
* Embedding files can be useful to deliver a program inclusive all required assets in just one EXE file.
* No more worries whether a user installs your program correctly and retains the required folder structure.
* If required, you can easily write the files back to disk using the [_WRITEFILE](_WRITEFILE.md) command, i.e. you could create your own simple installer or package manager.
* Embedded images, sounds or fonts can be passed directly to [_LOADIMAGE](_LOADIMAGE.md), [_SNDOPEN](_SNDOPEN.md) or [_LOADFONT](_LOADFONT.md) respectively when using the *memory load* capabilities of these functions.

  

## Availability

* [![none](![none.md)](File:Qb64.png "none")

**none**
* [![v3.10.0](![v3.10.0.md)](File:Qbpe.png "v3.10.0")

**v3.10.0**
* [![Apix.png](![Apix.png.md)](File:Apix.png)
* [![yes](![yes.md)](File:Win.png "yes")

**yes**
* [![yes](![yes.md)](File:Lnx.png "yes")

**yes**
* [![yes](![yes.md)](File:Osx.png "yes")

**yes**

  

## Examples

Example
Embeds two image files into the compiled EXE, then memory loads and displays it.

``` [$EMBED]($EMBED.md):'source\peLogo.png','bigImg' [$EMBED]($EMBED.md):'source\qb64pe.png','smallImg'  [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(640, 480, 32)  bi& = [_LOADIMAGE](_LOADIMAGE.md)(_EMBEDDED$("bigImg"), 32, "memory") si& = [_LOADIMAGE](_LOADIMAGE.md)(_EMBEDDED$("smallImg"), 32, "memory")  [_PUTIMAGE](_PUTIMAGE.md) (140, 180), bi& [_PUTIMAGE](_PUTIMAGE.md) (410, 230), si&  [_FREEIMAGE](_FREEIMAGE.md) si& [_FREEIMAGE](_FREEIMAGE.md) bi&  [END](END.md)  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [$EMBED]($EMBED.md)
* [DATA](DATA.md), [RESTORE](RESTORE.md), [READ](READ.md)
* [_LOADFONT](_LOADFONT.md), [_LOADIMAGE](_LOADIMAGE.md), [_SNDOPEN](_SNDOPEN.md)

  
