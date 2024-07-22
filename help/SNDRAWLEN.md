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

## [_SNDRAWLEN](SNDRAWLEN.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SNDRAWLEN)
---
<blockquote>

### The _SNDRAWLEN function returns the length, in seconds, of a _SNDRAW sound currently queued.

</blockquote>

#### SYNTAX

<blockquote>

`length# = _SNDRAWLEN [ pipeHandle& ]`

</blockquote>

#### PARAMETERS

<blockquote>

*  The optional pipeHandle& parameter refers to the sound pipe opened using [_SNDOPENRAW](SNDOPENRAW.md)  .

</blockquote>

#### DESCRIPTION

<blockquote>

*  Use [_SNDRAWLEN](SNDRAWLEN.md)  to determine the length of a sound queue during creation and when to stop playing the sound.
*  Ensure that [_SNDRAWLEN](SNDRAWLEN.md)  is comfortably above 0 (until you've actually finished playing sound).
*  If you are getting occasional random clicks, this generally means that [_SNDRAWLEN](SNDRAWLEN.md)  has dropped to 0.
*  The [_SNDRATE](SNDRATE.md)  determines how many samples are played per second. However, the timing is achieved by the sound card and [_SNDRAWLEN](SNDRAWLEN.md)  , not your program.
*  Do not attempt to use _TIMER or [_DELAY](DELAY.md)  or [_LIMIT](LIMIT.md)  to control the timing of [_SNDRAW](SNDRAW.md)  sounds. You may use them as usual for delays or to limit your program's CPU usage, but the decision of how much sound to queue should only be based on the remaining [_SNDRAWLEN](SNDRAWLEN.md)  .


</blockquote>

#### SEE ALSO

<blockquote>

*  [_SNDRAW](SNDRAW.md) 
*  [_SNDRATE](SNDRATE.md) 

</blockquote>
