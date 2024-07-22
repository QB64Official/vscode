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

## [_EMBEDDED\$](EMBEDDED\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_EMBEDDED$)
---
<blockquote>

### The _EMBEDDED$ function is used to recall the data of a file which was earlier embedded into the EXE file using the $EMBED metacommand. You can roughly compare this to a RESTORE to any DATA block and then using READ to retrieve the data.

</blockquote>

#### SYNTAX

<blockquote>

`filedata$ = _EMBEDDED$ (" handle ")`

</blockquote>

#### PARAMETERS

<blockquote>


</blockquote>

#### DESCRIPTION

<blockquote>

*  All embedded files can be recalled individually by using its respective handle identifier.
	* If required, decompression is done internally, hence you always get back the original file contents.
*  Recalling a file multiple times is possible, but in regard for the needed decompression time considered inefficient. Rather recall the file once and store the result in a [STRING](STRING.md)  variable, if you know you need it multiple times in your program.
*  To easily embed a file into your compiled EXE file use the $EMBED metacommand.
*  Embedding files can be useful to deliver a program inclusive all required assets in just one EXE file.
*  No more worries whether a user installs your program correctly and retains the required folder structure.
*  If required, you can easily [WRITE](WRITE.md)  the files back to disk using the [_WRITEFILE](WRITEFILE.md)  command, i.e. you could create your own simple installer or package manager.
*  Embedded images, sounds or fonts can be passed directly to [_LOADIMAGE](LOADIMAGE.md)  , [_SNDOPEN](SNDOPEN.md)  or [_LOADFONT](LOADFONT.md)  respectively when using the memory load capabilities of these functions.


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  $EMBED
*  [DATA](DATA.md)  , [RESTORE](RESTORE.md)  , [READ](READ.md) 
*  [_LOADFONT](LOADFONT.md)  , [_LOADIMAGE](LOADIMAGE.md)  , [_SNDOPEN](SNDOPEN.md) 

</blockquote>
