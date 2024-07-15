# $EMBED

The **$EMBED** metacommand can embed any designated file (e.g. images, sounds, fonts and all other file types) into the compiled EXE file. You can roughly compare this to converting and placing a file's contents into [DATA](DATA.md) lines, but **$EMBED** obviously is much more convenient.

  

## Syntax

$EMBED**:**'*filename*'**,**'*handle*'
  

## Parameters

IMPORTANT

* Both parameters must be enclosed in single quotes and given as literal strings, variables cannot be used here.
* Your inputs are checked while typing to ensure its validity, warnings (if any) will be displayed immediately in the IDE status area.

* The *filename* is the name of the file to embed, if required inclusive a full or relative path.
* The *handle* is a unique case sensitive identifier beginning with a letter and only containing lower/upper case letters and/or numbers, it's used later in the [_EMBEDDED$](_EMBEDDED$.md) call to recall the embedded data.
	+ You can compare this identifier to the line label in front of a [DATA](DATA.md) block, which is later used in a [RESTORE](RESTORE.md) call to set the [READ](READ.md) pointer to exactly that [DATA](DATA.md) block.

  

## Description

* All files will be embedded in a compressed form, if a 20% least ratio is reached.
	+ This low ratio was chosen, cause it will be reached by most files, except those which are already highly compressed such as PNG, JPG, MP3/4, ZIP, 7z etc. and are not worth the additional effort for just a few bytes less.
* To recall the embedded file data use the [_EMBEDDED$](_EMBEDDED$.md) call with the very same *handle* identifier which was used in the respective file's **$EMBED** line. That call also does the decompression, if required.
* Embedding files can be useful to deliver a program inclusive all required assets in just one EXE file.
* No more worries whether a user installs your program correctly and retains the required folder structure.
* If required, you can easily write the files back to disk using the [_WRITEFILE](_WRITEFILE.md) command, i.e. you could create your own simple installer or package manager.
* Embedded images, sounds or fonts can be passed directly to [_LOADIMAGE](_LOADIMAGE.md), [_SNDOPEN](_SNDOPEN.md) or [_LOADFONT](_LOADFONT.md) respectively when using the *memory load* capabilities of these functions.
* The **$EMBED** metacommand can be used everywhere in a program. You may even place it inside pre-compiler [$IF]($IF.md)..[$ELSE]($ELSE.md)...[$END IF]($END IF.md) blocks and only the files designated in the true block are embedded then.
* How many or how big files you can embed depends on your system achitecture (x86/x64) as well as your installed memory. However, it should work just fine for all the normally expected working cases like embedding a font, a spritesheet and some level graphics as well a couple sound effects.
* To avoid useless bloat of the compiled EXE file, the embedding process is smart enough to only embed those files, which are recalled by the [_EMBEDDED$](_EMBEDDED$.md) call at least once. I.e. you may **$EMBED** a dozen files, but if you recall only one of it in your program, then only that one file will be really embedded, while the other files are simply ignored.

  

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

``` $EMBED:'source\peLogo.png','bigImg' $EMBED:'source\qb64pe.png','smallImg'  [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(640, 480, 32)  bi& = [_LOADIMAGE](_LOADIMAGE.md)([_EMBEDDED$](_EMBEDDED$.md)("bigImg"), 32, "memory") si& = [_LOADIMAGE](_LOADIMAGE.md)([_EMBEDDED$](_EMBEDDED$.md)("smallImg"), 32, "memory")  [_PUTIMAGE](_PUTIMAGE.md) (140, 180), bi& [_PUTIMAGE](_PUTIMAGE.md) (410, 230), si&  [_FREEIMAGE](_FREEIMAGE.md) si& [_FREEIMAGE](_FREEIMAGE.md) bi&  [END](END.md)  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [_EMBEDDED$](_EMBEDDED$.md)
* [DATA](DATA.md), [RESTORE](RESTORE.md), [READ](READ.md)
* [_LOADFONT](_LOADFONT.md), [_LOADIMAGE](_LOADIMAGE.md), [_SNDOPEN](_SNDOPEN.md)

  
