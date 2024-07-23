<style type="text/css">
body {
    background: #00a !important;
    color: #ccc !important;
}
li {
    list-style-type: square !important;
    color: #ccc !important;
}
li::marker {
    color: #77f !important;
}    
hr {
    border-color: #55f !important;
    border-width: 2px !important;
}
h2 {
    color: #fff !important;
    border: 0 !important;
}
h3 {
    color: #cfc !important;
    border: 0 !important;
}
h4 {
    color: #ccc !important;
    border: 0 !important;
}
h5 {
    margin: 0 0 0.5em 0  !important;
    color: #88f !important;
    border: 0 !important;
    font-style: italic !important;
    font-weight: normal !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 4px !important; 
    border: 1px solid #333 !important;
}
pre > code {
    background: transparent !important;
    margin: 0 !important;
    padding: 0 !important;
    border-radius: inherit !important; 
    border: 0 !important;
}
blockquote {
    border: 0 !important;
    background: transparent !important;
    margin: 0 !important;
    padding: 0 1em !important;
}
pre {
    border-radius: 4px !important;
    background: #000 !important;
    border: 1px solid #333 !important;
    margin: 0 !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}
br + pre {
    border-radius: 0 !important;
    border-style: inset !important;
    border-width: 5px !important;
    border-color: #999 !important;
    background-color: #000 !important;
    box-shadow: 0px 10px 3px rgba(0, 0, 0, 0.25) !important;
    margin-top: -1em !important;
}
br + pre::before {
    content: "OUTPUT \A" !important;
    color: #555 !important;
    border-bottom: 1px solid #333;
    font-size: x-small;
    display: block !important;
    padding: 0 3px !important;
    margin: -1em -1em 1em -1em !important;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */    
}
br ~ h5 {
    margin-top: 2em !important;
}
.explanation {
    color: #995 !important;
    /* background-color: rgba(150, 150, 100) !important; */
    border-radius: 10em !important;
    border: 2px #441 dashed !important;
    padding: 8px 32px !important;
    margin-bottom: 4em !important;
    font-size: x-small !important;
}
</style>


## [_MEMSOUND](MEMSOUND.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MEMSOUND)
---
<blockquote>

### The _MEMSOUND function returns a _MEM value referring to a sound's raw data in memory using a designated sound handle created by the _SNDOPEN or _SNDNEW function.

</blockquote>

#### SYNTAX

<blockquote>

`soundBlock = _MEMSOUND ( soundHandle& [, channel& ])`

</blockquote>

#### PARAMETERS

<blockquote>


* The soundBlock [_MEM](MEM.md) type variable holds the read-only elements .OFFSET, .SIZE, .ELEMENTSIZE, .TYPE and .SOUND.
* .OFFSET is the starting memory address of the sound sample data.
* .SIZE is the size of the sample data in bytes
* .ELEMENTSIZE will contain the number of bytes-per-sample the audio contains.
* Can return 1 (8-bit mono), 2 (8-bit stereo), 2 (16-bit mono), 4 (16-bit stereo), 4 (32-bit mono) or 8 (32-bit stereo).
* Use .TYPE to determine the data type of the sample data.
* .TYPE will contain the data type of the sample data. See [_MEM](MEM.md) for details.
* .SOUND will contain the same handle value as returned by the [_SNDOPEN](SNDOPEN.md) function.
* The second parameter channel& is optional and deprecated. This was used to specify the sound channel. In QB64-PE v3.1.0 and above stereo data is always interleaved. You must use .ELEMENTSIZE and .TYPE to determine the type of audio data you are dealing with.
</blockquote>

#### DESCRIPTION

<blockquote>


* Use this function to obtain a pointer to the raw sound data in memory for direct access.
* Even if the memory pointer obtained by this fuction was already freed again using [_MEMFREE](MEMFREE.md) , the respective Sound handle itself must still be freed using [_SNDCLOSE](SNDCLOSE.md) when no longer required.
* If .SIZE returns 0, that means the data could not be accessed. It may happen if you try to access the right channel in a mono file or the format simply does not support accessing raw PCM samples.
* channel& - 1 (left channel/mono) or 2 (right channel; for stereo files) was supported on the old OpenAL backend. For the new miniaudio backend, this must be 0.

</blockquote>

#### EXAMPLES

<blockquote>

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
  
<br>

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
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_MEM](MEM.md) , [_MEMFREE](MEMFREE.md)
* [_MEMPUT](MEMPUT.md) , [_MEMGET](MEMGET.md) , [_MEMGET](MEMGET.md) (function)
* [_SNDOPEN](SNDOPEN.md) , [_SNDNEW](SNDNEW.md) , [_SNDCLOSE](SNDCLOSE.md) , [_SNDRAW](SNDRAW.md)
* [_SNDRATE](SNDRATE.md)
</blockquote>
