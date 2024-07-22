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

*  fileNumber indicates the file or list of file numbers to close. When not specified, all open files are closed.

</blockquote>

#### DESCRIPTION

<blockquote>

*  A file must be closed when changing to another file mode.
*  [CLOSE](CLOSE.md)  files when they are no longer needed, in order to save memory.
*  Files cannot be opened in the same [OPEN](OPEN.md)  mode using another number until the first one is closed.
*  Use holding variables for each file number returned by [FREEFILE](FREEFILE.md)  so that the file reference is known.
*  Will not return an error if a filenumber is already closed or was never opened. It does not verify that a file was closed.
*  [CLEAR](CLEAR.md)  can be used to close all open files.
*  [CLOSE](CLOSE.md)  can also be used to [CLOSE](CLOSE.md)  an open TCP/IP or HTTP connection using a handle returned by QB64 .


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  [OPEN](OPEN.md)  , [OPEN](OPEN.md) [COM](COM.md) 
*  [_OPENCLIENT](OPENCLIENT.md)  , [_OPENHOST](OPENHOST.md) 
*  [_OPENCONNECTION](OPENCONNECTION.md) 
*  [_SNDCLOSE](SNDCLOSE.md) 

</blockquote>
