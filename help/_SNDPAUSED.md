## _SNDPAUSED
---

### The _SNDPAUSED function checks if a sound is paused. Uses a handle parameter passed from _SNDOPEN .

#### SYNTAX

`isPaused%% = _SNDPAUSED ( handle& )`

#### DESCRIPTION
* Returns true (-1) if the sound is paused. False (0) if not paused.


#### EXAMPLES
```vb
PRINT _SNDPAUSED(h&)
```
  


#### SEE ALSO
* [_SNDPAUSE](./_SNDPAUSE.md) , [_SNDPLAY](./_SNDPLAY.md)
* [_SNDSTOP](./_SNDSTOP.md)
