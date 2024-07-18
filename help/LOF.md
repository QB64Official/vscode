## LOF
---

### The LOF function is used to find the length of an OPEN file in bytes, or content length of an HTTP response.

#### SYNTAX

`totalBytes& = LOF ([#] fileNumber )`

#### DESCRIPTION
* For regular OPENed files:
	* [LOF](./LOF.md) returns the number of bytes in an OPENed designated fileNumber . File is empty if it returns 0.
	* fileNumber is the number of the opened file. # is not required.
	* Often used to determine the number of records in a [RANDOM](./RANDOM.md) access file.
	* Can also be used to avoid reading an empty file, which would create an error.
	* [LOF](./LOF.md) in QB64 can return up to 9 GB (9,223,372,036 bytes) file sizes.
* For HTTP handles opened using [_OPENCLIENT](./_OPENCLIENT.md) :
	* [LOF](./LOF.md) returns the length listed in the Content-Length header of the HTTP response.
	* If no Content-Length header was provided on the HTTP response, then [LOF](./LOF.md) return -1


#### EXAMPLES
```vb
OPEN file$ FOR RANDOM AS #1 LEN = LEN(Type_variable)
 NumRecords% = LOF(1) \ RecordLEN%
```
  
```vb
$UNSTABLE:HTTP
h& = _OPENCLIENT("HTTP:https://qb64phoenix.com")
PRINT LOF(h&)
```
  


#### SEE ALSO
* [LEN](./LEN.md) , [EOF](./EOF.md) , [BINARY](./BINARY.md) , [RANDOM](./RANDOM.md) , [TYPE](./TYPE.md)
