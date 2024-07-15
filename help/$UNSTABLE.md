# $UNSTABLE

The $UNSTABLE metacommand is used to enable the use of features that have not yet been made a permanent part of the language. Features hidden behind this metacommand may have breaking changes or be removed between releases.

  

## Syntax

$UNSTABLE: {MIDI, HTTP}
  

## Parameters

* The current unstable features are as follows:
	+ **MIDI** allows usage of the [$MIDISOUNDFONT]($MIDISOUNDFONT.md) metacommand
	+ **HTTP** allows opening HTTP connections using [_OPENCLIENT](_OPENCLIENT.md)

  

## Description

* $UNSTABLE exists as a way to allow usage of new language features before they are finalized as part of the language.
* Any languages features hidden behind $UNSTABLE may be changed in breaking ways in the next version of QB64-PE.
* Language features that become a permanent part of the language will no longer require $UNSTABLE to be used.
* More than one $UNSTABLE can be used in a program.

  

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

* MIDI keyword added in **QB64-PE v3.2.0**
* HTTP keyword added in **QB64-PE v3.5.0**

  

## Examples

``` $UNSTABLE:MIDI  ' This line is only allowed when $UNSTABLE:MIDI is used [$MIDISOUNDFONT]($MIDISOUNDFONT.md): Default  [_SNDPLAYFILE](_SNDPLAYFILE.md) "example.mid"  
```

  

## See also

* [$MIDISOUNDFONT]($MIDISOUNDFONT.md)
* [_OPENCLIENT](_OPENCLIENT.md)

  
