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


* After [_ACCEPTFILEDROP](ACCEPTFILEDROP.md) is enabled, [_TOTALDROPPEDFILES](TOTALDROPPEDFILES.md) will return 0 until the user drops files or folders into the program's window.
* When using [_DROPPEDFILE](DROPPEDFILE.md) to read the list sequentially, [_TOTALDROPPEDFILES](TOTALDROPPEDFILES.md) will be reset to 0 after the last item is retrieved (after [_DROPPEDFILE](DROPPEDFILE.md) returns an empty string "").
* If using [_DROPPEDFILE](DROPPEDFILE.md) with an index, you must call [_FINISHDROP](FINISHDROP.md) after you finish working with the list.
* When using [_DROPPEDFILE](DROPPEDFILE.md) to read the list with an index, [_TOTALDROPPEDFILES](TOTALDROPPEDFILES.md) will not be reset (and the list of items won't be cleared) until [_FINISHDROP](FINISHDROP.md) is called.
* Keyword not supported in Linux or macOS versions

</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>


* [_ACCEPTFILEDROP](ACCEPTFILEDROP.md) , [_DROPPEDFILE](DROPPEDFILE.md) , [_FINISHDROP](FINISHDROP.md)
* [_FILEEXISTS](FILEEXISTS.md) , [_DIREXISTS](DIREXISTS.md)
</blockquote>
