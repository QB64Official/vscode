# _SNDRAWDONE

_SNDRAWDONE ensures that the final buffer portion is played in short sound effects even if it is incomplete.

  

## Syntax

_SNDRAWDONE [*pipeHandle&*]
  

## Parameters

* The optional *pipeHandle&* parameter refers to the sound pipe opened using [_SNDOPENRAW](_SNDOPENRAW.md).

  

## Description

* Use to force playing small buffers of [_SNDRAW](_SNDRAW.md) data.

  

## Availability

* **QB64 v1.0 and up**
* **QB64-PE all versions**

  

## See also

* [_SNDOPENRAW](_SNDOPENRAW.md)
* [_SNDRAW](_SNDRAW.md)
* [_SNDRAWLEN](_SNDRAWLEN.md)
* [_SNDRATE](_SNDRATE.md)

  
