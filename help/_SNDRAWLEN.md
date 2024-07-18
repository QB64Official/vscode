## _SNDRAWLEN
---

### The _SNDRAWLEN function returns the length, in seconds, of a _SNDRAW sound currently queued.

#### SYNTAX

`length# = _SNDRAWLEN [ pipeHandle& ]`

#### PARAMETERS
* The optional pipeHandle& parameter refers to the sound pipe opened using [_SNDOPENRAW](./_SNDOPENRAW.md) .


#### DESCRIPTION
* Use [_SNDRAWLEN](./_SNDRAWLEN.md) to determine the length of a sound queue during creation and when to stop playing the sound.
* Ensure that [_SNDRAWLEN](./_SNDRAWLEN.md) is comfortably above 0 (until you've actually finished playing sound).
* If you are getting occasional random clicks, this generally means that [_SNDRAWLEN](./_SNDRAWLEN.md) has dropped to 0.
* The [_SNDRATE](./_SNDRATE.md) determines how many samples are played per second. However, the timing is achieved by the sound card and [_SNDRAWLEN](./_SNDRAWLEN.md) , not your program.
* Do not attempt to use _TIMER or [_DELAY](./_DELAY.md) or [_LIMIT](./_LIMIT.md) to control the timing of [_SNDRAW](./_SNDRAW.md) sounds. You may use them as usual for delays or to limit your program's CPU usage, but the decision of how much sound to queue should only be based on the remaining [_SNDRAWLEN](./_SNDRAWLEN.md) .


#### EXAMPLES


#### SEE ALSO
* [_SNDRAW](./_SNDRAW.md)
* [_SNDRATE](./_SNDRATE.md)
