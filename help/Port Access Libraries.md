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

## [Port_Access_Libraries](Port_Access_Libraries.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Port Access Libraries)
---
<blockquote>

### INP and OUT are often used to access port registers, but in QB64 this capability is limited so here are some DLL Libraries:

</blockquote>

#### EXAMPLES

<blockquote>

```vb
DECLARE DYNAMIC LIBRARY "inpout32"
FUNCTION Inp32% (BYVAL PortAddress AS INTEGER)
SUB Out32 (BYVAL PortAddress AS INTEGER, BYVAL Value AS INTEGER)
END DECLARE

baseadd = 888 'base address for most LPT printers is &H378

LPTport (baseadd)
_DELAY 2

Out32 baseadd + 2, 32 'set control bit 6(C5) high to reverse port to read incoming data
_DELAY 2 'sets Data port to 0. may not work on all parallel ports
LPTport (baseadd)

_DELAY 2

Out32 baseadd + 2, 12 'control port is normally set to 12
Out32 baseadd, 227 'any ASCII code value from 0 to 255. Code 227 prints p character

LPTport (baseadd)

SUB LPTport (address)
basedata% = Inp32(address)
PRINT "Data:"; basedata%; CHR$(basedata%) 'read or write
PRINT "Status:"; Inp32(address + 1) 'base + 1 read only status from device!
PRINT "Control:"; Inp32(address + 2) 'base + 2 read or write. 32 or over reverses port
PRINT
END SUB
```
  
<br>```vb
Data: 255
Status: 120
Control: 12

Data: 0
Status: 120
Control: 32

Data: 227 π
Status: 120
Control: 12
```
  
<br>```vb
__________________________________________________________
\                                                        /
\  13  12  11  10   9   8   7   6   5   4   3   2   1  /
\ S4  S5  S7  S6  D7  D6  D5  D4  D3  D2  D1  D0  C0 /
\  25  24  23  22  21  20  19  18  17  16  15  14  /
\ G7  G6  G5  G4  G3  G2  G1  G0  C3  C2  S3  C1 /
\______________________________________________/

DB-25 Female 
10 Ack, 11 Busy, 12 PaperOut, 13 Select, 14 LFeed, 15 Error
```
  
<br>```vb
DECLARE DYNAMIC LIBRARY "inpout32"
FUNCTION Inp32% (BYVAL PortAddress AS INTEGER)
SUB Out32 (BYVAL PortAddress AS INTEGER, BYVAL Value AS INTEGER)
END DECLARE

Baseadd% = &H3F8 'any valid COM port address (see the Windows Hardware COM port Properties)
Out32 Baseadd% + 3, &H80 'set Divisor Latch Access Bit using 128 Hex (LCR)
'Out32 Baseadd%, &H60 '  1200 baud    96   Write DL Low Byte
'Out32 Baseadd%, &H30 '  2400         48
'Out32 Baseadd%, &H18 '  4800         24
Out32 Baseadd%, &HC '      9600         12  Maximum baud rate in QB!
Out32 Baseadd% + 1, &H0   'Write DL High Byte
'Set Base and IER back to normal registers, and set Data requirements
Out32 Baseadd% + 3, &H3 'set 8 bit word(bit0 + bit1=3), 1 Stop Bit(0ff), No Parity(0ff)
'COM should now be set as N, 8, 1 by the LCR. Like an OPEN statement.
Out32 Baseadd% + 2, &H3   'Flush receiver FIFO buffer, enable FIFO (FCR)
DO: x$ = INKEY$
IF x$ = CHR$(27) THEN EXIT DO          'Escape key quits
IF x$ > "" THEN Out32 Baseadd%, ASC(x$)     'Write Transmit buffer data
IF (Inp32(Baseadd% + 5) AND 1) THEN         'Data ready = 1 (LSR)
PRINT CHR$(Inp32(Baseadd%));              'Display Receive buffer data"
END IF
LOOP
```
  
<br>```vb
_______________________________
\                             /
\   5    4    3    2    1   /
\ GND  DTR  TXD  RXD  DCD /
\   9    8    7    6    /
\ RI   CTS  RTS  DSR  /
\___________________/

RS-232 Female (DB-9)
```
  
<br>```vb
Address       DLAB   INP/OUT      Abb.     Register Name

Base + 0      Off     Write        -     Transmitter Hold Buffer
Off     Read         -     Receiver Buffer
On    Read/Write     -     Divisor Latch Low Byte
Base + 1      Off   Read/Write    IER    Interrupt Enable Register
On    Read/Write     -     Divisor Latch High Byte
Base + 2      --    Read Only     IIR    Interrupt ID Register
--    Write Only    FCR    FIFO Control Register
Base + 3      Set   Read/Write    LCR    Line Control Register(DLAB On/Off)
Base + 4      --    Read/Write    MCR    Modem Control Register
Base + 5      --    Read Only     LSR    Line Status Register
Base + 6      --    Read Only     MSR    Modem Status Register"
Base + 7      --    Read/Write     -     Scratch Register (Unused)"
```
  
<br>```vb
Bit #      Bit Value         Interrupt Description
3           8         Enable Modem Status Interrupt
2           4         Enable Receiver Line Status Interrupt
1           2         Enable Transmit Hold Register Empty Interrupt
0           1         Enable Received Data Available Interrupt
```
  
<br>```vb
Bit #          INP Value       Description
7 and 6                     FIFO status
1     1           192         FIFO Enabled
0     1            64         FIFO Enabled but Unusable
0     0          < 64         No FIFO Available
5               32       64 Byte Fifo Enabled (16750 UART)
4                0       Reserved (not used)
3                0       Reserved on 8250 and 16450 UART's
8       16550 UART(or higher) Time-out Pending
2 and 1                     Interrupt Status (Bit value Priority)
1     1             6         Receiver Line Status Interrupt (Highest)
1     0             4         Received Data Available Interrupt
0     1             2         Transmitter Hold Register Empty Inter.
0     0             0         Modem Status Interrupt (Lowest)
0                1       1 = No Interrupt Pending. 0 = Interrupt Pending

< denotes a byte value less than designated INP value
```
  
<br>```vb
Bit #            OUT Value     Description 
7 and 6                       Interrupt Trigger Level
1     1             192         14 Byte Trigger
1     0             128         8 Byte Trigger
0     1              64         4 Byte Trigger
0     0            < 64         1 Byte Trigger
5                 32       Enable 64 Byte FIFO (16750 UART only)
4                  0       Reserved (not used)
3                  8       DMA Mode Select (mode 1 or 2)
2                  4       Clear Transmit FIFO
1                  2       Clear Receive FIFO
0                  1       Enable FIFO's. 0 = Disabled FIFO"

< denotes a byte value less than designated OUT value
```
  
<br>```vb
Bit #         Bit Value      Description
7              128        Divisor Latch Access Bit (set baud rate)
< 128        Access Receive & Transmit buffers & IER
6                0        Set Break Enable. 64 = Break in Receiver TD"
5, 4, 3                      Parity Select
X  X  0             0          No Parity (bit 3 off only)"
0  0  1             8          Odd Parity
0  1  1            24          Even Parity
1  0  1            40          High Parity (Sticky)
1  1  1            56          Low Parity (Sticky)
2                0        One Stop Bit (normal)
4        2 Stop bits(wordlength 6,7,8) or 1.5 (5)"
1 and 0                      Set Word Length
1     1             3          8 Bit Word (normal)
1     0             2          7 Bit Word
0     1             1          6 Bit Word
0     0             0          5 Bit Word

< denotes a byte value less than designated OUT value
```
  
<br>```vb
Speed (BPS)      Divisor    High Byte(to Base + 1)  Low Byte(to Base)
50         2304             &H9  (2304)            &H0    (0)
300          384             &H1  (256)             &H80   (128)
600          192             &H0                    &HC0   (192)
1200           96             &H0                    &H60   (96)
2400           48             &H0                    &H30   (48)
4800           24             &H0                    &H18   (24)
9600           12             &H0                    &HC    (12)
19200            6             &H0                    &H6    (6)
115200            1             &H0                    &H1    (1)
```
  
<br>```vb
BaseAdd% = &H3F8         'use any valid COM base address on your PC
Out32 BaseAdd% + 3, &H80 'set DLAB baud rate divisor bit 7 on with 128 (LCR)
Out32 BaseAdd% + 1, &H0  'set DL High Byte on IE Register
Out32 BaseAdd%, &H60     'set DL Low Byte to 1200 baud (96) on Base Register
Out32 BaseAdd% + 3, &H3  'sets 8 bit Word, 1 Stop Bit, and No Parity (LCR) *
```
  
<br>```vb
Bit #         Bit Value         Description
4              16          LoopBack Mode (Test UART operation)
3               8          Aux Output 2(control by other circuitry)
2               4          Aux Output 1(MIDI, normally disconnected)
1               2          Force Request to Send (RTS)
0               1          Force Data Terminal Ready (DTR)
```
  
<br>```vb
Bit #         INP Value         Description
7              128         Error in Received FIFO
6               64         Empty Data Hold Registers(TD and RD Idle)
5               32         Empty Transmitter Hold Register(TD empty)
4               16         Break Interrupt (RD Word Time Out)
3                8         Framing Error (last bit not a Stop Bit)
2                4         Parity Error
1                2         Overrun Error (cannot read fast enough)
0                1         Data Ready (Receiver ready to be read)
```
  
<br>```vb
Bit #         INP Value         Description
7              128         Carrier Detect (CD)
6               64         Ring Indicator (RI)
5               32         Data Set Ready (DSR)
4               16         Clear To Send (CTS)
3                8         Delta Data Carrier Detect
2                4         Trailing Edge Ring Indicator
1                2         Delta Data Set Ready
0                1         Delta Clear to Send
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  [DECLARE](DECLARE.md) [LIBRARY](LIBRARY.md) 
*  [INP](INP.md)  , [OUT](OUT.md) 
*  Enumerating Windows Ports

</blockquote>
