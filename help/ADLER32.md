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

## [_ADLER32](ADLER32.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_ADLER32)
---
<blockquote>

### The _ADLER32 function returns the Adler-32 checksum of any arbitrary string.

</blockquote>

#### SYNTAX

<blockquote>

`chksum~& = _ADLER32 ( dataString$ )`

</blockquote>

#### PARAMETERS

<blockquote>

*  chksum~& is the [_UNSIGNED](UNSIGNED.md) [LONG](LONG.md)  checksum returned (one (1), if the given dataString$ was empty).
*  dataString$ is any literal or variable [STRING](STRING.md)  to build the checksum from.

</blockquote>

#### DESCRIPTION

<blockquote>

*  The Adler-32 checksum uses a relative simple but very fast algorithm, it has the following known properties:
	* All single bit flips will be detected.
	* All double bit flips will be detected.
	* Burst errors up to seven bits are always detected.
*  For more informations have a closer look at Chapters 5-7 here .


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  _DEFLATE$ , [_INFLATE\$](INFLATE\$.md) 
*  [_CRC32](CRC32.md)  , [_MD5\$](MD5\$.md) 

</blockquote>
