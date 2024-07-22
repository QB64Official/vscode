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

## [LOF](LOF.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/LOF)
---
<blockquote>

### The LOF function is used to find the length of an OPEN file in bytes, or content length of an HTTP response.

</blockquote>

#### SYNTAX

<blockquote>

`totalBytes& = LOF ([#] fileNumber )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  For regular OPENed files:
	* [LOF](LOF.md)  returns the number of bytes in an OPENed designated fileNumber . File is empty if it returns 0.
	* fileNumber is the number of the opened file. # is not required.
	* Often used to determine the number of records in a [RANDOM](RANDOM.md)  access file.
	* Can also be used to avoid reading an empty file, which would create an error.
	* [LOF](LOF.md)  in QB64 can return up to 9 GB (9,223,372,036 bytes) file sizes.
*  For HTTP handles opened using [_OPENCLIENT](OPENCLIENT.md)  :
	* [LOF](LOF.md)  returns the length listed in the Content-Length header of the HTTP response.
	* If no Content-Length header was provided on the HTTP response, then [LOF](LOF.md)  return -1


</blockquote>

#### SEE ALSO

<blockquote>

*  [LEN](LEN.md)  , [EOF](EOF.md)  , [BINARY](BINARY.md)  , [RANDOM](RANDOM.md)  , [TYPE](TYPE.md) 

</blockquote>
