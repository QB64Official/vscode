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

## [_SNDOPEN-v0.960](SNDOPEN-v0.960.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SNDOPEN-v0.960)
---
<blockquote>

### 

</blockquote>

#### SYNTAX

<blockquote>

`soundHandle& = _SNDOPEN ( fileName$ )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Returns a [LONG](LONG.md)  soundHandle& value to the sound file in memory. A zero value means the sound could not be loaded.
*  The literal or variable [STRING](STRING.md)  sound fileName$ can be WAV, OGG or MP3 file types.
*  Always check the handle value returned is greater than zero before attempting to play the sound.
	* Make sure the variable is set to 0 before using [_SNDOPEN](SNDOPEN.md) .
*  The handle can be used by most of the _SND sound playing functions and statements in QB64 except [_SNDPLAYFILE](SNDPLAYFILE.md)  which plays a sound file directly from the disk and does not use a handle value.
*  Handles can be closed with [_SNDCLOSE](SNDCLOSE.md)  when the sound is no longer necessary.
*  If a WAV sound file won't play, try it using the Windows Play WAV sounds library to check it or convert the sound file to OGG.
*  The raw audio data can be accessed with [_MEMSOUND](MEMSOUND.md)  .


</blockquote>

#### SEE ALSO

<blockquote>

*  [_SNDCLOSE](SNDCLOSE.md)  , [_SNDPLAY](SNDPLAY.md)  , [_SNDSTOP](SNDSTOP.md) 
*  [_SNDPAUSE](SNDPAUSE.md)  , [_SNDLOOP](SNDLOOP.md)  , [_SNDLIMIT](SNDLIMIT.md) 
*  [_SNDSETPOS](SNDSETPOS.md)  , [_SNDGETPOS](SNDGETPOS.md) 
*  [_SNDPLAYING](SNDPLAYING.md)  , [_SNDPAUSED](SNDPAUSED.md) 
*  [_SNDCOPY](SNDCOPY.md)  , [_SNDPLAYCOPY](SNDPLAYCOPY.md) 
*  [_SNDBAL](SNDBAL.md)  , [_SNDLEN](SNDLEN.md)  , [_SNDVOL](SNDVOL.md) 
*  [_SNDPLAYFILE](SNDPLAYFILE.md) 
*  [_SNDRAW](SNDRAW.md)  , [_SNDRATE](SNDRATE.md)  , [_SNDRAWLEN](SNDRAWLEN.md) 
*  [_MEMSOUND](MEMSOUND.md) 

</blockquote>
