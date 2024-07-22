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

## [_SNDCOPY](SNDCOPY.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SNDCOPY)
---
<blockquote>

### The _SNDCOPY function copies a sound to a new handle so that two or more of the same sound can be played at once. The passed handle parameter is from the _SNDOPEN function.

</blockquote>

#### SYNTAX

<blockquote>

`copyHandle& = _SNDCOPY ( handle& )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Returns a new handle to the a copy in memory of the sound data referred to by the source handle.
*  No changes to the source handle (such as a volume change) are inherited.
*  The sound data referred to by the handle and its copies are not freed until all of them are closed.
*  In versions prior to build 20170811/60 , the sound identified by handle& must have been opened using the "SYNC" capability to use this function.


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  [_SNDPLAYCOPY](SNDPLAYCOPY.md) 
*  [_SNDOPEN](SNDOPEN.md) 

</blockquote>
