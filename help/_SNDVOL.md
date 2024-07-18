## _SNDVOL
---

### The _SNDVOL statement sets the volume of a sound loaded in memory using a handle from the _SNDOPEN function.

#### SYNTAX

`_SNDVOL handle& , volume!`

#### DESCRIPTION
* volume! is a value from 0 (silence) to 1 (full volume).
* In versions prior to build 20170811/60 , the sound identified by handle& must have been opened using the "VOL" capability to use this function.
* Version 3.1.0 enables this for "raw" sounds.


#### EXAMPLES
```vb
h& = _SNDOPEN("bell.wav")
_SNDVOL h&, 0.5
_SNDPLAY h&
```
  


#### SEE ALSO
* [_SNDOPEN](./_SNDOPEN.md) , [_SNDOPENRAW](./_SNDOPENRAW.md)
* [_SNDBAL](./_SNDBAL.md)
