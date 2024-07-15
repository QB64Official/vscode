# _SNDRAWLEN

The _SNDRAWLEN function returns the length, in seconds, of a [_SNDRAW](_SNDRAW.md) sound currently queued.

  

## Syntax

*length#* = _SNDRAWLEN [*pipeHandle&*]
  

## Parameters

* The optional *pipeHandle&* parameter refers to the sound pipe opened using [_SNDOPENRAW](_SNDOPENRAW.md).

  

## Description

* Use _SNDRAWLEN to determine the length of a sound queue during creation and when to stop playing the sound.
* Ensure that _SNDRAWLEN is comfortably above 0 (until you've actually finished playing sound).
* If you are getting occasional random clicks, this generally means that _SNDRAWLEN has dropped to 0.
* The [_SNDRATE](_SNDRATE.md) determines how many samples are played per second. However, the timing is achieved by the sound card and _SNDRAWLEN, not your program.
* **Do not attempt to use [_TIMER](_TIMER.md) or [_DELAY](_DELAY.md) or [_LIMIT](_LIMIT.md) to control the timing of [_SNDRAW](_SNDRAW.md) sounds. You may use them as usual for delays or to limit your program's CPU usage, but the decision of how much sound to queue should only be based on the remaining _SNDRAWLEN**.

  

## Examples

* See the example in [_SNDRAW](_SNDRAW.md)

  

## See also

* [_SNDRAW](_SNDRAW.md)
* [_SNDRATE](_SNDRATE.md)

  
