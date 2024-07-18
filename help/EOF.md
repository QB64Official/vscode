## EOF
---

### The EOF function indicates that the end of a file or HTTP response has been reached.

#### SYNTAX

`endReached%% = EOF ([#] fileNumber& )`

#### DESCRIPTION
* fileNumber& or httpHandle& is the number of the file or HTTP connected being read. # is not required.
	* fileNumber& is a file opened using [OPEN](./OPEN.md) .
	* httpHandle& is a HTTP connection opened using [_OPENCLIENT](./_OPENCLIENT.md) .
* Returns 0 until the end of a file. This avoids a file read error.
* Returns -1 (true) at the end of the file.


#### EXAMPLES
```vb
'Write a simple test file with Ctrl-Z in the middle.
OPEN "test.txt" FOR OUTPUT AS #1
PRINT #1, "Hello"; CHR$(26); "World!"
CLOSE #1

'Now read it back, but uhh, this gives us the "Hello"
'only because of the Ctrl-Z.
OPEN "test.txt" FOR INPUT AS #1
WHILE NOT EOF(1)
   PRINT INPUT$(1, 1);
WEND
CLOSE #1

PRINT: PRINT

'However, it works in the BINARY file mode.
OPEN "test.txt" FOR BINARY AS #1
WHILE NOT EOF(1)
   PRINT INPUT$(1, 1);
WEND
CLOSE #1
```
  
```vb
Hello

Hello→World!
```
  


#### SEE ALSO
* [OPEN](./OPEN.md)
* [LOF](./LOF.md) , [LEN](./LEN.md)
* [INPUT](./INPUT.md) (file statement)
* [LINE](./LINE.md) [INPUT](./INPUT.md) (file statement)
* [GET](./GET.md) , [PUT](./PUT.md)
