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

## [_SNDOPEN-v0.954](SNDOPEN-v0.954.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SNDOPEN-v0.954)
---
<blockquote>

### 

</blockquote>

#### SYNTAX

<blockquote>

`sound_handle& = _SNDOPEN ( filename$ [, "[VOL][,][SYNC][,][LEN][,][PAUSE][,][SETPOS]"])`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Sound file support for: WAV, OGG, AIFF, RIFF, VOC, MP3, [MOD](MOD.md) , MIDI
*  Capabilities of VOL, [LEN](LEN.md) , SYNC, SETPOS and PAUSE is a string of parameters separated by commas. It is [NOT](NOT.md)  case sensitive.
*  The value returned by [_SNDOPEN](SNDOPEN.md)  is a handle to the sound or 0. A zero return means the sound could [NOT](NOT.md)  be loaded. ALWAYS check the handle value returned before attempting to play them!
*  The handle can be used by most of the SND sound playing Functions and Subs in QB64 except [_SNDPLAYFILE](SNDPLAYFILE.md)  which plays a sound file name directly and does not use a handle value.
*  Handles can be closed with [_SNDCLOSE](SNDCLOSE.md)  when the sound is no longer necessary.
*  An ILLEGAL [FUNCTION](FUNCTION.md) [CALL](CALL.md)  error message means the capabilities$ string was invalid or two NON-SYNC sounds are using the same channel!


</blockquote>

#### EXAMPLES

<blockquote>

```vb
QB64 supports the following sound file formats (Bold is a guaranteed capability):

WAV = "VOL,SYNC,LEN,PAUSE"      Free WAV to OGG GUI converter
OGG = "VOL,SYNC,LEN,PAUSE"      Free WAV to OGG converter
AIF = "VOL,SYNC,LEN,PAUSE"
RIF = "VOL,SYNC,LEN,PAUSE"
VOC = "VOL,SYNC,LEN,PAUSE"
MID = "VOL"
MOD = "VOL,PAUSE"
MP3 = "VOL,PAUSE,SETPOS"        Free WMA, MP3 and OGG converter

Note: _SNDBAL only affects MP3 volume. Sound will reside in main channel.
```
  
<br>```vb
Capability Descriptions

"VOL" can change the volume or balance of the sound using _SNDVOL and _SNDBAL.
"LEN" can get the length of the sound using the _SNDLEN function.
"PAUSE" can pause the sound using _SNDPAUSE and the _SNDPAUSED function can check it.
"SETPOS" can change the position the sound is (or will be) playing from. See _SNDSETPOS.
"SYNC" can load the sound onto a unique channel, to be played simultaneously with others.

When SYNC is not specified, the sound is loaded onto the primary channel.
```
  
<br>```vb
h& = _SNDOPEN("dog.wav","sync,vol")       'only use the capabilities of that file type
IF h& = 0 THEN BEEP ELSE _SNDPLAY h&      'check for valid handle before using!
```
  
<br>```vb
Laff& = _SNDOPEN("KONGlaff.ogg", "SYNC,VOL") 'load sound file and get LONG handle value
IF LaffX! < -1 THEN LaffX! = -1   'set full volume to left speaker
IF LaffX! > 1 THEN LaffX! = 1     'set full volume to right speaker

_SNDBAL Laff&, LaffX!             'balance sound to left or right speaker
_SNDPLAY Laff&                    'play sound
```
  
<br>
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
