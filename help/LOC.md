# LOC

The **LOC** function returns the status of a serial (COM) port received buffer or the last read/written byte or record position in an open file.

  

## Syntax

*bytes%* = LOC(*fileOrPortNumber%*)
  

## Parameters

* *fileOrPortNumber%* is the number used in the port or file [OPEN](OPEN.md) AS statement.
* Returns 0 if the buffer is empty. Any value above 0 indicates the COM port has received data.
* Use it in conjunction with [INPUT$](INPUT$.md) to get the data bytes received.
* Can also be used to get the last read/written byte or record position in a file. See also [SEEK](SEEK.md) "SEEK (function)").

### Notes

* Don't confuse the LOC position with the [SEEK](SEEK.md) "SEEK (function)") position !!
	+ **LOC** is the last read or written byte or record prosition.
	+ **SEEK** is the byte or record prosition to read or write next.

  

## Examples

Example 1
Reading and writing from a COM port opened in Basic.

``` [OPEN](OPEN.md) "[COM](COM.md)1: 9600,N,8,1,OP0" [FOR](FOR.md) "FOR (file statement)") [RANDOM](RANDOM.md) [AS](AS.md) #1 [LEN](LEN.md) = 2048 ' random mode = input and output   [DO](DO.md): t$ = [INKEY$](INKEY$.md) ' get any transmit keypresses from user     [IF](IF.md) [LEN](LEN.md)(t$) [THEN](THEN.md) [PRINT](PRINT.md) "PRINT (file statement)") #1, t$ ' send keyboard byte to transmit buffer     bytes% = LOC(1) ' bytes in buffer     [IF](IF.md) bytes% [THEN](THEN.md) ' check receive buffer for data"       r$ = [INPUT$](INPUT$.md)(bytes%, 1)          ' get bytes in the receive buffer       [PRINT](PRINT.md) r$; ' print byte strings consecutively to screen"     [END IF](END IF.md)   [LOOP](LOOP.md) [UNTIL](UNTIL.md) t$ = [CHR$](CHR$.md)(27) 'escape key exit [CLOSE](CLOSE.md) #  
```

---

Example 2
Demonstrate the difference between **LOC** and **SEEK** positions in a file.

``` OPEN "readme.md" FOR BINARY AS #1  PRINT LOC(1) 'LOC returns 0, as we didn't read something yet PRINT SEEK(1) 'SEEK otherwise returns 1, as it's the first byte to read  GET #1, , a& 'now let's read a LONG (4 bytes)  PRINT LOC(1) 'now LOC returns 4, the last read byte PRINT SEEK(1) 'and SEEK returns 5 now, the next byte to read  CLOSE #1 END  
```

``` 0 1 4 5  
```

  

## See also

* [PRINT](PRINT.md), [OPEN COM](OPEN COM.md), [PRINT (file statement)](PRINT (file statement).md) "PRINT (file statement)")
* [SEEK](SEEK.md), [SEEK (function)](SEEK (function).md) "SEEK (function)")

  
