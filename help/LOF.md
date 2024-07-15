# LOF

The **LOF** function is used to find the length of an [OPEN](OPEN.md) file in bytes, or content length of an HTTP response.

  

## Syntax

*totalBytes&* = LOF([#]*fileNumber*)
*totalBytes&* = LOF([#]*httpHandle*)
  

## Description

* For regular [OPENed](OPENed.md) files:
	+ LOF returns the number of bytes in an [OPENed](OPENed.md) designated *fileNumber*. File is empty if it returns 0.
	+ *fileNumber* is the number of the opened file. **#** is not required.
	+ Often used to determine the number of records in a [RANDOM](RANDOM.md) access file.
	+ Can also be used to avoid reading an empty file, which would create an error.
	+ LOF in **QB64** can return up to 9 GB (9,223,372,036 bytes) file sizes.

* For HTTP handles opened using [_OPENCLIENT](_OPENCLIENT.md):
	+ LOF returns the length listed in the Content-Length header of the HTTP response.
	+ If no Content-Length header was provided on the HTTP response, then LOF return -1

  

## Examples

Example
Finding the number of records in a RANDOM file using a [TYPE](TYPE.md) variable.

```   [OPEN](OPEN.md) file$ [FOR](FOR.md) [RANDOM](RANDOM.md) [AS](AS.md) #1 [LEN](LEN.md) = [LEN](LEN.md)(Type_variable)   NumRecords% = LOF(1) \ RecordLEN%  
```

---

Example
Reading the Content length of an HTTP response

``` [$UNSTABLE]($UNSTABLE.md):HTTP h& = [_OPENCLIENT](_OPENCLIENT.md)("HTTP:https://qb64phoenix.com") [PRINT](PRINT.md) LOF(h&)  
```

  

## See also

* [LEN](LEN.md), [EOF](EOF.md), [BINARY](BINARY.md), [RANDOM](RANDOM.md), [TYPE](TYPE.md)

  
