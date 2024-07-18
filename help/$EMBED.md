## $EMBED
---

### The $EMBED metacommand can embed any designated file (e.g. images, sounds, fonts and all other file types) into the compiled EXE file. You can roughly compare this to converting and placing a file's contents into DATA lines, but $EMBED obviously is much more convenient.

#### SYNTAX

`$EMBED : ' filename ' , ' handle '`

#### PARAMETERS


#### DESCRIPTION
* All files will be embedded in a compressed form, if a 20% least ratio is reached.
	* This low ratio was chosen, cause it will be reached by most files, except those which are already highly compressed such as PNG, JPG, MP3/4, ZIP, 7z etc. and are not worth the additional effort for just a few bytes less.
* To recall the embedded file data use the _EMBEDDED$ call with the very same handle identifier which was used in the respective file's $EMBED line. That call also does the decompression, if required.
* Embedding files can be useful to deliver a program inclusive all required assets in just one EXE file.
* No more worries whether a user installs your program correctly and retains the required folder structure.
* If required, you can easily write the files back to disk using the [_WRITEFILE](./_WRITEFILE.md) command, i.e. you could create your own simple installer or package manager.
* Embedded images, sounds or fonts can be passed directly to [_LOADIMAGE](./_LOADIMAGE.md) , [_SNDOPEN](./_SNDOPEN.md) or [_LOADFONT](./_LOADFONT.md) respectively when using the memory load capabilities of these functions.
* The $EMBED metacommand can be used everywhere in a program. You may even place it inside pre-compiler $[IF](./IF.md) .. $[ELSE](./ELSE.md) ... $[END](./END.md) [IF](./IF.md) blocks and only the files designated in the true block are embedded then.
* How many or how big files you can embed depends on your system achitecture (x86/x64) as well as your installed memory. However, it should work just fine for all the normally expected working cases like embedding a font, a spritesheet and some level graphics as well a couple sound effects.
* To avoid useless bloat of the compiled EXE file, the embedding process is smart enough to only embed those files, which are recalled by the _EMBEDDED$ call at least once. I.e. you may $EMBED a dozen files, but if you recall only one of it in your program, then only that one file will be really embedded, while the other files are simply ignored.


#### EXAMPLES
```vb
$EMBED:'source\peLogo.png','bigImg'
$EMBED:'source\qb64pe.png','smallImg'

SCREEN _NEWIMAGE(640, 480, 32)

bi& = _LOADIMAGE(_EMBEDDED$("bigImg"), 32, "memory")
si& = _LOADIMAGE(_EMBEDDED$("smallImg"), 32, "memory")

_PUTIMAGE (140, 180), bi&
_PUTIMAGE (410, 230), si&

_FREEIMAGE si&
_FREEIMAGE bi&

END
```
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* _EMBEDDED$
* [DATA](./DATA.md) , [RESTORE](./RESTORE.md) , [READ](./READ.md)
* [_LOADFONT](./_LOADFONT.md) , [_LOADIMAGE](./_LOADIMAGE.md) , [_SNDOPEN](./_SNDOPEN.md)
