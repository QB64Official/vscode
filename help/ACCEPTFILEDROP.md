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

*  Calling the statement with no parameters turns drag/dropping [ON](ON.md) .
*  [TO](TO.md)  know when [FILES](FILES.md)  have been dropped into your program's window, check that [_TOTALDROPPEDFILES](TOTALDROPPEDFILES.md)  is greater than 0.
*  Use [_DROPPEDFILE](DROPPEDFILE.md)  to read the list, either sequentially or by index.
*  If using [_DROPPEDFILE](DROPPEDFILE.md)  with an index, you must call [_FINISHDROP](FINISHDROP.md)  after you finish working with the list.
*  Keyword not supported in Linux or macOS versions


</blockquote>

#### SEE ALSO

<blockquote>

*  [_TOTALDROPPEDFILES](TOTALDROPPEDFILES.md)  , [_DROPPEDFILE](DROPPEDFILE.md)  , [_FINISHDROP](FINISHDROP.md) 
*  [_FILEEXISTS](FILEEXISTS.md)  , [_DIREXISTS](DIREXISTS.md) 

</blockquote>
