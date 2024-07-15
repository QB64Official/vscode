# _CRC32

The **_CRC32** function returns the [Crc-32](Crc-32.md) checksum of any arbitrary string.

  

## Syntax

*chksum~&* = _CRC32(*dataString$*)
  

## Parameters

* *chksum~&* is the [_UNSIGNED](_UNSIGNED.md) [LONG](LONG.md) checksum returned (zero (0), if the given *dataString$* was empty).
* *dataString$* is any literal or variable [STRING](STRING.md) to build the checksum from.

  

## Description

* The **Crc-32** checksum algorithm is slower than [_ADLER32](_ADLER32.md) but is usually more resistant against random collisions, it has the following known properties:
	+ All single bit flips will be detected.
	+ All double bit flips will be detected.
	+ All 32-bit bursts of errors will be detected.
	+ Has a hamming distance of 4 for data lengths up to 91706 bytes.
	+ Has a hamming distance of 5 for data lengths up to 2974 bytes.
* For more informations have a closer look at [Chapters 5-7 here](Chapters 5-7 here.md).

  

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
Showing how the Crc-32 checksum can detect differences in two strings.

``` 'this is the correct text t$ = "QB64 Phoenix Edition" [PRINT](PRINT.md) "Correct Text: "; t$ [PRINT](PRINT.md) "  Crc-32 Sum: "; [RIGHT$](RIGHT$.md)("00000000" + [HEX$](HEX$.md)(_CRC32(t$)), 8) [PRINT](PRINT.md) 'this text differs in just 1 bit from the above, by changing 4 to 5 'ASC("4") = 52 = &B00110100 'ASC("5") = 53 = &B00110101 t$ = "QB65 Phoenix Edition" [PRINT](PRINT.md) "Mangled Text: "; t$ [PRINT](PRINT.md) "  Crc-32 Sum: "; [RIGHT$](RIGHT$.md)("00000000" + [HEX$](HEX$.md)(_CRC32(t$)), 8) [END](END.md)  
```

``` Correct Text: QB64 Phoenix Edition   Crc-32 Sum: 691EE005  Mangled Text: QB65 Phoenix Edition   Crc-32 Sum: EEB82B46  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [_DEFLATE$](_DEFLATE$.md), [_INFLATE$](_INFLATE$.md)
* [_ADLER32](_ADLER32.md), [_MD5$](_MD5$.md)

  
