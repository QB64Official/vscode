## OPEN COM
---
<blockquote>

### The OPEN COM statement is used to access a computer's serial port COM.

</blockquote>

#### SYNTAX

<blockquote>

`OPEN "COMn: Speed , Parity , Bits , Stopbit , [ Options ]" [FOR { RANDOM | BINARY | OUTPUT | INPUT }] AS # P [LEN = byteSize ]`

</blockquote>

#### PARAMETERS

<blockquote>

* Speed (baud rate): 50, 150, 300, 600, 1200, 1800, 2400, 9600 (QBasic's maximum), 19200 or 115200 ( QB64' s maximum).
* Parity : N (none), E (even), O (odd), S (space) or M (mark). Note: If 8 bits, use parity N for numerical data.
* Bits = number of bits/byte: Valid numbers: 5, 6, 7 or 8
* Stopbit = number of stop bits: Valid numbers: 1 , 1.5 or 2
* Optional [COM](./COM.md) port Options (separated by commas):

</blockquote>

#### DESCRIPTION

<blockquote>

* If any optional CD, CS, DS or OP timeouts occur the [OPEN](./OPEN.md) will fail or port access will stop. Try 0 to ignore.
* QB64 can open any [COM](./COM.md) n port number from 1 to 9.
* See Windows System Device Manager for [COM](./COM.md) port numbers and port addresses &H3F8, &H2F8, &H3E8 and &H2E8.
* Four commas are required after the Speed, Parity, Bits, and Stopbit, even if none of the Options are used.
* Other [OPEN](./OPEN.md) options are optional and in any order separated by commas within the [OPEN](./OPEN.md) command string .(See list below)
* The optional [FOR](./FOR.md) access mode can be [OUTPUT](./OUTPUT.md) , [INPUT](./INPUT.md) or [RANDOM](./RANDOM.md) (default mode when no [FOR](./FOR.md) statement is used).
* Currently, QB64 only supports [OPEN](./OPEN.md) [FOR](./FOR.md) [RANDOM](./RANDOM.md) access using the [GET](./GET.md) / [PUT](./PUT.md) commands in BIN mode.
* Use the BIN option listed below for [BINARY](./BINARY.md) byte mode port access.
* The [LEN](./LEN.md) statement is also optional. The default record size is 512 bytes when not used.
* Use the [LOC](./LOC.md) (portnumber) function to determine that there is data in the receive buffer when the value is greater than 0.
* [OPEN](./OPEN.md) [AS](./AS.md) number can use a [FREEFILE](./FREEFILE.md) value. Numbers used by files already open cannot be used by [OPEN](./OPEN.md) [COM](./COM.md).
* Keyword not supported in Linux or macOS versions


</blockquote>

#### SEE ALSO

<blockquote>

* [BINARY](./BINARY.md) , [RANDOM](./RANDOM.md)
* [INPUT](./INPUT.md)$ , [PRINT](./PRINT.md) #
* [LOC](./LOC.md) , INKEY$ , [OPEN](./OPEN.md)
* [GET](./GET.md) # , [PUT](./PUT.md) #
* Port Access Libraries
* Enumerating Windows Ports

</blockquote>
