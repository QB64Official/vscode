## LOC
---

### The LOC function returns the status of a serial (COM) port received buffer or the last read/written byte or record position in an open file.

#### SYNTAX

`bytes% = LOC ( fileOrPortNumber% )`

#### PARAMETERS
* fileOrPortNumber% is the number used in the port or file [OPEN](./OPEN.md) [AS](./AS.md) statement.
* Returns 0 if the buffer is empty. Any value above 0 indicates the [COM](./COM.md) port has received data.
* Use it in conjunction with [INPUT](./INPUT.md)$ to get the data bytes received.
* Can also be used to get the last read/written byte or record position in a file. See also [SEEK](./SEEK.md) .


#### EXAMPLES
```vb
OPEN "COM1: 9600,N,8,1,OP0" FOR RANDOM AS #1 LEN = 2048 ' random mode = input and output
 DO: t$ = INKEY$ ' get any transmit keypresses from user
   IF LEN(t$) THEN PRINT #1, t$ ' send keyboard byte to transmit buffer
   bytes% = LOC(1) ' bytes in buffer
   IF bytes% THEN ' check receive buffer for data"
     r$ = INPUT$(bytes%, 1)          ' get bytes in the receive buffer
     PRINT r$; ' print byte strings consecutively to screen"
   END IF
 LOOP UNTIL t$ = CHR$(27) 'escape key exit
CLOSE #
```
  
```vb
OPEN "readme.md" FOR BINARY AS #1

PRINT LOC(1) 'LOC returns 0, as we didn't read something yet
PRINT SEEK(1) 'SEEK otherwise returns 1, as it's the first byte to read

GET #1, , a& 'now let's read a LONG (4 bytes)

PRINT LOC(1) 'now LOC returns 4, the last read byte
PRINT SEEK(1) 'and SEEK returns 5 now, the next byte to read

CLOSE #1
END
```
  
```vb
0
1
4
5
```
  


#### SEE ALSO
* [PRINT](./PRINT.md) , [OPEN](./OPEN.md) [COM](./COM.md) , [PRINT](./PRINT.md) (file statement)
* [SEEK](./SEEK.md) , [SEEK](./SEEK.md) (function)
