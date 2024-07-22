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

## [LOC](LOC.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/LOC)
---
<blockquote>

### The LOC function returns the status of a serial (COM) port received buffer or the last read/written byte or record position in an open file.

</blockquote>

#### SYNTAX

<blockquote>

`bytes% = LOC ( fileOrPortNumber% )`

</blockquote>

#### PARAMETERS

<blockquote>

*  fileOrPortNumber% is the number used in the port or file [OPEN](OPEN.md) [AS](AS.md)  statement.
*  Returns 0 if the buffer is empty. Any value above 0 indicates the [COM](COM.md)  port has received data.
*  Use it in conjunction with INPUT$ to get the data bytes received.
*  Can also be used to get the last read/written byte or record position in a file. See also [SEEK](SEEK.md)  .

</blockquote>

#### SEE ALSO

<blockquote>

*  [PRINT](PRINT.md)  , [OPEN](OPEN.md) [COM](COM.md)  , [PRINT](PRINT.md)  (file statement)
*  [SEEK](SEEK.md)  , [SEEK](SEEK.md)  (function)

</blockquote>
