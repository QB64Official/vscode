## _SNDSTOP
---

### The _SNDSTOP statement stops a playing or paused sound using a handle from the _SNDOPEN or _SNDCOPY functions.

#### SYNTAX

`_SNDSTOP handle&`

#### DESCRIPTION
* Sounds can be resumed using [_SNDPLAY](./_SNDPLAY.md) with the correct handle.


#### EXAMPLES
##### Example:
```vb
_SNDSTOP h&
```
  


#### SEE ALSO
* [_SNDPAUSE](./_SNDPAUSE.md)
