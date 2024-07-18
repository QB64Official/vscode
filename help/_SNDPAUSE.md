## _SNDPAUSE
---

### The _SNDPAUSE statement pauses a sound using a handle from the _SNDOPEN function.

#### SYNTAX

`_SNDPAUSE handle&`

#### DESCRIPTION
* Continue playing by calling [_SNDPLAY](./_SNDPLAY.md) handle&
* In versions prior to build 20170811/60 , the sound identified by handle& must have been opened using the "PAUSE" capability to use this function.


#### SEE ALSO
* [_SNDPLAY](./_SNDPLAY.md) , [_SNDSTOP](./_SNDSTOP.md)
* [_SNDPAUSED](./_SNDPAUSED.md)
