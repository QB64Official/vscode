# _MEMSOUND

The **_MEMSOUND** function returns a [_MEM](_MEM.md) value referring to a sound's raw data in memory using a designated sound handle created by the [_SNDOPEN](_SNDOPEN.md) or [_SNDNEW](_SNDNEW.md) function.

  

## Syntax

*soundBlock* = _MEMSOUND(*soundHandle&*[, *channel&*])
  

## Parameters

* The *soundBlock* [_MEM](_MEM.md) type variable holds the read-only elements .OFFSET, .SIZE, .ELEMENTSIZE, .TYPE and .SOUND.
	+ **.OFFSET** is the starting memory address of the sound sample data.
	+ **.SIZE** is the size of the sample data in **bytes**
	+ **.ELEMENTSIZE** will contain the number of **bytes-per-sample** the audio contains.
		- Can return 1 (8-bit mono), 2 (8-bit stereo), 2 (16-bit mono), 4 (16-bit stereo), 4 (32-bit mono) or 8 (32-bit stereo).
		- Use **.TYPE** to determine the data type of the sample data.
	+ **.TYPE** will contain the data type of the sample data. See [_MEM](_MEM.md) for details.
	+ **.SOUND** will contain the same handle value as returned by the [_SNDOPEN](_SNDOPEN.md) function.
* The second parameter *channel&* is optional and deprecated. This was used to specify the sound channel. In **QB64-PE v3.1.0** and above stereo data is always interleaved. You must use **.ELEMENTSIZE** and **.TYPE** to determine the type of audio data you are dealing with.

  

## Description

* Use this function to obtain a pointer to the raw sound data in memory for direct access.
* Even if the memory pointer obtained by this fuction was already freed again using [_MEMFREE](_MEMFREE.md), the respective Sound handle itself must still be freed using [_SNDCLOSE](_SNDCLOSE.md) when no longer required.
* If .SIZE returns 0, that means the data could not be accessed. It may happen if you try to access the right channel in a mono file or the format simply does not support accessing raw PCM samples.
* *channel&* - 1 (left channel/mono) or 2 (right channel; for stereo files) was supported on the old OpenAL backend. For the new miniaudio backend, this must be 0.

  

## Availability

* **QB64 v1.5 and up**
* **QB64-PE all versions**

  

## Examples

Example 1
Checking that a sound file is stereo.

``` [OPTION _EXPLICIT](OPTION _EXPLICIT.md)  [PRINT](PRINT.md) "Loading..."; [DIM](DIM.md) Song [AS](AS.md) [LONG](LONG.md) Song = [_SNDOPEN](_SNDOPEN.md)("onward_ride1.flac") ' Replace file name with your sound file [IF](IF.md) Song < 1 [THEN](THEN.md)     [PRINT](PRINT.md) "Failed to load sound!"     [END](END.md) [END IF](END IF.md) [PRINT](PRINT.md) "Done!"  [DIM](DIM.md) Channels [AS](AS.md) [_UNSIGNED](_UNSIGNED.md) [_BYTE](_BYTE.md) Channels = SndChannels(Song)  [IF](IF.md) Channels = 2 [THEN](THEN.md)     [PRINT](PRINT.md) "This file is STEREO" [ELSEIF](ELSEIF.md) Channels = 1 [THEN](THEN.md)     [PRINT](PRINT.md) "This file is MONO" [ELSE](ELSE.md)     [PRINT](PRINT.md) "An error occurred." [END IF](END IF.md)  [_SNDCLOSE](_SNDCLOSE.md) Song 'closing the sound releases the mem blocks  [END](END.md)   ' This function returns the number of sound channels for a valid sound "handle" ' 2 = stereo, 1 = mono, 0 = error [FUNCTION](FUNCTION.md) SndChannels~%% (handle [AS](AS.md) [LONG](LONG.md))     [DIM](DIM.md) SampleData [AS](AS.md) [_MEM](_MEM.md)      SndChannels = 0 ' Assume failure      ' Check if the sound is valid     SampleData = _MEMSOUND(handle, 0)     [IF](IF.md) SampleData.SIZE = 0 [THEN](THEN.md)         [EXIT FUNCTION](EXIT FUNCTION.md)     [END IF](END IF.md)      ' Check the data type and then decide if the sound is stereo or mono     [IF](IF.md) SampleData.TYPE = 260 [THEN](THEN.md) ' 32-bit floating point         [IF](IF.md) SampleData.ELEMENTSIZE = 4 [THEN](THEN.md)             SndChannels = 1         [ELSEIF](ELSEIF.md) SampleData.ELEMENTSIZE = 8 [THEN](THEN.md)             SndChannels = 2         [END IF](END IF.md)     [ELSEIF](ELSEIF.md) SampleData.TYPE = 132 [THEN](THEN.md) ' 32-bit integer         [IF](IF.md) SampleData.ELEMENTSIZE = 4 [THEN](THEN.md)             SndChannels = 1         [ELSEIF](ELSEIF.md) SampleData.ELEMENTSIZE = 8 [THEN](THEN.md)             SndChannels = 2         [END IF](END IF.md)     [ELSEIF](ELSEIF.md) SampleData.TYPE = 130 [THEN](THEN.md) ' 16-bit integer         [IF](IF.md) SampleData.ELEMENTSIZE = 2 [THEN](THEN.md)             SndChannels = 1         [ELSEIF](ELSEIF.md) SampleData.ELEMENTSIZE = 4 [THEN](THEN.md)             SndChannels = 2         [END IF](END IF.md)     [ELSEIF](ELSEIF.md) SampleData.TYPE = 1153 [THEN](THEN.md) ' 8-bit unsigned integer         [IF](IF.md) SampleData.ELEMENTSIZE = 1 [THEN](THEN.md)             SndChannels = 1         [ELSEIF](ELSEIF.md) SampleData.ELEMENTSIZE = 2 [THEN](THEN.md)             SndChannels = 2         [END IF](END IF.md)     [ELSEIF](ELSEIF.md) SampleData.TYPE = 0 [THEN](THEN.md) ' This means this is an OpenAL sound handle         [DIM](DIM.md) RightChannel [AS](AS.md) [_MEM](_MEM.md)         RightChannel = _MEMSOUND(handle, 2)         [IF](IF.md) RightChannel.SIZE > 0 [THEN](THEN.md)             SndChannels = 2         [ELSE](ELSE.md)             SndChannels = 1         [END IF](END IF.md)     [END IF](END IF.md) [END FUNCTION](END FUNCTION.md)  
```

---

Example 2
Plotting a sound's waves.

``` [OPTION](OPTION.md) [_EXPLICIT](_EXPLICIT.md)  [DECLARE LIBRARY](DECLARE LIBRARY.md)     [$IF]($IF.md) 32BIT [THEN](THEN.md)         [FUNCTION](FUNCTION.md) ConvertOffset~& [ALIAS](ALIAS.md) "uintptr_t" ([BYVAL](BYVAL.md) o [AS](AS.md) [_UNSIGNED](_UNSIGNED.md) [_OFFSET](_OFFSET.md) "OFFSET (function)"))     [$ELSE]($ELSE.md)         [FUNCTION](FUNCTION.md) ConvertOffset~&& [ALIAS](ALIAS.md) "uintptr_t" ([BYVAL](BYVAL.md) o [AS](AS.md) [_UNSIGNED](_UNSIGNED.md) [_OFFSET](_OFFSET.md) "OFFSET (function)"))     [$END IF]($END IF.md)  [END DECLARE](END DECLARE.md)  [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(800, 327, 32)  [PRINT](PRINT.md) "Loading..."; [DIM](DIM.md) Song [AS](AS.md) [LONG](LONG.md): Song = [_SNDOPEN](_SNDOPEN.md)("OPL3 Groove.rad") ' replace this with your (WAV, AIFF, AIFC, FLAC, OGG, MP3, MID, IT, XM, S3M, MOD, RAD, AHX, HVL, QOA) sound file [IF](IF.md) Song < 1 [THEN](THEN.md)     [PRINT](PRINT.md) "Failed to load song!"     [END](END.md) [END IF](END IF.md) [PRINT](PRINT.md) "Done!"  [_SNDPLAY](_SNDPLAY.md) Song  [DIM](DIM.md) SampleData [AS](AS.md) [_MEM](_MEM.md): SampleData = _MEMSOUND(Song, 0) [IF](IF.md) SampleData.SIZE = 0 [THEN](THEN.md)     [PRINT](PRINT.md) "Failed to access sound sample data."     [END](END.md) [END IF](END IF.md)  [DIM](DIM.md) sz [AS](AS.md) [_UNSIGNED](_UNSIGNED.md) [_INTEGER64](_INTEGER64.md): sz = ConvertOffset(SampleData.ELEMENTSIZE) ' sz is the total size of the sound in bytes [DIM](DIM.md) x [AS](AS.md) [LONG](LONG.md), i [AS](AS.md) [_UNSIGNED](_UNSIGNED.md) [_INTEGER64](_INTEGER64.md)  [DO UNTIL](DO UNTIL.md) [_KEYHIT](_KEYHIT.md) = 27 [OR](OR.md) "OR (boolean)") [NOT](NOT.md) [_SNDPLAYING](_SNDPLAYING.md)(Song) [OR](OR.md) "OR (boolean)") i + ([_WIDTH](_WIDTH.md) "WIDTH (function)") * sz) > SampleData.SIZE     [CLS](CLS.md)     [LOCATE](LOCATE.md) 1, 1: [PRINT](PRINT.md) i; "/"; SampleData.SIZE, "Frame Size ="; sz, "Data Type ="; SampleData.TYPE      [$CHECKING]($CHECKING.md):[OFF](OFF.md)     [IF](IF.md) SampleData.TYPE = 130 [THEN](THEN.md) ' 128 OR 2: integer stereo or mono         [FOR](FOR.md) x = 0 [TO](TO.md) [_WIDTH](_WIDTH.md) "WIDTH (function)") - 1             [DIM](DIM.md) si [AS](AS.md) [INTEGER](INTEGER.md): si = [_MEMGET](_MEMGET.md) "MEMGET (function)")(SampleData, SampleData.OFFSET + i + x * sz, [INTEGER](INTEGER.md)) ' get sound data             [LINE](LINE.md) (x, [_HEIGHT](_HEIGHT.md) / 2)-[STEP](STEP.md)(0, 300 * si / 32768), [_RGB32](_RGB32.md)(0, 111, 0) 'plot wave         [NEXT](NEXT.md)     [ELSEIF](ELSEIF.md) SampleData.TYPE = 260 [THEN](THEN.md) ' 256 OR 4: floating point stereo or mono         [FOR](FOR.md) x = 0 [TO](TO.md) [_WIDTH](_WIDTH.md) "WIDTH (function)") - 1             [DIM](DIM.md) sf [AS](AS.md) [SINGLE](SINGLE.md): sf = [_MEMGET](_MEMGET.md) "MEMGET (function)")(SampleData, SampleData.OFFSET + i + x * sz, [SINGLE](SINGLE.md)) ' get sound data             [LINE](LINE.md) (x, [_HEIGHT](_HEIGHT.md) / 2)-[STEP](STEP.md)(0, sf * 300), [_RGB32](_RGB32.md)(0, 111, 0) 'plot wave         [NEXT](NEXT.md)     [ELSEIF](ELSEIF.md) SampleData.TYPE = 1153 [THEN](THEN.md) ' 128 OR 1 OR 1024: unsigned byte stereo or mono         [FOR](FOR.md) x = 0 [TO](TO.md) [_WIDTH](_WIDTH.md) "WIDTH (function)") - 1             [DIM](DIM.md) sb [AS](AS.md) [_BYTE](_BYTE.md): sb = [_MEMGET](_MEMGET.md) "MEMGET (function)")(SampleData, SampleData.OFFSET + i + x * sz, [_UNSIGNED](_UNSIGNED.md) [_BYTE](_BYTE.md)) [XOR](XOR.md) &H80 ' get sound data and convert to signed             [LINE](LINE.md) (x, [_HEIGHT](_HEIGHT.md) / 2)-[STEP](STEP.md)(0, 300 * sb / 128), [_RGB32](_RGB32.md)(0, 111, 0) ' plot wave         [NEXT](NEXT.md)     [END IF](END IF.md)     [$CHECKING]($CHECKING.md):[ON](ON.md)      [_DISPLAY](_DISPLAY.md)     [_LIMIT](_LIMIT.md) 60      i = [FIX](FIX.md)([_SNDGETPOS](_SNDGETPOS.md)(Song) * [_SNDRATE](_SNDRATE.md)) * sz ' calculate the new sample frame position [LOOP](LOOP.md)  [_SNDCLOSE](_SNDCLOSE.md) Song ' closing the sound releases the mem blocks [_AUTODISPLAY](_AUTODISPLAY.md) [END](END.md)  
```

  

## See also

* [_MEM](_MEM.md), [_MEMFREE](_MEMFREE.md)
* [_MEMPUT](_MEMPUT.md), [_MEMGET](_MEMGET.md), [_MEMGET (function)](_MEMGET (function).md) "MEMGET (function)")
* [_SNDOPEN](_SNDOPEN.md), [_SNDNEW](_SNDNEW.md), [_SNDCLOSE](_SNDCLOSE.md), [_SNDRAW](_SNDRAW.md)
* [_SNDRATE](_SNDRATE.md)

  
