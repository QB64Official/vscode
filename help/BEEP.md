# BEEP

The BEEP statement produces a beep sound through the sound card.

  

## Syntax

BEEP
  

## Description

* BEEP can be placed anywhere to alert the user that there is something to do or an error has occurred.
* **QB64** produces the actual "beep" sound through the PC's sound card, to emulate QBasic's beeping through the [PC speaker](PC speaker.md).

### QBasic/QuickBASIC

* Older programs may attempt to produce a BEEP by printing [CHR$](CHR$.md)(7) to the screen. This is no longer supported in QB64 after **version 1.000**.
	+ You may have to replace instances of PRINT CHR$(7) in older programs to the BEEP statement to maintain the legacy functionality.

  

## See also

* [SOUND](SOUND.md), [PLAY](PLAY.md)
* [_SNDPLAY](_SNDPLAY.md) (play sound files)
* [_SNDRAW](_SNDRAW.md) (play frequency waves)

  
