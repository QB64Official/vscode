## _SNDRATE
---

### The _SNDRATE function returns the sample rate frequency per second of the current computer's sound card.

#### SYNTAX

`sampleRate& = _SNDRATE`

#### DESCRIPTION
* The sample rate frequency per second value returned can be any [LONG](./LONG.md) value. Common values are 22050 or 44100.
* The sound card sample rate is determined by the sound card and it cannot be changed.
* Do not assume this to be a certain value. Always write code that can adapt to whatever is returned.


#### EXAMPLES


#### SEE ALSO
* [_SNDRAW](./_SNDRAW.md)
* [_SNDRAWLEN](./_SNDRAWLEN.md)
