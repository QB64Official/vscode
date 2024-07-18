## _SNDLEN
---

### The _SNDLEN function returns the length in seconds of a loaded sound using a handle from the _SNDOPEN function.

#### SYNTAX

`soundLength = _SNDLEN ( handle& )`

#### DESCRIPTION
* Returns the length of a sound in seconds.
* In versions prior to build 20170811/60 , the sound identified by handle& must have been opened using the "[LEN](./LEN.md)" capability to use this function.


#### SEE ALSO
* [_SNDCOPY](./_SNDCOPY.md) , [_SNDLIMIT](./_SNDLIMIT.md)
