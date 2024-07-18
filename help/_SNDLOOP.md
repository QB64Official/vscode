## _SNDLOOP
---

### The _SNDLOOP statement is like _SNDPLAY but the sound is looped. Uses a handle from the _SNDOPEN function.

#### SYNTAX

`_SNDLOOP handle&`

#### DESCRIPTION
* Plays the sound identified by handle& in a loop.


#### EXAMPLES
##### Example: Loading a sound or music file and playing it in a loop until a key is pressed.
```vb
bg = _SNDOPEN("back.ogg") '<<<<<<<<<< change to your sound file name
_SNDLOOP bg

DO
   _LIMIT 10   'keep CPU resources used low
LOOP UNTIL INKEY$ <> "" 'key press program exit
_SNDSTOP bg
_SNDCLOSE bg
```
  


#### SEE ALSO
* [_SNDOPEN](./_SNDOPEN.md) , [_SNDSTOP](./_SNDSTOP.md)
