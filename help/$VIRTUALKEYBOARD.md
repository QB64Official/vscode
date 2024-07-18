## $VIRTUALKEYBOARD
---

### The ( now deprecated ) $VIRTUALKEYBOARD metacommand did turn the virtual keyboard ON or OFF.

#### SYNTAX

`$VIRTUALKEYBOARD:ON`

#### DESCRIPTION
* This metacommand did not require a comment ' or [REM](./REM.md) before it. There was no space between the metacommand name, the colon and the [ON](./ON.md)/[OFF](./OFF.md) parameter.
* It placed a virtual keyboard on screen, which could be used in touch-enabled devices like Windows tablets.
* Deprecated , in all current versions of QB64 it just generates a warning now, but has no other effect anymore.


#### EXAMPLES
```vb
$VIRTUALKEYBOARD:ON

DO: LOOP UNTIL INKEY$ = CHR$(27)
```
  


#### SEE ALSO
* Metacommand
