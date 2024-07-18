## _SNDPLAY
---

### The _SNDPLAY statement plays a sound designated by a file handle created by _SNDOPEN .

#### SYNTAX

`_SNDPLAY handle&`

#### DESCRIPTION
* Make sure that the handle& value is not 0 before attempting to play it.


#### EXAMPLES
##### Example: Checking a handle value before playing
```vb
IF h& THEN _SNDPLAY h&
```
  


#### SEE ALSO
* [_SNDOPEN](./_SNDOPEN.md) , [_SNDPAUSE](./_SNDPAUSE.md) , [_SNDPLAYING](./_SNDPLAYING.md)
