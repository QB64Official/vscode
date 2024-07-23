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


## [_SNDPLAYFILE](SNDPLAYFILE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SNDPLAYFILE)
---
<blockquote>

### The _SNDPLAYFILE statement is used to play a sound file without generating a handle, automatically closing it after playback finishes.

</blockquote>

#### SYNTAX

<blockquote>

`_SNDPLAYFILE filename$ [, ignored% ][, volume! ]`

</blockquote>

#### DESCRIPTION

<blockquote>


* Supported file formats are WAV, FLAC, OGG, MP3, MID, IT, XM, S3M, [MOD](MOD.md) or RAD (v2 only) . See [_SNDOPEN](SNDOPEN.md) .
* ignored% is an optional parameter , accepted for historical reasons.
* In versions prior to build 20170811/60 , ignored% identified if a sound was to be loaded with "SYNC" capabilities , (-1 for true, 0 for false). This is true for all sound files in the latest versions, making this parameter safe to be ignored.
* volume! is a [SINGLE](SINGLE.md) value from 0 (silence) to 1 (full volume). If not used or outside this range, the sound will be played at full volume.
* [_SNDPLAYFILE](SNDPLAYFILE.md) never creates an error. If the sound cannot be played it takes no further action.
* The sound is closed automatically after it finishes playing.
* When a sound will be used often, open the file with [_SNDOPEN](SNDOPEN.md) and use [_SNDPLAYCOPY](SNDPLAYCOPY.md) to play the handle instead to reduce the burden on the computer.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Playing a sound file at half volume.
```vb
_SNDPLAYFILE "dog.wav", , .5
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_SNDOPEN](SNDOPEN.md) , [_SNDPLAY](SNDPLAY.md)
* [_SNDPLAYCOPY](SNDPLAYCOPY.md)
</blockquote>
