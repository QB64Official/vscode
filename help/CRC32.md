<style type="text/css">
body {
    background: #00a !important;
    color: #ccc !important;
}
li {
    list-style-type: square !important;
    color: #ccc !important;
}
li::marker {
    color: #77f !important;
}    
hr {
    border-color: #55f !important;
    border-width: 2px !important;
}
h2 {
    color: #fff !important;
    border: 0 !important;
}
h3 {
    color: #cfc !important;
    border: 0 !important;
}
h4 {
    color: #ccc !important;
    border: 0 !important;
}
h5 {
    margin: 0 0 0.5em 0  !important;
    color: #88f !important;
    border: 0 !important;
    font-style: italic !important;
    font-weight: normal !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 4px !important; 
    border: 1px solid #333 !important;
}
pre > code {
    background: transparent !important;
    margin: 0 !important;
    padding: 0 !important;
    border-radius: inherit !important; 
    border: 0 !important;
}
blockquote {
    border: 0 !important;
    background: transparent !important;
    margin: 0 !important;
    padding: 0 1em !important;
}
pre {
    border-radius: 4px !important;
    background: #000 !important;
    border: 1px solid #333 !important;
    margin: 0 !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}
br + pre {
    border-radius: 0 !important;
    border-style: inset !important;
    border-width: 5px !important;
    border-color: #999 !important;
    background-color: #000 !important;
    box-shadow: 0px 10px 3px rgba(0, 0, 0, 0.25) !important;
    margin-top: -1em !important;
}
br + pre::before {
    content: "OUTPUT \A" !important;
    color: #555 !important;
    border-bottom: 1px solid #333;
    font-size: x-small;
    display: block !important;
    padding: 0 3px !important;
    margin: -1em -1em 1em -1em !important;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */    
}
br ~ h5 {
    margin-top: 2em !important;
}
.explanation {
    color: #995 !important;
    /* background-color: rgba(150, 150, 100) !important; */
    border-radius: 10em !important;
    border: 2px #441 dashed !important;
    padding: 8px 32px !important;
    margin-bottom: 4em !important;
    font-size: x-small !important;
}
</style>


## [_CRC32](CRC32.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_CRC32)
---
<blockquote>

### The _CRC32 function returns the Crc-32 checksum of any arbitrary string.

</blockquote>

#### SYNTAX

<blockquote>

`chksum~& = _CRC32 ( dataString$ )`

</blockquote>

#### PARAMETERS

<blockquote>


* chksum~& is the [_UNSIGNED](UNSIGNED.md) [LONG](LONG.md) checksum returned (zero (0), if the given dataString$ was empty).
* dataString$ is any literal or variable [STRING](STRING.md) to build the checksum from.
</blockquote>

#### DESCRIPTION

<blockquote>


* The Crc-32 checksum algorithm is slower than [_ADLER32](ADLER32.md) but is usually more resistant against random collisions, it has the following known properties:
* All single bit flips will be detected.
* All double bit flips will be detected.
* All 32-bit bursts of errors will be detected.
* Has a hamming distance of 4 for data lengths up to 91706 bytes.
* Has a hamming distance of 5 for data lengths up to 2974 bytes.
* For more informations have a closer look at Chapters 5-7 here .

</blockquote>

#### EXAMPLES

<blockquote>

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
  
<br>

```vb
Correct Text: QB64 Phoenix Edition
Crc-32 Sum: 691EE005

Mangled Text: QB65 Phoenix Edition
Crc-32 Sum: EEB82B46
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* [_DEFLATE&dollar;](DEFLATE&dollar;.md) , [_INFLATE&dollar;](INFLATE&dollar;.md)
* [_ADLER32](ADLER32.md) , [_MD5&dollar;](MD5&dollar;.md)
</blockquote>
