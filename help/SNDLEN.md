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

## [_SNDLEN](SNDLEN.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SNDLEN)
---
<blockquote>

### The _SNDLEN function returns the length in seconds of a loaded sound using a handle from the _SNDOPEN function.

</blockquote>

#### SYNTAX

<blockquote>

`soundLength = _SNDLEN ( handle& )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Returns the length of a sound in seconds.
*  In versions prior to build 20170811/60 , the sound identified by handle& must have been opened using the " [LEN](LEN.md) " capability to use this function.


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  [_SNDCOPY](SNDCOPY.md)  , [_SNDLIMIT](SNDLIMIT.md) 

</blockquote>
