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

## [_SNDRATE](SNDRATE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SNDRATE)
---
<blockquote>

### The _SNDRATE function returns the sample rate frequency per second of the current computer's sound card.

</blockquote>

#### SYNTAX

<blockquote>

`sampleRate& = _SNDRATE`

</blockquote>

#### DESCRIPTION

<blockquote>

*  The sample rate frequency per second value returned can be any [LONG](LONG.md)  value. Common values are 22050 or 44100.
*  The sound card sample rate is determined by the sound card and it cannot be changed.
*  Do not assume this to be a certain value. Always write code that can adapt to whatever is returned.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_SNDRAW](SNDRAW.md) 
*  [_SNDRAWLEN](SNDRAWLEN.md) 

</blockquote>
