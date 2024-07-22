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

## [CLEAR](CLEAR.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/CLEAR)
---
<blockquote>

### The CLEAR statement clears all variable and array element values in a program.

</blockquote>

#### SYNTAX

<blockquote>

`CLEAR [, ignored& , ignored& ]`

</blockquote>

#### DESCRIPTION

<blockquote>

*  All parameters are optional and ignored by QB64 .
*  Normally used to clear all program variable and array values where numerical values become zero and string values become empty ("").
*  It does not clear constant values.
*  Closes all opened files.
*  $DYNAMIC or [REDIM](REDIM.md)  arrays will need to be redimensioned or an error will occur when referenced because they are removed.


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  [ERASE](ERASE.md) 
*  [REDIM](REDIM.md)  , [_PRESERVE](PRESERVE.md) 
*  Arrays

</blockquote>
