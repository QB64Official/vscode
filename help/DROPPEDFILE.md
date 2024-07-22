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

## [_DROPPEDFILE](DROPPEDFILE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_DROPPEDFILE)
---
<blockquote>

### The _DROPPEDFILE function returns the list of items (files or folders) dropped in a program's window after _ACCEPTFILEDROP is enabled.

</blockquote>

#### DESCRIPTION

<blockquote>

*  After [_ACCEPTFILEDROP](ACCEPTFILEDROP.md)  is enabled, once [_TOTALDROPPEDFILES](TOTALDROPPEDFILES.md)  is greater than 0 the list of dropped items will be available for retrieval with [_DROPPEDFILE](DROPPEDFILE.md) 
*  When using [_DROPPEDFILE](DROPPEDFILE.md) [TO](TO.md)  read the list sequentially (without specifying an index& ), an empty string ("") indicates the list is over and then [_TOTALDROPPEDFILES](TOTALDROPPEDFILES.md)  gets reset [TO](TO.md)  0.
*  When using [_DROPPEDFILE](DROPPEDFILE.md)  with an index (which goes from 1 [TO](TO.md)  [_TOTALDROPPEDFILES](TOTALDROPPEDFILES.md)  ), you must call [_FINISHDROP](FINISHDROP.md)  after you finish working with the list.
*  Because it returns a string, [_DROPPEDFILE](DROPPEDFILE.md)  also accepts being followed by a string suffix ( [_DROPPEDFILE](DROPPEDFILE.md)  $ )
*  Keyword not supported in Linux or macOS versions


</blockquote>

#### SEE ALSO

<blockquote>

*  [_ACCEPTFILEDROP](ACCEPTFILEDROP.md)  , [_TOTALDROPPEDFILES](TOTALDROPPEDFILES.md)  , [_FINISHDROP](FINISHDROP.md) 
*  [_FILEEXISTS](FILEEXISTS.md)  , [_DIREXISTS](DIREXISTS.md) 

</blockquote>
