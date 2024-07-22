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

*  handle& is a valid sound handle created by the [_SNDOPEN](SNDOPEN.md)  function.
*  x! distance values go from left (negative) to right (positive).
*  y! distance values go from below (negative) to above (positive).
*  z! distance values go from behind (negative) to in front (positive).
*  channel& value 1 denotes left (mono) and 2 denotes right (stereo) channel (beginning with build 20170811/60 )
	* The ability to set the balance per channel is gone in version 3.1.0 and higher.

</blockquote>

#### DESCRIPTION

<blockquote>

*  Attempts to position a sound in 3D space, or as close to it as the underlying software libraries allow. In some cases, this will be true 3D positioning, in others, a mere volume adjustment based on distance alone.
*  Omitted x!, y! or z! [SINGLE](SINGLE.md)  values are set to 0 or not changed in build 20170811/60 onward .
*  By setting the x! value to -1 or 1 it plays the sound at full volume from the appropriate speaker.
*  Sounds at a distance of 1 or -1 are played at full volume. Sounds further than a distance of 1000 cannot be heard.
*  The volume decreases linearly (at a constant gradient) over distance. Half volume = 500.
*  An " Illegal Function Call " error can occur if another sound is using the primary or same channel position.
*  Opened sound files must have the "VOL" capability to use this statement in versions before build 20170811/60.
*  Version 3.1.0 enables this for "raw" sounds.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_SNDOPEN](SNDOPEN.md)  , [_SNDOPENRAW](SNDOPENRAW.md) 
*  [_SNDVOL](SNDVOL.md)  , [_SNDLIMIT](SNDLIMIT.md) 

</blockquote>
