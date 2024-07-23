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


## [_SNDSETPOS](SNDSETPOS.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SNDSETPOS)
---
<blockquote>

### The _SNDSETPOS statement changes the current/starting playing position in seconds of a sound.

</blockquote>

#### SYNTAX

<blockquote>

`_SNDSETPOS handle& , position!`

</blockquote>

#### DESCRIPTION

<blockquote>


* Changes the current/starting playing position in seconds (a [SINGLE](SINGLE.md) value) of a sound in memory.
* If position! is past the length of the sound, playback will be interrupted.
* Function cannot be called while a looping sound is being played (see [_SNDLOOP](SNDLOOP.md) ).
* In versions prior to build 20170811/60 , the sound identified by handle& must have been opened using the "SETPOS" capability to use this statement.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: To check the current playing position in an MP3 file, use _SNDPLAY with _SNDGETPOS printed in a loop
```vb
SoundFile& = _SNDOPEN("YourSoundFile.mp3") '<<< your MP3 sound file here!
_SNDSETPOS SoundFile&, 5.5   'set to play sound 5 1/2 seconds into music
_SNDPLAY SoundFile&  'play sound
Do: _LIMIT 60
LOCATE 5, 2: PRINT "Current play position> "; _SNDGETPOS(SoundFile&)
LOOP UNTIL _KEYDOWN(27) OR NOT _SNDPLAYING(SoundFile&) 'ESC or end of sound exit
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_SNDGETPOS](SNDGETPOS.md) , [_SNDLEN](SNDLEN.md)
* [_SNDOPEN](SNDOPEN.md) , [_SNDLIMIT](SNDLIMIT.md)
</blockquote>
