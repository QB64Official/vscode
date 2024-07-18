## _SNDPLAYING
---

### The _SNDPLAYING function returns whether a sound is being played. Uses a handle from the _SNDOPEN or _SNDCOPY functions.

#### SYNTAX

`isPlaying% = _SNDPLAYING ( handle& )`

#### DESCRIPTION
* Returns false (0) if a sound is not playing or true (-1) if it is.
* If a sound is paused, [_SNDPLAYING](./_SNDPLAYING.md) returns 0.


#### EXAMPLES
```vb
PRINT _SNDPLAYING(h&)
```
  


#### SEE ALSO
* [_SNDPLAY](./_SNDPLAY.md) , [_SNDPAUSE](./_SNDPAUSE.md) , [_SNDSTOP](./_SNDSTOP.md)
* [_SNDPAUSED](./_SNDPAUSED.md)
