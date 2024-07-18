## SEEK
---

### The SEEK statement sets the byte or record position in a file for the next read or write.

#### SYNTAX

`SEEK filenumber& , position`

#### PARAMETERS
* filenumber& must be the file number that is [OPEN](./OPEN.md) and being read or written to.
* position is a byte in [BINARY](./BINARY.md) or sequencial files created in [OUTPUT](./OUTPUT.md) , [APPEND](./APPEND.md) or [INPUT](./INPUT.md) modes. The first byte = 1.
* position is the record in [RANDOM](./RANDOM.md) files to read or write. Records can hold more than one variable defined in a [TYPE](./TYPE.md) .
* Since the first [SEEK](./SEEK.md) file position is 1 it may require adding one to an offset value when documentation uses that position as 0.
* After a [SEEK](./SEEK.md) statement, the next file operation starts at that [SEEK](./SEEK.md) byte position.
* The [SEEK](./SEEK.md) statement can work with the [SEEK](./SEEK.md) (function) to move around in a file.


#### EXAMPLES
```vb
SEEK 1, SEEK(1) + 1
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
* [SEEK](./SEEK.md) (function) , [LOC](./LOC.md)
* [GET](./GET.md) , [PUT](./PUT.md)
