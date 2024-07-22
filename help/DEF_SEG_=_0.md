## DEF SEG = 0
---
<blockquote>

### The following DOS BIOS information can be used on Windows 9x machines. Not necessarily XP or NT! Each routine includes the hexadecimal and decimal registers.

</blockquote>

#### SYNTAX

<blockquote>

`DEF SEG = 0 MONITOR INFORMATION ===============================`

</blockquote>

#### EXAMPLES

<blockquote>

```vb
A = INT(1193182 / F)
  H = INT(A / 256)
  L = A - H * 256
  OUT 66, L: OUT 66, H
```
  
```vb
DEF SEG = 0    ' set to PEEK and POKE TIMER
POKE (1132), 0 ' zero Timer ticks
DO
  key = INP(&H60)
LOOP UNTIL PEEK(1132) >= 1 ' until one tick (@ 1/18th sec.) has passed
DEF SEG
```
  


##### Example: DETERMINING THE DATE n DAYS FROM NOW.
```vb
A$ = DATE$: PRINT A$                'IMPORTANT! save original date!
 IF n <= 255 THEN POKE 1136, n
 IF n > 255 THEN
    FOR D = 1 TO n: POKE 1136, 1: NEXT D
 END IF
 laterdate$ = DATE$
 PRINT laterdate$                    'resulting date n days from today
 DATE$ = A$                          'restore original computer date!
```
  


##### Example: Determining the status of a drive motor:
```vb
IF PEEK(1087) AND 128 = 128 THEN PRINT "drive write in progress"
IF PEEK(1087) AND 15  = 0 THEN PRINT "No drive being written to"
```
  


##### Example: Drive$ designated is A, B, C or D, and the letter must be in uppercase.
```vb
IF PEEK(1087) AND 2 ^ (ASC (Drive$) - 65) THEN PRINT "Drive: " Drive$
```
  


##### Example: To turn on drive D for n seconds, where n is at MOST 14! :
```vb
POKE 1088, 18 + 2 * n
OUT 1010, 2 ^ (ASC("D") - 61) + ASC("D") - 53   '1010 = &H3F2
```
  


##### Example: The diskette parameter table consists of 11 bytes
```vb
DEF SEG = 0
D = PEEK(120) + 256 * PEEK(121) ' get value of Diskette

DEF SEG = PEEK(122) + 256 * PEEK(123) 'set to derive the following table
track = (PEEK(D) AND 240) \ 8 'time(milliseconds) required for diskette drive to move track to track
HUT = (PEEK(D) AND 15) * 32 ' head unload time(milliseconds) after read or write has occurred
HLT = (PEEK(D + 1) AND 240) \ 4 'head load time (in milliseconds)
DirMode = (PEEK(D + 1) AND 15) 'Direct Memory Access mode
WT = PEEK(D + 2) 'wait time until turning the motor off
BPS = PEEK(D + 3) 'number of bytes per sector on the disk. FOR v = 0 TO 3: 128 * 2 ^ v bytes per sector,
SPT = PEEK(D + 4) 'number of sectors per track, usually 8 or 9
GapLen = PEEK(D + 5) 'gap length (in bytes) between sectors
DatLen = PEEK(D + 6) 'data length read or written into a sector when sector length not specified
GFLen = PEEK(D + 7) 'gap length used when formatting
FVal = PEEK(D + 8) 'value format operation uses to initialize diskette sectors, usually 256
HST = PEEK(D + 9) 'number of milliseconds for the heads to stabilize
MST = PEEK(D + 10) 'number of eighths of a second for motor startup
DEF SEG
```
  
```vb
Denote the initial port associated with COMn by Pn (Base).
       Normally, the value of P1 is 1016 and the value of P2 is 760.
```
  
```vb
Interrupt enabling:     Base + 1 address
      OUT Pn + 1, 1 enables an interrupt when a character has been received
      OUT Pn + 1, 2 enables an interrupt when a character has been transmitted
      OUT Pn + 1, 4 enables an interrupt when an error has occurred
      OUT Pn + 1, 8 enables an interrupt when the modem status has changed
```
  
```vb
sum of the associated numbers to port Pn + 1.
```
  
```vb
X = INP(Pn + 2).
      IntSet% = X AND 1       'has a value of 1 as long as no interrupts have been
                              'issued because of communications port activity.
```
  
```vb
IntHi% = X AND 6        'is used to identify the highest priority interrupt
                              'pending, as indicated in the table "Interrupt Control
                              'Functions" in the IBM Technical Reference manual.
```
  
```vb
Send: OUT Pn + 3, (d - 5) + (4 * (s - 1) + 8 * p).
```
  
```vb
H = INP(Pn + 3): OUT Pn + 3, H OR 128:
    OUT Pn, DL: OUT Pn + 1, DH: OUT Pn + 3, H.
```
  
```vb
Use values DL = 128 and DH = 1 for 300
    baud, and DL=96 and DH=0 for baud rate 1200.
```
  
```vb
Otherwise, DL = d MOD 256 and DH = d \ 256
    Where d is the divisor number given by the IBM Technical Reference manual
         in the table "Baud Rate at 1.853 MHz."
```
  
```vb
X = INP(Pn + 3)
    OUT Pn + 3, X OR 64:PLAY "MF":SOUND 32767,6: SOUND 32767,1: OUT Pn+3,X.
```
  
```vb
The PLAY and SOUND statements produce a delay of 1/3 second.
```
  
```vb
OUT Pn + 4, 1 to assert that the data terminal is ready (DTR)
     OUT Pn + 4, 2 to raise a request to send (RTS)
     OUT Pn + 4, 16 to perform loopback testing
```
  
```vb
To accomplish several of the above tasks simultaneously, OUT the sum of the
   associated numbers to port Pn + 4.
```
  
```vb
LET X = INP(Pn + 5). Now:
```
  
```vb
idle% = X AND 64  'has a value of 64 if the transmitter shift register is idle
    ready% = X AND 32 'is 32 if the transmitter holding register is ready to
                      'accept a character for transmission
    break% = X AND 16 'has the value 16 if the received data input is held in the
                      'spacing state too long (that is, if a break was received)
    nostop% = X AND 8 'has the value 8 if the received character did not have a
                      'valid stop bit; that is, if a framing error occurred
    noPar% = X AND 4  'has the value 4 if the received character does not have correct
                      'parity
    overR% = X AND 2   'is 2 if the received data destroyed the previous character
                      '(an overrun error)
    RecRead% =  X AND 1 'has value 1 if a character is ready to be read from received
                        'buffer register
```
  
```vb
INP(Pn) will read the ASCII value of a character from the serial port,
```
  
```vb
IF (INP(Pn + 5) AND 1) = 1 THEN char$ = CHR$(INP(Pn))
```
  
```vb
read Base + 5 first:
     IF (INP(Pn + 5) AND 32) = 32 THEN
```
  
```vb
To determine the status of the modem, use Base + 6:
     X = INP(Pn + 6). Then:
       X AND 128 has the value 128 if a Carrier signal has been detected
       X AND 64 is 64 if the modem is ringing
       X AND 32 has a value of 32 if the modem has asserted Data Set Ready
       X AND 16 is 16 if the modem has asserted Clear to Send
       X AND 8 is 8 if the Carrier Detect has changed state
       X AND 4 has the value 4 if the Ring Indicator input has changed from On to Off
       X AND 2 is 2 if the Data Set Ready input has changed state since last read
       X AND 1 has a value of 1 if the Clear to Send input has changed since last read
```
  
```vb
&H463             &H464
```
  
```vb
To check the 6845 mode settings:
          &H465
     PEEK(1125) AND 1 has value 1 if in text mode, width 80
     PEEK(1125) AND 2 has value 2 if in graphics mode
     PEEK(1125) AND 4 has value 4 if color is disabled.
     PEEK(1125) AND 8 has value 8 if video is enabled.
     PEEK(1125) AND 16 has value 16 if in high-resolution graphics mode
     PEEK(1125) AND 32 has value 32 if blinking is enabled
```
  
```vb
&H466
    bg = (PEEK(1126) AND 15)    'background color
    fc = (PEEK(1126) AND 32)/32 'fore color
    bc = PEEK(1126) MOD 16      'border color
```
  
```vb
To turn the speaker on, use: OUT 97,INP(97) OR 3
    Conversely, to turn the speaker off: OUT 97, INP(97) AND 252
```
  
```vb
To turn the cassette motor on: OUT 97,INP(97) AND 247
    To turn the cassette motor off: OUT 97,INP(97) OR 8
```
  
```vb
With 18.2 ticks per second up to 1,533,039.
   Memory locations 1264 to 1279 are not used by either DOS or BASIC.
     Data can be passed from one program to another by POKEing and PEEKING.
```
  
```vb
POKE 1295, 2: SYSTEM.
    Memory location 1295 is set to 2 when the BASIC command SHELL is executed.
```
  
```vb
PEEK(1296) + 256 * PEEK(1297)
```
  
```vb
0 = TEXT MODE, WIDTH 40, COLOR BURST DISABLED.
         1 = TEXT MODE, WIDTH 40, COLOR BURST ENABLED.
         2 = TEXT MODE, WIDTH 80, COLOR BURST DISABLED.
         3 = TEXT MODE, WIDTH 80, COLOR BURST ENABLED.
         4 = MEDIUM RESOLUTION GRAPHICS, COLOR BURST ENABLED.
         5 = MEDIUM RESOLUTION GRAPHICS, COLOR BURST DISABLED.
         6 = HIGH RESOLUTION GRAPHICS, COLOR BURST DISABLED.
         7 = MONOCHROME DISPLAY.
```
  
```vb
"POKE 78,c" SETS MEDIUM RES. TO COLOR c=(1/2/3) OF PALETTE.
```
  
```vb
"POKE 41, c: POKE 91, a: POKE 92, b"
         WHERE: a=STARTING LINE b=ENDING LINE c=NUMBER OF POSITIONS.
       | "POKE 92,0" WILL PREVENT ALL SCROLLING.
       | "POKE 92,25" WILL SCROLL ALL 25 LINES.
```
  
```vb
0 = IF SOFTKEYS NOT DISPLAYED.
          1 = ALWAYS DISPAYED.
          255 = INVOKED BY "KEY ON"
```
  
```vb
BASIC(A) STACK POINTER.
```
  
```vb
ON ERROR GOTO STATEMENT.
```
  
```vb
RECENLTY READ. (READ DATA LOOP)
```
  
```vb
"PEEK (1125) AND 1" WILL = 1 IF ACTIVE CRT IS TEXT MODE WIDTH 80.
         "PEEK (1125) AND 2" WILL = 2 IF ACTIVE CRT IS IN GRAPHICS MODE.
         "PEEK (1125) AND 4" WILL = 4 IF ACTIVE CRT HAS COLOR DISABLED.
         "PEEK (1125) AND 8" WILL = 8 IF ACTIVE CRT HAS NOT BEEN BLANKED.
         "PEEK (1125) AND 16" WILL = 16 IF ACTIVE CRT IS IN HIGH RES. GRAPHICS.
         "PEEK (1125) AND 32" WILL = 32 IF ACTIVE CRT BLINKING IS ENABLED.
```
  
```vb
COMMAND LINE PARAMETER.
```
  
```vb
POINTS TO FILE MOST RECENTLY ACCESSED BY BASIC(A).
```
  
```vb
SHELL TO DOS HAS OCCURRED AND PREVENT ACCESS TO BASIC(A) AGAIN.
```
  
```vb
| "POKE 1782, 85 * c" WILL CHANGE DRAW COLOR TO c.
```
  

</blockquote>

#### SEE ALSO

<blockquote>

* [PEEK](./PEEK.md) , [POKE](./POKE.md)
* [INP](./INP.md) , [OUT](./OUT.md)
* Screen Memory

</blockquote>
