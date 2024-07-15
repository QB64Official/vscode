# _SNDPLAYCOPY

The _SNDPLAYCOPY statement copies a sound, plays it, and automatically closes the copy using a handle parameter passed from [_SNDOPEN](_SNDOPEN.md) or [_SNDCOPY](_SNDCOPY.md)

  

## Syntax

_SNDPLAYCOPY *handle&*[, [*volume!*][, *x!*][, *y!*][, *z!*
  

## Parameters

* The [LONG](, *z!*
  

## Parameters

* The [LONG.md) *handle&* value is returned by [_SNDOPEN](_SNDOPEN.md) using a specific sound file.
* The *volume!* parameter can be any [SINGLE](SINGLE.md) value from 0 (no volume) to 1 (full volume).
* *x!* distance values go from left (negative) to right (positive) (beginning with **v3.3.x**).
* *y!* distance values go from below (negative) to above (positive) (beginning with **v3.3.x**).
* *z!* distance values go from behind (negative) to in front (positive) (beginning with **v3.3.x**).

  

## Description

* Makes coding easier by doing all of the following automatically:

1. Copies/duplicates the source handle (see [_SNDCOPY](_SNDCOPY.md)).
2. Changes the volume of the copy if volume is passed.
3. Applies stereo panning or a 3D position if x, y, z is passed.
4. Plays the copy.
5. Closes the copy.

* This statement is a better choice than [_SNDPLAYFILE](_SNDPLAYFILE.md) if the sound will be played often, reducing the burden on the computer.
* By setting the x! value to -1 or 1 it plays the sound at full volume from the appropriate speaker.
* Omitted x!, y! or z! values are set to 0.

  

## Examples

*Example 1:* Playing a previously opened sound from left and right speakers.

``` [DIM](DIM.md) [AS](AS.md) [LONG](LONG.md) h, i  h = [_SNDOPEN](_SNDOPEN.md)("explosion.wav")  [IF](IF.md) h > 0 [THEN](THEN.md)     [FOR](FOR.md) i = 0 [TO](TO.md) 9         [_LIMIT](_LIMIT.md) 1          [IF](IF.md) i [MOD](MOD.md) 2 = 0 [THEN](THEN.md)             [PRINT](PRINT.md) "Playing from right"             _SNDPLAYCOPY h, , 1         [ELSE](ELSE.md)             [PRINT](PRINT.md) "Playing from left"             _SNDPLAYCOPY h, , -1         [END IF](END IF.md)     [NEXT](NEXT.md) [END IF](END IF.md)  
```

  

*Example 2:* Playing a sound at random volumes.

``` chomp& = [_SNDOPEN](_SNDOPEN.md)("chomp.wav") [IF](IF.md) chomp& > 0 [THEN](THEN.md) _SNDPLAYCOPY chomp&, 0.5 + [RND](RND.md) * 0.49  
```

  

## See also

* [_SNDOPEN](_SNDOPEN.md)
* [_SNDCOPY](_SNDCOPY.md)
* [_SNDPLAYFILE](_SNDPLAYFILE.md)

  
