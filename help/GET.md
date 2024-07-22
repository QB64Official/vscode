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

## [GET](GET.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/GET)
---
<blockquote>

### The GET # statement reads data from a file or port device by bytes or record positions.

</blockquote>

#### SYNTAX

<blockquote>

`GET # fileNumber& , [ position ][, { targetVariable | targetArray() }]`

</blockquote>

#### DESCRIPTION

<blockquote>

*  fileNumber& is the file or port number used in the [OPEN](OPEN.md) [AS](AS.md)  [BINARY](BINARY.md)  or [RANDOM](RANDOM.md)  statement.
*  The [INTEGER](INTEGER.md)  or [LONG](LONG.md)  byte position in a [BINARY](BINARY.md)  file or the record position in a [RANDOM](RANDOM.md)  file must be greater than zero .
*  The position can be omitted if the [GET](GET.md)  operations are consecutive based on the targetVariable [TYPE](TYPE.md)  byte size.
*  The targetVariable type or [FIELD](FIELD.md)  variable size determines the byte size and the next position in the file.
*  The first byte position in a file is 1.
*  [GET](GET.md)  does not require a byte or record position or targetVariable (or comma) when using a [FIELD](FIELD.md)  statement.
*  QB64 can [PUT](PUT.md)  the entire contents of an array to a file and later [GET](GET.md)  those contents to a targetArray() (include brackets).
*  [GET](GET.md)  may ignore the end of a file and return bad data. If the [EOF](EOF.md)  function returns -1 after a [GET](GET.md)  operation, it indicates that the data has ended.


</blockquote>

#### SEE ALSO

<blockquote>

*  [PUT](PUT.md)  # , [SEEK](SEEK.md)  , [SEEK](SEEK.md)  (function)
*  [INPUT](INPUT.md)  # , [GET](GET.md)  (TCP/IP statement)
*  [FIELD](FIELD.md)  , [RANDOM](RANDOM.md)  , [BINARY](BINARY.md) 
*  [LEN](LEN.md)  , [LOF](LOF.md)  , [EOF](EOF.md) 

</blockquote>
