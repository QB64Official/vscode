## _SNDSETPOS
---

### The _SNDSETPOS statement changes the current/starting playing position in seconds of a sound.

#### SYNTAX

`_SNDSETPOS handle& , position!`

#### DESCRIPTION
* Changes the current/starting playing position in seconds (a [SINGLE](./SINGLE.md) value) of a sound in memory.
* If position! is past the length of the sound, playback will be interrupted.
* Function cannot be called while a looping sound is being played (see [_SNDLOOP](./_SNDLOOP.md) ).
* In versions prior to build 20170811/60 , the sound identified by handle& must have been opened using the "SETPOS" capability to use this statement.


#### EXAMPLES
##### Example: To check the current playing position in an MP3 file, use _SNDPLAY with _SNDGETPOS printed in a loop
```vb
SoundFile& = _SNDOPEN("YourSoundFile.mp3") '<<< your MP3 sound file here!
_SNDSETPOS SoundFile&, 5.5   'set to play sound 5 1/2 seconds into music
_SNDPLAY SoundFile&  'play sound
Do: _LIMIT 60
  LOCATE 5, 2: PRINT "Current play position> "; _SNDGETPOS(SoundFile&)
LOOP UNTIL _KEYDOWN(27) OR NOT _SNDPLAYING(SoundFile&) 'ESC or end of sound exit
```
  


#### SEE ALSO
* [_SNDGETPOS](./_SNDGETPOS.md) , [_SNDLEN](./_SNDLEN.md)
* [_SNDOPEN](./_SNDOPEN.md) , [_SNDLIMIT](./_SNDLIMIT.md)
