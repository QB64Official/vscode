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

*  When using [_DROPPEDFILE](DROPPEDFILE.md)  with an index (which goes from 1 [TO](TO.md)  [_TOTALDROPPEDFILES](TOTALDROPPEDFILES.md)  ), you must call [_FINISHDROP](FINISHDROP.md)  after you finish working with the list in order [TO](TO.md)  prepare for the next drag/drop operation.
*  Keyword not supported in Linux or macOS versions


</blockquote>

#### SEE ALSO

<blockquote>

*  [_ACCEPTFILEDROP](ACCEPTFILEDROP.md)  , [_TOTALDROPPEDFILES](TOTALDROPPEDFILES.md)  , [_DROPPEDFILE](DROPPEDFILE.md) 
*  [_FILEEXISTS](FILEEXISTS.md)  , [_DIREXISTS](DIREXISTS.md) 

</blockquote>
