## _CRC32
---

### The _CRC32 function returns the Crc-32 checksum of any arbitrary string.

#### SYNTAX

`chksum~& = _CRC32 ( dataString$ )`

#### PARAMETERS
* chksum~& is the [_UNSIGNED](./_UNSIGNED.md) [LONG](./LONG.md) checksum returned (zero (0), if the given dataString$ was empty).
* dataString$ is any literal or variable [STRING](./STRING.md) to build the checksum from.


#### DESCRIPTION
* The Crc-32 checksum algorithm is slower than [_ADLER32](./_ADLER32.md) but is usually more resistant against random collisions, it has the following known properties:
	* All single bit flips will be detected.
	* All double bit flips will be detected.
	* All 32-bit bursts of errors will be detected.
	* Has a hamming distance of 4 for data lengths up to 91706 bytes.
	* Has a hamming distance of 5 for data lengths up to 2974 bytes.
* For more informations have a closer look at Chapters 5-7 here .


#### EXAMPLES
```vb
'this is the correct text
t$ = "QB64 Phoenix Edition"
PRINT "Correct Text: "; t$
PRINT "  Crc-32 Sum: "; RIGHT$("00000000" + HEX$(_CRC32(t$)), 8)
PRINT
'this text differs in just 1 bit from the above, by changing 4 to 5
'ASC("4") = 52 = &B00110100
'ASC("5") = 53 = &B00110101
t$ = "QB65 Phoenix Edition"
PRINT "Mangled Text: "; t$
PRINT "  Crc-32 Sum: "; RIGHT$("00000000" + HEX$(_CRC32(t$)), 8)
END
```
  
```vb
Correct Text: QB64 Phoenix Edition
 Crc-32 Sum: 691EE005

Mangled Text: QB65 Phoenix Edition
 Crc-32 Sum: EEB82B46
```
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* _DEFLATE$ , _INFLATE$
* [_ADLER32](./_ADLER32.md) , _MD5$
