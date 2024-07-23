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


## [_WRITEFILE](WRITEFILE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_WRITEFILE)
---
<blockquote>

### The _WRITEFILE statement writes a string into a new file, overwriting an existing file of the same name. It does OPEN , PUT and CLOSE the file in one run. It's the counterpart to the _READFILE$ function.

</blockquote>

#### SYNTAX

<blockquote>

`_WRITEFILE fileSpec$ , contents$`

</blockquote>

#### PARAMETERS

<blockquote>


* fileSpec$ is the name of the file to write as literal or variable [STRING](STRING.md) , if required inclusive a full or relative path.
* To avoid errors you should use [_DIREXISTS](DIREXISTS.md) before using this statement to make sure a desired path exists.
* contents$ is the literal or variable [STRING](STRING.md) which its contents shall be written into the file.
</blockquote>

#### DESCRIPTION

<blockquote>


* Sometimes you may be in need to quickly dump a huge amount of data into a file without much fuss, e.g. the results of the pack/unpack functions [_DEFLATE&dollar;](DEFLATE&dollar;.md) and [_INFLATE&dollar;](INFLATE&dollar;.md) or when copying a file in conjunction with the [_READFILE&dollar;](READFILE&dollar;.md) function.
* In earlier versions of QB64(PE) you had to implement that saving process manually all the time or create a reusable custom [FUNCTION](FUNCTION.md) for it.
* Now [_WRITEFILE](WRITEFILE.md) will simplify this, it's mainly for convenience to wrap the following code sequence into one handy statement:

</blockquote>

#### EXAMPLES

<blockquote>

```vb
fh = FREEFILE
OPEN fileSpec$ FOR OUTPUT AS #fh: CLOSE #fh
OPEN fileSpec$ FOR BINARY AS #fh
PUT #fh, , contents$
CLOSE #fh
```
  
<br>

```vb
s$ = "Makefile"
d$ = "Makefile - Copy"

r$ = CopyFile$(s$, d$)

IF r$ = "" THEN
PRINT "Sucessfully copied '"; s$; "' to '"; d$; "'."
ELSE
PRINT r$
END IF

END

FUNCTION CopyFile$ (src$, dst$)
CopyFile$ = "" 'empty = success, otherwise error message
buffer$ = _READFILE$(src$)
IF buffer$ = "" AND _FILEEXISTS(src$) = 0 THEN
CopyFile$ = "ERROR: Source file not found."
ELSE
slp% = _INSTRREV(dst$, "\")
IF slp% = 0 THEN slp% = _INSTRREV(dst$, "/")
IF slp% > 0 THEN
IF NOT _DIREXISTS(LEFT$(dst$, slp% - 1)) THEN
CopyFile$ = "ERROR: Destination path not found."
EXIT FUNCTION
END IF
END IF
_WRITEFILE dst$, buffer$
END IF
END FUNCTION
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* [_READFILE&dollar;](READFILE&dollar;.md) , [BLOAD](BLOAD.md) , [BSAVE](BSAVE.md)
* [_DEFLATE&dollar;](DEFLATE&dollar;.md) , [_INFLATE&dollar;](INFLATE&dollar;.md)
</blockquote>
