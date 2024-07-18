## $MIDISOUNDFONT
---

### The $MIDISOUNDFONT metacommand enables MIDI support for _SNDOPEN .

#### SYNTAX

`$MIDISOUNDFONT : {DEFAULT|" Filename "}`

#### PARAMETERS
* DEFAULT indicates that the soundfont provided by QB64-PE should be used to play MIDI files.
	* The provided soundfont is about 1MB in size.
* Filename can be used to provide your own soundfont for playing MIDI files.
	* The specified soundfont file is compiled into your program and is not required at runtime.


#### DESCRIPTION
* The use of this metacommand allows [_SNDOPEN](./_SNDOPEN.md) to open MIDI files.
* The selected soundfont is what is used to play all MIDI files.


#### EXAMPLES
```vb
$UNSTABLE:MIDI

' This line is only allowed when $UNSTABLE:MIDI is used
$MIDISOUNDFONT: Default

_SNDPLAYFILE "example.mid"
```
  
```vb
$UNSTABLE:MIDI

' Using a custom soundfont rather than the default
$MIDISOUNDFONT: "soundfont.sf2"

_SNDPLAYFILE "example.mid"
```
  


#### SEE ALSO
* $UNSTABLE
* [_SNDOPEN](./_SNDOPEN.md)
