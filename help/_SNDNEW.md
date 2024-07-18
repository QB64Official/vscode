## _SNDNEW
---

### The _SNDNEW function creates a raw empty sound in memory and returns a LONG handle value for later access.

#### SYNTAX

`soundHandle& = _SNDNEW ( frames& , channels& , bits& )`

#### PARAMETERS
* frames& is the number of sample frames needed. The number needed for one second of sound is determined by your sound hardware's sample rate, hence you may use the following formula:
	* frames& = [_SNDRATE](./_SNDRATE.md) * neededSeconds! where you may also specify fractional seconds.
* channels& is the number of channels needed (1 = mono, 2 = stereo).
* bits& is the number of bits per channel (8 = 8-bit unsigned integer, 16 = 16-bit signed integer, 32 = 32-bit floating point).


#### DESCRIPTION
* Use this function to create a raw sound in memory.
* Once the sound is created, it can be accessed and manipulated using the [_MEM](./_MEM.md) interface statements and functions, mainly [_MEMSOUND](./_MEMSOUND.md) , [_MEMGET](./_MEMGET.md) & [_MEMPUT](./_MEMPUT.md) .
* Using this function can generate sounds once programmatically and then play it multiple times.
* The sound memory can also be filled with sample data from other sources like files, [DATA](./DATA.md) statements and more.
* Sound memory pointers obtained with [_MEMSOUND](./_MEMSOUND.md) must be freed using [_MEMFREE](./_MEMFREE.md) and the Sound handle value itself must be freed using [_SNDCLOSE](./_SNDCLOSE.md) when no longer required.


#### EXAMPLES
```vb
OPTION _EXPLICIT

RANDOMIZE TIMER

CONST SOUND_DURATION = 5 ' duration is seconds
CONST SAMPLE_CHANNELS = 1 ' number of channes. For stereo we need to add another _MEMPUT below and +offset by SAMPLE_BYTES
CONST SAMPLE_BYTES = 4 ' number of bytes / sample (not frame!)

DIM h AS LONG: h = _SNDNEW(SOUND_DURATION * _SNDRATE, SAMPLE_CHANNELS, SAMPLE_BYTES * 8)
IF (h < 1) THEN
   PRINT "Failed to create sound!"
   END
END IF

DIM sndblk AS _MEM: sndblk = _MEMSOUND(h, 0)
IF sndblk.SIZE = 0 THEN
   _SNDCLOSE h
   PRINT "Failed to access sound data!"
   END
END IF

DIM t AS _INTEGER64
FOR t = 0 TO (SOUND_DURATION * _SNDRATE) - 1
   _MEMPUT sndblk, sndblk.OFFSET + (t * SAMPLE_BYTES * SAMPLE_CHANNELS), SIN(2 * _PI * 440 * t / _SNDRATE) + RND - RND AS SINGLE ' mixes noise and a sine wave
NEXT

_SNDPLAY h

SLEEP SOUND_DURATION

_SNDCLOSE h

END
```
  


#### SEE ALSO
* [_MEM](./_MEM.md) , [_MEMSOUND](./_MEMSOUND.md) , [_MEMFREE](./_MEMFREE.md)
* [_MEMPUT](./_MEMPUT.md) , [_MEMGET](./_MEMGET.md) , [_MEMGET](./_MEMGET.md) (function)
* [_SNDOPEN](./_SNDOPEN.md) , [_SNDCLOSE](./_SNDCLOSE.md) , [_SNDRAW](./_SNDRAW.md) , [_SNDRATE](./_SNDRATE.md)
