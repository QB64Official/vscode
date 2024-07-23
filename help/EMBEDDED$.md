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


## [_EMBEDDED\$](EMBEDDED\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_EMBEDDED%24)
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


* All embedded files can be recalled individually by using its respective handle identifier.
* If required, decompression is done internally, hence you always get back the original file contents.
* Recalling a file multiple times is possible, but in regard for the needed decompression time considered inefficient. Rather recall the file once and store the result in a [STRING](STRING.md) variable, if you know you need it multiple times in your program.
* To easily embed a file into your compiled EXE file use the [&dollar;EMBED](&dollar;EMBED.md) metacommand.
* Embedding files can be useful to deliver a program inclusive all required assets in just one EXE file.
* No more worries whether a user installs your program correctly and retains the required folder structure.
* If required, you can easily write the files back to disk using the [_WRITEFILE](WRITEFILE.md) command, i.e. you could create your own simple installer or package manager.
* Embedded images, sounds or fonts can be passed directly to [_LOADIMAGE](LOADIMAGE.md) , [_SNDOPEN](SNDOPEN.md) or [_LOADFONT](LOADFONT.md) respectively when using the memory load capabilities of these functions.

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
* [&dollar;EMBED](&dollar;EMBED.md)
* [DATA](DATA.md) , [RESTORE](RESTORE.md) , [READ](READ.md)
* [_LOADFONT](LOADFONT.md) , [_LOADIMAGE](LOADIMAGE.md) , [_SNDOPEN](SNDOPEN.md)
</blockquote>
