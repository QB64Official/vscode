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

## [_READFILE\$](READFILE\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_READFILE$)
---
<blockquote>

### The _READFILE$ function returns the complete contents of a file in a single string, but without the usual overhead. It does OPEN , GET and CLOSE the file in one run.

</blockquote>

#### SYNTAX

<blockquote>

`contents$ = _READFILE$ ( fileSpec$ )`

</blockquote>

#### PARAMETERS

<blockquote>

*  contents$ is the entire file contents returned as [STRING](STRING.md)  . May return an empty [STRING](STRING.md) , if the specified file was empty, [OR](OR.md)  if the program was continued from a file related [ERROR](ERROR.md)  .
*  fileSpec$ is the name of the file to read as literal or variable [STRING](STRING.md)  , if required inclusive a full or relative path.
	* To avoid errors you should use [_FILEEXISTS](FILEEXISTS.md)  before calling this function to make sure the file exists.

</blockquote>

#### DESCRIPTION

<blockquote>

*  Sometimes it's required or at least useful to have the whole contents of a file in a single string for further processing, e.g. to pass it to hashing or compression functions which expect strings.
*  In earlier versions of QB64(PE) you had to implement that loading process manually all the time or create a reusable custom [FUNCTION](FUNCTION.md)  for it.
*  Now _READFILE$ will simplify this, it's mainly a convenience function to wrap the following code sequence into one handy function:


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  [_WRITEFILE](WRITEFILE.md)  , [BLOAD](BLOAD.md)  , [BSAVE](BSAVE.md) 
*  _DEFLATE$ , [_INFLATE\$](INFLATE\$.md) 
*  [_ADLER32](ADLER32.md)  , [_CRC32](CRC32.md)  , [_MD5\$](MD5\$.md) 

</blockquote>
