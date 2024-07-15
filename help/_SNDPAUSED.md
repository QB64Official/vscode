# _SNDPAUSED

The _SNDPAUSED function checks if a sound is paused. Uses a handle parameter passed from [_SNDOPEN](_SNDOPEN.md).

  

## Syntax

*isPaused%%* = _SNDPAUSED(*handle&*)
  

## Description

* Returns true (-1) if the sound is paused. False (0) if not paused.

  

## Examples

``` [PRINT](PRINT.md) _SNDPAUSED(h&)  
```

  

## See also

* [_SNDPAUSE](_SNDPAUSE.md), [_SNDPLAY](_SNDPLAY.md)
* [_SNDSTOP](_SNDSTOP.md)

  
