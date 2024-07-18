## _SNDPLAYFILE
---

### The _SNDPLAYFILE statement is used to play a sound file without generating a handle, automatically closing it after playback finishes.

#### SYNTAX

`_SNDPLAYFILE filename$ [, ignored% ][, volume! ]`

#### DESCRIPTION
* Supported file formats are WAV, FLAC, OGG, MP3, MID, IT, XM, S3M, [MOD](./MOD.md) or RAD (v2 only) . See [_SNDOPEN](./_SNDOPEN.md) .
* ignored% is an optional parameter , accepted for historical reasons.
	* In versions prior to build 20170811/60 , ignored% identified if a sound was to be loaded with "SYNC" capabilities , (-1 for true, 0 for false). This is true for all sound files in the latest versions, making this parameter safe to be ignored.
* volume! is a [SINGLE](./SINGLE.md) value from 0 (silence) to 1 (full volume). If not used or outside this range, the sound will be played at full volume.
* [_SNDPLAYFILE](./_SNDPLAYFILE.md) never creates an error. If the sound cannot be played it takes no further action.
* The sound is closed automatically after it finishes playing.
* When a sound will be used often, open the file with [_SNDOPEN](./_SNDOPEN.md) and use [_SNDPLAYCOPY](./_SNDPLAYCOPY.md) to play the handle instead to reduce the burden on the computer.


#### EXAMPLES
##### Example: Playing a sound file at half volume.
```vb
_SNDPLAYFILE "dog.wav", , .5
```
  


#### SEE ALSO
* [_SNDOPEN](./_SNDOPEN.md) , [_SNDPLAY](./_SNDPLAY.md)
* [_SNDPLAYCOPY](./_SNDPLAYCOPY.md)
