## _EMBEDDED$
---

### The _EMBEDDED$ function is used to recall the data of a file which was earlier embedded into the EXE file using the $EMBED metacommand. You can roughly compare this to a RESTORE to any DATA block and then using READ to retrieve the data.

#### SYNTAX

`filedata$ = _EMBEDDED$ (" handle ")`

#### PARAMETERS


#### DESCRIPTION
* All embedded files can be recalled individually by using its respective handle identifier.
	* If required, decompression is done internally, hence you always get back the original file contents.
* Recalling a file multiple times is possible, but in regard for the needed decompression time considered inefficient. Rather recall the file once and store the result in a [STRING](./STRING.md) variable, if you know you need it multiple times in your program.
* To easily embed a file into your compiled EXE file use the $EMBED metacommand.
* Embedding files can be useful to deliver a program inclusive all required assets in just one EXE file.
* No more worries whether a user installs your program correctly and retains the required folder structure.
* If required, you can easily write the files back to disk using the [_WRITEFILE](./_WRITEFILE.md) command, i.e. you could create your own simple installer or package manager.
* Embedded images, sounds or fonts can be passed directly to [_LOADIMAGE](./_LOADIMAGE.md) , [_SNDOPEN](./_SNDOPEN.md) or [_LOADFONT](./_LOADFONT.md) respectively when using the memory load capabilities of these functions.


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
* $EMBED
* [DATA](./DATA.md) , [RESTORE](./RESTORE.md) , [READ](./READ.md)
* [_LOADFONT](./_LOADFONT.md) , [_LOADIMAGE](./_LOADIMAGE.md) , [_SNDOPEN](./_SNDOPEN.md)
