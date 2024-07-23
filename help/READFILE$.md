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


## [_READFILE\$](READFILE\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_READFILE%24)
---
<blockquote>

### The _READFILE$ function returns the complete contents of a file in a single string, but without the usual overhead. It does OPEN , GET and CLOSE the file in one run.

</blockquote>

#### SYNTAX

<blockquote>

`contents$ = _READFILE$ ( fileSpec$ )`

</blockquote>

#### PARAMETERS

<blockquote>


* contents$ is the entire file contents returned as [STRING](STRING.md) . May return an empty string, if the specified file was empty, or if the program was continued from a file related [ERROR](ERROR.md) .
* fileSpec$ is the name of the file to read as literal or variable [STRING](STRING.md) , if required inclusive a full or relative path.
* To avoid errors you should use [_FILEEXISTS](FILEEXISTS.md) before calling this function to make sure the file exists.
</blockquote>

#### DESCRIPTION

<blockquote>


* Sometimes it's required or at least useful to have the whole contents of a file in a single string for further processing, e.g. to pass it to hashing or compression functions which expect strings.
* In earlier versions of QB64(PE) you had to implement that loading process manually all the time or create a reusable custom [FUNCTION](FUNCTION.md) for it.
* Now [_READFILE&dollar;](READFILE&dollar;.md) will simplify this, it's mainly a convenience function to wrap the following code sequence into one handy function:

</blockquote>

#### EXAMPLES

<blockquote>

```vb
fh = FREEFILE
OPEN fileSpec$ FOR BINARY AS #fh
contents$ = SPACE$(LOF(fh))
GET #fh, , contents$
CLOSE #fh
```
  
<br>

```vb
$COLOR:0

fileSpec$ = "source\global\settings.bas"

fh = FREEFILE
OPEN fileSpec$ FOR BINARY AS #fh
content$ = SPACE$(LOF(fh))
GET #fh, , content$
CLOSE #fh

COLOR LightGreen
PRINT "Using old manual load method..."
COLOR White
PRINT content$

COLOR LightGreen
PRINT "Using new direct load method..."
COLOR White
PRINT _READFILE$(fileSpec$)

END
```
  
<br>

```vb
$COLOR:0

fileSpec$ = "source\global\settings.bas"

COLOR LightGreen
PRINT "CRC32 of the file..."
COLOR White
PRINT RIGHT$("00000000" + HEX$(_CRC32(_READFILE$(fileSpec$))), 8)
PRINT

COLOR LightGreen
PRINT "MD5 of the file..."
COLOR White
PRINT _MD5$(_READFILE$(fileSpec$))

END
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* [_WRITEFILE](WRITEFILE.md) , [BLOAD](BLOAD.md) , [BSAVE](BSAVE.md)
* [_DEFLATE&dollar;](DEFLATE&dollar;.md) , [_INFLATE&dollar;](INFLATE&dollar;.md)
* [_ADLER32](ADLER32.md) , [_CRC32](CRC32.md) , [_MD5&dollar;](MD5&dollar;.md)
</blockquote>
