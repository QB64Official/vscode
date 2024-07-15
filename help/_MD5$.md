# _MD5$

The **_MD5$** function returns the [MD5](MD5.md) hash value of any arbitrary string.

  

## Syntax

*md5hash$* = _MD5$(*dataString$*)
  

## Parameters

* *md5hash$* is the hash value returned as hexadecimal [STRING](STRING.md), if the given *dataString$* was empty the unusual but absolutely correct hash value is:
	+ D41D8CD98F00B204E9800998ECF8427E
* *dataString$* is any literal or variable [STRING](STRING.md) to build the hash value from.

  

## Description

* MD5 can be used as a checksum to verify data integrity against unintentional corruption.
* Historically it was widely used as a cryptographic hash function, however it has been found to suffer from extensive vulnerabilities.
* It remains suitable for other non-cryptographic purposes and may be preferred due to lower computational requirements than more recent Secure Hash Algorithms.

  

## Availability

* [![none](![none.md)](File:Qb64.png "none")

**none**
* [![v3.12.0](![v3.12.0.md)](File:Qbpe.png "v3.12.0")

**v3.12.0**
* [![Apix.png](![Apix.png.md)](File:Apix.png)
* [![yes](![yes.md)](File:Win.png "yes")

**yes**
* [![yes](![yes.md)](File:Lnx.png "yes")

**yes**
* [![yes](![yes.md)](File:Osx.png "yes")

**yes**

  

## Examples

Example
Showing how the MD5 hash value can detect differences in two strings.

``` 'this is the correct text t$ = "QB64 Phoenix Edition" [PRINT](PRINT.md) "Correct Text: "; t$ [PRINT](PRINT.md) "    MD5 hash: "; _MD5$(t$) [PRINT](PRINT.md) 'this text differs in just 1 bit from the above, by changing 4 to 5 'ASC("4") = 52 = &B00110100 'ASC("5") = 53 = &B00110101 t$ = "QB65 Phoenix Edition" [PRINT](PRINT.md) "Mangled Text: "; t$ [PRINT](PRINT.md) "    MD5 hash: "; _MD5$(t$) [END](END.md)  
```

``` Correct Text: QB64 Phoenix Edition     MD5 hash: E512ECA19E9487D7C2F564E848314238  Mangled Text: QB65 Phoenix Edition     MD5 hash: 3EF03E7B0DB46F7D1FA6B9626563C10B  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [_DEFLATE$](_DEFLATE$.md), [_INFLATE$](_INFLATE$.md)
* [_ADLER32](_ADLER32.md), [_CRC32](_CRC32.md)

  
