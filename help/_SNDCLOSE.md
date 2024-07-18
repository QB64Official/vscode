## _SNDCLOSE
---

### The _SNDCLOSE statement frees and unloads an open sound using a _SNDOPEN or _SNDCOPY handle.

#### SYNTAX

`_SNDCLOSE handle&`

#### DESCRIPTION
* If the sound is still playing, it will be freed automatically after it finishes.
	* Closing a looping/paused/etc. sound means it is never freed until the QB64 program terminates.
* When your QB64 program terminates, all sounds are automatically freed.


#### SEE ALSO
* [_SNDSTOP](./_SNDSTOP.md) , [_SNDPAUSE](./_SNDPAUSE.md)
