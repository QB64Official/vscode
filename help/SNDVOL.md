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

## [_SNDVOL](SNDVOL.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SNDVOL)
---
<blockquote>

### The _SNDVOL statement sets the volume of a sound loaded in memory using a handle from the _SNDOPEN function.

</blockquote>

#### SYNTAX

<blockquote>

`_SNDVOL handle& , volume!`

</blockquote>

#### DESCRIPTION

<blockquote>

*  volume! is a value from 0 (silence) to 1 (full volume).
*  In versions prior to build 20170811/60 , the sound identified by handle& must have been opened using the "VOL" capability to use this function.
*  Version 3.1.0 enables this for "raw" sounds.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_SNDOPEN](SNDOPEN.md)  , [_SNDOPENRAW](SNDOPENRAW.md) 
*  [_SNDBAL](SNDBAL.md) 

</blockquote>
