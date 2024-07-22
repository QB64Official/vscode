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

## [_WRITEFILE](WRITEFILE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_WRITEFILE)
---
<blockquote>

### The _WRITEFILE statement writes a string into a new file, overwriting an existing file of the same name. It does OPEN , PUT and CLOSE the file in one run. It's the counterpart to the _READFILE$ function.

</blockquote>

#### SYNTAX

<blockquote>

`_WRITEFILE fileSpec$ , contents$`

</blockquote>

#### PARAMETERS

<blockquote>

*  fileSpec$ is the name of the file to write as literal or variable [STRING](STRING.md)  , if required inclusive a full or relative path.
	* To avoid errors you should use [_DIREXISTS](DIREXISTS.md)  before using this statement to make sure a desired path exists.
*  contents$ is the literal or variable [STRING](STRING.md)  which its contents shall be written into the file.

</blockquote>

#### DESCRIPTION

<blockquote>

*  Sometimes you may be in need to quickly dump a huge amount of data into a file without much fuss, e.g. the results of the pack/unpack functions _DEFLATE$ and _INFLATE$ or when copying a file in conjunction with the _READFILE$ function.
*  In earlier versions of QB64(PE) you had to implement that saving process manually all the time or create a reusable custom [FUNCTION](FUNCTION.md)  for it.
*  Now [_WRITEFILE](WRITEFILE.md)  will simplify this, it's mainly for convenience to wrap the following code sequence into one handy statement:


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  _READFILE$ , [BLOAD](BLOAD.md)  , [BSAVE](BSAVE.md) 
*  _DEFLATE$ , [_INFLATE\$](INFLATE\$.md) 

</blockquote>
