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

## [_SNDPAUSED](SNDPAUSED.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SNDPAUSED)
---
<blockquote>

### The _SNDPAUSED function checks if a sound is paused. Uses a handle parameter passed from _SNDOPEN .

</blockquote>

#### SYNTAX

<blockquote>

`isPaused%% = _SNDPAUSED ( handle& )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Returns true (-1) if the sound is paused. False (0) if not paused.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_SNDPAUSE](SNDPAUSE.md)  , [_SNDPLAY](SNDPLAY.md) 
*  [_SNDSTOP](SNDSTOP.md) 

</blockquote>
