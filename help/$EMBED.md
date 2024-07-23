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


## [\$EMBED](\$EMBED.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/%24EMBED)
---
<blockquote>

### The $EMBED metacommand can embed any designated file (e.g. images, sounds, fonts and all other file types) into the compiled EXE file. You can roughly compare this to converting and placing a file's contents into DATA lines, but $EMBED obviously is much more convenient.

</blockquote>

#### SYNTAX

<blockquote>

`$EMBED : ' filename ' , ' handle '`

</blockquote>

#### PARAMETERS

<blockquote>


</blockquote>

#### DESCRIPTION

<blockquote>


* All files will be embedded in a compressed form, if a 20% least ratio is reached.
* This low ratio was chosen, cause it will be reached by most files, except those which are already highly compressed such as PNG, JPG, MP3/4, ZIP, 7z etc. and are not worth the additional effort for just a few bytes less.
* To recall the embedded file data use the [_EMBEDDED&dollar;](EMBEDDED&dollar;.md) call with the very same handle identifier which was used in the respective file's [&dollar;EMBED](&dollar;EMBED.md) line. That call also does the decompression, if required.
* Embedding files can be useful to deliver a program inclusive all required assets in just one EXE file.
* No more worries whether a user installs your program correctly and retains the required folder structure.
* If required, you can easily write the files back to disk using the [_WRITEFILE](WRITEFILE.md) command, i.e. you could create your own simple installer or package manager.
* Embedded images, sounds or fonts can be passed directly to [_LOADIMAGE](LOADIMAGE.md) , [_SNDOPEN](SNDOPEN.md) or [_LOADFONT](LOADFONT.md) respectively when using the memory load capabilities of these functions.
* The [&dollar;EMBED](&dollar;EMBED.md) metacommand can be used everywhere in a program. You may even place it inside pre-compiler [&dollar;IF](&dollar;IF.md) .. [&dollar;ELSE](&dollar;ELSE.md) ... [&dollar;END](&dollar;END.md) [IF](IF.md) blocks and only the files designated in the true block are embedded then.
* How many or how big files you can embed depends on your system achitecture (x86/x64) as well as your installed memory. However, it should work just fine for all the normally expected working cases like embedding a font, a spritesheet and some level graphics as well a couple sound effects.
* To avoid useless bloat of the compiled EXE file, the embedding process is smart enough to only embed those files, which are recalled by the [_EMBEDDED&dollar;](EMBEDDED&dollar;.md) call at least once. I.e. you may [&dollar;EMBED](&dollar;EMBED.md) a dozen files, but if you recall only one of it in your program, then only that one file will be really embedded, while the other files are simply ignored.

</blockquote>

#### EXAMPLES

<blockquote>

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
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* [_EMBEDDED&dollar;](EMBEDDED&dollar;.md)
* [DATA](DATA.md) , [RESTORE](RESTORE.md) , [READ](READ.md)
* [_LOADFONT](LOADFONT.md) , [_LOADIMAGE](LOADIMAGE.md) , [_SNDOPEN](SNDOPEN.md)
</blockquote>
