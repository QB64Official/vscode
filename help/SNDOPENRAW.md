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

## [_SNDOPENRAW](SNDOPENRAW.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SNDOPENRAW)
---
<blockquote>

### The _SNDOPENRAW function opens a new channel to fill with _SNDRAW content to manage multiple dynamically generated sounds.

</blockquote>

#### SYNTAX

<blockquote>

`pipeHandle& = _SNDOPENRAW`

</blockquote>

#### DESCRIPTION

<blockquote>

*  You can manage multiple dynamically generated sounds at once without having to worry about mixing.
*  Use [_SNDCLOSE](SNDCLOSE.md)  to remove the pipe sound handles from memory.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_SNDRAWDONE](SNDRAWDONE.md) 
*  [_SNDRAW](SNDRAW.md) 
*  [_SNDCLOSE](SNDCLOSE.md) 

</blockquote>
