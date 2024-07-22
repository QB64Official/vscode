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

## [SEEK](SEEK.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/SEEK)
---
<blockquote>

### The SEEK statement sets the byte or record position in a file for the next read or write.

</blockquote>

#### SYNTAX

<blockquote>

`SEEK filenumber& , position`

</blockquote>

#### PARAMETERS

<blockquote>

*  filenumber& must be the file number that is [OPEN](OPEN.md)  and being read or written to.
*  position is a byte in [BINARY](BINARY.md)  or sequencial files created in [OUTPUT](OUTPUT.md)  , [APPEND](APPEND.md)  or [INPUT](INPUT.md)  modes. The first byte = 1.
*  position is the record in [RANDOM](RANDOM.md)  files to read or write. Records can hold more than one variable defined in a [TYPE](TYPE.md)  .
*  Since the first [SEEK](SEEK.md)  file position is 1 it may require adding one to an offset value when documentation uses that position as 0.
*  After a [SEEK](SEEK.md)  statement, the next file operation starts at that [SEEK](SEEK.md)  byte position.
*  The [SEEK](SEEK.md)  statement can work with the [SEEK](SEEK.md)  (function) to move around in a file.

</blockquote>

#### SEE ALSO

<blockquote>

*  [SEEK](SEEK.md)  (function) , [LOC](LOC.md) 
*  [GET](GET.md)  , [PUT](PUT.md) 

</blockquote>
