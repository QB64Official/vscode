# _SNDCLOSE

The _SNDCLOSE statement frees and unloads an open sound using a [_SNDOPEN](_SNDOPEN.md) or [_SNDCOPY](_SNDCOPY.md) handle.

  

## Syntax

_SNDCLOSE *handle&*
  

## Description

* If the sound is still playing, it will be freed automatically after it finishes.
	+ Closing a looping/paused/etc. sound means it is never freed until the QB64 program terminates.
* When your QB64 program terminates, all sounds are automatically freed.

  

## See also

* [_SNDSTOP](_SNDSTOP.md), [_SNDPAUSE](_SNDPAUSE.md)

  
