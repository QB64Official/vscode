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

## [_MEMNEW](MEMNEW.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MEMNEW)
---
<blockquote>

### The _MEMNEW function allocates new memory and returns a _MEM memory block referring to it.

</blockquote>

#### SYNTAX

<blockquote>

`memoryBlock = _MEMNEW ( byteSize )`

</blockquote>

#### PARAMETERS

<blockquote>

*  The byteSize parameter is the desired byte size of the memory block based on the variable type it will hold.

</blockquote>

#### DESCRIPTION

<blockquote>

*  The memoryBlock value created holds the elements .OFFSET, .SIZE, . [TYPE](TYPE.md)  and .ELEMENTSIZE.
*  [_MEMNEW](MEMNEW.md)  does not clear the data previously in the memory block it allocates, for speed purposes.
*  To clear previous data from a new memory block, use [_MEMFILL](MEMFILL.md)  with a byte value of 0.
*  When a new memory block is created the memory . [TYPE](TYPE.md)  value will be 0.
*  If the read only memory block .SIZE is 0, the memory block was not created.
*  All values created by memory functions must be freed using [_MEMFREE](MEMFREE.md)  with a valid [_MEM](MEM.md)  variable.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_MEM](MEM.md)  , [_MEMPUT](MEMPUT.md) 
*  [_MEMGET](MEMGET.md)  , [_MEMGET](MEMGET.md)  (function)
*  [_MEMFILL](MEMFILL.md)  , [_MEMFREE](MEMFREE.md) 

</blockquote>
