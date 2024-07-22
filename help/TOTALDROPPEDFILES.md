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

## [_TOTALDROPPEDFILES](TOTALDROPPEDFILES.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_TOTALDROPPEDFILES)
---
<blockquote>

### The _TOTALDROPPEDFILES function returns the number of items (files or folders) dropped in a program's window after _ACCEPTFILEDROP is enabled.

</blockquote>

#### SYNTAX

<blockquote>

`totalFilesReceived& = _TOTALDROPPEDFILES`

</blockquote>

#### DESCRIPTION

<blockquote>

*  After [_ACCEPTFILEDROP](ACCEPTFILEDROP.md)  is enabled, [_TOTALDROPPEDFILES](TOTALDROPPEDFILES.md)  will return 0 until the user drops [FILES](FILES.md)  or folders into the program's window.
*  When using [_DROPPEDFILE](DROPPEDFILE.md) [TO](TO.md)  read the list sequentially, [_TOTALDROPPEDFILES](TOTALDROPPEDFILES.md)  will be reset [TO](TO.md)  0 after the last item is retrieved (after [_DROPPEDFILE](DROPPEDFILE.md)  returns an empty string "").
*  If using [_DROPPEDFILE](DROPPEDFILE.md)  with an index, you must call [_FINISHDROP](FINISHDROP.md)  after you finish working with the list.
*  When using [_DROPPEDFILE](DROPPEDFILE.md) [TO](TO.md)  read the list with an index, [_TOTALDROPPEDFILES](TOTALDROPPEDFILES.md)  will not be reset (and the list of items won't be cleared) until [_FINISHDROP](FINISHDROP.md) [IS](IS.md)  called.
*  Keyword not supported in Linux or macOS versions


</blockquote>

#### SEE ALSO

<blockquote>

*  [_ACCEPTFILEDROP](ACCEPTFILEDROP.md)  , [_DROPPEDFILE](DROPPEDFILE.md)  , [_FINISHDROP](FINISHDROP.md) 
*  [_FILEEXISTS](FILEEXISTS.md)  , [_DIREXISTS](DIREXISTS.md) 

</blockquote>
