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

## [_MEMCOPY](MEMCOPY.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MEMCOPY)
---
<blockquote>

### The _MEMCOPY statement copies a block of bytes from one memory offset to another offset in memory.

</blockquote>

#### SYNTAX

<blockquote>

`_MEMCOPY sourceBlock , sourceBlock.OFFSET , sourceBlock.SIZE TO destBlock , destBlock.OFFSET`

</blockquote>

#### PARAMETERS

<blockquote>

*  sourceBlock is the source memory block name created [AS](AS.md)  [_MEM](MEM.md)  .
*  sourceBlock.OFFSET is the dot [_OFFSET](OFFSET.md)  within the source memory block to read from.
*  sourceBlock.SIZE is the total number of bytes to transfer based on actual size.
*  destBlock is the destination [_MEM](MEM.md)  memory block name to transfer data to.
*  destBlock.OFFSET is the dot [_OFFSET](OFFSET.md)  within the dest [_MEM](MEM.md)  memory block to write to.

</blockquote>

#### DESCRIPTION

<blockquote>

*  The dot OFFSET is the memory block's start location in memory. Add bytes to place data further into the block.
*  The dot SIZE is the total byte size of the memory block to transfer. You can transfer all or a portion of the data bytes.
*  The memory block regions may overlap.
*  Always free memory blocks after values have been transferred to variables and are no longer required.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_MEM](MEM.md)  , [_MEM](MEM.md)  (function)
*  [_MEMNEW](MEMNEW.md)  , [_MEMGET](MEMGET.md)  (function)
*  [_MEMIMAGE](MEMIMAGE.md)  , [_MEMELEMENT](MEMELEMENT.md) 
*  [_MEMGET](MEMGET.md)  , [_MEMPUT](MEMPUT.md) 
*  [_MEMFILL](MEMFILL.md)  , [_MEMFREE](MEMFREE.md) 

</blockquote>
