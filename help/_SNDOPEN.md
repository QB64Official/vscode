## _SNDOPEN
---

### The _SNDOPEN function loads a sound file into memory and returns a LONG handle value above 0.

#### SYNTAX

`soundHandle& = _SNDOPEN ( fileName$ [, capabilities$ ])`

#### DESCRIPTION
* Returns a [LONG](./LONG.md) soundHandle& value to the sound file in memory. A value of zero means the sound could not be loaded.
* The literal or variable [STRING](./STRING.md) sound fileName$ can be WAV, AIFF, AIFC, FLAC, OGG, MP3, MID, IT, XM, S3M, [MOD](./MOD.md), RAD (v1 & v2), AHX, HVL & QOA file types.
	* MID support is enabled via the $MIDISOUNDFONT metacommand.
* The literal or variable [STRING](./STRING.md) capabilities$ is optional but can be one of the following. Anything else is ignored. Multiple capability strings can be specified separated by a comma.
	* STREAM : This will "stream" the sound into memory rather than fully decoding it.
	* MEMORY : This will treat fileName$ as a memory buffer containing the sound file instead of a file name.
* Short sounds should not be loaded using STREAM . Use STREAM when you want to play long sounds as background music and want to avoid loading delays.
* [_MEMSOUND](./_MEMSOUND.md) will not work for sounds loaded using STREAM or MEMORY .
* Always check the handle value returned is greater than zero before attempting to play the sound.
* The handle can be used by most of the _SND sound playing functions and statements in QB64 except [_SNDPLAYFILE](./_SNDPLAYFILE.md) which plays a sound file directly from the disk and does not use a handle value.
* Handles can be closed with [_SNDCLOSE](./_SNDCLOSE.md) when the sound is no longer necessary.
* If a WAV sound file won't play, try it using the Windows Play WAV sounds library to check it or convert the sound file to FLAC, OGG or MP3.


#### EXAMPLES
##### Snippet 1: Loading a sound file to use in the program later. Only load it once and use the handle any time you want.
```vb
h& = _SNDOPEN("dog.wav")
IF h& <= 0 THEN BEEP ELSE _SNDPLAY h&      'check for valid handle before using!
```
  
##### Snippet 2: Playing a sound from 2 different speakers based on program results.
```vb
' This examples load, plays and then bounces the sound between the left and right channels
Laff& = _SNDOPEN("KONGlaff.ogg", "stream") 'load sound file and get LONG handle value
IF Laff& > 0 THEN
   _SNDPLAY Laff& 'play sound
ELSE
   PRINT "Failed to load sound file."
   END
END IF

PRINT "Press ESC to stop."
dir = 0.01
DO
   IF laffx! <= -1 THEN dir = 0.01
   IF laffx! >= 1 THEN dir = -0.01
   laffx! = laffx! + dir

   LOCATE , 1: PRINT USING "Balance = ##.##"; laffx!;
   _SNDBAL Laff&, laffx! 'balance sound to left or right speaker

   _LIMIT 60
LOOP WHILE _SNDPLAYING(Laff&) AND _KEYHIT <> 27
```
  
##### Snippet 3: Loading a sound file from memory and then playing it.
```vb
OPTION _EXPLICIT

DIM buffer AS STRING: buffer = LoadSlidingAwayData
PRINT "Size ="; LEN(buffer)

DIM h AS LONG: h = _SNDOPEN(buffer, "memory")
PRINT "Handle ="; h
PRINT "Length ="; _SNDLEN(h)

PRINT "Looping audio..."
_SNDLOOP h

END

' This function reads the file directly from data and then returns the decompressed data
FUNCTION LoadSlidingAwayData$
   DIM AS LONG numL, numb, stroffs, i, dat
   DIM rawdata AS STRING

   RESTORE Sliding_Away
   READ numL, numb
   rawdata = SPACE$((numL * 4) + numb)
   stroffs = 1

   FOR i = 1 TO numL
       READ dat
       MID$(rawdata, stroffs, 4) = MKL$(dat)
       stroffs = stroffs + 4
   NEXT

   IF numb > 0 THEN
       FOR i = 1 TO numb
           READ dat
           MID$(rawdata, stroffs, 1) = CHR$(dat)
           stroffs = stroffs + 1
       NEXT
   END IF

   LoadSlidingAwayData = _INFLATE$(rawdata)

   '--- DATAs representing the contents of file sliding_away.hvl
   '---------------------------------------------------------------------
   Sliding_Away:
   DATA 192,10
   DATA &H56A59C78,&H51134F5B,&H7766FE10,&HE96D0B6B,&HC5258202,&H5BAED8BA,&H840A956B,&HFBB240F8
   DATA &H3E2483E0,&H4B3E24A0,&H018928C4,&H6217892F,&H9F813FA2,&H47E14FC0,&H3D1356F1,&HED9D9EB7
   DATA &H9A78DA05,&HFB3399CE,&HCCE677CD,&HB3CE6ECC,&H7451CF57,&HDF05877E,&H02F0F2DF,&H0F297204
   DATA &HA39E8435,&HF47BD182,&H9ED67297,&H95727A62,&HC2AD1C62,&HF6E174BD,&HFC52E2CC,&HCDF31E7B
   DATA &H8C1BFE31,&H0530CF3F,&HFC639FC6,&H767F8C33,&H3E117F0C,&H12FE196E,&HFC3551E6,&HC5602C65
   DATA &H88B0E660,&H622FE19A,&HBF86AB19,&H6DB89B82,&H42588BF8,&HFF9CEADD,&HFE69F88E,&HFE8E0AA2
   DATA &HB4151E28,&HB77813DB,&HC0F00F98,&HB1D0D7E2,&H6878BBF8,&HB23C0DF1,&H2DD626F8,&HE2D7443E
   DATA &HC5B1E1EF,&HF8B0D847,&H35213616,&H7DC6DF37,&HBF4CA16C,&H51D38F90,&H988C1126,&H6396662B
   DATA &H92BEE941,&H82D4AECA,&HAE19975A,&H84D3803F,&H78C59C84,&H2FDA3819,&H91FEB274,&HBD99B759
   DATA &H696D74A3,&H9EC47B19,&HD31127F3,&H7BFBB907,&H55F2AF36,&H07F1906A,&H48D709CE,&H28535583
   DATA &H14E43B7B,&H26A6E166,&HC5B6BE73,&H9987436B,&H4B9F9E0D,&H711ECA4F,&H1F8A569A,&H4C4C7F8E
   DATA &HD687B61D,&H169A5E4D,&H2C214CDF,&H606A9A4F,&H39E3E02F,&H19D3C0E2,&HBB2BA06B,&H44260BBA
   DATA &H36837A77,&HD7E5755B,&H8B6D5EB2,&HE2BD64E8,&H5DAFD7B6,&H511EC46B,&H28D99976,&HB2229E54
   DATA &H119E361B,&H7F0D34A1,&H3F556E80,&H54E38DA8,&HB2C43EA2,&H4A6A18AA,&H6D68D8AE,&HDD4B1A0F
   DATA &HB08FCF44,&H9F93723A,&H9BF305C9,&H0940B334,&H77655317,&HCFA7E047,&H1FABC0EE,&HB2C99E6B
   DATA &H6938C69D,&HD2B70456,&H3A4AA7FE,&H9A5571BE,&H72E75DE4,&HC6436D54,&H63C88D17,&H3B1E4C6B
   DATA &H7D6DAFC6,&H2D781D78,&H551D6B43,&H6D631693,&H0CA258D9,&HC2AD8353,&HDBED2EA1,&HE7D494D6
   DATA &HDB5D33AA,&HD774C635,&HB7B60E08,&HEA3C14D4,&HAE70F1F7,&H15274254,&H20DB7E57,&HDF3624DB
   DATA &HD967DE36,&H34FB694A,&H5CF3EAD5,&H3714A95D,&HDFB4B55D,&H8E1B15F5,&HD4C09FBB,&HB2E5593E
   DATA &HAE7965FB,&H1C50DEAF,&H4AADD413,&HCCF2D114,&H3C053CBE,&H2131FA2A,&HA86FB8EF,&H8B5EE49A
   DATA &H8E4EC59B,&H4A212712,&HE24DEF20,&H5CD1131F,&H8F7D3BC9,&HBACE8D52,&H48140715,&HF214BADF
   DATA &H2F5717E5,&HF0A5E631,&H5148A8A5,&HF4DD4296,&HDD4AEDD4,&HA3C4BD17,&HB991EF24,&H2C4E0200
   DATA &HE1EE4B6F,&H5A527069,&H07B674FC,&HDA9EC13F,&H70AF9D0A,&HA12937B6,&H196D4427,&H8BD50886
   DATA &H3422259D,&HE5FA7FC8,&HD1E1D1C3,&HE0E0BBF1,&H7C0FC1DB,&HE4F9FB7F,&H760F5838,&H63EEEE5F
   DATA &HA3,&HDB,&HDD,&H16,&HF8,&H7F,&HEE,&H68,&H18,&HB9
END FUNCTION
```
  


#### SEE ALSO
* [_SNDCLOSE](./_SNDCLOSE.md) , [_SNDPLAY](./_SNDPLAY.md) , [_SNDSTOP](./_SNDSTOP.md)
* [_SNDPAUSE](./_SNDPAUSE.md) , [_SNDLOOP](./_SNDLOOP.md) , [_SNDLIMIT](./_SNDLIMIT.md)
* [_SNDSETPOS](./_SNDSETPOS.md) , [_SNDGETPOS](./_SNDGETPOS.md)
* [_SNDPLAYING](./_SNDPLAYING.md) , [_SNDPAUSED](./_SNDPAUSED.md)
* [_SNDCOPY](./_SNDCOPY.md) , [_SNDPLAYCOPY](./_SNDPLAYCOPY.md)
* [_SNDBAL](./_SNDBAL.md) , [_SNDLEN](./_SNDLEN.md) , [_SNDVOL](./_SNDVOL.md)
* [_SNDPLAYFILE](./_SNDPLAYFILE.md)
* [_SNDRAW](./_SNDRAW.md) , [_SNDRATE](./_SNDRATE.md) , [_SNDRAWLEN](./_SNDRAWLEN.md)
