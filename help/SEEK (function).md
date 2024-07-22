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

## [SEEK_(function)](SEEK_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/SEEK (function))
---
<blockquote>

### The SEEK function returns the byte or record position in a file, which is read or written next.

</blockquote>

#### SYNTAX

<blockquote>

`byte = SEEK ( filenumber& )`

</blockquote>

#### PARAMETERS

<blockquote>

*  filenumber& is the number of an [OPEN](OPEN.md)  file in any mode.
*  In [RANDOM](RANDOM.md)  files [SEEK](SEEK.md)  returns the record position to read or write.
*  In [BINARY](BINARY.md)  or sequencial files [SEEK](SEEK.md)  returns the byte position to read or write (first byte = 1).
*  Since the first file position is 1 it may require adding one to an offset value when documentation uses that position as 0.
*  Devices that do not support [SEEK](SEEK.md)  (SCRN, CONS, KBRD, COMn and LPTn) return 0.

</blockquote>

#### SEE ALSO

<blockquote>

*  [SEEK](SEEK.md)  , [LOC](LOC.md) 
*  [GET](GET.md)  , [PUT](PUT.md) 

</blockquote>
