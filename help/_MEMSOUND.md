## _MEMSOUND
---

### The _MEMSOUND function returns a _MEM value referring to a sound's raw data in memory using a designated sound handle created by the _SNDOPEN or _SNDNEW function.

#### SYNTAX

`soundBlock = _MEMSOUND ( soundHandle& [, channel& ])`

#### PARAMETERS
* The soundBlock [_MEM](./_MEM.md) type variable holds the read-only elements .OFFSET, .SIZE, .ELEMENTSIZE, .[TYPE](./TYPE.md) and .[SOUND](./SOUND.md).
	* .OFFSET is the starting memory address of the sound sample data.
	* .SIZE is the size of the sample data in bytes
	* .ELEMENTSIZE will contain the number of bytes-per-sample the audio contains.
		* Can return 1 (8-bit mono), 2 (8-bit stereo), 2 (16-bit mono), 4 (16-bit stereo), 4 (32-bit mono) or 8 (32-bit stereo).
		* Use .[TYPE](./TYPE.md) to determine the data type of the sample data.
	* .[TYPE](./TYPE.md) will contain the data type of the sample data. See [_MEM](./_MEM.md) for details.
	* .[SOUND](./SOUND.md) will contain the same handle value as returned by the [_SNDOPEN](./_SNDOPEN.md) function.
* The second parameter channel& is optional and deprecated. This was used to specify the sound channel. In QB64-PE v3.1.0 and above stereo data is always interleaved. You must use .ELEMENTSIZE and .[TYPE](./TYPE.md) to determine the type of audio data you are dealing with.


#### DESCRIPTION
* Use this function to obtain a pointer to the raw sound data in memory for direct access.
* Even if the memory pointer obtained by this fuction was already freed again using [_MEMFREE](./_MEMFREE.md) , the respective Sound handle itself must still be freed using [_SNDCLOSE](./_SNDCLOSE.md) when no longer required.
* If .SIZE returns 0, that means the data could not be accessed. It may happen if you try to access the right channel in a mono file or the format simply does not support accessing raw PCM samples.
* channel& - 1 (left channel/mono) or 2 (right channel; for stereo files) was supported on the old OpenAL backend. For the new miniaudio backend, this must be 0.


#### EXAMPLES
```vb
OPTION _EXPLICIT

PRINT "Loading...";
DIM Song AS LONG
Song = _SNDOPEN("onward_ride1.flac") ' Replace file name with your sound file
IF Song < 1 THEN
   PRINT "Failed to load sound!"
   END
END IF
PRINT "Done!"

DIM Channels AS _UNSIGNED _BYTE
Channels = SndChannels(Song)

IF Channels = 2 THEN
   PRINT "This file is STEREO"
ELSEIF Channels = 1 THEN
   PRINT "This file is MONO"
ELSE
   PRINT "An error occurred."
END IF

_SNDCLOSE Song 'closing the sound releases the mem blocks

END


' This function returns the number of sound channels for a valid sound "handle"
' 2 = stereo, 1 = mono, 0 = error
FUNCTION SndChannels~%% (handle AS LONG)
   DIM SampleData AS _MEM

   SndChannels = 0 ' Assume failure

   ' Check if the sound is valid
   SampleData = _MEMSOUND(handle, 0)
   IF SampleData.SIZE = 0 THEN
       EXIT FUNCTION
   END IF

   ' Check the data type and then decide if the sound is stereo or mono
   IF SampleData.TYPE = 260 THEN ' 32-bit floating point
       IF SampleData.ELEMENTSIZE = 4 THEN
           SndChannels = 1
       ELSEIF SampleData.ELEMENTSIZE = 8 THEN
           SndChannels = 2
       END IF
   ELSEIF SampleData.TYPE = 132 THEN ' 32-bit integer
       IF SampleData.ELEMENTSIZE = 4 THEN
           SndChannels = 1
       ELSEIF SampleData.ELEMENTSIZE = 8 THEN
           SndChannels = 2
       END IF
   ELSEIF SampleData.TYPE = 130 THEN ' 16-bit integer
       IF SampleData.ELEMENTSIZE = 2 THEN
           SndChannels = 1
       ELSEIF SampleData.ELEMENTSIZE = 4 THEN
           SndChannels = 2
       END IF
   ELSEIF SampleData.TYPE = 1153 THEN ' 8-bit unsigned integer
       IF SampleData.ELEMENTSIZE = 1 THEN
           SndChannels = 1
       ELSEIF SampleData.ELEMENTSIZE = 2 THEN
           SndChannels = 2
       END IF
   ELSEIF SampleData.TYPE = 0 THEN ' This means this is an OpenAL sound handle
       DIM RightChannel AS _MEM
       RightChannel = _MEMSOUND(handle, 2)
       IF RightChannel.SIZE > 0 THEN
           SndChannels = 2
       ELSE
           SndChannels = 1
       END IF
   END IF
END FUNCTION
```
  
```vb
OPTION _EXPLICIT

DECLARE LIBRARY
   $IF 32BIT THEN
       FUNCTION ConvertOffset~& ALIAS "uintptr_t" (BYVAL o AS _UNSIGNED _OFFSET)
   $ELSE
       FUNCTION ConvertOffset~&& ALIAS "uintptr_t" (BYVAL o AS _UNSIGNED _OFFSET)
   $END IF 
END DECLARE

SCREEN _NEWIMAGE(800, 327, 32)

PRINT "Loading...";
DIM Song AS LONG: Song = _SNDOPEN("OPL3 Groove.rad") ' replace this with your (WAV, AIFF, AIFC, FLAC, OGG, MP3, MID, IT, XM, S3M, MOD, RAD, AHX, HVL, QOA) sound file
IF Song < 1 THEN
   PRINT "Failed to load song!"
   END
END IF
PRINT "Done!"

_SNDPLAY Song

DIM SampleData AS _MEM: SampleData = _MEMSOUND(Song, 0)
IF SampleData.SIZE = 0 THEN
   PRINT "Failed to access sound sample data."
   END
END IF

DIM sz AS _UNSIGNED _INTEGER64: sz = ConvertOffset(SampleData.ELEMENTSIZE) ' sz is the total size of the sound in bytes
DIM x AS LONG, i AS _UNSIGNED _INTEGER64

DO UNTIL _KEYHIT = 27 OR NOT _SNDPLAYING(Song) OR i + (_WIDTH * sz) > SampleData.SIZE
   CLS
   LOCATE 1, 1: PRINT i; "/"; SampleData.SIZE, "Frame Size ="; sz, "Data Type ="; SampleData.TYPE

   $CHECKING:OFF
   IF SampleData.TYPE = 130 THEN ' 128 OR 2: integer stereo or mono
       FOR x = 0 TO _WIDTH - 1
           DIM si AS INTEGER: si = _MEMGET(SampleData, SampleData.OFFSET + i + x * sz, INTEGER) ' get sound data
           LINE (x, _HEIGHT / 2)-STEP(0, 300 * si / 32768), _RGB32(0, 111, 0) 'plot wave
       NEXT
   ELSEIF SampleData.TYPE = 260 THEN ' 256 OR 4: floating point stereo or mono
       FOR x = 0 TO _WIDTH - 1
           DIM sf AS SINGLE: sf = _MEMGET(SampleData, SampleData.OFFSET + i + x * sz, SINGLE) ' get sound data
           LINE (x, _HEIGHT / 2)-STEP(0, sf * 300), _RGB32(0, 111, 0) 'plot wave
       NEXT
   ELSEIF SampleData.TYPE = 1153 THEN ' 128 OR 1 OR 1024: unsigned byte stereo or mono
       FOR x = 0 TO _WIDTH - 1
           DIM sb AS _BYTE: sb = _MEMGET(SampleData, SampleData.OFFSET + i + x * sz, _UNSIGNED _BYTE) XOR &H80 ' get sound data and convert to signed
           LINE (x, _HEIGHT / 2)-STEP(0, 300 * sb / 128), _RGB32(0, 111, 0) ' plot wave
       NEXT
   END IF
   $CHECKING:ON

   _DISPLAY
   _LIMIT 60

   i = FIX(_SNDGETPOS(Song) * _SNDRATE) * sz ' calculate the new sample frame position
LOOP

_SNDCLOSE Song ' closing the sound releases the mem blocks
_AUTODISPLAY
END
```
  


#### SEE ALSO
* [_MEM](./_MEM.md) , [_MEMFREE](./_MEMFREE.md)
* [_MEMPUT](./_MEMPUT.md) , [_MEMGET](./_MEMGET.md) , [_MEMGET](./_MEMGET.md) (function)
* [_SNDOPEN](./_SNDOPEN.md) , [_SNDNEW](./_SNDNEW.md) , [_SNDCLOSE](./_SNDCLOSE.md) , [_SNDRAW](./_SNDRAW.md)
* [_SNDRATE](./_SNDRATE.md)
