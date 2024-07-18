## _SNDRAWDONE
---

### _SNDRAWDONE ensures that the final buffer portion is played in short sound effects even if it is incomplete.

#### SYNTAX

`_SNDRAWDONE [ pipeHandle& ]`

#### PARAMETERS
* The optional pipeHandle& parameter refers to the sound pipe opened using [_SNDOPENRAW](./_SNDOPENRAW.md) .


#### DESCRIPTION
* Use to force playing small buffers of [_SNDRAW](./_SNDRAW.md) data.


#### SEE ALSO
* [_SNDOPENRAW](./_SNDOPENRAW.md)
* [_SNDRAW](./_SNDRAW.md)
* [_SNDRAWLEN](./_SNDRAWLEN.md)
* [_SNDRATE](./_SNDRATE.md)
