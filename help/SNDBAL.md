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


## [_SNDBAL](SNDBAL.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SNDBAL)
---
<blockquote>

### The _SNDBAL statement attempts to set the balance or 3D position of a sound.

</blockquote>

#### SYNTAX

<blockquote>

`_SNDBAL handle& [, x! ][, y! ][, z! ][, channel& ]`

</blockquote>

#### PARAMETERS

<blockquote>


* handle& is a valid sound handle created by the [_SNDOPEN](SNDOPEN.md) function.
* x! distance values go from left (negative) to right (positive).
* y! distance values go from below (negative) to above (positive).
* z! distance values go from behind (negative) to in front (positive).
* channel& value 1 denotes left (mono) and 2 denotes right (stereo) channel (beginning with build 20170811/60 )
* The ability to set the balance per channel is gone in version 3.1.0 and higher.
</blockquote>

#### DESCRIPTION

<blockquote>


* Attempts to position a sound in 3D space, or as close to it as the underlying software libraries allow. In some cases, this will be true 3D positioning, in others, a mere volume adjustment based on distance alone.
* Omitted x!, y! or z! [SINGLE](SINGLE.md) values are set to 0 or not changed in build 20170811/60 onward .
* By setting the x! value to -1 or 1 it plays the sound at full volume from the appropriate speaker.
* Sounds at a distance of 1 or -1 are played at full volume. Sounds further than a distance of 1000 cannot be heard.
* The volume decreases linearly (at a constant gradient) over distance. Half volume = 500.
* An " Illegal Function Call " error can occur if another sound is using the primary or same channel position.
* Opened sound files must have the "VOL" capability to use this statement in versions before build 20170811/60.
* Version 3.1.0 enables this for "raw" sounds.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: This example loads, plays, and then bounces the sound between the left and right channels.
```vb
' This examples load, plays and then bounces the sound between the left and right channels
Laff& = _SNDOPEN("KONGlaff.ogg", "stream") 'load sound file and get LONG handle value
IF Laff& > 0 THEN
_SNDPLAY Laff& 'play sound
ELSE
PRINT "Failed to load sound file."
END
END IF

PRINT "Press ESC to stop."
dir = 0.01
DO
IF laffx! <= -1 THEN dir = 0.01
IF laffx! >= 1 THEN dir = -0.01
laffx! = laffx! + dir

LOCATE , 1: PRINT USING "Balance = ##.##"; laffx!;
_SNDBAL Laff&, laffx! 'balance sound to left or right speaker

_LIMIT 60
LOOP WHILE _SNDPLAYING(Laff&) AND _KEYHIT <> 27
```
  
<br>



##### Example: Loading a sound after build 20170811/60 - no need to specify "sound capabilities" in _SNDOPEN .
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


* [_SNDOPEN](SNDOPEN.md) , [_SNDOPENRAW](SNDOPENRAW.md)
* [_SNDVOL](SNDVOL.md) , [_SNDLIMIT](SNDLIMIT.md)
</blockquote>
