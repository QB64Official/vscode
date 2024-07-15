# _SNDLOOP

The _SNDLOOP statement is like [_SNDPLAY](_SNDPLAY.md) but the sound is looped. Uses a handle from the [_SNDOPEN](_SNDOPEN.md) function.

  

## Syntax

_SNDLOOP *handle&*
  

## Description

* Plays the sound identified by *handle&* in a loop.

  

## Examples

*Example:* Loading a sound or music file and playing it in a loop until a key is pressed.

``` bg = [_SNDOPEN](_SNDOPEN.md)("back.ogg") '<<<<<<<<<< change to your sound file name _SNDLOOP bg  DO     [_LIMIT](_LIMIT.md) 10   'keep CPU resources used low [LOOP](LOOP.md) [UNTIL](UNTIL.md) [INKEY$](INKEY$.md) <> "" 'key press program exit [_SNDSTOP](_SNDSTOP.md) bg [_SNDCLOSE](_SNDCLOSE.md) bg  
```

  

## See also

* [_SNDOPEN](_SNDOPEN.md), [_SNDSTOP](_SNDSTOP.md)

  
