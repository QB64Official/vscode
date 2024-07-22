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

## [FREEFILE](FREEFILE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/FREEFILE)
---
<blockquote>

### The FREEFILE function returns a LONG value that is an unused file access number.

</blockquote>

#### SYNTAX

<blockquote>

`fileHandle& = FREEFILE`

</blockquote>

#### DESCRIPTION

<blockquote>

*  [FREEFILE](FREEFILE.md)  values should be given to unique variables so that each file has a specific variable value assigned to it.
*  Once the number is assigned in an [OPEN](OPEN.md)  statement, the file number can later be used to read, write or [CLOSE](CLOSE.md)  that file.
*  File numbers CLOSEd are made available to [FREEFILE](FREEFILE.md)  for reuse immediately.
*  [FREEFILE](FREEFILE.md)  returns are normally sequential starting with 1. Only file numbers in use will not be returned.
*  [OPEN](OPEN.md)  each file number after each [FREEFILE](FREEFILE.md)  return or the values returned may be the same.


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  [GET](GET.md)  , [PUT](PUT.md)  , [CLOSE](CLOSE.md) 

</blockquote>
