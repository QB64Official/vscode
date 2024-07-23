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
    margin: 0 0 0.5em 0  !important;
    color: #88f !important;
    border: 0 !important;
    font-style: italic !important;
    font-weight: normal !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 4px !important; 
    border: 1px solid #333 !important;
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
    border-radius: 4px !important;
    background: #000 !important;
    border: 1px solid #333 !important;
    margin: 0 !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}
br + pre {
    border-radius: 0 !important;
    border-style: inset !important;
    border-width: 5px !important;
    border-color: #999 !important;
    background-color: #000 !important;
    box-shadow: 0px 10px 3px rgba(0, 0, 0, 0.25) !important;
    margin-top: -1em !important;
}
br + pre::before {
    content: "OUTPUT \A" !important;
    color: #555 !important;
    border-bottom: 1px solid #333;
    font-size: x-small;
    display: block !important;
    padding: 0 3px !important;
    margin: -1em -1em 1em -1em !important;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */    
}
br ~ h5 {
    margin-top: 2em !important;
}
.explanation {
    color: #995 !important;
    /* background-color: rgba(150, 150, 100) !important; */
    border-radius: 10em !important;
    border: 2px #441 dashed !important;
    padding: 8px 32px !important;
    margin-bottom: 4em !important;
    font-size: x-small !important;
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


* Returns a [LONG](LONG.md) soundHandle& value to the sound file in memory. A zero value means the sound could not be loaded.
* The literal or variable [STRING](STRING.md) sound fileName$ can be WAV, OGG or MP3 file types.
* Always check the handle value returned is greater than zero before attempting to play the sound.
* Make sure the variable is set to 0 before using _SNDOPEN.
* The handle can be used by most of the _SND sound playing functions and statements in QB64 except [_SNDPLAYFILE](SNDPLAYFILE.md) which plays a sound file directly from the disk and does not use a handle value.
* Handles can be closed with [_SNDCLOSE](SNDCLOSE.md) when the sound is no longer necessary.
* If a WAV sound file won't play, try it using the Windows Play WAV sounds library to check it or convert the sound file to OGG.
* The raw audio data can be accessed with [_MEMSOUND](MEMSOUND.md) .

</blockquote>

#### EXAMPLES

<blockquote>

```vb
h& = _SNDOPEN("dog.wav")
IF h& = 0 THEN BEEP ELSE _SNDPLAY h&      'check for valid handle before using!
```
  
<br>

```vb
Laff& = _SNDOPEN("KONGlaff.ogg") 'load sound file and get LONG handle value
IF LaffX! < -1 THEN LaffX! = -1   'set full volume to left speaker
IF LaffX! > 1 THEN LaffX! = 1     'set full volume to right speaker

_SNDBAL Laff&, LaffX!             'balance sound to left or right speaker
_SNDPLAY Laff&                    'play sound
```
  
<br>



##### Example: Playing a file and controlling playback:
```vb
s& = _SNDOPEN("song.ogg")
PRINT "READY"; s&
_SNDPLAY s&
_SNDLOOP s&


xleft = -1
xright = 1
DO
k$ = INKEY$
SELECT CASE k$
CASE "f"
xleft = xleft - 0.1
_SNDBAL s&, xleft, , , 1
CASE "g"
xleft = xleft + 0.1
_SNDBAL s&, xleft, , , 1
CASE "h"
xright = xright - 0.1
_SNDBAL s&, xright, , , 2
CASE "j"
xright = xright + 0.1
_SNDBAL s&, xright, , , 2
CASE "n"
volume = volume - 0.1
_SNDVOL s&, volume
CASE "m"
volume = volume + 0.1
_SNDVOL s&, volume
CASE "p"
_SNDPAUSE s&
CASE " "
_SNDPLAY s&
CASE "i"
PRINT _SNDPLAYING(s&)
PRINT _SNDPAUSED(s&)
SLEEP
CASE "b"
_SNDSETPOS s&, 110
CASE "l"
_SNDLIMIT s&, 10
PRINT "LIM"
SLEEP
CASE "k"
_SNDSTOP s&
CASE "c"
_SNDCLOSE s&
SLEEP
s2& = _SNDOPEN("song.ogg")
CASE "d"
s2& = _SNDCOPY(s&)
_SNDPLAY s2&
END SELECT
LOCATE 1, 1
PRINT xleft, xright, volume, _SNDGETPOS(s&); "   "
LOOP
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_SNDCLOSE](SNDCLOSE.md) , [_SNDPLAY](SNDPLAY.md) , [_SNDSTOP](SNDSTOP.md)
* [_SNDPAUSE](SNDPAUSE.md) , [_SNDLOOP](SNDLOOP.md) , [_SNDLIMIT](SNDLIMIT.md)
* [_SNDSETPOS](SNDSETPOS.md) , [_SNDGETPOS](SNDGETPOS.md)
* [_SNDPLAYING](SNDPLAYING.md) , [_SNDPAUSED](SNDPAUSED.md)
* [_SNDCOPY](SNDCOPY.md) , [_SNDPLAYCOPY](SNDPLAYCOPY.md)
* [_SNDBAL](SNDBAL.md) , [_SNDLEN](SNDLEN.md) , [_SNDVOL](SNDVOL.md)
* [_SNDPLAYFILE](SNDPLAYFILE.md)
* [_SNDRAW](SNDRAW.md) , [_SNDRATE](SNDRATE.md) , [_SNDRAWLEN](SNDRAWLEN.md)
* [_MEMSOUND](MEMSOUND.md)
</blockquote>
