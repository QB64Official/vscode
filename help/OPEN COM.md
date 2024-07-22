<style type="text/css">
body {
    background: #00a !important;
    color: #ccc !important;
}
li {
    list-style-type: square !important;
    color: #ccc !important;
}
li::marker {
    color: #77f !important;
}    
hr {
    border-color: #55f !important;
    border-width: 2px !important;
}
h2 {
    color: #fff !important;
    border: 0 !important;
}
h3 {
    color: #cfc !important;
    border: 0 !important;
}
h4 {
    color: #ccc !important;
    border: 0 !important;
}
h5 {
    margin: 0 0 1em 0  !important;
    color: #88f !important;
    border: 0 !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
}
pre > code {
    background: transparent !important;
    margin: 0 !important;
    padding: 0 !important;
    border-radius: inherit !important; 
    border: 0 !important;
}
blockquote {
    border: 0 !important;
    background: transparent !important;
    margin: 0 !important;
    padding: 0 1em !important;
}
pre {
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
    margin: 0 !important;
    box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.25) !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}

</style>

## [OPEN_COM](OPEN_COM.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/OPEN COM)
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

*  Speed (baud rate): 50, 150, 300, 600, 1200, 1800, 2400, 9600 (QBasic's maximum), 19200 or 115200 ( QB64' s maximum).
*  Parity : N (none), E (even), O (odd), S (space) or M (mark). Note: If 8 bits, use parity N for numerical data.
*  Bits = number of bits/byte: Valid numbers: 5, 6, 7 or 8
*  Stopbit = number of stop bits: Valid numbers: 1 , 1.5 or 2
*  Optional [COM](COM.md)  port Options (separated by commas):

</blockquote>

#### DESCRIPTION

<blockquote>

*  If any optional CD, CS, DS or OP timeouts occur the [OPEN](OPEN.md)  will fail or port access will stop. Try 0 to ignore.
*  QB64 can open any [COM](COM.md)  n port number from 1 to 9.
*  See Windows System Device Manager for [COM](COM.md)  port numbers and port addresses &H3F8, &H2F8, &H3E8 and &H2E8.
*  Four commas are required after the Speed, Parity, Bits, and Stopbit, even if none of the Options are used.
*  Other [OPEN](OPEN.md)  options are optional and in any order separated by commas within the [OPEN](OPEN.md)  command string .(See list below)
*  The optional [FOR](FOR.md)  access mode can be [OUTPUT](OUTPUT.md)  , [INPUT](INPUT.md) [OR](OR.md)  [RANDOM](RANDOM.md)  (default mode when no [FOR](FOR.md)  statement is used).
*  Currently, QB64 only supports [OPEN](OPEN.md) [FOR](FOR.md)  [RANDOM](RANDOM.md)  access using the [GET](GET.md)  / [PUT](PUT.md)  commands in BIN mode.
*  Use the BIN option listed below for [BINARY](BINARY.md)  byte mode port access.
*  The [LEN](LEN.md)  statement is also optional. The default record size is 512 bytes when not used.
*  Use the [LOC](LOC.md)  (portnumber) function to determine that there is data in the receive buffer when the value is greater than 0.
*  [OPEN](OPEN.md) [AS](AS.md)  number can use a [FREEFILE](FREEFILE.md)  value. Numbers used by files already [OPEN](OPEN.md)  cannot be used by [OPEN](OPEN.md) [COM](COM.md) .
*  Keyword not supported in Linux or macOS versions


</blockquote>

#### SEE ALSO

<blockquote>

*  [BINARY](BINARY.md)  , [RANDOM](RANDOM.md) 
*  INPUT$ , [PRINT](PRINT.md)  #
*  [LOC](LOC.md)  , INKEY$ , [OPEN](OPEN.md) 
*  [GET](GET.md)  # , [PUT](PUT.md)  #
*  Port Access Libraries
*  Enumerating Windows Ports

</blockquote>
