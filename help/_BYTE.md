# _BYTE

A _BYTE variable can hold signed variable values from -128 to 127 (one byte or 8 [_BITs](_BITs.md)). [Unsigned](Unsigned.md) from 0 to 255.

  

## Syntax

[DIM](DIM.md) *byte* [AS](AS.md) [[[_UNSIGNED] _BYTE
  

## Description

* Signed _BYTE values can range from -128 to 127.
* [_UNSIGNED](_UNSIGNED.md) _BYTEs can hold values from 0 to 255. [_UNSIGNED](_UNSIGNED.md) expands the range of positive values.
* Can be defined in a **QB64** [_DEFINE](_DEFINE.md) statement using a starting letter range of variable names.
* Also can be used in a subroutine parameter [AS](AS.md) _BYTE variable definitions.
* Define a byte using the suffix %% after the variable name: *variable%%* = -54
* Define an unsigned byte by adding the suffix ~%% after the variable name: variable~%% = 54
* **When a variable has not been assigned or has no type suffix, the value defaults to [SINGLE](SINGLE.md).**

  

* The **MSB** is the most significant(largest) bit value and **LSB** is the least significant bit of a binary or register memory address value. The order in which the bits are read determines the binary or decimal byte value. There are two common ways to read a byte:

* **"Big-endian"**: MSB is the first bit encountered, decreasing to the LSB as the last bit by position, memory address or time.
* **"Little-endian"**: LSB is the first bit encountered, increasing to the MSB as the last bit by position, memory address or time.

```          **Offset or Position:    0    1   2   3   4   5   6   7      Example: 11110000**                               ----------------------------------             --------     **Big-Endian Bit On Value:**   128  64  32  16   8   4   2   1                 240  **Little-Endian Bit On Value:**    1    2   4   8  16  32  64  128                 15  
```

The big-endian method compares exponents of 2 ^ 7 down to 2 ^ 0 while the little-endian method does the opposite.
  

* [INTEGER](INTEGER.md) values consist of 2 bytes called the **HI** and **LO** bytes. Anytime that the number of binary digits is a multiple of 16 (2bytes, 4 bytes, etc.) and the HI byte's MSB is on(1), the value returned will be negative. Even with [SINGLE](SINGLE.md) or [DOUBLE](DOUBLE.md) values!

```                                  **16 BIT INTEGER OR REGISTER**               **AH (High Byte Bits)                         AL (Low Byte Bits)**    BIT:    15    14   13   12   11   10   9   8  |   7   6    5   4    3    2   1    0           ---------------------------------------|--------------------------------------    HEX:   8000  4000 2000 1000  800 400  200 100 |  80   40  20   10   8    4   2    1  
``` DEC: -32768 16384 8192 4096 2048 1024 512 256 | 128 64 32 16 8 4 2 1 |
 --- |

The HI byte's **MSB** is often called the **sign** bit! When all 16 of the integer binary bits are on, the decimal return is -1.
  

## Examples

How negative assignments affect the _UNSIGNED value returned by a byte (8 bits).

``` [DIM](DIM.md) unsig [AS](AS.md) [_UNSIGNED](_UNSIGNED.md) _BYTE [DIM](DIM.md) sig [AS](AS.md) _BYTE  [CLS](CLS.md) unsig = 1 sig = 1 [PRINT](PRINT.md) "&B00000001 = unsigned & signed are both" + [STR$](STR$.md)(unsig [AND](AND.md) sig)  unsig = 127 sig = 127 [PRINT](PRINT.md) "&B01111111 = unsigned & signed are both" + [STR$](STR$.md)(unsig [AND](AND.md) sig)  unsig = 255 sig = 255 [PRINT](PRINT.md) "&B11111111 = unsigned is" + [STR$](STR$.md)(unsig) + " but signed is " + [STR$](STR$.md)(sig)  unsig = 254 sig = 254 [PRINT](PRINT.md) "&B11111110 = unsigned is" + [STR$](STR$.md)(unsig) + " but signed is " + [STR$](STR$.md)(sig)  unsig = 253 sig = 253 [PRINT](PRINT.md) "&B11111101 = unsigned is" + [STR$](STR$.md)(unsig) + " but signed is " + [STR$](STR$.md)(sig)  [PRINT](PRINT.md) [PRINT](PRINT.md) "The signed value needs the MSB bit for the sign." [PRINT](PRINT.md) "The most significant bit is furthest to the left."  
```

``` &B00000001 = unsigned & signed are both 1 &B01111111 = unsigned & signed are both 127 &B11111111 = unsigned is 255 but signed is -1 &B11111110 = unsigned is 254 but signed is -2 &B11111101 = unsigned is 253 but signed is -3  The signed value needs the MSB bit for the sign. The most significant bit is furthest to the left.  
```

  

## See also

* [_BIT](_BIT.md), [&B](&B.md)
* [_DEFINE](_DEFINE.md), [DIM](DIM.md)
* [_UNSIGNED](_UNSIGNED.md)
* [_SHL](_SHL.md), [_SHR](_SHR.md)
* [Mathematical Operations](Mathematical Operations.md)
* [Screen Memory](Screen Memory.md)
* [Variable Types](Variable Types.md)
* [Converting Bytes to Bits](Converting Bytes to Bits.md)

  
