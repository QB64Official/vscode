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


## [_DROPPEDFILE](DROPPEDFILE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_DROPPEDFILE)
---
<blockquote>

### The _DROPPEDFILE function returns the list of items (files or folders) dropped in a program's window after _ACCEPTFILEDROP is enabled.

</blockquote>

#### DESCRIPTION

<blockquote>


* After [_ACCEPTFILEDROP](ACCEPTFILEDROP.md) is enabled, once [_TOTALDROPPEDFILES](TOTALDROPPEDFILES.md) is greater than 0 the list of dropped items will be available for retrieval with [_DROPPEDFILE](DROPPEDFILE.md)
* When using [_DROPPEDFILE](DROPPEDFILE.md) to read the list sequentially (without specifying an index& ), an empty string ("") indicates the list is over and then [_TOTALDROPPEDFILES](TOTALDROPPEDFILES.md) gets reset to 0.
* When using [_DROPPEDFILE](DROPPEDFILE.md) with an index (which goes from 1 to [_TOTALDROPPEDFILES](TOTALDROPPEDFILES.md) ), you must call [_FINISHDROP](FINISHDROP.md) after you finish working with the list.
* Because it returns a string, [_DROPPEDFILE](DROPPEDFILE.md) also accepts being followed by a string suffix ( [_DROPPEDFILE](DROPPEDFILE.md) $ )
* Keyword not supported in Linux or macOS versions

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Accepting files dragged from a folder and processing the list received by specifying an index.
```vb
SCREEN _NEWIMAGE(128, 25, 0)

_ACCEPTFILEDROP 'enables drag/drop functionality
PRINT "Drag files from a folder and drop them in this window..."

DO
IF _TOTALDROPPEDFILES THEN
FOR i = 1 TO _TOTALDROPPEDFILES
a$ = _DROPPEDFILE(i)
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
_FINISHDROP
END IF

_LIMIT 30
LOOP
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_ACCEPTFILEDROP](ACCEPTFILEDROP.md) , [_TOTALDROPPEDFILES](TOTALDROPPEDFILES.md) , [_FINISHDROP](FINISHDROP.md)
* [_FILEEXISTS](FILEEXISTS.md) , [_DIREXISTS](DIREXISTS.md)
</blockquote>
