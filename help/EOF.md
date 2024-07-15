# EOF

The **EOF** function indicates that the end of a file or HTTP response has been reached.

  

## Syntax

*endReached%%* = EOF([#]*fileNumber&*)
*endReached%%* = EOF([#]*httpHandle&*)
  

## Description

* *fileNumber&* or *httpHandle&* is the number of the file or HTTP connected being read. **#** is not required.
	+ *fileNumber&* is a file opened using [OPEN](OPEN.md).
	+ *httpHandle&* is a HTTP connection opened using [_OPENCLIENT](_OPENCLIENT.md).
* Returns 0 until the end of a file. This avoids a file read error.
* Returns -1 (true) at the end of the file.

### Notes

* In files opened with the [INPUT (file mode)](INPUT (file mode).md) "INPUT (file mode)") the **EOF** function returns **true** after any used input function reads a [CHR$](CHR$.md)(26) (Ctrl-Z) from the file, which denotes the "logical" end of a file. This is not necessarily equal to the "physical" end.
	+ Although this subtle behavior is not required nowadays, it is still here for the sake of compatibility. If you're interested in the historic cause of it see [this Article](this Article.md).
	+ To be able to read those files completely use the [BINARY (file mode)](BINARY (file mode).md) instead, which is also much faster when used in conjunction with the regular [INPUT](INPUT.md) "INPUT (file statement)"), [LINE INPUT](LINE INPUT.md) "LINE INPUT (file statement)") and [INPUT$](INPUT$.md) functions.
* [GET](GET.md) can return invalid data at the end of a file. Read **EOF** after a [GET](GET.md) operation to see if the end of the file has been reached and discard the last read if required.
	+ This is not a problem when using [GET](GET.md) with HTTP connections with a variable length string, the string will always only contain valid data or be empty.

  

## Examples

Example 1
Showing the difference between INPUT and BINARY file modes when Ctrl-Z is involved.

``` 'Write a simple test file with Ctrl-Z in the middle. [OPEN](OPEN.md) "test.txt" [FOR](FOR.md) [OUTPUT](OUTPUT.md) [AS](AS.md) #1 [PRINT](PRINT.md) #1, "Hello"; [CHR$](CHR$.md)(26); "World!" [CLOSE](CLOSE.md) #1  'Now read it back, but uhh, this gives us the "Hello" 'only because of the Ctrl-Z. [OPEN](OPEN.md) "test.txt" [FOR](FOR.md) [INPUT](INPUT.md) [AS](AS.md) #1 [WHILE](WHILE.md) [NOT](NOT.md) EOF(1)     [PRINT](PRINT.md) [INPUT$](INPUT$.md)(1, 1); [WEND](WEND.md) [CLOSE](CLOSE.md) #1  [PRINT](PRINT.md): [PRINT](PRINT.md)  'However, it works in the BINARY file mode. [OPEN](OPEN.md) "test.txt" [FOR](FOR.md) [BINARY](BINARY.md) [AS](AS.md) #1 [WHILE](WHILE.md) [NOT](NOT.md) EOF(1)     [PRINT](PRINT.md) [INPUT$](INPUT$.md)(1, 1); [WEND](WEND.md) [CLOSE](CLOSE.md) #1  
```

``` Hello  Hello→World!  
```

  

## See also

* [OPEN](OPEN.md)
* [LOF](LOF.md), [LEN](LEN.md)
* [INPUT (file statement)](INPUT (file statement).md) "INPUT (file statement)")
* [LINE INPUT (file statement)](LINE INPUT (file statement).md) "LINE INPUT (file statement)")
* [GET](GET.md), [PUT](PUT.md)

  
