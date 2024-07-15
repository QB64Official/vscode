# _SNDNEW

The **_SNDNEW** function creates a raw empty sound in memory and returns a [LONG](LONG.md) handle value for later access.

  

## Syntax

*soundHandle&* = _SNDNEW(*frames&*, *channels&*, *bits&*)
  

## Parameters

* *frames&* is the number of sample frames needed. The number needed for one second of sound is determined by your sound hardware's sample rate, hence you may use the following formula:
	+ frames& = [_SNDRATE](_SNDRATE.md) * neededSeconds! where you may also specify fractional seconds.
* *channels&* is the number of channels needed (1 = mono, 2 = stereo).
* *bits&* is the number of bits per channel (8 = 8-bit unsigned integer, 16 = 16-bit signed integer, 32 = 32-bit floating point).

  

## Description

* Use this function to create a raw sound in memory.
* Once the sound is created, it can be accessed and manipulated using the [_MEM](_MEM.md) interface statements and functions, mainly [_MEMSOUND](_MEMSOUND.md), [_MEMGET](_MEMGET.md) & [_MEMPUT](_MEMPUT.md).
* Using this function can generate sounds once programmatically and then play it multiple times.
* The sound memory can also be filled with sample data from other sources like files, [DATA](DATA.md) statements and more.
* Sound memory pointers obtained with [_MEMSOUND](_MEMSOUND.md) must be freed using [_MEMFREE](_MEMFREE.md) and the Sound handle value itself must be freed using [_SNDCLOSE](_SNDCLOSE.md) when no longer required.

  

## Availability

* **QB64-PE v3.5.0 and up**

  

## Examples

Example 1
Creating a sound at runtime and playing it.

``` [OPTION _EXPLICIT](OPTION _EXPLICIT.md)  [RANDOMIZE](RANDOMIZE.md) [TIMER](TIMER.md) "TIMER (function)")  [CONST](CONST.md) SOUND_DURATION = 5 ' duration is seconds [CONST](CONST.md) SAMPLE_CHANNELS = 1 ' number of channes. For stereo we need to add another _MEMPUT below and +offset by SAMPLE_BYTES [CONST](CONST.md) SAMPLE_BYTES = 4 ' number of bytes / sample (not frame!)  [DIM](DIM.md) h [AS](AS.md) [LONG](LONG.md): h = _SNDNEW(SOUND_DURATION * [_SNDRATE](_SNDRATE.md), SAMPLE_CHANNELS, SAMPLE_BYTES * 8) [IF](IF.md) (h < 1) [THEN](THEN.md)     [PRINT](PRINT.md) "Failed to create sound!"     [END](END.md) [END IF](END IF.md)  [DIM](DIM.md) sndblk [AS](AS.md) [_MEM](_MEM.md): sndblk = [_MEMSOUND](_MEMSOUND.md)(h, 0) [IF](IF.md) sndblk.SIZE = 0 [THEN](THEN.md)     [_SNDCLOSE](_SNDCLOSE.md) h     [PRINT](PRINT.md) "Failed to access sound data!"     [END](END.md) [END IF](END IF.md)  [DIM](DIM.md) t [AS](AS.md) [_INTEGER64](_INTEGER64.md) [FOR](FOR.md) t = 0 [TO](TO.md) (SOUND_DURATION * [_SNDRATE](_SNDRATE.md)) - 1     [_MEMPUT](_MEMPUT.md) sndblk, sndblk.OFFSET + (t * SAMPLE_BYTES * SAMPLE_CHANNELS), [SIN](SIN.md)(2 * [_PI](_PI.md) * 440 * t / [_SNDRATE](_SNDRATE.md)) + [RND](RND.md) - [RND](RND.md) [AS](AS.md) [SINGLE](SINGLE.md) ' mixes noise and a sine wave [NEXT](NEXT.md)  [_SNDPLAY](_SNDPLAY.md) h  [SLEEP](SLEEP.md) SOUND_DURATION  [_SNDCLOSE](_SNDCLOSE.md) h  [END](END.md)  
```

  

## See also

* [_MEM](_MEM.md), [_MEMSOUND](_MEMSOUND.md), [_MEMFREE](_MEMFREE.md)
* [_MEMPUT](_MEMPUT.md), [_MEMGET](_MEMGET.md), [_MEMGET (function)](_MEMGET (function).md) "MEMGET (function)")
* [_SNDOPEN](_SNDOPEN.md), [_SNDCLOSE](_SNDCLOSE.md), [_SNDRAW](_SNDRAW.md), [_SNDRATE](_SNDRATE.md)

  
