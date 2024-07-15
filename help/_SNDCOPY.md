# _SNDCOPY

The _SNDCOPY function copies a sound to a new handle so that two or more of the same sound can be played at once. The passed handle parameter is from the [_SNDOPEN](_SNDOPEN.md) function.

  

## Syntax

*copyHandle&* = _SNDCOPY(*handle&*)
  

## Description

* Returns a new handle to the a copy in memory of the sound data referred to by the source handle.
* No changes to the source handle (such as a volume change) are inherited.
* The sound data referred to by the handle and its copies are not freed until all of them are closed.
* In versions **prior to build 20170811/60**, the sound identified by *handle&* must have been opened using the ["SYNC" capability]("SYNC" capability.md) to use this function.

  

## See also

* [_SNDPLAYCOPY](_SNDPLAYCOPY.md)
* [_SNDOPEN](_SNDOPEN.md)

  
