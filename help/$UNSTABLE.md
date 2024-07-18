## $UNSTABLE
---

### The $UNSTABLE metacommand is used to enable the use of features that have not yet been made a permanent part of the language. Features hidden behind this metacommand may have breaking changes or be removed between releases.

#### SYNTAX

`$UNSTABLE : {MIDI, HTTP}`

#### PARAMETERS
* The current unstable features are as follows:
	* MIDI allows usage of the $MIDISOUNDFONT metacommand
	* HTTP allows opening HTTP connections using [_OPENCLIENT](./_OPENCLIENT.md)


#### DESCRIPTION
* $UNSTABLE exists as a way to allow usage of new language features before they are finalized as part of the language.
* Any languages features hidden behind $UNSTABLE may be changed in breaking ways in the next version of QB64-PE.
* Language features that become a permanent part of the language will no longer require $UNSTABLE to be used.
* More than one $UNSTABLE can be used in a program.


#### EXAMPLES
```vb
$UNSTABLE:MIDI

' This line is only allowed when $UNSTABLE:MIDI is used
$MIDISOUNDFONT: Default

_SNDPLAYFILE "example.mid"
```
  


#### SEE ALSO
* $MIDISOUNDFONT
* [_OPENCLIENT](./_OPENCLIENT.md)
