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

## [_SNDPLAYING](SNDPLAYING.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SNDPLAYING)
---
<blockquote>

### The _SNDPLAYING function returns whether a sound is being played. Uses a handle from the _SNDOPEN or _SNDCOPY functions.

</blockquote>

#### SYNTAX

<blockquote>

`isPlaying% = _SNDPLAYING ( handle& )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Returns false (0) if a sound is not playing or true (-1) if it is.
*  If a sound is paused, [_SNDPLAYING](SNDPLAYING.md)  returns 0.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_SNDPLAY](SNDPLAY.md)  , [_SNDPAUSE](SNDPAUSE.md)  , [_SNDSTOP](SNDSTOP.md) 
*  [_SNDPAUSED](SNDPAUSED.md) 

</blockquote>
