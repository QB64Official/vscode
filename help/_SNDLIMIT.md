## _SNDLIMIT
---

### The _SNDLIMIT statement stops playing a sound after it has been playing for a set number of seconds.

#### SYNTAX

`_SNDLIMIT handle& , numberOfSeconds!`

#### PARAMETERS
* The handle& variable name is created using the [_SNDOPEN](./_SNDOPEN.md) function from a loaded sound file.
* numberOfSeconds! is a [SINGLE](./SINGLE.md) value of seconds that the sound will play.


#### DESCRIPTION
* Sets how long a sound will be played in seconds. If the limit is set after the sound is started, the timer starts counting down from when the limit is applied, not from the start of playing.
* Set numberOfSeconds! to 0 seconds to remove the limit.
* Pausing or stopping the sound will also remove the limit.


#### EXAMPLES
```vb
_SNDLIMIT h&, 5.5
```
  


#### SEE ALSO
* [_SNDOPEN](./_SNDOPEN.md) , [_SNDLEN](./_SNDLEN.md)
