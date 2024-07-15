# $VIRTUALKEYBOARD

The (now deprecated) **$VIRTUALKEYBOARD** [metacommand](metacommand.md) did turn the virtual keyboard ON or OFF.

  

## Syntax

**$VIRTUALKEYBOARD:ON**
**$VIRTUALKEYBOARD:OFF**
  

## Description

* This metacommand did not require a comment *[']('.md)* or [REM](REM.md) before it. There was no space between the metacommand name, the colon and the ON/OFF parameter.
* It placed a virtual keyboard on screen, which could be used in touch-enabled devices like Windows tablets.
* Deprecated, in all current versions of QB64 it just generates a warning now, but has no other effect anymore.

  

## Examples

``` $VIRTUALKEYBOARD:ON  [DO](DO.md): [LOOP](LOOP.md) [UNTIL](UNTIL.md) [INKEY$](INKEY$.md) = [CHR$](CHR$.md)(27)  
```

  

## See also

* [Metacommand](Metacommand.md)

  
