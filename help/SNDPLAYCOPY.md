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

## [_SNDPLAYCOPY](SNDPLAYCOPY.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SNDPLAYCOPY)
---
<blockquote>

### The _SNDPLAYCOPY statement copies a sound, plays it, and automatically closes the copy using a handle parameter passed from _SNDOPEN or _SNDCOPY

</blockquote>

#### SYNTAX

<blockquote>

`_SNDPLAYCOPY handle& [, [ volume! ][, x! ][, y! ][, z! ]]`

</blockquote>

#### PARAMETERS

<blockquote>

*  The [LONG](LONG.md)  handle& value is returned by [_SNDOPEN](SNDOPEN.md)  using a specific sound file.
*  The volume! parameter can be any [SINGLE](SINGLE.md)  value from 0 (no volume) to 1 (full volume).
*  x! distance values go from left (negative) to right (positive) (beginning with v3.3.x ).
*  y! distance values go from below (negative) to above (positive) (beginning with v3.3.x ).
*  z! distance values go from behind (negative) to in front (positive) (beginning with v3.3.x ).

</blockquote>

#### DESCRIPTION

<blockquote>

*  Makes coding easier by doing all of the following automatically:


</blockquote>

#### SEE ALSO

<blockquote>

*  [_SNDOPEN](SNDOPEN.md) 
*  [_SNDCOPY](SNDCOPY.md) 
*  [_SNDPLAYFILE](SNDPLAYFILE.md) 

</blockquote>
