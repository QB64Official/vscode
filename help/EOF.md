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

## [EOF](EOF.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/EOF)
---
<blockquote>

### The EOF function indicates that the end of a file or HTTP response has been reached.

</blockquote>

#### SYNTAX

<blockquote>

`endReached%% = EOF ([#] fileNumber& )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  fileNumber& or httpHandle& is the number of the file or HTTP connected being read. # is not required.
	* fileNumber& is a file opened using [OPEN](OPEN.md)  .
	* httpHandle& is a HTTP connection opened using [_OPENCLIENT](OPENCLIENT.md)  .
*  Returns 0 until the end of a file. This avoids a file read error.
*  Returns -1 (true) at the end of the file.


</blockquote>

#### SEE ALSO

<blockquote>

*  [OPEN](OPEN.md) 
*  [LOF](LOF.md)  , [LEN](LEN.md) 
*  [INPUT](INPUT.md)  (file statement)
*  [LINE](LINE.md)  [INPUT](INPUT.md)  (file statement)
*  [GET](GET.md)  , [PUT](PUT.md) 

</blockquote>
