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

## [_SNDOPEN](SNDOPEN.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SNDOPEN)
---
<blockquote>

### The _SNDOPEN function loads a sound file into memory and returns a LONG handle value above 0.

</blockquote>

#### SYNTAX

<blockquote>

`soundHandle& = _SNDOPEN ( fileName$ [, capabilities$ ])`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Returns a [LONG](LONG.md)  soundHandle& value to the sound file in memory. A value of zero means the sound could not be loaded.
*  The literal or variable [STRING](STRING.md)  sound fileName$ can be WAV, AIFF, AIFC, FLAC, OGG, MP3, IT, XM, S3M, [MOD](MOD.md) , RAD, AHX, HVL, MUS, HMI, HMP, HMQ, KAR, LDS, MDS, MIDS, RCP, R36, G18, G36, RMI, MID, MIDI, XFM, XMI & QOA file types.
*  The literal or variable [STRING](STRING.md)  capabilities$ is optional but can be one of the following. Anything else is ignored. Multiple capability strings can be specified separated by a comma.
	* NODECODE : This loads the sound into memory without decompressing it. Decompression is performed in small blocks at the final mixing stage.
	* STREAM : This will stream the sound into memory in small blocks instead of loading it entirely. Using NODECODE with STREAM will postpone the block's decoding until the final mixing phase.
	* NOASYNC : This option will block the caller until the entire sound (or a portion, if STREAM is utilized) is loaded and prepared in memory.
	* MEMORY : This will treat fileName$ as a memory buffer containing the sound file instead of a file name.
*  Short sounds should not be loaded using STREAM . Use STREAM when you want to play long sounds as background music.
*  [_MEMSOUND](MEMSOUND.md)  will not work for sounds loaded using STREAM , NODECODE [OR](OR.md)  MEMORY .
*  Always check the handle value returned is greater than zero before attempting to play the sound.
*  The handle can be used by most of the _SND sound playing functions and statements in QB64 except [_SNDPLAYFILE](SNDPLAYFILE.md)  which plays a sound file directly from the disk and does not use a handle value.
*  Handles can be closed with [_SNDCLOSE](SNDCLOSE.md)  when the sound is no longer necessary.
*  If a WAV sound file won't play, try it using the Windows Play WAV sounds library to check it or convert the sound file to FLAC, OGG or MP3.
*  MIDI files can be played using a built-in 108 channel OPL3 FM emulation, which [IS](IS.md)  ideal for retro-style music playback. Additionally, MIDI files can also be played using other FM Banks and SoundFonts. For more information, refer to [_MIDISOUNDBANK](MIDISOUNDBANK.md)  .


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

</blockquote>
