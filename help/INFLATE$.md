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

## [_INFLATE\$](INFLATE\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_INFLATE$)
---
<blockquote>

### The _INFLATE$ function decompresses a string compressed by the _DEFLATE$ function.

</blockquote>

#### SYNTAX

<blockquote>

`result$ = _INFLATE$ ( stringToDecompress$[, originalSize&] )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  result$ will contain the original version of stringToDecompress$ .
*  Optional parameter originalSize& can be used if the original size of the uncompressed data is known beforehand, which makes the decompression routine run more efficiently.
	* If unspecified, decompression still works as expected, but may use more steps and need to allocate more memory internally.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_DEFLATE\$](DEFLATE\$.md) 

</blockquote>
