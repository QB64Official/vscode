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

## [_MD5\$](MD5\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MD5$)
---
<blockquote>

### The _MD5$ function returns the MD5 hash value of any arbitrary string.

</blockquote>

#### SYNTAX

<blockquote>

`md5hash$ = _MD5$ ( dataString$ )`

</blockquote>

#### PARAMETERS

<blockquote>

*  md5hash$ is the hash value returned as hexadecimal [STRING](STRING.md)  , if the given dataString$ was empty the unusual but absolutely correct hash value is:
	* D41D8CD98F00B204E9800998ECF8427E
*  dataString$ is any literal or variable [STRING](STRING.md)  to build the hash value from.

</blockquote>

#### DESCRIPTION

<blockquote>

*  MD5 can be used as a checksum to verify data integrity against unintentional corruption.
*  Historically it was widely used as a cryptographic hash function, however it has been found to suffer from extensive vulnerabilities.
*  It remains suitable for other non-cryptographic purposes and may be preferred due to lower computational requirements than more recent Secure Hash Algorithms.


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  _DEFLATE$ , [_INFLATE\$](INFLATE\$.md) 
*  [_ADLER32](ADLER32.md)  , [_CRC32](CRC32.md) 

</blockquote>
