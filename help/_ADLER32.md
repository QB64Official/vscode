## _ADLER32
---

### The _ADLER32 function returns the Adler-32 checksum of any arbitrary string.

#### SYNTAX

`chksum~& = _ADLER32 ( dataString$ )`

#### PARAMETERS
* chksum~& is the [_UNSIGNED](./_UNSIGNED.md) [LONG](./LONG.md) checksum returned (one (1), if the given dataString$ was empty).
* dataString$ is any literal or variable [STRING](./STRING.md) to build the checksum from.


#### DESCRIPTION
* The Adler-32 checksum uses a relative simple but very fast algorithm, it has the following known properties:
	* All single bit flips will be detected.
	* All double bit flips will be detected.
	* Burst errors up to seven bits are always detected.
* For more informations have a closer look at Chapters 5-7 here .


#### EXAMPLES
```vb
'this is the correct text
t$ = "QB64 Phoenix Edition"
PRINT "Correct Text: "; t$
PRINT "Adler-32 Sum: "; RIGHT$("00000000" + HEX$(_ADLER32(t$)), 8)
PRINT
'this text differs in just 1 bit from the above, by changing 4 to 5
'ASC("4") = 52 = &B00110100
'ASC("5") = 53 = &B00110101
t$ = "QB65 Phoenix Edition"
PRINT "Mangled Text: "; t$
PRINT "Adler-32 Sum: "; RIGHT$("00000000" + HEX$(_ADLER32(t$)), 8)
END
```
  
```vb
Correct Text: QB64 Phoenix Edition
Adler-32 Sum: 41F806E5

Mangled Text: QB65 Phoenix Edition
Adler-32 Sum: 420906E6
```
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* _DEFLATE$ , _INFLATE$
* [_CRC32](./_CRC32.md) , _MD5$
