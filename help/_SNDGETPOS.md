# _SNDGETPOS

The _SNDGETPOS function returns the current playing position in seconds using a handle from [_SNDOPEN](_SNDOPEN.md).

  

## Syntax

*position* = _SNDGETPOS(*handle&*)
  

## Description

* Returns the current playing position in seconds from an open sound file.
* If a sound isn't playing, it returns 0.
* If a sound is paused, it returns the paused position.
* For a looping sound, the value returned continues to increment and does not reset to 0 when the sound loops.
* In versions **prior to build 20170811/60**, the sound identified by *handle&* must have been opened using the ["SETPOS" capability]("SETPOS" capability.md) to use this function.

  

## Examples

*Example:* To check the current playing position in an MP3 file, use [_SNDPLAY](_SNDPLAY.md) with _SNDGETPOS printed in a loop:

``` SoundFile& = [_SNDOPEN](_SNDOPEN.md)("YourSoundFile.mp3") '<<< your MP3 sound file here! [_SNDSETPOS](_SNDSETPOS.md) SoundFile&, 5.5   'set to play sound 5 1/2 seconds into music [_SNDPLAY](_SNDPLAY.md) SoundFile&  'play sound Do: [_LIMIT](_LIMIT.md) 60    LOCATE 5, 2: PRINT "Current play position> "; _SNDGETPOS(SoundFile&) LOOP UNTIL [_KEYDOWN](_KEYDOWN.md)(27) OR [NOT](NOT.md) [_SNDPLAYING](_SNDPLAYING.md)(SoundFile&) 'ESC or end of sound exit  
```

  

## See also

* [_SNDSETPOS](_SNDSETPOS.md)
* [_SNDOPEN](_SNDOPEN.md)

  
