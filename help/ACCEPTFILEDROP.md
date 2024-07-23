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


## [_ACCEPTFILEDROP](ACCEPTFILEDROP.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_ACCEPTFILEDROP)
---
<blockquote>

### The _ACCEPTFILEDROP statement prepares a program window to receive files dropped from Windows Explorer in a drag/drop operation.

</blockquote>

#### SYNTAX

<blockquote>

`_ACCEPTFILEDROP [{ON|OFF}]`

</blockquote>

#### DESCRIPTION

<blockquote>


* Calling the statement with no parameters turns drag/dropping ON.
* To know when files have been dropped into your program's window, check that [_TOTALDROPPEDFILES](TOTALDROPPEDFILES.md) is greater than 0.
* Use [_DROPPEDFILE](DROPPEDFILE.md) to read the list, either sequentially or by index.
* If using [_DROPPEDFILE](DROPPEDFILE.md) with an index, you must call [_FINISHDROP](FINISHDROP.md) after you finish working with the list.
* Keyword not supported in Linux or macOS versions

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Accepting files dragged from a folder and processing the list received sequentially.
```vb
SCREEN _NEWIMAGE(128, 25, 0)

_ACCEPTFILEDROP 'enables drag/drop functionality
PRINT "Drag files from a folder and drop them in this window..."

DO
IF _TOTALDROPPEDFILES THEN
FOR i = 1 TO _TOTALDROPPEDFILES
a$ = _DROPPEDFILE 'reads the list sequentially; when the result is empty ("") it means the list is over
COLOR 15
PRINT i,
IF _FILEEXISTS(a$) THEN
COLOR 2: PRINT "file",
ELSE
IF _DIREXISTS(a$) THEN
COLOR 3: PRINT "folder",
ELSE
COLOR 4: PRINT "not found", 'highly unlikely, but who knows?
END IF
END IF
COLOR 15
PRINT a$
NEXT
END IF

_LIMIT 30
LOOP
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_TOTALDROPPEDFILES](TOTALDROPPEDFILES.md) , [_DROPPEDFILE](DROPPEDFILE.md) , [_FINISHDROP](FINISHDROP.md)
* [_FILEEXISTS](FILEEXISTS.md) , [_DIREXISTS](DIREXISTS.md)
</blockquote>
