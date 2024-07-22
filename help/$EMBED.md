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
    margin: 0 0 1em 0  !important;
    color: #88f !important;
    border: 0 !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
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
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
    margin: 0 !important;
    box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.25) !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}

</style>

## [\$EMBED](\$EMBED.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/$EMBED)
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

*  All files will be embedded in a compressed form, if a 20% least ratio is reached.
	* This low ratio was chosen, cause it will be reached by most files, except those which are already highly compressed such as PNG, JPG, MP3/4, ZIP, 7z etc. and are not worth the additional effort for just a few bytes less.
*  To recall the embedded file data use the _EMBEDDED$ call with the very same handle identifier which was used in the respective file's $EMBED line. That call also does the decompression, if required.
*  Embedding files can be useful to deliver a program inclusive all required assets in just one EXE file.
*  No more worries whether a user installs your program correctly and retains the required folder structure.
*  If required, you can easily [WRITE](WRITE.md)  the files back to disk using the [_WRITEFILE](WRITEFILE.md)  command, i.e. you could create your own simple installer or package manager.
*  Embedded images, sounds or fonts can be passed directly to [_LOADIMAGE](LOADIMAGE.md)  , [_SNDOPEN](SNDOPEN.md)  or [_LOADFONT](LOADFONT.md)  respectively when using the memory load capabilities of these functions.
*  The $EMBED metacommand can be used everywhere in a program. You may even place it inside pre-compiler $IF .. $ELSE ... $END IF blocks and only the files designated in the true block are embedded then.
*  How many or how big files you can embed depends on your system achitecture (x86/x64) as well as your installed memory. However, it should work just fine for all the normally expected working cases like embedding a font, a spritesheet and some level graphics as well a couple sound effects.
*  To avoid useless bloat of the compiled EXE file, the embedding process is smart enough to only embed those files, which are recalled by the _EMBEDDED$ call at least once. I.e. you may $EMBED a dozen files, but if you recall only one of it in your program, then only that one file will be really embedded, while the other files are simply ignored.


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  [_EMBEDDED\$](EMBEDDED\$.md) 
*  [DATA](DATA.md)  , [RESTORE](RESTORE.md)  , [READ](READ.md) 
*  [_LOADFONT](LOADFONT.md)  , [_LOADIMAGE](LOADIMAGE.md)  , [_SNDOPEN](SNDOPEN.md) 

</blockquote>
