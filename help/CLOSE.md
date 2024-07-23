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


## [CLOSE](CLOSE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/CLOSE)
---
<blockquote>

### CLOSE closes an open file or port using the number(s) assigned in an OPEN statement.

</blockquote>

#### SYNTAX

<blockquote>

`CLOSE [ fileNumber [, ...]]`

</blockquote>

#### PARAMETERS

<blockquote>


* fileNumber indicates the file or list of file numbers to close. When not specified, all open files are closed.
</blockquote>

#### DESCRIPTION

<blockquote>


* A file must be closed when changing to another file mode.
* [CLOSE](CLOSE.md) files when they are no longer needed, in order to save memory.
* Files cannot be opened in the same [OPEN](OPEN.md) mode using another number until the first one is closed.
* Use holding variables for each file number returned by [FREEFILE](FREEFILE.md) so that the file reference is known.
* Will not return an error if a filenumber is already closed or was never opened. It does not verify that a file was closed.
* [CLEAR](CLEAR.md) can be used to close all open files.
* [CLOSE](CLOSE.md) can also be used to close an open TCP/IP or HTTP connection using a handle returned by QB64 .

</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>


* [OPEN](OPEN.md) , [OPEN](OPEN.md) [COM](COM.md)
* [_OPENCLIENT](OPENCLIENT.md) , [_OPENHOST](OPENHOST.md)
* [_OPENCONNECTION](OPENCONNECTION.md)
* [_SNDCLOSE](SNDCLOSE.md)
</blockquote>
