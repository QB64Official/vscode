## WAIT
---

### The WAIT statement waits until the value read from an I/O port has certain bits set.

#### SYNTAX

`WAIT port% , andMask% [, xorMask% ]`

#### DESCRIPTION
* The [WAIT](./WAIT.md) statement reads a value from port% using [INP](./INP.md) .
* If xorMask% is specified, the value is [XOR](./XOR.md) 'd with xorMask% . It has the effect of "toggle these bits".
* The value is then [AND](./AND.md) 'd with andMask% . It has the effect of "check if these bits are set".
* If the final value is non-zero, [WAIT](./WAIT.md) returns. Otherwise, another value is read from port% and checked again.
* The [WAIT](./WAIT.md) statement returns immediately if port% is not supported.


#### EXAMPLES
```vb
' Either statement can be used to try to reduce screen flickering.
' If both statements are used, try changing the order.

WAIT &H3DA, 8 ' finishes whenever the screen isn't being written to
WAIT &H3DA, 8, 8 ' finishes whenever the screen is being written to
```
  


#### SEE ALSO
* [INP](./INP.md) , [OUT](./OUT.md)
* Scancodes
