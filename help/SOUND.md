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

## [SOUND](SOUND.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/SOUND)
---
<blockquote>

### SOUND sets frequency and duration of sounds from the internal PC speaker if the computer has one or the sound card in QB64.

</blockquote>

#### SYNTAX

<blockquote>

`SOUND frequency# , duration# [, volume# ][, panning# ][, waveform& ]`

</blockquote>

#### DESCRIPTION

<blockquote>

*  frequency# is any literal or variable value from 37 to 32767, but 0 is allowed for delays.
	* Just like QuickBASIC 4.5 frequencies on or above 20000 produces silence.
*  duration# is any literal or variable number of [TIMER](TIMER.md)  ticks with a duration of 1/18th second. 18 = one second.
*  Optional parameter volume# should be between 0.0 (muted) to 1.0 (full volume).
*  Optional parameter panning# should be between -1.0 (hard left) to 1.0 (hard right). 0.0 being center.
*  Optional parameter waveform& can be one of the following:
	* 1 for square waveform
	* 2 for sawtooth waveform
	* 3 for triangle waveform (default)
	* 4 for sine waveform
	* 5 for white noise
*  More waveform types may be introduced in the future.
*  [PLAY](PLAY.md)  can be used for musical sounds.


</blockquote>

#### SEE ALSO

<blockquote>

*  [PLAY](PLAY.md)  , [BEEP](BEEP.md) 
*  [_SNDOPEN](SNDOPEN.md) 
*  [_SNDRAW](SNDRAW.md) 

</blockquote>
