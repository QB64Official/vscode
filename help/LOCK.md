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

## [LOCK](LOCK.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/LOCK)
---
<blockquote>

### The LOCK statement restricts access to parts of a file by other programs or processes.

</blockquote>

#### SYNTAX

<blockquote>

`LOCK [#] fileNumber%`

</blockquote>

#### DESCRIPTION

<blockquote>

*  fileNumber% is the file number of the file to lock.
*  In the first syntax, the entire file is locked.
*  In the second syntax, record& is the record number of the file to lock.
*  In the third syntax, the records or bytes in the range [ firstRecord& , lastRecord& ] are locked. If firstRecord& is omitted, it is assumed to be one (the first record or byte).
*  For files opened in [BINARY](BINARY.md)  mode, each record corresponds to a single byte.
*  [LOCK](LOCK.md)  and [UNLOCK](UNLOCK.md)  statements are always used in pairs and each statement must match the other one.
*  Files must be unlocked using [UNLOCK](UNLOCK.md)  before other programs can access them, and before the file is closed.
*  Keyword not supported in Linux or macOS versions


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  [UNLOCK](UNLOCK.md) 
*  [OPEN](OPEN.md) 
*  [ACCESS](ACCESS.md) 

</blockquote>
