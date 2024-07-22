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

## [_SNDSETPOS](SNDSETPOS.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SNDSETPOS)
---
<blockquote>

### The _SNDSETPOS statement changes the current/starting playing position in seconds of a sound.

</blockquote>

#### SYNTAX

<blockquote>

`_SNDSETPOS handle& , position!`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Changes the current/starting playing position in seconds (a [SINGLE](SINGLE.md)  value) of a sound in memory.
*  If position! is past the length of the sound, playback will be interrupted.
*  Function cannot be called while a looping sound is being played (see [_SNDLOOP](SNDLOOP.md)  ).
*  In versions prior to build 20170811/60 , the sound identified by handle& must have been opened using the "SETPOS" capability to use this statement.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_SNDGETPOS](SNDGETPOS.md)  , [_SNDLEN](SNDLEN.md) 
*  [_SNDOPEN](SNDOPEN.md)  , [_SNDLIMIT](SNDLIMIT.md) 

</blockquote>
