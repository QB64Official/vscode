# _SNDLEN

The _SNDLEN function returns the length in seconds of a loaded sound using a handle from the [_SNDOPEN](_SNDOPEN.md) function.

  

## Syntax

*soundLength* = _SNDLEN(*handle&*)
  

## Description

* Returns the length of a sound in seconds.
* In versions **prior to build 20170811/60**, the sound identified by *handle&* must have been opened using the ["LEN" capability]("LEN" capability.md) to use this function.

  

## See also

* [_SNDCOPY](_SNDCOPY.md), [_SNDLIMIT](_SNDLIMIT.md)

  
