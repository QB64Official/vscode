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

## [_MEMPUT](MEMPUT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MEMPUT)
---
<blockquote>

### The _MEMPUT statement writes data to a portion of a designated memory block at an OFFSET position.

</blockquote>

#### SYNTAX

<blockquote>

`_MEMPUT memoryBlock , bytePosition , sourceVariable [AS type ]`

</blockquote>

#### PARAMETERS

<blockquote>

*  memoryBlock is a [_MEM](MEM.md)  variable type memory block name created by [_MEMNEW](MEMNEW.md)  or the [_MEM](MEM.md)  function.
*  bytePosition is the memoryBlock . OFFSET start position plus any bytes needed to read specific values.
*  The sourceVariable type designates the size and bytePosition it should be written to. It can be a variable, array or user defined type.
*  bytePosition can be converted [AS](AS.md)  a specific variable type before being written to the memoryBlock [AS](AS.md)  bytes.

</blockquote>

#### DESCRIPTION

<blockquote>

*  The [_MEMPUT](MEMPUT.md)  statement is similar to the [PUT](PUT.md)  file statement, but bytePosition is required.
*  The memoryBlock . OFFSET returns the starting byte position of the block. Add bytes to move into the block.
*  The variable type held in the memory block can determine the next byte position to write a value.
*  [LEN](LEN.md)  can be used to determine the byte size of numerical or user defined Variable Types regardless of the value held.
*  [STRING](STRING.md)  values should be of a defined length. Variable length strings can actually move around in memory and not be found.


</blockquote>

#### EXAMPLES

<blockquote>



##### Example: _MEMPUT can be used just like POKE without DEF SEG .
```vb
DIM o AS _MEM
o = _MEM(d&)
_MEMPUT o, o.OFFSET + 1, 3 AS _UNSIGNED _BYTE  'POKE
v = _MEMGET(o, o.OFFSET + 1, _UNSIGNED _BYTE) 'PEEK
PRINT v 'prints 3
PRINT d& 'print 768 because the 2nd byte of d& has been set to 3 or 3 * 256
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  [_MEMGET](MEMGET.md)  , [_MEMGET](MEMGET.md)  (function)
*  [_MEM](MEM.md)  , [_MEM](MEM.md)  (function)
*  [_MEMIMAGE](MEMIMAGE.md)  , [_MEMNEW](MEMNEW.md) 
*  [_MEMFREE](MEMFREE.md)  , [_MEMCOPY](MEMCOPY.md) 

</blockquote>
