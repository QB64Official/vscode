# $MIDISOUNDFONT

The $MIDISOUNDFONT metacommand enables MIDI support for [_SNDOPEN](_SNDOPEN.md).

**MIDI functionality is current unstable, and requires [$UNSTABLE]($UNSTABLE.md):MIDI to be able to use.**

  

## Syntax

$MIDISOUNDFONT: {DEFAULT|"*Filename*"}
  

## Parameters

* DEFAULT indicates that the soundfont provided by QB64-PE should be used to play MIDI files.
	+ The provided soundfont is about 1MB in size.
* *Filename* can be used to provide your own soundfont for playing MIDI files.
	+ The specified soundfont file is compiled into your program and is not required at runtime.

  

## Description

* The use of this metacommand allows [_SNDOPEN](_SNDOPEN.md) to open MIDI files.
* The selected soundfont is what is used to play all MIDI files.

  

## Availability

* [![none](![none.md)](File:Qb64.png "none")

**none**
* [![v3.2.0](![v3.2.0.md)](File:Qbpe.png "v3.2.0")

**v3.2.0**
* [![Apix.png](![Apix.png.md)](File:Apix.png)
* [![yes](![yes.md)](File:Win.png "yes")

**yes**
* [![yes](![yes.md)](File:Lnx.png "yes")

**yes**
* [![yes](![yes.md)](File:Osx.png "yes")

**yes**

  

## Examples

``` [$UNSTABLE]($UNSTABLE.md):MIDI  ' This line is only allowed when [$UNSTABLE]($UNSTABLE.md):MIDI is used $MIDISOUNDFONT: Default  [_SNDPLAYFILE](_SNDPLAYFILE.md) "example.mid"  
```

``` [$UNSTABLE]($UNSTABLE.md):MIDI  ' Using a custom soundfont rather than the default $MIDISOUNDFONT: "soundfont.sf2"  [_SNDPLAYFILE](_SNDPLAYFILE.md) "example.mid"  
```

  

## See also

* [$UNSTABLE]($UNSTABLE.md)
* [_SNDOPEN](_SNDOPEN.md)

  
