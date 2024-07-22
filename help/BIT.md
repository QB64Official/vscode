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
    margin: 0 0 1em 0  !important;
    color: #88f !important;
    border: 0 !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
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
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
    margin: 0 !important;
    box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.25) !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}

</style>

## [_BIT](BIT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_BIT)
---
<blockquote>

### The _BIT datatype can return only values of 0 (bit off) and -1 (bit on).

</blockquote>

#### SYNTAX

<blockquote>

`DIM variable AS [[[_UNSIGNED]]] _BIT [* numberofbits ]`

</blockquote>

#### DESCRIPTION

<blockquote>

*  An [_UNSIGNED](UNSIGNED.md) [_BIT](BIT.md)  can hold 0 or 1 instead of 0 and -1, if you set the numberofbits you can hold larger values depending on the number of bits you have set ( [_BIT](BIT.md)  * 8 can hold the same values as [_BYTE](BYTE.md)  for example) and the information below is compromised if setting any number of bits other than 1.
*  If you set the variable to any other number then the least significant bit of that number will be set as the variables number, if the bit is 1 (on) then the variable will be -1 and if the bit is 0 (off) then the variable will be 0.
*  The least significant bit is the last bit on a string of bits (11111) since that bit will only add 1 to the value if set. The most significant bit is the first bit on a string of bits and changes the value more dramatically (significantly) if set on or off.
*  The [_BIT](BIT.md)  datatype can be succesfully used [AS](AS.md)  a Boolean (TRUE or FALSE) and it requires minimal amount of memory (the lowest amount possible actually, one byte can hold 8 bits, if you want to use bits in order to decrease memory usage, use them [AS](AS.md)  arrays [AS](AS.md)  a [_BIT](BIT.md)  variable by itself allocates 4 bytes - [DIM](DIM.md)  bitarray(800) [AS](AS.md)  [_BIT](BIT.md)  uses 100 bytes).
*  When a variable has not been assigned or has no type suffix, the value defaults to [SINGLE](SINGLE.md)  .
*  [_BIT](BIT.md)  is not supported in User Defined TYPES. Use a [_BYTE](BYTE.md)  and assign up to 8 bit values as shown below.


</blockquote>

#### SEE ALSO

<blockquote>

*  &B (binary), [_BYTE](BYTE.md) 
*  [_SHL](SHL.md)  , [_SHR](SHR.md) 
*  [_DEFINE](DEFINE.md)  , [_UNSIGNED](UNSIGNED.md) 
*  [DIM](DIM.md) 
*  Binary , Boolean
*  Variable Types
*  Converting Bytes to Bits

</blockquote>
