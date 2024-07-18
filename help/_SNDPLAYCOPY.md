## _SNDPLAYCOPY
---

### The _SNDPLAYCOPY statement copies a sound, plays it, and automatically closes the copy using a handle parameter passed from _SNDOPEN or _SNDCOPY

#### SYNTAX

`_SNDPLAYCOPY handle& [, [ volume! ][, x! ][, y! ][, z! ]]`

#### PARAMETERS
* The [LONG](./LONG.md) handle& value is returned by [_SNDOPEN](./_SNDOPEN.md) using a specific sound file.
* The volume! parameter can be any [SINGLE](./SINGLE.md) value from 0 (no volume) to 1 (full volume).
* x! distance values go from left (negative) to right (positive) (beginning with v3.3.x ).
* y! distance values go from below (negative) to above (positive) (beginning with v3.3.x ).
* z! distance values go from behind (negative) to in front (positive) (beginning with v3.3.x ).


#### DESCRIPTION
* Makes coding easier by doing all of the following automatically:


#### EXAMPLES
##### Example 1: Playing a previously opened sound from left and right speakers.
```vb
DIM AS LONG h, i

h = _SNDOPEN("explosion.wav")

IF h > 0 THEN
   FOR i = 0 TO 9
       _LIMIT 1

       IF i MOD 2 = 0 THEN
           PRINT "Playing from right"
           _SNDPLAYCOPY h, , 1
       ELSE
           PRINT "Playing from left"
           _SNDPLAYCOPY h, , -1
       END IF
   NEXT
END IF
```
  
##### Example 2: Playing a sound at random volumes.
```vb
chomp& = _SNDOPEN("chomp.wav")
IF chomp& > 0 THEN _SNDPLAYCOPY chomp&, 0.5 + RND * 0.49
```
  


#### SEE ALSO
* [_SNDOPEN](./_SNDOPEN.md)
* [_SNDCOPY](./_SNDCOPY.md)
* [_SNDPLAYFILE](./_SNDPLAYFILE.md)
