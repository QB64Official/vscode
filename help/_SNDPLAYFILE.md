# _SNDPLAYFILE

The _SNDPLAYFILE statement is used to play a sound file without generating a handle, automatically closing it after playback finishes.

  

## Syntax

_SNDPLAYFILE *filename$*[, *ignored%*][, *volume!*]
  

## Description

* Supported file formats are **WAV, FLAC, OGG, MP3, MID, IT, XM, S3M, MOD or RAD (v2 only)**. See [_SNDOPEN](_SNDOPEN.md).
* *ignored%* is an optional parameter , accepted for historical reasons.
	+ In versions prior to **build 20170811/60**, *ignored%* identified if a sound was to be loaded with ["SYNC" capabilities]("SYNC" capabilities.md), (-1 for true, 0 for false). This is true for all sound files in the latest versions, making this parameter safe to be ignored.
* *volume!* is a [SINGLE](SINGLE.md) value from 0 (silence) to 1 (full volume). If not used or outside this range, the sound will be played at full volume.
* _SNDPLAYFILE never creates an error. If the sound cannot be played it takes no further action.
* The sound is closed automatically after it finishes playing.
* When a sound will be used often, open the file with [_SNDOPEN](_SNDOPEN.md) and use [_SNDPLAYCOPY](_SNDPLAYCOPY.md) to play the handle instead to reduce the burden on the computer.

  

## Examples

*Example:* Playing a sound file at half volume.

``` _SNDPLAYFILE "dog.wav", , .5  
```

  

## See also

* [_SNDOPEN](_SNDOPEN.md), [_SNDPLAY](_SNDPLAY.md)
* [_SNDPLAYCOPY](_SNDPLAYCOPY.md)

  
