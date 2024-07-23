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


## [_FINISHDROP](FINISHDROP.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_FINISHDROP)
---
<blockquote>

### The _FINISHDROP statement resets _TOTALDROPPEDFILES and clears the _DROPPEDFILE list of items (files/folders).

</blockquote>

#### SYNTAX

<blockquote>

`_FINISHDROP`

</blockquote>

#### DESCRIPTION

<blockquote>


* When using [_DROPPEDFILE](DROPPEDFILE.md) with an index (which goes from 1 to [_TOTALDROPPEDFILES](TOTALDROPPEDFILES.md) ), you must call [_FINISHDROP](FINISHDROP.md) after you finish working with the list in order to prepare for the next drag/drop operation.
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
_FINISHDROP 'If _FINISHDROP isn't called here then _TOTALDROPPEDFILES never gets reset.
END IF

_LIMIT 30
LOOP
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_ACCEPTFILEDROP](ACCEPTFILEDROP.md) , [_TOTALDROPPEDFILES](TOTALDROPPEDFILES.md) , [_DROPPEDFILE](DROPPEDFILE.md)
* [_FILEEXISTS](FILEEXISTS.md) , [_DIREXISTS](DIREXISTS.md)
</blockquote>
