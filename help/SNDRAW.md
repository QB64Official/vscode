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

## [_SNDRAW](SNDRAW.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SNDRAW)
---
<blockquote>

### The _SNDRAW statement plays sound wave sample frequencies created by a program.

</blockquote>

#### SYNTAX

<blockquote>

`_SNDRAW leftSample [, rightSample ][, pipeHandle& ]`

</blockquote>

#### PARAMETERS

<blockquote>

*  The leftSample and rightSample value(s) can be any [SINGLE](SINGLE.md)  or [DOUBLE](DOUBLE.md)  literal or variable frequency value from -1.0 to 1.0.
*  The pipeHandle& parameter refers to the sound pipe opened using [_SNDOPENRAW](SNDOPENRAW.md)  .

</blockquote>

#### DESCRIPTION

<blockquote>

*  Specifying pipeHandle& allows sound to be played through two or more channels at the same time ( version 1.000 and up ).
*  If only leftSample value is used, the sound will come out of both speakers.
*  Using [_SNDRAW](SNDRAW.md)  will pause any currently playing music.
*  [_SNDRAW](SNDRAW.md)  is designed for continuous play. It will not produce any sound until a significant number of samples have been queued. No sound is played if only a few samples are queued.
*  Ensure that [_SNDRAWLEN](SNDRAWLEN.md)  is comfortably above 0 (until you've actually finished playing sound). If you are getting occasional unintended random clicks, this generally means that [_SNDRAWLEN](SNDRAWLEN.md)  has dropped to 0.
*  [_SNDRAW](SNDRAW.md)  is not intended to queue up many minutes worth of sound. It will probably work but will chew up a lot of memory (and if it gets swapped to disk, your sound could be interrupted abruptly).
*  [_SNDRATE](SNDRATE.md)  determines how many samples are played per second, but timing is done by the sound card, not your program.
*  Do not attempt to use _TIMER or [_DELAY](DELAY.md)  or [_LIMIT](LIMIT.md)  to control the timing of [_SNDRAW](SNDRAW.md) . You may use them for delays or to limit your program's CPU usage, but how much to queue should only be based on the [_SNDRAWLEN](SNDRAWLEN.md)  .


</blockquote>

#### SEE ALSO

<blockquote>

*  [_SNDRATE](SNDRATE.md)  , [_SNDRAWLEN](SNDRAWLEN.md) 
*  [_SNDOPENRAW](SNDOPENRAW.md)  , [_SNDRAWDONE](SNDRAWDONE.md) 
*  [_SNDOPEN](SNDOPEN.md) 
*  [PLAY](PLAY.md)  , [BEEP](BEEP.md) 
*  DTMF Phone Demo

</blockquote>
