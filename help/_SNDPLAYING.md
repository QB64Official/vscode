# _SNDPLAYING

The _SNDPLAYING function returns whether a sound is being played. Uses a handle from the [_SNDOPEN](_SNDOPEN.md) or [_SNDCOPY](_SNDCOPY.md) functions.

  

## Syntax

*isPlaying%* = _SNDPLAYING(*handle&*)
  

## Description

* Returns false (0) if a sound is not playing or true (-1) if it is.
* If a sound is paused, _SNDPLAYING returns 0.

  

## Examples

``` [PRINT](PRINT.md) _SNDPLAYING(h&)  
```

  

## See also

* [_SNDPLAY](_SNDPLAY.md), [_SNDPAUSE](_SNDPAUSE.md), [_SNDSTOP](_SNDSTOP.md)
* [_SNDPAUSED](_SNDPAUSED.md)

  
