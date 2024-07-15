# _SNDBAL

The _SNDBAL statement attempts to set the balance or 3D position of a sound.

  

## Syntax

_SNDBAL *handle&*[, *x!*][, *y!*][, *z!*][, *channel&*]
  

## Parameters

* *handle&* is a valid sound handle created by the [_SNDOPEN](_SNDOPEN.md) function.
* *x!* distance values go from left (negative) to right (positive).
* *y!* distance values go from below (negative) to above (positive).
* *z!* distance values go from behind (negative) to in front (positive).
* *channel&* value 1 denotes left (mono) and 2 denotes right (stereo) channel (beginning with **build 20170811/60**)
	+ The ability to set the balance per channel is gone in version **3.1.0** and higher.

  

## Description

* Attempts to position a sound in 3D space, or as close to it as the underlying software libraries allow. In some cases, this will be true 3D positioning, in others, a mere volume adjustment based on distance alone.
* Omitted x!, y! or z! [SINGLE](SINGLE.md) values are set to 0 or not changed in **build 20170811/60 onward**.
* By setting the x! value to -1 or 1 it plays the sound at full volume from the appropriate speaker.
* Sounds at a distance of 1 or -1 are played at full volume. Sounds further than a distance of 1000 cannot be heard.
* The volume decreases linearly (at a constant gradient) over distance. Half volume = 500.
* An "**Illegal Function Call**" error can occur if another sound is using the primary or same channel position.
* Opened sound files must have the ["VOL"]("VOL".md) capability to use this statement in versions **before build 20170811/60.**
* Version **3.1.0** enables this for **"raw"** sounds.

  

## Examples

*Example 1:* This example loads, plays, and then bounces the sound between the left and right channels.

``` ' This examples load, plays and then bounces the sound between the left and right channels Laff& = [_SNDOPEN](_SNDOPEN.md)("KONGlaff.ogg", "stream") 'load sound file and get LONG handle value [IF](IF.md) Laff& > 0 [THEN](THEN.md)     [_SNDPLAY](_SNDPLAY.md) Laff& 'play sound [ELSE](ELSE.md)     [PRINT](PRINT.md) "Failed to load sound file."     [END](END.md) [END](END.md) [IF](IF.md)  [PRINT](PRINT.md) "Press ESC to stop." dir = 0.01 [DO](DO.md)     [IF](IF.md) laffx! <= -1 [THEN](THEN.md) dir = 0.01     [IF](IF.md) laffx! >= 1 [THEN](THEN.md) dir = -0.01     laffx! = laffx! + dir      [LOCATE](LOCATE.md) , 1: [PRINT USING](PRINT USING.md) "Balance = ##.##"; laffx!;     _SNDBAL Laff&, laffx! 'balance sound to left or right speaker      [_LIMIT](_LIMIT.md) 60 [LOOP](LOOP.md) [WHILE](WHILE.md) [_SNDPLAYING](_SNDPLAYING.md)(Laff&) [AND](AND.md) [_KEYHIT](_KEYHIT.md) <> 27  
```

  

*Example:* Loading a sound after **build 20170811/60** - no need to specify "sound capabilities" in [_SNDOPEN](_SNDOPEN.md).

``` s& = [_SNDOPEN](_SNDOPEN.md)("song.ogg") [PRINT](PRINT.md) "[READ](READ.md)Y"; s& [_SNDPLAY](_SNDPLAY.md) s& [_SNDLOOP](_SNDLOOP.md) s&   xleft = -1 xright = 1 DO     k$ = [INKEY$](INKEY$.md)     [SELECT CASE](SELECT CASE.md) k$         [CASE](CASE.md) "f"             xleft = xleft - 0.1             _SNDBAL s&, xleft, , , 1         [CASE](CASE.md) "g"             xleft = xleft + 0.1             _SNDBAL s&, xleft, , , 1         [CASE](CASE.md) "h"             xright = xright - 0.1             _SNDBAL s&, xright, , , 2         [CASE](CASE.md) "j"             xright = xright + 0.1             _SNDBAL s&, xright, , , 2         [CASE](CASE.md) "n"             volume = volume - 0.1             [_SNDVOL](_SNDVOL.md) s&, volume         [CASE](CASE.md) "m"             volume = volume + 0.1             [_SNDVOL](_SNDVOL.md) s&, volume         [CASE](CASE.md) "p"             [_SNDPAUSE](_SNDPAUSE.md) s&         [CASE](CASE.md) " "             [_SNDPLAY](_SNDPLAY.md) s&         [CASE](CASE.md) "i"             [PRINT](PRINT.md) [_SNDPLAYING](_SNDPLAYING.md)(s&)             [PRINT](PRINT.md) [_SNDPAUSED](_SNDPAUSED.md)(s&)             [SLEEP](SLEEP.md)         [CASE](CASE.md) "b"             [_SNDSETPOS](_SNDSETPOS.md) s&, 110         [CASE](CASE.md) "l"             [_SNDLIMIT](_SNDLIMIT.md) s&, 10             [PRINT](PRINT.md) "LIM"             [SLEEP](SLEEP.md)         [CASE](CASE.md) "k"             [_SNDSTOP](_SNDSTOP.md) s&         [CASE](CASE.md) "c"             [_SNDCLOSE](_SNDCLOSE.md) s&             [SLEEP](SLEEP.md)             s2& = [_SNDOPEN](_SNDOPEN.md)("song.ogg")         [CASE](CASE.md) "d"             s2& = [_SNDCOPY](_SNDCOPY.md)(s&)             [_SNDPLAY](_SNDPLAY.md) s2&     [END SELECT](END SELECT.md)     [LOCATE](LOCATE.md) 1, 1     [PRINT](PRINT.md) xleft, xright, volume, [_SNDGETPOS](_SNDGETPOS.md)(s&); "   " LOOP  
```

  

## See also

* [_SNDOPEN](_SNDOPEN.md), [_SNDOPENRAW](_SNDOPENRAW.md)
* [_SNDVOL](_SNDVOL.md), [_SNDLIMIT](_SNDLIMIT.md)

  
